/**
 * WebGPU Audio Processing for Parcel Panic
 * High-performance audio processing using WebGPU compute shaders
 */

export class WebGPUAudio {
  constructor(device) {
    this.device = device;
    this.queue = device.queue;
    
    // Audio processing pipelines
    this.audioProcessingPipeline = null;
    this.soundEffectPipeline = null;
    this.musicPipeline = null;
    
    // Audio buffers
    this.audioBuffer = null;
    this.outputBuffer = null;
    this.effectBuffer = null;
    
    // Bind groups
    this.audioBindGroup = null;
    this.effectBindGroup = null;
    
    // Audio context for Web Audio API integration
    this.audioContext = null;
    this.audioWorklet = null;
    
    this.initialized = false;
  }

  async initialize() {
    try {
      await this.createAudioShaders();
      await this.createAudioBuffers();
      await this.createAudioPipelines();
      await this.createAudioBindGroups();
      await this.setupWebAudioIntegration();
      
      this.initialized = true;
      console.log('WebGPU audio system initialized');
      return true;
    } catch (error) {
      console.error('Failed to initialize WebGPU audio system:', error);
      return false;
    }
  }

  async createAudioShaders() {
    // Audio processing compute shader
    this.audioProcessingShader = this.device.createShaderModule({
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
          lowPass: f32,
          highPass: f32,
          sampleRate: f32,
          deltaTime: f32,
        }
        
        @group(0) @binding(0) var<storage, read> inputSamples: array<AudioSample>;
        @group(0) @binding(1) var<storage, read_write> outputSamples: array<AudioSample>;
        @group(0) @binding(2) var<uniform> params: AudioParams;
        
        fn applyLowPass(sample: f32, prevSample: f32, cutoff: f32) -> f32 {
          let alpha = 1.0 / (1.0 + cutoff);
          return alpha * sample + (1.0 - alpha) * prevSample;
        }
        
        fn applyHighPass(sample: f32, prevSample: f32, cutoff: f32) -> f32 {
          let alpha = cutoff / (1.0 + cutoff);
          return alpha * (prevSample + sample - prevSample);
        }
        
        fn applyReverb(sample: f32, delayBuffer: ptr<function, array<f32, 44100>>, delayIndex: u32, reverbTime: f32) -> f32 {
          let delayedSample = (*delayBuffer)[delayIndex];
          let reverbAmount = reverbTime * 0.3;
          return sample + delayedSample * reverbAmount;
        }
        
        fn applyEcho(sample: f32, delayBuffer: ptr<function, array<f32, 44100>>, delayIndex: u32, echoTime: f32) -> f32 {
          let delayedSample = (*delayBuffer)[delayIndex];
          let echoAmount = echoTime * 0.5;
          return sample + delayedSample * echoAmount;
        }
        
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
          let pitchFactor = params.pitch;
          if (pitchFactor != 1.0) {
            // Simple pitch shifting - in a real implementation, you'd use more sophisticated algorithms
            input.left = input.left * pitchFactor;
            input.right = input.right * pitchFactor;
          }
          
          // Apply low-pass filter
          input.left = applyLowPass(input.left, input.left, params.lowPass);
          input.right = applyLowPass(input.right, input.right, params.lowPass);
          
          // Apply high-pass filter
          input.left = applyHighPass(input.left, input.left, params.highPass);
          input.right = applyHighPass(input.right, input.right, params.highPass);
          
          // Apply reverb (simplified)
          if (params.reverb > 0.0) {
            // This is a simplified reverb - in practice, you'd use convolution or FFT
            input.left = input.left * (1.0 + params.reverb * 0.1);
            input.right = input.right * (1.0 + params.reverb * 0.1);
          }
          
          // Apply echo
          if (params.echo > 0.0) {
            // Simplified echo effect
            input.left = input.left * (1.0 + params.echo * 0.2);
            input.right = input.right * (1.0 + params.echo * 0.2);
          }
          
          output.left = input.left;
          output.right = input.right;
        }
      `
    });

    // Sound effect processing shader
    this.soundEffectShader = this.device.createShaderModule({
      code: `
        struct SoundEffect {
          type: u32, // 0: ding, 1: gameover
          volume: f32,
          pitch: f32,
          duration: f32,
          startTime: f32,
          active: f32,
        }
        
        struct EffectParams {
          gameTime: f32,
          deltaTime: f32,
          masterVolume: f32,
          _padding: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> effects: array<SoundEffect>;
        @group(0) @binding(1) var<storage, read_write> audioOutput: array<f32>;
        @group(0) @binding(2) var<uniform> params: EffectParams;
        
        fn generateSineWave(frequency: f32, time: f32, volume: f32) -> f32 {
          return sin(frequency * 2.0 * 3.14159 * time) * volume;
        }
        
        fn generateSquareWave(frequency: f32, time: f32, volume: f32) -> f32 {
          return sign(sin(frequency * 2.0 * 3.14159 * time)) * volume;
        }
        
        fn generateSawtoothWave(frequency: f32, time: f32, volume: f32) -> f32 {
          let phase = fract(frequency * time);
          return (phase * 2.0 - 1.0) * volume;
        }
        
        fn generateDingEffect(time: f32, volume: f32) -> f32 {
          let envelope = exp(-time * 8.0); // Exponential decay
          let frequency = 800.0 + sin(time * 20.0) * 100.0; // Vibrato
          return generateSineWave(frequency, time, volume) * envelope;
        }
        
        
        fn generateGameOverEffect(time: f32, volume: f32) -> f32 {
          let envelope = exp(-time * 2.0);
          let frequency = 400.0 - time * 200.0; // Descending pitch
          return generateSawtoothWave(frequency, time, volume) * envelope;
        }
        
        @compute @workgroup_size(64)
        fn cs_sound_effects(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&effects)) { return; }
          
          var effect = &effects[index];
          if (effect.active < 0.5) { return; }
          
          let elapsedTime = params.gameTime - effect.startTime;
          if (elapsedTime >= effect.duration) {
            effect.active = 0.0;
            return;
          }
          
          let volume = effect.volume * params.masterVolume;
          let pitch = effect.pitch;
          let time = elapsedTime * pitch;
          
          var sample: f32;
          
          switch (effect.type) {
            case 0u: { // Ding
              sample = generateDingEffect(time, volume);
            }
            case 2u: { // Game over
              sample = generateGameOverEffect(time, volume);
            }
            default: {
              sample = 0.0;
            }
          }
          
          // Write to output buffer
          let outputIndex = index * 2; // Stereo
          audioOutput[outputIndex] = sample; // Left channel
          audioOutput[outputIndex + 1] = sample; // Right channel
        }
      `
    });

    // Music processing shader
    this.musicShader = this.device.createShaderModule({
      code: `
        struct MusicNote {
          frequency: f32,
          duration: f32,
          startTime: f32,
          volume: f32,
          waveform: u32, // 0: sine, 1: square, 2: sawtooth
          active: f32,
        }
        
