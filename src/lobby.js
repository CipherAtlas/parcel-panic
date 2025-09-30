export class LobbyManager {
  constructor() {
    // Simple lobby manager without tutorial functionality
  }

  init() {
    // Always show the main lobby first
    console.log("[LOBBY] Showing main lobby");
    this.showLobby();
    this.bindEvents();
  }

  bindEvents() {
    // Lobby buttons
    document.getElementById('start-game-btn')?.addEventListener('click', () => {
      this.startGameWithTutorial();
    });

    document.getElementById('settings-btn')?.addEventListener('click', () => {
      this.showSettings();
    });

    // Lobby settings controls
    document.getElementById('close-lobby-settings-btn')?.addEventListener('click', () => {
      this.hideLobbySettings();
    });

    document.getElementById('reset-lobby-settings')?.addEventListener('click', () => {
      this.resetLobbySettings();
    });

    // Tutorial prompt controls
    document.getElementById('watch-tutorial-btn')?.addEventListener('click', () => {
      this.hideTutorialPrompt();
      this.showTutorialFlashcards();
    });

    document.getElementById('skip-tutorial-btn')?.addEventListener('click', () => {
      this.hideTutorialPrompt();
      this.startGame();
    });

    // Tutorial flashcards controls
    document.getElementById('close-tutorial-flashcards-btn')?.addEventListener('click', () => {
      this.hideTutorialFlashcards();
      this.startGame();
    });

    document.getElementById('next-flashcard-btn')?.addEventListener('click', () => {
      this.nextFlashcard();
    });

    document.getElementById('prev-flashcard-btn')?.addEventListener('click', () => {
      this.prevFlashcard();
    });

    // Close tutorial prompt when clicking outside
    document.getElementById('tutorial-prompt-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'tutorial-prompt-overlay') {
        this.hideTutorialPrompt();
        this.startGame();
      }
    });

    // Close tutorial flashcards when clicking outside
    document.getElementById('tutorial-flashcards-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'tutorial-flashcards-overlay') {
        this.hideTutorialFlashcards();
        this.startGame();
      }
    });

    // Lobby volume controls
    document.getElementById('lobby-master-volume')?.addEventListener('input', (e) => {
      const volume = parseFloat(e.target.value);
      this.updateLobbyVolumeDisplay('master', volume);
      this.saveLobbySetting('masterVolume', volume);
      // Apply to audio system immediately
      if (window.audio && window.audio.setMasterVolume) {
        window.audio.setMasterVolume(volume);
      }
      // Update in-game settings UI if available
      this.syncWithInGameSettings();
    });

    document.getElementById('lobby-sfx-volume')?.addEventListener('input', (e) => {
      const volume = parseFloat(e.target.value);
      this.updateLobbyVolumeDisplay('sfx', volume);
      this.saveLobbySetting('sfxVolume', volume);
      // Apply to audio system immediately
      if (window.audio && window.audio.setSfxVolume) {
        window.audio.setSfxVolume(volume);
      }
      // Update in-game settings UI if available
      this.syncWithInGameSettings();
    });

    document.getElementById('lobby-bg-volume')?.addEventListener('input', (e) => {
      const volume = parseFloat(e.target.value);
      this.updateLobbyVolumeDisplay('bg', volume);
      this.saveLobbySetting('bgVolume', volume);
      // Apply to audio system immediately
      if (window.audio && window.audio.setBgVolume) {
        window.audio.setBgVolume(volume);
      }
      // Update in-game settings UI if available
      this.syncWithInGameSettings();
    });

    // Lobby FPS control
    document.getElementById('lobby-fps-toggle')?.addEventListener('change', (e) => {
      const fps = parseInt(e.target.value);
      this.updateLobbyFpsDisplay(fps);
      this.saveLobbySetting('targetFPS', fps);
      // Update in-game settings UI if available
      this.syncWithInGameSettings();
    });
  }

  showLobby() {
    const lobbyScreen = document.getElementById('lobby-screen');
    if (lobbyScreen) {
      lobbyScreen.style.display = 'flex';
    }
  }

  hideLobby() {
    const lobbyScreen = document.getElementById('lobby-screen');
    if (lobbyScreen) {
      lobbyScreen.style.display = 'none';
    }
  }

  startGame() {
    // Hide lobby and start the game
    this.hideLobby();
    if (window.startMainGame) {
      window.startMainGame();
    }
  }

  startGameWithTutorial() {
    // Show tutorial prompt when starting game
    this.showTutorialPrompt();
  }

  showTutorialPrompt() {
    const tutorialPromptOverlay = document.getElementById('tutorial-prompt-overlay');
    if (tutorialPromptOverlay) {
      tutorialPromptOverlay.style.display = 'flex';
      document.body.classList.add('modal-open');
      // Pause the game globally when tutorial is shown
      if (window.globalPauseGame) {
        window.globalPauseGame();
      }
    }
  }

  hideTutorialPrompt() {
    const tutorialPromptOverlay = document.getElementById('tutorial-prompt-overlay');
    if (tutorialPromptOverlay) {
      tutorialPromptOverlay.style.display = 'none';
      document.body.classList.remove('modal-open');
      // Unpause the game when tutorial is hidden
      if (window.globalUnpauseGame) {
        window.globalUnpauseGame();
      }
    }
  }

  showTutorialFlashcards() {
    const tutorialFlashcardsOverlay = document.getElementById('tutorial-flashcards-overlay');
    if (tutorialFlashcardsOverlay) {
      tutorialFlashcardsOverlay.style.display = 'flex';
      document.body.classList.add('modal-open');
      this.currentFlashcard = 0;
      this.updateFlashcard();
      this.updateProgress();
      // Ensure game is paused during flashcards
      if (window.globalPauseGame) {
        window.globalPauseGame();
      }
    }
  }

  hideTutorialFlashcards() {
    const tutorialFlashcardsOverlay = document.getElementById('tutorial-flashcards-overlay');
    if (tutorialFlashcardsOverlay) {
      tutorialFlashcardsOverlay.style.display = 'none';
      document.body.classList.remove('modal-open');
      // Unpause the game when flashcards are hidden
      if (window.globalUnpauseGame) {
        window.globalUnpauseGame();
      }
    }
  }

  showSettings() {
    this.showLobbySettings();
  }

  showLobbySettings() {
    const lobbySettingsPanel = document.getElementById('lobby-settings-panel');
    if (lobbySettingsPanel) {
      lobbySettingsPanel.style.display = 'flex';
      document.body.classList.add("modal-open");
      
      // Initialize settings values
      this.initializeLobbySettings();
    }
  }

  hideLobbySettings() {
    const lobbySettingsPanel = document.getElementById('lobby-settings-panel');
    if (lobbySettingsPanel) {
      lobbySettingsPanel.style.display = 'none';
      document.body.classList.remove("modal-open");
    }
  }

  initializeLobbySettings() {
    // Get current settings from localStorage or defaults
    const settings = this.getLobbySettings();
    
    // Set master volume
    const masterVolumeSlider = document.getElementById('lobby-master-volume');
    const masterVolumeValue = document.querySelector('[data-ui="lobby-master-volume-value"]');
    if (masterVolumeSlider && masterVolumeValue) {
      masterVolumeSlider.value = settings.masterVolume;
      masterVolumeValue.textContent = `${Math.round(settings.masterVolume * 100)}%`;
    }
    
    // Set SFX volume
    const sfxVolumeSlider = document.getElementById('lobby-sfx-volume');
    const sfxVolumeValue = document.querySelector('[data-ui="lobby-sfx-volume-value"]');
    if (sfxVolumeSlider && sfxVolumeValue) {
      sfxVolumeSlider.value = settings.sfxVolume;
      sfxVolumeValue.textContent = `${Math.round(settings.sfxVolume * 100)}%`;
    }
    
    // Set background volume
    const bgVolumeSlider = document.getElementById('lobby-bg-volume');
    const bgVolumeValue = document.querySelector('[data-ui="lobby-bg-volume-value"]');
    if (bgVolumeSlider && bgVolumeValue) {
      bgVolumeSlider.value = settings.bgVolume;
      bgVolumeValue.textContent = `${Math.round(settings.bgVolume * 100)}%`;
    }
    
    // Set FPS
    const fpsSelect = document.getElementById('lobby-fps-toggle');
    const fpsValue = document.querySelector('[data-ui="lobby-fps-value"]');
    if (fpsSelect && fpsValue) {
      fpsSelect.value = settings.targetFPS;
      fpsValue.textContent = `${settings.targetFPS} FPS`;
    }
    
    // Apply current settings to audio system if available
    if (window.audio) {
      if (window.audio.setMasterVolume) window.audio.setMasterVolume(settings.masterVolume);
      if (window.audio.setSfxVolume) window.audio.setSfxVolume(settings.sfxVolume);
      if (window.audio.setBgVolume) window.audio.setBgVolume(settings.bgVolume);
    }
  }

  getLobbySettings() {
    // Use the same settings system as the main game
    if (window.getLobbySettings) {
      return window.getLobbySettings();
    }
    
    // Fallback to direct localStorage access with correct key
    const defaultSettings = {
      masterVolume: 1,
      sfxVolume: 1,
      bgVolume: 0.3,
      targetFPS: 60
    };
    
    try {
      const stored = localStorage.getItem('pp_settings_v1');
      if (stored) {
        const settings = JSON.parse(stored);
        return {
          masterVolume: settings.masterVolume ?? 1,
          sfxVolume: settings.sfxVolume ?? 1,
          bgVolume: settings.bgVolume ?? 0.3,
          targetFPS: settings.targetFPS ?? 60
        };
      }
    } catch (e) {
      console.warn("[LOBBY] Failed to parse stored settings:", e);
    }
    
    return defaultSettings;
  }

  saveLobbySettings(settings) {
    // Use the same settings system as the main game
    if (window.saveSettings) {
      window.saveSettings(settings);
    } else {
      // Fallback to direct localStorage access with correct key
      try {
        localStorage.setItem('pp_settings_v1', JSON.stringify(settings));
      } catch (e) {
        console.error("[LOBBY] Failed to save settings:", e);
      }
    }
  }

  saveLobbySetting(key, value) {
    const currentSettings = this.getLobbySettings();
    currentSettings[key] = value;
    this.saveLobbySettings(currentSettings);
  }

  updateLobbyVolumeDisplay(type, value) {
    const valueElement = document.querySelector(`[data-ui="lobby-${type}-volume-value"]`);
    if (valueElement) {
      valueElement.textContent = `${Math.round(value * 100)}%`;
    }
  }

  updateLobbyFpsDisplay(fps) {
    const fpsValueElement = document.querySelector('[data-ui="lobby-fps-value"]');
    if (fpsValueElement) {
      fpsValueElement.textContent = `${fps} FPS`;
    }
  }

  syncWithInGameSettings() {
    // Update in-game settings UI to match lobby settings
    if (window.updateInGameSettingsUI) {
      const currentSettings = this.getLobbySettings();
      window.updateInGameSettingsUI(currentSettings);
    }
  }

  // Tutorial flashcard data
  tutorialFlashcards = [
    {
      title: "🎯 Objective",
      content: "<p>Draw delivery routes for your truck to deliver packages to houses before their timers expire!</p>"
    },
    {
      title: "🎮 Basic Controls",
      content: `
        <ul>
          <li><strong>Left Click + Drag:</strong> Draw delivery routes</li>
          <li><strong>Enter:</strong> Complete and start your route</li>
          <li><strong>Space:</strong> Pause the game</li>
          <li><strong>ESC:</strong> Open in-game menu</li>
        </ul>
      `
    },
    {
      title: "🏠 House Types & Timers",
      content: `
        <ul>
          <li><span class="house-indicator red">🔴 Red Houses:</span> 40 seconds to deliver</li>
          <li><span class="house-indicator purple">🟣 Purple Houses:</span> 50 seconds to deliver</li>
          <li><span class="house-indicator green">🟢 Green Houses:</span> 60 seconds to deliver</li>
        </ul>
      `
    },
    {
      title: "🚛 Delivery Mechanics",
      content: "<p>Drive your truck close to houses to deliver packages. The truck's service radius determines how close you need to get.</p>"
    },
    {
      title: "📈 Weekly Progression",
      content: `
        <ul>
          <li><strong>Weeks 1-5:</strong> 3 houses per week</li>
          <li><strong>Week 6+:</strong> 5 houses per week</li>
          <li><strong>End of Week:</strong> Choose upgrades to improve your truck</li>
        </ul>
      `
    },
    {
      title: "⚡ Available Upgrades",
      content: `
        <ul>
          <li><strong>Tuned Engine:</strong> Increase truck speed (5%, 12%, 15%, 20%)</li>
          <li><strong>Service Radius+:</strong> Larger delivery area</li>
          <li><strong>Dispatch Optimizer:</strong> Faster route cooldown</li>
          <li><strong>Time Master:</strong> More time per week</li>
        </ul>
      `
    },
    {
      title: "💡 Pro Tips",
      content: `
        <ul>
          <li>Draw efficient loops that hit multiple houses</li>
          <li>Prioritize red houses (shortest timers)</li>
          <li>Use pause (Space) to plan your routes</li>
          <li>Route cooldown prevents rapid route changes</li>
        </ul>
      `
    }
  ];

  currentFlashcard = 0;

  updateFlashcard() {
    const flashcard = this.tutorialFlashcards[this.currentFlashcard];
    const titleElement = document.getElementById('flashcard-title');
    const bodyElement = document.getElementById('flashcard-body');
    
    if (titleElement && bodyElement) {
      titleElement.textContent = flashcard.title;
      bodyElement.innerHTML = flashcard.content;
    }
  }

  updateProgress() {
    const progressText = document.getElementById('tutorial-progress-text');
    const progressFill = document.getElementById('tutorial-progress-fill');
    const prevBtn = document.getElementById('prev-flashcard-btn');
    const nextBtn = document.getElementById('next-flashcard-btn');
    
    if (progressText) {
      progressText.textContent = `${this.currentFlashcard + 1} / ${this.tutorialFlashcards.length}`;
    }
    
    if (progressFill) {
      const progress = ((this.currentFlashcard + 1) / this.tutorialFlashcards.length) * 100;
      progressFill.style.width = `${progress}%`;
    }
    
    // Show/hide previous button
    if (prevBtn) {
      prevBtn.style.display = this.currentFlashcard > 0 ? 'block' : 'none';
    }
    
    // Update next button text
    if (nextBtn) {
      nextBtn.textContent = this.currentFlashcard < this.tutorialFlashcards.length - 1 ? 'Next →' : 'Start Game';
    }
  }

  nextFlashcard() {
    if (this.currentFlashcard < this.tutorialFlashcards.length - 1) {
      this.currentFlashcard++;
      this.updateFlashcard();
      this.updateProgress();
    } else {
      // Last flashcard - start the game
      this.hideTutorialFlashcards();
      this.startGame();
    }
  }

  prevFlashcard() {
    if (this.currentFlashcard > 0) {
      this.currentFlashcard--;
      this.updateFlashcard();
      this.updateProgress();
    }
  }

  resetLobbySettings() {
    const defaultSettings = {
      masterVolume: 1,
      sfxVolume: 1,
      bgVolume: 0.3,
      targetFPS: 60
    };
    
    // Update UI elements
    const masterVolumeSlider = document.getElementById('lobby-master-volume');
    const masterVolumeValue = document.querySelector('[data-ui="lobby-master-volume-value"]');
    if (masterVolumeSlider && masterVolumeValue) {
      masterVolumeSlider.value = defaultSettings.masterVolume;
      masterVolumeValue.textContent = `${Math.round(defaultSettings.masterVolume * 100)}%`;
    }
    
    const sfxVolumeSlider = document.getElementById('lobby-sfx-volume');
    const sfxVolumeValue = document.querySelector('[data-ui="lobby-sfx-volume-value"]');
    if (sfxVolumeSlider && sfxVolumeValue) {
      sfxVolumeSlider.value = defaultSettings.sfxVolume;
      sfxVolumeValue.textContent = `${Math.round(defaultSettings.sfxVolume * 100)}%`;
    }
    
    const bgVolumeSlider = document.getElementById('lobby-bg-volume');
    const bgVolumeValue = document.querySelector('[data-ui="lobby-bg-volume-value"]');
    if (bgVolumeSlider && bgVolumeValue) {
      bgVolumeSlider.value = defaultSettings.bgVolume;
      bgVolumeValue.textContent = `${Math.round(defaultSettings.bgVolume * 100)}%`;
    }
    
    const fpsSelect = document.getElementById('lobby-fps-toggle');
    const fpsValue = document.querySelector('[data-ui="lobby-fps-value"]');
    if (fpsSelect && fpsValue) {
      fpsSelect.value = defaultSettings.targetFPS;
      fpsValue.textContent = `${defaultSettings.targetFPS} FPS`;
    }
    
    // Apply to audio system immediately
    if (window.audio) {
      if (window.audio.setMasterVolume) window.audio.setMasterVolume(defaultSettings.masterVolume);
      if (window.audio.setSfxVolume) window.audio.setSfxVolume(defaultSettings.sfxVolume);
      if (window.audio.setBgVolume) window.audio.setBgVolume(defaultSettings.bgVolume);
    }
    
    // Update in-game settings UI if available
    this.syncWithInGameSettings();
    
    // Save to localStorage
    this.saveLobbySettings(defaultSettings);
  }
}

// Create and export the lobby manager instance
export const lobbyManager = new LobbyManager();