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
});