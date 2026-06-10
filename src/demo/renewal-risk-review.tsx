// Developer demo, not Make golden example.

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
  RenewalRiskSummary,
  SectionBlock,
  SectionStack,
  SemanticTag,
  StatusPill,
  StickyActionBar,
  ValueProofCard,
  WorkspaceShell,
} from "../design-system";

export function RenewalRiskReview() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <PageHeading
            eyebrow="Renewal risk demo"
            title="Review renewal blockers"
            description="Developer demo for renewal review. Golden examples remain the Make source of truth."
            actions={<Button size="sm">Create mitigation action</Button>}
          />
        }
        controls={
          <FilterBar
            title="Renewal preparation"
            description="Focus on blockers that prevent confident customer discussion."
            resultCount="3 blockers · renewal window: 62 days"
            filters={
              <>
                <SemanticTag tone="warning">Proof incomplete</SemanticTag>
                <SemanticTag tone="danger">Customer use blocked</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          list={
            <SectionStack>
              <RenewalRiskSummary
                customerName="Greenfield Industries"
                plan="Advanced service plan"
                contract="#CR-2024-441"
                renewalWindow="62 days"
                renewalDate="Aug 5, 2026"
                renewalReadiness="Medium"
                valueProofStatus="Incomplete"
                recommendationsReviewed="42%"
                overdueActions="3 high-priority actions"
                renewalRiskReason="Value proof is incomplete and mitigation actions are overdue."
                proofReadiness="Internal proof, not customer-ready"
                validationStatus="Proof review needed before customer use"
                sourceContext="Closed service actions and recommendation history"
                badges={[{ label: "Proof review needed", tone: "warning" }]}
              />

              <ValueProofCard
                mode="section"
                period="Last 90 days"
                customerObjective="Make service value visible before renewal"
                proofStatus="Customer-ready summary incomplete"
                proofReadiness="Internal proof, not customer-ready"
                validationStatus="Proof review needed"
                sourceContext="Closed service actions and recommendation history"
                expectedOutcome="Stronger renewal discussion after proof consolidation"
                proofPoints={[
                  { label: "Closed actions", value: "12 service actions closed; customer-ready synthesis is pending." },
                  { label: "Remaining proof gap", value: "Resolved risks need customer-ready language." },
                ]}
              />

              <SectionBlock title="Renewal snapshot">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Greenfield Industries" />
                  <KeyValueRow label="Readiness" value="Medium" />
                  <KeyValueRow label="Proof" value="Internal only" />
                  <KeyValueRow label="Actions" value="3 overdue" />
                </KeyValueList>
              </SectionBlock>
            </SectionStack>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="Customer-ready proof is incomplete"
                description="The renewal conversation needs validated customer-facing proof."
                meta={<StatusPill tone="warning">Proof review needed</StatusPill>}
              />
              <DetailPanelTabs
                tabs={[
                  { id: "proof", label: "Proof", active: true },
                  { id: "recommendations", label: "Recommendations", count: 1 },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
              />
              <DetailPanelBody>
                <SectionStack>
                  <SectionBlock title="Main blocker">
                    <AlertCard
                      severity="critical"
                      title="Value proof is not customer-ready"
                      scope="Renewal preparation"
                      description="Internal proof exists but cannot yet support the renewal discussion."
                      recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
                      evidenceSummary="Internal proof exists, but validation is still needed before customer use."
                      sourceScope="Closed service actions and recommendation history"
                      sourceStrength="partial"
                      freshness="Last 90 days"
                      validationStatus="Proof review needed"
                    />
                  </SectionBlock>

                  <RecommendationReviewPanel
                    mode="drawer"
                    reviewScope="Renewal preparation"
                    reviewStatus="Proof and source review needed"
                    sourceContext="Closed service actions and recommendation history"
                    validationStatus="Review before customer use"
                    customerReadiness="Not customer-ready yet"
                    proofContext="Internal proof, not customer-ready"
                  >
                    <RecommendationCard
                      title="Prepare customer-ready value proof summary"
                      recommendation="Prepare a customer-ready value proof summary before renewal."
                      priority="high"
                      readiness="needs_review"
                      rationale="The renewal discussion needs customer-relevant outcomes, not internal activity only."
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
              </DetailPanelBody>
              <DetailPanelFooter>
                <StickyActionBar
                  context="Next action: assign proof synthesis before renewal discussion."
                  secondaryActions={<Button variant="secondary" size="sm">Add note</Button>}
                  primaryAction={<Button size="sm">Assign proof owner</Button>}
                />
              </DetailPanelFooter>
            </DetailPanel>
          }
        />

        <SectionBlock title="Mitigation actions">
          <ActionRow title="Prepare customer-ready value proof summary" owner="Account owner" dueDate="Before renewal meeting" priority="high" status="todo" context="Proof is internal and needs customer-ready synthesis." />
          <ActionRow title="Review recommendation readiness" owner="Service Manager" dueDate="Next 3 business days" priority="high" status="in_progress" context="Recommendations need source and proof review." />
        </SectionBlock>
      </WorkspaceShell>
    </main>
  );
}

export { RenewalRiskReview as GeneratedRenewalRiskReview };
