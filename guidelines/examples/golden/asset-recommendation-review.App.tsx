import {
  ActionRow,
  AssetIntelligenceSummary,
  Button,
  DetailPanel,
  DetailPanelBody,
  DetailPanelFooter,
  DetailPanelHeader,
  DetailPanelTabs,
  EvidenceRow,
  FilterBar,
  KeyValueList,
  KeyValueRow,
  MasterDetailLayout,
  RecommendationCard,
  RecommendationReviewPanel,
  SectionBlock,
  SectionStack,
  SemanticTag,
  ServiceRiskSummary,
  StatusPill,
  StickyActionBar,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const recommendations = [
  {
    title: "Review UPS battery replacement plan",
    priority: "high" as const,
    readiness: "needs_review" as const,
    scope: "Connected UPS assets",
    evidence: "2 connected UPS assets show recurring battery health warnings.",
  },
  {
    title: "Recover connectivity for critical assets",
    priority: "high" as const,
    readiness: "internal" as const,
    scope: "Backup power system",
    evidence: "3 of 8 known backup power assets are not connected.",
  },
  {
    title: "Prepare customer-ready wording",
    priority: "medium" as const,
    readiness: "needs_review" as const,
    scope: "Customer communication",
    evidence: "Source strength is partial and needs expert validation.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-(--ec-color-primary)">Asset recommendation review</p>
              <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">Validate recommendations before customer use</h1>
              <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
                Review asset facts, source scope, recommendation readiness and follow-through before communicating with the customer.
              </p>
            </div>
            <Button size="sm">Create validation action</Button>
          </div>
        }
        controls={
          <FilterBar
            title="Recommendation queue"
            description="Filter by readiness, priority and source scope."
            resultCount="3 recommendations · source scope: connected assets and known installed base"
            filters={
              <>
                <SemanticTag tone="warning">Expert review needed</SemanticTag>
                <SemanticTag>Backup power system</SemanticTag>
                <SemanticTag tone="primary">EcoCare Advanced</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          listLabel="Recommendation list"
          detailLabel="Recommendation detail"
          list={
            <SectionStack>
              <SectionBlock title="Customer and asset context">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Northstar Manufacturing" />
                  <KeyValueRow label="Plan" value="Advanced service plan" />
                  <KeyValueRow label="Asset scope" value="8 known backup power assets · 5 connected" />
                  <KeyValueRow label="Validation" value="Expert review needed before customer communication" />
                </KeyValueList>
              </SectionBlock>

              <AssetIntelligenceSummary
                mode="section"
                assetScope="Backup power system · 8 known assets · 5 connected · 3 non-connected"
                assetContext="Main production site"
                lifecycleContext="Battery and connectivity review may affect maintenance planning and budget discussion."
                healthSignals="2 connected UPS assets show recurring battery health warnings."
                intelligenceInterpretation="Battery replacement planning may reduce service risk, but expert validation is required."
                sourceContext="Monitoring platform, known installed base and service history"
                sourceScope="Known installed base and connected monitored assets only"
                sourceStrength="partial"
                freshness="Monitoring update 18 hours ago"
                validationStatus="Expert review needed before customer use"
                readiness="needs_review"
              />

              <ServiceRiskSummary
                mode="section"
                riskLevel="warning"
                riskSummary="Recommendations may be useful, but source visibility is partial and customer communication is not ready."
                affectedScope="Backup power system at main production site"
                customerImpact="Could affect maintenance planning and budget discussion."
                serviceImpact="Premature communication could overstate monitoring coverage."
                sourceContext="Monitoring platform, known installed base and service history"
                sourceStrength="partial"
                freshness="18 hours ago"
                validationStatus="Expert review needed"
                recommendedReview="Validate source scope, connected status and rationale."
              />
            </SectionStack>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="Review UPS battery replacement plan"
                description="Facts and source limits appear before interpretation or customer-ready wording."
                meta={
                  <div className="flex flex-wrap gap-2">
                    <StatusPill tone="warning">Needs review</StatusPill>
                    <StatusPill tone="danger">High priority</StatusPill>
                  </div>
                }
              />
              <DetailPanelTabs
                tabs={[
                  { id: "summary", label: "Summary", active: true },
                  { id: "evidence", label: "Evidence", count: 2 },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
              />
              <DetailPanelBody>
                <SectionStack>
                  <RecommendationReviewPanel
                    mode="drawer"
                    reviewScope="Backup power system recommendation set"
                    reviewStatus="Expert validation needed"
                    sourceContext="Monitoring platform, known installed base and service history"
                    validationStatus="Review before customer use"
                    customerReadiness="Not customer-ready yet"
                    proofContext="Source strength is partial"
                    badges={[{ label: "Not customer-ready", tone: "danger" }]}
                  >
                    {recommendations.map((item) => (
                      <RecommendationCard
                        key={item.title}
                        title={item.title}
                        recommendation={item.title}
                        priority={item.priority}
                        readiness={item.readiness}
                        rationale="Recommendation requires source and expert validation before customer communication."
                        scope={item.scope}
                        evidenceSummary={item.evidence}
                        source="Monitoring platform and service history"
                        sourceScope="Connected assets and known installed base"
                        sourceStrength="partial"
                        freshness="18 hours ago"
                        validationStatus="Expert review needed"
                      />
                    ))}
                  </RecommendationReviewPanel>

                  <SectionBlock title="Evidence to verify">
                    <EvidenceRow
                      label="Battery warning trend"
                      description="Recurring battery health warnings on two connected UPS assets."
                      source="Monitoring platform"
                      sourceScope="Connected UPS assets only"
                      sourceStrength="partial"
                      freshness="18 hours ago"
                      validationStatus="Expert validation needed"
                    />
                    <EvidenceRow
                      label="Connectivity gap"
                      description="Three known backup power assets are not connected and cannot be treated as live-monitored."
                      source="Known installed base and monitoring platform"
                      sourceScope="Known installed base compared with connected monitored assets"
                      sourceStrength="partial"
                      validationStatus="Internal action before customer use"
                    />
                  </SectionBlock>
                </SectionStack>
              </DetailPanelBody>
              <DetailPanelFooter>
                <StickyActionBar
                  context="Customer communication is blocked until expert validation is complete."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign validation</Button>}
                />
              </DetailPanelFooter>
            </DetailPanel>
          }
        />

        <SectionBlock title="Follow-through actions">
          <ActionRow
            title="Validate asset recommendation with service expert"
            owner="Service Manager"
            dueDate="Next 3 business days"
            priority="high"
            status="todo"
            context="Expert validation is needed before customer communication."
            action={<Button size="sm">Open</Button>}
          />
          <ActionRow
            title="Confirm connectivity status for non-connected assets"
            owner="Remote Support Specialist"
            dueDate="This week"
            priority="high"
            status="in_progress"
            context="Non-connected assets cannot be treated as live-monitored."
          />
        </SectionBlock>

        {/*
          Why this is compliant:
          - Uses workspace layout, master-detail, detail panel tabs and sticky actions.
          - Uses refactored dense patterns with mode="section" and mode="drawer".
          - Presents facts and source scope before interpretation and recommendation.
          - Keeps partial visibility, freshness and expert validation visible.
          - Uses rows for dense follow-through instead of creating a card for every item.
        */}
      </WorkspaceShell>
    </main>
  );
}
