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

These implications are guidance, not strict screen contracts.

Follow the user's prompt first, then use these implications to improve the quality, clarity and trustworthiness of the generated screen.

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

## Rule strength

Use the right strength of guidance.

```txt
Hard blocker
  critical failure to prevent or repair

Strong recommendation
  preferred behavior unless the prompt requires another approach

Flexible guidance
  possible UI material or design option
```

Most implications in this file are strong recommendations, not blockers.

---

## Implication 1 — Start with orientation and context

Generated screens should usually start with clear orientation before detailed signals, evidence or actions.

GenAI should consider showing:

```txt
user-relevant title
object or scope
site / asset / customer context when relevant
status or attention summary
```

Possible DS material:

```txt
InstalledBaseHeader
AssetSummaryCard
DetailSection
StatusBadge
Alert
```

Review risk:

```txt
metrics, alerts or actions appear before the user understands the situation
```

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

## Implication 3 — Support interpretation with visible facts

This implication does not override decision-first generation.

Use this distinction:

```txt
decision-first
  guides the screen intent and hierarchy

facts-before-interpretation
  guides the proof trail and trust model
```

Generated screens should not present interpretation, recommendation or AI-assisted content as if it were source fact.

For asset-heavy screens, a useful trust trail may be:

```txt
asset context
→ source scope
→ connectivity status
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ recommendation
```

Possible DS material:

```txt
DetailSection
EvidenceList
StatusBadge
RecommendationCard
Tabs
```

Hard blocker:

```txt
AI interpretation replaces evidence or is presented as source-system truth
```

Review risk:

```txt
confident recommendation appears without visible supporting facts when trust matters
```

---

## Implication 4 — Make trust cues visible

When information may be incomplete, outdated, inferred or source-dependent, show that clearly.

Trust cues may include:

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

Possible DS material:

```txt
EvidenceList
StatusBadge
Tooltip
Popover
Alert
DetailSection
```

Hard blocker:

```txt
invented evidence, source, telemetry or validation status
```

Review risk:

```txt
uncertain, outdated, incomplete or partial information is styled as confirmed
```

---

## Implication 5 — Prioritize signals, do not dump data

GenAI should usually select and prioritize decision-relevant signals instead of displaying all available data.

Prefer:

```txt
few strong signals
clear severity or urgency
visible reason
clear next step
secondary evidence available on demand
```

Possible DS material:

```txt
Table
StatusBadge
ScoreBar
Alert
Accordion
Collapsible
ScrollArea
```

Review risk:

```txt
too many metrics, raw tables or equal-priority cards
```

---

## Implication 6 — Explain why signals matter

Metrics, health states and alerts should explain why they matter for the current decision when interpretation is not obvious.

A useful explanation connects:

```txt
signal
→ source
→ impact
→ recommended follow-up
```

Possible DS material:

```txt
RecommendationCard
EvidenceList
Alert
DetailSection
Tooltip or Popover
```

Review risk:

```txt
alert or signal does not explain impact
```

---

## Implication 7 — Convert risk into recommendation when action is needed

When a screen shows risk or alert, it should often help the user understand the recommended next step.

A recommendation may show:

```txt
what is recommended
why it matters
what evidence supports it
what action follows
what validation is still needed
```

Possible DS material:

```txt
RecommendationCard
Alert
EvidenceList
StatusBadge
```

Review risk:

```txt
risk display has no next-step path although the prompt expects action
```

---

## Implication 8 — Convert recommendation into owned action

Recommendations should connect to concrete actions when follow-through matters.

An action should usually include:

```txt
owner
due date or target timing
priority
scope or affected asset when relevant
```

Possible DS material:

```txt
RecommendationCard
DetailSection
Dialog for action creation
StatusBadge
```

Hard blocker:

```txt
critical action implies autonomous AI approval without validation
```

Review risk:

```txt
action has no owner, timing or priority when execution matters
```

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

Possible DS material:

```txt
RecommendationCard
DetailSection
StatusBadge
Alert
```

Review risk:

```txt
internal risk appears without responsibility or follow-through
```

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

Possible DS material:

```txt
StatusBadge
EvidenceList
AssetSummaryCard
Table
Alert
```

Hard blocker:

```txt
non-connected assets are presented as live-monitored without data
```

Review risk:

```txt
screen implies full system visibility when data only supports partial coverage
```

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

Possible DS material:

```txt
DetailSection
StatusBadge
Alert
AssetSummaryCard
```

Review risk:

```txt
important customer-specific context is ignored or turned into unstructured custom UI
```

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

Hard blockers:

```txt
invented value proof
expected outcome presented as proven value
internal evidence presented as customer-ready proof without validation
```

Possible DS material:

