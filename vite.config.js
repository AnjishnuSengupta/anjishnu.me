import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate React into its own chunk
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Separate animation libraries
          'animation-vendor': ['framer-motion', 'maath'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging (disable in production if needed)
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: 'es2020',
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion',
    ],
  },
  // Enable gzip compression preview
  server: {
    host: true,
    port: 5173,
  },
  // Resolve aliases if needed
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
