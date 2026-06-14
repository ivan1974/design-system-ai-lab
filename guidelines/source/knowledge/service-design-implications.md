# Service design implications for GenAI

## Status

```txt
SOURCE KNOWLEDGE / DESIGN IMPLICATIONS / GENAI MEMORY
```

## Purpose

This file translates service UX insights into generation implications.

Use it when deciding:

```txt
what to show first
what to prioritize
whether AI is useful
how to review a generated service screen
how to repair a weak screen
```

This file is not a pattern catalogue and not a component catalogue.

---

## Core direction

Users need help understanding:

```txt
what is happening
what can be trusted
what matters most
what should happen next
```

For asset-heavy service screens, also clarify:

```txt
which assets are represented
whether visibility is partial
which source supports the signal
what is raw Health data
what is interpreted Intelligence
what is expected vs proven value
```

---

## Must

You must preserve prompt intent while preventing critical failures.

You must not invent evidence, source, telemetry, validation status or value proof.

You must not present AI interpretation as source-system truth.

You must not present non-connected assets as live-monitored without data.

You must not present expected outcomes as proven value.

You must not invent package components or imports.

---

## Should

You should identify before UI assembly:

```txt
user role
user goal
main object
decision moment
evidence state
next action
```

You should prioritize signals, explain why they matter, and connect them to next steps when action is expected.

You should make trust cues, ownership and partial visibility visible when they affect the decision.

---

## May

You may create local screen-specific components when exported components do not fit.

You may reorganize the screen when the prompt requires it, while preserving facts vs interpretation and evidence vs recommendation.

---

## Key implications

### 1. Start with orientation and context

Show:

```txt
user-relevant title
object or scope
site / asset / customer context when relevant
status or attention summary
```

Risk to repair:

```txt
metrics, alerts or actions appear before the user understands the situation
```

### 2. Support interpretation with visible facts

Use this distinction:

```txt
decision-first
  guides the screen intent and hierarchy

facts-before-interpretation
  guides the proof trail and trust model
```

Hard blocker:

```txt
AI interpretation replaces evidence or is presented as source-system truth
```

### 3. Make trust cues visible

Show when relevant:

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

Hard blocker:

```txt
invented evidence, source, telemetry or validation status
```

### 4. Prioritize signals, do not dump data

Prefer:

```txt
few strong signals
clear severity or urgency
visible reason
clear next step
secondary evidence available on demand
```

Risk to repair:

```txt
too many metrics, raw tables or equal-priority cards
```

### 5. Explain why signals matter

Connect:

```txt
signal
-> source
-> impact
-> recommended follow-up
```

Risk to repair:

```txt
alert or signal does not explain impact
```

### 6. Convert risk into recommendation when action is needed

A recommendation may show:

```txt
what is recommended
why it matters
what evidence supports it
what action follows
what validation is still needed
```

Risk to repair:

```txt
risk display has no next-step path although the prompt expects action
```

### 7. Convert recommendation into owned action

An action should usually include:

```txt
owner
due date or target timing
priority
scope or affected asset when relevant
```

Hard blocker:

```txt
critical action implies autonomous AI approval without validation
```

### 8. Make ownership and coordination visible

Show responsibility and handoff context for:

```txt
support follow-up
field service planning
customer communication
renewal preparation
recommendation review
proof preparation
```

### 9. Make partial visibility explicit

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

Hard blocker:

```txt
non-connected assets are presented as live-monitored without data
```

### 10. Keep customer specificity structured

Represent customer-specific constraints as structured context:

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

Do not turn specificity into unstructured custom UI.

### 11. Make value proof grounded and customer-ready

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

### 12. Use BI first, AI only where it adds value

Structured facts should come from APIs, BI tools, databases or source systems.

AI should not retrieve or invent:

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

### 13. Keep AI guided and evidence-aware

A useful flow is:

```txt
Health facts
-> Intelligence interpretation
-> AI-assisted recommendation when useful
-> validation and proof status
```

This is a trust model, not a mandatory screen order.

### 14. Keep human validation visible for critical decisions

Show when relevant:

```txt
review state
approval state
owner
validation required
customer-ready status
```

Hard blocker:

```txt
screen implies AI autonomously approved a critical decision
```

### 15. Reduce effort through composition

Prefer:

```txt
focused decision flow
progressive disclosure
clear hierarchy
few strong signals
owned actions
secondary evidence on demand
```

---

## Useful UI material

Use exported DS material or local composition according to intent.

Useful exported material may include:

```txt
Alert
Badge
Pill
Tag
Table
Tabs
Accordion
Collapsible
ScrollArea
SearchField
FilterDropdown
ViewFilterBar
AllFiltersPanel
AssetInventoryRow
HealthBadge
StatusLabel
Progress
Tooltip
Popover
Dialog
Button
```

Useful local screen-specific composition may include:

```txt
local detail section
local evidence row
local recommendation block
local action summary
local proof gap section
```

Do not import local composition names from the package unless they are exported.

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
Does the screen use DS material or local composition appropriately?
Are package imports real?
```
