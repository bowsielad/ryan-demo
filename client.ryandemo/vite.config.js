import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["host.docker.internal", "ryan-demo-bmza.onrender.com"], // because my backend needs to call my vite app should this be included when i have it up and running in render?
  },
});
