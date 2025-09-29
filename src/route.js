import {
  BufferGeometry,
  CatmullRomCurve3,
  Float32BufferAttribute,
  Line,
  Line3,
  LineBasicMaterial,
  Plane,
  Raycaster,
  Vector3,
} from "three";
import { buildCurveLUT } from "./sampling.js";
import { optimizeRouteWithWebGPU } from "./renderer.js";

const DEFAULT_RESOLUTION = 2048;
const SAMPLE_DISPLAY_SEGMENTS = 256;
const OPEN_COLOR = 0xffa87a;
const VALID_COLOR = 0x64d2c4;
const ROUTE_COLOR = 0x6f9fff;

const _raycaster = new Raycaster();
const _plane = new Plane(new Vector3(0, 1, 0), 0);
const _tmpVec = new Vector3();
const _tmpVec2 = new Vector3();
const _closest = new Vector3();
const _line3 = new Line3();

const state = {
  scene: null,
  mapState: null,
  config: null,
  curve: null,
  lut: null,
  length: 0,
  commitListeners: new Set(),
  mode: "idle", // idle | drawing | ready | rmb-drawing
  drawingPoints: [],
  rmbDrawingPoints: [],
  minSampleDist: 0.35,
  line: null,
  lineGeometry: null,
  lineMaterial: null,
  previewMaterial: null,
  previewGeometry: null,
  previewLine: null,
  rmbPreviewLine: null,
};

export function initRoute(scene, mapState, config) {
  state.scene = scene;
  state.mapState = mapState;
  state.config = config;
  state.minSampleDist = config.MIN_SAMPLE_DIST ?? 0.35;

  state.lineGeometry = new BufferGeometry();
  state.lineMaterial = new LineBasicMaterial({
    color: ROUTE_COLOR,
    linewidth: 2,
  });
  state.line = new Line(state.lineGeometry, state.lineMaterial);
  state.line.name = "RouteLine";
  state.line.visible = false;
  scene.add(state.line);

  state.previewGeometry = new BufferGeometry();
  state.previewMaterial = new LineBasicMaterial({
    color: OPEN_COLOR,
    linewidth: 1,
  });
  state.previewLine = new Line(state.previewGeometry, state.previewMaterial);
  state.previewLine.name = "RoutePreview";
  state.previewLine.visible = false;
  scene.add(state.previewLine);

  // RMB preview line
  state.rmbPreviewGeometry = new BufferGeometry();
  state.rmbPreviewMaterial = new LineBasicMaterial({
    color: OPEN_COLOR,
    linewidth: 1,
  });
  state.rmbPreviewLine = new Line(state.rmbPreviewGeometry, state.rmbPreviewMaterial);
  state.rmbPreviewLine.name = "RMBRoutePreview";
  state.rmbPreviewLine.visible = false;
  scene.add(state.rmbPreviewLine);

  return state;
}

export function setViewportSize() {
  // retained for API compatibility with renderer resize callbacks
}

export function beginRouteDraw() {
  if (!state.scene) throw new Error("Route system not initialized");
  state.mode = "drawing";
  state.drawingPoints.length = 0;
  state.previewLine.visible = true;
  state.previewMaterial.color.setHex(OPEN_COLOR);
}

export function finishRouteDraw() {
  if (state.mode === "drawing" && state.drawingPoints.length > 1) {
    state.mode = "ready";
    refreshPreview();
  }
}

export function updateRouteDraw(worldPoint, force = false) {
  if (state.mode !== "drawing") return;
  if (!worldPoint) return;

  const point = new Vector3(worldPoint.x, 0, worldPoint.z);
  const last = state.drawingPoints[state.drawingPoints.length - 1];
  const minDist = state.minSampleDist;

  if (!last || force || last.distanceToSquared(point) >= minDist * minDist) {
    if (state.drawingPoints.length >= state.config.MAX_POINTS) {
      return;
    }
    state.drawingPoints.push(point);
    refreshPreview();
  }
}

export function beginRMBRouteDraw(startPoint) {
  if (!state.scene) throw new Error("Route system not initialized");
  state.mode = "rmb-drawing";
  state.rmbDrawingPoints.length = 0;
  state.rmbDrawingPoints.push(new Vector3(startPoint.x, 0, startPoint.z));
  state.rmbPreviewLine.visible = true;
  state.rmbPreviewMaterial.color.setHex(OPEN_COLOR);
}

export function updateRMBRouteDraw(worldPoint, force = false) {
  if (state.mode !== "rmb-drawing") return;
  if (!worldPoint) return;

  const point = new Vector3(worldPoint.x, 0, worldPoint.z);
  const last = state.rmbDrawingPoints[state.rmbDrawingPoints.length - 1];
  const minDist = state.minSampleDist;

  if (!last || force || last.distanceToSquared(point) >= minDist * minDist) {
    if (state.rmbDrawingPoints.length >= state.config.MAX_POINTS) {
      return;
    }
    state.rmbDrawingPoints.push(point);
    refreshRMBPreview();
  }
}

export function finishRMBRouteDraw() {
  if (state.mode === "rmb-drawing") {
    state.mode = "ready";
    refreshRMBPreview();
  }
}

