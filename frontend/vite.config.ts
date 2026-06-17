import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/api": resolve(__dirname, "src", "api"),
      "@/components": resolve(__dirname, "src", "components"),
      "@/constants": resolve(__dirname, "src", "constants"),
      "@/hooks": resolve(__dirname, "src", "hooks"),
      "@/dtos": resolve(__dirname, "src", "dtos"),
      "@/pages": resolve(__dirname, "src", "pages"),
      "@/router": resolve(__dirname, "src", "router"),
      "@/shared": resolve(__dirname, "src", "shared"),
      "@/store": resolve(__dirname, "src", "store"),
      "@/widgets": resolve(__dirname, "src", "widgets"),
    },
  },
});
