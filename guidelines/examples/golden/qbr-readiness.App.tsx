import {
  ActionRow,
  AlertCard,
  Button,
  CustomerReviewReadinessCard,
  FilterBar,
  ListContainer,
  MasterDetailLayout,
  PageHeading,
  RecommendationCard,
  RecommendationReviewPanel,
  RiskQueueRow,
  SectionBlock,
  SectionHeading,
  SectionStack,
  SemanticTag,
  ServiceRiskSummary,
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
    title: "Customer-ready value proof is incomplete",
    scope: "QBR preparation",
    description: "Internal proof has not been translated into customer-ready language.",
    label: "Proof gap",
    tone: "warning" as const,
    selected: true,
  },
  {
    title: "Open recommendations need review",
    scope: "Recommendation readiness",
    description: "Recommendations may affect confidence if used without source review.",
    label: "Review needed",
    tone: "warning" as const,
  },
  {
    title: "Preparation action ownership is unclear",
    scope: "Follow-through",
    description: "Open preparation actions need clear owners before the customer meeting.",
    label: "Action gap",
    tone: "danger" as const,
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <PageHeading
            eyebrow="QBR readiness"
            title="Check if the review is customer-ready"
            description="Confirm proof, recommendations, risks and preparation actions before the customer review."
            actions={<Button size="sm">Create QBR action</Button>}
          />
        }
        controls={
          <FilterBar
            title="QBR preparation"
            description="Readiness depends on customer-ready proof and owned follow-through."
            resultCount="3 blockers · QBR in 15 days"
            filters={
              <>
                <SemanticTag tone="warning">Proof incomplete</SemanticTag>
                <SemanticTag tone="warning">Recommendations need review</SemanticTag>
                <SemanticTag>QBR in 15 days</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          detailOpen
          detailMode="inline"
          listLabel="QBR readiness blockers"
          detailLabel="Selected readiness blocker"
          list={
            <SectionStack gap="lg">
              <CustomerReviewReadinessCard
                customerName="Northstar Manufacturing"
                reviewType="Quarterly Business Review"
                reviewDate="Jun 24, 2026"
                customerObjective="Make service value visible before renewal discussion."
                reviewReadiness="Needs review"
                proofReadiness="Internal proof, not customer-ready"
                recommendationReadiness="Source review needed"
                riskStatus="Three readiness blockers"
                actionReadiness="Ownership incomplete"
                validationStatus="Review before customer use"
                sourceContext="Closed actions, monitoring signals and recommendation history"
                badges={[{ label: "Not customer-ready", tone: "warning" }]}
              />

              <SectionHeading
                title="Readiness blocker queue"
                description="QBR blockers are triaged as risk rows before the selected blocker is reviewed in detail."
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
                    priority={blocker.tone === "danger" ? "high" : "medium"}
                    sourceStrength="partial"
                    impact={blocker.tone === "danger" ? "High" : "Medium"}
                    dueDate="Before QBR"
                    selected={blocker.selected}
                  />
                ))}
              </ListContainer>

              <ValueProofCard
                mode="section"
                period="Last 90 days"
                customerObjective="Improve service visibility before renewal"
                proofStatus="Customer-ready summary incomplete"
                proofReadiness="Internal proof, not customer-ready"
                validationStatus="Proof review needed"
                sourceContext="Closed service actions, resolved risks and recommendation history"
                expectedOutcome="Stronger customer discussion after proof consolidation"
                badges={[{ label: "Internal proof", tone: "warning" }]}
                proofPoints={[
                  { label: "Closed service actions", value: "12 actions closed; customer-ready synthesis is pending." },
                  { label: "Recommendations reviewed", value: "5 recommendations reviewed with the customer team." },
                  { label: "Remaining proof gap", value: "Monitoring progress still needs customer-ready wording." },
                ]}
              />

              <ServiceRiskSummary
                mode="section"
                riskLevel="warning"
                riskSummary="The QBR is not customer-ready because proof and recommendation readiness need review."
                affectedScope="QBR preparation and renewal discussion"
                customerImpact="The customer may not clearly see service value delivered during the period."
                serviceImpact="The Account owner may need to explain open risks without validated proof points."
                sourceContext="Closed actions, monitoring signals and recommendation history"
                sourceStrength="partial"
                freshness="Last 90 days"
                validationStatus="Review before customer use"
                recommendedReview="Close proof gaps and review recommendations before the QBR."
              />
            </SectionStack>
          }
          detail={
            <WorkspaceDetailPanel
              open
              mode="inline"
              title="Customer-ready value proof is incomplete"
              description="Internal activity should not be used as customer proof until it has been synthesized and validated."
              meta={<StatusPill tone="warning">Review needed</StatusPill>}
              footer={
                <StickyActionBar
                  context="Next action: assign proof synthesis and recommendation review before the QBR."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign preparation owner</Button>}
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
                ariaLabel="QBR readiness detail tabs"
              />

              <SectionStack>
                <SectionBlock title="Blocker">
                  <AlertCard
                    severity="critical"
                    title="Customer-ready value proof is incomplete"
                    scope="QBR preparation"
                    description="Internal proof exists but has not been translated into customer-ready language."
                    recommendation="Prepare and validate a customer-ready value proof summary before the QBR."
                    evidenceSummary="12 closed service actions are available, but customer-ready synthesis is missing."
                    sourceScope="Closed service actions and recommendation history"
                    sourceStrength="partial"
                    freshness="Last 90 days"
                    validationStatus="Proof review needed before customer use"
                  />
                </SectionBlock>

                <RecommendationReviewPanel
                  mode="drawer"
                  reviewScope="QBR preparation"
                  reviewStatus="Proof and source review needed"
                  sourceContext="Closed service actions and recommendation history"
                  validationStatus="Review before customer use"
                  customerReadiness="Not customer-ready yet"
                  proofContext="Internal proof, not customer-ready"
                >
                  <RecommendationCard
                    title="Prepare value proof summary"
                    recommendation="Create a customer-ready proof summary that links closed actions to business outcomes."
                    priority="high"
                    readiness="needs_review"
                    rationale="The QBR needs customer-relevant proof rather than internal activity reporting."
                    scope="Value proof"
                    evidenceSummary="12 service actions were closed but not synthesized for customer use."
                    source="Service action history"
                    sourceScope="Last 90 days"
                    sourceStrength="partial"
                    freshness="Last 90 days"
                    proofStatus="Internal proof, not customer-ready"
                    validationStatus="Proof review needed"
                  />
                </RecommendationReviewPanel>
              </SectionStack>
            </WorkspaceDetailPanel>
          }
        />

        <SectionBlock title="Preparation actions">
          <ActionRow title="Prepare customer-ready value proof summary" owner="Account owner" dueDate="Before QBR" priority="high" status="todo" context="Internal proof needs customer-ready synthesis." />
          <ActionRow title="Review recommendation readiness with service team" owner="Service Manager" dueDate="Next 3 business days" priority="high" status="in_progress" context="Recommendations need source and proof review." />
          <ActionRow title="Confirm QBR preparation action owners" owner="Account owner" dueDate="This week" priority="medium" status="todo" context="Open preparation actions need ownership before the meeting." />
        </SectionBlock>

        {/*
          v0.4 reference:
          - CustomerReviewReadinessCard handles QBR readiness context.
          - RiskQueueRow inside ListContainer replaces generic blocker rows.
          - RecommendationReviewPanel and RecommendationCard handle proof follow-through.
          - WorkspaceDetailPanel and Tabs provide package-controlled detail navigation.
        */}
      </WorkspaceShell>
    </main>
  );
}
