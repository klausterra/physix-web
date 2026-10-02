import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacidade: resolve(__dirname, 'privacidade.html'),
        termos: resolve(__dirname, 'termos.html'),
        suporte: resolve(__dirname, 'suporte.html'),
      },
    },
  },
})
