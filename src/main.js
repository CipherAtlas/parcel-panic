// Deviations: placeholder audio clips in assets/sfx/*.ogg are silent stubs; replace with real SFX.

import { Vector3 } from "three";
import Stats from "stats.js";
import GUI from "lil-gui";
import { initRenderer, render, getCamera, getScene, addResizeCallback, isWebGPUEnabled, getWebGPUPerformanceStats } from "./renderer.js";
import * as input from "./input.js";
import * as route from "./route.js";
import { createRNG, normalizedSeed } from "./rng.js";
import { initMap, setGridVisible } from "./map.js";
import { Truck } from "./truck.js";
import { HouseManager } from "./house.js";
import { generateChoices } from "./upgrades.js";
import * as ui from "./ui.js";
import * as audio from "./audio.js";
import { getHighscore, saveHighscore, getSettings, saveSettings } from "./save.js";
import { preloadAssets } from "./asset-loader.js";

export const CONFIG = {
  WORLD_SIZE: 100,
  GRID_RES: 50,
  CLOSE_SNAP: 2.0,
  RDP_EPS: 0,
  LINE_WIDTH: 3,
  ROUTE_ATTACH_RADIUS: 8,
  MAX_POINTS: 400,
  MIN_SAMPLE_DIST: 0.35,
  BASE_SPEED: 9,
  DELIVERY_RADIUS: 2.0,
  FIRST_SPAWN_AT: 5,
  SPAWN_INTERVAL_START: 14,
  SPAWN_INTERVAL_END: 5,
  DEADLINE_START: 40,
  DEADLINE_END: 18,
  WEEK_SECONDS: 90, // 90 seconds per week (45 seconds at 2x speed)
};

const state = {
  rng: null,
  seed: null,
  debug: false,
  stats: null,
  statsEnabled: false,
  gui: null,
  mapState: null,
  truck: null,
  houseManager: null,
  score: 0,
  week: 1,
  runTime: 0,
  weekTimer: 0,
  highscore: 0,
  takenUpgrades: new Set(),
  pendingCards: [],
  mode: "boot",
  lastFrameTime: 0,
  fpsAccum: 0,
  fpsFrames: 0,
  fps: 0,
  paused: false,
  settings: {
    volume: 1,
  },
  gridVisible: false,
  routeActive: false,
  speedMultiplier: parseInt(localStorage.getItem('parcelPanicSpeedMultiplier')) || 1,
  simTimeMs: 0,
};

const pointerWorld = new Vector3();

// Start loading sequence
startLoading();

function startLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingFill = document.getElementById('loading-fill');
  const loadingText = document.getElementById('loading-text');
  const loadingPercentage = document.getElementById('loading-percentage');
  
  let progress = 0;
  const totalSteps = 7;
  
  function updateProgress(step, text) {
    progress = Math.round((step / totalSteps) * 100);
    loadingFill.style.width = `${progress}%`;
    loadingText.textContent = text;
    loadingPercentage.textContent = `${progress}%`;
  }
  
  // Loading sequence
  setTimeout(() => {
    updateProgress(1, "Initializing audio system...");
    
    setTimeout(() => {
      updateProgress(2, "Loading 3D models...");
      
      // Preload assets
      preloadAssets().then(() => {
        updateProgress(3, "Loading game assets...");
        
        setTimeout(() => {
          updateProgress(4, "Setting up WebGPU...");
          
          setTimeout(() => {
            updateProgress(5, "Initializing game engine...");
            
            setTimeout(() => {
              updateProgress(6, "Preparing game world...");
              
              setTimeout(() => {
                updateProgress(7, "Starting game...");
                
                setTimeout(() => {
                  // Hide loading screen and start game
                  loadingScreen.classList.add('hidden');
                  setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    boot();
                  }, 500);
                }, 500);
              }, 300);
            }, 300);
          }, 400);
        }, 200);
      }).catch((error) => {
        console.warn("Asset preloading failed, continuing with fallbacks:", error);
        updateProgress(3, "Loading game assets...");
        
        setTimeout(() => {
          updateProgress(4, "Setting up WebGPU...");
          
          setTimeout(() => {
            updateProgress(5, "Initializing game engine...");
            
            setTimeout(() => {
              updateProgress(6, "Preparing game world...");
              
              setTimeout(() => {
                updateProgress(7, "Starting game...");
                
                setTimeout(() => {
                  // Hide loading screen and start game
                  loadingScreen.classList.add('hidden');
                  setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    boot();
                  }, 500);
                }, 500);
              }, 300);
            }, 300);
          }, 400);
        }, 200);
      });
    }, 200);
  }, 100);
}

