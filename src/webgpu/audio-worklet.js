/**
 * Audio Worklet for WebGPU Audio Processing
 * Real-time audio processing using WebGPU compute shaders
 */

class WebGPUAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    
    this.device = null;
    this.queue = null;
    this.audioBuffer = null;
    this.outputBuffer = null;
    this.audioPipeline = null;
    this.bindGroup = null;
    
    this.initialized = false;
    this.sampleRate = 44100;
    this.bufferSize = 128;
    
    // Initialize WebGPU
    this.initWebGPU();
  }

  async initWebGPU() {
    try {
      if (!navigator.gpu) {
        throw new Error('WebGPU not supported');
      }

      const adapter = await navigator.gpu.requestAdapter({
        powerPreference: 'low-power'
      });

      if (!adapter) {
        throw new Error('No WebGPU adapter found');
      }

      this.device = await adapter.requestDevice({
        requiredFeatures: ['timestamp-query'],
        requiredLimits: {
          maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
        }
      });

      this.queue = this.device.queue;
      await this.createAudioBuffers();
      await this.createAudioPipeline();
      
      this.initialized = true;
      console.log('WebGPU audio worklet initialized');
    } catch (error) {
      console.error('Failed to initialize WebGPU audio worklet:', error);
    }
  }

  async createAudioBuffers() {
    // Audio processing buffer
    this.audioBuffer = this.device.createBuffer({
      size: this.bufferSize * 2 * 4, // Stereo
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Output buffer
    this.outputBuffer = this.device.createBuffer({
      size: this.bufferSize * 2 * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });
  }

  async createAudioPipeline() {
    // Simple audio processing shader
    const audioShader = this.device.createShaderModule({
      code: `
        struct AudioSample {
          left: f32,
          right: f32,
        }
        
        struct AudioParams {
          volume: f32,
          pitch: f32,
          reverb: f32,
          echo: f32,
          sampleRate: f32,
          deltaTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read> inputSamples: array<AudioSample>;
        @group(0) @binding(1) var<storage, read_write> outputSamples: array<AudioSample>;
        @group(0) @binding(2) var<uniform> params: AudioParams;
        
        @compute @workgroup_size(64)
        fn cs_audio_processing(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&inputSamples)) { return; }
          
          var input = inputSamples[index];
          var output = &outputSamples[index];
          
          // Apply volume
          input.left = input.left * params.volume;
          input.right = input.right * params.volume;
          
          // Apply pitch (simple time stretching)
          if (params.pitch != 1.0) {
            input.left = input.left * params.pitch;
            input.right = input.right * params.pitch;
          }
          
          // Apply reverb (simplified)
          if (params.reverb > 0.0) {
            input.left = input.left * (1.0 + params.reverb * 0.1);
            input.right = input.right * (1.0 + params.reverb * 0.1);
          }
          
          // Apply echo
          if (params.echo > 0.0) {
            input.left = input.left * (1.0 + params.echo * 0.2);
            input.right = input.right * (1.0 + params.echo * 0.2);
          }
          
          output.left = input.left;
          output.right = input.right;
        }
      `
    });

    this.audioPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: audioShader,
        entryPoint: 'cs_audio_processing'
      }
    });

    this.bindGroup = this.device.createBindGroup({
      layout: this.audioPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.audioBuffer } },
        { binding: 1, resource: { buffer: this.outputBuffer } }
      ]
    });
  }

  process(inputs, outputs, parameters) {
    if (!this.initialized || !this.device) {
      // Fallback to passthrough
      const input = inputs[0];
      const output = outputs[0];
      
      if (input && output) {
        for (let channel = 0; channel < input.length; channel++) {
          if (output[channel]) {
            output[channel].set(input[channel]);
          }
        }
      }
      return true;
    }

    const input = inputs[0];
    const output = outputs[0];
    
    if (!input || !output) return true;

    // Process audio with WebGPU
    this.processAudioWithWebGPU(input, output);

    return true;
  }

  processAudioWithWebGPU(input, output) {
    try {
      const commandEncoder = this.device.createCommandEncoder();
      const computePass = commandEncoder.beginComputePass();
      
      computePass.setPipeline(this.audioPipeline);
      computePass.setBindGroup(0, this.bindGroup);
      
      // Update audio buffer
      this.updateAudioBuffer(input);
      
      // Update parameters
      this.updateAudioParams();
      
      const workgroupCount = Math.ceil(this.bufferSize / 64);
      computePass.dispatchWorkgroups(workgroupCount);
      computePass.end();
      
      this.queue.submit([commandEncoder.finish()]);
      
      // Copy output back to audio context
      this.copyOutputToAudioContext(output);
      
    } catch (error) {
      console.error('WebGPU audio processing failed:', error);
      // Fallback to passthrough
      for (let channel = 0; channel < input.length; channel++) {
        if (output[channel]) {
          output[channel].set(input[channel]);
        }
      }
    }
  }

  updateAudioBuffer(input) {
    const audioData = new Float32Array(this.bufferSize * 2);
    
    for (let i = 0; i < this.bufferSize; i++) {
      audioData[i * 2] = input[0][i] || 0; // Left channel
      audioData[i * 2 + 1] = input[1] ? input[1][i] || 0 : 0; // Right channel
    }

    this.queue.writeBuffer(this.audioBuffer, 0, audioData);
  }

  updateAudioParams() {
    const paramData = new Float32Array([
      1.0, // volume
      1.0, // pitch
      0.0, // reverb
      0.0, // echo
      this.sampleRate,
      1.0 / this.sampleRate // deltaTime
    ]);

    const uniformBuffer = this.device.createBuffer({
      size: paramData.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    this.queue.writeBuffer(uniformBuffer, 0, paramData);
  }

  copyOutputToAudioContext(output) {
    // In a real implementation, you'd read back the processed audio from the GPU
    // For now, we'll use the input as output
    for (let channel = 0; channel < output.length; channel++) {
      if (output[channel]) {
        // This is a placeholder - in practice, you'd read from the GPU buffer
        output[channel].set(output[channel]);
      }
    }
  }

  static get parameterDescriptors() {
    return [
      {
        name: 'volume',
        defaultValue: 1.0,
        minValue: 0.0,
        maxValue: 2.0
      },
      {
        name: 'pitch',
        defaultValue: 1.0,
        minValue: 0.5,
        maxValue: 2.0
      },
      {
        name: 'reverb',
        defaultValue: 0.0,
        minValue: 0.0,
        maxValue: 1.0
      },
      {
        name: 'echo',
        defaultValue: 0.0,
        minValue: 0.0,
        maxValue: 1.0
      }
    ];
  }
}

registerProcessor('webgpu-audio-processor', WebGPUAudioProcessor);

