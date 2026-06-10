import {
  ActionRow,
  Button,
  EvidenceRow,
  FilterBar,
  KeyValueList,
  KeyValueRow,
  ListContainer,
  MasterDetailLayout,
  PageHeading,
  RecommendationCard,
  RecommendationQueueRow,
  RecommendationReviewPanel,
  SectionBlock,
  SectionHeading,
  SectionStack,
  SemanticTag,
  ServiceRiskSummary,
  StatusPill,
  StickyActionBar,
  Tabs,
  WorkspaceDetailPanel,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const recommendations = [
  {
    title: "Review UPS battery replacement plan",
    priority: "high" as const,
    readiness: "Needs review",
    tone: "warning" as const,
    scope: "Connected UPS assets",
    evidence: "2 connected UPS assets show recurring battery health warnings.",
    selected: true,
  },
  {
    title: "Recover connectivity for critical assets",
    priority: "high" as const,
    readiness: "Internal only",
    tone: "warning" as const,
    scope: "Backup power system",
    evidence: "3 of 8 known backup power assets are not connected.",
  },
  {
    title: "Prepare customer-ready wording",
    priority: "medium" as const,
    readiness: "Needs review",
    tone: "warning" as const,
    scope: "Customer communication",
    evidence: "Source strength is partial and needs expert validation.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <PageHeading
            eyebrow="Asset recommendation review"
            title="Validate recommendations before customer use"
            description="Review asset facts, source scope, recommendation readiness and follow-through before communicating with the customer."
            actions={<Button size="sm">Create validation action</Button>}
          />
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
          detailOpen
          detailMode="inline"
          listLabel="Recommendation list"
          detailLabel="Recommendation detail"
          list={
            <SectionStack gap="lg">
              <SectionBlock title="Customer and asset context">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Northstar Manufacturing" />
                  <KeyValueRow label="Plan" value="Advanced service plan" />
                  <KeyValueRow label="Asset scope" value="8 known backup power assets · 5 connected" />
                  <KeyValueRow label="Validation" value="Expert review needed before customer communication" />
                </KeyValueList>
              </SectionBlock>

              <SectionHeading
                title="Recommendation queue"
                description="Recommendations are triaged as queue rows before the selected recommendation is reviewed in detail."
              />
              <ListContainer>
                {recommendations.map((item) => (
                  <RecommendationQueueRow
                    key={item.title}
                    recommendationTitle={item.title}
                    scope={item.scope}
                    description={item.evidence}
                    readinessLabel={item.readiness}
                    readinessTone={item.tone}
                    priority={item.priority}
                    sourceStrength="partial"
                    evidenceCount="2"
                    owner="Service expert"
                    selected={item.selected}
                  />
                ))}
              </ListContainer>

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
            <WorkspaceDetailPanel
              open
              mode="inline"
              title="Review UPS battery replacement plan"
              description="Facts and source limits appear before interpretation or customer-ready wording."
              meta={
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="warning">Needs review</StatusPill>
                  <StatusPill tone="danger">High priority</StatusPill>
                </div>
              }
              footer={
                <StickyActionBar
                  context="Customer communication is blocked until expert validation is complete."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign validation</Button>}
                />
              }
            >
              <Tabs
                tabs={[
                  { id: "summary", label: "Summary" },
                  { id: "evidence", label: "Evidence", count: 2 },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
                defaultValue="summary"
                ariaLabel="Recommendation detail tabs"
              />

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
                  <RecommendationCard
                    title="Review UPS battery replacement plan"
                    recommendation="Review UPS battery replacement plan"
                    priority="high"
                    readiness="needs_review"
                    rationale="Recommendation requires source and expert validation before customer communication."
                    scope="Connected UPS assets"
                    evidenceSummary="2 connected UPS assets show recurring battery health warnings."
                    source="Monitoring platform and service history"
                    sourceScope="Connected assets and known installed base"
                    sourceStrength="partial"
                    freshness="18 hours ago"
                    validationStatus="Expert review needed"
                  />
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
            </WorkspaceDetailPanel>
          }
        />

        <SectionBlock title="Follow-through actions">
          <ActionRow title="Validate asset recommendation with service expert" owner="Service Manager" dueDate="Next 3 business days" priority="high" status="todo" context="Expert validation is needed before customer communication." action={<Button size="sm">Open</Button>} />
          <ActionRow title="Confirm connectivity status for non-connected assets" owner="Remote Support Specialist" dueDate="This week" priority="high" status="in_progress" context="Non-connected assets cannot be treated as live-monitored." />
        </SectionBlock>

        {/*
          v0.4 reference:
          - PageHeading and SectionHeading establish hierarchy.
          - RecommendationQueueRow inside ListContainer replaces generic cards as the list layer.
          - WorkspaceDetailPanel replaces static detail panel.
          - Tabs provide package-controlled panel navigation.
          - White-first styling is provided by package tokens and components.
        */}
      </WorkspaceShell>
    </main>
  );
}
