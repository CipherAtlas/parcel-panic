/**
 * Timer Optimization System for Parcel Panic
 * Provides balanced, playable timer configurations
 */

export class TimerOptimizer {
  constructor() {
    this.difficultyLevels = {
      easy: {
        name: "Easy",
        description: "Relaxed pace, great for learning",
        deadlineStart: 35, // seconds
        deadlineEnd: 20,
        spawnIntervalStart: 12,
        spawnIntervalEnd: 8,
        maxHouses: 6,
        deliveryRadius: 3.0,
        truckSpeed: 1.1
      },
      normal: {
        name: "Normal", 
        description: "Balanced challenge",
        deadlineStart: 30,
        deadlineEnd: 15,
        spawnIntervalStart: 10,
        spawnIntervalEnd: 6,
        maxHouses: 8,
        deliveryRadius: 2.5,
        truckSpeed: 1.0
      },
      hard: {
        name: "Hard",
        description: "Fast-paced action",
        deadlineStart: 25,
        deadlineEnd: 12,
        spawnIntervalStart: 8,
        spawnIntervalEnd: 4,
        maxHouses: 10,
        deliveryRadius: 2.0,
        truckSpeed: 0.9
      },
      expert: {
        name: "Expert",
        description: "Maximum challenge",
        deadlineStart: 20,
        deadlineEnd: 8,
        spawnIntervalStart: 6,
        spawnIntervalEnd: 3,
        maxHouses: 12,
        deliveryRadius: 1.8,
        truckSpeed: 0.8
      }
    };

    this.adaptiveSettings = {
      // Dynamic scaling based on player performance
      performanceThresholds: {
        excellent: 0.9, // 90% delivery rate
        good: 0.75,     // 75% delivery rate
        average: 0.6,  // 60% delivery rate
        poor: 0.4      // 40% delivery rate
      },
      
      // Scaling factors for different performance levels
      scalingFactors: {
        excellent: { deadline: 0.8, spawn: 1.2 }, // Make it harder
        good: { deadline: 0.9, spawn: 1.1 },
        average: { deadline: 1.0, spawn: 1.0 }, // No change
        poor: { deadline: 1.2, spawn: 0.9 }      // Make it easier
      }
    };
  }

  // Get optimized timer configuration
  getOptimizedConfig(difficulty = 'normal', playerPerformance = null) {
    const baseConfig = this.difficultyLevels[difficulty];
    
    if (!baseConfig) {
      console.warn(`Unknown difficulty level: ${difficulty}, using normal`);
      return this.difficultyLevels.normal;
    }

    // Apply adaptive scaling if player performance data is available
    if (playerPerformance) {
      return this.applyAdaptiveScaling(baseConfig, playerPerformance);
    }

    return baseConfig;
  }

  // Apply adaptive scaling based on player performance
  applyAdaptiveScaling(baseConfig, performance) {
    const deliveryRate = performance.deliveries / Math.max(performance.attempts, 1);
    let performanceLevel = 'average';

    // Determine performance level
    if (deliveryRate >= this.adaptiveSettings.performanceThresholds.excellent) {
      performanceLevel = 'excellent';
    } else if (deliveryRate >= this.adaptiveSettings.performanceThresholds.good) {
      performanceLevel = 'good';
    } else if (deliveryRate >= this.adaptiveSettings.performanceThresholds.average) {
      performanceLevel = 'average';
    } else {
      performanceLevel = 'poor';
    }

    const scaling = this.adaptiveSettings.scalingFactors[performanceLevel];
    
    return {
      ...baseConfig,
      deadlineStart: baseConfig.deadlineStart * scaling.deadline,
      deadlineEnd: baseConfig.deadlineEnd * scaling.deadline,
      spawnIntervalStart: baseConfig.spawnIntervalStart * scaling.spawn,
      spawnIntervalEnd: baseConfig.spawnIntervalEnd * scaling.spawn
    };
  }

  // Get progressive difficulty scaling
  getProgressiveConfig(week, baseDifficulty = 'normal') {
    const baseConfig = this.difficultyLevels[baseDifficulty];
    const weekMultiplier = Math.min(1 + (week - 1) * 0.1, 2.0); // Cap at 2x difficulty
    
    return {
      ...baseConfig,
      deadlineStart: baseConfig.deadlineStart * (1 / weekMultiplier),
      deadlineEnd: baseConfig.deadlineEnd * (1 / weekMultiplier),
      spawnIntervalStart: baseConfig.spawnIntervalStart * (1 / weekMultiplier),
      spawnIntervalEnd: baseConfig.spawnIntervalEnd * (1 / weekMultiplier),
      maxHouses: Math.min(baseConfig.maxHouses + Math.floor(week / 3), 15)
    };
  }

  // Get balanced timer configuration for current game state
  getBalancedConfig(gameState) {
    try {
      const { week, score, activeHouses, truckSpeed, deliveryRadius } = gameState;
      
      // Base configuration
      let config = this.difficultyLevels.normal;
      
      // Adjust based on week
      if (week <= 2) {
        config = this.difficultyLevels.easy;
      } else if (week <= 5) {
        config = this.difficultyLevels.normal;
      } else if (week <= 8) {
        config = this.difficultyLevels.hard;
      } else {
        config = this.difficultyLevels.expert;
      }
      
      // Adjust based on current performance
      const avgHousesPerWeek = score / week;
      if (avgHousesPerWeek < 3) {
        // Player struggling, make it easier
        config = {
          ...config,
          deadlineStart: config.deadlineStart * 1.3,
          deadlineEnd: config.deadlineEnd * 1.3,
          deliveryRadius: config.deliveryRadius * 1.2
        };
      } else if (avgHousesPerWeek > 8) {
        // Player doing well, make it harder
        config = {
          ...config,
          deadlineStart: config.deadlineStart * 0.8,
          deadlineEnd: config.deadlineEnd * 0.8,
          spawnIntervalStart: config.spawnIntervalStart * 0.8,
          spawnIntervalEnd: config.spawnIntervalEnd * 0.8
        };
      }
      
      return config;
    } catch (error) {
      console.warn('Timer optimizer failed, using fallback:', error);
      return this.difficultyLevels.normal;
    }
  }

