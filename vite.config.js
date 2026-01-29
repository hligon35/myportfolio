import { defineConfig } from 'vite'

export default defineConfig({
<<<<<<< HEAD
  base: './', // Use relative paths instead of repository-specific path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Ensure CSS is extracted to separate files to avoid MIME type issues
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Make sure asset file names include proper extensions
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        manualChunks: undefined
      }
    }
  },
  plugins: [],
=======
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173
  }
>>>>>>> portfolio-dev
})
