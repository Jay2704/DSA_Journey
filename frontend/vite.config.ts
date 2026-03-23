import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** GitHub Pages project URL: https://<user>.github.io/<repo>/ — must match repo name casing in the path. */
const GH_PAGES_BASE = "/DSA_Journey/";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base =
    env.VITE_BASE ||
    process.env.VITE_BASE ||
    (mode === "production" ? GH_PAGES_BASE : "/");

  return {
    plugins: [react(), tailwindcss()],
    base,
    build: {
      chunkSizeWarningLimit: 1200,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
