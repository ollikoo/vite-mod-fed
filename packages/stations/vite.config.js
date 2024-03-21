import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "stations",
      filename: "remoteEntry.js",
      remotes: {
        host: "http://localhost:3000/assets/remoteEntry.js",
        ui: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
      exposes: {
        "./Stations": "./src/Stations",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
