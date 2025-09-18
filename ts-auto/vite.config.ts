import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import tsconfigPaths from 'vite-tsconfig-paths'

function remoteCssPlugin() {
  const remoteCss = new Set();

  return {
    name: "remote-css-plugin",
    enforce: "pre",

    resolveId(id) {
      // After alias resolution, remote CSS will look like https://…/*.css
      if (/^https?:\/\/.+\.css(\?.*)?$/.test(id)) {
        // Save original href
        remoteCss.add(id);
        // Return a virtual id that does NOT contain ".css"
        const safeId = "\0remote-css-" + Buffer.from(id).toString("base64");
        return safeId;
      }
    },

    load(id) {
      if (id.startsWith("\0remote-css-")) {
        // Stub module so import compiles
        return `// remote css stub\nexport default null;`;
      }
    },

    transformIndexHtml() {
      if (!remoteCss.size) return;
      return {
        tags: [...remoteCss].map((href) => ({
          tag: "link",
          attrs: { rel: "stylesheet", href },
          injectTo: "head",
        })),
      };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const reactVersion = pkg.dependencies["react"];
  const peerDeps = `?deps=react@${reactVersion},react-dom@${reactVersion}`
  return {
    plugins: [
      react(),
      remoteCssPlugin(),
      tsconfigPaths(),
    ],
    optimizeDeps: {
      exclude: Object.keys(pkg.dependencies),
    },
    resolve: {
      alias: Object.entries(pkg.dependencies)
        .map(([pk, version]) => {
          const iReact = pk === "react" || pk === "react-dom" || pk === "video.js";
          const isVid = pk === "videojs-youtube";
          return [
            {
              find: new RegExp(`^${pk}/(.*)`),
              replacement: `https://esm.sh/${pk}@${version}/$1` + (isVid ? "?deps=video.js@8.3.0" : !iReact ? peerDeps : ""),
            },
            {
              find: new RegExp(`^${pk}$`),
              replacement: `https://esm.sh/${pk}@${version}` + (isVid ? "?deps=video.js@8.3.0" : !iReact ? peerDeps : ""),
            },
          ];
        })
        .flat(),
    },
    build: {
      minify: false,
    },
  };
});
