import { defineConfig } from 'vite';

export default defineConfig({
  base: '/solvesync/',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  }
});




