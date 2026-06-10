import {
  ActionRow,
  AlertCard,
  AssetQueueRow,
  Breadcrumbs,
  Button,
  CompactMetric,
  ConnectivityCoverageCard,
  CustomerStatusCard,
  FilterBar,
  ListContainer,
  MasterDetailLayout,
  MetricStrip,
  PageHeading,
  SectionBlock,
  SectionHeading,
  SectionStack,
  SemanticTag,
  StatusPill,
  StickyActionBar,
  Tabs,
  WorkspaceDetailPanel,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const assetRows = [
  { name: "Main switchboard", state: "Review needed", detail: "Main site · updated 18h ago", tone: "warning" as const, selected: true },
  { name: "UPS group", state: "Warning signal", detail: "Main site · updated 18h ago", tone: "warning" as const },
  { name: "LV switchboard", state: "Monitored", detail: "Plant site · updated 3h ago", tone: "success" as const },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div className="space-y-5">
            <Breadcrumbs
              items={[
                { id: "customers", label: "Customers", href: "#" },
                { id: "northstar", label: "Northstar Manufacturing", href: "#" },
                { id: "monitoring", label: "Monitoring review", current: true },
              ]}
            />
            <PageHeading
              eyebrow="Customer monitoring"
              title="Review what needs attention next"
              description="Keep customer context, monitoring coverage, source limits and next actions visible in one workspace."
              actions={<Button size="sm">Create follow-up action</Button>}
            />
          </div>
        }
        controls={
          <FilterBar
            title="Monitoring scope"
            description="Show facts with source scope, freshness and validation context."
            resultCount="3 assets shown · connected assets and known installed base"
            filters={
              <>
                <SemanticTag tone="warning">Partial coverage</SemanticTag>
                <SemanticTag>Customer review</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          detailOpen
          detailMode="inline"
          listLabel="Monitoring list"
          detailLabel="Monitoring detail"
          list={
            <SectionStack gap="lg">
              <CustomerStatusCard
                mode="section"
                customerName="Northstar Manufacturing"
                plan="Advanced service plan"
                assetsCovered="17 of 25 known assets connected"
                coverage="68% connected"
                customerObjective="Understand what needs attention before the next service review."
                sourceContext="Connected monitoring data and known installed base"
                validationStatus="Review before customer communication"
                badges={[{ label: "Partial coverage", tone: "warning" }]}
              />

              <SectionBlock title="Monitoring signals">
                <MetricStrip columns={4}>
                  <CompactMetric label="Connected" value="68%" tone="warning" />
                  <CompactMetric label="Open alerts" value="3" tone="warning" />
                  <CompactMetric label="Open actions" value="4" />
                  <CompactMetric label="Freshness" value="18h" />
                </MetricStrip>
              </SectionBlock>

              <SectionHeading
                title="Asset queue"
                description="Assets are displayed as review rows with package-provided selected and hover states."
              />
              <ListContainer>
                {assetRows.map((asset) => (
                  <AssetQueueRow
                    key={asset.name}
                    assetName={asset.name}
                    site={asset.detail}
                    description="Check coverage and freshness before using this asset in the customer discussion."
                    statusLabel={asset.state}
                    statusTone={asset.tone}
                    priority={asset.state === "Monitored" ? undefined : "high"}
                    sourceStrength={asset.state === "Monitored" ? "strong" : "partial"}
                    freshness="18h"
                    selected={asset.selected}
                  />
                ))}
              </ListContainer>
            </SectionStack>
          }
          detail={
            <WorkspaceDetailPanel
              open
              mode="inline"
              title="Main switchboard"
              description="Selected asset detail. Visibility limits appear before interpretation."
              meta={<StatusPill tone="warning">Review needed</StatusPill>}
              footer={
                <StickyActionBar
                  context="Next action: confirm coverage before the next customer touchpoint."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Plan review</Button>}
                />
              }
            >
              <Tabs
                tabs={[
                  { id: "overview", label: "Overview" },
                  { id: "coverage", label: "Coverage" },
                  { id: "risks", label: "Risks", count: 1 },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
                defaultValue="overview"
                ariaLabel="Monitoring detail tabs"
              />
              <SectionStack>
                <ConnectivityCoverageCard
                  mode="section"
                  coverageRate="68%"
                  connectedAssets="17 assets"
                  disconnectedAssets="8 assets"
                  monitoringStatus="Partial monitoring coverage"
                  affectedScope="Main site"
                  lastUpdate="18 hours ago"
                  sourceScope="Monitoring platform and known installed base"
                  sourceStrength="partial"
                  coverageBasis="Known CompanyName monitored assets only"
                  validationStatus="Review before customer communication"
                />

                <SectionBlock title="Priority review">
                  <AlertCard
                    severity="warning"
                    title="Monitoring scope needs review"
                    scope="Main site"
                    description="Some known assets are not visible in live monitoring."
                    recommendation="Confirm the coverage gap with the customer and support team."
                    evidenceSummary="Known installed base and connected assets do not fully match."
                    sourceScope="Monitoring platform and known installed base"
                    sourceStrength="partial"
                    freshness="18 hours"
                    validationStatus="Review before customer communication"
                  />
                </SectionBlock>
              </SectionStack>
            </WorkspaceDetailPanel>
          }
        />

        <SectionBlock title="Assigned next actions">
          <ActionRow title="Review monitoring scope" owner="Account owner" dueDate="This week" priority="high" status="todo" context="Clarify what is visible before customer communication." />
          <ActionRow title="Confirm asset connection status" owner="Remote Support" dueDate="Next 3 business days" priority="high" status="in_progress" context="Validate connected status before recommendations are shared." />
        </SectionBlock>

        {/*
          v0.4 reference:
          - CustomerStatusCard handles customer context instead of a local fact block.
          - PageHeading and SectionHeading establish hierarchy.
          - AssetQueueRow inside ListContainer replaces generic rows.
          - WorkspaceDetailPanel replaces static detail panel.
          - White-first styling is provided by package tokens and components.
        */}
      </WorkspaceShell>
    </main>
  );
}
