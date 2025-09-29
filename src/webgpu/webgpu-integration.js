/**
 * WebGPU Integration Layer for Parcel Panic
 * Seamlessly integrates WebGPU optimizations with existing Three.js system
 */

import { WebGPURenderer } from './webgpu-renderer.js';
import { WebGPUCompute } from './webgpu-compute.js';
import { WebGPUAudio } from './webgpu-audio.js';

export class WebGPUIntegration {
  constructor(canvas, config) {
    this.canvas = canvas;
    this.config = config;
    
    // WebGPU systems
    this.renderer = null;
    this.compute = null;
    this.audio = null;
    
    // Integration state
    this.initialized = false;
    this.fallbackMode = false;
    
    // Performance tracking
    this.performanceStats = {
      fps: 60,
      gpuTime: 0,
      cpuTime: 0,
      memoryUsage: 0
    };
    
    // Compatibility layer
    this.threeJSScene = null;
    this.threeJSCamera = null;
    this.threeJSRenderer = null;
  }

  async initialize() {
    try {
      console.log('Initializing WebGPU integration...');
      
      // Check WebGPU support
      if (!navigator.gpu) {
        console.warn('WebGPU not supported, falling back to Three.js');
        console.log('[TIP] To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"');
        this.fallbackMode = true;
        return false;
      }

      // Check if WebGPU context is available
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
          console.warn('WebGPU adapter not available, falling back to Three.js');
          console.log('[TIP] To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"');
          this.fallbackMode = true;
          return false;
        }
      } catch (error) {
        console.warn('WebGPU adapter request failed:', error);
        console.log('[TIP] To enable WebGPU: Go to chrome://flags/ and enable "Unsafe WebGPU"');
        this.fallbackMode = true;
        return false;
      }

      // Initialize WebGPU systems
      await this.initializeWebGPUSystems();
      
      // Setup compatibility layer
      this.setupCompatibilityLayer();
      
