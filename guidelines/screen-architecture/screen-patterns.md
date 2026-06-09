# Screen patterns

## Purpose

Screen patterns are concrete screen recipes for Figma Make.

They describe complete screen types, expected content, recommended architecture, component sequence and business patterns.

The goal is not to generate a generic dashboard.

The goal is to generate a screen that supports a clear user task, a documented user need, a clear decision and a clear next action.

---

## Core principle

A screen pattern should support a specific user task.

Do not generate a generic dashboard when a more precise screen pattern fits.

Every screen should help the user answer:

```txt
What is happening?
Why does it matter?
What can I trust?
What should I do next?
What is observed, what is interpreted and what still needs validation?
```

---

## Pattern 1 — Customer monitoring screen

Use when the prompt asks for:

```txt
customer monitoring
customer health
service monitoring
operational account overview
Customer Success Manager workspace
```

User goal:

```txt
Understand current customer status, identify priority risks, understand what can be trusted and decide next actions.
```

Focused structure:

```txt
PageHeader
CustomerStatusCard
MetricGrid with MetricCard items
ConnectivityCoverageCard when monitoring coverage matters
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog
```

Workspace structure when there are multiple customers, sites, assets or risks:

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
  customer, site, risk or asset list
  DetailPanel
    context
    evidence
    risks
    actions
```

Trust rules:

```txt
show visible facts before risks and actions
show freshness when monitoring data may be outdated
show scope and coverage limits when visibility is partial
show source strength when it affects trust
never imply full system visibility when only connected assets are represented
```

---

## Pattern 2 — Renewal risk review screen

Use when the prompt asks for:

```txt
renewal risk review
renewal preparation
churn risk
account renewal
risk mitigation before renewal
```

User goal:

```txt
Understand renewal risk, identify missing value proof, understand whether proof is customer-ready and launch mitigation actions.
```

Focused structure:

```txt
PageHeader
RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog
```

Workspace structure when there are multiple blockers:

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
  blocker or account queue
  DetailPanel
    renewal context
    proof gaps
    risks
    recommendations
    actions
```

Trust rules:

```txt
do not invent value proof
make proof gaps visible
keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinct
show customer-ready status before external communication
```

---

## Pattern 3 — Asset recommendation review screen

Use when the prompt asks for:

```txt
asset recommendation review
asset intelligence
installed base review
recommendation validation
customer-ready recommendation preparation
```

User goal:

```txt
Decide whether an asset recommendation is ready for action or customer communication.
```

Preferred workspace structure:

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
  asset or recommendation list
  DetailPanel
    DetailPanelHeader
    DetailPanelTabs
      Overview
      Health
      Intelligence
      History
      Documents
    DetailPanelFooter or StickyActionBar
```

Trust rules:

```txt
separate source-system facts, Health facts and Intelligence interpretation
show connectivity and source scope
show freshness when timing matters
show validation status before customer communication
do not present non-connected assets as live-monitored
do not invent benchmark values, telemetry or asset hierarchy
```

---

## Pattern 4 — QBR readiness screen

Use when the prompt asks for:

```txt
QBR preparation
customer review readiness
value proof review
customer-ready discussion
```

User goal:

```txt
Decide whether the customer review is ready or which proof and recommendation gaps must be closed first.
```

Focused structure:

```txt
PageHeader
CustomerStatusCard
CustomerReviewReadinessCard
ValueProofCard
ServiceRiskSummary when risk affects readiness
RecommendationReviewPanel when recommendations need review
PriorityList
ActionList
CreateActionDialog
```

Workspace or two-column structure when proof and recommendation gaps are numerous:

```txt
WorkspaceShell
TwoColumnLayout or MasterDetailLayout
  readiness summary
  proof gaps
  recommendation review
  actions
```

Trust rules:

```txt
customer-ready proof must be clearly distinguished from internal proof
expected outcomes are not proven value
unresolved risks should not be hidden behind a readiness score
```

---

## Pattern 5 — Connectivity review screen

Use when the prompt asks for:

```txt
connectivity review
monitoring coverage
coverage gap
critical disconnected assets
```

Structure:

```txt
PageHeader
CustomerStatusCard when customer context is needed
ConnectivityCoverageCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog
```

If assets need item-by-item review, use a workspace screen with a list and DetailPanel.

Rules:

```txt
show freshness
show source and coverage limits
show connected, partially connected and non-connected assets in text
never use GenAI to count connected or disconnected assets
```

---

## Pattern 6 — Value proof preparation screen

Use when the prompt asks for:

```txt
value proof
proof preparation
customer-ready value
renewal value evidence
```

Structure:

```txt
PageHeader
CustomerStatusCard or RenewalRiskSummary when context is needed
ValueProofCard or proof section
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog
```

Rules:

```txt
proof points must be grounded
show proof gaps
keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinct
do not invent proof points, sources or citations
```

---

## General anti-patterns

Avoid:

```txt
generic dashboard when a screen pattern fits
one-column card stack for workspace tasks
AI recommendation before evidence
actions without owner, due date or priority
proof claims without source or validation
metrics that do not support the decision
```

---

## Acceptance criteria

A screen pattern is successful when:

```txt
it supports a specific user task
it uses the right screen architecture
it maps to a clear user decision
it makes facts and trust limits visible
it avoids unsupported AI and proof claims
it ends with owned next actions
```
