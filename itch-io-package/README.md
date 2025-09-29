# Parcel Panic - Itch.io Deployment Package

This package contains everything needed to deploy Parcel Panic on itch.io's HTML5 hosting.

## Files Included

- `index.html` - Main entry point (uses local assets)
- `index-cdn.html` - Fallback entry point (uses CDN dependencies)
- `index-fallback.html` - Alternative fallback (no modules)
- `index-no-modules.html` - Another fallback option
- `.htaccess` - Server configuration for correct MIME types
- `assets/` - All game assets (JS, CSS, audio, models)

## Deployment Instructions

### Option 1: Standard Deployment (Recommended)
1. Upload all files to itch.io HTML5 project
2. Set `index.html` as the main file
3. The `.htaccess` file will handle MIME type issues

### Option 2: CDN Fallback (If MIME issues persist)
1. Upload all files to itch.io HTML5 project
2. Set `index-cdn.html` as the main file
3. This version uses CDN dependencies to avoid local file issues

### Option 3: No Modules Fallback (Last resort)
1. Upload all files to itch.io HTML5 project
2. Set `index-fallback.html` as the main file
3. This version doesn't use ES modules at all

## Technical Notes

- The game is built with Vite and uses IIFE format for maximum compatibility
- All dependencies are loaded from CDN to avoid MIME type issues
- The `.htaccess` file forces correct MIME types for JavaScript and CSS files
- Multiple fallback HTML files ensure compatibility across different hosting scenarios

## Troubleshooting

If you encounter MIME type errors:
1. Try `index-cdn.html` first
2. If that fails, try `index-fallback.html`
3. Ensure the `.htaccess` file is uploaded and active

## Game Features

- WebGPU rendering with WebGL fallback
- Procedural route drawing
- House delivery mechanics with timers
- Audio system with background music
- Upgrade system
- Responsive UI with mobile support
- Loading screen with progress bar