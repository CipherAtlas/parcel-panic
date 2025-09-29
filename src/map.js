import {
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  BufferGeometry,
  Float32BufferAttribute,
} from "../node_modules/three/build/three.module.js";
import { PALETTE } from "./utils.js";

export function initMap(scene, rng, config) {
  const mapGroup = new Group();
  mapGroup.name = "Map";
  scene.add(mapGroup);

  const size = config.WORLD_SIZE;
  const half = size / 2;

  const groundMaterial = new MeshStandardMaterial({
    color: PALETTE.ground,
    roughness: 0.85,
    metalness: 0.05,
  });
  const ground = new Mesh(new PlaneGeometry(size, size, 1, 1), groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = false;
  mapGroup.add(ground);

  const grid = buildGrid(size, config.GRID_RES);
  grid.visible = false;
  mapGroup.add(grid);

  return {
    root: mapGroup,
    size,
    half,
    ground,
    grid,
    obstacles: [],
  };
}

export function setGridVisible(mapState, visible) {
  if (mapState?.grid) {
    mapState.grid.visible = visible;
  }
}

export function getRandomSpawnPoint(mapState, rng) {
  const margin = mapState.size * 0.08;
  const x = rng.randRange(-mapState.half + margin, mapState.half - margin);
  const z = rng.randRange(-mapState.half + margin, mapState.half - margin);
  return { x, z, y: 0 };
}

export function isSegmentValid(a, b, mapState) {
  if (!mapState) return true;
  const half = mapState.half;
  return (
    Math.abs(a.x) <= half &&
    Math.abs(a.z) <= half &&
    Math.abs(b.x) <= half &&
    Math.abs(b.z) <= half
  );
}

function buildGrid(size, divisions) {
  const step = size / divisions;
  const half = size / 2;
  const vertices = [];

  for (let i = -half; i <= half; i += step) {
    vertices.push(-half, 0.01, i, half, 0.01, i);
    vertices.push(i, 0.01, -half, i, 0.01, half);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

  const material = new LineBasicMaterial({
    color: 0x4a5568,
    linewidth: 1,
  });

  const grid = new LineSegments(geometry, material);
  grid.frustumCulled = false;
  return grid;
}