export function commitRMBRoute() {
  if (state.mode !== "ready" || state.rmbDrawingPoints.length < 2) {
    return false;
  }

  // Check if RMB route can connect to existing route
  const attachThreshold = 8.0;
  let bestConnection = null;
  let bestDistance = Infinity;
  
  // Find closest connection point
  for (let i = 0; i < state.drawingPoints.length; i++) {
    const routePoint = state.drawingPoints[i];
    const startPoint = state.rmbDrawingPoints[0];
    const endPoint = state.rmbDrawingPoints[state.rmbDrawingPoints.length - 1];
    
    const startDist = routePoint.distanceTo(startPoint);
    const endDist = routePoint.distanceTo(endPoint);
    
    if (startDist < bestDistance) {
      bestDistance = startDist;
      bestConnection = { type: 'start', index: i, distance: startDist };
    }
    if (endDist < bestDistance) {
      bestDistance = endDist;
      bestConnection = { type: 'end', index: i, distance: endDist };
    }
  }
  
  // If close enough to existing route, integrate
  if (bestConnection && bestConnection.distance <= attachThreshold) {
    // Get the current route points from the existing curve
    let existingPoints = [];
    if (state.curve) {
      // Sample points from the existing curve
      const numPoints = Math.max(50, Math.floor(state.curve.getLength() * 2));
      for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        existingPoints.push(state.curve.getPointAt(t));
      }
    } else {
      // Fallback to drawing points if no curve exists
      existingPoints = [...state.drawingPoints];
    }
    
    // Insert extension into existing route
    let mergedPoints;
    if (bestConnection.type === 'start') {
      mergedPoints = [
        ...existingPoints.slice(0, bestConnection.index),
        ...state.rmbDrawingPoints,
        ...existingPoints.slice(bestConnection.index)
      ];
    } else {
      mergedPoints = [
        ...existingPoints.slice(0, bestConnection.index + 1),
        ...state.rmbDrawingPoints,
        ...existingPoints.slice(bestConnection.index + 1)
      ];
    }
    
    // Create new curve from merged points
    const curve = new CatmullRomCurve3(mergedPoints, true, "catmullrom", 0.12);
    const lut = buildCurveLUT(curve, DEFAULT_RESOLUTION);
    
    // Update the main route
    state.curve = curve;
    state.lut = lut;
    state.length = lut.length;
    updateDisplayGeometry(curve);
    
    state.rmbDrawingPoints.length = 0;
    state.rmbPreviewLine.visible = false;
    state.mode = "idle";
    
    console.log(`[RMB] Route integrated at distance ${bestConnection.distance.toFixed(2)}`);
    return true;
  }
  
  console.log(`[RMB] No nearby route found (closest: ${bestDistance.toFixed(2)} > ${attachThreshold})`);
  return false;
}

export function cancelRMBRoute() {
  state.mode = "idle";
  state.rmbPreviewLine.visible = false;
  state.rmbDrawingPoints.length = 0;
  state.previewMaterial.color.setHex(OPEN_COLOR);
}

function refreshRMBPreview() {
  if (!state.rmbPreviewLine || state.rmbDrawingPoints.length < 2) {
    state.rmbPreviewLine.visible = false;
    return;
  }

  const positions = new Float32Array(state.rmbDrawingPoints.length * 3);
  for (let i = 0; i < state.rmbDrawingPoints.length; i++) {
    const p = state.rmbDrawingPoints[i];
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
  }

  state.rmbPreviewGeometry.setAttribute("position", new BufferAttribute(positions, 3));
  state.rmbPreviewLine.visible = true;
}

export function cancelRoute() {
  state.mode = "idle";
  state.previewLine.visible = false;
  state.drawingPoints.length = 0;
  state.previewMaterial.color.setHex(OPEN_COLOR);
}

export function commitRoute(force = false, options = {}) {
  if (state.mode === "idle") return false;

  const rawPoints = getDrawingPoints();
  if (rawPoints.length < 2) {
    cancelRoute();
    return false;
  }

  const workingPoints =
    state.config.RDP_EPS > 0 && rawPoints.length > 2
      ? rdpSimplify(rawPoints, state.config.RDP_EPS)
      : rawPoints.slice();

  ensureClosedLoop(workingPoints);

  if (!force && !withinBounds(workingPoints)) {
    state.previewMaterial.color.setHex(OPEN_COLOR);
    return false;
  }

  if (!withinBounds(workingPoints)) {
    cancelRoute();
    return false;
  }

  // Optimize route with WebGPU if available
  const optimizedPoints = optimizeRouteWithWebGPU(workingPoints);
  const finalPoints = optimizedPoints !== workingPoints ? optimizedPoints : workingPoints;
  
  const curve = new CatmullRomCurve3(finalPoints, true, "catmullrom", 0.12);
  const lut = buildCurveLUT(curve, DEFAULT_RESOLUTION);

  let attachInfo = null;
  if (options.anchor) {
    attachInfo = findClosestOnCurve(curve, options.anchor, options.attachRadius);
    if (!attachInfo) {
      cancelRoute();
      return false;
    }
  }

  state.curve = curve;
  state.lut = lut;
  state.length = lut.length;
  state.line.visible = true;
  updateDisplayGeometry(curve);

  state.previewLine.visible = false;
  state.drawingPoints.length = 0;
  state.mode = "idle";
  state.previewMaterial.color.setHex(VALID_COLOR);

  const result = { curve, lut, attachInfo };
  for (const cb of state.commitListeners) {
    cb(result);
  }
  return result;
}

