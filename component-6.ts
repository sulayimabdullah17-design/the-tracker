// vite.config.ts
import compression from "vite-plugin-compression";
export default {
  plugins: [
    compression({ algorithm: "brotliCompress", ext: ".br" }),
    compression({ algorithm: "gzip", ext: ".gz" }),
  ],
};