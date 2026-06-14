# Service user needs for GenAI

## Status

```txt
SOURCE KNOWLEDGE / USER NEEDS / GENAI MEMORY
```

## Purpose

This file translates service UX research into reusable user needs.

Use it before generating or reviewing screens for:

```txt
Installed Base
asset monitoring
service intelligence
maintenance follow-up
customer support
renewal preparation
value proof
service coordination
```

This file is not a screen contract and not a component catalogue.

It helps understand user needs before choosing components or composing local UI.

---

## Core synthesis

Users do not only need access to information.

They need help understanding:

```txt
what is happening
what matters most
what can be trusted
what should happen next
who owns the next step
what proof exists or is still missing
```

Customer experience and employee experience are connected.

A customer-facing issue is often caused or amplified by internal fragmentation, unclear ownership, poor data quality or weak handoffs.

---

## Must

You must identify the user role when the prompt implies one.

You must not invent evidence, data, telemetry, validation state, business value or ownership.

You must not present AI interpretation as source-system truth.

You must not present non-connected assets as live-monitored without provided data.

You must not present expected outcomes as proven value.

---

## Should

You should organize service screens around:

```txt
situation
trust state
priority
recommended next step
owner
proof or proof gap
```

You should expose partial visibility, missing proof and unknown ownership when they affect the decision.

You should reduce effort by prioritizing what the user needs to understand or do next.

---

## May

You may create local screen-specific components when exported components do not fit.

Useful local components may include:

```txt
EvidenceRow
RecommendationBlock
ActionSummary
ProofGapSection
OwnerAssignmentRow
```

Do not import these names from the package unless they are explicitly exported.

---

## Covered roles

Common roles include:

```txt
customer
maintenance team
facility manager
energy manager
electrical engineer
Customer Success Manager
account owner
monitoring agent
contact center team
sales team
field services team
service manager
renewal manager
product or support team
```

Do not generate role-neutral screens when the prompt implies a specific role or workflow.

---

## Need 1 — Understand the situation quickly

User need:

```txt
I need to understand the current situation without reconstructing context from multiple systems, reports, portals or people.
```

Show:

```txt
clear orientation
relevant asset, site, customer or service context
scope and visibility limits when relevant
few decision-relevant signals
```

Avoid starting with isolated metrics.

---

## Need 2 — Know what is included, active or covered

User need:

```txt
I need to understand what is included, active, connected, covered or guaranteed.
```

Show relevant context such as:

```txt
contract or coverage type
coverage status
service scope
connectivity status
asset scope
source scope
owner or point of contact when relevant
```

Do not scatter entitlement, coverage or service scope across unrelated cards.

---

## Need 3 — Trust the information shown

User need:

```txt
I need to know whether the information is reliable, fresh, confirmed or still requiring review.
```

Expose trust cues when they affect the decision:

```txt
source
last update
freshness
source scope
connectivity status
validation status
review needed
human validation required
Health vs Intelligence distinction
```

Do not make uncertain information look confirmed.

---

## Need 4 — See what matters most

User need:

```txt
I need to identify the most important signals, risks or blockers without scanning everything manually.
```

Prioritize:

```txt
decision-relevant signals
severity or urgency when available
business or operational impact when available
few strong indicators instead of many equal cards
```

Avoid raw data dumps and undifferentiated dashboards.

---

## Need 5 — Understand why a signal matters

User need:

```txt
I need to understand why a metric, alert, condition or risk matters for the current situation.
```

Connect:

```txt
signal
-> reason
-> operational impact
-> recommended follow-up
```

Clarify whether the signal comes from:

```txt
live telemetry
service history
lifecycle information
manual inventory
document evidence
AI-assisted interpretation
```

---

## Need 6 — Know what to do next

User need:

```txt
I need to move from awareness to action.
```

A useful action includes:

```txt
clear action label
owner
due date or target timing
priority
scope or asset context when needed
```

Avoid vague actions:

