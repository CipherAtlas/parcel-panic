const state = {
  pauseBtn: null,
  speedBtn: null,
  pauseIcon: null,
  speedLabel: null,
  hud: null,
  scoreLabel: null,
  weekLabel: null,
  seedLabel: null,
  fpsLabel: null,
  debugWrap: null,
  upgradeModal: null,
  upgradeCards: null,
  gameOverModal: null,
  gameOverScore: null,
  gameOverHigh: null,
  gameOverSeed: null,
  retryBtn: null,
  newRunBtn: null,
  settingsBtn: null,
  settingsPanel: null,
  volumeSlider: null,
  bgMusicVolumeSlider: null,
  onPausePress: null,
  onSpeedPress: null,
  onUpgradeSelect: null,
  onRetry: null,
  onNewRun: null,
  onVolumeChange: null,
  onBackgroundMusicVolumeChange: null,
  currentCards: [],
};

export function initUI() {
  state.pauseBtn = document.querySelector('[data-action=pause]');
  state.speedBtn = document.querySelector('[data-action=speed]');
  state.pauseIcon = document.querySelector('[data-ui=pause-icon]');
  state.speedLabel = document.querySelector('[data-ui=speed-label]');

  // Updated selectors for new layout
  state.weekLabel = document.querySelector('[data-ui=week]');
  state.weekTimerLabel = document.querySelector('[data-ui=week-timer]');
  state.seedLabel = document.querySelector('[data-ui=seed]');
  state.webgpuStatus = document.querySelector('[data-ui=webgpu-status]');
  state.fpsLabel = document.querySelector('[data-ui=fps]');
  state.debugWrap = document.querySelector('[data-ui=debug]');

  state.upgradeModal = document.querySelector('.upgrade-modal');
  state.upgradeCards = document.querySelector('.upgrade-cards');

  state.gameOverModal = document.querySelector('.gameover-modal');
  state.gameOverScore = document.querySelector('[data-ui=final-score]');
  state.gameOverHigh = document.querySelector('[data-ui=final-best]');
  state.gameOverSeed = document.querySelector('[data-ui=final-seed]');
  state.retryBtn = document.querySelector('[data-action=retry]');
  state.newRunBtn = document.querySelector('[data-action=new-seed]');

  state.settingsBtn = document.querySelector('[data-action=settings]');
  state.settingsPanel = document.querySelector('.settings-panel');
  state.volumeSlider = document.querySelector('[data-setting=volume]');
  state.bgMusicVolumeSlider = document.querySelector('[data-setting=bgMusicVolume]');

  state.pauseBtn?.addEventListener('click', () => state.onPausePress?.());
  state.speedBtn?.addEventListener('click', (event) => {
    console.log("[ALERT] SPEED BUTTON CLICKED!", {
      event: event.type,
      isTrusted: event.isTrusted,
      target: event.target,
      currentTarget: event.currentTarget
    });
    console.trace("Speed button click stack trace:");
    state.onSpeedPress?.();
  });
  state.extendBtn?.addEventListener('click', () => state.onExtendPress?.());
  state.retryBtn?.addEventListener('click', () => state.onRetry?.());
  state.newRunBtn?.addEventListener('click', () => state.onNewRun?.());
  state.settingsBtn?.addEventListener('click', toggleSettings);
  
  // Social button event listeners
  document.querySelector('[data-action=twitter]')?.addEventListener('click', () => {
    // Replace with your Twitter profile URL
    window.open('https://x.com/ariescipher7', '_blank');
  });
  document.querySelector('[data-action=itch]')?.addEventListener('click', () => {
    // Replace with your itch.io game page URL
    window.open('https://cipheratlas.itch.io/', '_blank');
  });

  state.volumeSlider?.addEventListener('input', (event) => {
    const value = Number(event.target.value);
    state.onVolumeChange?.(value);
  });

  state.bgMusicVolumeSlider?.addEventListener('input', (event) => {
    const value = Number(event.target.value);
    state.onBackgroundMusicVolumeChange?.(value);
  });

  setPauseState(false);
  // Don't reset speed multiplier here - let the main game control it
}

export function setScore(score) {
  if (state.scoreLabel) {
    state.scoreLabel.textContent = String(score);
  }
}

export function setWeek(week) {
  if (state.weekLabel) {
    state.weekLabel.textContent = String(week);
  }
}

export function setWeekTimer(timer) {
  if (state.weekTimerLabel) {
    state.weekTimerLabel.textContent = String(Math.ceil(timer));
  }
}

// Removed setUpgradeCount function

export function setSeedDisplay(seed) {
  if (state.seedLabel) {
    state.seedLabel.textContent = seed;
  }
}


export function setFPS(fps, visible) {
  if (!state.debugWrap) return;
  state.debugWrap.classList.toggle("hidden", !visible);
  if (visible && state.fpsLabel) {
    state.fpsLabel.textContent = `${Math.round(fps)}`;
  }
}

