import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "node:path";

/**
 * إعداد Vite للتطبيق.
 *
 * - Tree Shaking تلقائي (ES Modules).
 * - Manual Chunks لتقسيم الحزمة وتحسين التحميل المتوازي.
 * - Bundle Analyzer (يُفعَّل عند ANALYZE=true).
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const analyze = env.ANALYZE === "true";

  return {
    plugins: [
      react(),
      // Bundle Analyzer — يُنتج stats.html عند ANALYZE=true
      analyze &&
        visualizer({
          filename: "dist/stats.html",
          open: true,
          gzipSize: true,
          brotliSize: true,
          template: "treemap",
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      // هدف حديث — يقلّل الـ polyfills
      target: "es2020",
      // إزالة console/debugger في الإنتاج
      minify: "esbuild",
      cssMinify: true,
      sourcemap: mode !== "production",
      // تحذير عند تجاوز 600 KB
      chunkSizeWarningLimit: 600,

      rollupOptions: {
        output: {
          /**
           * تقسيم الحزمة إلى chunks منطقية:
           * - react-vendor: React + ReactDOM
           * - ui-vendor: مكتبات الواجهة (framer-motion, lucide, ...)
           * - chart-vendor: recharts (ثقيلة)
           * - date-vendor: date-fns
           * - vendor: بقية المكتبات
           */
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (id.includes("react-dom") || id.includes("/react/")) {
              return "react-vendor";
            }
            if (id.includes("recharts") || id.includes("d3-")) {
              return "chart-vendor";
            }
            if (id.includes("date-fns")) {
              return "date-vendor";
            }
            if (
              id.includes("framer-motion") ||
              id.includes("lucide-react") ||
              id.includes("@radix-ui") ||
              id.includes("@base-ui") ||
              id.includes("embla-carousel") ||
              id.includes("vaul") ||
              id.includes("cmdk") ||
              id.includes("sonner")
            ) {
              return "ui-vendor";
            }
            return "vendor";
          },

          // أسماء ملفات واضحة مع hash للتخزين المؤقت
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },

      // إزالة console.* في الإنتاج (ما عدا error/warn)
      esbuild: {
        drop: mode === "production" ? ["debugger"] : [],
        pure:
          mode === "production"
            ? ["console.debug", "console.info", "console.log"]
            : [],
      },
    },

    // تحسين التبعيات في التطوير
    optimizeDeps: {
      include: ["react", "react-dom", "lucide-react", "clsx", "tailwind-merge"],
    },
  };
});