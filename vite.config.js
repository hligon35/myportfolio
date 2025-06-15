import { defineConfig } from 'vite'

export default defineConfig({
  base: '/myportfolio/', // Match your GitHub repository name exactly (case-sensitive)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  plugins: [],
})
