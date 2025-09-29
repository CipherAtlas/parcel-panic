import {
  AmbientLight,
  DirectionalLight,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "../node_modules/three/build/three.module.js";
import { PALETTE } from "./utils.js";
import { WebGPUIntegration } from "./webgpu/webgpu-integration.js";

let renderer = null;
let camera = null;
let scene = null;
let webgpuIntegration = null;
const resizeCallbacks = new Set();
const useOrtho = true;
const cameraTarget = new Vector3(0, 0, 0);
const cameraOffset = new Vector3(0, 60, 60);

export async function initRenderer(canvas, config) {
  scene = new Scene();
  scene.background = PALETTE.background;

  renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = SRGBColorSpace;

  // Initialize WebGPU integration
  webgpuIntegration = new WebGPUIntegration(canvas, config);
  const webgpuSuccess = await webgpuIntegration.initialize();
  
  if (webgpuSuccess) {
    console.log('WebGPU integration enabled - enhanced performance available');
    webgpuIntegration.setThreeJSScene(scene);
  } else {
    console.log('WebGPU not available - using standard Three.js rendering');
  }

  const aspect = window.innerWidth / window.innerHeight;
  if (useOrtho) {
    const frustumSize = config.WORLD_SIZE * 0.75;
    camera = new OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      -200,
      400,
    );
  } else {
    camera = new PerspectiveCamera(45, aspect, 0.1, 500);
  }
  camera.position.copy(cameraOffset);
  camera.lookAt(cameraTarget);

  // Set camera for WebGPU integration
  if (webgpuIntegration) {
    webgpuIntegration.setThreeJSCamera(camera);
    webgpuIntegration.setThreeJSRenderer(renderer);
  }

  addLights(scene);
  handleResize(config);

  window.addEventListener("resize", () => handleResize(config));

  return { renderer, scene, camera };
}

export function getRenderer() {
  return renderer;
}

export function getScene() {
  return scene;
}

export function getCamera() {
  return camera;
}

export function render() {
  if (!renderer || !scene || !camera) return;
  
  // Use WebGPU integration if available
  if (webgpuIntegration && webgpuIntegration.initialized) {
    webgpuIntegration.render();
  } else {
    // Fallback to standard Three.js rendering
    renderer.render(scene, camera);
  }
}

export function setCameraBounds(size) {
  if (!(camera instanceof OrthographicCamera)) return;
  const aspect = window.innerWidth / window.innerHeight;
  camera.left = (-size * aspect) / 2;
  camera.right = (size * aspect) / 2;
  camera.top = size / 2;
  camera.bottom = -size / 2;
  camera.updateProjectionMatrix();
}

export function addResizeCallback(fn) {
  if (typeof fn === "function") {
    resizeCallbacks.add(fn);
  }
  return () => resizeCallbacks.delete(fn);
}

function handleResize(config) {
  if (!renderer || !camera) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height, false);
  const aspect = width / height;

  if (camera instanceof OrthographicCamera) {
    const frustumSize = config.WORLD_SIZE * 0.85;
    camera.left = (-frustumSize * aspect) / 2;
    camera.right = (frustumSize * aspect) / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;
    camera.updateProjectionMatrix();
  } else if (camera instanceof PerspectiveCamera) {
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }

  for (const cb of resizeCallbacks) {
    cb(width, height, renderer);
  }
}

function addLights(scene) {
  const ambient = new AmbientLight(0xffffff, 0.55);
  scene.add(ambient);

  const dir = new DirectionalLight(0xffffff, 0.65);
  dir.position.set(60, 80, 40);
  scene.add(dir);
}

// WebGPU-specific optimizations
export function getWebGPUPerformanceStats() {
  if (webgpuIntegration) {
    return webgpuIntegration.getPerformanceStats();
  }
  return null;
}

export function enableWebGPUDebugMode() {
  if (webgpuIntegration) {
    webgpuIntegration.enableDebugMode();
  }
}

export function disableWebGPUDebugMode() {
  if (webgpuIntegration) {
    webgpuIntegration.disableDebugMode();
  }
}

export function isWebGPUEnabled() {
  return webgpuIntegration && webgpuIntegration.initialized;
}

export function optimizeRouteWithWebGPU(points) {
  if (webgpuIntegration && webgpuIntegration.initialized) {
    return webgpuIntegration.optimizeRouteDrawing(points);
  }
  return points;
}

export function accelerateHouseUpdatesWithWebGPU(houses, truckPosition, deltaTime) {
  if (webgpuIntegration && webgpuIntegration.initialized) {
    return webgpuIntegration.accelerateHouseUpdates(houses, truckPosition, deltaTime);
  }
  return houses;
}

