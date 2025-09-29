import { Vector3 } from "three";

const _pointA = new Vector3();
const _pointB = new Vector3();

export function buildCurveLUT(curve, resolution = 2048) {
  const samples = new Array(resolution + 1);
  let cumulative = 0;
  curve.getPointAt(0, _pointA);
  samples[0] = { u: 0, s: 0 };

  for (let i = 1; i <= resolution; i += 1) {
    const u = i / resolution;
    curve.getPointAt(u, _pointB);
    cumulative += _pointB.distanceTo(_pointA);
    samples[i] = { u, s: cumulative };
    _pointA.copy(_pointB);
  }

  const length = cumulative;

  return {
    length,
    resolution,
    samples,
  };
}

export function distanceToU(lut, distance) {
  const { length } = lut;
  if (length <= 0) return 0;
  const wrapped = ((distance % length) + length) % length;
  return sToU(lut, wrapped);
}

export function advanceU(lut, u, deltaDist) {
  if (!lut || lut.length <= 0) return u;
  const currentS = uToS(lut, u);
  const targetS = currentS + deltaDist;
  return distanceToU(lut, targetS);
}

function uToS(lut, u) {
  if (!lut || lut.length <= 0) return 0;
  const normalizedU = ((u % 1) + 1) % 1;
  const { samples } = lut;
  let low = 0;
  let high = samples.length - 1;

  while (low <= high) {
    const mid = (low + high) >>> 1;
    const sample = samples[mid];
    if (Math.abs(sample.u - normalizedU) < 1e-6) {
      return sample.s;
    }
    if (sample.u < normalizedU) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  const idx = Math.max(1, low);
  const s1 = samples[idx - 1];
  const s2 = samples[idx];
  const range = s2.u - s1.u || 1e-6;
  const t = (normalizedU - s1.u) / range;
  return s1.s + (s2.s - s1.s) * t;
}

function sToU(lut, s) {
  const { samples, length } = lut;
  const wrapped = ((s % length) + length) % length;
  let low = 0;
  let high = samples.length - 1;

  while (low <= high) {
    const mid = (low + high) >>> 1;
    const sample = samples[mid];
    if (Math.abs(sample.s - wrapped) < 1e-4) {
      return sample.u;
    }
    if (sample.s < wrapped) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  const idx = Math.max(1, low);
  const s1 = samples[idx - 1];
  const s2 = samples[idx];
  const delta = s2.s - s1.s || 1e-6;
  const t = (wrapped - s1.s) / delta;
  const u = s1.u + (s2.u - s1.u) * t;
  return ((u % 1) + 1) % 1;
}
