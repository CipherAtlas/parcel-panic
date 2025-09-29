import {
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  CylinderGeometry,
  RingGeometry,
  Vector3,
} from "../node_modules/three/build/three.module.js";
import { getRandomSpawnPoint } from "./map.js";
import { clamp, colorLerp, lerp, smoothstep, vec3DistanceXZ, PALETTE } from "./utils.js";

const RING_SEGMENTS = 48;
const DIFFICULTY_TIME_CAP = 300; // Reduced for 35-second weeks
const MIN_HOUSE_SPACING = 9;
const SERVE_GRACE_MS = 500;

export class House {
  constructor(position, baseDeadlineMs) {
    this.position = position.clone();
    this.deadlineMaxMs = baseDeadlineMs;
    this.deadlineMs = baseDeadlineMs;
    this.active = true;
    this.warningThreshold = 0.25;
    this.lastServedAt = -Infinity;

    this.group = buildHouseMesh();
    this.group.position.copy(this.position);
    this.group.name = "House";

    this.timerMesh = this.group.getObjectByName("HouseTimer");
    this.bodyMesh = this.group.getObjectByName("HouseBody");
    this.roofMesh = this.group.getObjectByName("HouseRoof");
    this.ringIndexCount = this.timerMesh.geometry.index?.count ?? RING_SEGMENTS * 6;
    this.refreshVisuals();
  }

  update(dt, now) {
    if (!this.active) return false;
    this.deadlineMs -= dt * 1000;
    this.refreshVisuals();
    return this.deadlineMs <= 0;
  }

  deliver(now) {
    this.deadlineMs = this.deadlineMaxMs;
    this.lastServedAt = now;
    this.refreshVisuals();
  }

  isServedRecently(now) {
    return now - this.lastServedAt < SERVE_GRACE_MS;
  }

  refreshVisuals() {
    if (!this.active) {
      this.group.visible = false;
      return;
    }
    this.group.visible = true;
    const fraction = clamp(this.deadlineMs / this.deadlineMaxMs, 0, 1);
    const indexCount = Math.max(3, Math.floor(this.ringIndexCount * fraction));
    this.timerMesh.geometry.setDrawRange(0, indexCount);

    const color = fraction > 0.5
      ? colorLerp(PALETTE.safe, PALETTE.warning, (1 - fraction) * 2)
      : colorLerp(PALETTE.warning, PALETTE.danger, clamp((0.5 - fraction) / 0.5, 0, 1));
    this.timerMesh.material.color.copy(color);

    const pulse = fraction < this.warningThreshold
      ? 1 + Math.sin((1 - fraction) * 20) * 0.05
      : 1;
    this.timerMesh.scale.setScalar(pulse);
  }

  setDeadline(deadlineMs) {
    this.deadlineMaxMs = deadlineMs;
    this.deadlineMs = deadlineMs;
    this.refreshVisuals();
  }
}

export class HouseManager {
  constructor(scene, mapState, rng, config) {
    this.scene = scene;
    this.mapState = mapState;
    this.rng = rng;
    this.config = config;
    this.houses = [];
    this.group = new Group();
    this.group.name = "HouseManager";
    scene.add(this.group);

    this.elapsed = 0;
    this.spawnTimer = config.FIRST_SPAWN_AT;
    this.spawnedCount = 0;
    this.maxHouses = config.MAX_HOUSES || 12; // Limit total houses
    this.justSpawned = false; // Track if a house was just spawned
    this.weekElapsed = 0; // Track time within current week
    this.weekNumber = 1; // Track current week
    this.housesSpawnedThisWeek = 0; // Track houses spawned in current week
  }

  setRng(rng) {
    this.rng = rng;
  }

  reset() {
    for (const house of this.houses) {
      this.group.remove(house.group);
    }
    this.houses.length = 0;
    this.elapsed = 0;
    this.spawnTimer = this.config.FIRST_SPAWN_AT;
    this.spawnedCount = 0;
    this.maxHouses = this.config.MAX_HOUSES || 12;
    this.justSpawned = false;
    this.weekElapsed = 0;
    this.weekNumber = 1;
    this.housesSpawnedThisWeek = 0;
  }

  resetWeek() {
    // Called when a new week starts
    this.weekElapsed = 0;
    this.weekNumber += 1;
    this.housesSpawnedThisWeek = 0;
    console.log(`[HOUSE] Week ${this.weekNumber} started - resetting house spawns`);
  }

