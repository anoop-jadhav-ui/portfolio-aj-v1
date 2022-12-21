/// <reference types="vitest" />;
// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import checker from "vite-plugin-checker";
export default () => {
  return defineConfig({
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      checker({
        typescript: true,
      }),
    ],
    build: {
      outDir: "../dist",
      emptyOutDir: true,
    },
    server: {
      port: 8000,
    },
    root: "./src",
    test: {
      globals: true,
      environment: "jsdom",
      exclude: ["**/node_modules/**", "**/dist/**", ".idea", ".git"],
      setupFiles: ["./setupTests.ts"],
    },
  });
};
