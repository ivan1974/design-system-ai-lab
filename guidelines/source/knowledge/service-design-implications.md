# Service design implications for GenAI

## Status

```txt
SOURCE KNOWLEDGE / DESIGN IMPLICATIONS / GENAI MEMORY
```

## Purpose

This file translates service UX insights and user needs into generation implications.

Use it when GenAI must decide:

```txt
what to show first
what to prioritize
whether AI is useful
which component level to use
how to review a generated service screen
how to repair a weak screen
```

This file is not a pattern catalogue.

It is a bridge between user needs and GenAI generation behavior.

---

## Core direction

Users need help understanding:

```txt
what is happening
what can be trusted
what matters most
what should happen next
```

For asset-heavy service screens, also help users understand:

```txt
which assets are represented
whether visibility is partial
which source supports the signal
what is raw Health data
what is interpreted Intelligence
what is expected vs proven value
```

---

## Implication 1 — Start with orientation and context

Generated screens should start with clear orientation before detailed signals, evidence or actions.

GenAI should show:

```txt
user-relevant title
object or scope
site / asset / customer context when relevant
status or attention summary
```

Use DS material:

```txt
InstalledBaseHeader
AssetSummaryCard
DetailSection
StatusBadge
Alert
```

Reject screens where metrics, alerts or actions appear before the user understands the situation.

---

## Implication 2 — Use domain knowledge before UI assembly

Before selecting components, GenAI should identify:

```txt
user role
user goal
main object
decision moment
evidence state
next action
```

Only then select primitives or usage components.

Do not assemble components just because they exist.

---

## Implication 3 — Show facts before interpretation

Generated screens should show visible structured facts before interpretation, recommendation or AI-assisted content.

For asset-heavy screens, prefer:

```txt
asset context
→ source scope
→ connectivity status
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ recommendation
```

Use DS material:

```txt
DetailSection
EvidenceList
StatusBadge
RecommendationCard
Tabs
```

Reject screens that start with confident AI recommendations before showing supporting facts when trust matters.

---

## Implication 4 — Make trust cues visible

When information may be incomplete, outdated, inferred or source-dependent, show that clearly.

Trust cues include:

```txt
source
freshness
last update
validation status
source scope
connectivity status
review needed
human validation required
```

Use DS material:

```txt
EvidenceList
StatusBadge
Tooltip
Popover
Alert
DetailSection
```

Reject screens that style uncertain, outdated, incomplete or partial information as confirmed.

---

## Implication 5 — Prioritize signals, do not dump data

GenAI should select and prioritize decision-relevant signals instead of displaying all available data.

Prefer:

```txt
few strong signals
clear severity or urgency
visible reason
clear next step
secondary evidence available on demand
```

Use DS material:

```txt
Table
StatusBadge
ScoreBar
Alert
Accordion
Collapsible
ScrollArea
```

Reject over-generated screens with too many metrics, raw tables or equal-priority cards.

---

## Implication 6 — Explain why signals matter

Metrics, health states and alerts should explain why they matter for the current decision.

A useful explanation connects:

```txt
signal
→ source
→ impact
→ recommended follow-up
```

Use DS material:

```txt
RecommendationCard
EvidenceList
Alert
DetailSection
Tooltip or Popover
```

Reject alerts or signals that do not explain impact.

---

## Implication 7 — Convert risk into recommendation

When a screen shows risk or alert, it should help the user understand the recommended next step.

A recommendation should show:

```txt
what is recommended
why it matters
what evidence supports it
what action follows
what validation is still needed
```

Use DS material:

```txt
RecommendationCard
Alert
EvidenceList
StatusBadge
```

Reject risk displays with no recommendation or only vague recommendations.

---

## Implication 8 — Convert recommendation into owned action

Recommendations should connect to concrete actions with visible ownership, timing and priority.

An action should include:

```txt
owner
due date or target timing
priority
scope or affected asset when relevant
```

Use DS material:

```txt
RecommendationCard
DetailSection
Dialog for action creation
StatusBadge
```

Reject actions without owner, timing or priority.

---

## Implication 9 — Make ownership and coordination visible

When several roles are involved, show responsibility and handoff context.

This matters for:

```txt
support follow-up
field service planning
customer communication
renewal preparation
recommendation review
proof preparation
```

Use DS material:

```txt
RecommendationCard
DetailSection
StatusBadge
Alert
```

Reject screens that show internal risks without clarifying responsibility or follow-through.

---

## Implication 10 — Make partial visibility explicit

When asset, monitoring or system visibility is partial, show scope and limits.

Show when relevant:

```txt
coverage rate
connected assets
non-connected assets
partially visible scope
source scope
affected site, room or system
last update
visibility limitation
```

Use DS material:

```txt
StatusBadge
EvidenceList
AssetSummaryCard
Table
Alert
```

Reject screens that imply full system visibility when the data only supports partial coverage.

---

## Implication 11 — Keep customer specificity structured

Customer-specific constraints should appear as structured context, not bespoke layout chaos.

Examples:

```txt
industry
site type
criticality
security constraint
compliance constraint
service scope
customer objective
contract-specific commitment
```

Use DS material:

```txt
DetailSection
StatusBadge
Alert
AssetSummaryCard
```

Reject screens that ignore important customer-specific context or turn it into uncontrolled custom UI.

---

## Implication 12 — Make value proof grounded and customer-ready

