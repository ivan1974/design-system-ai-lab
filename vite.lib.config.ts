import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/design-system/index.ts"),
        styles: resolve(__dirname, "src/design-system/style-entry.ts"),
      },
      formats: ["es"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@radix-ui/react-dialog",
      ],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "styles.css";
          }

          return "[name][extname]";
        },
      },
    },
  },
});