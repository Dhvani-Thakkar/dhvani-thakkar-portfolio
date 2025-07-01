import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dhvani-thakkar-portfolio/', // Add this line
  build: {
    outDir: 'docs', // Change from 'dist' to 'docs'
    emptyOutDir: true,
  }
})