# Decision Layout Guidelines

## Purpose

This file defines reusable decision layouts for interfaces generated with the
`design-system-ai-lab` package.

A decision layout is not just a visual layout.

It is an information sequence that helps the user move from context to evidence,
from evidence to priority and from priority to action.

The goal is to create generated screens that help users understand what is
happening, why it matters, what can be trusted and what should happen next.

---

## Mandatory principles

Every decision layout must follow these principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

These principles apply before component choice.

They prevent generated layouts from becoming visually correct but inaccessible,
noisy, AI-expensive, unsupported by evidence or disconnected from the user
decision.

---

## Knowledge layer

Decision layouts should be informed by the knowledge layer when the generated
screen relates to documented service experience needs, internal workflows or
open validation questions.

Refer to:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Use the knowledge layer to understand:

- which user need the layout supports
- which decision flow is research-informed
- which evidence, scope or uncertainty should be visible
- which business pattern should appear before decision components
- which assumptions are demo-ready but not fully validated
- how asset scope, connectivity status, source scope and source strength affect trust
- why raw Health facts, Intelligence interpretation, expected outcomes and value proof should remain distinguishable

Research should not be copied directly into the generated screen.

Translate knowledge into:

```txt
user need
→ design implication
→ decision flow
→ component sequence
→ review criterion
```

Current evidence status:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Do not treat open questions as fully validated product standards.

---

## Core principle

Design the layout around the decision the user needs to make.

When applicable, also design around the documented user need from
`knowledge/user-needs.md`.

Do not design around available data.

Do not design around visual decoration.

Do not design around AI output first.

The screen should help the user answer:

1. What is happening?
2. Why does it matter?
3. What can I trust?
4. What should I do next?
5. What is observed, what is interpreted and what still needs validation?

Every layout should support a decision flow, not just a data display.

---

## Evidence-aware decision flow

A decision layout should distinguish:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
→ human validation when needed
```

Do not start with recommendations before showing the context or evidence that
supports them.

Preferred flow:

```txt
Visible context
→ asset scope, source scope and source strength when relevant
→ trusted facts and measurable signals
→ risks or blockers
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
```

Avoid:

```txt
AI recommendation
→ missing evidence
→ vague action
```

Important recommendations should be supported by visible or auditable evidence.

For asset-heavy screens, raw Health facts, lifecycle facts and Intelligence
interpretation should not be collapsed into a single visual layer.

Expected outcomes, technical outcomes, internal proof and customer-ready proof
should remain distinguishable when they affect trust.

Critical decisions should keep human validation visible.

---

## Required package usage

Use the published npm package:

```txt
design-system-ai-lab
```

Import components from the package root:

```tsx
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
  RenewalRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not recreate components locally.

Do not create `packages/design-system-ai-lab`.

Do not import from internal package paths.

Do not create local wrappers for package components.

---

## Approved layout vocabulary

### Generic components

Use generic components for reusable UI blocks:

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

### Forms

Use form components for input flows:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

### Decision components

Use decision components to structure metrics, risks and actions:

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `SectionHeader`
- `StatusSummary`

### Business patterns

Use business patterns first when they match the screen intent:

- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerStatusCard`
- `RenewalRiskSummary`
- `ValueProofCard`

Do not manually rebuild a business pattern with raw `Card`, `Badge`, `MetricCard`,
`div`, `dl`, `dt` or `dd` markup.

---

## Standard decision layout

Use this as the default structure for most generated screens:

```txt
PageHeader
Business, customer or asset context pattern
Trusted facts, source scope and source strength when relevant
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
Expected outcome or proof status when relevant
CreateActionDialog or Dialog, if needed
```

This structure supports a clear decision flow:

```txt
orient
→ understand
→ trust
→ prioritize
→ act
```

For asset intelligence screens, add this flow:

```txt
asset context
→ connectivity, source scope and source strength
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or proof status
→ human validation when needed
```

Use `CreateActionDialog` for standard action creation flows.

Use `Dialog` only for focused flows that are not already covered by a business
pattern.

---

## Layout shell

Use a simple shell:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
  <div className="mx-auto max-w-7xl space-y-8">
    ...
  </div>
</main>
```

