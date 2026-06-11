import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConnectivityCoverageCard } from "../../index";

const meta = {
  title: "Patterns/ConnectivityCoverageCard",
  component: ConnectivityCoverageCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    customerName: { control: "text" },
    coverageRate: { control: "text" },
    connectedAssets: { control: "text" },
    disconnectedAssets: { control: "text" },
    criticalDisconnectedAssets: { control: "text" },
    monitoringStatus: { control: "text" },
    affectedScope: { control: "text" },
    lastUpdate: { control: "text" },
    sourceScope: { control: "text" },
    sourceStrength: { control: "text" },
    coverageBasis: { control: "text" },
    validationStatus: { control: "text" },
    recoveryStatus: { control: "text" },
    customerDependency: { control: "text" },
    serviceDependency: { control: "text" },
  },
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "68%",
    connectedAssets: "17 of 25 known assets",
    disconnectedAssets: "8 known assets",
    criticalDisconnectedAssets: "2 critical assets",
    monitoringStatus: "Partial monitoring coverage",
    affectedScope: "Critical Power > UPS Room A",
    lastUpdate: "18 hours ago",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    coverageBasis: "Connected assets and known installed base",
    validationStatus: "Review before customer use",
    recoveryStatus: "Recovery needed",
    badges: [
      { label: "Connectivity partial", tone: "warning" },
      { label: "Source partial", tone: "warning" },
      { label: "Recovery needed", tone: "danger" },
    ],
  },
} satisfies Meta<typeof ConnectivityCoverageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HealthyCoverage: Story = {
  args: {
    customerName: "North Valley Hospital",
    coverageRate: "96%",
    connectedAssets: "48 of 50 known assets",
    disconnectedAssets: "2 known assets",
    criticalDisconnectedAssets: "0 critical assets",
    monitoringStatus: "Healthy monitoring coverage",
    affectedScope: "No critical scope affected",
    lastUpdate: "12 minutes ago",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "high",
    coverageBasis: "Connected assets and known installed base",
    validationStatus: "Reviewed for customer use",
    recoveryStatus: "No recovery needed",
    badges: [
      { label: "Healthy coverage", tone: "success" },
      { label: "No critical gap", tone: "neutral" },
      { label: "Reviewed", tone: "success" },
    ],
  },
};

export const CriticalCoverageGap: Story = {
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "52%",
    connectedAssets: "13 of 25 known assets",
    disconnectedAssets: "12 known assets",
    criticalDisconnectedAssets: "4 critical assets",
    monitoringStatus: "Critical monitoring gap",
    affectedScope: "Main production line",
    lastUpdate: "26 hours ago",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    coverageBasis: "Connected assets and known installed base",
    validationStatus: "Review before customer use",
    recoveryStatus: "Recovery needed",
    customerDependency: "Validate firewall access",
    serviceDependency: "Remote support review needed",
    badges: [
      { label: "Critical gap", tone: "danger" },
      { label: "Source partial", tone: "warning" },
      { label: "Customer notification required", tone: "warning" },
    ],
  },
};

export const PartialSourceCoverage: Story = {
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "68%",
    connectedAssets: "17 of 25 known assets",
    disconnectedAssets: "8 known assets",
    criticalDisconnectedAssets: "2 critical assets",
    monitoringStatus: "Partial monitoring coverage",
    affectedScope: "Critical Power > UPS Room A",
    lastUpdate: "18 hours ago",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    coverageBasis: "Connected assets and known installed base",
    validationStatus: "Review before customer use",
    recoveryStatus: "Recovery needed",
    badges: [
      { label: "Connectivity partial", tone: "warning" },
      { label: "Source partial", tone: "warning" },
      { label: "Recovery needed", tone: "danger" },
    ],
  },
};

export const CustomerDependency: Story = {
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "74%",
    connectedAssets: "20 of 27 known assets",
    disconnectedAssets: "7 known assets",
    criticalDisconnectedAssets: "1 critical asset",
    monitoringStatus: "Connectivity recovery blocked",
    affectedScope: "Backup power system",
    lastUpdate: "22 hours ago",
    sourceScope: "Connected assets and customer network gateway",
    sourceStrength: "partial",
    coverageBasis: "Live telemetry and known installed base",
    validationStatus: "Review before customer use",
    recoveryStatus: "Blocked by customer dependency",
    customerDependency: "Validate firewall and VPN access",
    serviceDependency: "Remote support ready after access confirmation",
    badges: [
      { label: "Customer dependency", tone: "warning" },
      { label: "Recovery blocked", tone: "danger" },
    ],
  },
};

export const RecoveryInProgress: Story = {
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "82%",
    connectedAssets: "23 of 28 known assets",
    disconnectedAssets: "5 known assets",
    criticalDisconnectedAssets: "1 critical asset",
    monitoringStatus: "Recovery in progress",
    affectedScope: "Site A and Site C",
    lastUpdate: "4 hours ago",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "medium",
    coverageBasis: "Live telemetry and platform recovery logs",
    validationStatus: "Review before customer update",
    recoveryStatus: "Recovery in progress",
    customerDependency: "Confirm network changes are complete",
    serviceDependency: "Remote support validation in progress",
    badges: [
      { label: "Recovery in progress", tone: "primary" },
      { label: "Review needed", tone: "warning" },
    ],
  },
};

export const ValidationNeeded: Story = {
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "68%",
    connectedAssets: "17 of 25 known assets",
    disconnectedAssets: "8 known assets",
    monitoringStatus: "Partial monitoring coverage",
    affectedScope: "Critical Power > UPS Room A",
    lastUpdate: "18 hours ago",
    sourceScope: "Known installed base",
    sourceStrength: "manual and partial",
    coverageBasis: "Manual inventory and service records",
    validationStatus: "Human validation needed before customer use",
    recoveryStatus: "Recovery assessment needed",
    badges: [
      { label: "Source partial", tone: "warning" },
      { label: "Human validation needed", tone: "warning" },
    ],
  },
};

export const WithExtraItems: Story = {
  args: {
    customerName: "Greenfield Industries",
    coverageRate: "68%",
    connectedAssets: "17 of 25 known assets",
    disconnectedAssets: "8 known assets",
    criticalDisconnectedAssets: "2 critical assets",
    monitoringStatus: "Recovery in progress",
    affectedScope: "Critical Power > UPS Room A",
    lastUpdate: "18 hours ago",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    coverageBasis: "Connected assets and known installed base",
    validationStatus: "Review before customer use",
    recoveryStatus: "Recovery in progress",
    badges: [{ label: "Recovery in progress", tone: "primary" }],
    extraItems: [
      { label: "Support owner", value: "Remote support team" },
      { label: "Next checkpoint", value: "Tomorrow 10:00" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <ConnectivityCoverageCard
      aria-label="Connectivity coverage for Greenfield Industries"
      data-testid="storybook-connectivity-coverage-card"
      customerName="Greenfield Industries"
      coverageRate="68%"
      connectedAssets="17 of 25 known assets"
      disconnectedAssets="8 known assets"
      criticalDisconnectedAssets="2 critical assets"
      monitoringStatus="Partial monitoring coverage"
      affectedScope="Critical Power > UPS Room A"
      lastUpdate="18 hours ago"
      sourceScope="CompanyName monitored assets only"
      sourceStrength="partial"
      coverageBasis="Connected assets and known installed base"
      validationStatus="Review before customer use"
      recoveryStatus="Recovery needed"
      badges={[
        { label: "Connectivity partial", tone: "warning" },
        { label: "Source partial", tone: "warning" },
      ]}
    />
  ),
};