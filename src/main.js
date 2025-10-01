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
import { lobbyManager } from "./lobby.js";
import { getHighscore, saveHighscore, getSettings, saveSettings, getLobbySettings } from "./save.js";
import { preloadAssets } from "./asset-loader.js";

export const CONFIG = {
  WORLD_SIZE: 100,
  GRID_RES: 50,
  CLOSE_SNAP: 2.0,
  RDP_EPS: 0,
  LINE_WIDTH: 3,
  ROUTE_ATTACH_RADIUS: 8,
  MAX_POINTS: Infinity, // No limits - truly infinite drawing
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
  targetFPS: 60,
  paused: false,
  tutorialPaused: false,
  pauseCooldown: 0,
  pendingRouteCommit: null,
  routeCooldown: 0,
  rmbCooldown: 0,
  routeCooldownModifier: 1.0,
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

  // Get lobby settings (prioritize over game settings)
  const lobbySettings = getLobbySettings();
  
  state.settings = {
    masterVolume: lobbySettings.masterVolume ?? getSettings().masterVolume ?? 1,
    sfxVolume: lobbySettings.sfxVolume ?? getSettings().sfxVolume ?? 1,
    bgVolume: lobbySettings.bgVolume ?? getSettings().bgVolume ?? 0.3,
    targetFPS: lobbySettings.targetFPS ?? getSettings().targetFPS ?? 60,
  };
  
  ui.setSettings(state.settings, {
    onMasterVolumeChange: handleMasterVolumeChange,
    onSfxVolumeChange: handleSfxVolumeChange,
    onBgVolumeChange: handleBgVolumeChange,
    onFpsChange: handleFpsChange,
  });
  
  audio.initAudio(state.settings);
  console.log("[AUDIO] Audio system initialized");
  
  // Make audio functions available globally for lobby settings
  window.audio = audio;
  
  // Make settings functions available globally for lobby
  window.getLobbySettings = getLobbySettings;
  window.saveSettings = saveSettings;

  // Make pause function available globally for tutorial
  window.globalPauseGame = () => {
    state.paused = true;
    state.tutorialPaused = true;
  };

  window.globalUnpauseGame = () => {
    state.paused = false;
    state.tutorialPaused = false;
  };
  
  // Start background music after audio system is initialized
  audio.startBackgroundMusic();

  state.mapState = initMap(getScene(), state.rng, CONFIG);
  state.truck = new Truck(CONFIG);
  state.truck.addToScene(getScene());
  state.houseManager = new HouseManager(getScene(), state.mapState, state.rng, CONFIG);
  
  // Initialize truck stats in UI after truck is created
  ui.setTruckSpeed(state.truck.baseSpeed);
  ui.setDeliveryRadius(state.truck.deliveryRadius);

  route.initRoute(getScene(), state.mapState, CONFIG);
  route.onRouteCommitted(({ curve, lut, attachInfo }) => {
    // If pause cooldown is active, queue the route commit
    if (state.pauseCooldown > 0) {
      console.log("[PAUSE] Queueing route commit from callback during pause cooldown");
      state.pendingRouteCommit = { curve, lut, attachInfo };
    } else {
      // Immediately attach truck to route if not in pause cooldown
      const info = attachInfo ?? { u: 0 };
      state.truck.attachToCurve(curve, lut, info.u ?? 0, info.point ?? null);
      
    }
  });

  input.initInput(canvas);
  wireInputHandlers();

  setupDebugTools();

  // Initialize lobby system
  lobbyManager.init();
  
  // Make startMainGame function available globally
  window.startMainGame = () => {
    newRun(state.seed);
    state.lastFrameTime = performance.now();
    requestAnimationFrame(tick);
  };
  
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
  state.pauseCooldown = 0;
  state.pendingRouteCommit = null;
  state.routeCooldown = 0;
  state.rmbCooldown = 0;
  state.routeCooldownModifier = 0;
  // Don't reset speed multiplier - preserve user's choice
  state.speedMultiplier = preservedSpeed;
  state.simTimeMs = 0;
  state.mode = "run";
  state.takenUpgrades.clear();
  state.pendingCards = [];
  state.houseManager.reset();

  ui.setPauseState(state.paused);
  ui.setSpeedMultiplier(state.speedMultiplier);
  
  // Update truck stats UI for new run
  ui.setTruckSpeed(state.truck.baseSpeed);
  ui.setDeliveryRadius(state.truck.deliveryRadius);

  buildDefaultRoute();
  ui.setScore(state.score);
  ui.setWeek(state.week);
  ui.setSeedDisplay(state.seed);
  ui.hideGameOver();
  ui.hideUpgradeModal();
}