```txt
Follow up
Review later
Check issue
```

---

## Need 7 — Know who owns the next step

User need:

```txt
I need to know who owns the next step so responsibility does not remain implicit or fragmented.
```

Make ownership visible when the screen includes:

```txt
risk
action
handoff
recommendation
service follow-up
renewal preparation
customer communication
```

If ownership is unknown, expose the gap and propose assigning ownership.

---

## Need 8 — Reduce user effort

User need:

```txt
I need the interface to reduce effort instead of asking me to search, configure or interpret too much manually.
```

Do:

```txt
focus the screen around the current decision
limit metrics and alerts to what supports the task
avoid duplicated context
avoid raw data dumps
use progressive disclosure
```

---

## Need 9 — Understand coverage and visibility limits

User need:

```txt
I need to know what is covered, what is not covered, whether visibility is partial and which assets are represented.
```

Show when relevant:

```txt
covered scope
asset hierarchy level
connected assets
non-connected assets
partially visible areas
source scope
last update
limits of visibility
```

Do not imply complete system visibility when the source only supports partial coverage.

---

## Need 10 — See customer-specific context without losing structure

User need:

```txt
I need relevant customer-specific constraints and objectives to be visible without making every screen bespoke or inconsistent.
```

Represent specificity as structured context:

```txt
industry
site type
criticality
compliance constraint
security or hosting constraint
service scope
customer objective
contract-specific commitment
```

Do not turn specificity into uncontrolled layout customization.

---

## Need 11 — See value proof over time

User need:

```txt
I need to see what value has been delivered over time and what proof is still missing.
```

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

Do not present internal operational evidence as customer-ready proof without validation.

---

## Need 12 — Prepare for renewal or customer discussion

User need:

```txt
I need customer-ready summaries, proof points and mitigation actions before renewal, QBR or review discussions.
```

Combine:

```txt
customer or site context
risks
proof gaps
completed or pending actions
validated outcomes
next mitigation steps
```

Do not generate customer-ready proof when validation is missing.

---

## Need 13 — Avoid AI when structured data is enough

User need:

```txt
I need basic facts to be visible directly instead of asking AI for information that should come from a source system.
```

AI should not retrieve or invent:

```txt
customer name
contract status
owner
standard KPIs
asset hierarchy
connectivity status
telemetry values
source scope
lifecycle status
```

Use BI, APIs or source systems for structured facts.

---

## Need 14 — Use AI for synthesis, explanation and drafting

User need:

```txt
I need AI assistance when it helps synthesize complex context, explain risk, prioritize actions or draft communication.
```

AI should appear as guided assistance on top of visible facts.

AI should not hide the evidence used.

For asset-heavy screens:

```txt
Health provides facts.
Intelligence may use AI-assisted interpretation.
Evidence remains visible or auditable.
```

Reject AI recommendations unsupported by visible facts.

---

## Need 15 — Keep human accountability visible

User need:

```txt
I need critical customer, contract, service, safety, compliance or asset decisions to remain human-validated.
```

Keep human validation visible for critical decisions involving:

```txt
customer communication
contract or entitlement
safety
compliance
renewal
value proof
asset intelligence recommendation
modernization action
```

Do not imply AI autonomously approved critical service decisions.

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
Dialog
Button
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
ScrollArea
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

## GenAI application checklist

Before generating, answer:

```txt
Who is the user role?
What is the user goal?
What decision must the screen support?
What context is needed first?
What can be trusted?
What matters most?
What action follows?
Who owns it?
What proof exists or is missing?
Where is AI useful, if at all?
```

---

## Common mistakes

Avoid:

```txt
role-neutral screens when the prompt implies a role
generic dashboards when the user needs a decision workspace
too many equal cards
AI-first interfaces for basic facts
recommendations without evidence
alerts without actions
actions without owner or timing
value proof without completed evidence
customer specificity as uncontrolled custom UI
partial visibility presented as complete coverage
fictional package component imports
```