```txt
EvidenceList
RecommendationCard
StatusBadge
Progress or ScoreBar when value is provided
DetailSection
```

Review risk:

```txt
proof section uses unsupported claims or fake sources
```

---

## Implication 13 — Use BI first, AI only where it adds value

Structured facts should come from APIs, BI tools, databases or source systems.

GenAI should not retrieve or invent basic facts such as:

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

Hard blocker:

```txt
GenAI invents source-system facts or telemetry values
```

Review risk:

```txt
prompt-first interface is used for simple structured retrieval
```

---

## Implication 14 — Keep AI guided and evidence-aware

AI should appear as guided assistance based on visible facts.

Do not hide evidence behind AI output.

For asset-heavy screens, a useful flow is:

```txt
Health facts
→ Intelligence interpretation
→ AI-assisted recommendation when useful
→ validation and proof status
```

This is a trust model, not a mandatory screen order.

Possible DS material:

```txt
Alert
RecommendationCard
EvidenceList
Popover or Tooltip for AI explanation
StatusBadge
```

Hard blocker:

```txt
AI recommendation is unsupported by facts or presented as source-system truth
```

---

## Implication 15 — Keep human validation visible for critical decisions

Critical customer, contract, service, safety, compliance, renewal, value proof, modernization or asset intelligence decisions should keep human accountability visible.

Show when relevant:

```txt
review state
approval state
owner
validation required
customer-ready status
```

Possible DS material:

```txt
StatusBadge
Alert
RecommendationCard
EvidenceList
Dialog when approval is required
```

Hard blocker:

```txt
screen implies AI autonomously approved a critical decision
```

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

Possible DS material:

```txt
Tabs
Accordion
Collapsible
ScrollArea
Table
SearchField
FilterDropdown
```

Review risk:

```txt
screen is duplicated, hard to scan or visually noisy
```

---

## Implication 17 — Support role-specific workflows

Generated screens should reflect the role and decision moment when the prompt provides or implies them.

A strong generated screen often makes clear:

```txt
user role
user goal
main object
required context
decision flow
next action
```

Review risk:

```txt
screen is role-neutral even though the prompt implies a specific role or workflow
```

---

## Implication 18 — Preserve context for handoffs

When a screen involves support, follow-up or handoff, preserve enough context for another role to act without repeated explanation.

Show when relevant:

```txt
issue or signal
asset / site / customer scope
recommendation
action owner
timing
supporting evidence or link
```

Review risk:

```txt
alert or action lacks enough context for another role to understand the next step
```

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

Review risk:

```txt
proof gaps, outdated data or unassigned ownership are hidden
```

---

## Implication 20 — Do not confuse display facts with user input

Display-only facts should use display components, not disabled form controls.

Use form components only when the user can input or change data.

Possible display material:

```txt
DetailSection
StatusBadge
Badge
Table
AssetSummaryCard
```

Possible input material:

```txt
Input
Checkbox
Select
Switch
RadioGroup when available
Dialog when collecting confirmation or action data
```

Review risk:

```txt
disabled inputs are used to display customer, contract, asset or service facts
```

---

## GenAI review checklist

Review a generated service screen with these questions:

```txt
Does the screen reflect the user role when relevant?
Does it start with the right context?
Does it support a clear decision or task?
Are facts and interpretation semantically distinct?
Are trust cues visible when needed?
Are signals prioritized?
Does each major alert explain why it matters?
Is there a next-step path when action is expected?
Are actions owned and time-bound when execution matters?
Is partial visibility explicit when relevant?
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

Do not mechanically replace old component names with new components.

Translate the intent behind the legacy component name.

```txt
AlertCard intent
  attention signal + impact + optional recommendation
  possible reboot material: Alert, RecommendationCard, EvidenceList, StatusBadge

ActionCard / ActionList intent
  owned next step, follow-through, coordination
  possible reboot material: RecommendationCard, DetailSection, Dialog, future Action component

MetricCard / MetricGrid intent
  quantitative signal, status, comparison
  possible reboot material: ScoreBar, Progress, StatusBadge, Table, DetailSection

ConnectivityCoverageCard intent
  scope, visibility, connected/non-connected coverage
  possible reboot material: AssetSummaryCard, StatusBadge, EvidenceList, DetailSection, Table

ValueProofCard intent
  service value, proof, gaps, validated outcomes
  possible reboot material: EvidenceList, RecommendationCard, StatusBadge, DetailSection

CreateActionDialog intent
  capture or confirm an action
  possible reboot material: Dialog + approved form primitives

CustomerStatusCard / RenewalRiskSummary intent
  customer or renewal context, risk and proof preparation
  possible reboot material: candidate future usage components or patterns
```

Legacy names are not final public reboot vocabulary.

Do not reintroduce them as components without a design-system decision.
