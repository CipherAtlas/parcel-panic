/**
 * WebGPU Configuration for Parcel Panic
 * Centralized configuration for all WebGPU optimizations
 */

export const WebGPUConfig = {
  // Rendering settings
  rendering: {
    enabled: true,
    fallbackToWebGL: true,
    maxTextureSize: 4096,
    maxBufferSize: 1024 * 1024 * 16, // 16MB
    antialiasing: true,
    shadowMapEnabled: false,
    postProcessing: false
  },

  // Compute shader settings
  compute: {
    enabled: true,
    maxWorkgroupSize: 64,
    maxWorkgroupsPerDimension: 65535,
    routeOptimization: {
      enabled: true,
      maxPoints: 256,
      optimizationLevel: 1.0
    },
    houseManagement: {
      enabled: true,
      maxHouses: 12,
      updateFrequency: 60 // Hz
    },
    collisionDetection: {
      enabled: true,
      maxObjects: 64,
      detectionRadius: 10.0
    }
  },

  // Audio processing settings
  audio: {
    enabled: true,
    sampleRate: 44100,
    bufferSize: 1024,
    maxChannels: 2,
    effects: {
      reverb: true,
      echo: true,
      lowPass: true,
      highPass: true
    },
    performance: {
      maxProcessingTime: 5.0, // ms
      targetLatency: 20.0 // ms
    }
  },

  // Memory management
  memory: {
    maxAllocations: 1000,
    bufferPoolSize: 10,
    garbageCollectionThreshold: 0.8,
    memoryWarningThreshold: 0.9
  },

  // Performance monitoring
  performance: {
    enabled: true,
    monitoringInterval: 1000, // ms
    benchmarkDuration: 5000, // ms
    targetFPS: 60,
    maxFrameTime: 16.67, // ms
    memoryWarning: true
  },

  // Debug settings
  debug: {
    enabled: false,
    showPerformanceStats: true,
    logWebGPUCalls: false,
    validateShaders: true,
    showMemoryUsage: true
  },

  // Feature flags
  features: {
    instancedRendering: true,
    computeShaders: true,
    audioProcessing: true,
    routeOptimization: true,
    houseAcceleration: true,
    collisionDetection: true,
    particleSystem: true
  },

  // Quality settings
  quality: {
    level: 'high', // low, medium, high, ultra
    lodDistance: 50.0,
    maxLOD: 3,
    textureQuality: 1.0,
    shadowQuality: 0.5,
    particleCount: 1000
  },

  // Optimization settings
  optimization: {
    frustumCulling: true,
    occlusionCulling: false,
    levelOfDetail: true,
    textureAtlas: true,
    instancedRendering: true,
    batching: true
  }
};

// Quality presets
export const QualityPresets = {
  low: {
    ...WebGPUConfig,
    quality: {
      level: 'low',
      lodDistance: 25.0,
      maxLOD: 1,
      textureQuality: 0.5,
      shadowQuality: 0.0,
      particleCount: 100
    },
    rendering: {
      ...WebGPUConfig.rendering,
      antialiasing: false,
      shadowMapEnabled: false
    }
  },
  
  medium: {
    ...WebGPUConfig,
    quality: {
      level: 'medium',
      lodDistance: 40.0,
      maxLOD: 2,
      textureQuality: 0.75,
      shadowQuality: 0.25,
      particleCount: 500
    }
  },
  
  high: {
    ...WebGPUConfig,
    quality: {
      level: 'high',
      lodDistance: 50.0,
      maxLOD: 3,
      textureQuality: 1.0,
      shadowQuality: 0.5,
      particleCount: 1000
    }
  },
  
  ultra: {
    ...WebGPUConfig,
    quality: {
      level: 'ultra',
      lodDistance: 75.0,
      maxLOD: 4,
      textureQuality: 1.0,
      shadowQuality: 1.0,
      particleCount: 2000
    },
    rendering: {
      ...WebGPUConfig.rendering,
      postProcessing: true
    }
  }
};

