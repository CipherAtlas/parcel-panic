/**
 * WebGPU Compute Shaders for Parcel Panic
 * High-performance compute operations for route optimization, collision detection, and game logic
 */

export class WebGPUCompute {
  constructor(device) {
    this.device = device;
    this.queue = device.queue;
    
    // Compute pipelines
    this.routeOptimizationPipeline = null;
    this.collisionDetectionPipeline = null;
    this.houseManagementPipeline = null;
    this.particleSystemPipeline = null;
    
    // Buffers
    this.routeBuffer = null;
    this.houseBuffer = null;
    this.collisionBuffer = null;
    this.particleBuffer = null;
    
    // Bind groups
    this.routeBindGroup = null;
    this.houseBindGroup = null;
    this.collisionBindGroup = null;
    this.particleBindGroup = null;
    
    this.initialized = false;
  }

  async initialize() {
    try {
      await this.createComputeShaders();
      await this.createBuffers();
      await this.createPipelines();
      await this.createBindGroups();
      
      this.initialized = true;
      console.log('WebGPU compute system initialized');
      return true;
    } catch (error) {
      console.error('Failed to initialize WebGPU compute system:', error);
      return false;
    }
  }

  async createComputeShaders() {
    // Route optimization compute shader
    this.routeOptimizationShader = this.device.createShaderModule({
      code: `
        struct RoutePoint {
          position: vec3<f32>,
          color: vec3<f32>,
          active: f32,
        }
        
        struct OptimizationParams {
          truckPosition: vec3<f32>,
          targetHouses: array<vec3<f32>, 12>,
          houseCount: u32,
          optimizationLevel: f32,
          deltaTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> routePoints: array<RoutePoint>;
        @group(0) @binding(1) var<uniform> params: OptimizationParams;
        
        // TSP (Traveling Salesman Problem) optimization using GPU
        fn calculateDistance(a: vec3<f32>, b: vec3<f32>) -> f32 {
          return length(a - b);
        }
        
        fn optimizeRouteOrder(points: ptr<function, array<RoutePoint, 256>>, count: u32) {
          // Simple nearest neighbor optimization
          for (var i: u32 = 0; i < count - 1; i++) {
            var bestDistance = 1000000.0;
            var bestIndex = i + 1;
            
            for (var j: u32 = i + 1; j < count; j++) {
              let distance = calculateDistance((*points)[i].position, (*points)[j].position);
              if (distance < bestDistance) {
                bestDistance = distance;
                bestIndex = j;
              }
            }
            
            // Swap if better option found
            if (bestIndex != i + 1) {
              let temp = (*points)[i + 1];
              (*points)[i + 1] = (*points)[bestIndex];
              (*points)[bestIndex] = temp;
            }
          }
        }
        
        @compute @workgroup_size(64)
        fn cs_route_optimization(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&routePoints)) { return; }
          
          var point = &routePoints[index];
          if (point.active < 0.5) { return; }
          
          // Update route point color based on distance to truck
          let distanceToTruck = calculateDistance(point.position, params.truckPosition);
          let colorIntensity = 1.0 - clamp(distanceToTruck / 50.0, 0.0, 1.0);
          
          point.color = vec3<f32>(0.4 + colorIntensity * 0.6, 0.8 + colorIntensity * 0.2, 1.0);
        }
      `
    });

    // Collision detection compute shader
    this.collisionDetectionShader = this.device.createShaderModule({
      code: `
        struct CollisionData {
          position: vec3<f32>,
          radius: f32,
          active: f32,
          collisionType: u32,
        }
        
        struct CollisionResult {
          hasCollision: u32,
          collisionPoint: vec3<f32>,
          collisionNormal: vec3<f32>,
          collisionDistance: f32,
        }
        
        @group(0) @binding(0) var<storage, read> objects: array<CollisionData>;
        @group(0) @binding(1) var<storage, read_write> results: array<CollisionResult>;
        @group(0) @binding(2) var<uniform> truckData: CollisionData;
        
        fn sphereSphereCollision(a: CollisionData, b: CollisionData) -> bool {
          let distance = length(a.position - b.position);
          return distance < (a.radius + b.radius);
        }
        
        fn spherePlaneCollision(sphere: CollisionData, planeNormal: vec3<f32>, planeDistance: f32) -> bool {
          let distance = dot(sphere.position, planeNormal) - planeDistance;
          return abs(distance) < sphere.radius;
        }
        
        @compute @workgroup_size(64)
        fn cs_collision_detection(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&objects)) { return; }
          
          let object = objects[index];
          if (object.active < 0.5) { return; }
          
          var result = &results[index];
          result.hasCollision = 0u;
          
          // Check truck collision with objects
          if (sphereSphereCollision(truckData, object)) {
            result.hasCollision = 1u;
            result.collisionPoint = (truckData.position + object.position) * 0.5;
            result.collisionNormal = normalize(truckData.position - object.position);
            result.collisionDistance = length(truckData.position - object.position);
          }
        }
      `
    });

    // House management compute shader
    this.houseManagementShader = this.device.createShaderModule({
      code: `
        struct HouseData {
          position: vec3<f32>,
          timer: f32,
          maxTimer: f32,
          color: vec3<f32>,
          active: f32,
          deliveryRadius: f32,
        }
        
        struct HouseParams {
          truckPosition: vec3<f32>,
          deliveryRadius: f32,
          deltaTime: f32,
          gameTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> houses: array<HouseData>;
        @group(0) @binding(1) var<uniform> params: HouseParams;
        
        fn updateHouseTimer(house: ptr<function, HouseData>) {
          (*house).timer = (*house).timer - params.deltaTime;
          
          // Update color based on timer urgency
          let timerRatio = (*house).timer / (*house).maxTimer;
          if (timerRatio > 0.5) {
            (*house).color = mix(vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0), (1.0 - timerRatio) * 2.0);
          } else {
            (*house).color = mix(vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 0.0, 0.0), (0.5 - timerRatio) * 2.0);
          }
        }
        
        fn checkDelivery(house: ptr<function, HouseData>) -> bool {
          let distance = length((*house).position - params.truckPosition);
          return distance <= params.deliveryRadius;
        }
        
        @compute @workgroup_size(64)
        fn cs_house_management(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&houses)) { return; }
          
          var house = &houses[index];
          if (house.active < 0.5) { return; }
          
          // Update house timer and color
          updateHouseTimer(house);
          
          // Check for delivery
          if (checkDelivery(house)) {
            house.timer = house.maxTimer; // Reset timer
            house.color = vec3<f32>(0.0, 1.0, 0.0); // Green for delivered
          }
          
          // Deactivate house if timer expired
          if (house.timer <= 0.0) {
            house.active = 0.0;
          }
        }
      `
    });

    // Particle system compute shader for visual effects
    this.particleSystemShader = this.device.createShaderModule({
      code: `
        struct Particle {
          position: vec3<f32>,
          velocity: vec3<f32>,
          color: vec3<f32>,
          life: f32,
          maxLife: f32,
          size: f32,
        }
        
        struct ParticleParams {
          deltaTime: f32,
          gravity: vec3<f32>,
          wind: vec3<f32>,
          turbulence: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
        @group(0) @binding(1) var<uniform> params: ParticleParams;
        
        fn updateParticle(particle: ptr<function, Particle>) {
          // Update position
          (*particle).position = (*particle).position + (*particle).velocity * params.deltaTime;
          
          // Apply forces
          (*particle).velocity = (*particle).velocity + params.gravity * params.deltaTime;
          (*particle).velocity = (*particle).velocity + params.wind * params.deltaTime;
          
          // Add turbulence
          let turbulence = vec3<f32>(
            (fract(sin((*particle).position.x * 12.9898 + params.deltaTime) * 43758.5453) - 0.5) * params.turbulence,
            (fract(sin((*particle).position.y * 12.9898 + params.deltaTime) * 43758.5453) - 0.5) * params.turbulence,
            (fract(sin((*particle).position.z * 12.9898 + params.deltaTime) * 43758.5453) - 0.5) * params.turbulence
          );
          (*particle).velocity = (*particle).velocity + turbulence;
          
          // Update life
          (*particle).life = (*particle).life - params.deltaTime;
          
          // Update color based on life
          let lifeRatio = (*particle).life / (*particle).maxLife;
          (*particle).color = mix(vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 1.0, 0.0), lifeRatio);
          
          // Update size
          (*particle).size = (*particle).size * (0.99 + lifeRatio * 0.01);
        }
        
        @compute @workgroup_size(64)
        fn cs_particle_system(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&particles)) { return; }
          
          var particle = &particles[index];
          if (particle.life <= 0.0) { return; }
          
          updateParticle(particle);
        }
      `
    });
  }

