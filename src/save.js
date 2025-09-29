const HIGH_SCORE_KEY = "pp_highscore";
const SETTINGS_KEY = "pp_settings_v1";

function safeStorage() {
  try {
    if (typeof window === "undefined") return null;
    const { localStorage } = window;
    const testKey = "__pp_test__";
    localStorage.setItem(testKey, "1");
    localStorage.removeItem(testKey);
    return localStorage;
  } catch (err) {
    console.warn("LocalStorage unavailable", err);
    return null;
  }
}

const storage = safeStorage();

export function getHighscore() {
  if (!storage) return 0;
  const raw = storage.getItem(HIGH_SCORE_KEY);
  const value = raw ? Number(raw) : 0;
  return Number.isFinite(value) ? value : 0;
}

export function saveHighscore(score) {
  if (!storage) return;
  const best = Math.max(score, getHighscore());
  storage.setItem(HIGH_SCORE_KEY, String(best));
}

export function getSettings() {
  if (!storage) return {};
  try {
    const raw = storage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn("Failed to parse settings", err);
    return {};
  }
}

export function saveSettings(settings) {
  if (!storage) return;
  try {
    storage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.warn("Failed to save settings", err);
  }
}
