import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../..");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(repoRoot, "src"),
      "design-system-ai-lab/styles.css": path.resolve(repoRoot, "src/design-system/styles.css"),
      "design-system-ai-lab": path.resolve(repoRoot, "src/design-system/public-api.ts"),
      "design-system-ai-lab/design-system/primitives": path.resolve(repoRoot, "src/design-system/primitives/index.ts"),
      "design-system-ai-lab/design-system/components": path.resolve(repoRoot, "src/design-system/components/index.ts"),
    },
  },
});
