# Evidence and Trust Principles

## Purpose

Evidence and trust are baseline requirements for generated interfaces.

This principle is informed by the knowledge layer, especially recurring user
needs around confidence, data quality, partial visibility, value proof, asset
intelligence and knowing what to do next.

A generated screen should help the user understand what is known, what is
inferred, what is recommended and what still needs validation.

A generated screen should not make weak, outdated or incomplete information look
certain.

A generated screen should not present recommendations without visible or
auditable evidence.

Figma Make should generate interfaces that make facts, sources, freshness,
uncertainty and responsibility easier to understand.

Refer to the knowledge layer when the screen relates to known service
experience needs:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Trust is not created by confident wording.

Trust is created by clear evidence, transparent limits and appropriate human
validation.

---

## Core principle

Separate five types of content:

```txt
Observed facts
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ human validation when needed
```

For asset-heavy screens, use a more explicit evidence flow:

```txt
Asset context
→ connectivity and source scope
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or value proof status
→ human validation when needed
```

Do not mix these layers into one confident statement.

Preferred:

```txt
Fact: 8 known monitored assets are disconnected.
Scope: monitored Schneider assets only.
Signal: Monitoring coverage is partial.
Recommendation: Plan a connectivity review.
Owned action: CSM validates and assigns the recovery owner.
```

Avoid:

```txt
The customer is at risk and must be contacted immediately.
```

The second statement may be directionally useful, but it hides the evidence,
assumption and validation step.

---

## Knowledge-informed trust

Evidence and trust rules should be applied when they support a real user need.

The knowledge layer identifies recurring needs such as:

- understanding the current situation quickly
- trusting the information being shown
- seeing what matters most
- understanding why a signal matters
- knowing what to do next
- understanding coverage and visibility limits
- understanding asset scope and installed base limits
- distinguishing raw Health data from Intelligence interpretation
- distinguishing expected outcomes from proven value
- seeing value proof over time
- understanding unresolved questions and gaps
- keeping human accountability visible

---

## Asset intelligence trust

Use `knowledge/asset-intelligence.md` when a screen involves installed base,
asset health, connectivity coverage, lifecycle modernization, asset
recommendations or value proof linked to assets.

Asset-heavy screens must make clear:

- which asset, asset group, room, zone or site is represented
- whether the scope is complete or partial
- whether assets are connected, partially connected or non-connected
- which source supports the signal
- whether the content is raw Health data or interpreted Intelligence
- whether outcomes are expected or already proven
- whether proof is internal-only, draft, needs validation or customer-ready

Trust in asset intelligence depends on asset scope, connectivity status, source
scope and evidence strength.

Asset-heavy screens should keep this distinction visible:

```txt
Health = raw observed data, source-system facts, telemetry, statuses, lifecycle facts
Intelligence = interpretation, risk, opportunity, recommendation, action plan, expected outcome
```

Do not imply full visibility when only a subset of assets is monitored.

Do not present non-connected assets as live-monitored.

Do not present expected outcomes as proven value.

---

These needs should influence what evidence is shown, where it appears and how
strongly a recommendation is worded.

Do not add evidence for decoration.

Show the evidence that helps the user review the situation and decide what to
do next.

Current evidence status of the knowledge layer:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Do not treat open questions as fully validated product standards.

If a recommendation depends on an unresolved assumption, make the limitation
visible through wording, review state or a follow-up action.

---

## Facts before interpretation

Show structured facts before interpretation.

Use components and patterns such as:

- `CustomerStatusCard`
- `ConnectivityCoverageCard`
- `RenewalRiskSummary`
- `ValueProofCard`
- `StatusSummary`
- `MetricGrid`
- `MetricCard`

Then show risks, recommendations and actions.

Preferred flow:

```txt
Visible facts
→ interpreted risk
→ evidence-aware recommendation
→ owned action
→ human validation when needed
```

Avoid:

```txt
Recommendation first
→ evidence hidden or missing
```

Users should be able to understand why a recommendation exists.

This supports the research-backed need to answer four questions:

```txt
What is happening?
Why does it matter?
What can I trust?
What should I do next?
```

---

## Source visibility

Important facts should be traceable to a source, directly or indirectly.

Generated screens should make source context visible when it affects trust.

Useful source indicators include:

- source system
- last update
- data owner
- review state
- confidence or completeness state
- source freshness
- validation status
- source scope
- coverage limits
- proof status

Examples:

```txt
Last update: 18 hours ago
Source: Monitoring platform
Contract data requires review
Customer proof summary: Draft
Human review required
```

Do not invent source names.

Do not generate fake citations.