Use this shell unless the prompt explicitly asks for another layout.

Do not create decorative page wrappers.

Do not create side navigation by default.

Do not create decorative backgrounds, gradients or glassmorphism.

---

## Pattern 1 — Monitoring decision layout

Use this layout when the user needs to monitor a customer, service, system or
account.

### Monitoring use cases

Use this layout when the prompt asks for:

- customer monitoring
- service monitoring
- customer health
- account status
- operational overview
- connected equipment monitoring

### Monitoring layout

```txt
PageHeader
CustomerStatusCard
MetricGrid with MetricCard items
ConnectivityCoverageCard when monitoring coverage matters
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for action creation
```

### Monitoring decision

The user needs to decide:

```txt
What requires attention now, and what should I do next?
```

### Monitoring supported needs

This layout supports:

```txt
Need 1 — Understand the current situation quickly
Need 3 — Trust the information being shown
Need 4 — See what matters most
Need 5 — Understand why a signal matters
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 9 — Understand coverage and visibility limits
Need 21 — Understand asset scope and source strength before trusting asset intelligence
```

### Monitoring metrics

Use up to three metrics such as:

```txt
Connected equipment
Open critical alerts
Overdue actions
Monitoring adoption
Time since last update
```

Every metric should include helper text explaining why it matters.

When trust or freshness affects the decision, include the relevant freshness,
validation or scope cue in the business pattern or metric helper text.

For asset-heavy monitoring, include source scope and source strength when they
affect trust.

### Monitoring alerts

Use alerts such as:

```txt
Connectivity loss on critical equipment
Partial adoption of monitoring features
Customer has not reviewed latest recommendations
Three high-priority actions are overdue
```

Every alert must include a recommendation.

Important recommendations should be supported by visible facts or by context
shown earlier on the screen.

If monitoring visibility is partial, do not imply full system visibility.
Use `ConnectivityCoverageCard` when coverage rate, connected assets,
disconnected assets or freshness affect the decision.

Distinguish connected, partially connected and non-connected assets in text,
not through color alone.

### Monitoring actions

Use actions such as:

```txt
Plan connectivity review with the customer
Review overdue actions with service team
Prepare summary for next customer touchpoint
Assign owner for unresolved alert
```

Every action must include owner, due date and priority.

---

## Pattern 2 — Renewal risk review layout

Use this layout when the user needs to assess renewal, service or customer risk
and decide mitigation actions.

### Renewal risk use cases

Use this layout when the prompt asks for:

- risk review
- renewal risk
- customer risk
- service risk
- escalation risk
- mitigation planning

### Renewal risk layout

```txt
PageHeader
RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for mitigation action creation
```

### Renewal risk decision

The user needs to decide:

```txt
Which risk matters most, what proof is missing and what mitigation action should be launched?
```

### Renewal risk supported needs

This layout supports:

```txt
Need 1 — Understand the current situation quickly
Need 4 — See what matters most
Need 6 — Know what to do next
Need 11 — See value proof over time
Need 12 — Prepare for renewal or customer discussions
Need 19 — Understand unresolved questions and gaps
Need 20 — Move from service activity to customer-ready value
Need 22 — Separate expected outcomes, internal proof and customer-ready proof
```

### Renewal risk metrics

Use up to three metrics such as:

```txt
Renewal readiness
Recommendations reviewed
Overdue mitigation actions
Value proof coverage
Customer engagement
```

Every metric should include helper text explaining why it matters.

### Renewal risk alerts

Use alerts such as:

```txt
Renewal value proof is not customer-ready
Critical mitigation actions are overdue
Monitoring adoption is below expectation
Customer has not reviewed recommendations
```

Do not make unsupported claims about renewal risk.

Do not treat renewal risk signals as fully validated if they depend on open
research questions or unresolved data assumptions.

Make proof gaps visible instead of hiding them behind confident language.

Do not use confidence language as a substitute for source evidence.

Keep expected outcomes, technical outcomes, internal proof and customer-ready
proof distinguishable.

