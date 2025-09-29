# Parcel Panic

A fast-paced delivery game where you draw routes for your truck to follow and deliver packages to houses before they expire!

## How to Play

- **Draw routes:** Click and drag to sketch delivery loops on the field
- **Commit routes:** Press Enter to close the loop and start delivery
- **Deliver to houses:** Drive near houses (cylindrical buildings) to deliver packages
- **Watch the timer:** Houses have circular countdown rings - deliver before they expire!
- **Controls:** Space to pause, T for 2× speed, R to redraw, G for grid, D for debug

## Play the Game

[**Play Parcel Panic on GitHub Pages**](https://cipheratlas.github.io/parcel-panic/)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

## Features

- **WebGPU Rendering** with WebGL fallback
- **Procedural Route Drawing** - draw custom delivery paths
- **House Delivery Mechanics** with countdown timers
- **Audio System** with background music and sound effects
- **Upgrade System** - improve your truck and routes
- **Responsive UI** with mobile support
- **Loading Screen** with progress tracking

## Visual Design

- **Cosy Winter Jazz Theme** - warm, relaxing colors
- **Cylindrical Houses** with conical roofs and timer rings
- **Brown Delivery Truck** following your drawn routes
- **Circular Progress Timers** around each house
- **Modern UI** with clean, accessible design

## Audio

- Background music with volume control
- Route commit sounds
- House spawn/expire audio
- Week completion fanfare

## Technical Stack

- **Three.js** - 3D graphics and WebGPU/WebGL rendering
- **Vite** - Build tool and development server
- **Howler.js** - Audio management
- **Vanilla JavaScript** - No frameworks, pure performance

## Browser Support

- Chrome/Edge (recommended for WebGPU)
- Firefox (WebGL fallback)
- Safari (WebGL fallback)
- Mobile browsers supported

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The build process:

1. Installs dependencies
2. Builds the project with Vite
3. Deploys to GitHub Pages

## Game Mechanics

- **Week System:** Complete deliveries within time limits
- **House Spawning:** 3 houses per week (weeks 1-5), then 5 houses (week 6+)
- **Timer Management:** Houses expire if not delivered in time
- **Route Optimization:** Draw efficient paths to maximize deliveries
- **Upgrade Progression:** Unlock new abilities and improvements

## Scoring

- Points for successful deliveries
- Time bonuses for quick completions
- Weekly progression with increasing difficulty
- Seed-based runs for consistent gameplay

---

**Made with ❤️ for the web gaming community**

