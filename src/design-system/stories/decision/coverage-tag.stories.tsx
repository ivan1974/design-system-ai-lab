import type { Meta, StoryObj } from "@storybook/react-vite";

import { CoverageTag } from "../../decision/coverage-tag";

const meta = {
  title: "Design System/Decision/CoverageTag",
  component: CoverageTag,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    coverage: {
      control: "select",
      options: ["premium-service-plan-advanced", "premium-service-plan-essential", "advanced-service-plan", "no-coverage"],
    },
  },
  args: { coverage: "premium-service-plan-advanced" },
} satisfies Meta<typeof CoverageTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Advanced: Story = {};

export const NoCoverage: Story = {
  args: { coverage: "no-coverage" },
};
