import {
  BoxGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { advanceU } from "./sampling.js";
import { PALETTE, clamp, vec3DistanceXZ } from "./utils.js";
import { getAsset } from "./asset-loader.js";

const _pos = new Vector3();
const _tangent = new Vector3();

export class Truck {
  constructor(config) {
    this.config = config;
    this.group = new Group();
    this.group.name = "Truck";
    this.loadTruckModel();

    this.curve = null;
    this.lut = null;
    this.u = 0;
    this.baseSpeed = config.BASE_SPEED;
    this.speed = config.BASE_SPEED;
    this.deliveryRadius = config.DELIVERY_RADIUS;
    this.cooldown = 0;

  }

  loadTruckModel() {
    // Try to get preloaded asset first
    const preloadedTruck = getAsset('truck');
    if (preloadedTruck) {
      // Clone the preloaded model
      const truckModel = preloadedTruck.clone();
      truckModel.scale.setScalar(0.009); // Scale down even more
      truckModel.rotation.y = Math.PI; // Rotate 180 degrees to face correct direction
      truckModel.position.set(0, 0, 0);
      this.applyTruckMaterials(truckModel);
      this.group.add(truckModel);
      console.log('✅ Truck model loaded from cache');
    } else {
      // Fallback to loading from file if not preloaded
      const loader = new OBJLoader();
      loader.load(
        'assets/models/truck.obj',
        (object) => {
          object.scale.setScalar(0.03); // Scale down even more
          object.rotation.y = Math.PI; // Rotate 180 degrees to face correct direction
          object.position.set(0, 0, 0);
          this.applyTruckMaterials(object);
          this.group.add(object);
          console.log('✅ Truck model loaded from file');
        },
        (progress) => {
          console.log('Loading truck model:', (progress.loaded / progress.total * 100) + '%');
        },
        (error) => {
          console.error('❌ Error loading truck model:', error);
          // Fallback to generated mesh if OBJ fails
          this.group.add(buildTruckMesh());
        }
      );
    }
  }

  applyTruckMaterials(object) {
    object.traverse((child) => {
      if (child.isMesh) {
        const material = new MeshStandardMaterial({
          color: 0xd4a574, // Warm caramel brown from winter jazz palette
          roughness: 0.7,
          metalness: 0.2,
        });
        child.material = material;
      }
    });
  }

  attachToCurve(curve, lut, attachU = 0, attachPoint = null) {
    this.curve = curve;
    this.lut = lut;
    this.u = ((attachU % 1) + 1) % 1;
    if (curve) {
      if (attachPoint) {
        this.group.position.copy(attachPoint);
      } else {
        curve.getPointAt(this.u, _pos);
        this.group.position.copy(_pos);
      }
    }
  }


  addToScene(scene) {
    scene.add(this.group);
  }

  update(dt, context) {
    if (!this.curve || !this.lut) return;
    const {
      houses = [],
      onDeliver = () => {},
      now = typeof performance !== "undefined" ? performance.now() : Date.now(),
    } = context || {};

    const effectiveSpeed = this.computeSpeed();
    const moveDist = effectiveSpeed * dt;

    if (this.cooldown > 0) {
      this.cooldown -= dt;
    } else {
      this.u = advanceU(this.lut, this.u, moveDist);
    }

    this.curve.getPointAt(this.u, _pos);
    this.curve.getTangentAt(this.u, _tangent);
    this.group.position.copy(_pos);
    const heading = Math.atan2(_tangent.x, _tangent.z);
    this.group.rotation.y = heading;


    if (this.cooldown > 0) {
      return;
    }

    for (const house of houses) {
      if (!house.active) continue;
      if (typeof house.isServedRecently === "function" && house.isServedRecently(now)) continue;
      const dist = vec3DistanceXZ(this.group.position, house.position);
      if (dist <= this.deliveryRadius) {
        this.cooldown = 0.25; // 250ms cooldown
        onDeliver(house, now);
        break;
      }
    }
  }

  computeSpeed() {
    return this.baseSpeed;
  }
}

function buildTruckMesh() {
  const group = new Group();

  const baseGeom = new BoxGeometry(3.2, 1.2, 2.0);
  const cabGeom = new BoxGeometry(1.4, 1.3, 1.8);

  const baseMat = new MeshStandardMaterial({
    color: PALETTE.truckBase,
    roughness: 0.4,
    metalness: 0.1,
  });
  const cabMat = new MeshStandardMaterial({
    color: PALETTE.truckCab,
    roughness: 0.35,
    metalness: 0.1,
  });

  const base = new Mesh(baseGeom, baseMat);
  base.position.y = 0.6;
  group.add(base);

  const cab = new Mesh(cabGeom, cabMat);
  cab.position.set(1.0, 0.75, 0);
  group.add(cab);

  return group;
}
