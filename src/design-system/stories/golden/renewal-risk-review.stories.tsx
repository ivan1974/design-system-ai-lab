import type { Meta, StoryObj } from "@storybook/react-vite";
import RenewalRiskReview from "../../../../guidelines/examples/golden/renewal-risk-review.App";

const meta = {
  title: "Golden Examples/Renewal Risk Review",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Screen: Story = {
  render: () => <RenewalRiskReview />,
};