Every alert must include a recommendation.

### Renewal risk actions

Use actions such as:

```txt
Prepare customer-ready value summary
Assign owner to close overdue mitigation actions
Plan customer review of latest recommendations
Prepare executive renewal risk summary
```

Actions should follow from visible renewal context, value proof gaps or priority
risks.

If value proof is not customer-ready, create an action to prepare or validate it
instead of presenting it as confirmed proof.

---

## Pattern 3 — Action planning layout

Use this layout when the primary user decision is about organizing, assigning or
prioritizing work.

### Action planning use cases

Use this layout when the prompt asks for:

- action plan
- follow-up plan
- mitigation plan
- service plan coordination
- customer success plan
- task prioritization

### Action planning layout

```txt
PageHeader
StatusSummary or business context pattern
MetricGrid with MetricCard items
ActionList with ActionCard items
PriorityList with AlertCard items when risks explain actions
CreateActionDialog for action creation or assignment
```

### Action planning decision

The user needs to decide:

```txt
Which actions should be done first, by whom and by when?
```

### Action planning supported needs

This layout supports:

```txt
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 8 — Reduce effort when using the interface
Need 16 — Support internal coordination across roles
Need 18 — Avoid repeated explanations and lost context
```

### Action planning metrics

Use up to three metrics such as:

```txt
Open actions
Overdue actions
High-priority actions
Actions without owner
Actions due this week
```

### Action planning actions

Use actions such as:

```txt
Assign owner for renewal mitigation plan
Review overdue actions with service team
Plan follow-up with the customer
Prepare action status for QBR
```

Actions should include enough context for handoff when another role must act.

### Action planning rule

In this layout, `ActionList` may appear before `PriorityList` if the primary user
task is action planning.

However, if a critical alert explains why an action matters, show the alert
before the action.

---

## Pattern 4 — Value proof layout

Use this layout when the user needs to prepare or validate customer-ready proof
of value.

### Value proof use cases

Use this layout when the prompt asks for:

- value proof
- QBR preparation
- renewal preparation
- executive summary
- customer value summary
- service outcomes

### Value proof layout

```txt
PageHeader
CustomerStatusCard or RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for proof preparation action creation
```

### Value proof decision

The user needs to decide:

```txt
What value can be shown, what is missing and what should be prepared before the customer discussion?
```

### Value proof supported needs

This layout supports:

```txt
Need 5 — Understand why a signal matters
Need 10 — See customer-specific context without losing structure
Need 11 — See value proof over time
Need 19 — Understand unresolved questions and gaps
Need 20 — Move from service activity to customer-ready value
```

### Value proof metrics

Use up to three metrics such as:

```txt
Closed actions
Recommendations completed
Connected equipment
Incidents avoided
QBR readiness
```

### Value proof alerts

Use alerts such as:

```txt
Value proof not yet customer-ready
Recent actions not summarized
Open risks may affect renewal discussion
Customer has not reviewed recommendations
```

### Value proof actions

Use actions such as:

```txt
Prepare customer-ready value summary
Collect proof points from service team
Review open risks before QBR
Share recommendations with the customer
```

Value proof points must be grounded in completed actions, resolved risks,
reviewed recommendations, completed recommendations or measurable outcomes.

Do not make internal operational activity look customer-ready when it still
needs synthesis or validation.

Do not style technical outcomes or internal proof as customer-ready proof
without validation.

If proof is incomplete, show the proof gap and create a follow-up action when
appropriate.

Keep expected outcomes, technical outcomes, internal proof and customer-ready
proof distinguishable.

Do not invent proof points, value outcomes, evidence, sources or citations.

---

## Pattern 5 — Connectivity review layout

Use this layout when the user needs to review monitoring coverage or disconnected
equipment.

### Connectivity review use cases

Use this layout when the prompt asks for:

- connectivity review
- connected assets
- monitoring coverage
- disconnected equipment
- remote monitoring readiness

### Connectivity review layout

```txt
PageHeader
CustomerStatusCard when customer context is needed
ConnectivityCoverageCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for connectivity recovery action creation
```