Do not imply a source exists if the screen does not provide one.

---

## Freshness rules

Freshness matters when users make operational, customer, renewal or service
follow-up decisions.

Show freshness when data can become outdated.

Good freshness labels:

```txt
Last update: 18 hours ago
Last customer contact: Jun 12, 2026
Monitoring status updated today
Contract status requires review
Case history updated yesterday
```

Avoid vague freshness labels:

```txt
Recently updated
Latest data
Current status
Fresh data
```

If the data freshness is unknown, do not pretend it is current.

Use neutral language such as:

```txt
Update time unavailable
Source freshness not provided
Requires source-system confirmation
```

---

## Uncertainty rules

Generated screens should make uncertainty visible when relevant.

Uncertainty can come from:

- incomplete data
- outdated data
- conflicting sources
- missing owner
- missing contract field
- unclear entitlement
- partial monitoring coverage
- unclear source scope
- missing value proof
- unresolved alert
- unreviewed recommendation
- AI-generated interpretation

Good language:

```txt
Source data requires review.
Some contract fields are missing.
Connectivity status was last updated 18 hours ago.
Recommendation should be validated against the source system.
Owner not confirmed.
```

Avoid false certainty:

```txt
The customer will churn.
The contract is definitely at risk.
This is the correct owner.
The AI has confirmed the answer.
```

A trustworthy interface can say that something is uncertain.

---

## Recommendation evidence rules

Every important recommendation should be supported by evidence.

 A recommendation should make clear:

- what is recommended
- why it is recommended
- which facts support it
- which asset, asset group, room, zone or site is affected when relevant
- what still needs validation
- who should act or validate
- whether the recommendation is customer-ready or internal-only
- whether the recommendation depends on an unresolved assumption

Good:

```txt
Recommendation: Plan a connectivity review with the customer.
Evidence: Coverage dropped to 68%, 8 assets are disconnected and 2 are critical.
Validation: CSM confirms the action before assigning the support owner.
```

Weak:

```txt
Recommendation: Contact the customer.
Evidence: Not shown.
```

Do not generate unsupported recommendations.

Do not make recommendations appear more certain than the evidence allows.

For asset intelligence recommendations, also show whether evidence is live,
partial, historical or manual when that affects trust.

---

## Value proof evidence rules

Value proof should be grounded in visible or auditable service activity.

Good value proof can come from:

- completed actions
- resolved risks
- recommendations reviewed
- recommendations completed
- improved monitoring coverage
- customer objectives
- measurable outcomes when available
- validated asset intervention outcomes
- completed lifecycle or modernization actions
- measurable health improvement when available

Do not invent value proof.

Do not present expected outcomes as proven value.

Do not present internal operational evidence as customer-ready proof without
validation.

Do not make operational activity look customer-ready when it still needs
synthesis or validation.

Good:

```txt
Proof point: 4 critical recommendations completed before the renewal review.
Evidence: Linked to closed mitigation actions and reviewed recommendation status.
Gap: Customer-ready value summary still needs validation by the CSM.
```

Weak:

```txt
Offer-name delivered strong value this quarter.
Evidence: Not shown.
```

Weak asset intelligence example:

```txt
Value proven: interruption avoided.
Evidence: expected outcome only.
```

Better:

```txt
Expected outcome: reduce risk of battery-related interruption.
Proof status: not proven yet.
Next action: validate after battery inspection is completed.
```

If value proof is incomplete, show the gap and create a follow-up action when
appropriate.

---

## AI output evidence rules

AI-generated outputs require extra care.

If GenAI is used, the output should be connected to visible or auditable facts.

Good AI-assisted pattern:

```txt
Visible structured facts
→ guided AI synthesis
→ evidence shown or referenced
→ user review
→ action or draft
```

Avoid:

```txt
AI summary
→ no source context
→ no evidence
→ no review step
```

AI can help synthesize, explain, prioritize, recommend, draft and reformulate.

AI should not invent evidence.

AI should not hide uncertainty.

AI should not replace source-system confirmation for critical facts.

For asset-heavy screens, AI should not retrieve or invent asset hierarchy,
connectivity status, telemetry values, lifecycle status, source scope, source
evidence, expected outcomes or proven value.

---

## Human validation rules

Human validation should be visible when the decision is critical.

Human validation is required when the decision affects:

- customer commitment
- contract interpretation
- entitlement
- safety
- field intervention
- compliance
- pricing
- escalation
- sensitive customer communication
- renewal mitigation
- customer-ready value proof
- asset intelligence recommendation
- modernization decision
- expected outcome used in customer communication
- source-system correction