Value proof must connect service activity to evidence and customer objectives.

Distinguish:

```txt
expected outcome
technical outcome
completed action
validated outcome
proven value
customer-ready proof
proof gap
```

Do not invent value proof.

Do not present expected outcomes as proven value.

Use DS material:

```txt
EvidenceList
RecommendationCard
StatusBadge
Progress or ScoreBar when value is provided
DetailSection
```

Reject proof sections with unsupported claims, fake sources or expected outcomes presented as proven value.

---

## Implication 13 — Use BI first, AI only where it adds value

Structured facts should come from APIs, BI tools, databases or source systems.

GenAI should not retrieve basic facts such as:

```txt
customer name
contract status
asset hierarchy
connectivity status
telemetry values
source scope
lifecycle status
standard KPIs
```

Use AI for:

```txt
synthesis
explanation
prioritization
recommendation wording
proof gap explanation
action-plan drafting
customer-ready reformulation from grounded facts
```

Reject prompt-first screens that use AI for basic structured retrieval.

---

## Implication 14 — Keep AI guided and evidence-aware

AI should appear as guided assistance based on visible facts.

Do not hide evidence behind AI output.

For asset-heavy screens:

```txt
Health facts first
Intelligence interpretation second
AI-assisted recommendation third
validation and proof status visible
```

Use DS material:

```txt
Alert
RecommendationCard
EvidenceList
Popover or Tooltip for AI explanation
StatusBadge
```

Reject AI recommendations that are unsupported by visible facts or present AI interpretation as source-system truth.

---

## Implication 15 — Keep human validation visible for critical decisions

Critical customer, contract, service, safety, compliance, renewal, value proof, modernization or asset intelligence decisions should keep human accountability visible.

Show:

```txt
review state
approval state
owner
validation required
customer-ready status
```

Use DS material:

```txt
StatusBadge
Alert
RecommendationCard
EvidenceList
Dialog when approval is required
```

Reject screens that imply AI autonomously approved critical decisions.

---

## Implication 16 — Reduce effort through composition

Composition should reduce scanning, interpretation and coordination effort.

Prefer:

```txt
focused decision flow
progressive disclosure
clear hierarchy
few strong signals
owned actions
secondary evidence on demand
```

Use DS material:

```txt
Tabs
Accordion
Collapsible
ScrollArea
Table
SearchField
FilterDropdown
```

Reject screens that are duplicated, hard to scan or visually noisy.

---

## Implication 17 — Support role-specific workflows

Generated screens should reflect the role and decision moment.

Every generated screen should make clear:

```txt
user role
user goal
main object
required context
decision flow
next action
```

Reject role-neutral screens when the prompt implies a specific role or workflow.

---

## Implication 18 — Preserve context for handoffs

When a screen involves support, follow-up or handoff, preserve enough context for another role to act without repeated explanation.

Show:

```txt
issue or signal
asset / site / customer scope
recommendation
action owner
timing
supporting evidence or link
```

Reject alerts or actions without enough context for another role to understand the next step.

---

## Implication 19 — Expose gaps and turn them into actions

Missing proof, unknown ownership, incomplete data or outdated information should be visible.

When appropriate, convert the gap into a follow-up action.

Examples:

```txt
Missing proof → prepare evidence package
Unknown owner → assign owner
Outdated telemetry → validate source
Partial coverage → plan coverage review
Incomplete document set → request missing document
```

Reject screens that hide proof gaps, outdated data or unassigned ownership.

---

## Implication 20 — Do not confuse display facts with user input

Display-only facts should use display components, not disabled form controls.

Use form components only when the user can input or change data.

Use DS material:

```txt
DetailSection
StatusBadge
Badge
Table
AssetSummaryCard
```

Use form primitives for input:

```txt
Input
Checkbox
Select
Switch
RadioGroup when available
Dialog when collecting confirmation or action data
```

Reject screens that use disabled inputs to display customer, contract, asset or service facts.

---

## GenAI review checklist

Review a generated service screen with these questions:

```txt
Does the screen reflect the user role?
Does it start with the right context?
Does it support one clear decision?
Are facts visible before interpretation?
Are trust cues visible when needed?
Are signals prioritized?
Does each alert explain why it matters?
Is there a concrete recommendation?
Are actions owned and time-bound?
Is partial visibility explicit?
Is AI used only where it adds value?
Is human validation visible for critical decisions?
Are value claims grounded?
Does the screen use DS primitives and usage components appropriately?
```

---

## Relationship to current DS vocabulary

Legacy documents mention older names such as:

```txt
MetricCard
AlertCard
ActionCard
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
ValueProofCard
CreateActionDialog
```

In the reboot, translate those intentions into the current vocabulary:

```txt
AlertCard → Alert + RecommendationCard when action is needed
ActionCard / ActionList → RecommendationCard + DetailSection or future Action components
MetricCard / MetricGrid → ScoreBar, Progress, StatusBadge, DetailSection, Table depending on intent
ConnectivityCoverageCard → AssetSummaryCard, StatusBadge, EvidenceList, DetailSection
ValueProofCard → EvidenceList, RecommendationCard, StatusBadge, DetailSection
CreateActionDialog → Dialog with approved form primitives
CustomerStatusCard / RenewalRiskSummary → not current components; treat as candidate future usage components or patterns
```

Do not reintroduce legacy component names as final public vocabulary without a new design-system decision.
