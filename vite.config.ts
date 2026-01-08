import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Inventory-App-React-TS/', // Remplace par le nom exact de ton repo GitHub
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
