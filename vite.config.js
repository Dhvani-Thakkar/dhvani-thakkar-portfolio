import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dhvani-thakkar-portfolio/', // 👈 use your repo name here
  plugins: [react()],
   build: {
    outDir: 'docs',
    emptyOutDir: true
  }
});