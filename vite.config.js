import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/parcel-panic/' : '/',
  server: {
    open: true,
  },
  build: {
    target: "esnext",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        format: "iife",
        inlineDynamicImports: true
      }
    }
  },
  optimizeDeps: {
    include: [
      "three",
      "stats.js",
      "lil-gui",
      "howler",
    ],
  },
  assetsInclude: ["**/*.ogg", "**/*.wav", "**/*.mp3", "**/*.obj"],
  esbuild: {
    target: "es2020"
  }
});

