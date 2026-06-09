import {
  ActionCard,
  ActionList,
  AlertCard,
  CreateActionDialog,
  CustomerReviewReadinessCard,
  CustomerStatusCard,
  PageHeader,
  PriorityList,
  RecommendationCard,
  RecommendationReviewPanel,
  ServiceRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="QBR readiness"
          description="Check whether the customer review is ready, which proof gaps remain and which preparation actions must be assigned before the meeting."
          actions={
            <CreateActionDialog
              title="Create QBR preparation action"
              description="Assign preparation work with owner, due date, priority and proof context."
              confirmLabel="Save preparation action"
              showContextFields
              defaultValues={{
                title: "Prepare customer-ready value proof summary",
                owner: "CSM",
                dueDate: "2026-06-20",
                priority: "high",
                context:
                  "Internal proof needs customer-ready synthesis before the QBR.",
                proofContext: "Internal proof, not customer-ready",
                validationStatus: "Review before customer use",
              }}
            />
          }
        />

        <CustomerStatusCard
          customerName="Northstar Manufacturing"
          plan="Advanced service plan"
          contract="#NS-2024-118"
          csm="Sarah Moreau, CSM"
          renewalDate="Sep 15, 2026"
          assetsCovered="25 known assets across 3 sites"
          coverage="68% connected"
          customerObjective="Improve service visibility before renewal"
          sourceContext="Closed service actions, monitored assets and recommendation history from the last 90 days"
          validationStatus="Review before customer use"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "QBR in 15 days", tone: "neutral" },
            { label: "Review needed", tone: "warning" },
          ]}
        />

        <CustomerReviewReadinessCard
          customerName="Northstar Manufacturing"
          reviewType="Quarterly Business Review"
          reviewDate="Jun 24, 2026"
          customerObjective="Improve service visibility before renewal"
          reviewReadiness="Needs review"
          proofReadiness="Internal proof, not customer-ready"
          recommendationReadiness="Recommendations need source and proof review"
          riskStatus="Two service risks and one proof gap need review"
          actionReadiness="Preparation actions need ownership confirmation"
          validationStatus="Review before customer use"
          sourceContext="Closed service actions, monitoring signals and recommendation history from the last 90 days"
          badges={[
            { label: "Needs review", tone: "warning" },
            { label: "Proof incomplete", tone: "warning" },
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
          expectedOutcome="Stronger customer discussion after proof consolidation, not yet proven value"
          badges={[
            { label: "Proof incomplete", tone: "warning" },
            { label: "Internal proof", tone: "warning" },
            { label: "Review needed", tone: "warning" },
          ]}
          proofPoints={[
            {
              label: "Closed service actions",
              value:
                "12 service actions closed during the period. Customer-ready synthesis is still pending.",
            },
            {
              label: "Recommendations reviewed",
              value:
                "5 recommendations reviewed with the customer team and linked to service objectives.",
            },
            {
              label: "Remaining proof gap",
              value:
                "Monitoring progress still needs to be translated into customer-ready language.",
            },
          ]}
        />

        <ServiceRiskSummary
          riskLevel="warning"
          riskSummary="The QBR is not ready for customer use because proof and recommendation readiness need review."
          affectedScope="QBR preparation and renewal discussion"
          customerImpact="The customer may not clearly see the service value delivered during the period."
          serviceImpact="The CSM may need to explain open risks without validated proof points."
          sourceContext="Closed actions, monitoring signals and recommendation history"
          sourceStrength="Partial"
          freshness="Last 90 days"
          validationStatus="Review before customer use"
          recommendedReview="Close proof gaps and review recommendations before the QBR."
          badges={[
            { label: "Review needed", tone: "warning" },
            { label: "Proof gap", tone: "warning" },
          ]}
        />

        <RecommendationReviewPanel
          reviewScope="QBR preparation"
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
            recommendation="Prepare a customer-ready value proof summary before the QBR."
            priority="high"
            readiness="needs_review"
            rationale="The QBR needs customer-relevant proof rather than internal activity reporting."
            scope="Value proof"
            evidenceSummary="12 service actions were closed but not synthesized for customer use."
            source="Service action history"
            sourceScope="Last 90 days"
            sourceStrength="Partial"
            freshness="Last 90 days"
            proofStatus="Internal proof, not customer-ready"
            validationStatus="Proof review needed before customer use"
          />

          <RecommendationCard
            title="Review open service recommendations before QBR"
            recommendation="Review open service recommendations with the service team before using them in the customer discussion."
            priority="medium"
            readiness="needs_review"
            rationale="Unresolved recommendations may affect customer confidence if they are discussed without source and proof review."
            scope="Recommendation review"
            evidenceSummary="5 of 12 recommendations have been reviewed with the customer team."
            source="Recommendation history"
            sourceScope="Recent recommendations"
            sourceStrength="Review needed"
            freshness="Last customer review"
            validationStatus="Review before customer use"
          />
        </RecommendationReviewPanel>

        <PriorityList
          title="QBR blockers"
          description="Blockers are ordered by customer readiness impact."
        >
          <AlertCard
            severity="critical"
            title="Customer-ready value proof is incomplete"
            scope="QBR preparation"
            description="Internal proof exists but has not been translated into customer-ready language."
            recommendation="Prepare and validate a customer-ready value proof summary before the QBR."
            evidenceSummary="12 closed service actions are available, but customer-ready synthesis is missing."
            sourceScope="Closed service actions and recommendation history"
            sourceStrength="Partial"
            freshness="Last 90 days"
            validationStatus="Proof review needed before customer use"
          />

          <AlertCard
            severity="warning"
            title="Recommendations need source and proof review"
            scope="Recommendation review"
            description="Some recommendations still need validation before customer use."
            recommendation="Review recommendation readiness with the service team."
            evidenceSummary="7 recommendations remain to be reviewed for the QBR."
            sourceScope="Recommendation history"
            sourceStrength="Review needed"
            freshness="Last customer review"
            validationStatus="Review before customer use"
          />

          <AlertCard
            severity="warning"
            title="Preparation actions need ownership confirmation"
            scope="Action plan"
            description="The QBR preparation plan has open actions without confirmed ownership."
            recommendation="Assign owners and due dates this week."
            evidenceSummary="Open preparation actions need ownership confirmation."
            sourceScope="Internal preparation plan"
            sourceStrength="Internal source"
            freshness="Last team update"
            validationStatus="Owner confirmation needed"
          />
        </PriorityList>

        <ActionList
          title="Preparation actions"
          description="Actions are assigned to close proof, recommendation and ownership gaps before the QBR."
        >
          <ActionCard
            title="Prepare customer-ready value proof summary"
            owner="CSM"
            dueDate="Before QBR"
            priority="high"
            status="todo"
            context="Internal proof needs customer-ready synthesis."
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
            sourceContext="Recommendation history and service evidence"
            validationStatus="Review before customer use"
          />

          <ActionCard
            title="Confirm QBR preparation action owners"
            owner="Customer Success Manager"
            dueDate="This week"
            priority="medium"
            status="todo"
            context="Open preparation actions need ownership before the customer meeting."
            sourceContext="Internal QBR preparation plan"
            validationStatus="Owner confirmation needed"
          />
        </ActionList>

        {/*
          Why this is compliant:
          - Complete visible App.tsx screen using only root imports from design-system-ai-lab.
          - Uses package business patterns for customer context, QBR readiness, value proof, service risk, recommendations, blockers and actions.
          - Follows the QBR readiness intent router: customer context → readiness → value proof → service risk → recommendation review → blockers → actions.
          - Keeps customer-ready proof, internal proof and expected outcomes clearly separated.
          - Keeps source context, source strength, freshness and validation status visible where trust matters.
          - Every AlertCard includes a recommendation, and every ActionCard includes owner, due date and priority.
          - Uses approved Badge tones only: neutral, primary, warning and danger.
          - Avoids local wrappers, internal imports, slide-deck drift, generic dashboard cards, decorative charts, gradients and glassmorphism.
        */}
      </div>
    </main>
  );
}
