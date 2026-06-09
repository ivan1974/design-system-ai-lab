import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(dirname, "..");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "design-system-ai-lab/styles.css": path.resolve(rootDir, "src/design-system/styles.css"),
      "design-system-ai-lab": path.resolve(rootDir, "src/design-system/index.ts"),
    };

    return config;
  },
};

export default config;
