import { OBJLoader } from "../node_modules/three/examples/jsm/loaders/OBJLoader.js";

// Asset cache to store loaded models
const assetCache = new Map();

// Preload all game assets
export async function preloadAssets() {
  console.log("[ASSETS] Starting asset preloading...");
  
  const assets = [
    { name: 'truck', path: 'assets/models/truck.obj' },
    { name: 'house', path: 'assets/models/house.obj' }
  ];
  
  const loader = new OBJLoader();
  const loadPromises = assets.map(asset => loadAsset(loader, asset));
  
  try {
    const results = await Promise.all(loadPromises);
    console.log("[OK] All assets preloaded successfully");
    return results;
  } catch (error) {
    console.warn("[WARN] Some assets failed to load:", error);
    return [];
  }
}

// Load individual asset
function loadAsset(loader, asset) {
  return new Promise((resolve, reject) => {
    loader.load(
      asset.path,
      (object) => {
        // Store in cache
        assetCache.set(asset.name, object);
        console.log(`[OK] ${asset.name} asset loaded`);
        resolve({ name: asset.name, object, success: true });
      },
      (progress) => {
        const percent = Math.round((progress.loaded / progress.total) * 100);
        console.log(`Loading ${asset.name}: ${percent}%`);
      },
      (error) => {
        console.warn(`[FAIL] Failed to load ${asset.name}:`, error);
        resolve({ name: asset.name, object: null, success: false });
      }
    );
  });
}

// Get cached asset
export function getAsset(name) {
  return assetCache.get(name);
}

// Check if asset is loaded
export function isAssetLoaded(name) {
  return assetCache.has(name);
}

// Get all loaded assets
export function getAllAssets() {
  return assetCache;
}
