/**
 * Timer Optimization Test Suite
 * Tests the timer optimization system for playability
 */

import { timerOptimizer } from './timer-optimizer.js';

export class TimerTest {
  constructor() {
    this.testResults = {};
  }

  async runAllTests() {
    console.log('🧪 Starting Timer Optimization Tests...');
    
    const tests = [
      { name: 'Basic Timer Configuration', fn: this.testBasicConfiguration },
      { name: 'Difficulty Levels', fn: this.testDifficultyLevels },
      { name: 'Adaptive Scaling', fn: this.testAdaptiveScaling },
      { name: 'Progressive Difficulty', fn: this.testProgressiveDifficulty },
      { name: 'Performance-Based Adjustment', fn: this.testPerformanceBasedAdjustment },
      { name: 'Timer Validation', fn: this.testTimerValidation },
      { name: 'Playability Assessment', fn: this.testPlayabilityAssessment }
    ];

    for (const test of tests) {
      try {
        console.log(`⏳ Running ${test.name}...`);
        const result = await test.fn.call(this);
        this.testResults[test.name] = result;
        console.log(`✅ ${test.name}: ${result.success ? 'PASSED' : 'FAILED'}`);
        if (!result.success && result.error) {
          console.log(`   Error: ${result.error}`);
        }
      } catch (error) {
        console.error(`❌ ${test.name}: ERROR -`, error.message);
        this.testResults[test.name] = { success: false, error: error.message };
      }
    }

    this.printSummary();
    return this.testResults;
  }