// Performance thresholds
export const PerformanceThresholds = {
  excellent: {
    fps: 60,
    frameTime: 16.67,
    memoryUsage: 0.5,
    gpuTime: 8.0,
    cpuTime: 8.0
  },
  
  good: {
    fps: 45,
    frameTime: 22.22,
    memoryUsage: 0.7,
    gpuTime: 12.0,
    cpuTime: 12.0
  },
  
  acceptable: {
    fps: 30,
    frameTime: 33.33,
    memoryUsage: 0.8,
    gpuTime: 16.0,
    cpuTime: 16.0
  },
  
  poor: {
    fps: 15,
    frameTime: 66.67,
    memoryUsage: 0.9,
    gpuTime: 32.0,
    cpuTime: 32.0
  }
};

// WebGPU feature detection
export class WebGPUFeatureDetection {
  static async detectCapabilities() {
    const capabilities = {
      webgpu: false,
      computeShaders: false,
      storageBuffers: false,
      uniformBuffers: false,
      textures: false,
      renderTargets: false,
      instancedRendering: false,
      depthTesting: false,
      stencilTesting: false,
      multisampling: false
    };

    try {
      if (!navigator.gpu) {
        return capabilities;
      }

      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        return capabilities;
      }

      const device = await adapter.requestDevice();
      if (!device) {
        return capabilities;
      }

      capabilities.webgpu = true;
      capabilities.computeShaders = true;
      capabilities.storageBuffers = true;
      capabilities.uniformBuffers = true;
      capabilities.textures = true;
      capabilities.renderTargets = true;
      capabilities.instancedRendering = true;
      capabilities.depthTesting = true;
      capabilities.stencilTesting = true;
      capabilities.multisampling = true;

      // Check specific features
      const features = adapter.features;
      if (features.has('timestamp-query')) {
        capabilities.timestampQuery = true;
      }
      if (features.has('depth-clip-control')) {
        capabilities.depthClipControl = true;
      }
      if (features.has('texture-compression-bc')) {
        capabilities.textureCompressionBC = true;
      }

      device.destroy();
      return capabilities;

    } catch (error) {
      console.warn('WebGPU feature detection failed:', error);
      return capabilities;
    }
  }

  static async getOptimalConfig() {
    const capabilities = await this.detectCapabilities();
    const config = { ...WebGPUConfig };

    // Adjust config based on capabilities
    if (!capabilities.webgpu) {
      config.rendering.enabled = false;
      config.compute.enabled = false;
      config.audio.enabled = false;
    }

    if (!capabilities.computeShaders) {
      config.compute.enabled = false;
      config.features.computeShaders = false;
    }

    if (!capabilities.instancedRendering) {
      config.features.instancedRendering = false;
      config.optimization.instancedRendering = false;
    }

    return config;
  }
}

// Performance monitoring
export class WebGPUPerformanceMonitor {
  constructor(config) {
    this.config = config;
    this.metrics = {
      fps: 0,
      frameTime: 0,
      gpuTime: 0,
      cpuTime: 0,
      memoryUsage: 0,
      drawCalls: 0,
      triangles: 0
    };
    
    this.history = [];
    this.maxHistorySize = 100;
  }

  update(metrics) {
    this.metrics = { ...this.metrics, ...metrics };
    this.history.push({ ...this.metrics, timestamp: performance.now() });
    
    if (this.history.length > this.maxHistorySize) {
      this.history.shift();
    }
  }

  getAverageMetrics(duration = 1000) {
    const now = performance.now();
    const recent = this.history.filter(entry => now - entry.timestamp < duration);
    
    if (recent.length === 0) return this.metrics;
    
    const averages = {};
    const keys = Object.keys(this.metrics);
    
    for (const key of keys) {
      if (key === 'timestamp') continue;
      averages[key] = recent.reduce((sum, entry) => sum + entry[key], 0) / recent.length;
    }
    
    return averages;
  }

  getPerformanceGrade() {
    const avg = this.getAverageMetrics();
    
    if (avg.fps >= PerformanceThresholds.excellent.fps) return 'A+';
    if (avg.fps >= PerformanceThresholds.good.fps) return 'A';
    if (avg.fps >= PerformanceThresholds.acceptable.fps) return 'B';
    if (avg.fps >= PerformanceThresholds.poor.fps) return 'C';
    return 'D';
  }

  shouldReduceQuality() {
    const avg = this.getAverageMetrics();
    return avg.fps < PerformanceThresholds.acceptable.fps;
  }

  shouldIncreaseQuality() {
    const avg = this.getAverageMetrics();
    return avg.fps > PerformanceThresholds.excellent.fps;
  }
}

// Export default configuration
export default WebGPUConfig;

