import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        host: "http://localhost:3000/assets/remoteEntry.js",
        ui: "http://localhost:3001/assets/remoteEntry.js",
        dashboard: "http://localhost:3002/assets/remoteEntry.js",
        stations: "http://localhost:3003/assets/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
