import path from 'node:path';
import { defineConfig } from 'vite';
import pkg from '../package.json';

export default defineConfig({
  define: {
    __DS_VERSION__: JSON.stringify(pkg.version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  resolve: {
    alias: {
      '@ds': path.resolve(__dirname, '..'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
