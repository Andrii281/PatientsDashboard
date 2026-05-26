import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/api": resolve(__dirname, "src", "api"),
      "@/constants": resolve(__dirname, "src", "constants"),
      "@/contexts": resolve(__dirname, "src", "contexts"),
      "@/dtos": resolve(__dirname, "src", "dtos"),
      "@/pages": resolve(__dirname, "src", "pages"),
      "@/router": resolve(__dirname, "src", "router"),
      "@/stores": resolve(__dirname, "src", "stores"),
      "@/types": resolve(__dirname, "src", "types"),
    },
  },
});