function boot() {
  ui.initUI();
  ui.bindPause(togglePause);
  ui.bindSpeed(toggleSpeed);
  ui.setPauseState(state.paused);
  ui.setSpeedMultiplier(state.speedMultiplier);

  const canvas = document.querySelector("canvas#stage");
  initRenderer(canvas, CONFIG);
  addResizeCallback((width, height) => {
    route.setViewportSize(width, height);
  });
  
  // Initialize WebGPU status
  initializeWebGPUStatus();

  const url = new URL(window.location.href);
  const seedParam = url.searchParams.get("seed");
  const debugParam = url.searchParams.get("debug");
  state.debug = debugParam === "1";

  state.seed = seedParam ? normalizedSeed(Number(seedParam) || seedParam) : normalizedSeed(Math.random() * 1e9);
  url.searchParams.set("seed", String(state.seed));
  window.history.replaceState({}, "", url.toString());

  state.rng = createRNG(state.seed);
  state.highscore = getHighscore();

  state.settings = {
    volume: getSettings().volume ?? 1,
    bgMusicVolume: getSettings().bgMusicVolume ?? 0.3,
  };
  ui.setSettings(state.settings, handleVolumeChange, handleBackgroundMusicVolumeChange);
  audio.initAudio(state.settings);
  console.log("[AUDIO] Audio system initialized");
  
  // Start background music after audio system is initialized
  audio.startBackgroundMusic();

  state.mapState = initMap(getScene(), state.rng, CONFIG);
  state.truck = new Truck(CONFIG);
  state.truck.addToScene(getScene());
  state.houseManager = new HouseManager(getScene(), state.mapState, state.rng, CONFIG);

  route.initRoute(getScene(), state.mapState, CONFIG);
  route.onRouteCommitted(({ curve, lut, attachInfo }) => {
    const info = attachInfo ?? { u: 0 };
    state.truck.attachToCurve(curve, lut, info.u ?? 0, info.point ?? null);
  });

  input.initInput(canvas);
  wireInputHandlers();

  setupDebugTools();

  newRun(state.seed);

  state.lastFrameTime = performance.now();
  requestAnimationFrame(tick);
}

function newRun(seed) {
  console.log("[RESTART] NEW RUN CALLED - Preserving speed:", state.speedMultiplier);
  const preservedSpeed = state.speedMultiplier; // Preserve current speed
  
  state.seed = seed;
  state.rng = createRNG(seed);
  state.houseManager.setRng(state.rng);
  state.score = 0;
  state.week = 1;
  state.runTime = 0;
  state.weekTimer = CONFIG.WEEK_SECONDS;
  state.paused = false;
  // Don't reset speed multiplier - preserve user's choice
  state.speedMultiplier = preservedSpeed;
  state.simTimeMs = 0;
  state.mode = "run";
  state.takenUpgrades.clear();
  state.pendingCards = [];
  state.houseManager.reset();

  ui.setPauseState(state.paused);
  ui.setSpeedMultiplier(state.speedMultiplier);

  buildDefaultRoute();
  ui.setScore(state.score);
  ui.setWeek(state.week);
  ui.setSeedDisplay(state.seed);
  ui.hideGameOver();
  ui.hideUpgradeModal();
}

