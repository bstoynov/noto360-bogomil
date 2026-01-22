import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
});
