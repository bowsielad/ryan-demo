import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["http://localhost:5177", "host.docker.internal", "ryan-demo-thvs.onrender.com"], 
  },
});