export function onRouteCommitted(callback) {
  state.commitListeners.add(callback);
  return () => state.commitListeners.delete(callback);
}

export function getCurrentCurve() {
  return state.curve;
}

export function getRouteLength() {
  return state.length;
}

export function getRouteLineMesh() {
  return state.line;
}

export function getRouteLUT() {
  return state.lut;
}

export function raycastToGround(camera, pointerNdc, target = _tmpVec) {
  if (!camera) return null;
  _raycaster.setFromCamera(pointerNdc, camera);
  const hit = _raycaster.ray.intersectPlane(_plane, target);
  if (!hit) return null;
  return target.set(hit.x, 0, hit.z);
}

function getClosestPointOnLineSegment(p1, p2, point) {
  const line = _line3.set(p1, p2);
  const closestPoint = new Vector3();
  line.closestPointToPoint(point, true, closestPoint);
  return closestPoint;
}

function refreshPreview() {
  if (state.mode === "idle") {
    state.previewLine.visible = false;
    return;
  }

  const points = getDrawingPoints();
  updatePreviewGeometry(points);
  if (points.length < 2) {
    state.previewMaterial.color.setHex(OPEN_COLOR);
    return;
  }
  state.previewMaterial.color.setHex(VALID_COLOR);
}

function getDrawingPoints() {
  return state.drawingPoints.map((p) => p.clone());
}

function ensureClosedLoop(points) {
  if (points.length < 2) return;
  const first = points[0];
  const last = points[points.length - 1];
  if (last.distanceToSquared(first) > 1e-4) {
    points.push(first.clone());
  } else {
    points[points.length - 1] = first.clone();
  }
}

function withinBounds(points) {
  if (!state.mapState) return true;
  const half = state.mapState.half;
  for (const point of points) {
    if (Math.abs(point.x) > half || Math.abs(point.z) > half) {
      return false;
    }
  }
  return true;
}

function updatePreviewGeometry(points) {
  if (!points.length) {
    state.previewLine.visible = false;
    return;
  }
  const positions = new Float32Array(points.length * 3);
  for (let i = 0; i < points.length; i += 1) {
    const p = points[i];
    positions[i * 3 + 0] = p.x;
    positions[i * 3 + 1] = 0.05;
    positions[i * 3 + 2] = p.z;
  }
  state.previewGeometry.setAttribute(
    "position",
    new Float32BufferAttribute(positions, 3),
  );
  state.previewGeometry.computeBoundingSphere();
  state.previewLine.visible = true;
}

function updateDisplayGeometry(curve) {
  const segments = SAMPLE_DISPLAY_SEGMENTS;
  const positions = new Float32Array((segments + 1) * 3);
  for (let i = 0; i <= segments; i += 1) {
    const u = i / segments;
    curve.getPointAt(u, _tmpVec);
    positions[i * 3 + 0] = _tmpVec.x;
    positions[i * 3 + 1] = 0.06;
    positions[i * 3 + 2] = _tmpVec.z;
  }
  state.lineGeometry.setAttribute(
    "position",
    new Float32BufferAttribute(positions, 3),
  );
  state.lineGeometry.computeBoundingSphere();
}

function findClosestOnCurve(curve, anchor, attachRadius = 6, samples = 256) {
  let closest = Infinity;
  let closestU = 0;
  for (let i = 0; i <= samples; i += 1) {
    const u = i / samples;
    curve.getPointAt(u, _tmpVec);
    const dist = _tmpVec.distanceTo(anchor);
    if (dist < closest) {
      closest = dist;
      closestU = u;
      _closest.copy(_tmpVec);
    }
  }

  if (closest > attachRadius) {
    return null;
  }

  return {
    u: closestU,
    point: _closest.clone(),
    distance: closest,
  };
}

function rdpSimplify(points, epsilon) {
  if (points.length <= 2) {
    return points.slice();
  }

  const first = points[0];
  const last = points[points.length - 1];
  let index = -1;
  let distMax = 0;

  for (let i = 1; i < points.length - 1; i += 1) {
    const d = pointLineDistance(points[i], first, last);
    if (d > distMax) {
      index = i;
      distMax = d;
    }
  }

  if (distMax > epsilon) {
    const left = rdpSimplify(points.slice(0, index + 1), epsilon);
    const right = rdpSimplify(points.slice(index), epsilon);
    return left.slice(0, left.length - 1).concat(right);
  }
  return [first.clone(), last.clone()];
}

function pointLineDistance(point, start, end) {
  _line3.start.copy(start);
  _line3.end.copy(end);
  const closestPoint = _line3.closestPointToPoint(point, true, _tmpVec2);
  return closestPoint.distanceTo(point);
}


