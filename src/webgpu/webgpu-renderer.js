/**
 * WebGPU Renderer for Parcel Panic
 * High-performance rendering system using WebGPU compute shaders and modern GPU features
 */

export class WebGPURenderer {
  constructor(canvas, config) {
    this.canvas = canvas;
    this.config = config;
    this.device = null;
    this.context = null;
    this.queue = null;
    this.commandEncoder = null;
    this.renderPass = null;
    
    // Rendering state
    this.width = 0;
    this.height = 0;
    this.aspectRatio = 1;
    this.viewMatrix = new Float32Array(16);
    this.projectionMatrix = new Float32Array(16);
    
    // GPU resources
    this.uniformBuffer = null;
    this.vertexBuffer = null;
    this.indexBuffer = null;
    this.texture = null;
    this.sampler = null;
    
    // Shader modules
    this.vertexShader = null;
    this.fragmentShader = null;
    this.computeShader = null;
    
    // Render pipeline
    this.renderPipeline = null;
    this.computePipeline = null;
    this.bindGroup = null;
    
    // Instanced rendering for houses
    this.houseInstances = [];
    this.houseInstanceBuffer = null;
    this.maxHouses = config.MAX_HOUSES || 12;
    
    // Route rendering
    this.routePoints = [];
    this.routeBuffer = null;
    this.routePipeline = null;
    
    // Performance tracking
    this.frameCount = 0;
    this.lastFrameTime = 0;
    this.fps = 60;
  }

  async initialize() {
    try {
      // Check WebGPU support
      if (!navigator.gpu) {
        throw new Error('WebGPU not supported');
      }

      // Request adapter and device
      const adapter = await navigator.gpu.requestAdapter({
        powerPreference: 'high-performance',
        forceFallbackAdapter: false
      });

      if (!adapter) {
        throw new Error('No WebGPU adapter found');
      }

      this.device = await adapter.requestDevice({
        requiredFeatures: ['timestamp-query'],
        requiredLimits: {
          maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
          maxBufferSize: adapter.limits.maxBufferSize,
        }
      });

      this.queue = this.device.queue;
      this.context = this.canvas.getContext('webgpu');
      
      if (!this.context) {
        throw new Error('WebGPU context not available');
      }

      // Configure canvas
      const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
      this.context.configure({
        device: this.device,
        format: canvasFormat,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
        alphaMode: 'opaque'
      });

      await this.createShaders();
      await this.createBuffers();
      await this.createPipelines();
      
      this.setupResizeObserver();
      
      console.log('WebGPU renderer initialized successfully');
      return true;
      
    } catch (error) {
      console.error('Failed to initialize WebGPU renderer:', error);
      return false;
    }
  }

