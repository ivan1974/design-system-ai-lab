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

export function CustomerDashboard() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, identify priority risks and decide the next best actions."
          actions={
            <CreateActionDialog
              trigger={<Button>Create action</Button>}
              title="Create customer action"
              description="Add a follow-up action with an owner, due date and priority."
              confirmLabel="Save action"
              defaultValues={{
                title: "Plan connectivity review with the customer",
                owner: "CSM",
                priority: "high",
                note: "Connectivity is partial and affects critical assets. The customer should be informed before the next review.",
              }}
            />
          }
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
            { label: "Renewal in 62 days", tone: "neutral" },
          ]}
          extraItems={[
            { label: "Main contact", value: "Maintenance Director" },
            { label: "Next review", value: "Jun 24, 2026" },
          ]}
        />

        <MetricGrid columns={4}>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 of 25 assets monitored — 8 assets unreachable"
            trend="-12% this month"
          />
          <MetricCard
            label="Open critical alerts"
            value="2"
            helper="Both require customer communication this week"
          />
          <MetricCard
            label="Overdue actions"
            value="3"
            helper="High-priority actions with no owner update"
            trend="+3 since last review"
          />
          <MetricCard
            label="Recommendations reviewed"
            value="42%"
            helper="5 of 12 recommendations reviewed by the customer"
          />
        </MetricGrid>

        <section className="grid gap-6 lg:grid-cols-2">
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
            ]}
          />
        </section>

        <ValueProofCard
          period="Last 90 days"
          customerObjective="Improve service visibility before renewal"
          proofStatus="Customer-ready summary incomplete"
          badges={[
            { label: "Renewal support", tone: "warning" },
            { label: "Proof incomplete", tone: "danger" },
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
              value: "5 recommendations completed and ready to summarize for the next customer review.",
            },
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <PriorityList
            title="Priority alerts"
            description="Risks requiring customer or service team action, sorted by severity."
          >
            <AlertCard
              severity="critical"
              title="Critical equipment no longer monitored"
              equipment="Main HVAC control unit — Site A"
              description="The main HVAC control unit lost connectivity 18 hours ago. The customer has no visibility on temperature and pressure anomalies for their primary site."
              recommendation="Escalate to the support team today and schedule a technical review within 48 hours. Notify the customer proactively before they detect the gap."
            />

            <AlertCard
              severity="warning"
              title="Renewal value proof not ready"
              equipment="Renewal preparation — Contract #CR-2024-441"
              description="The contract renews in 62 days. The customer has not received a service summary, and resolved incidents are not yet compiled into a customer-ready view."
              recommendation="Prepare a value summary showing closed alerts, avoided downtime and completed actions before the next customer meeting."
            />

            <AlertCard
              severity="warning"
              title="Three high-priority actions are overdue"
              equipment="Customer action plan"
              description="Three actions flagged as high priority have passed their due date with no owner update. This increases customer trust risk ahead of the next review."
              recommendation="Assign clear owners to each overdue action, set revised due dates and communicate the updated plan to the customer this week."
            />
          </PriorityList>

          <ActionList
            title="Recommended actions"
            description="Next steps to reduce customer risk and prepare the next discussion."
            actions={<Button variant="secondary">Review plan</Button>}
          >
            <ActionCard
              title="Plan connectivity review with the customer"
              owner="CSM"
              dueDate="Jun 6, 2026"
              priority="high"
            />

            <ActionCard
              title="Prepare customer-ready value proof summary"
              owner="CSM"
              dueDate="Jun 14, 2026"
              priority="high"
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

export { CustomerDashboard as CustomerMonitoringDashboard };