export function showUpgradeModal(cards, onSelect, gameState) {
  if (!state.upgradeModal || !state.upgradeCards) return;
  state.onUpgradeSelect = onSelect;
  state.currentCards = cards;
  state.upgradeCards.innerHTML = "";
  cards.forEach((card, index) => {
    const el = document.createElement("button");
    el.className = "card";
    el.dataset.cardId = card.id;
    
    // Use dynamic description if available, otherwise use static desc
    const description = card.getDesc ? card.getDesc(gameState) : card.desc;
    
    el.innerHTML = `<span class="card-index">${index + 1}</span>
      <span class="card-title">${card.name}</span>
      <span class="card-desc">${description}</span>`;
    el.addEventListener("click", () => selectCard(index));
    state.upgradeCards.appendChild(el);
  });
  document.body.classList.add("modal-open");
  state.upgradeModal.classList.add("open");
}

export function hideUpgradeModal() {
  if (!state.upgradeModal) return;
  state.onUpgradeSelect = null;
  state.currentCards = [];
  document.body.classList.remove("modal-open");
  state.upgradeModal.classList.remove("open");
}

export function selectCard(index) {
  if (!state.onUpgradeSelect) return;
  const card = state.currentCards[index];
  if (!card) return;
  state.onUpgradeSelect(card, index);
}

export function showGameOver(stats, { onRetry, onNewRun }) {
  if (!state.gameOverModal) return;
  state.onRetry = onRetry;
  state.onNewRun = onNewRun;
  if (state.gameOverScore) state.gameOverScore.textContent = String(stats.score ?? 0);
  if (state.gameOverHigh) state.gameOverHigh.textContent = String(stats.highscore ?? 0);
  if (state.gameOverSeed) state.gameOverSeed.textContent = stats.seed ?? "";
  document.body.classList.add("modal-open");
  state.gameOverModal.classList.add("open");
}

export function hideGameOver() {
  if (!state.gameOverModal) return;
  state.gameOverModal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

export function setSettings(settings, onVolumeChange, onBackgroundMusicVolumeChange) {
  state.onVolumeChange = onVolumeChange;
  state.onBackgroundMusicVolumeChange = onBackgroundMusicVolumeChange;
  if (state.volumeSlider) {
    state.volumeSlider.value = String(settings.volume ?? 1);
  }
  if (state.bgMusicVolumeSlider) {
    state.bgMusicVolumeSlider.value = String(settings.bgMusicVolume ?? 0.3);
  }
}

export function closeAllModals() {
  hideUpgradeModal();
  hideGameOver();
  state.settingsPanel?.classList.remove("open");
  document.body.classList.remove("modal-open");
}

export function setHUDVisible(visible) {
  state.hud?.classList.toggle("hidden", !visible);
}

function toggleSettings() {
  const open = state.settingsPanel?.classList.toggle("open");
  document.body.classList.toggle("modal-open", !!open);
}


export function bindPause(handler) {
  state.onPausePress = handler;
}

export function bindSpeed(handler) {
  state.onSpeedPress = handler;
}


export function setPauseState(paused) {
  const playSymbol = String.fromCharCode(0x25B6);
  const pauseSymbol = String.fromCharCode(0x23F8);
  if (state.pauseBtn) {
    state.pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false");
    state.pauseBtn.classList.toggle("active", paused);
    state.pauseBtn.title = paused ? "Resume (Space)" : "Pause (Space)";
  }
  if (state.pauseIcon) {
    state.pauseIcon.textContent = paused ? playSymbol : pauseSymbol;
  }
}

export function setPauseCooldown(cooldown) {
  if (state.pauseBtn) {
    if (cooldown > 0) {
      const countdown = Math.ceil(cooldown);
      state.pauseBtn.title = `Can pause in ${countdown}...`;
      state.pauseBtn.classList.add("cooldown");
      
      // Show countdown on the button
      if (state.pauseIcon) {
        state.pauseIcon.textContent = countdown.toString();
      }
    } else {
      state.pauseBtn.title = "Pause (Space)";
      state.pauseBtn.classList.remove("cooldown");
      
      // Reset to pause icon
      if (state.pauseIcon) {
        state.pauseIcon.textContent = String.fromCharCode(0x23F8);
      }
    }
  }
}

export function setSpeedMultiplier(multiplier) {
  console.log("[UI] UI setSpeedMultiplier called with:", multiplier);
  console.trace("Stack trace:");
  
  const symbol = String.fromCharCode(0x00D7);
  if (state.speedLabel) {
    state.speedLabel.textContent = multiplier + symbol;
  }
  if (state.speedBtn) {
    const fast = multiplier > 1;
    state.speedBtn.setAttribute("aria-pressed", fast ? "true" : "false");
    state.speedBtn.classList.toggle("active", fast);
    state.speedBtn.title = fast ? "Back to 1" + symbol : "Toggle 2" + symbol + " speed";
  }
}

export function setRouteCooldown(cooldown) {
  const routeCooldownEl = document.querySelector('[data-ui="route-cooldown"]');
  if (routeCooldownEl) {
    if (cooldown > 0) {
      const countdown = Math.ceil(cooldown);
      routeCooldownEl.textContent = `Route cooldown: ${countdown}s`;
      routeCooldownEl.className = 'route-cooldown active';
    } else {
      routeCooldownEl.textContent = 'Ready to draw routes';
      routeCooldownEl.className = 'route-cooldown';
    }
  }
}


export function showRouteCooldownMessage(cooldown) {
  // Show a temporary message that routes are on cooldown
  const message = document.createElement('div');
  message.className = 'route-cooldown-message';
  message.textContent = `Route cooldown: ${Math.ceil(cooldown)}s remaining`;
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.remove();
  }, 2000);
}

