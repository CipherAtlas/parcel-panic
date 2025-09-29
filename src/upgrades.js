const UPGRADE_POOL = [
  {
    id: "tuned_engine",
    name: "Tuned Engine",
    desc: "+10% base speed."
      + " Trucks move faster between deliveries.",
    apply: (state) => {
      state.truck.baseSpeed *= 1.1;
    },
    stackable: true,
  },
  {
    id: "service_radius",
    name: "Service Radius+",
    desc: "+10% delivery radius. Easier to hit houses.",
    apply: (state) => {
      state.truck.deliveryRadius *= 1.1;
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
    desc: "Deadlines +20% longer and delivery radius +15%.",
    apply: (state) => {
      state.config.DEADLINE_START *= 1.2;
      state.config.DEADLINE_END *= 1.2;
      state.truck.deliveryRadius *= 1.15;
    },
    stackable: false,
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
  {
    id: "fleet_training",
    name: "Fleet Training",
    desc: "Base speed +10% and delivery radius +5%.",
    apply: (state) => {
      state.truck.baseSpeed *= 1.1;
      state.truck.deliveryRadius *= 1.05;
    },
    stackable: true,
  },
];

export function generateChoices(rng, takenSet = new Set(), count = 3, state = null) {
  const candidates = UPGRADE_POOL.filter((card) => {
    if (!card.stackable && takenSet.has(card.id)) return false;
    if (card.condition && state && !card.condition(state)) return false;
    return true;
  });

  const available = candidates.slice();
  rng.shuffle(available);
  return available.slice(0, count);
}
