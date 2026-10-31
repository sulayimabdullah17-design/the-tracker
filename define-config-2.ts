export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["lucide-react", "framer-motion"],
          "charts-vendor": ["recharts"],
        },
      },
    },
  },
});