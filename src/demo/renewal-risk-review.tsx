import {
  ActionCard,
  ActionList,
  AlertCard,
  Button,
  ConnectivityCoverageCard,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  RenewalRiskSummary,
  ValueProofCard,
} from "../design-system";

export function RenewalRiskReview() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Renewal risk review"
          description="Review renewal exposure, value proof gaps and mitigation actions before the customer discussion."
          actions={
            <CreateActionDialog
              trigger={<Button>Create mitigation action</Button>}
              title="Create mitigation action"
              description="Add an action to reduce renewal risk before the customer meeting."
              confirmLabel="Save mitigation action"
              defaultValues={{
                title: "Prepare customer-ready value proof summary",
                owner: "CSM",
                priority: "high",
                note: "Renewal risk is increasing because value proof is incomplete and several actions are overdue.",
              }}
            />
          }
        />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
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
            badges={[
              { label: "Renewal watch", tone: "warning" },
              { label: "Value proof incomplete", tone: "danger" },
              { label: "Mitigation required", tone: "primary" },
            ]}
            extraItems={[
              { label: "Executive sponsor", value: "Maintenance Director" },
              { label: "Next customer review", value: "Jun 24, 2026" },
            ]}
          />

          <CustomerStatusCard
            customerName="Greenfield Industries"
            plan="Advanced service plan"
            contract="#CR-2024-441"
            csm="Sarah Moreau"
            renewalDate="Aug 5, 2026"
            assetsCovered="25 assets — 3 sites"
            coverage="68% connected"
            badges={[
              { label: "Active plan", tone: "primary" },
              { label: "Connectivity partial", tone: "warning" },
            ]}
          />
        </section>

        <MetricGrid columns={4}>
          <MetricCard
            label="Renewal readiness"
            value="Medium"
            helper="Value proof and action ownership need consolidation"
          />
          <MetricCard
            label="Recommendations reviewed"
            value="42%"
            helper="5 of 12 recommendations reviewed by the customer"
          />
          <MetricCard
            label="Overdue actions"
            value="3"
            helper="High-priority actions with no owner update"
            trend="+3 since last review"
          />
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 of 25 assets monitored"
            trend="-12% this month"
          />
        </MetricGrid>

        <section className="grid gap-6 lg:grid-cols-2">
          <ValueProofCard
            period="Last 90 days"
            customerObjective="Make service value visible before renewal"
            proofStatus="Customer-ready summary incomplete"
            badges={[
              { label: "Proof gap", tone: "danger" },
              { label: "Renewal support", tone: "warning" },
            ]}
            proofPoints={[
              {
                label: "Closed actions",
                value: "12 service actions closed, including 3 high-priority actions.",
              },
              {
                label: "Resolved connectivity issues",
                value: "4 disconnected assets recovered across the main site.",
              },
              {
                label: "Recommendations completed",
                value: "5 recommendations completed but not yet summarized in a customer-ready format.",
              },
            ]}
          />

          <ConnectivityCoverageCard
            customerName="Greenfield Industries"
            coverageRate="68%"
            connectedAssets="17 of 25 assets"
            disconnectedAssets="8 assets"
            criticalDisconnectedAssets="2 critical assets"
            monitoringStatus="Partial connectivity"
            affectedScope="Main site and HVAC control unit"
            lastUpdate="18 hours ago"
            badges={[
              { label: "Connectivity partial", tone: "warning" },
              { label: "Critical assets disconnected", tone: "danger" },
            ]}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <PriorityList
            title="Renewal blockers"
            description="Risks prioritized by potential impact on the renewal decision."
          >
            <AlertCard
              severity="critical"
              title="Value proof is not customer-ready"
              equipment="Renewal preparation"
              description="Closed actions, resolved incidents and monitoring outcomes exist, but they are not yet compiled into a clear customer-facing value summary."
              recommendation="Prepare a concise value proof summary linking completed actions, avoided risks and recommended next steps before the next customer meeting."
            />

            <AlertCard
              severity="warning"
              title="Connectivity gaps weaken the service proof"
              equipment="Monitoring coverage"
              description="Eight assets are currently unreachable, including two critical assets. This limits the credibility of the monitoring story before renewal."
              recommendation="Launch a connectivity recovery review and clarify which gaps require customer-side network action."
            />

            <AlertCard
              severity="warning"
              title="Low recommendation review rate"
              equipment="Service recommendations"
              description="Only 42% of recommendations have been reviewed by the customer, which may reduce the perceived usefulness of the service."
              recommendation="Select the three most relevant recommendations and prepare a short decision-oriented summary for the customer."
            />
          </PriorityList>

          <ActionList
            title="Mitigation actions"
            description="Recommended actions to reduce renewal risk before the next customer discussion."
            actions={<Button variant="secondary">Review mitigation plan</Button>}
          >
            <ActionCard
              title="Prepare customer-ready value proof summary"
              owner="CSM"
              dueDate="Jun 14, 2026"
              priority="high"
            />

            <ActionCard
              title="Plan connectivity recovery review"
              owner="Support Team"
              dueDate="Jun 10, 2026"
              priority="high"
            />

            <ActionCard
              title="Select top recommendations for the customer discussion"
              owner="CSM"
              dueDate="Jun 18, 2026"
              priority="medium"
            />

            <ActionCard
              title="Assign owners to overdue actions"
              owner="Service Manager"
              dueDate="This week"
              priority="medium"
            />
          </ActionList>
        </section>
      </div>
    </main>
  );
}

export { RenewalRiskReview as GeneratedRenewalRiskReview };