function tick(now) {
  requestAnimationFrame(tick);
  
  // Calculate delta time and respect target FPS
  const rawDt = Math.min((now - state.lastFrameTime) / 1000, 0.1);
  const targetFrameTime = 1000 / state.targetFPS;
  const actualFrameTime = now - state.lastFrameTime;
  
  // Skip frame if we're running too fast for target FPS
  if (actualFrameTime < targetFrameTime) {
    return;
  }
  
  state.lastFrameTime = now;

  processInput();

  // Update pause cooldown
  if (state.pauseCooldown > 0) {
    state.pauseCooldown -= rawDt;
    if (state.pauseCooldown <= 0) {
      state.pauseCooldown = 0;
      ui.setPauseCooldown(state.pauseCooldown);
      console.log("[PAUSE] Cooldown finished, pause button ready");
      
      // Process any pending route commit
      if (state.pendingRouteCommit) {
        console.log("[PAUSE] Processing pending route commit");
        const result = state.pendingRouteCommit;
        state.pendingRouteCommit = null;
        if (result) {
          const info = result.attachInfo ?? { u: 0 };
          state.truck.attachToCurve(result.curve, result.lut, info.u ?? 0, info.point ?? null);
          console.log("[PAUSE] Truck attached to pending route");
        }
      }
    } else {
      ui.setPauseCooldown(state.pauseCooldown);
    }
  }

  // Update route cooldown
  if (state.routeCooldown > 0) {
    state.routeCooldown -= rawDt;
    if (state.routeCooldown <= 0) {
      state.routeCooldown = 0;
      ui.setRouteCooldown(state.routeCooldown);
      console.log("[ROUTE] Route cooldown finished, can draw routes again");
    } else {
      ui.setRouteCooldown(state.routeCooldown);
    }
  }

  // Update RMB cooldown
  if (state.rmbCooldown > 0) {
    state.rmbCooldown -= rawDt;
    if (state.rmbCooldown <= 0) {
      state.rmbCooldown = 0;
      console.log("[RMB] RMB cooldown finished");
    }
  }

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
    
    
    // Normal route commit
    const result = route.commitRoute(true, {
      anchor: state.truck.group.position,
      attachRadius: CONFIG.ROUTE_ATTACH_RADIUS,
    });
    if (result) {
      console.log("[OK] Route committed successfully");
      state.routeActive = false;
      
      // Start route cooldown after committing a route
      const baseCooldown = 8.0; // 8 second cooldown between routes
      const reduction = Math.abs(state.routeCooldownModifier || 0);
      state.routeCooldown = Math.max(0.5, baseCooldown - reduction); // Minimum 0.5s cooldown
      ui.setRouteCooldown(state.routeCooldown);
      console.log(`[ROUTE] Started route cooldown: ${state.routeCooldown.toFixed(1)}s (base: ${baseCooldown}s, reduction: ${reduction}s)`);
      
      // If pause cooldown is active, queue the route commit
      if (state.pauseCooldown > 0) {
        console.log("[PAUSE] Queueing route commit during pause cooldown");
        state.pendingRouteCommit = result;
      } else {
        // Immediately attach truck to route if not in pause cooldown
        const info = result.attachInfo ?? { u: 0 };
        state.truck.attachToCurve(result.curve, result.lut, info.u ?? 0, info.point ?? null);
      }
      
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

  // Use regular houses
  const houses = state.houseManager.getHouses();
    
  state.truck.update(dt, {
    houses,
    onDeliver: handleDelivery,
    now,
  });

  // Update house manager
  let expired = state.houseManager.update(dt, now);
  
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
  
  // Handle regular house delivery
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
  state.pendingCards = generateChoices(state.rng, state.takenUpgrades, 3, state);
  ui.showUpgradeModal(state.pendingCards, applyUpgradeCard, state);
  state.paused = true;
}

function applyUpgradeCard(card) {
  console.log(`[UPGRADE] applyUpgradeCard called with:`, card);
  
  if (!card) {
    console.log(`[UPGRADE] No card provided`);
    return;
  }
  
  console.log(`[UPGRADE] Applying upgrade: ${card.name} (${card.id})`);
  card.apply(state);
  state.takenUpgrades.add(card.id);
  
  console.log(`[UPGRADE] Upgrade applied successfully. Taken upgrades:`, Array.from(state.takenUpgrades));
  
  // Update UI with new truck stats
  ui.setTruckSpeed(state.truck.baseSpeed);
  ui.setDeliveryRadius(state.truck.deliveryRadius);
  
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
  // Allow route editing even when paused - drawing should work regardless of game state
  // Only check if we're not in game over or upgrade mode
  if (state.mode === "gameover" || state.mode === "upgrade") return;
  
  // Check if route cooldown is active
  if (state.routeCooldown > 0) {
    console.log("[ROUTE] Cannot draw routes - cooldown active");
    ui.showRouteCooldownMessage(state.routeCooldown);
    return;
  }
  
  route.beginRouteDraw();
  state.routeActive = true;
  console.log("[ROUTE] Started route editing (mode:", state.mode, ", paused:", state.paused, ")");
}


function wireInputHandlers() {
  input.on("pointer-down", (payload) => {
    // Allow drawing even when paused - only block in game over or upgrade mode
    if (state.mode === "gameover" || state.mode === "upgrade") return;
    
    if (payload.button === 0) {
      // Left mouse button - start new route or continue existing
      // Check if we can start drawing (not in cooldown)
      if (state.routeCooldown <= 0) {
        beginRouteEditing();
        const world = pointerToWorld(payload);
        if (world) {
          route.updateRouteDraw(world, true);
        }
      } else {
        console.log("[ROUTE] Cannot start drawing - cooldown active");
        ui.showRouteCooldownMessage(state.routeCooldown);
      }
    }
  });

  input.on("pointer-sample", (payload) => {
    if (!payload.down) return;
    
    const world = pointerToWorld(payload);
    if (world) {
      // Allow drawing even when paused - drawing should work regardless of game state
      // Only check for route cooldown, not game mode or pause state
      if (state.routeCooldown <= 0) {
        // If not already drawing, start drawing
        if (!state.routeActive) {
          beginRouteEditing();
        }
        
        // Ensure drawing state is maintained
        route.ensureDrawingState();
        
        // Try to update route drawing
        const success = route.updateRouteDraw(world);
        
        // If drawing failed, force the drawing state and try again
        if (!success && state.routeActive) {
          console.log("[ROUTE] Drawing failed, forcing drawing state");
          route.forceDrawingState();
          route.updateRouteDraw(world);
        }
      } else {
        console.log(`[ROUTE] Drawing blocked - route cooldown: ${state.routeCooldown.toFixed(1)}s`);
      }
    } else {
      console.log(`[ROUTE] Drawing blocked - no world point (pointer: ${payload.x}, ${payload.y})`);
    }
  });

  input.on("pointer-up", (payload) => {
    const world = pointerToWorld(payload);
    if (world) {
      if (state.routeActive && payload.button === 0) {
        route.updateRouteDraw(world, true);
        route.finishRouteDraw();
      }
    }
  });

  // ESC key handling for game menu
  input.on("key-down", (payload) => {
    if (payload.code === "Escape") {
      // Only show ESC menu when in game (not in lobby or tutorial)
      // Allow ESC menu even when paused, but not during tutorial
      if (state.mode === "run" && !state.tutorialPaused) {
        if (window.toggleEscMenu) {
          window.toggleEscMenu();
        }
      }
    }
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
    speedMultiplier: state.speedMultiplier,
    pauseCooldown: state.pauseCooldown
  });
  
  // If trying to pause but cooldown is active, ignore the input
  if (!state.paused && state.pauseCooldown > 0) {
    console.log("[PAUSE] Ignored - cooldown active");
    pauseOperationActive = false;
    return;
  }
  
  // If trying to pause, immediately pause
  if (!state.paused) {
    state.paused = true;
    ui.setPauseState(state.paused);
    console.log("[PAUSE] Game paused immediately");
  } else {
    // If unpausing, start cooldown before allowing pause again
    state.paused = false;
    state.pauseCooldown = 4.0; // 4 second cooldown
    ui.setPauseState(state.paused);
    ui.setPauseCooldown(state.pauseCooldown);
    console.log("[PAUSE] Game unpaused, started cooldown");
  }
  
  console.log("[GAMEPAD] PAUSE TOGGLE - After:", {
    paused: state.paused,
    speedMultiplier: state.speedMultiplier,
    pauseCooldown: state.pauseCooldown
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

function handleMasterVolumeChange(value) {
  const clamped = Math.max(0, Math.min(1, value));
  state.settings.masterVolume = clamped;
  audio.setMasterVolume(clamped);
  saveSettings({ masterVolume: clamped });
}

function handleSfxVolumeChange(value) {
  const clamped = Math.max(0, Math.min(1, value));
  state.settings.sfxVolume = clamped;
  audio.setSfxVolume(clamped);
  saveSettings({ sfxVolume: clamped });
}

function handleBgVolumeChange(value) {
  const clamped = Math.max(0, Math.min(1, value));
  state.settings.bgVolume = clamped;
  audio.setBgVolume(clamped);
  saveSettings({ bgVolume: clamped });
}

function handleFpsChange(fps) {
  state.settings.targetFPS = fps;
  saveSettings({ targetFPS: fps });
  
  // Update target FPS for the game loop
  state.targetFPS = fps;
  console.log(`[SETTINGS] Target FPS set to: ${fps}`);
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




