### Connectivity review decision

The user needs to decide:

```txt
Which connectivity gaps matter most, and what should be done to restore visibility?
```

### Connectivity review supported needs

This layout supports:

```txt
Need 3 — Trust the information being shown
Need 4 — See what matters most
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 9 — Understand coverage and visibility limits
Need 19 — Understand unresolved questions and gaps
```

### Connectivity review metrics

Use up to three metrics such as:

```txt
Connected equipment
Disconnected critical assets
Monitoring coverage
Partially connected assets
Source strength
Time since last connection
```

Do not use GenAI to count connected or disconnected assets.

Structured coverage data should come from APIs, BI tools or source systems.

### Connectivity review alerts

Use alerts such as:

```txt
Connectivity loss on critical equipment
Monitoring coverage below expected level
Disconnected assets affect service visibility
No recent data from key asset group
```

Show freshness when monitoring data may be outdated or operationally sensitive.

Show coverage limits and affected scope when monitoring visibility is partial.

Show source scope and source strength when they affect trust.

Distinguish connected, partially connected and non-connected assets in text,
not through color alone.

Do not imply full operational visibility when only connected or monitored assets
are represented.

### Connectivity review actions

Use actions such as:

```txt
Plan connectivity review with the customer
Verify disconnected equipment list
Schedule technical intervention
Assign owner for connectivity recovery
```

---

## Choosing the right layout

Use this guide:

| User goal | Preferred layout |
| --- | --- |
| Understand current customer status | Monitoring decision layout |
| Assess renewal or service risk | Renewal risk review layout |
| Organize next steps | Action planning layout |
| Prepare value evidence | Value proof layout |
| Review monitoring coverage | Connectivity review layout |

If the prompt combines several goals, choose the layout that matches the primary
user decision.

When available, also choose the layout that best supports the documented user
need in `knowledge/user-needs.md`.

---

## Layout priority rules

### Show context before detail

The user should understand the situation before reading detailed signals.

### Show facts before interpretation

Visible facts should appear before AI output, recommendations or actions.

### Show trust cues when they affect the decision

Show freshness, validation, source scope, coverage limits or proof status when
they affect the user's confidence.

Show source strength when it affects trust.

### Show critical signals before secondary signals

Critical alerts and important metrics should appear early.

### Show recommendations with evidence

Important recommendations should be supported by visible or auditable evidence.

### Show gaps instead of hiding uncertainty

If data, proof or ownership is incomplete, make the gap visible and create a
follow-up action when appropriate.

For asset-heavy screens, gaps include partial asset scope, partially connected
assets, non-connected assets, weak source strength, expected outcomes and proof
gaps.

### Show actions after the reason for action

Do not show action lists without context.

### Keep the primary action visible

The most important action should be visible in the `PageHeader` or near the top
of the screen.

---

## Density rules

Prefer this density:

```txt
1 PageHeader
1 to 2 business context patterns
2 to 4 MetricCard items inside MetricGrid
2 to 5 AlertCard items inside PriorityList
2 to 5 ActionCard items inside ActionList
0 to 1 CreateActionDialog or Dialog
```

Avoid:

```txt
many unrelated cards
more than 6 MetricCard items
overloaded MetricGrid sections
long tables
large chart zones
many equal-priority actions
many weak alerts
```

A good decision layout is dense enough for operational work without becoming
noisy.

---

## Good layout example

```txt
PageHeader: Renewal risk review
RenewalRiskSummary: renewal context and readiness
ValueProofCard: proof status and grounded proof points
MetricGrid: renewal readiness / recommendations reviewed / overdue actions
PriorityList: value proof missing / actions overdue / adoption below expectation
ActionList: prepare value summary / assign owner / review recommendations
CreateActionDialog: create mitigation action
```

This is strong because:

- the user goal is clear
- context comes before detailed signals
- visible facts and proof status come before recommendations
- proof gaps are visible before mitigation actions
- value proof is visible before blockers
- metrics support the risk decision
- alerts explain what matters
- recommendations are visible
- actions translate the risk into next steps
- the action creation flow is standardized

