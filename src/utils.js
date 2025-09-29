import { Vector3, Color } from "three";

const _tmpVecA = new Vector3();
const _tmpVecB = new Vector3();
const _tmpVecC = new Vector3();
const _tmpColor = new Color();

export const PALETTE = Object.freeze({
  // Cosy winter jazz theme - warm, muted colors
  background: new Color(0x2a2d3a), // Dark blue-gray, like a winter night sky
  ground: new Color(0x3a3f4f), // Slightly lighter blue-gray for ground
  truckBase: new Color(0xd4a574), // Warm caramel brown
  truckCab: new Color(0xe8b892), // Lighter warm brown
  houseBody: new Color(0xf0e6d2), // Warm cream/beige
  houseRoof: new Color(0xd4c4a8), // Muted warm brown
  warning: new Color(0xf4d03f), // Warm golden yellow
  danger: new Color(0xe67e22), // Warm orange-red
  safe: new Color(0x85c1e9), // Soft blue for safe status
});

export function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function smoothstep(edge0, edge1, x) {
  if (edge0 === edge1) return 0;
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function projectToPlaneY(point, target = _tmpVecA, y = 0) {
  target.copy(point);
  target.y = y;
  return target;
}

export function segmentIntersect2D(a1, a2, b1, b2) {
  const o1 = orientation(a1, a2, b1);
  const o2 = orientation(a1, a2, b2);
  const o3 = orientation(b1, b2, a1);
  const o4 = orientation(b1, b2, a2);

  if (o1 === 0 && onSegment(a1, b1, a2)) return true;
  if (o2 === 0 && onSegment(a1, b2, a2)) return true;
  if (o3 === 0 && onSegment(b1, a1, b2)) return true;
  if (o4 === 0 && onSegment(b1, a2, b2)) return true;

  return (o1 > 0 && o2 < 0 || o1 < 0 && o2 > 0) && (o3 > 0 && o4 < 0 || o3 < 0 && o4 > 0);
}

function orientation(p, q, r) {
  const val = (q.z - p.z) * (r.x - q.x) - (q.x - p.x) * (r.z - q.z);
  if (Math.abs(val) < 1e-5) return 0;
  return val > 0 ? 1 : -1;
}

function onSegment(p, q, r) {
  return (
    q.x <= Math.max(p.x, r.x) + 1e-5 &&
    q.x + 1e-5 >= Math.min(p.x, r.x) &&
    q.z <= Math.max(p.z, r.z) + 1e-5 &&
    q.z + 1e-5 >= Math.min(p.z, r.z)
  );
}

export function reuseVector3(x = 0, y = 0, z = 0) {
  _tmpVecB.set(x, y, z);
  return _tmpVecB;
}

export function angleLerpDeg(current, target, rateDegPerSec, dt) {
  const diff = normalizeAngleDeg(target - current);
  const maxStep = rateDegPerSec * dt;
  const clamped = clamp(diff, -maxStep, maxStep);
  return normalizeAngleDeg(current + clamped);
}

function normalizeAngleDeg(angle) {
  let a = angle % 360;
  if (a < -180) a += 360;
  if (a > 180) a -= 360;
  return a;
}

export function formatSeconds(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function snapToGrid(value, cellSize) {
  return Math.round(value / cellSize) * cellSize;
}

export function vec3DistanceXZ(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dz * dz);
}

export function colorLerp(colorA, colorB, t, target = _tmpColor) {
  target.copy(colorA);
  target.lerp(colorB, clamp(t, 0, 1));
  return target;
}
