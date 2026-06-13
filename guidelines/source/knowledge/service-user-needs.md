# Service user needs for GenAI

## Status

```txt
SOURCE KNOWLEDGE / USER NEEDS / GENAI MEMORY
```

## Purpose

This file translates service UX research into reusable user needs for GenAI.

Use it when generating or reviewing screens for:

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

This file is not a screen contract.

It helps GenAI understand what users need before choosing components.

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

This applies to customers and internal teams.

Customer experience and employee experience are connected.

A customer-facing issue is often caused or amplified by internal fragmentation, unclear ownership, poor data quality or weak handoffs.

---

## Covered roles

Consider the role implied by the prompt.

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

GenAI should:

```txt
start with clear orientation
show the relevant asset, site, customer or service context early
avoid starting with isolated metrics
avoid making the user infer the scope
```

Useful DS material:

```txt
InstalledBaseHeader
AssetSummaryCard
DetailSection
StatusBadge
Table or dense rows
```

Reject screens where the user cannot understand the current situation in the first visible sections.

---

## Need 2 — Know what is included, active or covered

User need:

```txt
I need to understand what is included, active, connected, covered or guaranteed.
```

GenAI should show relevant context such as:

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

Useful DS material:

```txt
StatusBadge
DetailSection
AssetSummaryCard
EvidenceList
FilterDropdown
```

Reject screens that require the user to infer service scope, asset scope or visibility limits.

---

## Need 3 — Trust the information shown

User need:

```txt
I need to know whether the information is reliable, fresh, confirmed or still requiring review.
```

GenAI should expose trust cues when they affect the decision:

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

Do not present non-connected assets as live-monitored.

Do not present AI interpretation as source-system truth.

Useful DS material:

```txt
EvidenceList
StatusBadge
Alert
Tooltip or Popover
DetailSection
```

Reject screens that hide trust-sensitive status or make weak evidence look stronger with styling.

---

## Need 4 — See what matters most

User need:

```txt
I need to identify the most important signals, risks or blockers without scanning everything manually.
```

GenAI should:

```txt
prioritize decision-relevant signals
avoid large undifferentiated data dumps
avoid too many equal-priority cards
show severity, urgency or business impact when available
```

Useful DS material:

```txt
Table or dense rows
StatusBadge
ScoreBar
Alert
RecommendationCard
```

Reject screens with too many metrics, too many cards, or no prioritization.

---

## Need 5 — Understand why a signal matters

User need:

```txt
I need to understand why a metric, alert, condition or risk matters for the current situation.
```

GenAI should connect signal to meaning:

```txt
signal
→ reason
→ operational impact
→ recommended follow-up
```

For asset-heavy screens, clarify whether the signal comes from:

```txt
live telemetry
service history
lifecycle information
manual inventory
document evidence
AI-assisted interpretation
```

Useful DS material:

```txt
RecommendationCard
EvidenceList
DetailSection
Alert
Tooltip or Popover
```

Reject alerts or metrics that do not explain why the issue matters.

---

## Need 6 — Know what to do next

User need:

```txt
I need to move from awareness to action.
```

GenAI should connect risks, alerts and recommendations to concrete next steps.

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

Useful DS material:

```txt
RecommendationCard
Alert
Dialog for action creation when user input is required
DetailSection
```

Reject screens with alerts but no recommended next step, or actions without owner, due date or priority.

---

## Need 7 — Know who owns the next step

User need:

```txt
I need to know who owns the next step so responsibility does not remain implicit or fragmented.
```

GenAI should make ownership visible when the screen includes:

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

Useful DS material:

```txt
RecommendationCard
DetailSection
StatusBadge
Alert
```

Reject screens that create actions or risks without clarifying responsibility.

---

## Need 8 — Reduce user effort

User need:

```txt
I need the interface to reduce effort instead of asking me to search, configure or interpret too much manually.
```

GenAI should:

```txt
focus the screen around the current decision
limit metrics and alerts to what supports the task
avoid duplicated context
avoid raw data dumps
use progressive disclosure
```

Useful DS material:

```txt
Tabs
Accordion
Collapsible
ScrollArea
Table
SearchField
FilterDropdown
```

Reject over-generated screens that add cognitive load instead of reducing it.

---

## Need 9 — Understand coverage and visibility limits

User need:

```txt
I need to know what is covered, what is not covered, whether visibility is partial and which assets are represented.
```

GenAI should show, when relevant:

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

Do not present non-connected assets as live-monitored.

Useful DS material:

```txt
StatusBadge
EvidenceList
AssetSummaryCard
Table or dense rows
Alert
```

---

## Need 10 — See customer-specific context without losing structure

User need:

```txt
I need relevant customer-specific constraints and objectives to be visible without making every screen bespoke or inconsistent.
```

GenAI should represent specificity as structured context:

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

Useful DS material:

```txt
DetailSection
StatusBadge
AssetSummaryCard
Alert
```

---

## Need 11 — See value proof over time

User need:

```txt
I need to see what value has been delivered over time and what proof is still missing.
```

GenAI should distinguish:

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

Useful DS material:

```txt
EvidenceList
RecommendationCard
DetailSection
StatusBadge
Progress or ScoreBar when the value is provided
```

---

## Need 12 — Prepare for renewal or customer discussion

User need:

```txt
I need customer-ready summaries, proof points and mitigation actions before renewal, QBR or review discussions.
```

GenAI should combine:

```txt
customer or site context
risks
proof gaps
completed or pending actions
validated outcomes
next mitigation steps
```

Show renewal or discussion context before proof gaps, risks and mitigation actions when relevant.

Do not generate a customer-ready proof section when validation is missing.

---

## Need 13 — Avoid AI when structured data is enough

User need:

```txt
I need basic facts to be visible directly instead of asking AI for information that should come from a source system.
```

GenAI should not be used to retrieve:

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

Use AI only for:

```txt
synthesis
explanation
prioritization
recommendation wording
proof gap explanation
grounded action-plan drafting
customer-ready reformulation from facts
```

Reject prompt-first screens that use AI for basic structured retrieval.

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

GenAI should keep human validation visible for critical decisions involving:

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

Useful DS material:

```txt
StatusBadge
Alert
RecommendationCard
EvidenceList
Dialog when approval or confirmation is required
```

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
```
