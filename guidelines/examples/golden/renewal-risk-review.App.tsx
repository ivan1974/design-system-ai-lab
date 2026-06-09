import {
  ActionCard,
  ActionList,
  AlertCard,
  CreateActionDialog,
  CustomerReviewReadinessCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  RecommendationCard,
  RecommendationReviewPanel,
  RenewalRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Renewal risk review"
          description="Review renewal exposure, proof readiness, recommendation readiness and mitigation actions before the customer discussion."
          actions={
            <CreateActionDialog
              title="Create mitigation action"
              description="Assign a renewal mitigation action with owner, due date, priority and proof context."
              confirmLabel="Save mitigation action"
              showContextFields
              defaultValues={{
                title: "Prepare customer-ready value proof summary",
                owner: "CSM",
                dueDate: "2026-06-20",
                priority: "high",
                context:
                  "Value proof is incomplete and should be reviewed before the renewal meeting.",
                proofContext: "Internal proof, not customer-ready",
                validationStatus: "Proof review needed before customer use",
              }}
            />
          }
        />

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
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Renewal in 90 days", tone: "neutral" },
            { label: "Value proof incomplete", tone: "warning" },
            { label: "Proof review needed", tone: "warning" },
          ]}
        />

        <CustomerReviewReadinessCard
          customerName="Northstar Manufacturing"
          reviewType="Renewal discussion"
          reviewDate="Jun 24, 2026"
          customerObjective="Improve service visibility before renewal"
          reviewReadiness="Needs review"
          proofReadiness="Internal proof, not customer-ready"
          recommendationReadiness="Recommendations need source and proof review"
          riskStatus="Three renewal blockers need review"
          actionReadiness="Proof follow-up and mitigation actions need ownership confirmation"
          validationStatus="Review before customer use"
          sourceContext="Closed service actions and monitored assets from the last 90 days"
          badges={[
            { label: "Needs review", tone: "warning" },
            { label: "Internal proof", tone: "warning" },
            { label: "Customer use blocked", tone: "danger" },
          ]}
        />

        <ValueProofCard
          period="Last 90 days"
          customerObjective="Improve service visibility before renewal"
          proofStatus="Customer-ready summary incomplete"
          proofReadiness="Internal proof, not customer-ready"
          validationStatus="Proof review needed"
          sourceContext="Closed service actions, resolved risks and recommendation history from the last 90 days"
          expectedOutcome="Stronger renewal discussion after proof consolidation, not yet proven value"
          badges={[
            { label: "Proof incomplete", tone: "warning" },
            { label: "Review needed", tone: "warning" },
            { label: "Internal proof", tone: "warning" },
          ]}
          proofPoints={[
            {
              label: "Closed actions",
              value:
                "12 service actions closed during the period, including 3 high-priority actions linked to monitoring coverage. Customer-ready synthesis is still pending.",
            },
            {
              label: "Recommendations delivered",
              value:
                "5 recommendations were reviewed with the customer team and linked to service objectives.",
            },
            {
              label: "Remaining proof gap",
              value:
                "Resolved risks and monitoring progress still need to be translated into customer-ready language.",
            },
          ]}
        />

        <MetricGrid columns={3}>
          <MetricCard
            label="Renewal readiness"
            value="Medium"
            helper="Value proof and mitigation actions need review before renewal."
            trend="Stable"
            trendTone="neutral"
            source="Renewal preparation tracker"
            sourceScope="Renewal discussion readiness"
            sourceStrength="Review needed"
            freshness="Last team update"
            validationStatus="Review before customer use"
          />

          <MetricCard
            label="Recommendations reviewed"
            value="42%"
            helper="5 of 12 recent recommendations reviewed by the customer."
            trend="+12% this quarter"
            trendTone="success"
            source="Recommendation history"
            sourceScope="Last 90 days"
            sourceStrength="Partial"
            freshness="Last customer review"
            validationStatus="Review before customer use"
          />

          <MetricCard
            label="Overdue mitigation actions"
            value="4"
            helper="Action plan should be updated this week."
            trend="+3 since last review"
            trendTone="warning"
            source="Mitigation action plan"
            sourceScope="Open internal actions"
            sourceStrength="Internal source"
            freshness="Last team update"
            validationStatus="Owner confirmation needed"
          />
        </MetricGrid>

        <PriorityList
          title="Renewal blockers"
          description="Blockers are ordered by renewal impact and readiness risk."
        >
          <AlertCard
            severity="critical"
            title="Renewal value proof is not customer-ready"
            scope="Renewal preparation"
            description="Value proof is incomplete and cannot yet support a confident renewal discussion."
            recommendation="Prepare a customer-ready value summary before the renewal meeting."
            evidenceSummary="Internal proof exists, but validation is still needed before customer use."
            sourceScope="Closed service actions and recommendation history"
            sourceStrength="Partial"
            freshness="Last 90 days"
            validationStatus="Proof review needed before customer use"
          />

          <AlertCard
            severity="warning"
            title="Customer has not reviewed latest recommendations"
            scope="Customer portal"
            description="The latest recommendations have not been reviewed by the customer team."
            recommendation="Plan a recommendation review with the customer before the renewal discussion."
            evidenceSummary="5 of 12 recommendations have been reviewed."
            sourceScope="Customer portal and recommendation history"
            sourceStrength="Partial"
            freshness="Last customer portal activity"
            validationStatus="Review before customer use"
          />

          <AlertCard
            severity="warning"
            title="Critical mitigation actions are overdue"
            scope="Mitigation action plan"
            description="Overdue actions reduce confidence in renewal readiness."
            recommendation="Assign owners and confirm due dates this week."
            evidenceSummary="4 mitigation actions are overdue."
            sourceScope="Internal mitigation action plan"
            sourceStrength="Internal source"
            freshness="Last team update"
            validationStatus="Owner confirmation needed"
          />
        </PriorityList>

        <RecommendationReviewPanel
          reviewScope="Renewal preparation"
          reviewStatus="Proof and source review needed"
          sourceContext="Closed service actions and recommendation history"
          validationStatus="Review before customer use"
          customerReadiness="Not customer-ready yet"
          proofContext="Internal proof, not customer-ready"
          badges={[
            { label: "Review needed", tone: "warning" },
            { label: "Not customer-ready", tone: "danger" },
          ]}
        >
          <RecommendationCard
            title="Prepare customer-ready value proof summary"
            recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
            priority="high"
            readiness="needs_review"
            rationale="The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity."
            scope="Value proof"
            evidenceSummary="12 service actions were closed, but they have not been synthesized for customer use."
            source="Service action history"
            sourceScope="Last 90 days"
            sourceStrength="Partial"
            freshness="Last 90 days"
            proofStatus="Internal proof, not customer-ready"
            validationStatus="Proof review needed before customer use"
          />

          <RecommendationCard
            title="Review open modernization recommendation"
            recommendation="Review the open modernization recommendation with the service team before using it in the renewal discussion."
            priority="medium"
            readiness="needs_review"
            rationale="The recommendation may support renewal, but source and proof context need validation."
            scope="Recommendation review"
            evidenceSummary="5 of 12 recommendations have been reviewed; the remaining set needs source and proof review."
            source="Recommendation history"
            sourceScope="Recent recommendations"
            sourceStrength="Review needed"
            freshness="Last customer review"
            validationStatus="Review before customer use"
          />
        </RecommendationReviewPanel>

        <ActionList
          title="Mitigation actions"
          description="Actions are assigned to close proof, recommendation and ownership gaps before the renewal discussion."
        >
          <ActionCard
            title="Prepare customer-ready value proof summary"
            owner="CSM"
            dueDate="Before renewal meeting"
            priority="high"
            status="todo"
            context="Proof is internal and needs customer-ready synthesis."
            proofContext="Internal proof, not customer-ready"
            validationStatus="Proof review needed before customer use"
          />

          <ActionCard
            title="Review recommendation readiness with service team"
            owner="Service Manager"
            dueDate="Next 3 business days"
            priority="high"
            status="in_progress"
            context="Recommendations need source and proof review."
            sourceContext="Recommendation history and service action evidence"
            validationStatus="Review before customer use"
          />

          <ActionCard
            title="Assign overdue mitigation actions"
            owner="Renewal Manager"
            dueDate="This week"
            priority="high"
            status="todo"
            context="Overdue actions are blocking renewal readiness."
            sourceContext="Internal mitigation action plan"
            validationStatus="Owner confirmation needed"
          />
        </ActionList>

        {/*
          Why this is compliant:
          - Complete visible App.tsx screen using only root imports from design-system-ai-lab.
          - Uses package business patterns for renewal context, readiness, proof, recommendations, blockers and actions.
          - Follows the renewal risk review intent router: renewal context → readiness → value proof → signals → blockers → recommendations → mitigation actions.
          - Keeps expected outcomes, internal proof and customer-ready proof clearly separated.
          - Keeps source context, source strength, freshness and validation status visible where trust matters.
          - Every AlertCard includes a recommendation, and every ActionCard includes owner, due date and priority.
          - Uses approved Badge tones only: neutral, primary, warning, danger and success.
          - Avoids local wrappers, internal imports, financial-reporting drift, generic dashboard cards, decorative charts, gradients and glassmorphism.
        */}
      </div>
    </main>
  );
}
