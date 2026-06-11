import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import InstalledBaseIntelligenceApp from "../../../../guidelines/examples/golden/installed-base-intelligence.App";

const meta = {
  title: "Screen Contracts/Installed Base Intelligence",
  component: InstalledBaseIntelligenceApp,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof InstalledBaseIntelligenceApp>;

export default meta;

type Story = StoryObj<typeof meta>;

async function expectScreen(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  await expect(canvas.getByText("Installed Base Intelligence")).toBeInTheDocument();
  await expect(canvas.getByText("Asset Portfolio")).toBeInTheDocument();
  await expect(canvas.getByText("Main MV switchgear")).toBeInTheDocument();
}

async function expectPanel(canvasElement: HTMLElement, text: string) {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(text)).toBeInTheDocument();
}

export const Default: Story = {
  args: { scenario: "default" },
  play: async ({ canvasElement }) => expectScreen(canvasElement),
};

export const AllFiltersOpen: Story = {
  args: { scenario: "all-filters-open" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "All Filters");
  },
};

export const AssetDetailOverviewOpen: Story = {
  args: { scenario: "asset-detail-overview-open" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "Current health");
  },
};

export const AssetDetailHealthOpen: Story = {
  args: { scenario: "asset-detail-health-open" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "Facts only. This tab shows observed condition signals and current recorded states.");
  },
};

export const AssetDetailIntelligenceOpen: Story = {
  args: { scenario: "asset-detail-intelligence-open" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "Decision-oriented interpretation. This tab converts signals into recommended next steps.");
  },
};

export const ThirdPartyAssetSelected: Story = {
  args: { scenario: "third-party-asset-selected" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "Third-party PDU");
  },
};

export const ConnectivityIssueSelected: Story = {
  args: { scenario: "connectivity-issue-selected" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "Cooling unit");
  },
};

export const ActiveAlertSelected: Story = {
  args: { scenario: "active-alert-selected" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "LV distribution board");
  },
};

export const NonConnectedWithServiceHistorySelected: Story = {
  args: { scenario: "non-connected-with-service-history-selected" },
  play: async ({ canvasElement }) => {
    await expectScreen(canvasElement);
    await expectPanel(canvasElement, "Transformer");
  },
};
