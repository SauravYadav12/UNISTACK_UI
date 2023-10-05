import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Store': path.resolve(__dirname, 'src/store'),
      routes: `${path.resolve(__dirname, "./src/routes/")}`,
      services: `${path.resolve(__dirname, "./src/services/")}`,
    }
  },
})
