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
      this.startGame();
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