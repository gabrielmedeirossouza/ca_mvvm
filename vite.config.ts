/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import alias from "@rollup/plugin-alias";
import path from "node:path";

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [alias(), react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  },
});