Good UI language:

```txt
Human review required
CSM validation needed
Confirm before sending
Validate against contract source
Review recommendation before action
```

Avoid language that implies the system or AI has full authority on critical
decisions.

Bad:

```txt
AI approved the action.
AI confirmed entitlement.
AI decided escalation.
```

Better:

```txt
AI-assisted recommendation ready for human review.
Entitlement should be confirmed against the source system.
CSM validates escalation before action is created.
```

---

## Data quality rules

Do not hide data quality issues.

If data quality matters, show it clearly.

Useful labels:

```txt
Missing owner
Contract field incomplete
Install base requires validation
Recommendation not reviewed
Disconnected assets require confirmation
Last update unavailable
```

Use warnings only when the issue affects interpretation or action.

Do not overload the screen with data quality messages that do not affect the
current decision.

---

## Partial visibility rules

Do not imply full visibility when the system only has partial visibility.

Partial visibility may affect:

- monitoring coverage
- install base completeness
- connected assets
- partially connected assets
- non-connected assets
- customer sites
- service history
- recommendation coverage
- value proof completeness

Good language:

```txt
Monitoring coverage is partial.
68% of known assets are connected.
4 known assets are partially connected.
8 known assets are non-connected.
Source scope: monitored Schneider assets only.
Full customer environment not represented.
```

Avoid:

```txt
Full system status confirmed.
Customer environment is fully monitored.
All assets are covered.
```

Use `ConnectivityCoverageCard` when monitoring scope, connected assets,
disconnected assets or freshness affect the decision.

---

## Do not invent data

Generated screens may use realistic sample data for demos.

However, the UI should not imply that invented data is real production data.

When writing guidelines or Make prompts, clarify that structured customer data
should come from:

- APIs
- databases
- BI tools
- CRM
- service tools
- monitoring platforms
- source systems

GenAI should not invent:

- customer names
- contract status
- renewal risk
- entitlement
- source evidence
- proof points
- incident history
- customer commitments
- compliance status
- asset coverage
- asset hierarchy
- telemetry values
- connectivity status
- lifecycle status
- source scope
- monitoring freshness
- action ownership
- value outcomes
- source-system validation

In production, facts must come from governed sources.

---

## Display-only versus editable facts

Do not use editable form components for display-only facts.

Avoid:

```tsx
<Input value="Aug 5, 2026" disabled />
```

Prefer:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalDate="Aug 5, 2026"
/>
```

Display-only facts should be shown with status, summary, metric or business
pattern components.

Editable controls should be reserved for user input.

This improves trust because users can distinguish system facts from editable
fields.

---

## Component guidance

### CustomerStatusCard

Use for customer identity, plan, contract, owner, coverage and customer context.

Do not overload it with recommendations.

Use it to establish known customer facts.

### ConnectivityCoverageCard

Use for coverage rate, connected assets, partially connected assets when
relevant, non-connected assets, affected scope, source scope and last update.

Show freshness when monitoring status may be outdated.

Do not present non-connected assets as live-monitored.

### RenewalRiskSummary

Use for renewal date, renewal window, readiness, value proof status,
recommendations reviewed and overdue actions.

Show missing or incomplete renewal context when it affects readiness.

### ValueProofCard

Use for customer-ready proof points, service outcomes and proof gaps.

Do not invent proof points.

Keep expected outcomes, technical outcomes, internal proof and customer-ready
proof distinguishable.

Proof points should be grounded in completed actions, resolved risks,
reviewed recommendations, completed recommendations or measurable outcomes.

If proof is incomplete, show the gap and create a follow-up action when
appropriate.

### AlertCard

Use for risks, blockers or signals that require attention.

Every alert must include a recommendation.

The recommendation should be supported by the alert description and should not
exceed the available evidence.

### ActionCard

Use for owned next steps.

Every action must include title, owner, due date and priority.

If ownership is unknown, create an action to assign ownership.

### StatusSummary

Use for generic structured status context.

Prefer business patterns when the context is customer status, connectivity,
renewal risk or value proof.

---

## Good example

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  criticalDisconnectedAssets="2 critical assets"
  monitoringStatus="Partial monitoring coverage"
  affectedScope="Site A and Site C"
  lastUpdate="18 hours ago"
  badges={[
    { label: "Connectivity partial", tone: "warning" },
    { label: "Critical assets disconnected", tone: "danger" },
  ]}
/>

<PriorityList title="Connectivity blockers">
  <AlertCard
    severity="critical"
    title="Critical assets disconnected from monitoring"
    equipment="Site A and Site C"
    description="Two critical assets are disconnected, which limits service visibility before the customer review."
    recommendation="Plan a connectivity recovery review and confirm customer-side network actions."
  />
</PriorityList>

<ActionList title="Recovery actions">
  <ActionCard
    title="Plan connectivity recovery review"
    owner="Support Team"
    dueDate="This week"
    priority="high"
  />
</ActionList>
```

