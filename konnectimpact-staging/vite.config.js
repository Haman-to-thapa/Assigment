import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // ✅ So you can use `test`, `expect` globally
    environment: 'jsdom' // ✅ Simulates browser environment
  },
  
  build: {
    outDir: 'dist', // Explicitly set output directory
    emptyOutDir: true, // Clear the directory before build
    sourcemap: import.meta.NODE_ENV !== 'production' // Enable sourcemaps in dev
  },
   optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    open: true, // Optional: open browser on dev server start
    proxy: {
      '/api': 'https://assignmenttask-7d2a.onrender.com'
    }
  },
  preview: {
    port: process.env.PORT || 3000, // Use Render's PORT or fallback to 3000
    host: '0.0.0.0' // Allow external connections for Render
  }
});

