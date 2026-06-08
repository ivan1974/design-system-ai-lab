import type { Meta, StoryObj } from "@storybook/react-vite";
import { RenewalRiskReview } from "../../../demo/renewal-risk-review";

const meta = {
  title: "Demo/Renewal Risk Review",
  component: RenewalRiskReview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RenewalRiskReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};