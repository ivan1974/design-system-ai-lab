import type { Meta, StoryObj } from "@storybook/react-vite";
import AssetRecommendationReview from "../../../../guidelines/examples/golden/asset-recommendation-review.App";

const meta = {
  title: "Golden Examples/Asset Recommendation Review",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Screen: Story = {
  render: () => <AssetRecommendationReview />,
};
