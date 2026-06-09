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
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-(--ec-color-primary)">Renewal risk review</p>
              <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">Close proof gaps before renewal</h1>
              <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
                Review renewal exposure, customer-ready proof, recommendation readiness and mitigation actions.
              </p>
            </div>
            <Button size="sm">Create mitigation action</Button>
          </div>
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
          listLabel="Renewal context"
          detailLabel="Selected blocker detail"
          list={
            <SectionStack>
              <RenewalRiskSummary
                customerName="Northstar Manufacturing"
                plan="Advanced service plan"
                contract="#NS-2024-118"
                renewalDate="Sep 15, 2026"
                renewalWindow="90 days"
                renewalReadiness="Medium"
                valueProofStatus="Incomplete"
                recommendationsReviewed="5 of 12"
                overdueActions="4 mitigation actions"
                renewalRiskReason="Value proof is incomplete and mitigation actions are overdue."
                customerObjective="Improve service visibility before renewal"
                proofReadiness="Internal proof, not customer-ready"
                validationStatus="Proof review needed before customer use"
                sourceContext="Closed service actions and recommendation history from the last 90 days"
                badges={[{ label: "Proof review needed", tone: "warning" }]}
              />

              <ValueProofCard
                mode="section"
                period="Last 90 days"
                customerObjective="Improve service visibility before renewal"
                proofStatus="Customer-ready summary incomplete"
                proofReadiness="Internal proof, not customer-ready"
                validationStatus="Proof review needed"
                sourceContext="Closed service actions and recommendation history"
                expectedOutcome="Stronger renewal discussion after proof consolidation"
                badges={[{ label: "Internal proof", tone: "warning" }]}
                proofPoints={[
                  { label: "Closed actions", value: "12 service actions closed; customer-ready synthesis is pending." },
                  { label: "Recommendations delivered", value: "5 recommendations reviewed with the customer team." },
                  { label: "Remaining proof gap", value: "Resolved risks need customer-ready language." },
                ]}
              />

              <SectionBlock title="Renewal snapshot">
                <KeyValueList columns={2}>
                  <KeyValueRow label="Customer" value="Northstar Manufacturing" />
                  <KeyValueRow label="Readiness" value="Medium" />
                  <KeyValueRow label="Proof" value="Internal only" />
                  <KeyValueRow label="Actions" value="4 overdue" />
                </KeyValueList>
              </SectionBlock>
            </SectionStack>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="Customer-ready proof is incomplete"
                description="The renewal conversation is not ready until internal activity becomes validated customer proof."
                meta={<StatusPill tone="warning">Proof review needed</StatusPill>}
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
                  <SectionBlock title="Main blocker">
                    <AlertCard
                      severity="critical"
                      title="Renewal value proof is not customer-ready"
                      scope="Renewal preparation"
                      description="Internal proof exists but cannot yet support the renewal discussion."
                      recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
                      evidenceSummary="Internal proof exists, but validation is still needed before customer use."
                      sourceScope="Closed service actions and recommendation history"
                      sourceStrength="partial"
                      freshness="Last 90 days"
                      validationStatus="Proof review needed before customer use"
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
                      recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
                      priority="high"
                      readiness="needs_review"
                      rationale="The renewal discussion needs evidence of customer-relevant outcomes."
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
          <ActionRow title="Prepare customer-ready value proof summary" owner="CSM" dueDate="Before renewal meeting" priority="high" status="todo" context="Proof is internal and needs customer-ready synthesis." />
          <ActionRow title="Review recommendation readiness with service team" owner="Service Manager" dueDate="Next 3 business days" priority="high" status="in_progress" context="Recommendations need source and proof review." />
          <ActionRow title="Assign overdue mitigation actions" owner="Renewal Manager" dueDate="This week" priority="high" status="todo" context="Overdue actions are blocking readiness." />
        </SectionBlock>

        {/*
          Why this is compliant:
          - Renewal review uses workspace, detail panel and sticky next action.
          - Separates internal proof, expected outcome and customer-ready proof.
          - Uses refactored ValueProofCard and RecommendationReviewPanel in section/drawer modes.
        */}
      </WorkspaceShell>
    </main>
  );
}