---

## Bad layout example

```txt
PageHeader: Dashboard
MetricCards: 12 unrelated KPIs
Large chart area
Random cards
Table of raw data
Actions at the bottom
```

This is weak because:

- the user decision is unclear
- there are too many metrics
- the hierarchy is generic
- actions are buried
- recommendations are missing
- evidence is not structured
- the screen looks like a generic dashboard

---

## AI usage layout rule

Use BI-first, AI-assisted layout logic when AI is relevant.

Preferred:

```txt
Visible structured facts
→ source scope and evidence strength
→ guided AI synthesis or explanation
→ evidence-aware recommendation
→ owned action
→ expected outcome or proof status when relevant
→ human review or validation when needed
```

Avoid:

```txt
Prompt box first
→ AI answer
→ hidden evidence
→ unclear action
```

Do not use GenAI for basic retrieval, dates, owners, statuses, counts, lists,
standard KPIs, asset coverage, monitoring freshness, renewal status, action
ownership, asset hierarchy, telemetry values, connectivity status, lifecycle
status, source scope or source strength.

Use GenAI only for synthesis, explanation, prioritization, recommendation,
proof gap explanation, grounded action-plan drafting, reformulation, value
proof synthesis or mitigation talking points.

---

## Anti-patterns

Do not generate:

- generic dashboard layouts
- chart-first layouts unless explicitly requested
- data-first layouts without decision hierarchy
- prompt-first layouts for basic structured data
- actions without context
- alerts without recommendations
- recommendations without visible facts or evidence
- unsupported AI interpretation before visible facts
- many cards with equal importance
- overloaded metric grids
- decorative sections
- sidebars unless explicitly requested
- local design system recreations
- local wrappers for package components
- manual reconstructions of business patterns
- GenAI used for basic facts, counts, statuses, owners or dates
- invented proof points, value outcomes, evidence, sources or citations
- hidden partial visibility or missing scope limits
- hidden asset scope, source scope, source strength or proof status when they affect trust
- raw Health facts and Intelligence interpretation shown at the same visual level
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- confidence language used as a substitute for source evidence
- hidden proof gaps or unresolved assumptions
- treating open research questions as fully validated product standards
- screens disconnected from documented user needs when relevant

---

## Review checklist

After generation, verify:

- the chosen layout matches the user goal
- the screen starts with a clear `PageHeader`
- context appears before detailed signals
- visible facts appear before interpretation
- relevant knowledge-layer user needs are reflected when applicable
- open research questions are not presented as fully validated facts
- trust, freshness, uncertainty or scope limits are visible when they affect the decision
- asset scope, source scope, source strength, connectivity status and proof status are visible when they affect trust
- raw Health facts and Intelligence interpretation are separated when both are present
- expected outcomes, technical outcomes, internal proof and customer-ready proof remain distinguishable when relevant
- metrics support the decision
- metrics are grouped with `MetricGrid`
- alerts are grouped with `PriorityList`
- alerts are prioritized by severity or impact
- every alert includes a recommendation
- important recommendations are supported by visible facts
- proof gaps, missing ownership or unresolved assumptions are visible when relevant
- actions are grouped with `ActionList`
- actions are concrete and visible
- every action includes owner, due date and priority
- the primary action is easy to find
- business patterns are used when they match the section intent
- the layout avoids generic dashboard patterns
- no local design system components were created
- no local wrappers were created
- imports come from `design-system-ai-lab`
- styles are imported from `design-system-ai-lab/styles.css`
- GenAI is not used for basic structured retrieval
- GenAI is not used for asset hierarchy, telemetry values, connectivity status, lifecycle status, source scope or source strength
- no invented proof points, value outcomes, evidence, sources or citations are present
- no invented asset facts, telemetry, lifecycle status, expected outcomes or proven value are present
- confidence language does not replace source evidence

---

## Final principle

A decision layout should reduce cognitive effort and support documented user
needs when relevant.

If the user has to search the screen to understand what matters, what can be
trusted, what is observed, what is interpreted, what is missing or what to do
next, the layout should be revised.
