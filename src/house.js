import {
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  CylinderGeometry,
  RingGeometry,
  Vector3,
} from "three";
import { getRandomSpawnPoint } from "./map.js";
import { clamp, colorLerp, lerp, smoothstep, vec3DistanceXZ, PALETTE } from "./utils.js";

const RING_SEGMENTS = 48;
const DIFFICULTY_TIME_CAP = 300; // Reduced for 35-second weeks
const MIN_HOUSE_SPACING = 9;
const SERVE_GRACE_MS = 500;

export class House {
  constructor(position, baseDeadlineMs, houseType = "normal") {
    this.position = position.clone();
    this.deadlineMaxMs = baseDeadlineMs;
    this.deadlineMs = baseDeadlineMs;
    this.active = true;
    this.warningThreshold = 0.25;
    this.lastServedAt = -Infinity;
    this.houseType = houseType; // "normal", "medium", "urgent"

    this.group = buildHouseMesh(this.houseType);
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
    
    // Apply different timer speeds based on house type
    const timerSpeed = this.getTimerSpeed();
    this.deadlineMs -= dt * 1000 * timerSpeed;
    
    this.refreshVisuals();
    return this.deadlineMs <= 0;
  }

  getTimerSpeed() {
    // All house types use the same timer speed, differences are in base deadline
    return 1.0;
  }

  getBaseDeadlineMultiplier() {
    switch (this.houseType) {
      case "normal": return 1.0;   // Base timer x
      case "medium": return 1.0;   // Base timer x+10 (handled in deadline calculation)
      case "urgent": return 1.0;   // Base timer x+20 (handled in deadline calculation)
      default: return 1.0;
    }
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
    this.maxHouses = Infinity; // No limit - endless endgame!
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
    this.maxHouses = Infinity; // No limit - endless endgame!
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
    // Escalating house spawns for epic endgame!
    const week = this.weekNumber;
    const currentTime = this.weekElapsed;
    
    // Calculate how many houses this week should have
    let housesThisWeek;
    if (week <= 3) {
      housesThisWeek = 3; // Early weeks: 3 houses
    } else if (week <= 6) {
      housesThisWeek = 5; // Mid weeks: 5 houses
    } else if (week <= 10) {
      housesThisWeek = 8; // Late weeks: 8 houses
    } else {
      // Endgame: Escalating madness!
      housesThisWeek = Math.min(3 + week * 2, 50); // 11 houses in week 10, 15 in week 12, etc. (max 50)
    }
    
    // Generate spawn times dynamically
    const spawnInterval = 35 / housesThisWeek; // Distribute houses across the 35-second week
    const spawnTimes = [];
    for (let i = 0; i < housesThisWeek; i++) {
      spawnTimes.push(2 + (i * spawnInterval)); // Start at 2s, then distribute evenly
    }
    
    // Check if it's time to spawn the next house
    for (let i = 0; i < spawnTimes.length; i++) {
      if (this.housesSpawnedThisWeek === i && 
          currentTime >= spawnTimes[i] && 
          currentTime < spawnTimes[i] + 1) {
        return true;
      }
    }
    
    return false;
  }

  spawnNextHouse() {
    const baseDeadline = this.getDeadline();
    const position = this.findSpawnPosition();
    const houseType = this.determineHouseType();
    
    // Calculate deadline based on house type
    let deadline = baseDeadline;
    switch (houseType) {
      case "normal": deadline = baseDeadline + 20000; break;   // Base timer +20s (60s) - LONGEST
      case "medium": deadline = baseDeadline + 10000; break;   // Base timer +10s (50s) - MIDDLE  
      case "urgent": deadline = baseDeadline; break;           // Base timer (40s) - SHORTEST
    }
    
    const house = new House(position, deadline, houseType);
    this.houses.push(house);
    this.group.add(house.group);
    this.spawnedCount += 1;
    this.housesSpawnedThisWeek += 1;
    console.log(`[HOUSE] ${houseType.toUpperCase()} house spawned! Week ${this.weekNumber}, House ${this.housesSpawnedThisWeek} at ${this.weekElapsed.toFixed(1)}s (deadline: ${(deadline/1000).toFixed(1)}s)`);
    return house;
  }

  determineHouseType() {
    // Equal distribution: 33.33% each type
    const rand = this.rng.rand();
    
    if (rand < 0.3333) return "normal";    // 33.33%
    if (rand < 0.6666) return "medium";    // 33.33%
    return "urgent";                       // 33.34%
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
    // Keep timers consistent - no progressive difficulty
    const start = this.config.DEADLINE_START * 1000;
    return start; // Always use the starting deadline (40 seconds)
  }

  wasJustSpawned() {
    // Return whether a house was just spawned in this update cycle
    return this.justSpawned;
  }
}

function buildHouseMesh(houseType = "normal") {
  const group = new Group();

  const bodyGeom = new CylinderGeometry(1.3, 1.3, 1.5, 12);
  const roofGeom = new CylinderGeometry(0, 1.45, 1.1, 12);
  const ringGeom = new RingGeometry(1.5, 1.7, RING_SEGMENTS);

  // Different materials based on house type
  const houseColors = getHouseColors(houseType);
  
  const bodyMat = new MeshStandardMaterial({
    color: houseColors.body,
    roughness: 0.6,
    metalness: 0.05,
  });
  const roofMat = new MeshStandardMaterial({
    color: houseColors.roof,
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

function getHouseColors(houseType) {
  switch (houseType) {
    case "normal":
      return {
        body: 0x2ed573,  // Green for normal (base timer x)
        roof: 0x20bf6b   // Darker green
      };
    case "medium":
      return {
        body: 0x9c27b0,  // Purple for medium (base timer x+10)
        roof: 0x7b1fa2   // Darker purple
      };
    case "urgent":
      return {
        body: 0xff3838,  // Red for urgent (base timer x+20)
        roof: 0xff2f2f   // Darker red
      };
    default: // fallback
      return {
        body: 0x2ed573,  // Default to green
        roof: 0x20bf6b   // Default to darker green
      };
  }
}