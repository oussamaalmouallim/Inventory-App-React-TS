import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Inventory-App-React-TS/', // ← AJOUTE CETTE LIGNE!
})
