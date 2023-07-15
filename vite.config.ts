/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";
import checker from "vite-plugin-checker";

export default {
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
  test: {
    globals: true,
    environment: "happy-dom",
  },
};