  async createShaders() {
    // Vertex shader for 3D objects
    this.vertexShader = this.device.createShaderModule({
      code: `
        struct Uniforms {
          viewMatrix: mat4x4<f32>,
          projectionMatrix: mat4x4<f32>,
          time: f32,
          _padding: f32,
        }
        
        struct VertexOutput {
          @builtin(position) position: vec4<f32>,
          @location(0) color: vec3<f32>,
          @location(1) uv: vec2<f32>,
        }
        
        struct VertexInput {
          @location(0) position: vec3<f32>,
          @location(1) color: vec3<f32>,
          @location(2) uv: vec2<f32>,
        }
        
        @group(0) @binding(0) var<uniform> uniforms: Uniforms;
        
        @vertex
        fn vs_main(input: VertexInput) -> VertexOutput {
          var output: VertexOutput;
          let worldPos = vec4<f32>(input.position, 1.0);
          let viewPos = uniforms.viewMatrix * worldPos;
          output.position = uniforms.projectionMatrix * viewPos;
          output.color = input.color;
          output.uv = input.uv;
          return output;
        }
      `
    });

    // Fragment shader
    this.fragmentShader = this.device.createShaderModule({
      code: `
        struct FragmentOutput {
          @location(0) color: vec4<f32>,
        }
        
        @fragment
        fn fs_main(@location(0) color: vec3<f32>, @location(1) uv: vec2<f32>) -> FragmentOutput {
          var output: FragmentOutput;
          output.color = vec4<f32>(color, 1.0);
          return output;
        }
      `
    });

    // Compute shader for route optimization and house management
    this.computeShader = this.device.createShaderModule({
      code: `
        struct HouseInstance {
          position: vec3<f32>,
          scale: f32,
          color: vec3<f32>,
          timer: f32,
          active: f32,
        }
        
        struct RoutePoint {
          position: vec3<f32>,
          color: vec3<f32>,
        }
        
        @group(0) @binding(0) var<storage, read_write> houses: array<HouseInstance>;
        @group(0) @binding(1) var<storage, read_write> route: array<RoutePoint>;
        @group(0) @binding(2) var<uniform> params: Uniforms;
        
        struct Uniforms {
          deltaTime: f32,
          truckPosition: vec3<f32>,
          _padding: f32,
        }
        
        @compute @workgroup_size(64)
        fn cs_main(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&houses)) { return; }
          
          var house = &houses[index];
          if (house.active < 0.5) { return; }
          
          // Update house timer
          house.timer = house.timer - params.deltaTime;
          
          // Update house color based on timer
          let timerRatio = house.timer / 25.0; // Assuming 25 second max timer
          if (timerRatio > 0.5) {
            house.color = mix(vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0), (1.0 - timerRatio) * 2.0);
          } else {
            house.color = mix(vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 0.0, 0.0), (0.5 - timerRatio) * 2.0);
          }
          
          // Check for delivery
          let distance = length(house.position - params.truckPosition);
          if (distance < 2.0) {
            house.timer = 25.0; // Reset timer
            house.color = vec3<f32>(0.0, 1.0, 0.0);
          }
        }
      `
    });
  }

