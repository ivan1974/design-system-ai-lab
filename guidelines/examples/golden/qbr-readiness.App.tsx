import {
  ActionRow,
  AlertCard,
  Button,
  DetailPanel,
  DetailPanelBody,
  DetailPanelFooter,
  DetailPanelHeader,
  DetailPanelTabs,
  FilterBar,
  KeyValueList,
  KeyValueRow,
  MasterDetailLayout,
  PageHeading,
  RecommendationCard,
  RecommendationReviewPanel,
  SectionBlock,
  SectionStack,
  SemanticTag,
  ServiceRiskSummary,
  StatusPill,
  StickyActionBar,
  ValueProofCard,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

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
          listLabel="QBR readiness context"
          detailLabel="Selected readiness blocker"
          list={
            <SectionStack>
              <SectionBlock title="Customer review context">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Northstar Manufacturing" />
                  <KeyValueRow label="Review type" value="Quarterly Business Review" />
                  <KeyValueRow label="Review date" value="Jun 24, 2026" />
                  <KeyValueRow label="Readiness" value="Needs review" />
                </KeyValueList>
              </SectionBlock>

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
                serviceImpact="The CSM may need to explain open risks without validated proof points."
                sourceContext="Closed actions, monitoring signals and recommendation history"
                sourceStrength="partial"
                freshness="Last 90 days"
                validationStatus="Review before customer use"
                recommendedReview="Close proof gaps and review recommendations before the QBR."
              />
            </SectionStack>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="Customer-ready value proof is incomplete"
                description="Internal activity should not be used as customer proof until it has been synthesized and validated."
                meta={<StatusPill tone="warning">Review needed</StatusPill>}
              />
              <DetailPanelTabs
                tabs={[
                  { id: "proof", label: "Proof", active: true },
                  { id: "recommendations", label: "Recommendations", count: 2 },
                  { id: "actions", label: "Actions", count: 3 },
                ]}
              />
              <DetailPanelBody>
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
                      title="Prepare customer-ready value proof summary"
                      recommendation="Prepare a customer-ready value proof summary before the QBR."
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
                    <RecommendationCard
                      title="Review open service recommendations"
                      recommendation="Review open service recommendations before using them in the customer discussion."
                      priority="medium"
                      readiness="needs_review"
                      rationale="Unresolved recommendations may affect customer confidence if used without source review."
                      scope="Recommendation review"
                      evidenceSummary="5 of 12 recommendations have been reviewed with the customer team."
                      source="Recommendation history"
                      sourceScope="Recent recommendations"
                      sourceStrength="review needed"
                      freshness="Last customer review"
                      validationStatus="Review before customer use"
                    />
                  </RecommendationReviewPanel>
                </SectionStack>
              </DetailPanelBody>
              <DetailPanelFooter>
                <StickyActionBar
                  context="Next action: assign proof synthesis and recommendation review before the QBR."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign preparation owner</Button>}
                />
              </DetailPanelFooter>
            </DetailPanel>
          }
        />

        <SectionBlock title="Preparation actions">
          <ActionRow title="Prepare customer-ready value proof summary" owner="CSM" dueDate="Before QBR" priority="high" status="todo" context="Internal proof needs customer-ready synthesis." />
          <ActionRow title="Review recommendation readiness with service team" owner="Service Manager" dueDate="Next 3 business days" priority="high" status="in_progress" context="Recommendations need source and proof review." />
          <ActionRow title="Confirm QBR preparation action owners" owner="CSM" dueDate="This week" priority="medium" status="todo" context="Open preparation actions need ownership before the meeting." />
        </SectionBlock>

        {/*
          Why this is compliant:
          - QBR readiness is a review workspace, not a slide/report generator.
          - Separates internal proof, customer-ready proof and expected outcome.
          - Uses refactored dense patterns in section/drawer modes.
          - Keeps source scope and validation visible before customer use.
        */}
      </WorkspaceShell>
    </main>
  );
}
