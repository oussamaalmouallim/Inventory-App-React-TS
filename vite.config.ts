import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Inventory-App-React-TS/',
  plugins: [react()],
})