import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/game-genesis-x/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5188,
    host: '0.0.0.0',
    cors: true,
    strictPort: false,
    hmr: {
      host: 'localhost',
      port: 5188,
    },
  },
});