        struct MusicParams {
          gameTime: f32,
          tempo: f32,
          key: f32,
          scale: u32, // 0: major, 1: minor
          _padding: f32,
        }
        
        @group(0) @binding(0) var<storage, read_write> notes: array<MusicNote>;
        @group(0) @binding(1) var<storage, read_write> musicOutput: array<f32>;
        @group(0) @binding(2) var<uniform> params: MusicParams;
        
        fn getScaleFrequency(noteIndex: i32, scale: u32) -> f32 {
          let baseFreq = 440.0; // A4
          let majorScale = array<f32, 7>(1.0, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888);
          let minorScale = array<f32, 7>(1.0, 1.122, 1.189, 1.335, 1.498, 1.587, 1.888);
          
          let scaleArray = select(majorScale, minorScale, scale == 1u);
          let octave = noteIndex / 7;
          let scaleNote = noteIndex % 7;
          
          return baseFreq * pow(2.0, f32(octave)) * scaleArray[scaleNote];
        }
        
        fn generateWaveform(frequency: f32, time: f32, waveform: u32, volume: f32) -> f32 {
          switch (waveform) {
            case 0u: { // Sine wave
              return sin(frequency * 2.0 * 3.14159 * time) * volume;
            }
            case 1u: { // Square wave
              return sign(sin(frequency * 2.0 * 3.14159 * time)) * volume;
            }
            case 2u: { // Sawtooth wave
              let phase = fract(frequency * time);
              return (phase * 2.0 - 1.0) * volume;
            }
            default: {
              return 0.0;
            }
          }
        }
        
