import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'docs', // Output to docs/ for GitHub Pages
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});