  async createBuffers() {
    // Uniform buffer for camera matrices and time
    this.uniformBuffer = this.device.createBuffer({
      size: 16 * 4 * 2 + 8, // 2 mat4x4 + time + padding
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    // House instance buffer for instanced rendering
    this.houseInstanceBuffer = this.device.createBuffer({
      size: this.maxHouses * 8 * 4, // position(3) + scale(1) + color(3) + timer(1)
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Route buffer for line rendering
    this.routeBuffer = this.device.createBuffer({
      size: 2048 * 6 * 4, // Max 2048 points * position(3) + color(3)
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });

    // Create basic geometry buffers
    await this.createGeometryBuffers();
  }

  async createGeometryBuffers() {
    // Create truck geometry
    const truckVertices = new Float32Array([
      // Truck base
      -1.6, -0.6, -1.0,  1.0, 0.8, 0.6,  0.0, 0.0,
       1.6, -0.6, -1.0,  1.0, 0.8, 0.6,  1.0, 0.0,
       1.6, -0.6,  1.0,  1.0, 0.8, 0.6,  1.0, 1.0,
      -1.6, -0.6,  1.0,  1.0, 0.8, 0.6,  0.0, 1.0,
      
      // Truck cab
      -0.7, -0.65, -0.9,  1.0, 0.6, 0.7,  0.0, 0.0,
       0.7, -0.65, -0.9,  1.0, 0.6, 0.7,  1.0, 0.0,
       0.7, -0.65,  0.9,  1.0, 0.6, 0.7,  1.0, 1.0,
      -0.7, -0.65,  0.9,  1.0, 0.6, 0.7,  0.0, 1.0,
    ]);

    this.vertexBuffer = this.device.createBuffer({
      size: truckVertices.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    this.queue.writeBuffer(this.vertexBuffer, 0, truckVertices);

    // Create house geometry
    const houseVertices = new Float32Array([
      // House body (cylinder approximation)
      -1.3, -0.75, -1.3,  0.4, 0.8, 0.8,  0.0, 0.0,
       1.3, -0.75, -1.3,  0.4, 0.8, 0.8,  1.0, 0.0,
       1.3, -0.75,  1.3,  0.4, 0.8, 0.8,  1.0, 1.0,
      -1.3, -0.75,  1.3,  0.4, 0.8, 0.8,  0.0, 1.0,
      
      // House roof
      -1.45, -0.2, -1.45,  0.9, 0.5, 0.7,  0.0, 0.0,
       1.45, -0.2, -1.45,  0.9, 0.5, 0.7,  1.0, 0.0,
       1.45, -0.2,  1.45,  0.9, 0.5, 0.7,  1.0, 1.0,
      -1.45, -0.2,  1.45,  0.9, 0.5, 0.7,  0.0, 1.0,
    ]);

    this.houseVertexBuffer = this.device.createBuffer({
      size: houseVertices.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    this.queue.writeBuffer(this.houseVertexBuffer, 0, houseVertices);
  }

  async createPipelines() {
    // Create render pipeline for 3D objects
    this.renderPipeline = this.device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        module: this.vertexShader,
        entryPoint: 'vs_main',
        buffers: [{
          arrayStride: 8 * 4, // position(3) + color(3) + uv(2)
          attributes: [
            { shaderLocation: 0, offset: 0, format: 'float32x3' },
            { shaderLocation: 1, offset: 12, format: 'float32x3' },
            { shaderLocation: 2, offset: 24, format: 'float32x2' },
          ]
        }]
      },
      fragment: {
        module: this.fragmentShader,
        entryPoint: 'fs_main',
        targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
      },
      primitive: {
        topology: 'triangle-list',
        cullMode: 'back'
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus'
      }
    });

    // Create compute pipeline for house updates
    this.computePipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.computeShader,
        entryPoint: 'cs_main'
      }
    });

    // Create bind group
    this.bindGroup = this.device.createBindGroup({
      layout: this.renderPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.uniformBuffer } },
        { binding: 1, resource: { buffer: this.houseInstanceBuffer } },
        { binding: 2, resource: { buffer: this.routeBuffer } }
      ]
    });
  }

  setupResizeObserver() {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        this.resize(width, height);
      }
    });
    resizeObserver.observe(this.canvas);
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.aspectRatio = width / height;
    this.updateProjectionMatrix();
  }

  updateProjectionMatrix() {
    // Orthographic projection for top-down view
    const frustumSize = this.config.WORLD_SIZE * 0.75;
    const left = (-frustumSize * this.aspectRatio) / 2;
    const right = (frustumSize * this.aspectRatio) / 2;
    const top = frustumSize / 2;
    const bottom = -frustumSize / 2;
    const near = -200;
    const far = 400;

    // Create orthographic projection matrix
    const lr = 1 / (right - left);
    const bt = 1 / (top - bottom);
    const nf = 1 / (near - far);

    this.projectionMatrix.set([
      2 * lr, 0, 0, 0,
      0, 2 * bt, 0, 0,
      0, 0, 2 * nf, 0,
      -(right + left) * lr, -(top + bottom) * bt, -(near + far) * nf, 1
    ]);
  }

  updateViewMatrix(cameraPosition, cameraTarget) {
    // Create view matrix (simplified for top-down view)
    const eye = cameraPosition;
    const center = cameraTarget;
    const up = [0, 1, 0];

    // Calculate view matrix
    const zAxis = this.normalize([eye[0] - center[0], eye[1] - center[1], eye[2] - center[2]]);
    const xAxis = this.normalize(this.cross(up, zAxis));
    const yAxis = this.cross(zAxis, xAxis);

    this.viewMatrix.set([
      xAxis[0], yAxis[0], zAxis[0], 0,
      xAxis[1], yAxis[1], zAxis[1], 0,
      xAxis[2], yAxis[2], zAxis[2], 0,
      -this.dot(xAxis, eye), -this.dot(yAxis, eye), -this.dot(zAxis, eye), 1
    ]);
  }

  // Utility functions for matrix math
  normalize(v) {
    const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    return [v[0] / length, v[1] / length, v[2] / length];
  }

  cross(a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0]
    ];
  }

  dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  updateUniforms(time, cameraPosition, cameraTarget) {
    this.updateViewMatrix(cameraPosition, cameraTarget);
    
    const uniformData = new Float32Array(16 * 2 + 2);
    uniformData.set(this.viewMatrix, 0);
    uniformData.set(this.projectionMatrix, 16);
    uniformData[32] = time;
    uniformData[33] = 0; // padding

    this.queue.writeBuffer(this.uniformBuffer, 0, uniformData);
  }

  updateHouses(houses) {
    const instanceData = new Float32Array(this.maxHouses * 8);
    
    for (let i = 0; i < houses.length && i < this.maxHouses; i++) {
      const house = houses[i];
      const offset = i * 8;
      
      instanceData[offset + 0] = house.position.x;
      instanceData[offset + 1] = house.position.y;
      instanceData[offset + 2] = house.position.z;
      instanceData[offset + 3] = house.scale || 1.0;
      instanceData[offset + 4] = house.color.r;
      instanceData[offset + 5] = house.color.g;
      instanceData[offset + 6] = house.color.b;
      instanceData[offset + 7] = house.timer || 0;
    }

    this.queue.writeBuffer(this.houseInstanceBuffer, 0, instanceData);
  }

  updateRoute(routePoints) {
    const routeData = new Float32Array(routePoints.length * 6);
    
    for (let i = 0; i < routePoints.length; i++) {
      const point = routePoints[i];
      const offset = i * 6;
      
      routeData[offset + 0] = point.position.x;
      routeData[offset + 1] = point.position.y;
      routeData[offset + 2] = point.position.z;
      routeData[offset + 3] = point.color.r;
      routeData[offset + 4] = point.color.g;
      routeData[offset + 5] = point.color.b;
    }

    this.queue.writeBuffer(this.routeBuffer, 0, routeData);
  }

  beginFrame() {
    this.commandEncoder = this.device.createCommandEncoder();
  }

  endFrame() {
    if (this.commandEncoder) {
      this.queue.submit([this.commandEncoder.finish()]);
      this.commandEncoder = null;
    }
  }

  render(time, cameraPosition, cameraTarget, houses, routePoints) {
    if (!this.commandEncoder) {
      this.beginFrame();
    }

    // Update uniforms
    this.updateUniforms(time, cameraPosition, cameraTarget);
    
    // Update house instances
    this.updateHouses(houses);
    
    // Update route
    this.updateRoute(routePoints);

    // Get current texture view
    const textureView = this.context.getCurrentTexture().createView();

    // Create render pass
    this.renderPass = this.commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: textureView,
        clearValue: { r: 0.1, g: 0.1, b: 0.15, a: 1.0 },
        loadOp: 'clear',
        storeOp: 'store'
      }]
    });

    // Set pipeline and bind group
    this.renderPass.setPipeline(this.renderPipeline);
    this.renderPass.setBindGroup(0, this.bindGroup);

    // Render houses (instanced)
    if (houses.length > 0) {
      this.renderPass.setVertexBuffer(0, this.houseVertexBuffer);
      this.renderPass.setVertexBuffer(1, this.houseInstanceBuffer);
      this.renderPass.draw(8, houses.length); // 8 vertices per house
    }

    // Render truck
    this.renderPass.setVertexBuffer(0, this.vertexBuffer);
    this.renderPass.draw(8); // 8 vertices for truck

    // Render route
    if (routePoints.length > 0) {
      this.renderPass.setVertexBuffer(0, this.routeBuffer);
      this.renderPass.draw(routePoints.length);
    }

    this.renderPass.end();
  }

  // Compute shader dispatch for house updates
  dispatchHouseUpdates(deltaTime, truckPosition) {
    if (!this.commandEncoder) {
      this.beginFrame();
    }

    const computePass = this.commandEncoder.beginComputePass();
    computePass.setPipeline(this.computePipeline);
    computePass.setBindGroup(0, this.bindGroup);
    
    // Update compute uniforms
    const computeUniforms = new Float32Array([deltaTime, truckPosition.x, truckPosition.y, truckPosition.z]);
    this.queue.writeBuffer(this.uniformBuffer, 16 * 4 * 2, computeUniforms);
    
    const workgroupCount = Math.ceil(this.maxHouses / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
  }

  // Performance monitoring
  getPerformanceStats() {
    const now = performance.now();
    this.frameCount++;
    
    if (now - this.lastFrameTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastFrameTime = now;
    }
    
    return {
      fps: this.fps,
      frameCount: this.frameCount
    };
  }

  // Cleanup
  destroy() {
    if (this.uniformBuffer) this.uniformBuffer.destroy();
    if (this.vertexBuffer) this.vertexBuffer.destroy();
    if (this.houseInstanceBuffer) this.houseInstanceBuffer.destroy();
    if (this.routeBuffer) this.routeBuffer.destroy();
    if (this.houseVertexBuffer) this.houseVertexBuffer.destroy();
  }
}

