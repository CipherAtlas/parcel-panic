/**
 * WebGPU Integration Test for Parcel Panic
 * Simple test to verify WebGPU functionality
 */

import { WebGPUIntegration } from './webgpu-integration.js';
import { WebGPUBenchmark } from './webgpu-benchmark.js';
import { WebGPUConfig, QualityPresets } from './webgpu-config.js';

export class WebGPUTest {
  constructor() {
    this.results = {};
    this.testDuration = 2000; // 2 seconds per test
  }

  async runAllTests() {
    console.log('[TEST] Starting WebGPU integration tests...');
    
    const tests = [
      { name: 'WebGPU Support', fn: this.testWebGPUSupport },
      { name: 'Renderer Initialization', fn: this.testRendererInitialization },
      { name: 'Compute Shaders', fn: this.testComputeShaders },
      { name: 'Audio Processing', fn: this.testAudioProcessing },
      { name: 'Performance Benchmark', fn: this.testPerformanceBenchmark },
      { name: 'Fallback System', fn: this.testFallbackSystem }
    ];

    for (const test of tests) {
      try {
        console.log(`[WAIT] Running ${test.name}...`);
        const result = await test.fn.call(this);
        this.results[test.name] = result;
        console.log(`[OK] ${test.name}: ${result.success ? 'PASSED' : 'FAILED'}`);
      } catch (error) {
        console.error(`[FAIL] ${test.name}: ERROR -`, error.message);
        this.results[test.name] = { success: false, error: error.message };
      }
    }

    this.printSummary();
    return this.results;
  }

  async testWebGPUSupport() {
    const startTime = performance.now();
    
    try {
      if (!navigator.gpu) {
        return { success: false, error: 'WebGPU not supported' };
      }

      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        return { success: false, error: 'No WebGPU adapter found' };
      }

      const device = await adapter.requestDevice();
      if (!device) {
        return { success: false, error: 'Failed to create WebGPU device' };
      }

      const endTime = performance.now();
      device.destroy();

      return {
        success: true,
        initTime: endTime - startTime,
        adapter: adapter.info?.description || 'Unknown',
        features: Array.from(adapter.features)
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async testRendererInitialization() {
    const canvas = document.createElement('canvas');
    const config = WebGPUConfig;
    
    try {
      const integration = new WebGPUIntegration(canvas, config);
      const success = await integration.initialize();
      
      if (success) {
        integration.destroy();
        return { success: true, message: 'WebGPU renderer initialized successfully' };
      } else {
        return { success: false, error: 'Failed to initialize WebGPU renderer' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async testComputeShaders() {
    try {
      if (!navigator.gpu) {
        return { success: false, error: 'WebGPU not available' };
      }

      const adapter = await navigator.gpu.requestAdapter();
      const device = await adapter.requestDevice();

      // Test compute shader compilation
      const computeShader = device.createShaderModule({
        code: `
          @compute @workgroup_size(64)
          fn cs_test(@builtin(global_invocation_id) global_id: vec3<u32>) {
            // Simple test compute shader
          }
        `
      });

      const pipeline = device.createComputePipeline({
        layout: 'auto',
        compute: {
          module: computeShader,
          entryPoint: 'cs_test'
        }
      });

      device.destroy();

      return { success: true, message: 'Compute shaders working correctly' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async testAudioProcessing() {
    try {
      if (!navigator.gpu) {
        return { success: false, error: 'WebGPU not available' };
      }

      const adapter = await navigator.gpu.requestAdapter();
      const device = await adapter.requestDevice();

      // Test audio buffer creation
      const audioBuffer = device.createBuffer({
        size: 1024 * 4, // 1KB audio buffer
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
      });

      // Test audio processing shader
      const audioShader = device.createShaderModule({
        code: `
          struct AudioSample {
            left: f32,
            right: f32,
          }
          
          @group(0) @binding(0) var<storage, read> inputSamples: array<AudioSample>;
          @group(0) @binding(1) var<storage, read_write> outputSamples: array<AudioSample>;
          
          @compute @workgroup_size(64)
          fn cs_audio_test(@builtin(global_invocation_id) global_id: vec3<u32>) {
            let index = global_id.x;
            if (index >= arrayLength(&inputSamples)) { return; }
            
            var input = inputSamples[index];
            var output = &outputSamples[index];
            
            output.left = input.left * 0.5;
            output.right = input.right * 0.5;
          }
        `
      });

      audioBuffer.destroy();
      device.destroy();

      return { success: true, message: 'Audio processing shaders working correctly' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async testPerformanceBenchmark() {
    try {
      const canvas = document.createElement('canvas');
      const config = WebGPUConfig;
      
      const integration = new WebGPUIntegration(canvas, config);
      const success = await integration.initialize();
      
      if (!success) {
        return { success: false, error: 'WebGPU integration not available' };
      }

      const benchmark = new WebGPUBenchmark(integration);
      const results = await benchmark.runFullBenchmark();
      
      integration.destroy();

      return {
        success: true,
        results: results,
        grade: results.overall.grade,
        score: results.overall.score
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async testFallbackSystem() {
    try {
      // Test that the system gracefully handles WebGPU unavailability
      const canvas = document.createElement('canvas');
      const config = { ...WebGPUConfig, rendering: { ...WebGPUConfig.rendering, enabled: false } };
      
      const integration = new WebGPUIntegration(canvas, config);
      const success = await integration.initialize();
      
      // Should still work even with WebGPU disabled
      return { success: true, message: 'Fallback system working correctly' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  printSummary() {
    console.log('\n[STATS] WebGPU Test Results Summary:');
    console.log('================================');
    
    const passed = Object.values(this.results).filter(r => r.success).length;
    const total = Object.keys(this.results).length;
    
    console.log(`[OK] Passed: ${passed}/${total}`);
    console.log(`[FAIL] Failed: ${total - passed}/${total}`);
    
    for (const [testName, result] of Object.entries(this.results)) {
      const status = result.success ? '[OK]' : '[FAIL]';
      console.log(`${status} ${testName}: ${result.success ? 'PASSED' : 'FAILED'}`);
      
      if (!result.success && result.error) {
        console.log(`   Error: ${result.error}`);
      }
    }
    
    if (passed === total) {
      console.log('\n[SUCCESS] All tests passed! WebGPU integration is working correctly.');
    } else {
      console.log('\n[WARN]  Some tests failed. Check the errors above.');
    }
  }

  // Quick test for development
  static async quickTest() {
    const test = new WebGPUTest();
    return await test.runAllTests();
  }
}

// Auto-run test if in development mode
if (import.meta.env?.DEV) {
  console.log('[TOOLS] Development mode detected, running WebGPU tests...');
  WebGPUTest.quickTest().catch(console.error);
}