  testBasicConfiguration() {
    try {
      const config = timerOptimizer.getOptimizedConfig('normal');
      
      // Validate basic properties
      const requiredProps = ['deadlineStart', 'deadlineEnd', 'spawnIntervalStart', 'spawnIntervalEnd', 'maxHouses', 'deliveryRadius'];
      for (const prop of requiredProps) {
        if (config[prop] === undefined) {
          return { success: false, error: `Missing property: ${prop}` };
        }
      }
      
      // Validate reasonable values
      if (config.deadlineStart < 10 || config.deadlineStart > 60) {
        return { success: false, error: `Deadline start out of range: ${config.deadlineStart}` };
      }
      
      if (config.deadlineEnd < 5 || config.deadlineEnd >= config.deadlineStart) {
        return { success: false, error: `Deadline end invalid: ${config.deadlineEnd}` };
      }
      
      if (config.spawnIntervalStart < 3 || config.spawnIntervalStart > 20) {
        return { success: false, error: `Spawn interval start out of range: ${config.spawnIntervalStart}` };
      }
      
      if (config.spawnIntervalEnd < 2 || config.spawnIntervalEnd >= config.spawnIntervalStart) {
        return { success: false, error: `Spawn interval end invalid: ${config.spawnIntervalEnd}` };
      }
      
      return { success: true, config: config };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  testDifficultyLevels() {
    try {
      const levels = ['easy', 'normal', 'hard', 'expert'];
      const results = {};
      
      for (const level of levels) {
        const config = timerOptimizer.getOptimizedConfig(level);
        const validation = timerOptimizer.validateConfig(config);
        
        if (!validation.valid) {
          return { success: false, error: `Invalid config for ${level}: ${validation.issues.join(', ')}` };
        }
        
        results[level] = config;
      }
      
      // Verify difficulty progression
      const easy = results.easy;
      const normal = results.normal;
      const hard = results.hard;
      const expert = results.expert;
      
      // Easy should be easier than normal
      if (easy.deadlineStart <= normal.deadlineStart) {
        return { success: false, error: 'Easy difficulty not easier than normal' };
      }
      
      // Hard should be harder than normal
      if (hard.deadlineStart >= normal.deadlineStart) {
        return { success: false, error: 'Hard difficulty not harder than normal' };
      }
      
      // Expert should be hardest
      if (expert.deadlineStart >= hard.deadlineStart) {
        return { success: false, error: 'Expert difficulty not hardest' };
      }
      
      return { success: true, results: results };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  testAdaptiveScaling() {
    try {
      const baseConfig = timerOptimizer.getOptimizedConfig('normal');
      
      // Test different performance levels
      const performanceLevels = [
        { deliveries: 5, attempts: 10, expected: 'poor' },    // 50% delivery rate
        { deliveries: 8, attempts: 10, expected: 'average' }, // 80% delivery rate
        { deliveries: 9, attempts: 10, expected: 'good' },   // 90% delivery rate
        { deliveries: 10, attempts: 10, expected: 'excellent' } // 100% delivery rate
      ];
      
      for (const perf of performanceLevels) {
        const adjustedConfig = timerOptimizer.applyAdaptiveScaling(baseConfig, perf);
        
        if (!adjustedConfig) {
          return { success: false, error: `Failed to get adjusted config for performance level` };
        }
        
        // Validate adjusted config
        const validation = timerOptimizer.validateConfig(adjustedConfig);
        if (!validation.valid) {
          return { success: false, error: `Invalid adjusted config: ${validation.issues.join(', ')}` };
        }
      }
      
      return { success: true, message: 'Adaptive scaling working correctly' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  testProgressiveDifficulty() {
    try {
      const weeks = [1, 3, 5, 8, 10];
      const results = {};
      
      for (const week of weeks) {
        const config = timerOptimizer.getProgressiveConfig(week, 'normal');
        
        if (!config) {
          return { success: false, error: `Failed to get progressive config for week ${week}` };
        }
        
        const validation = timerOptimizer.validateConfig(config);
        if (!validation.valid) {
          return { success: false, error: `Invalid progressive config for week ${week}: ${validation.issues.join(', ')}` };
        }
        
        results[week] = config;
      }
      
      // Verify difficulty increases with weeks
      for (let i = 1; i < weeks.length; i++) {
        const prevWeek = weeks[i - 1];
        const currWeek = weeks[i];
        
        if (results[currWeek].deadlineStart >= results[prevWeek].deadlineStart) {
          return { success: false, error: `Difficulty not increasing from week ${prevWeek} to ${currWeek}` };
        }
      }
      
      return { success: true, results: results };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  testPerformanceBasedAdjustment() {
    try {
      const gameStates = [
        { week: 1, score: 0, activeHouses: 0, truckSpeed: 9, deliveryRadius: 2.0 },
        { week: 3, score: 6, activeHouses: 4, truckSpeed: 9, deliveryRadius: 2.0 },
        { week: 5, score: 15, activeHouses: 6, truckSpeed: 9, deliveryRadius: 2.0 },
        { week: 8, score: 30, activeHouses: 8, truckSpeed: 9, deliveryRadius: 2.0 }
      ];
      
      for (const gameState of gameStates) {
        const config = timerOptimizer.getBalancedConfig(gameState);
        
        if (!config) {
          return { success: false, error: `Failed to get balanced config for game state` };
        }
        
        const validation = timerOptimizer.validateConfig(config);
        if (!validation.valid) {
          return { success: false, error: `Invalid balanced config: ${validation.issues.join(', ')}` };
        }
      }
      
      return { success: true, message: 'Performance-based adjustment working correctly' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  testTimerValidation() {
    try {
      const validConfigs = [
        { deadlineStart: 30, deadlineEnd: 15, spawnIntervalStart: 8, spawnIntervalEnd: 4, maxHouses: 8, deliveryRadius: 2.0 },
        { deadlineStart: 25, deadlineEnd: 12, spawnIntervalStart: 6, spawnIntervalEnd: 3, maxHouses: 10, deliveryRadius: 2.5 }
      ];
      
      const invalidConfigs = [
        { deadlineStart: 5, deadlineEnd: 15, spawnIntervalStart: 8, spawnIntervalEnd: 4, maxHouses: 8, deliveryRadius: 2.0 }, // Start too short
        { deadlineStart: 30, deadlineEnd: 35, spawnIntervalStart: 8, spawnIntervalEnd: 4, maxHouses: 8, deliveryRadius: 2.0 }, // End >= Start
        { deadlineStart: 30, deadlineEnd: 15, spawnIntervalStart: 2, spawnIntervalEnd: 4, maxHouses: 8, deliveryRadius: 2.0 }, // Spawn interval too short
        { deadlineStart: 30, deadlineEnd: 15, spawnIntervalStart: 8, spawnIntervalEnd: 10, maxHouses: 8, deliveryRadius: 2.0 }, // Spawn end >= Start
        { deadlineStart: 30, deadlineEnd: 15, spawnIntervalStart: 8, spawnIntervalEnd: 4, maxHouses: 2, deliveryRadius: 2.0 }, // Too few houses
        { deadlineStart: 30, deadlineEnd: 15, spawnIntervalStart: 8, spawnIntervalEnd: 4, maxHouses: 25, deliveryRadius: 2.0 }  // Too many houses
      ];
      
      // Test valid configs
      for (const config of validConfigs) {
        const validation = timerOptimizer.validateConfig(config);
        if (!validation.valid) {
          return { success: false, error: `Valid config marked as invalid: ${validation.issues.join(', ')}` };
        }
      }
      
      // Test invalid configs
      for (const config of invalidConfigs) {
        const validation = timerOptimizer.validateConfig(config);
        if (validation.valid) {
          return { success: false, error: `Invalid config marked as valid` };
        }
      }
      
      return { success: true, message: 'Timer validation working correctly' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  testPlayabilityAssessment() {
    try {
      // Test optimal timer calculation
      const scenario = {
        worldSize: 100,
        truckSpeed: 9,
        deliveryRadius: 2.0,
        maxHouses: 8,
        weekDuration: 35
      };
      
      const optimalTimers = timerOptimizer.calculateOptimalTimers(scenario);
      
      if (!optimalTimers) {
        return { success: false, error: 'Failed to calculate optimal timers' };
      }
      
      // Validate optimal timers are reasonable
      if (optimalTimers.deadlineStart < 15 || optimalTimers.deadlineStart > 45) {
        return { success: false, error: `Optimal deadline start out of reasonable range: ${optimalTimers.deadlineStart}` };
      }
      
      if (optimalTimers.deadlineEnd < 8 || optimalTimers.deadlineEnd >= optimalTimers.deadlineStart) {
        return { success: false, error: `Optimal deadline end invalid: ${optimalTimers.deadlineEnd}` };
      }
      
      // Test different game modes
      const modes = ['tutorial', 'speedrun', 'endless', 'challenge'];
      for (const mode of modes) {
        const modeConfig = timerOptimizer.getModeConfig(mode);
        const validation = timerOptimizer.validateConfig(modeConfig);
        
        if (!validation.valid) {
          return { success: false, error: `Invalid config for mode ${mode}: ${validation.issues.join(', ')}` };
        }
      }
      
      return { success: true, optimalTimers: optimalTimers };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  printSummary() {
    console.log('\n📊 Timer Optimization Test Results:');
    console.log('=====================================');
    
    const passed = Object.values(this.testResults).filter(r => r.success).length;
    const total = Object.keys(this.testResults).length;
    
    console.log(`✅ Passed: ${passed}/${total}`);
    console.log(`❌ Failed: ${total - passed}/${total}`);
    
    for (const [testName, result] of Object.entries(this.testResults)) {
      const status = result.success ? '✅' : '❌';
      console.log(`${status} ${testName}: ${result.success ? 'PASSED' : 'FAILED'}`);
      
      if (!result.success && result.error) {
        console.log(`   Error: ${result.error}`);
      }
    }
    
    if (passed === total) {
      console.log('\n🎉 All timer optimization tests passed! The system is ready for playable gameplay.');
    } else {
      console.log('\n⚠️  Some tests failed. Timer optimization may need adjustments.');
    }
  }

  // Quick test for development
  static async quickTest() {
    const test = new TimerTest();
    return await test.runAllTests();
  }
}

// Auto-run test if in development mode
if (import.meta.env?.DEV) {
  console.log('🔧 Development mode detected, running timer optimization tests...');
  TimerTest.quickTest().catch(console.error);
}

