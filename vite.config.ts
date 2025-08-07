import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/veg-market/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
