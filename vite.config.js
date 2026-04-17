import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    json: {
    stringify: true},
     optimizeDeps: {
    include: ["react-icons/fa", "react-icons/md"]
  },
    build: {
    chunkSizeWarningLimit: 2000,
    outDir: "build"
  }
    
})
