import { Howl, Howler } from "../node_modules/howler/dist/howler.js";

const sounds = new Map([
  ["gameover", { src: "assets/sfx/house_expire.wav", howl: null, loop: false }],
  ["route_commit", { src: "assets/sfx/route_commit.wav", howl: null, loop: false }],
  ["house_spawn", { src: "assets/sfx/house_spawn.wav", howl: null, loop: false }],
  ["house_expire", { src: "assets/sfx/house_expire.wav", howl: null, loop: false }],
  ["week_complete", { src: "assets/sfx/week_complete.wav", howl: null, loop: false }],
  ["bg_music", { src: "assets/sfx/bg.mp3", howl: null, loop: true }],
]);

let globalVolume = 1;
let fallbackContext = null;
const fallbackBuffers = new Map();
const fallbackLoops = new Map();

export function initAudio(settings = {}) {
  globalVolume = settings.volume ?? 1;
  if (typeof Howler !== "undefined") {
    Howler.volume(globalVolume);
    console.log("[AUDIO] Preloading all audio assets...");
    
    // Preload all sounds with immediate loading
    for (const [name, data] of sounds) {
      data.howl = new Howl({
        src: [data.src],
        loop: data.loop,
        volume: globalVolume,
        preload: true,
        html5: false, // Use Web Audio API for better performance
        onload: () => {
          console.log(`[OK] Audio loaded: ${name}`);
        },
        onloaderror: (id, error) => {
          console.warn(`[FAIL] Audio load error for ${name}:`, error);
        }
      });
    }
    
    // Force preload all sounds
    for (const [name, data] of sounds) {
      if (data.howl) {
        data.howl.load();
      }
    }
    
    console.log("[AUDIO] All audio assets preloaded");
  } else if (typeof window !== "undefined" && window.AudioContext) {
    fallbackContext = new AudioContext();
    preloadFallbackBuffers().catch((err) => console.warn("Audio preload failed", err));
  }
}

export function setVolume(volume) {
  globalVolume = volume;
  if (typeof Howler !== "undefined") {
    Howler.volume(volume);
  } else if (fallbackLoops.size) {
    for (const [, gain] of fallbackLoops) {
      gain.gain.value = volume;
    }
  }
}

export function play(name) {
  console.log(`[AUDIO] Audio.play called for: ${name}`);
  const data = sounds.get(name);
  if (!data) {
    console.warn(`[FAIL] Sound "${name}" not found in sounds map`);
    return;
  }
  if (data.howl) {
    console.log(`[OK] Playing sound: ${name} with Howl`);
    data.howl.volume(globalVolume);
    data.howl.play();
  } else {
    console.log(`[WARN] Using fallback for sound: ${name}`);
    playFallback(name, false);
  }
}

export function loop(name) {
  const data = sounds.get(name);
  if (!data) return;
  if (data.howl) {
    data.howl.volume(globalVolume);
    data.howl.loop(true);
    data.howl.play();
  } else {
    playFallback(name, true);
  }
}

export function stop(name) {
  const data = sounds.get(name);
  if (data?.howl) {
    data.howl.stop();
  }
  const loopEntry = fallbackLoops.get(name);
  if (loopEntry) {
    const { source } = loopEntry;
    try {
      source.stop();
    } catch (err) {
      /* ignored */
    }
    fallbackLoops.delete(name);
  }
}

async function preloadFallbackBuffers() {
  for (const [name, data] of sounds) {
    try {
      const res = await fetch(data.src);
      const arr = await res.arrayBuffer();
      const buffer = await decodeBuffer(arr);
      fallbackBuffers.set(name, buffer);
    } catch (err) {
      console.warn("Failed to load", name, err);
    }
  }
}

async function decodeBuffer(arrayBuffer) {
  if (!fallbackContext) return null;
  if (fallbackContext.state === "suspended") {
    await fallbackContext.resume();
  }
  return new Promise((resolve, reject) => {
    fallbackContext.decodeAudioData(arrayBuffer.slice(0), resolve, reject);
  });
}

function playFallback(name, loop) {
  if (!fallbackContext) return;
  const buffer = fallbackBuffers.get(name);
  if (!buffer) {
    console.warn("Missing fallback buffer", name);
    return;
  }
  if (fallbackContext.state === "suspended") {
    fallbackContext.resume().catch(() => {});
  }
  const source = fallbackContext.createBufferSource();
  source.buffer = buffer;
  source.loop = loop;
  const gain = fallbackContext.createGain();
  gain.gain.value = globalVolume;
  source.connect(gain).connect(fallbackContext.destination);
  source.start(0);
  if (loop) {
    fallbackLoops.set(name, { source, gain });
  }
}

// Background music functions
let bgMusicVolume = 0.3; // Default background music volume

export function setBackgroundMusicVolume(volume) {
  bgMusicVolume = Math.max(0, Math.min(1, volume));
  console.log(`[MUSIC] Background music volume set to: ${bgMusicVolume}`);
  
  // Update volume if background music is currently playing
  if (typeof Howler !== "undefined") {
    const bgMusic = sounds.get("bg_music");
    if (bgMusic && bgMusic.howl) {
      bgMusic.howl.volume(bgMusicVolume);
    }
  }
}

export function startBackgroundMusic() {
  console.log("[MUSIC] Starting background music...");
  play("bg_music", bgMusicVolume); // Use the background music volume setting
}

export function stopBackgroundMusic() {
  console.log("[MUSIC] Stopping background music...");
  if (typeof Howler !== "undefined") {
    const bgMusic = sounds.get("bg_music");
    if (bgMusic && bgMusic.howl) {
      bgMusic.howl.stop();
    }
  } else if (fallbackLoops.has("bg_music")) {
    const loop = fallbackLoops.get("bg_music");
    if (loop.source) {
      loop.source.stop();
      fallbackLoops.delete("bg_music");
    }
  }
}
