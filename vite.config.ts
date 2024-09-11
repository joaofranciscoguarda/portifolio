import { defineConfig } from 'vite'
import path from "path";
import solid from 'vite-plugin-solid'
import solidSvg from 'vite-plugin-solid-svg'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [solid(), solidSvg(), tsconfigPaths(),],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