function tick(now) {
  requestAnimationFrame(tick);
  const rawDt = Math.min((now - state.lastFrameTime) / 1000, 0.1);
  state.lastFrameTime = now;

  processInput();

  const active = !state.paused && state.mode === "run";
  const simDt = active ? rawDt * state.speedMultiplier : 0;

  if (simDt > 0) {
    state.simTimeMs += simDt * 1000;
    updateSimulation(simDt, state.simTimeMs);
  }

  maybeUpdateStats();
  updateWebGPUStatus();
  render();
}

function processInput() {
  if (input.consumeKey("Space")) {
    togglePause();
  }
  if (input.consumeKey("KeyT")) {
    toggleSpeed();
  }
  if (input.consumeKey("KeyG")) {
    state.gridVisible = !state.gridVisible;
    setGridVisible(state.mapState, state.gridVisible);
  }
  if (input.consumeKey("KeyD")) {
    state.debug = !state.debug;
    toggleDebugTools(state.debug);
  }
  if (input.consumeKey("Backquote")) {
    state.statsEnabled = !state.statsEnabled;
    if (state.stats) {
      state.stats.dom.style.display = state.statsEnabled ? "block" : "none";
    }
  }
  if (state.mode === "upgrade") {
    if (input.consumeKey("Digit1")) ui.selectCard(0);
    if (input.consumeKey("Digit2")) ui.selectCard(1);
    if (input.consumeKey("Digit3")) ui.selectCard(2);
  }
  if (input.consumeKey("Enter")) {
    console.log("[KEYBOARD] Enter key pressed - attempting to commit route");
    const result = route.commitRoute(true, {
      anchor: state.truck.group.position,
      attachRadius: CONFIG.ROUTE_ATTACH_RADIUS,
    });
    if (result) {
      console.log("[OK] Route committed successfully");
      state.routeActive = false;
      // Play route commit sound when route is successfully committed
      console.log("[AUDIO] Playing route_commit sound (Enter key)");
      audio.play("route_commit");
    } else {
      console.log("[FAIL] Route commit failed - route cancelled");
      route.cancelRoute();
      state.routeActive = false;
    }
  }
  if (state.routeActive && input.consumeKey("Escape")) {
    route.cancelRoute();
    state.routeActive = false;
  }
  if (input.consumeKey("KeyR")) {
    beginRouteEditing();
  }
}

function updateSimulation(dt, now) {
  state.runTime += dt;
  state.weekTimer -= dt;

  // Update UI
  ui.setWeekTimer(state.weekTimer);

  const houses = state.houseManager.getHouses();
  state.truck.update(dt, {
    houses,
    onDeliver: handleDelivery,
    now,
  });

  const expired = state.houseManager.update(dt, now);
  if (expired) {
    // Play house expire sound when house visually disappears
    audio.play("house_expire");
    triggerGameOver("deadline");
    return;
  }

  // Check if a house was just spawned and play sound
  if (state.houseManager.wasJustSpawned()) {
    console.log("[AUDIO] Playing house_spawn sound");
    audio.play("house_spawn");
  }

  if (state.weekTimer <= 0) {
    enterUpgradePhase();
  }


  accumulateFPS(dt);
}

function handleDelivery(house, timestamp) {
  const now = typeof timestamp === "number" ? timestamp : performance.now();
  state.houseManager.handleDelivery(house, now);
  state.score += 1;
  ui.setScore(state.score);
  
  // Delivery completed (no audio cue)
}


function enterUpgradePhase() {
  state.mode = "upgrade";
  state.week += 1;
  ui.setWeek(state.week);
  state.weekTimer = CONFIG.WEEK_SECONDS;
  
  // Reset house counter for new week
  state.houseManager.resetWeek();
  
  // Play week complete sound when upgrade modal appears
  audio.play("week_complete");
  state.pendingCards = generateChoices(state.rng, state.takenUpgrades, 3, {
    truck: state.truck,
    config: CONFIG,
    houseManager: state.houseManager,
  });
  ui.showUpgradeModal(state.pendingCards, applyUpgradeCard);
  state.paused = true;
}

