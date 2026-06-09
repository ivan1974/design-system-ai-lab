import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/generation-rules/**/*.test.ts"],
    exclude: ["src/**/*.stories.*", "src/**/*.mdx", ".storybook/**"],
    globals: false,
  },
});
