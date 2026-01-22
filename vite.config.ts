import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/tokens" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
