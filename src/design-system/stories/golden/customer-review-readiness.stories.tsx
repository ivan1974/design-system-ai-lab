import type { Meta, StoryObj } from "@storybook/react-vite";
import CustomerReviewReadiness from "../../../../guidelines/examples/golden/qbr-readiness.App";

const meta = {
  title: "Design System/Golden Examples/Customer Review Readiness",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Screen: Story = {
  render: () => <CustomerReviewReadiness />,
};
