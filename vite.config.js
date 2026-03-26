import { defineConfig } from 'vite';

export default defineConfig({
  base: '/solvesync/',
  build: {
    outDir: 'docs',
  },
  server: {
    open: true,
  }
});




