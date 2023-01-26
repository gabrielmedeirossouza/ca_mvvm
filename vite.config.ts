/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import alias from "@rollup/plugin-alias";
import path from "node:path";

export default defineConfig({
  plugins: [alias(), react()],
  resolve: {
    alias: [
      { find: "@dom", replacement: path.resolve(__dirname, "./src/core/dom") },
      { find: "@entities", replacement: path.resolve(__dirname, "./src/core/entities") },
      { find: "@use-cases", replacement: path.resolve(__dirname, "./src/core/use-cases") },
      { find: "@factories", replacement: path.resolve(__dirname, "./src/core/factories") },
      { find: "@helpers", replacement: path.resolve(__dirname, "./src/core/helpers") },
      { find: "@presenters", replacement: path.resolve(__dirname, "./src/core/presenters") },
      { find: "@features", replacement: path.resolve(__dirname, "./src/features") },
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.ts',
  },
});
