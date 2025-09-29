# GitHub Pages Deployment Guide

## 🚀 Quick Setup

### 1. Create GitHub Repository
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Parcel Panic game"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOURUSERNAME/parcel-panic.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Automatic Deployment
- Every push to `main` branch will automatically deploy
- Your game will be live at: `https://YOURUSERNAME.github.io/parcel-panic/`

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

1. Run `npm run build`
2. Copy contents of `dist/` folder to a `docs/` folder in your repo
3. In GitHub Pages settings, set source to `docs/` folder
4. Push the `docs/` folder to trigger deployment

## 🐛 Troubleshooting

### Common Issues:

**Issue:** Game doesn't load
- **Solution:** Check browser console for errors
- **Check:** Ensure all assets are in the `dist/` folder

**Issue:** Assets not loading
- **Solution:** Verify the base path in `vite.config.js` matches your repo name
- **Check:** All file paths are relative, not absolute

**Issue:** GitHub Actions failing
- **Solution:** Check the Actions tab in your repository for error logs
- **Check:** Ensure `GITHUB_TOKEN` has proper permissions

## 📁 Repository Structure

```
parcel-panic/
├── .github/workflows/deploy.yml  # Auto-deployment
├── src/                          # Game source code
├── assets/                       # Audio, models, etc.
├── dist/                         # Built files (auto-generated)
├── package.json                  # Dependencies
├── vite.config.js               # Build config
└── README.md                    # Documentation
```

## 🎯 Production Checklist

- [ ] Repository created and pushed to GitHub
- [ ] GitHub Pages enabled with GitHub Actions source
- [ ] All assets included in repository
- [ ] Game loads without console errors
- [ ] Audio works correctly
- [ ] WebGPU/WebGL rendering works
- [ ] Mobile responsive design works

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Your game will be live at:** `https://YOURUSERNAME.github.io/parcel-panic/`
