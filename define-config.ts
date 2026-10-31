// vite.config.ts
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ 
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});