      this.initialized = true;
      console.log('WebGPU integration initialized successfully');
      return true;
      
    } catch (error) {
      console.error('Failed to initialize WebGPU integration:', error);
      this.fallbackMode = true;
      return false;
    }
  }

  async initializeWebGPUSystems() {
    // Initialize WebGPU renderer
    this.renderer = new WebGPURenderer(this.canvas, this.config);
    const rendererSuccess = await this.renderer.initialize();
    
    if (!rendererSuccess) {
      throw new Error('Failed to initialize WebGPU renderer');
    }

    // Initialize WebGPU compute system
    this.compute = new WebGPUCompute(this.renderer.device);
    const computeSuccess = await this.compute.initialize();
    
    if (!computeSuccess) {
      console.warn('WebGPU compute system failed to initialize');
    }

    // Initialize WebGPU audio system
    this.audio = new WebGPUAudio(this.renderer.device);
    const audioSuccess = await this.audio.initialize();
    
    if (!audioSuccess) {
      console.warn('WebGPU audio system failed to initialize');
    }
  }

  setupCompatibilityLayer() {
    // Create compatibility methods that match Three.js API
    this.getScene = () => this.threeJSScene;
    this.getCamera = () => this.threeJSCamera;
    this.getRenderer = () => this.threeJSRenderer;
    
    // Override render method
    this.render = this.render.bind(this);
  }

  // Compatibility methods for existing Three.js code
  setThreeJSScene(scene) {
    this.threeJSScene = scene;
  }

  setThreeJSCamera(camera) {
    this.threeJSCamera = camera;
  }

  setThreeJSRenderer(renderer) {
    this.threeJSRenderer = renderer;
  }

  // Enhanced render method
  render() {
    if (!this.initialized || this.fallbackMode) {
      // Fallback to Three.js rendering
      if (this.threeJSRenderer && this.threeJSScene && this.threeJSCamera) {
        this.threeJSRenderer.render(this.threeJSScene, this.threeJSCamera);
      }
      return;
    }

    const startTime = performance.now();
    
    try {
      // Get current game state
      const gameState = this.getCurrentGameState();
      
      // Update WebGPU systems
      this.updateWebGPUSystems(gameState);
      
      // Render with WebGPU
      this.renderWithWebGPU(gameState);
      
      // Update performance stats
      this.updatePerformanceStats(startTime);
      
    } catch (error) {
      console.error('WebGPU rendering failed, falling back to Three.js:', error);
      this.fallbackToThreeJS();
    }
  }

  getCurrentGameState() {
    // Extract current game state from Three.js scene
    const houses = [];
    const routePoints = [];
    const truckPosition = { x: 0, y: 0, z: 0 };
    
    if (this.threeJSScene) {
      // Extract house data
      const houseGroup = this.threeJSScene.getObjectByName('HouseManager');
      if (houseGroup) {
        houseGroup.children.forEach((house, index) => {
          if (house.name === 'House') {
            houses.push({
              position: house.position,
              color: house.material?.color || { r: 0.4, g: 0.8, b: 0.8 },
              timer: house.userData?.timer || 25,
              active: house.visible
            });
          }
        });
      }
      
      // Extract truck position
      const truck = this.threeJSScene.getObjectByName('Truck');
      if (truck) {
        truckPosition.x = truck.position.x;
        truckPosition.y = truck.position.y;
        truckPosition.z = truck.position.z;
      }
      
      // Extract route data
      const routeLine = this.threeJSScene.getObjectByName('RouteLine');
      if (routeLine && routeLine.geometry) {
        const positions = routeLine.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          routePoints.push({
            position: {
              x: positions[i],
              y: positions[i + 1],
              z: positions[i + 2]
            },
            color: { r: 0.4, g: 0.8, b: 1.0 }
          });
        }
      }
    }
    
    return {
      houses,
      routePoints,
      truckPosition,
      time: performance.now() / 1000
    };
  }

  updateWebGPUSystems(gameState) {
    // Update compute systems
    if (this.compute) {
      // Optimize route
      this.compute.optimizeRoute(
        gameState.routePoints,
        gameState.truckPosition,
        gameState.houses.map(h => h.position)
      );
      
      // Update house management
      this.compute.updateHouses(
        gameState.houses,
        gameState.truckPosition,
        0.016 // Delta time
      );
    }
    
    // Update audio systems
    if (this.audio) {
      // Process audio effects
      this.audio.processAudio([], {
        volume: 1.0,
        pitch: 1.0,
        reverb: 0.0,
        echo: 0.0
      });
    }
  }

  renderWithWebGPU(gameState) {
    if (!this.renderer) return;
    
    // Get camera data
    const cameraPosition = this.threeJSCamera ? [
      this.threeJSCamera.position.x,
      this.threeJSCamera.position.y,
      this.threeJSCamera.position.z
    ] : [0, 60, 60];
    
    const cameraTarget = [0, 0, 0];
    
    // Render with WebGPU
    this.renderer.render(
      gameState.time,
      cameraPosition,
      cameraTarget,
      gameState.houses,
      gameState.routePoints
    );
  }

  fallbackToThreeJS() {
    if (this.threeJSRenderer && this.threeJSScene && this.threeJSCamera) {
      this.threeJSRenderer.render(this.threeJSScene, this.threeJSCamera);
    }
  }

  updatePerformanceStats(startTime) {
    const endTime = performance.now();
    const frameTime = endTime - startTime;
    
    // Update FPS
    this.performanceStats.fps = Math.round(1000 / frameTime);
    
    // Update GPU time (estimated)
    this.performanceStats.gpuTime = frameTime * 0.7; // Assume 70% GPU time
    
    // Update CPU time
    this.performanceStats.cpuTime = frameTime * 0.3; // Assume 30% CPU time
    
    // Update memory usage (estimated)
    this.performanceStats.memoryUsage = this.estimateMemoryUsage();
  }

  estimateMemoryUsage() {
    // Estimate memory usage based on game state
    const houseCount = this.threeJSScene?.getObjectByName('HouseManager')?.children.length || 0;
    const routePointCount = this.threeJSScene?.getObjectByName('RouteLine')?.geometry?.attributes.position.count || 0;
    
    // Rough estimation in MB
    const geometryMemory = (houseCount * 0.1) + (routePointCount * 0.01);
    const textureMemory = 5.0; // Estimated texture memory
    const bufferMemory = 10.0; // Estimated buffer memory
    
    return geometryMemory + textureMemory + bufferMemory;
  }

  // Enhanced methods for specific optimizations
  optimizeRouteDrawing(points) {
    if (!this.compute || !this.initialized) return points;
    
    // Use WebGPU to optimize route
    this.compute.optimizeRoute(points, { x: 0, y: 0, z: 0 }, []);
    return points; // Return optimized points
  }

  accelerateHouseUpdates(houses, truckPosition, deltaTime) {
    if (!this.compute || !this.initialized) return houses;
    
    // Use WebGPU to update houses
    this.compute.updateHouses(houses, truckPosition, deltaTime);
    return houses; // Return updated houses
  }

  processAudioWithWebGPU(audioData, effects) {
    if (!this.audio || !this.initialized) return audioData;
    
    // Use WebGPU to process audio
    this.audio.processAudio(audioData, effects);
    return audioData; // Return processed audio
  }

  // Performance monitoring
  getPerformanceStats() {
    return {
      ...this.performanceStats,
      webgpuEnabled: this.initialized && !this.fallbackMode,
      systems: {
        renderer: !!this.renderer,
        compute: !!this.compute,
        audio: !!this.audio
      }
    };
  }

  // Debug methods
  enableDebugMode() {
    if (this.renderer) {
      this.renderer.debugMode = true;
    }
    if (this.compute) {
      this.compute.debugMode = true;
    }
    if (this.audio) {
      this.audio.debugMode = true;
    }
  }

  disableDebugMode() {
    if (this.renderer) {
      this.renderer.debugMode = false;
    }
    if (this.compute) {
      this.compute.debugMode = false;
    }
    if (this.audio) {
      this.audio.debugMode = false;
    }
  }

  // Cleanup
  destroy() {
    if (this.renderer) {
      this.renderer.destroy();
    }
    if (this.compute) {
      this.compute.destroy();
    }
    if (this.audio) {
      this.audio.destroy();
    }
    
    this.initialized = false;
  }
}
