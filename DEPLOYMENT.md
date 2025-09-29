# GitHub Pages Deployment Guide

## 🚀 Deploy Parcel Panic to GitHub Pages

### Prerequisites
- GitHub account
- Repository named `parcel-panic` (or update `vite.config.js` base path accordingly)

### Method 1: GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`** in your repository:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (create this branch)
   - Upload contents of `dist/` folder to `gh-pages` branch

### Method 3: Using GitHub CLI

1. **Install GitHub CLI** if not already installed

2. **Deploy:**
   ```bash
   npm run build
   gh-pages -d dist
   ```

## 🔧 Configuration Notes

- **Base Path**: Set to `/parcel-panic/` in `vite.config.js` for repository deployment
- **Assets**: All assets (models, sounds) are properly bundled
- **Build Size**: ~619KB (optimized for web delivery)

## ✅ Post-Deployment Checklist

- [ ] Game loads correctly at `https://username.github.io/parcel-panic/`
- [ ] All assets (sounds, models) load properly
- [ ] UI displays correctly with new seamless design
- [ ] House timers work (Red=40s, Purple=50s, Green=60s)
- [ ] Route drawing and delivery mechanics function
- [ ] Pause functionality works
- [ ] Upgrade system is functional

## 🐛 Troubleshooting

**If assets don't load:**
- Check browser console for 404 errors
- Verify base path in `vite.config.js` matches repository name
- Ensure all files in `dist/` are uploaded

**If game doesn't start:**
- Check browser console for JavaScript errors
- Verify all dependencies are properly bundled
- Test locally with `npm run preview` first

## 📝 Repository Structure for GitHub Pages

```
parcel-panic/
├── .github/workflows/deploy.yml  # Auto-deployment
├── src/                          # Source code
├── public/                       # Static assets
├── dist/                         # Built files (deploy this)
├── package.json
├── vite.config.js
└── README.md
```

The `dist/` folder contains everything needed for GitHub Pages deployment!
