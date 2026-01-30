import { defineConfig } from 'vite'

export default defineConfig({
  base: '/myportfolio/',
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173
  }
})
