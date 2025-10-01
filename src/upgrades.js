import { CONFIG } from "./main.js";

const UPGRADE_POOL = [
  {
    id: "tuned_engine",
    name: "Tuned Engine",
    getDesc: (state) => {
      const currentSpeedMultiplier = state.truck.baseSpeed / CONFIG.BASE_SPEED;
      let nextBoost;
      
      if (currentSpeedMultiplier <= 1.05) {
        nextBoost = "5%";
      } else if (currentSpeedMultiplier <= 1.176) { // 1.05 * 1.12
        nextBoost = "12%";
      } else if (currentSpeedMultiplier <= 1.3524) { // 1.176 * 1.15
        nextBoost = "15%";
      } else {
        nextBoost = "20%";
      }
      
      return `+${nextBoost} speed boost`;
    },
    apply: (state) => {
      const currentSpeedMultiplier = state.truck.baseSpeed / CONFIG.BASE_SPEED;
      let speedIncrease;
      
      if (currentSpeedMultiplier <= 1.05) {
        speedIncrease = 1.05; // First upgrade: +5%
      } else if (currentSpeedMultiplier <= 1.176) { // 1.05 * 1.12
        speedIncrease = 1.12; // Second upgrade: +12%
      } else if (currentSpeedMultiplier <= 1.3524) { // 1.176 * 1.15
        speedIncrease = 1.15; // Third upgrade: +15%
      } else {
        speedIncrease = 1.20; // Fourth upgrade: +20%
      }
      
      // Apply the speed increase multiplicatively to the current speed
      state.truck.baseSpeed *= speedIncrease;
      
      console.log(`[UPGRADE] Tuned Engine applied: ${(speedIncrease - 1) * 100}% speed boost (new speed: ${state.truck.baseSpeed.toFixed(2)})`);
      
      // Visual speed feedback removed
    },
    stackable: true,
  },
  {
    id: "service_radius",
    name: "Service Radius+",
    desc: "+20% delivery radius. Much easier to hit houses.",
    apply: (state) => {
      state.truck.deliveryRadius *= 1.20;
    },
    stackable: true,
  },
  {
    id: "patient_customers",
    name: "Patient Customers",
    desc: "+12% max deadlines for all houses.",
    apply: (state) => {
      state.config.DEADLINE_START *= 1.12;
      state.config.DEADLINE_END *= 1.12;
      for (const house of state.houseManager.getHouses()) {
        house.setDeadline(house.deadlineMaxMs * 1.12);
      }
    },
    stackable: false,
  },
  {
    id: "dispatch_optimizer",
    name: "Dispatch Optimizer",
    desc: "Route cooldown -1.5s. Draw routes more frequently.",
    apply: (state) => {
      // This will be handled in main.js when route cooldown is applied
      if (!state.routeCooldownModifier) {
        state.routeCooldownModifier = 0;
      }
      state.routeCooldownModifier -= 1.5; // Reduce cooldown by 1.5 seconds
      console.log(`[UPGRADE] Dispatch Optimizer applied - route cooldown reduction: ${Math.abs(state.routeCooldownModifier)}s`);
    },
    stackable: true,
  },
  {
    id: "time_master",
    name: "Time Master",
    desc: "Week timer +15 seconds. More time to plan routes.",
    apply: (state) => {
      state.config.WEEK_SECONDS += 15;
    },
    stackable: true,
  },
];

export function generateChoices(rng, takenSet = new Set(), count = 3, gameState = null) {
  const candidates = UPGRADE_POOL.filter((card) => {
    // Only filter out non-stackable upgrades that have been taken
    if (!card.stackable && takenSet.has(card.id)) return false;
    // Check for any conditions that might prevent selection
    if (card.condition && gameState && !card.condition(gameState)) return false;
    return true;
  });

  console.log(`[UPGRADES] Generated ${candidates.length} candidates from ${UPGRADE_POOL.length} total upgrades`);
  console.log(`[UPGRADES] Taken upgrades:`, Array.from(takenSet));
  
  const available = candidates.slice();
  rng.shuffle(available);
  const selected = available.slice(0, count);
  
  console.log(`[UPGRADES] Selected upgrades:`, selected.map(card => card.name));
  
  return selected;
}
