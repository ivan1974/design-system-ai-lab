import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "figma-make-empty-imports",
      resolveId(id: string) {
        if (id === "figma:asset") {
          return id;
        }

        return null;
      },
      load(id: string) {
        if (id === "figma:asset") {
          return "export default '';";
        }

        return null;
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "src/design-system/public-api.ts"),
        path.resolve(__dirname, "src/design-system/styles.css"),
      ],
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@radix-ui/react-accordion",
        "@radix-ui/react-alert-dialog",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-collapsible",
        "@radix-ui/react-dialog",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-popover",
        "@radix-ui/react-progress",
        "@radix-ui/react-scroll-area",
        "@radix-ui/react-select",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "@radix-ui/react-tabs",
        "@radix-ui/react-tooltip",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "tailwind-merge",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "styles.css") {
            return "styles.css";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
});