        @compute @workgroup_size(64)
        fn cs_music_processing(@builtin(global_invocation_id) global_id: vec3<u32>) {
          let index = global_id.x;
          if (index >= arrayLength(&notes)) { return; }
          
          var note = &notes[index];
          if (note.active < 0.5) { return; }
          
          let elapsedTime = params.gameTime - note.startTime;
          if (elapsedTime >= note.duration) {
            note.active = 0.0;
            return;
          }
          
          let frequency = note.frequency * pow(2.0, params.key / 12.0);
          let envelope = 1.0 - (elapsedTime / note.duration); // Linear decay
          let volume = note.volume * envelope;
          
          let sample = generateWaveform(frequency, elapsedTime, note.waveform, volume);
          
          // Write to output buffer
          let outputIndex = index * 2; // Stereo
          musicOutput[outputIndex] = sample; // Left channel
          musicOutput[outputIndex + 1] = sample; // Right channel
        }
      `
    });
  }

  async createAudioBuffers() {
    // Audio processing buffer (stereo, 44.1kHz)
    this.audioBuffer = this.device.createBuffer({
      size: 44100 * 2 * 4, // 1 second of stereo audio
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Output buffer
    this.outputBuffer = this.device.createBuffer({
      size: 44100 * 2 * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Sound effects buffer
    this.effectBuffer = this.device.createBuffer({
      size: 64 * 6 * 4, // 64 effects * (type(1) + volume(1) + pitch(1) + duration(1) + startTime(1) + active(1))
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    // Music buffer
    this.musicBuffer = this.device.createBuffer({
      size: 128 * 6 * 4, // 128 notes * (frequency(1) + duration(1) + startTime(1) + volume(1) + waveform(1) + active(1))
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });
  }

  async createAudioPipelines() {
    // Audio processing pipeline
    this.audioProcessingPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.audioProcessingShader,
        entryPoint: 'cs_audio_processing'
      }
    });

    // Sound effects pipeline
    this.soundEffectPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.soundEffectShader,
        entryPoint: 'cs_sound_effects'
      }
    });

    // Music pipeline
    this.musicPipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: this.musicShader,
        entryPoint: 'cs_music_processing'
      }
    });
  }

  async createAudioBindGroups() {
    // Audio processing bind group
    this.audioBindGroup = this.device.createBindGroup({
      layout: this.audioProcessingPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.audioBuffer } },
        { binding: 1, resource: { buffer: this.outputBuffer } }
      ]
    });

    // Sound effects bind group
    this.effectBindGroup = this.device.createBindGroup({
      layout: this.soundEffectPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.effectBuffer } },
        { binding: 1, resource: { buffer: this.outputBuffer } }
      ]
    });

    // Music bind group
    this.musicBindGroup = this.device.createBindGroup({
      layout: this.musicPipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.musicBuffer } },
        { binding: 1, resource: { buffer: this.outputBuffer } }
      ]
    });
  }

  async setupWebAudioIntegration() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create audio worklet for real-time processing
      await this.audioContext.audioWorklet.addModule('/src/webgpu/audio-worklet.js');
      
      this.audioWorklet = new AudioWorkletNode(this.audioContext, 'webgpu-audio-processor');
      this.audioWorklet.connect(this.audioContext.destination);
      
      console.log('Web Audio integration setup complete');
    } catch (error) {
      console.warn('Web Audio integration failed, falling back to standard audio:', error);
    }
  }

  // Audio processing methods
  processAudio(inputSamples, params) {
    if (!this.initialized) return;

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.audioProcessingPipeline);
    computePass.setBindGroup(0, this.audioBindGroup);
    
    // Update audio buffer
    this.updateAudioBuffer(inputSamples);
    
    // Update parameters
    this.updateAudioParams(params);
    
    const workgroupCount = Math.ceil(inputSamples.length / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
  }

  updateAudioBuffer(inputSamples) {
    const audioData = new Float32Array(inputSamples.length * 2);
    
    for (let i = 0; i < inputSamples.length; i++) {
      const sample = inputSamples[i];
      audioData[i * 2] = sample.left || 0;
      audioData[i * 2 + 1] = sample.right || 0;
    }

    this.queue.writeBuffer(this.audioBuffer, 0, audioData);
  }

  updateAudioParams(params) {
    const paramData = new Float32Array([
      params.volume || 1.0,
      params.pitch || 1.0,
      params.reverb || 0.0,
      params.echo || 0.0,
      params.lowPass || 0.0,
      params.highPass || 0.0,
      params.sampleRate || 44100.0,
      params.deltaTime || 0.016
    ]);

    // Create uniform buffer for parameters
    const uniformBuffer = this.device.createBuffer({
      size: paramData.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    this.queue.writeBuffer(uniformBuffer, 0, paramData);
  }

  // Sound effects methods
  playSoundEffect(type, volume = 1.0, pitch = 1.0, duration = 1.0) {
    if (!this.initialized) return;

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.soundEffectPipeline);
    computePass.setBindGroup(0, this.effectBindGroup);
    
    // Update effect buffer
    this.updateEffectBuffer(type, volume, pitch, duration);
    
    const workgroupCount = Math.ceil(64 / 64); // 64 effects max
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
  }

  updateEffectBuffer(type, volume, pitch, duration) {
    const effectData = new Float32Array(64 * 6);
    
    // Find first available slot
    for (let i = 0; i < 64; i++) {
      const offset = i * 6;
      if (effectData[offset + 5] === 0) { // Not active
        effectData[offset + 0] = type; // Type
        effectData[offset + 1] = volume;
        effectData[offset + 2] = pitch;
        effectData[offset + 3] = duration;
        effectData[offset + 4] = performance.now() / 1000; // Start time
        effectData[offset + 5] = 1; // Active
        break;
      }
    }

    this.queue.writeBuffer(this.effectBuffer, 0, effectData);
  }

  // Music methods
  playMusic(notes, tempo = 120.0, key = 0.0, scale = 0) {
    if (!this.initialized) return;

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();
    
    computePass.setPipeline(this.musicPipeline);
    computePass.setBindGroup(0, this.musicBindGroup);
    
    // Update music buffer
    this.updateMusicBuffer(notes, tempo, key, scale);
    
    const workgroupCount = Math.ceil(notes.length / 64);
    computePass.dispatchWorkgroups(workgroupCount);
    computePass.end();
    
    this.queue.submit([commandEncoder.finish()]);
  }

  updateMusicBuffer(notes, tempo, key, scale) {
    const musicData = new Float32Array(notes.length * 6);
    
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const offset = i * 6;
      
      musicData[offset + 0] = note.frequency;
      musicData[offset + 1] = note.duration;
      musicData[offset + 2] = note.startTime;
      musicData[offset + 3] = note.volume;
      musicData[offset + 4] = note.waveform;
      musicData[offset + 5] = note.active ? 1.0 : 0.0;
    }

    this.queue.writeBuffer(this.musicBuffer, 0, musicData);
  }

  // Integration with existing audio system
  integrateWithHowler() {
    if (!this.audioContext) return;

    // Override Howler's audio processing with WebGPU
    const originalPlay = window.Howl.prototype.play;
    window.Howl.prototype.play = function(id) {
      const sound = this;
      const sprite = sound._sprite;
      const spriteData = sprite[id || 'default'];
      
      if (spriteData) {
        // Use WebGPU for audio processing
        this.webgpuAudio.playSoundEffect(
          this._type || 0,
          this._volume || 1.0,
          this._rate || 1.0,
          spriteData[1] / 1000.0 // Duration in seconds
        );
      }
      
      return originalPlay.call(this, id);
    };
  }

  // Cleanup
  destroy() {
    if (this.audioBuffer) this.audioBuffer.destroy();
    if (this.outputBuffer) this.outputBuffer.destroy();
    if (this.effectBuffer) this.effectBuffer.destroy();
    if (this.musicBuffer) this.musicBuffer.destroy();
    
    if (this.audioContext) {
      this.audioContext.close();
    }
  }
}