  // Calculate optimal timer values for a specific scenario
  calculateOptimalTimers(scenario) {
    const { worldSize, truckSpeed, deliveryRadius, maxHouses, weekDuration } = scenario;
    
    // Calculate travel time between houses
    const avgDistance = worldSize * 0.3; // Average distance between houses
    const travelTime = avgDistance / truckSpeed;
    
    // Calculate delivery time
    const deliveryTime = 0.25; // 250ms stop time
    
    // Calculate total time needed per house
    const timePerHouse = travelTime + deliveryTime;
    
    // Calculate optimal deadline
    const optimalDeadline = timePerHouse * 2.5; // Give 2.5x the time needed
    
    // Calculate optimal spawn interval
    const optimalSpawnInterval = timePerHouse * 1.5; // Spawn houses at 1.5x the delivery rate
    
    return {
      deadlineStart: Math.max(optimalDeadline, 15), // Minimum 15 seconds
      deadlineEnd: Math.max(optimalDeadline * 0.6, 8), // Minimum 8 seconds
      spawnIntervalStart: Math.max(optimalSpawnInterval, 4), // Minimum 4 seconds
      spawnIntervalEnd: Math.max(optimalSpawnInterval * 0.7, 2), // Minimum 2 seconds
      maxHouses: Math.min(maxHouses, Math.floor(weekDuration / optimalSpawnInterval))
    };
  }

  // Get timer configuration for different game modes
  getModeConfig(mode) {
    switch (mode) {
      case 'tutorial':
        return {
          ...this.difficultyLevels.easy,
          deadlineStart: 45,
          deadlineEnd: 30,
          spawnIntervalStart: 15,
          spawnIntervalEnd: 12,
          maxHouses: 4
        };
      
      case 'speedrun':
        return {
          ...this.difficultyLevels.expert,
          deadlineStart: 15,
          deadlineEnd: 6,
          spawnIntervalStart: 4,
          spawnIntervalEnd: 2,
          maxHouses: 15
        };
      
      case 'endless':
        return {
          ...this.difficultyLevels.normal,
          deadlineStart: 30,
          deadlineEnd: 15,
          spawnIntervalStart: 8,
          spawnIntervalEnd: 5,
          maxHouses: 20
        };
      
      case 'challenge':
        return {
          ...this.difficultyLevels.hard,
          deadlineStart: 20,
          deadlineEnd: 10,
          spawnIntervalStart: 6,
          spawnIntervalEnd: 3,
          maxHouses: 12,
          deliveryRadius: 1.5
        };
      
      default:
        return this.difficultyLevels.normal;
    }
  }

  // Validate timer configuration
  validateConfig(config) {
    const issues = [];
    
    if (config.deadlineStart < 10) {
      issues.push('Deadline start too short (< 10s)');
    }
    
    if (config.deadlineEnd < 5) {
      issues.push('Deadline end too short (< 5s)');
    }
    
    if (config.deadlineEnd >= config.deadlineStart) {
      issues.push('Deadline end should be less than deadline start');
    }
    
    if (config.spawnIntervalStart < 3) {
      issues.push('Spawn interval start too short (< 3s)');
    }
    
    if (config.spawnIntervalEnd < 2) {
      issues.push('Spawn interval end too short (< 2s)');
    }
    
    if (config.spawnIntervalEnd >= config.spawnIntervalStart) {
      issues.push('Spawn interval end should be less than spawn interval start');
    }
    
    if (config.maxHouses < 3) {
      issues.push('Too few houses (< 3)');
    }
    
    if (config.maxHouses > 20) {
      issues.push('Too many houses (> 20)');
    }
    
    return {
      valid: issues.length === 0,
      issues: issues
    };
  }

  // Get recommended configuration based on player feedback
  getRecommendedConfig(playerFeedback) {
    const { tooEasy, tooHard, tooFast, tooSlow, confusing } = playerFeedback;
    
    let config = this.difficultyLevels.normal;
    
    if (tooEasy) {
      config = this.difficultyLevels.hard;
    } else if (tooHard) {
      config = this.difficultyLevels.easy;
    }
    
    if (tooFast) {
      config = {
        ...config,
        deadlineStart: config.deadlineStart * 1.3,
        deadlineEnd: config.deadlineEnd * 1.3,
        spawnIntervalStart: config.spawnIntervalStart * 1.2,
        spawnIntervalEnd: config.spawnIntervalEnd * 1.2
      };
    } else if (tooSlow) {
      config = {
        ...config,
        deadlineStart: config.deadlineStart * 0.8,
        deadlineEnd: config.deadlineEnd * 0.8,
        spawnIntervalStart: config.spawnIntervalStart * 0.8,
        spawnIntervalEnd: config.spawnIntervalEnd * 0.8
      };
    }
    
    if (confusing) {
      config = {
        ...config,
        deliveryRadius: config.deliveryRadius * 1.3,
        maxHouses: Math.min(config.maxHouses, 6)
      };
    }
    
    return config;
  }
}

// Export default instance
export const timerOptimizer = new TimerOptimizer();