function applyUpgradeCard(card) {
  if (!card) return;
  card.apply({
    truck: state.truck,
    config: CONFIG,
    houseManager: state.houseManager,
  });
  state.takenUpgrades.add(card.id);
  ui.hideUpgradeModal();
  state.mode = "run";
  state.paused = false;
}

function triggerGameOver(reason) {
  state.mode = "gameover";
  state.paused = true;
  
  const best = Math.max(state.score, state.highscore);
  saveHighscore(state.score);
  state.highscore = best;
  ui.showGameOver({
    score: state.score,
    highscore: best,
    seed: state.seed,
    reason,
  }, {
    onRetry: () => restartRun(state.seed),
    onNewRun: () => restartRun(normalizedSeed(Math.random() * 1e9)),
  });
  
  // Play game over sound when game over modal appears
  audio.play("gameover");
}

function restartRun(seed) {
  ui.hideGameOver();
  const url = new URL(window.location.href);
  url.searchParams.set("seed", String(seed));
  window.history.replaceState({}, "", url.toString());
  newRun(seed);
  state.lastFrameTime = performance.now();
}

function beginRouteEditing() {
  if (state.mode !== "run") return;
  route.beginRouteDraw();
  state.routeActive = true;
}

function wireInputHandlers() {
  input.on("pointer-down", (payload) => {
    if (payload.button !== 0 || state.mode !== "run") return;
    beginRouteEditing();
    const world = pointerToWorld(payload);
    if (world) {
      route.updateRouteDraw(world, true);
    }
  });

  input.on("pointer-sample", (payload) => {
    if (!state.routeActive || !payload.down) return;
    const world = pointerToWorld(payload);
    if (world) {
      route.updateRouteDraw(world);
    }
  });

  input.on("pointer-up", (payload) => {
    if (!state.routeActive || payload.button !== 0) return;
    const world = pointerToWorld(payload);
    if (world) {
      route.updateRouteDraw(world, true);
    }
    route.finishRouteDraw();
  });
}

function pointerToWorld(payload) {
  const camera = getCamera();
  if (!camera) return null;
  const point = route.raycastToGround(camera, { x: payload.ndcX, y: payload.ndcY }, pointerWorld);
  
  // Check if point is within world boundaries
  if (point) {
    const halfSize = CONFIG.WORLD_SIZE / 2;
    if (Math.abs(point.x) > halfSize || Math.abs(point.z) > halfSize) {
      return null; // Point is outside world boundaries
    }
  }
  
  return point;
}

function buildDefaultRoute() {
  const radius = CONFIG.WORLD_SIZE * 0.3;
  const segments = 24;
  route.beginRouteDraw();
  for (let i = 0; i <= segments; i += 1) {
    const t = (i / segments) * Math.PI * 2;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    route.updateRouteDraw({ x, z }, true);
  }
  route.commitRoute();
  state.routeActive = false;
  
  // No audio for initial route setup
}

// Flag to prevent speed changes during pause operations
let pauseOperationActive = false;

function togglePause() {
  if (state.mode === "gameover") return;
  
  pauseOperationActive = true;
  
  console.log("[GAMEPAD] PAUSE TOGGLE - Before:", {
    paused: state.paused,
    speedMultiplier: state.speedMultiplier
  });
  
  state.paused = !state.paused;
  ui.setPauseState(state.paused);
  
  console.log("[GAMEPAD] PAUSE TOGGLE - After:", {
    paused: state.paused,
    speedMultiplier: state.speedMultiplier
  });
  
  // Clear the flag after a short delay to prevent accidental speed changes
  setTimeout(() => {
    pauseOperationActive = false;
  }, 100);
}

function toggleSpeed() {
  if (pauseOperationActive) {
    console.log("[BLOCKED] BLOCKED SPEED CHANGE - Pause operation in progress");
    return;
  }
  
  const oldSpeed = state.speedMultiplier;
  state.speedMultiplier = state.speedMultiplier === 1 ? 2 : 1;
  
  // Persist speed setting
  localStorage.setItem('parcelPanicSpeedMultiplier', state.speedMultiplier.toString());
  
  console.log("[SPEED] SPEED TOGGLE:", {
    from: oldSpeed,
    to: state.speedMultiplier
  });
  
  ui.setSpeedMultiplier(state.speedMultiplier);
}


