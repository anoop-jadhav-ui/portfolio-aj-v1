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
    server: {
      port: 3000,
    },
  });
};
