const UINT32_MAX = 0xffffffff;

export function hashString(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0) / UINT32_MAX;
}

export function normalizedSeed(input) {
  if (typeof input === "number" && Number.isFinite(input)) {
    return input >>> 0;
  }
  if (typeof input === "string") {
    let h = 0;
    for (let i = 0; i < input.length; i += 1) {
      h = Math.imul(31, h) + input.charCodeAt(i);
      h |= 0;
    }
    return (h >>> 0) || 1;
  }
  const random = Math.floor(Math.random() * UINT32_MAX);
  return random || 1;
}

export function createRNG(seedValue) {
  let state = normalizedSeed(seedValue) || 1;

  function mulberry32() {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / UINT32_MAX;
  }

  const rng = {
    seed: state >>> 0,
    rand() {
      return mulberry32();
    },
    randRange(min, max) {
      return min + (max - min) * mulberry32();
    },
    pick(list) {
      if (!list.length) return undefined;
      const idx = Math.floor(mulberry32() * list.length);
      return list[idx];
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(mulberry32() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  };

  return rng;
}
