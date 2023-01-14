/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import alias from "@rollup/plugin-alias";
import path from "node:path";

export default defineConfig({
  plugins: [alias(), react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.ts',
  },
});
