import { defineConfig } from 'vite';

export default defineConfig({
  base: '/SolveSync/',
  build: {
    outDir: 'docs',
  },
  server: {
    open: true,
  }
});




