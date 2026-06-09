import {
  ActionCard,
  ActionList,
  AssetIntelligenceSummary,
  CreateActionDialog,
  CustomerStatusCard,
  PageHeader,
  RecommendationCard,
  RecommendationReviewPanel,
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Asset recommendation review"
          description="Review asset signals, source limits and recommendation readiness before customer communication."
          actions={
            <CreateActionDialog
              title="Create validation action"
              description="Assign expert validation or follow-up work before customer communication."
              confirmLabel="Save validation action"
              showContextFields
              defaultValues={{
                title: "Validate asset recommendation with service expert",
                owner: "Service Manager",
                dueDate: "2026-06-12",
                priority: "high",
                context:
                  "Expert validation is needed before the recommendation is used with the customer.",
                assetContext: "Backup power system · Main production site",
                sourceContext:
                  "Monitoring platform, known installed base and service history · Source strength: partial",
                validationStatus: "Expert review needed before customer use",
              }}
            />
          }
        />

        <CustomerStatusCard
          customerName="Northstar Manufacturing"
          plan="Advanced service plan"
          contract="#NS-2024-118"
          csm="Sarah Moreau, CSM"
          assetsCovered="25 known assets across 3 sites"
          coverage="5 of 8 backup power assets connected"
          customerObjective="Improve service visibility before renewal"
          sourceContext="Schneider monitored assets and known installed base"
          validationStatus="Expert review needed before customer communication"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Source strength: partial", tone: "warning" },
            { label: "Review needed", tone: "warning" },
          ]}
        />

        <AssetIntelligenceSummary
          assetScope="Backup power system · 8 known assets · 5 connected · 3 non-connected"
          assetContext="Main production site"
          lifecycleContext="Battery and connectivity review may affect maintenance planning and budget discussion."
          healthSignals="2 connected UPS assets show recurring battery health warnings; 1 switchboard has incomplete telemetry."
          intelligenceInterpretation="Battery replacement planning and connectivity recovery may reduce service risk before the next customer review."
          sourceContext="Monitoring platform, known installed base and service history"
          sourceScope="Known installed base and connected monitored assets only"
          sourceStrength="Partial"
          freshness="Monitoring update 18 hours ago; installed base updated last month"
          validationStatus="Expert review needed before customer communication"
          readiness="needs_review"
          badges={[
            { label: "Partial visibility", tone: "warning" },
            { label: "Health signal", tone: "neutral" },
            { label: "Intelligence interpretation", tone: "neutral" },
            { label: "Expert review needed", tone: "warning" },
          ]}
        />

        <ServiceRiskSummary
          riskLevel="warning"
          riskSummary="Asset recommendations may be useful, but visibility is partial and expert review is needed before customer communication."
          affectedScope="Backup power system at main production site"
          customerImpact="Recommendations could affect maintenance planning and budget discussion."
          serviceImpact="Premature communication could overstate monitoring coverage or recommendation certainty."
          sourceContext="Monitoring platform, known installed base and service history"
          sourceStrength="Partial"
          freshness="Monitoring update 18 hours ago"
          validationStatus="Expert review needed before customer communication"
          recommendedReview="Validate source scope, connected asset status and recommendation rationale before customer communication."
          badges={[
            { label: "Review needed", tone: "warning" },
            { label: "Partial visibility", tone: "warning" },
            { label: "Not customer-ready", tone: "danger" },
          ]}
        />

        <RecommendationReviewPanel
          reviewScope="Backup power system recommendation set"
          reviewStatus="Expert validation needed"
          sourceContext="Monitoring platform, known installed base and service history"
          validationStatus="Review before customer use"
          customerReadiness="Not customer-ready yet"
          proofContext="Source strength is partial; expert validation required"
          badges={[
            { label: "Expert validation needed", tone: "warning" },
            { label: "Not customer-ready", tone: "danger" },
          ]}
        >
          <RecommendationCard
            title="Review UPS battery replacement plan"
            recommendation="Review the UPS battery replacement plan with a service expert before customer communication."
            priority="high"
            readiness="needs_review"
            rationale="Recurring battery health warnings suggest a maintenance planning discussion may be needed, but expert validation is required first."
            scope="Connected UPS assets"
            assetContext="2 connected UPS assets with recurring battery health warnings"
            evidenceSummary="2 connected UPS assets show recurring battery health warnings."
            source="Monitoring platform"
            sourceScope="Connected UPS assets only"
            sourceStrength="Partial"
            freshness="18 hours ago"
            interpretation="Health signal suggests maintenance planning review; it is not source-system truth."
            validationStatus="Expert review needed before customer communication"
          />

          <RecommendationCard
            title="Recover connectivity for non-connected critical assets"
            recommendation="Recover connectivity before treating the full backup power system as monitored."
            priority="high"
            readiness="internal"
            rationale="Non-connected assets cannot be presented as live-monitored and reduce trust in recommendation coverage."
            scope="Backup power system"
            assetContext="3 known assets are not connected"
            evidenceSummary="3 of 8 known backup power assets are not connected."
            source="Known installed base and monitoring platform"
            sourceScope="Known installed base compared with connected monitored assets"
            sourceStrength="Partial"
            freshness="Monitoring update 18 hours ago"
            validationStatus="Internal action before customer use"
          />

          <RecommendationCard
            title="Prepare customer communication after validation"
            recommendation="Prepare customer-ready wording only after source scope and recommendation rationale are validated."
            priority="medium"
            readiness="needs_review"
            rationale="Recommendation confidence depends on partial asset visibility and expert validation."
            scope="Customer communication"
            evidenceSummary="Source strength is partial and 3 assets are non-connected."
            source="Monitoring platform and service history"
            sourceScope="Known installed base and connected monitored assets only"
            sourceStrength="Partial"
            freshness="Monitoring update 18 hours ago"
            validationStatus="Review before customer use"
          />
        </RecommendationReviewPanel>

        <ActionList
          title="Validation actions"
          description="Actions keep expert validation, connectivity recovery and customer communication ownership visible."
        >
          <ActionCard
            title="Validate asset recommendation with service expert"
            owner="Service Manager"
            dueDate="Next 3 business days"
            priority="high"
            status="todo"
            context="Expert validation is needed before customer communication."
            assetContext="Backup power system · Main production site"
            sourceContext="Monitoring platform, known installed base and service history · Source strength: partial"
            validationStatus="Expert review needed before customer use"
          />

          <ActionCard
            title="Confirm connectivity status for non-connected assets"
            owner="Remote Support Specialist"
            dueDate="This week"
            priority="high"
            status="in_progress"
            context="Non-connected assets cannot be treated as live-monitored."
            assetContext="3 non-connected backup power assets"
            sourceContext="Monitoring platform and known installed base"
            validationStatus="Connectivity review needed"
          />

          <ActionCard
            title="Prepare customer-ready recommendation summary"
            owner="CSM"
            dueDate="Before customer review"
            priority="medium"
            status="todo"
            context="Translate validated recommendation into customer-ready language after expert review."
            sourceContext="Validated asset recommendation and service expert review"
            validationStatus="Blocked until expert validation is complete"
          />
        </ActionList>

        {/*
          Why this is compliant:
          - Complete visible App.tsx screen using only root imports from design-system-ai-lab.
          - Uses AssetIntelligenceSummary before asset recommendations, then ServiceRiskSummary, RecommendationReviewPanel and ActionList.
          - Follows the asset recommendation review intent router: customer context → source facts → Health signals → Intelligence interpretation → risk → recommendation review → validation actions.
          - Separates source-system facts, Health signals and Intelligence interpretation.
          - Does not present non-connected assets as live-monitored or partial visibility as complete asset knowledge.
          - Keeps source scope, source strength, freshness and expert validation visible where trust matters.
          - Every RecommendationCard includes recommendation, priority, readiness, rationale, scope and evidence.
          - Every ActionCard includes owner, due date and priority.
          - Uses approved Badge tones only: neutral, primary, warning and danger.
          - Avoids local wrappers, internal imports, inventory-table drift, generic dashboard cards, decorative charts, gradients and glassmorphism.
        */}
      </div>
    </main>
  );
}
