// Developer demo, not Make golden example.

import {
  ActionRow,
  AlertCard,
  AssetQueueRow,
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
  ListContainer,
  MasterDetailLayout,
  MetricStrip,
  PageHeading,
  SectionBlock,
  SectionStack,
  SemanticPill,
  SemanticTag,
  StickyActionBar,
  WorkspaceShell,
} from "../design-system";

const assetRows = [
  { name: "Main switchboard", value: "Review needed", description: "Site A · updated 18h ago", tone: "warning" as const, selected: true },
  { name: "UPS group", value: "Warning signal", description: "Site A · updated 18h ago", tone: "warning" as const },
  { name: "LV switchboard", value: "Monitored", description: "Site B · updated 3h ago", tone: "success" as const },
];

export function CustomerDashboard() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={<PageHeading eyebrow="Customer monitoring demo" title="Review customer monitoring" description="Developer demo for the workspace pattern. Golden examples remain the Make source of truth." actions={<Button size="sm">Create action</Button>} />}
        controls={<FilterBar title="Monitoring scope" description="Keep source scope visible before deciding what to do next." resultCount="3 assets shown" filters={<><SemanticTag tone="warning">Partial coverage</SemanticTag><SemanticTag>Customer review</SemanticTag></>} />}
      >
        <MasterDetailLayout
          detailWidth="lg"
          list={
            <SectionStack>
              <SectionBlock title="Customer context">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Greenfield Industries" />
                  <KeyValueRow label="Plan" value="Advanced service plan" />
                  <KeyValueRow label="Coverage" value="17 of 25 known assets connected" />
                  <KeyValueRow label="Next review" value="Jun 24, 2026" />
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
                <ListContainer>
                  {assetRows.map((asset) => (
                    <AssetQueueRow key={asset.name} assetName={asset.name} site={asset.description} description="Review monitoring scope and source freshness before customer use." statusLabel={asset.value} statusTone={asset.tone} priority={asset.value === "Monitored" ? undefined : "high"} sourceStrength={asset.value === "Monitored" ? "strong" : "partial"} freshness="18h" selected={asset.selected} />
                  ))}
                </ListContainer>
              </SectionBlock>
            </SectionStack>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader title="Main switchboard" description="Selected asset detail. Visibility limits appear before interpretation." meta={<SemanticPill tone="warning">Review needed</SemanticPill>} />
              <DetailPanelTabs tabs={[{ id: "overview", label: "Overview", active: true }, { id: "coverage", label: "Coverage" }, { id: "actions", label: "Actions", count: 2 }]} />
              <DetailPanelBody>
                <SectionStack>
                  <ConnectivityCoverageCard mode="section" coverageRate="68%" connectedAssets="17 assets" disconnectedAssets="8 assets" monitoringStatus="Partial coverage" affectedScope="Main site" lastUpdate="18 hours ago" sourceScope="Monitoring platform and known installed base" sourceStrength="partial" coverageBasis="Known CompanyName monitored assets only" validationStatus="internal-review-needed" />
                  <SectionBlock title="Priority review">
                    <AlertCard severity="warning" title="Monitoring scope needs review" scope="Main site" description="Some known assets are not visible in live monitoring." recommendation="Review coverage with the customer and support team." evidenceSummary="Known installed base and connected assets do not fully match." sourceScope="Monitoring platform and known installed base" sourceStrength="partial" freshness="18 hours ago" validationStatus="internal-review-needed" />
                  </SectionBlock>
                </SectionStack>
              </DetailPanelBody>
              <DetailPanelFooter>
                <StickyActionBar context="Next action: review monitoring scope before customer communication." secondaryActions={<Button variant="secondary" size="sm">Add note</Button>} primaryAction={<Button size="sm">Plan review</Button>} />
              </DetailPanelFooter>
            </DetailPanel>
          }
        />
        <SectionBlock title="Assigned next actions">
          <ActionRow title="Plan monitoring scope review" owner="Account owner" dueDate="Before next review" priority="high" status="todo" context="Review visibility before customer communication." />
          <ActionRow title="Confirm asset connection status" owner="Remote Support" dueDate="Next 3 business days" priority="high" status="in_progress" context="Confirm source scope before making recommendations." />
        </SectionBlock>
      </WorkspaceShell>
    </main>
  );
}

export { CustomerDashboard as CustomerMonitoringDashboard };
