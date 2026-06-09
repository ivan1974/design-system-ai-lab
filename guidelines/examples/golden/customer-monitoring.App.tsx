import {
  ActionRow,
  AlertCard,
  Button,
  CompactMetric,
  ConnectivityCoverageCard,
  DetailPanel,
  DetailPanelBody,
  DetailPanelFooter,
  DetailPanelHeader,
  DetailPanelTabs,
  FilterBar,
  KeyValueList,
  KeyValueRow,
  MasterDetailLayout,
  MetricStrip,
  SectionBlock,
  SectionStack,
  SemanticTag,
  SignalRow,
  StatusPill,
  StickyActionBar,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const assetRows = [
  { name: "Main switchboard", state: "Review needed", detail: "Main site · updated 18h ago" },
  { name: "UPS group", state: "Warning signal", detail: "Main site · updated 18h ago" },
  { name: "LV switchboard", state: "Monitored", detail: "Plant site · updated 3h ago" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-(--ec-color-primary)">Customer monitoring</p>
              <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">Review what needs attention next</h1>
              <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
                Keep customer context, monitoring scope, source limits and next actions visible in one workspace.
              </p>
            </div>
            <Button size="sm">Create follow-up action</Button>
          </div>
        }
        controls={
          <FilterBar
            title="Monitoring scope"
            description="Show only facts with visible source scope and freshness."
            resultCount="3 assets shown · source scope: connected assets and known installed base"
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
          listLabel="Monitoring list"
          detailLabel="Monitoring detail"
          list={
            <SectionStack>
              <SectionBlock title="Customer context">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Northstar Manufacturing" />
                  <KeyValueRow label="Plan" value="Advanced service plan" />
                  <KeyValueRow label="Coverage" value="17 of 25 known assets connected" />
                  <KeyValueRow label="Next review" value="Before customer touchpoint" />
                </KeyValueList>
              </SectionBlock>

              <SectionBlock title="Monitoring signals">
                <MetricStrip columns={4}>
                  <CompactMetric label="Connected" value="68%" tone="warning" />
                  <CompactMetric label="Open alerts" value="3" tone="warning" />
                  <CompactMetric label="Open actions" value="4" />
                  <CompactMetric label="Freshness" value="18h" />
                </MetricStrip>
              </SectionBlock>

              <SectionBlock title="Asset queue">
                <div className="divide-y divide-(--ec-color-border)">
                  {assetRows.map((asset) => (
                    <SignalRow key={asset.name} label={asset.name} value={asset.state} description={asset.detail} />
                  ))}
                </div>
              </SectionBlock>
            </SectionStack>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="Main switchboard"
                description="Selected asset detail. Visibility limits appear before interpretation."
                meta={<StatusPill tone="warning">Review needed</StatusPill>}
              />
              <DetailPanelTabs
                tabs={[
                  { id: "overview", label: "Overview", active: true },
                  { id: "coverage", label: "Coverage" },
                  { id: "risks", label: "Risks", count: 1 },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
              />
              <DetailPanelBody>
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
                    coverageBasis="Known Schneider monitored assets only"
                    validationStatus="Review before customer communication"
                  />

                  <SectionBlock title="Priority review">
                    <AlertCard
                      severity="warning"
                      title="Monitoring scope needs review"
                      scope="Main site"
                      description="Some known assets are not visible in live monitoring."
                      recommendation="Review coverage with the customer and support team."
                      evidenceSummary="Known installed base and connected assets do not fully match."
                      sourceScope="Monitoring platform and known installed base"
                      sourceStrength="partial"
                      freshness="18 hours ago"
                      validationStatus="Review before customer communication"
                    />
                  </SectionBlock>
                </SectionStack>
              </DetailPanelBody>
              <DetailPanelFooter>
                <StickyActionBar
                  context="Next action: review monitoring scope before the next customer touchpoint."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Plan review</Button>}
                />
              </DetailPanelFooter>
            </DetailPanel>
          }
        />

        <SectionBlock title="Assigned next actions">
          <ActionRow title="Plan monitoring scope review" owner="CSM" dueDate="This week" priority="high" status="todo" context="Review what is and is not visible before customer communication." />
          <ActionRow title="Confirm asset connection status" owner="Remote Support" dueDate="Next 3 business days" priority="high" status="in_progress" context="Confirm source scope before making recommendations." />
        </SectionBlock>

        {/*
          Why this is compliant:
          - Monitoring is a decision workspace, not a generic dashboard.
          - Uses compact metrics for signals and master-detail for review.
          - Keeps source scope, freshness and validation visible.
          - Uses ActionRow for dense follow-through.
        */}
      </WorkspaceShell>
    </main>
  );
}