function accumulateFPS(dt) {
  state.fpsAccum += dt;
  state.fpsFrames += 1;
  if (state.fpsAccum >= 0.5) {
    state.fps = state.fpsFrames / state.fpsAccum;
    ui.setFPS(state.fps, state.debug);
    state.fpsAccum = 0;
    state.fpsFrames = 0;
  }
}

function maybeUpdateStats() {
  if (state.stats && state.statsEnabled) {
    state.stats.update();
  }
}

function setupDebugTools() {
  if (state.debug) {
    state.stats = new Stats();
    state.stats.showPanel(0);
    document.body.appendChild(state.stats.dom);
    state.statsEnabled = true;

    state.gui = new GUI({ title: "Parcel Panic" });
    state.gui.add(CONFIG, "BASE_SPEED", 4, 20, 0.1).name("Base Speed");
    state.gui.add(CONFIG, "DELIVERY_RADIUS", 1, 6, 0.1).name("Delivery Radius");
    state.gui.add(CONFIG, "SPAWN_INTERVAL_END", 2, 15, 0.25).name("Spawn Interval End");
    state.gui.add(CONFIG, "DEADLINE_END", 8, 40, 0.5).name("Deadline End");
    state.gui.hide();
  }
}

function toggleDebugTools(enabled) {
  if (enabled) {
    if (!state.stats) {
      state.stats = new Stats();
      state.stats.showPanel(0);
      document.body.appendChild(state.stats.dom);
    }
    state.statsEnabled = true;
    if (state.stats) {
      state.stats.dom.style.display = "block";
    }
    if (!state.gui) {
      state.gui = new GUI({ title: "Parcel Panic" });
      state.gui.add(CONFIG, "BASE_SPEED", 4, 20, 0.1).name("Base Speed");
      state.gui.add(CONFIG, "DELIVERY_RADIUS", 1, 6, 0.1).name("Delivery Radius");
      state.gui.add(CONFIG, "SPAWN_INTERVAL_END", 2, 15, 0.25).name("Spawn Interval End");
      state.gui.add(CONFIG, "DEADLINE_END", 8, 40, 0.5).name("Deadline End");
      state.gui.hide();
    }
  } else {
    state.statsEnabled = false;
    if (state.stats) {
      state.stats.dom.style.display = "none";
    }
    if (state.gui) {
      state.gui.hide();
    }
  }
}

function handleVolumeChange(value) {
  const clamped = Math.max(0, Math.min(1, value));
  state.settings.volume = clamped;
  audio.setVolume(clamped);
  saveSettings({ volume: clamped });
}

function handleBackgroundMusicVolumeChange(value) {
  const clamped = Math.max(0, Math.min(1, value));
  state.settings.bgMusicVolume = clamped;
  audio.setBackgroundMusicVolume(clamped);
  saveSettings({ bgMusicVolume: clamped });
}

// WebGPU Status Functions
function initializeWebGPUStatus() {
  // Set initial status
  ui.setWebGPUStatus('checking');
  
  // Check WebGPU status after a short delay to allow initialization
  setTimeout(() => {
    if (isWebGPUEnabled()) {
      ui.setWebGPUStatus('enabled');
      console.log('[OK] WebGPU is active - enhanced performance available');
    } else {
      // Always show WebGL fallback for integrated graphics
      ui.setWebGPUStatus('disabled');
      console.log('[WARN] WebGPU not available - using WebGL fallback');
      console.log('[TIP] WebGPU requires a dedicated GPU (NVIDIA/AMD graphics card)');
    }
  }, 1000);
}

function updateWebGPUStatus() {
  if (isWebGPUEnabled()) {
    const stats = getWebGPUPerformanceStats();
    if (stats) {
      ui.updateWebGPUPerformanceStats(stats);
    }
  }
}




