This is good because:

- facts are visible first
- freshness is shown
- the alert explains impact
- the recommendation is grounded in the facts
- the action is owned, timed and prioritized

---

## Bad example

Avoid unsupported confident statements:

```tsx
<Card title="AI recommendation">
  The customer is at high risk and must be contacted immediately.
</Card>
```

This is weak because:

- evidence is missing
- source context is missing
- uncertainty is hidden
- the recommendation is not reviewable
- the action owner is unclear

Better:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  overdueActions="3 high-priority actions"
/>

<AlertCard
  severity="warning"
  title="Renewal proof is not customer-ready"
  equipment="Renewal preparation"
  description="Value proof is incomplete and three high-priority actions are overdue before the customer discussion."
  recommendation="Prepare a customer-ready value proof summary and assign owners to overdue actions."
/>
```

---

## Relationship with accessibility

Trust improves accessibility.

Clear evidence, source labels, freshness and validation states help users
understand what they can rely on.

Avoid vague wording that forces users to infer meaning.

Avoid color-only trust indicators.

Use text labels for states such as:

```txt
Draft
Reviewed
Customer-ready
Requires validation
Last update unavailable
```

---

## Relationship with eco-design

Evidence should be useful, not excessive.

The knowledge layer helps decide which evidence matters for the user need.

Do not show every possible source field.

Show the evidence needed for the current decision.

Avoid turning trust into a data dump.

Prefer concise evidence linked to the recommendation or action.

---

## Relationship with AI usage

AI usage depends on trust.

AI-generated synthesis and recommendations should follow the same evidence
standards as non-AI content.

Use GenAI for interpretation only after structured facts are visible.

Use BI, APIs or source systems for basic facts such as customer name, contract
status, renewal date, owner, counts, lists, standard KPIs, asset hierarchy,
connectivity status, telemetry values, lifecycle status and source scope.

Use human validation for critical decisions.

Do not use GenAI to invent, retrieve or confirm source facts.

In asset-heavy screens, GenAI may help with Intelligence interpretation,
recommendation wording, proof gap explanation, mitigation talking points or
grounded action-plan drafting only after source-system facts are visible.

---

## Anti-patterns

Do not generate:

- recommendations without evidence
- AI outputs without source context
- fake citations or fake evidence
- invented proof points or value outcomes
- false certainty about incomplete data
- hidden uncertainty or partial visibility
- critical decisions without human validation
- vague freshness labels such as `recently updated`
- display-only facts inside disabled inputs
- source labels that are invented or not supported
- alerts that do not explain why they matter
- actions without owner, due date or priority
- large evidence dumps that do not support a decision
- repeated evidence across too many sections
- confidence language that exceeds the available facts
- treating open research questions as fully validated product standards
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- AI-generated asset facts, telemetry, lifecycle status or source scope
- Health data and Intelligence interpretation mixed at the same visual level
- embedded components presented as top-level assets unless component-level investigation is required

---

## Review checklist

Before accepting a generated screen, verify:

- facts are visible before interpretation
- recommendations are supported by evidence
- important facts have source or freshness context when needed
- uncertainty is visible when data may be incomplete or outdated
- AI outputs do not invent evidence
- AI outputs are linked to visible or auditable facts
- critical decisions include human validation
- display-only facts are not shown as disabled form fields
- business patterns are used for structured context
- alerts explain impact and include recommendations
- actions are owned, timed and prioritized
- evidence is concise and decision-relevant
- relevant knowledge-layer user needs are reflected when applicable
- open research questions are not presented as fully validated facts
- partial visibility is visible when scope is limited
- value proof is grounded and not invented
- asset-heavy screens show asset scope when it affects trust
- asset-heavy screens show source scope and connectivity status when relevant
- non-connected assets are not presented as live-monitored
- raw Health facts are separated from Intelligence interpretation
- expected outcomes are not presented as proven value
- customer-ready proof is distinguished from internal draft proof
- GenAI is not used to invent asset facts, telemetry, lifecycle status or source scope

---

## Final principle

A trustworthy generated screen should make the user confident for the right
reason.

Not because the UI sounds certain.

Because the facts, evidence, uncertainty, recommendation, asset scope when
relevant and human responsibility are visible enough to review.
