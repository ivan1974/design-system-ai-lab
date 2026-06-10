import {
  ActionRow,
  AlertCard,
  Button,
  FilterBar,
  ListContainer,
  MasterDetailLayout,
  PageHeading,
  RecommendationCard,
  RecommendationReviewPanel,
  RenewalRiskSummary,
  RiskQueueRow,
  SectionBlock,
  SectionHeading,
  SectionStack,
  SemanticTag,
  StatusPill,
  StickyActionBar,
  Tabs,
  ValueProofCard,
  WorkspaceDetailPanel,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const blockers = [
  {
    title: "Customer-ready proof is incomplete",
    scope: "Renewal preparation",
    description: "Internal activity has not been translated into validated customer proof.",
    label: "Proof gap",
    tone: "warning" as const,
    selected: true,
  },
  {
    title: "Mitigation actions are overdue",
    scope: "Follow-through",
    description: "Four mitigation actions need ownership before renewal discussion.",
    label: "Action risk",
    tone: "danger" as const,
  },
  {
    title: "Recommendations need source review",
    scope: "Recommendation readiness",
    description: "Recommendations require source and proof review before customer use.",
    label: "Review needed",
    tone: "warning" as const,
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <PageHeading
            eyebrow="Renewal risk review"
            title="Close proof gaps before renewal"
            description="Review renewal exposure, customer-ready proof, recommendation readiness and mitigation actions."
            actions={<Button size="sm">Create mitigation action</Button>}
          />
        }
        controls={
          <FilterBar
            title="Renewal preparation"
            description="Focus on blockers that prevent confident customer discussion."
            resultCount="3 blockers · renewal window: 90 days"
            filters={
              <>
                <SemanticTag tone="warning">Proof incomplete</SemanticTag>
                <SemanticTag tone="danger">Customer use blocked</SemanticTag>
                <SemanticTag>Renewal in 90 days</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          detailOpen
          detailMode="inline"
          listLabel="Renewal blockers"
          detailLabel="Selected blocker detail"
          list={
            <SectionStack gap="lg">
              <RenewalRiskSummary
                customerName="Northstar Manufacturing"
                plan="Advanced service plan"
                contract="#NS-2024-118"
                renewalDate="Sep 15, 2026"
                renewalWindow="90 days"
                renewalReadiness="needs-review"
                valueProofStatus="Incomplete"
                recommendationsReviewed="5 of 12"
                overdueActions="4 mitigation actions"
                renewalRiskReason="Customer-ready proof and mitigation ownership are not complete."
                customerObjective="Improve service visibility before renewal"
                proofReadiness="internal-proof"
                validationStatus="internal-review-needed"
                sourceContext="Closed service actions and recommendation history from the last 90 days"
                badges={[{ label: "Proof review needed", tone: "warning" }]}
              />

              <SectionHeading
                title="Renewal blocker queue"
                description="Blockers are triaged as risk rows before the selected blocker is reviewed in detail."
              />
              <ListContainer>
                {blockers.map((blocker) => (
                  <RiskQueueRow
                    key={blocker.title}
                    riskTitle={blocker.title}
                    scope={blocker.scope}
                    description={blocker.description}
                    riskLabel={blocker.label}
                    riskTone={blocker.tone}
                    priority="high"
                    sourceStrength="partial"
                    impact="High"
                    dueDate="This week"
                    selected={blocker.selected}
                  />
                ))}
              </ListContainer>

              <ValueProofCard
                mode="section"
                period="Last 90 days"
                customerObjective="Improve service visibility before renewal"
                proofStatus="Customer-ready summary incomplete"
                proofReadiness="internal-proof"
                validationStatus="internal-review-needed"
                sourceContext="Closed service actions and recommendation history"
                expectedOutcome="Stronger renewal discussion after proof consolidation"
                badges={[{ label: "Internal proof", tone: "warning" }]}
                proofPoints={[
                  { label: "Closed actions", value: "12 service actions closed; customer-ready synthesis is pending." },
                  { label: "Recommendations delivered", value: "5 recommendations reviewed with the customer team." },
                  { label: "Remaining proof gap", value: "Resolved risks need customer-ready language." },
                ]}
              />
            </SectionStack>
          }
          detail={
            <WorkspaceDetailPanel
              open
              mode="inline"
              title="Customer-ready proof is incomplete"
              description="The renewal conversation is not ready until internal activity becomes validated customer proof."
              meta={<StatusPill tone="warning">Proof review needed</StatusPill>}
              footer={
                <StickyActionBar
                  context="Next action: assign proof synthesis before renewal discussion."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign proof owner</Button>}
                />
              }
            >
              <Tabs
                tabs={[
                  { id: "proof", label: "Proof" },
                  { id: "recommendations", label: "Recommendations", count: 2 },
                  { id: "actions", label: "Actions", count: 3 },
                ]}
                defaultValue="proof"
                ariaLabel="Renewal blocker detail tabs"
              />

              <SectionStack>
                <SectionBlock title="Main blocker">
                  <AlertCard
                    severity="critical"
                    title="Renewal value proof is not customer-ready"
                    scope="Renewal preparation"
                    description="Internal proof exists but cannot yet support the renewal discussion."
                    recommendation="Prepare a validated customer-ready value proof summary before the renewal meeting."
                    evidenceSummary="Closed actions are available, but the customer-ready narrative is still missing."
                    sourceScope="Closed service actions and recommendation history"
                    sourceStrength="partial"
                    freshness="Last 90 days"
                    validationStatus="internal-review-needed"
                  />
                </SectionBlock>

                <RecommendationReviewPanel
                  mode="drawer"
                  reviewScope="Renewal preparation"
                  reviewStatus="Proof and source review needed"
                  sourceContext="Closed service actions and recommendation history"
                  validationStatus="internal-review-needed"
                  customerReadiness="needs-review"
                  proofReadiness="internal-proof"
                >
                  <RecommendationCard
                    title="Prepare value proof summary"
                    recommendation="Create a customer-ready proof summary that connects closed actions to outcomes."
                    priority="high"
                    readiness="needs-review"
                    rationale="The renewal discussion needs evidence of customer-relevant outcomes."
                    scope="Value proof"
                    evidenceSummary="12 service actions were closed but not synthesized for customer use."
                    source="Service action history"
                    sourceScope="Last 90 days"
                    sourceStrength="partial"
                    freshness="Last 90 days"
                    proofStatus="Internal proof, not customer-ready"
                    validationStatus="internal-review-needed"
                  />
                </RecommendationReviewPanel>
              </SectionStack>
            </WorkspaceDetailPanel>
          }
        />

        <SectionBlock title="Mitigation actions">
          <ActionRow title="Prepare customer-ready value proof summary" owner="Account owner" dueDate="Before renewal meeting" priority="high" status="todo" context="Proof is internal and needs customer-ready synthesis." />
          <ActionRow title="Review recommendation readiness with service team" owner="Service Manager" dueDate="Next 3 business days" priority="high" status="in-progress" context="Recommendations need source and proof review." />
          <ActionRow title="Assign overdue mitigation actions" owner="Renewal Manager" dueDate="This week" priority="high" status="todo" context="Overdue actions are blocking readiness." />
        </SectionBlock>

        {/*
          v0.5.1 reference:
          - RenewalRiskSummary handles renewal context instead of a generic snapshot.
          - RiskQueueRow inside ListContainer replaces generic risk cards as the list layer.
          - RecommendationReviewPanel and RecommendationCard handle selected proof follow-through.
          - WorkspaceDetailPanel and Tabs provide package-controlled detail navigation.
          - Readiness and validation values use canonical contract values.
        */}
      </WorkspaceShell>
    </main>
  );
}
