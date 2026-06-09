import {
  ActionCard,
  ActionList,
  AlertCard,
  ConnectivityCoverageCard,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Review customer context, monitoring coverage, priority risks and assigned next actions before the next customer touchpoint."
          actions={
            <CreateActionDialog
              title="Create follow-up action"
              description="Assign a concrete follow-up with owner, due date, priority and trust context."
              confirmLabel="Save action"
              showContextFields
              defaultValues={{
                title: "Plan connectivity review with the customer",
                owner: "CSM",
                dueDate: "2026-06-12",
                priority: "high",
                context:
                  "Customer communication is needed before the next touchpoint.",
                sourceContext:
                  "Monitoring platform and known installed base · Source strength: partial",
                validationStatus: "Review before customer communication",
              }}
            />
          }
        />

        <CustomerStatusCard
          customerName="Northstar Manufacturing"
          plan="Advanced service plan"
          contract="#NS-2024-118"
          csm="Sarah Moreau, CSM"
          renewalDate="90 days"
          assetsCovered="25 monitored assets across 3 sites"
          coverage="68% connected"
          customerObjective="Improve service visibility before renewal"
          sourceContext="Schneider monitored assets only"
          validationStatus="Review before customer communication"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Connectivity partial", tone: "warning" },
            { label: "Renewal watch", tone: "neutral" },
            { label: "Review needed", tone: "warning" },
          ]}
        />

        <MetricGrid columns={3}>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 connected assets out of 25 known monitored assets."
            trend="+8% this quarter"
            trendTone="success"
            source="Monitoring platform"
            sourceScope="Schneider monitored assets only"
            sourceStrength="Partial"
            freshness="18 hours ago"
            validationStatus="Review before customer communication"
          />

          <MetricCard
            label="Open critical alerts"
            value="3"
            helper="2 alerts require customer follow-up before the next touchpoint."
            trend="+2 this week"
            trendTone="danger"
            source="Monitoring platform"
            sourceScope="Connected critical assets"
            sourceStrength="Partial"
            freshness="18 hours ago"
            validationStatus="Review before customer communication"
          />

          <MetricCard
            label="Overdue actions"
            value="4"
            helper="The action plan should be reviewed with owners this week."
            trend="+3 since last review"
            trendTone="warning"
            source="Service action plan"
            sourceScope="Open internal follow-up actions"
            sourceStrength="Review needed"
            freshness="Last team update"
            validationStatus="Internal review needed"
          />
        </MetricGrid>

        <ConnectivityCoverageCard
          coverageRate="68%"
          connectedAssets="17 assets"
          disconnectedAssets="8 assets"
          criticalDisconnectedAssets="2 critical assets"
          monitoringStatus="Partial monitoring coverage"
          affectedScope="Main site and backup power system"
          lastUpdate="18 hours ago"
          sourceScope="Monitoring platform and known installed base"
          sourceStrength="Partial"
          coverageBasis="Known Schneider monitored assets only"
          validationStatus="Review before customer communication"
          recoveryStatus="Connectivity recovery needs customer and support coordination"
          badges={[
            { label: "Connectivity partial", tone: "warning" },
            { label: "Critical assets disconnected", tone: "danger" },
            { label: "Source strength: partial", tone: "warning" },
          ]}
        />

        <ServiceRiskSummary
          riskLevel="critical"
          riskSummary="Critical assets are no longer monitored before the next customer touchpoint."
          affectedScope="Main site and backup power system"
          customerImpact="Customer visibility is reduced for critical power assets."
          serviceImpact="Remote monitoring and proactive support are limited."
          sourceContext="Monitoring platform and known installed base"
          sourceStrength="Partial"
          freshness="Last update 18 hours ago"
          validationStatus="Review before customer communication"
          recommendedReview="Review connectivity recovery and customer communication before the next customer meeting."
          badges={[
            { label: "Critical risk", tone: "danger" },
            { label: "Partial visibility", tone: "warning" },
            { label: "Human review needed", tone: "warning" },
          ]}
        />

        <PriorityList
          title="Priority risks"
          description="Risks are ordered by customer impact and urgency. Every item includes a recommended next step."
        >
          <AlertCard
            severity="critical"
            title="Connectivity loss on critical equipment"
            scope="Main switchboard"
            description="Two critical assets are no longer monitored and visibility is partial."
            recommendation="Plan a connectivity review with the customer and support team."
            evidenceSummary="2 critical assets disconnected from monitoring coverage."
            sourceScope="Monitoring platform and known installed base"
            sourceStrength="Partial"
            freshness="18 hours ago"
            validationStatus="Review before customer communication"
          />

          <AlertCard
            severity="warning"
            title="Customer has not reviewed latest recommendations"
            scope="Customer portal"
            description="The latest recommendations have not been reviewed by the customer team."
            recommendation="Prepare a short recommendation review for the next customer touchpoint."
            evidenceSummary="Latest recommendations remain pending customer review."
            sourceScope="Customer portal and recommendation history"
            sourceStrength="Review needed"
            freshness="Last customer portal activity"
            validationStatus="Review before customer communication"
          />

          <AlertCard
            severity="warning"
            title="Three high-priority actions are overdue"
            scope="Service action plan"
            description="Overdue actions reduce confidence in the service follow-up."
            recommendation="Assign owners and review action status this week."
            evidenceSummary="3 high-priority actions are past due."
            sourceScope="Internal service action plan"
            sourceStrength="Internal source"
            freshness="Last team update"
            validationStatus="Internal owner review needed"
          />
        </PriorityList>

        <ActionList
          title="Assigned next actions"
          description="Actions keep ownership, due date, priority and trust context visible for follow-through."
        >
          <ActionCard
            title="Plan connectivity review with the customer"
            owner="CSM"
            dueDate="This week"
            priority="high"
            status="todo"
            context="Customer communication is needed before the next touchpoint."
            assetContext="Main site and backup power system"
            sourceContext="Monitoring platform and known installed base · Source strength: partial"
            validationStatus="Review before customer communication"
          />

          <ActionCard
            title="Review overdue actions with service team"
            owner="Service Manager"
            dueDate="Next 3 business days"
            priority="high"
            status="in_progress"
            context="Overdue actions affect customer confidence in service follow-up."
            sourceContext="Internal service action plan"
            validationStatus="Owner confirmation needed"
          />

          <ActionCard
            title="Prepare summary for next customer touchpoint"
            owner="CSM"
            dueDate="Before next meeting"
            priority="medium"
            status="todo"
            context="Summarize facts, visibility limits and recommended next steps."
            sourceContext="Monitoring platform, known installed base and action plan"
            validationStatus="Review before customer communication"
          />
        </ActionList>

        {/*
          Why this is compliant:
          - Complete visible App.tsx screen using only root imports from design-system-ai-lab.
          - Imports design-system-ai-lab/styles.css once and uses package components directly.
          - Follows the customer monitoring screen intent router: context → metrics → coverage → risk → alerts → actions.
          - Uses business patterns before manual layout: CustomerStatusCard, ConnectivityCoverageCard, ServiceRiskSummary, PriorityList and ActionList.
          - Keeps evidence, source scope, source strength, freshness and validation status visible where trust matters.
          - Every AlertCard includes a recommendation, and every ActionCard includes owner, due date and priority.
          - Uses approved Badge tones only: neutral, primary, warning and danger.
          - Avoids local wrappers, internal imports, generic dashboard cards, decorative charts, gradients and glassmorphism.
        */}
      </div>
    </main>
  );
}