  update(dt, now) {
    this.elapsed += dt;
    this.weekElapsed += dt;
    this.justSpawned = false; // Reset the flag at start of update

    let expiredHouse = null;
    for (const house of this.houses) {
      if (!house.active) continue;
      const expired = house.update(dt, now);
      if (expired && !expiredHouse) {
        expiredHouse = house;
      }
    }

    // Fixed spawn system: 3 houses for weeks 1-5, 5 houses for week 6+
    const shouldSpawn = this.shouldSpawnHouse();
    if (shouldSpawn) {
      this.spawnNextHouse();
      this.justSpawned = true; // Set flag when a house is spawned
    }

    return expiredHouse;
  }

  shouldSpawnHouse() {
    // Fixed spawn times based on week
    if (this.weekNumber <= 5) {
      // Weeks 1-5: 3 houses at fixed times (2s, 22s, 45s)
      const spawnTimes = [2, 22, 45];
      const currentTime = this.weekElapsed;
      
      for (let i = 0; i < spawnTimes.length; i++) {
        if (this.housesSpawnedThisWeek === i && 
            currentTime >= spawnTimes[i] && 
            currentTime < spawnTimes[i] + 1) {
          return true;
        }
      }
    } else {
      // Week 6+: 5 houses at fixed times (2s, 22s, 45s, 60s, 75s)
      const spawnTimes = [2, 22, 45, 60, 75];
      const currentTime = this.weekElapsed;
      
      for (let i = 0; i < spawnTimes.length; i++) {
        if (this.housesSpawnedThisWeek === i && 
            currentTime >= spawnTimes[i] && 
            currentTime < spawnTimes[i] + 1) {
          return true;
        }
      }
    }
    
    return false;
  }

  spawnNextHouse() {
    const deadline = this.getDeadline();
    const position = this.findSpawnPosition();
    const house = new House(position, deadline);
    this.houses.push(house);
    this.group.add(house.group);
    this.spawnedCount += 1;
    this.housesSpawnedThisWeek += 1;
    console.log(`[HOUSE] House spawned! Week ${this.weekNumber}, House ${this.housesSpawnedThisWeek} at ${this.weekElapsed.toFixed(1)}s`);
    return house;
  }

  findSpawnPosition() {
    let best = null;
    for (let i = 0; i < 40; i += 1) {
      const spawn = getRandomSpawnPoint(this.mapState, this.rng);
      const candidate = new Vector3(spawn.x, 0, spawn.z);
      if (this.isFarFromOthers(candidate)) {
        return candidate;
      }
      if (!best) best = candidate;
    }
    return best || new Vector3(0, 0, 0);
  }

  isFarFromOthers(candidate) {
    for (const house of this.houses) {
      if (!house.active) continue;
      const dist = vec3DistanceXZ(candidate, house.position);
      if (dist < MIN_HOUSE_SPACING) {
        return false;
      }
    }
    return true;
  }

  handleDelivery(house, now) {
    if (!house) return;
    house.deliver(now);
  }

  getHouses() {
    return this.houses;
  }

  getActiveHouseCount() {
    return this.houses.filter(house => house.active).length;
  }


  getDeadline() {
    const t = Math.min(this.elapsed, DIFFICULTY_TIME_CAP);
    const start = this.config.DEADLINE_START * 1000;
    const end = this.config.DEADLINE_END * 1000;
    return lerp(start, end, smoothstep(0, DIFFICULTY_TIME_CAP, t));
  }

  wasJustSpawned() {
    // Return whether a house was just spawned in this update cycle
    return this.justSpawned;
  }
}

function buildHouseMesh() {
  const group = new Group();

  const bodyGeom = new CylinderGeometry(1.3, 1.3, 1.5, 12);
  const roofGeom = new CylinderGeometry(0, 1.45, 1.1, 12);
  const ringGeom = new RingGeometry(1.5, 1.7, RING_SEGMENTS);

  const bodyMat = new MeshStandardMaterial({
    color: PALETTE.houseBody,
    roughness: 0.6,
    metalness: 0.05,
  });
  const roofMat = new MeshStandardMaterial({
    color: PALETTE.houseRoof,
    roughness: 0.45,
    metalness: 0.1,
  });
  const ringMat = new MeshBasicMaterial({
    color: PALETTE.safe,
    transparent: true,
    opacity: 0.9,
    side: DoubleSide,
  });

  const body = new Mesh(bodyGeom, bodyMat);
  body.name = "HouseBody";
  body.position.y = 0.75;
  group.add(body);

  const roof = new Mesh(roofGeom, roofMat);
  roof.name = "HouseRoof";
  roof.position.y = 1.55;
  group.add(roof);

  const ring = new Mesh(ringGeom, ringMat);
  ring.name = "HouseTimer";
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 2.0;
  group.add(ring);

  return group;
}