// Timer optimization UI functions
export function showTimerOptimizationStats(stats) {
  if (!state.debugWrap) return;
  
  // Create or update timer stats display
  let timerStatsEl = document.querySelector('[data-ui=timer-stats]');
  if (!timerStatsEl) {
    timerStatsEl = document.createElement('div');
    timerStatsEl.setAttribute('data-ui', 'timer-stats');
    timerStatsEl.className = 'timer-stats';
    timerStatsEl.innerHTML = `
      <div class="timer-stats-content">
        <h4>Timer Optimization</h4>
        <div class="timer-stat">
          <span class="label">Delivery Rate:</span>
          <span class="value" data-timer="delivery-rate">0%</span>
        </div>
        <div class="timer-stat">
          <span class="label">Avg Houses/Week:</span>
          <span class="value" data-timer="avg-houses">0</span>
        </div>
        <div class="timer-stat">
          <span class="label">Difficulty Adjustments:</span>
          <span class="value" data-timer="adjustments">0</span>
        </div>
        <div class="timer-stat">
          <span class="label">Current Difficulty:</span>
          <span class="value" data-timer="difficulty">Normal</span>
        </div>
      </div>
    `;
    state.debugWrap.appendChild(timerStatsEl);
  }
  
  // Update stats
  const deliveryRateEl = timerStatsEl.querySelector('[data-timer="delivery-rate"]');
  const avgHousesEl = timerStatsEl.querySelector('[data-timer="avg-houses"]');
  const adjustmentsEl = timerStatsEl.querySelector('[data-timer="adjustments"]');
  const difficultyEl = timerStatsEl.querySelector('[data-timer="difficulty"]');
  
  if (deliveryRateEl) deliveryRateEl.textContent = `${Math.round(stats.deliveryRate * 100)}%`;
  if (avgHousesEl) avgHousesEl.textContent = stats.avgHousesPerWeek.toFixed(1);
  if (adjustmentsEl) adjustmentsEl.textContent = stats.difficultyAdjustments;
  if (difficultyEl) {
    let difficultyText = 'Normal';
    if (stats.deliveryRate < 0.6) difficultyText = 'Easy';
    else if (stats.deliveryRate > 0.85) difficultyText = 'Hard';
    difficultyEl.textContent = difficultyText;
  }
}

export function hideTimerOptimizationStats() {
  const timerStatsEl = document.querySelector('[data-ui=timer-stats]');
  if (timerStatsEl) {
    timerStatsEl.remove();
  }
}

// WebGPU Status Functions
export function setWebGPUStatus(status, message = null) {
  if (!state.webgpuWrap || !state.webgpuStatus) return;
  
  // Update status attribute
  state.webgpuWrap.setAttribute('data-status', status);
  
  // Set status message
  const statusMessages = {
    'checking': 'Checking...',
    'enabled': 'WebGPU Active',
    'disabled': 'WebGL Fallback',
    'error': 'GPU Error'
  };
  
  const displayMessage = message || statusMessages[status] || 'Unknown';
  state.webgpuStatus.textContent = displayMessage;
  
  // Add tooltip with more info
  let tooltip = '';
  switch (status) {
    case 'enabled':
      tooltip = 'WebGPU is active - enhanced performance available';
      break;
    case 'disabled':
      tooltip = 'WebGPU not supported - using WebGL fallback (requires dedicated GPU)';
      break;
    case 'error':
      tooltip = 'WebGPU initialization failed';
      break;
    case 'checking':
      tooltip = 'Checking WebGPU support...';
      break;
  }
  
  state.webgpuWrap.title = tooltip;
  
  // Remove clickable functionality to avoid security errors
  state.webgpuWrap.style.cursor = 'default';
  state.webgpuWrap.onclick = null;
}

export function updateWebGPUPerformanceStats(stats) {
  if (!stats || !state.webgpuStatus) return;
  
  // Update status with performance info
  const fps = Math.round(stats.fps || 0);
  const gpuTime = (stats.gpuTime || 0).toFixed(1);
  
  state.webgpuStatus.textContent = `WebGPU Active (${fps}fps)`;
  state.webgpuWrap.title = `WebGPU Performance: ${fps} FPS, GPU Time: ${gpuTime}ms`;
}
