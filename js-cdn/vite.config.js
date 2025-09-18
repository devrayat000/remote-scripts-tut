import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react"],
  },
  build: {
    minify: false,
  },
  resolve: {
    alias: [
      {
        find: new RegExp(`^react/(.*)`),
        replacement: `https://esm.sh/react@^18.3.1/$1`,
      },
      {
        find: new RegExp(`^react$`),
        replacement: `https://esm.sh/react@^18.3.1`,
      },
    ],
  },
});
