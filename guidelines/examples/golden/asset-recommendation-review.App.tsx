import {
  ActionRow,
  AssetIntelligenceSummary,
  Button,
  EvidenceRow,
  FilterBar,
  ListContainer,
  MasterDetailLayout,
  PageHeading,
  RecommendationCard,
  RecommendationQueueRow,
  RecommendationReviewPanel,
  SectionBlock,
  SectionHeading,
  SectionStack,
  SemanticPill,
  SemanticTag,
  ServiceRiskSummary,
  StickyActionBar,
  Tabs,
  WorkspaceDetailPanel,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const recommendations = [
  { title: "Review UPS battery replacement plan", priority: "high" as const, readiness: "needs-review", tone: "warning" as const, scope: "Connected UPS assets", evidence: "Recurring battery health warnings appear on two connected UPS assets.", selected: true },
  { title: "Recover connectivity for critical assets", priority: "high" as const, readiness: "internal", tone: "warning" as const, scope: "Backup power system", evidence: "Three known backup power assets are outside live monitoring." },
  { title: "Prepare customer-ready wording", priority: "medium" as const, readiness: "needs-review", tone: "warning" as const, scope: "Customer communication", evidence: "Source scope needs validation before external wording is prepared." },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={<PageHeading eyebrow="Asset recommendation review" title="Validate recommendations before customer use" description="Review asset intelligence, source scope, recommendation readiness and follow-through before communicating with the customer." actions={<Button size="sm">Create validation action</Button>} />}
        controls={
          <FilterBar
            title="Recommendation queue"
            description="Filter by readiness, priority and source scope."
            resultCount="3 recommendations · connected assets and known installed base"
            filters={<><SemanticTag tone="warning">Expert review needed</SemanticTag><SemanticTag>Backup power system</SemanticTag><SemanticTag tone="primary">Advanced service plan</SemanticTag></>}
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          detailOpen
          detailMode="inline"
          listLabel="Recommendation list"
          detailLabel="Recommendation detail"
          list={
            <SectionStack gap="lg">
              <AssetIntelligenceSummary mode="section" assetScope="Backup power system · 8 known assets · 5 connected" assetContext="Main production site" lifecycleContext="Battery and connectivity review may affect maintenance planning and budget discussion." healthSignals="Two connected UPS assets show recurring battery health warnings." intelligenceInterpretation="Battery replacement planning may reduce service risk, but expert validation is required." sourceContext="Monitoring platform, known installed base and service history" sourceScope="Known installed base and connected monitored assets only" sourceStrength="partial" freshness="18 hours" validationStatus="internal-review-needed" readiness="needs-review" />
              <SectionHeading title="Recommendation queue" description="Recommendations are triaged as queue rows before the selected recommendation is reviewed in detail." />
              <ListContainer>
                {recommendations.map((item) => (
                  <RecommendationQueueRow key={item.title} recommendationTitle={item.title} scope={item.scope} description={item.evidence} readinessLabel={item.readiness} readinessTone={item.tone} priority={item.priority} sourceStrength="partial" evidenceCount="2" owner="Service expert" selected={item.selected} />
                ))}
              </ListContainer>
              <ServiceRiskSummary mode="section" riskLevel="warning" riskSummary="Recommendations are promising, but source visibility is partial and customer communication is not ready." affectedScope="Backup power system at main production site" customerImpact="Could affect maintenance planning and budget discussion." serviceImpact="Premature communication could overstate monitoring coverage." sourceContext="Monitoring platform, known installed base and service history" sourceStrength="partial" freshness="18 hours" validationStatus="internal-review-needed" recommendedReview="Validate source scope, connected status and rationale." />
            </SectionStack>
          }
          detail={
            <WorkspaceDetailPanel
              open
              mode="inline"
              title="Review UPS battery replacement plan"
              description="Facts and source limits appear before interpretation or customer-ready wording."
              meta={<div className="flex flex-wrap gap-2"><SemanticPill tone="warning">Needs review</SemanticPill><SemanticPill tone="danger">High priority</SemanticPill></div>}
              footer={<StickyActionBar context="Customer communication is blocked until expert validation is complete." secondaryActions={<Button variant="secondary" size="sm">Add note</Button>} primaryAction={<Button size="sm">Assign validation</Button>} />}
            >
              <Tabs tabs={[{ id: "summary", label: "Summary" }, { id: "evidence", label: "Evidence", count: 2 }, { id: "actions", label: "Actions", count: 2 }]} defaultValue="summary" ariaLabel="Recommendation detail tabs" />
              <SectionStack>
                <RecommendationReviewPanel mode="drawer" reviewScope="Backup power system recommendation set" reviewStatus="Expert validation needed" sourceContext="Monitoring platform, known installed base and service history" validationStatus="internal-review-needed" customerReadiness="needs-review" proofReadiness="expected-only" badges={[{ label: "Not customer-ready", tone: "danger" }]}>
                  <RecommendationCard title="UPS battery replacement plan" recommendation="Plan an expert review before sharing the battery replacement recommendation externally." priority="high" readiness="needs-review" rationale="The signal is meaningful, but the recommendation still depends on partial asset visibility." scope="Connected UPS assets" evidenceSummary="Recurring battery health warnings appear on two connected UPS assets." source="Monitoring platform and service history" sourceScope="Connected assets and known installed base" sourceStrength="partial" freshness="18 hours" validationStatus="internal-review-needed" />
                </RecommendationReviewPanel>
                <SectionBlock title="Evidence to verify">
                  <EvidenceRow label="Battery warning trend" description="Recurring battery health warnings on two connected UPS assets." source="Monitoring platform" sourceScope="Connected UPS assets only" sourceStrength="partial" freshness="18 hours" validationStatus="internal-review-needed" />
                  <EvidenceRow label="Connectivity gap" description="Three known backup power assets are not connected and cannot be treated as live-monitored." source="Known installed base and monitoring platform" sourceScope="Known installed base compared with connected monitored assets" sourceStrength="partial" validationStatus="internal-review-needed" />
                </SectionBlock>
              </SectionStack>
            </WorkspaceDetailPanel>
          }
        />
        <SectionBlock title="Validation actions">
          <ActionRow title="Validate recommendation rationale" owner="Service expert" dueDate="This week" priority="high" status="todo" context="Confirm source scope and recommendation rationale before customer use." />
          <ActionRow title="Prepare customer-safe wording" owner="Account owner" dueDate="Next 3 business days" priority="medium" status="in-progress" context="Translate validated recommendation into customer-ready language." />
        </SectionBlock>
      </WorkspaceShell>
    </main>
  );
}
