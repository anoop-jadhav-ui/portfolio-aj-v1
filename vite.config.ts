import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
interface ViteConfigProps {
  mode: string;
}
export default ({ mode }: ViteConfigProps) => {
  const env = loadEnv(mode, process.cwd());

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

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
    },
    server: {
      port: 8000,
    },
    root: "./src",
    define: processEnvValues,
  });
};
