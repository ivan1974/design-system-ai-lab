import {
  ActionRow,
  AssetIntelligenceSummary,
  AssetQueueRow,
  Breadcrumbs,
  Button,
  EvidenceRow,
  FilterBar,
  ListContainer,
  MasterDetailLayout,
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

const assets = [
  { name: "SM6 Bus Coupler", value: "Review needed", description: "Lyon DC", tone: "warning" as const, selected: true },
  { name: "Galaxy VX UPS", value: "Warning signal", description: "Lyon DC", tone: "warning" as const },
  { name: "LV Switchboard A2", value: "Monitored", description: "Grenoble Plant", tone: "success" as const },
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
                { id: "installed-base", label: "Installed base", current: true },
              ]}
            />
            <PageHeading
              eyebrow="Installed base explorer"
              title="Explore assets with source context"
              description="Review identity, live monitoring coverage, evidence and next action in one asset workspace."
              actions={<Button size="sm">Create asset action</Button>}
            />
          </div>
        }
        controls={
          <FilterBar
            title="Installed base"
            description="Filter by site, asset status and monitoring scope."
            resultCount="3 assets shown · known installed base compared with connected assets"
            filters={
              <>
                <SemanticTag>Lyon DC</SemanticTag>
                <SemanticTag tone="warning">Needs review</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          detailOpen
          detailMode="inline"
          list={
            <SectionStack gap="lg">
              <SectionHeading
                title="Asset queue"
                description="Assets are displayed as review rows, not as generic table rows or stacked cards."
              />
              <ListContainer>
                {assets.map((asset) => (
                  <AssetQueueRow
                    key={asset.name}
                    assetName={asset.name}
                    site={asset.description}
                    description="Check identity, monitoring scope and source context before customer use."
                    statusLabel={asset.value}
                    statusTone={asset.tone}
                    priority={asset.value === "Monitored" ? undefined : "high"}
                    sourceStrength={asset.value === "Monitored" ? "strong" : "partial"}
                    health={asset.value === "Monitored" ? "Healthy" : "Warning"}
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
              title="SM6 Bus Coupler"
              description="Selected asset detail. Facts and source limits appear before interpretation."
              meta={<StatusPill tone="warning">Review needed</StatusPill>}
              footer={
                <StickyActionBar
                  context="Next action: validate the asset interpretation before customer use."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign validation</Button>}
                />
              }
            >
              <Tabs
                tabs={[
                  { id: "overview", label: "Overview" },
                  { id: "intelligence", label: "Intelligence" },
                  { id: "evidence", label: "Evidence", count: 1 },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
                defaultValue="overview"
                ariaLabel="Asset detail tabs"
              />

              <SectionStack>
                <AssetIntelligenceSummary
                  mode="section"
                  assetScope="SM6 Bus Coupler · Lyon DC · connected asset"
                  assetContext="Medium-voltage asset in the main electrical room."
                  lifecycleContext="Upcoming maintenance planning may require customer budget alignment."
                  healthSignals="Load reached 82% and temperature reached 41°C in the latest monitoring window."
                  intelligenceInterpretation="The asset should be reviewed before any customer-facing recommendation is made."
                  sourceContext="Monitoring platform and known installed base"
                  sourceScope="Connected asset only"
                  sourceStrength="partial"
                  freshness="18 hours"
                  validationStatus="Expert review needed"
                  readiness="needs_review"
                />

                <SectionBlock title="Evidence">
                  <EvidenceRow
                    label="Monitoring signal"
                    description="Recent trend requires expert review before customer-facing interpretation."
                    source="Monitoring platform"
                    sourceScope="Connected asset only"
                    sourceStrength="partial"
                    freshness="18 hours"
                    validationStatus="Expert review needed"
                  />
                </SectionBlock>
              </SectionStack>
            </WorkspaceDetailPanel>
          }
        />

        <SectionBlock title="Open actions">
          <ActionRow title="Validate asset interpretation" owner="Service Expert" dueDate="Next 3 business days" priority="high" status="todo" />
          <ActionRow title="Prepare customer-ready summary" owner="Account owner" dueDate="Before customer review" priority="medium" status="todo" />
        </SectionBlock>

        {/*
          v0.4 reference:
          - AssetIntelligenceSummary handles asset facts and interpretation.
          - PageHeading and SectionHeading establish hierarchy.
          - AssetQueueRow inside ListContainer replaces generic rows.
          - WorkspaceDetailPanel replaces static detail panel.
          - White-first styling is provided by package tokens and components.
        */}
      </WorkspaceShell>
    </main>
  );
}
