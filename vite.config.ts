import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
  lib: {
    entry: resolve(__dirname, "src/index.ts"),
    name: "@olvyhq/widget-vue",
    fileName: "olvy-widget",
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
}
})
