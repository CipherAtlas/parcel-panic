const listeners = new Map();
const pointer = {
  x: 0,
  y: 0,
  ndcX: 0,
  ndcY: 0,
  down: false,
  button: 0,
  lastSampleX: 0,
  lastSampleY: 0,
};
const pressedKeys = new Set();
const onceKeys = new Set();
const SAMPLE_DIST = 2; // Reduced for more responsive drawing
let canvasRef = null;

export function initInput(canvas) {
  canvasRef = canvas;
  canvas.addEventListener("pointerdown", handlePointerDown);
  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", handlePointerUp);
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
}

export function on(event, callback) {
  if (!listeners.has(event)) {
    listeners.set(event, new Set());
  }
  listeners.get(event).add(callback);
  return () => listeners.get(event)?.delete(callback);
}

export function off(event, callback) {
  listeners.get(event)?.delete(callback);
}

export function getPointerState() {
  return { ...pointer };
}

export function isPointerDown() {
  return pointer.down;
}

export function isKeyPressed(code) {
  return pressedKeys.has(code);
}

export function consumeKey(code) {
  if (onceKeys.has(code)) {
    onceKeys.delete(code);
    return true;
  }
  return false;
}

function dispatch(event, payload) {
  const set = listeners.get(event);
  if (!set) return;
  for (const cb of set) {
    cb(payload);
  }
}

function handlePointerDown(event) {
  pointer.down = true;
  pointer.button = event.button;
  updatePointerPosition(event);
  if (canvasRef) {
    canvasRef.setPointerCapture(event.pointerId);
  }
  dispatch("pointer-down", buildPointerPayload(event));
}

function handlePointerMove(event) {
  updatePointerPosition(event);
  const payload = buildPointerPayload(event);
  dispatch("pointer-move", payload);

  const dx = pointer.x - pointer.lastSampleX;
  const dy = pointer.y - pointer.lastSampleY;
  if (Math.hypot(dx, dy) >= SAMPLE_DIST) {
    pointer.lastSampleX = pointer.x;
    pointer.lastSampleY = pointer.y;
    dispatch("pointer-sample", payload);
  }
}

function handlePointerUp(event) {
  updatePointerPosition(event);
  pointer.down = false;
  pointer.button = -1;
  dispatch("pointer-up", buildPointerPayload(event));
}

function handleKeyDown(event) {
  if (event.repeat) return;
  pressedKeys.add(event.code);
  onceKeys.add(event.code);
  dispatch("key-down", { code: event.code, event });
}

function handleKeyUp(event) {
  pressedKeys.delete(event.code);
  dispatch("key-up", { code: event.code, event });
}

function updatePointerPosition(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.ndcX = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.ndcY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function buildPointerPayload(event) {
  return {
    event,
    x: pointer.x,
    y: pointer.y,
    ndcX: pointer.ndcX,
    ndcY: pointer.ndcY,
    down: pointer.down,
    button: pointer.button,
  };
}