  async createBuffers() {
    // Route optimization buffer
    this.routeBuffer = this.device.createBuffer({
      size: 256 * 7 * 4, // 256 points * (position(3) + color(3) + active(1))
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // House management buffer
    this.houseBuffer = this.device.createBuffer({
      size: 12 * 8 * 4, // 12 houses * (position(3) + timer(1) + maxTimer(1) + color(3))
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Collision detection buffer
    this.collisionBuffer = this.device.createBuffer({
      size: 64 * 6 * 4, // 64 objects * (position(3) + radius(1) + active(1) + type(1))
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Particle system buffer
    this.particleBuffer = this.device.createBuffer({
      size: 1024 * 7 * 4, // 1024 particles * (position(3) + velocity(3) + color(3) + life(1) + maxLife(1) + size(1))
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });
  }

  async createPipelines() {
    // Route optimization pipeline
    this.routeOptimizationPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.routeOptimizationShader,
        entryPoint: 'cs_route_optimization'
      }
    });

    // Collision detection pipeline
    this.collisionDetectionPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.collisionDetectionShader,
        entryPoint: 'cs_collision_detection'
      }
    });

    // House management pipeline
    this.houseManagementPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.houseManagementShader,
        entryPoint: 'cs_house_management'
      }
    });

    // Particle system pipeline
    this.particleSystemPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.particleSystemShader,
        entryPoint: 'cs_particle_system'
      }
    });
  }

  async createBindGroups() {
    // Route optimization bind group
    this.routeBindGroup = this.device.createBindGroup({
      layout: this.routeOptimizationPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.routeBuffer } }
      ]
    });

    // House management bind group
    this.houseBindGroup = this.device.createBindGroup({
      layout: this.houseManagementPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.houseBuffer } }
      ]
    });

    // Collision detection bind group
    this.collisionBindGroup = this.device.createBindGroup({
      layout: this.collisionDetectionPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.collisionBuffer } },
        { binding: 1, resource: { buffer: this.collisionBuffer } } // Results buffer
      ]
    });

    // Particle system bind group
    this.particleBindGroup = this.device.createBindGroup({
      layout: this.particleSystemPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.particleBuffer } }
      ]
    });
  }

  // Route optimization methods
  optimizeRoute(routePoints, truckPosition, targetHouses) {
    if (!this.initialized) return;

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.routeOptimizationPipeline);
    computePass.setBindGroup(0, this.routeBindGroup);
    
    // Update route buffer
    this.updateRouteBuffer(routePoints);
    
    const workgroupCount = Math.ceil(routePoints.length / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
  }

  updateRouteBuffer(routePoints) {
    const routeData = new Float32Array(routePoints.length * 7);
    
    for (let i = 0; i < routePoints.length; i++) {
      const point = routePoints[i];
      const offset = i * 7;
      
      routeData[offset + 0] = point.position.x;
      routeData[offset + 1] = point.position.y;
      routeData[offset + 2] = point.position.z;
      routeData[offset + 3] = point.color.r;
      routeData[offset + 4] = point.color.g;
      routeData[offset + 5] = point.color.b;
      routeData[offset + 6] = point.active ? 1.0 : 0.0;
    }

    this.queue.writeBuffer(this.routeBuffer, 0, routeData);
  }

  // House management methods
  updateHouses(houses, truckPosition, deltaTime) {
    if (!this.initialized) return;

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.houseManagementPipeline);
    computePass.setBindGroup(0, this.houseBindGroup);
    
    // Update house buffer
    this.updateHouseBuffer(houses, truckPosition, deltaTime);
    
    const workgroupCount = Math.ceil(houses.length / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
  }

  updateHouseBuffer(houses, truckPosition, deltaTime) {
    const houseData = new Float32Array(houses.length * 8);
    
    for (let i = 0; i < houses.length; i++) {
      const house = houses[i];
      const offset = i * 8;
      
      houseData[offset + 0] = house.position.x;
      houseData[offset + 1] = house.position.y;
      houseData[offset + 2] = house.position.z;
      houseData[offset + 3] = house.timer;
      houseData[offset + 4] = house.maxTimer;
      houseData[offset + 5] = house.color.r;
      houseData[offset + 6] = house.color.g;
      houseData[offset + 7] = house.color.b;
    }

    this.queue.writeBuffer(this.houseBuffer, 0, houseData);
  }

  // Collision detection methods
  detectCollisions(objects, truckData) {
    if (!this.initialized) return [];

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.collisionDetectionPipeline);
    computePass.setBindGroup(0, this.collisionBindGroup);
    
    // Update collision buffer
    this.updateCollisionBuffer(objects, truckData);
    
    const workgroupCount = Math.ceil(objects.length / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
    
    // Note: In a real implementation, you'd read back the results
    // For now, return empty array
    return [];
  }

  updateCollisionBuffer(objects, truckData) {
    const collisionData = new Float32Array(objects.length * 6);
    
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      const offset = i * 6;
      
      collisionData[offset + 0] = obj.position.x;
      collisionData[offset + 1] = obj.position.y;
      collisionData[offset + 2] = obj.position.z;
      collisionData[offset + 3] = obj.radius;
      collisionData[offset + 4] = obj.active ? 1.0 : 0.0;
      collisionData[offset + 5] = obj.type || 0;
    }

    this.queue.writeBuffer(this.collisionBuffer, 0, collisionData);
  }

  // Particle system methods
  updateParticles(particles, deltaTime, gravity, wind, turbulence) {
    if (!this.initialized) return;

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.particleSystemPipeline);
    computePass.setBindGroup(0, this.particleBindGroup);
    
    // Update particle buffer
    this.updateParticleBuffer(particles, deltaTime, gravity, wind, turbulence);
    
    const workgroupCount = Math.ceil(particles.length / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
  }

  updateParticleBuffer(particles, deltaTime, gravity, wind, turbulence) {
    const particleData = new Float32Array(particles.length * 7);
    
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const offset = i * 7;
      
      particleData[offset + 0] = particle.position.x;
      particleData[offset + 1] = particle.position.y;
      particleData[offset + 2] = particle.position.z;
      particleData[offset + 3] = particle.velocity.x;
      particleData[offset + 4] = particle.velocity.y;
      particleData[offset + 5] = particle.velocity.z;
      particleData[offset + 6] = particle.life;
    }

    this.queue.writeBuffer(this.particleBuffer, 0, particleData);
  }

  // Cleanup
  destroy() {
    if (this.routeBuffer) this.routeBuffer.destroy();
    if (this.houseBuffer) this.houseBuffer.destroy();
    if (this.collisionBuffer) this.collisionBuffer.destroy();
    if (this.particleBuffer) this.particleBuffer.destroy();
  }
}

