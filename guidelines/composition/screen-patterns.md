# Screen Pattern Guidelines

## Purpose

This file defines reusable screen patterns for Figma Make when generating
interfaces with the `design-system-ai-lab` package.

Screen patterns are more concrete than decision layouts.

They describe complete screen types, their expected content, their recommended
component sequence and the business patterns to use.

The goal is not to generate a generic dashboard.

Screen patterns should be informed by the knowledge layer when the generated
screen relates to documented service experience needs, internal workflows or
open validation questions.

The goal is to generate a screen that supports a clear user task, a documented
user need, a clear decision and a clear next action.

## Knowledge layer

Screen patterns should use the knowledge layer when the prompt relates to known
service experience needs.

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

- which user need the screen supports
- which screen pattern is research-informed
- which business pattern should be used
- what evidence, scope or uncertainty should be visible
- how asset scope, connectivity status, source scope and source strength affect trust
- why raw Health facts, Intelligence interpretation, expected outcomes and value proof should remain distinguishable
- what still needs validation before becoming a stable rule

Research should not be copied directly into the generated screen.

Translate knowledge into:

```txt
user need
→ design implication
→ screen pattern choice
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

## Mandatory principles

Every screen pattern must follow these principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

These principles apply before component choice.

They prevent generated screens that are visually coherent but inaccessible,
noisy, AI-expensive, unsupported by evidence or disconnected from the user
decision.

---

## Core principle

A screen pattern should support a specific user task.

When applicable, it should also support a documented user need from
`knowledge/user-needs.md`.

Do not generate a generic dashboard when a more precise screen pattern fits.

Every generated screen should help the user answer:

1. What is happening?
2. Why does it matter?
3. What can I trust?
4. What should I do next?
5. What is observed, what is interpreted and what still needs validation?

If a screen cannot answer these questions, revise the pattern.

---

## Evidence-aware screen principle

A screen should distinguish:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
→ human validation when needed
```

Do not start with recommendations before showing the facts or context that make
them credible.

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

## Required imports

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

## Approved screen vocabulary

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

## Standard page shell

Use this shell for most generated screens:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
  <div className="mx-auto max-w-7xl space-y-8">
    ...
  </div>
</main>
```

Do not create decorative backgrounds, sidebars or complex navigation unless
explicitly requested.

Do not add decorative gradients or glassmorphism.

---

## Standard screen sequence

Most decision-oriented screens should follow this sequence:

```txt
PageHeader
Business, customer or asset context pattern
Trusted facts, source scope and source strength when relevant
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
Expected outcome or proof status when relevant
CreateActionDialog or Dialog when needed
```

Use business patterns first when they match the intent.

Use `CreateActionDialog` for standard action creation.

Use `Dialog` only for focused flows that are not covered by a business pattern.

For asset intelligence screens, add this sequence:

```txt
PageHeader
customer, site or installed base context
asset scope, connectivity, source scope and source strength
raw Health or lifecycle facts
Intelligence interpretation
evidence-aware recommendations
owned or phased actions
expected outcome or proof status
human validation when needed
```

---

## Pattern 1 — Customer monitoring screen

### Customer monitoring use cases

Use this pattern when the prompt asks for:

- customer monitoring
- customer health
- customer situation review
- service monitoring
- operational account overview
- Customer Success Manager workspace

### Customer monitoring user goal

Help the user understand current customer status, identify priority risks,
understand what can be trusted and decide next actions.

### Customer monitoring supported needs

This pattern supports:

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

### Customer monitoring structure

```txt
PageHeader
CustomerStatusCard
MetricGrid with MetricCard items
ConnectivityCoverageCard when monitoring coverage matters
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for action creation
```

### Customer monitoring recommended content

Use `CustomerStatusCard` for:

- customer name or account context
- plan or contract status
- CSM or owner
- connectivity or coverage status
- renewal timing when relevant
- short operational summary
- concise status badges
- asset scope, connectivity status, source scope and source strength

Use `MetricGrid` with up to three `MetricCard` items such as:

- connected equipment
- open critical alerts
- overdue actions
- monitoring adoption

Use `ConnectivityCoverageCard` when monitoring coverage matters.

Include:

- coverage rate
- connected assets
- partially connected assets
- disconnected assets
- critical disconnected assets when relevant
- affected scope
- source scope and source strength when they affect trust
- last update
- monitoring status

Use `PriorityList` with `AlertCard` items such as:

- connectivity loss on critical equipment
- partial adoption of monitoring features
- customer has not reviewed recommendations
- high-priority actions are overdue

Use `ActionList` with `ActionCard` items such as:

- plan connectivity review with the customer
- review overdue actions with service team
- prepare summary for next customer touchpoint

### Customer monitoring primary action

Prefer:

```txt
Create action
```

or:

```txt
Plan follow-up
```

Use `CreateActionDialog`.

Do not rebuild the action creation flow manually.

### Customer monitoring trust rules

Show visible facts before risks and actions.

Show freshness when monitoring data may be outdated or operationally sensitive.

Show scope and coverage limits when visibility is partial.

Show source strength when it affects trust.

Distinguish connected, partially connected and non-connected assets in text,
not through color alone.

Do not imply full system visibility when only monitored assets are represented.

Do not use GenAI to retrieve customer name, contract, owner, dates, counts,
statuses, standard KPIs, asset hierarchy, telemetry values, connectivity
status, lifecycle status, source scope or source strength.

Do not invent proof points, value outcomes, evidence, sources or citations.

---

## Pattern 2 — Renewal risk review screen

### Renewal risk use cases

Use this pattern when the prompt asks for:

- renewal risk review
- renewal preparation
- churn risk
- account renewal
- risk mitigation before renewal

### Renewal risk user goal

Help the user understand renewal risk, identify missing value proof, understand
whether proof is customer-ready and launch mitigation actions.

### Renewal risk supported needs

This pattern supports:

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

### Renewal risk structure

```txt
PageHeader
RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for mitigation action creation
```

### Renewal risk recommended content

Use `RenewalRiskSummary` for:

- customer name
- plan or contract level
- renewal date or renewal window
- renewal readiness
- value proof status
- recommendations reviewed
- overdue actions
- status badges

Use `ValueProofCard` for:

- value period
- customer objective
- proof status
- customer-ready proof points
- proof gaps

Value proof points must be grounded in completed actions, resolved risks,
reviewed recommendations, completed recommendations or measurable outcomes.

If proof is incomplete, show the proof gap and create a follow-up action when
appropriate.

Keep expected outcomes, technical outcomes, internal proof and customer-ready
proof distinguishable.

Use `MetricGrid` with up to three `MetricCard` items such as:

- renewal readiness
- recommendations reviewed
- overdue mitigation actions
- value proof coverage

Use `PriorityList` with `AlertCard` items such as:

- renewal value proof is not customer-ready
- customer has not reviewed recommendations
- critical mitigation actions are overdue
- monitoring adoption is below expectation

Use `ActionList` with `ActionCard` items such as:

- prepare customer-ready value summary
- assign owner to close overdue mitigation actions
- plan customer review of latest recommendations

### Renewal risk primary action

Prefer:

```txt
Create mitigation action
```

or:

```txt
Start mitigation plan
```

Use `CreateActionDialog`.

Do not rebuild the mitigation action creation flow manually.

### Renewal risk trust rules

Show renewal facts before proof gaps, risks and actions.

Do not make unsupported renewal risk claims.

Do not invent value proof.

Do not treat renewal risk signals as fully validated if they depend on open
research questions or unresolved data assumptions.

Make proof gaps visible instead of hiding them behind confident language.

Do not use confidence language as a substitute for source evidence.

Do not present expected outcomes as proven value.

Do not present technical outcomes or internal proof as customer-ready proof
without validation.

Do not use GenAI to retrieve renewal date, contract owner, customer name,
statuses, counts or standard KPIs.

---

## Pattern 3 — QBR preparation screen

### QBR preparation use cases

Use this pattern when the prompt asks for:

- QBR preparation
- customer business review
- value summary
- executive summary
- proof of value
- customer-ready review

### QBR preparation user goal

Help the user prepare a customer discussion by surfacing proof points, open risks
and next actions.

### QBR preparation supported needs

This pattern supports:

```txt
Need 10 — See customer-specific context without losing structure
Need 11 — See value proof over time
Need 12 — Prepare for renewal or customer discussions
Need 14 — Use AI for synthesis, explanation and drafting
Need 20 — Move from service activity to customer-ready value
```

### QBR preparation structure

```txt
PageHeader
CustomerStatusCard or RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for preparation action creation
```

### QBR preparation recommended content

Use a business context pattern for:

- customer name or account context
- meeting date or preparation window
- audience or stakeholder context
- service plan status
- renewal or value proof status when relevant

Use `ValueProofCard` for:

- closed service actions
- completed recommendations
- avoided risks or improved visibility
- customer-ready talking points
- proof gaps

Use `MetricGrid` with up to three `MetricCard` items such as:

- closed actions
- recommendations completed
- service value proof items
- QBR readiness

Use `PriorityList` with `AlertCard` items such as:

- recent actions not summarized
- open risks may affect customer discussion
- value proof not yet customer-ready

Use `ActionList` with `ActionCard` items such as:

- prepare customer-ready value summary
- collect proof points from service team
- review open risks before QBR

### QBR preparation primary action

Prefer:

```txt
Prepare summary
```

or:

```txt
Create preparation action
```

Use `CreateActionDialog` when creating a preparation action.

### QBR preparation trust rules

Do not invent proof points, value outcomes, evidence, sources or citations.

Use GenAI only for synthesis, explanation, prioritization, recommendation,
proof gap explanation, grounded action-plan drafting or customer-ready
reformulation from grounded facts.

Structured facts should come from APIs, BI tools, databases or source systems.

---

## Pattern 4 — Connectivity review screen

### Connectivity review use cases

Use this pattern when the prompt asks for:

- connectivity review
- monitoring coverage
- disconnected equipment
- connected assets
- remote monitoring readiness

### Connectivity review user goal

Help the user understand monitoring coverage, identify critical connectivity gaps
and plan recovery actions.

### Connectivity review supported needs

This pattern supports:

```txt
Need 3 — Trust the information being shown
Need 4 — See what matters most
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 9 — Understand coverage and visibility limits
Need 19 — Understand unresolved questions and gaps
Need 21 — Understand asset scope and source strength before trusting asset intelligence
```

### Connectivity review structure

```txt
PageHeader
CustomerStatusCard when customer context is needed
ConnectivityCoverageCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for connectivity recovery action creation
```

### Connectivity review recommended content

Use `ConnectivityCoverageCard` for:

- connected assets
- partially connected assets
- disconnected assets
- critical disconnected assets
- affected scope
- source scope and source strength when they affect trust
- last update timing
- monitoring coverage summary
- monitoring status
- coverage badges

Use `MetricGrid` with up to three `MetricCard` items such as:

- connected equipment
- disconnected critical assets
- monitoring coverage
- partially connected assets
- source strength
- time since last connection

Use `PriorityList` with `AlertCard` items such as:

- connectivity loss on critical equipment
- disconnected assets affect service visibility
- monitoring coverage below expected level
- no recent data from key asset group

Use `ActionList` with `ActionCard` items such as:

- plan connectivity review with the customer
- verify disconnected equipment list
- schedule technical intervention
- assign owner for connectivity recovery

### Connectivity review primary action

Prefer:

```txt
Plan connectivity review
```

or:

```txt
Create recovery action
```

Use `CreateActionDialog`.

### Connectivity review trust rules

Show freshness when monitoring data may be outdated or operationally sensitive.

Show coverage limits and affected scope when monitoring visibility is partial.

Show source scope and source strength when they affect trust.

Distinguish connected, partially connected and non-connected assets in text,
not through color alone.

Do not imply full operational visibility when only connected or monitored assets
are represented.

Do not use GenAI to count connected, partially connected or disconnected assets,
or to retrieve asset hierarchy, telemetry values, connectivity status,
lifecycle status, source scope or source strength.

Structured coverage data should come from APIs, BI tools, databases or source
systems.

---

## Pattern 5 — Service action plan screen

### Service action plan use cases

Use this pattern when the prompt asks for:

- action plan
- service action plan
- follow-up plan
- mitigation plan
- customer success plan
- task prioritization

### Service action plan user goal

Help the user understand which actions are open, which are urgent and who owns
them.

### Service action plan supported needs

This pattern supports:

```txt
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 8 — Reduce effort when using the interface
Need 16 — Support internal coordination across roles
Need 18 — Avoid repeated explanations and lost context
```

### Service action plan structure

```txt
PageHeader
StatusSummary or business context pattern
MetricGrid with MetricCard items
ActionList with ActionCard items
PriorityList with AlertCard items when risks explain actions
CreateActionDialog for action creation or assignment
```

### Service action plan recommended content

Use `StatusSummary` or a business pattern for:

- customer or account context
- plan objective
- current status
- coordination need
- action plan readiness

Use `MetricGrid` with up to three `MetricCard` items such as:

- open actions
- overdue actions
- high-priority actions
- actions without owner

Use `ActionList` with `ActionCard` items such as:

- assign owner for renewal mitigation plan
- review overdue actions with service team
- plan follow-up with customer
- prepare action status for QBR

Use `PriorityList` only when alerts explain why a priority action matters.

### Service action plan primary action

Prefer:

```txt
Create action
```

or:

```txt
Assign owner
```

Use `CreateActionDialog`.

### Service action plan trust rules

Actions should be grounded in visible context, risks or recommendations.

Every action must include owner, due date and priority.

Actions should include enough context for handoff when another role must act.

Asset-related actions should include site, zone, room, asset group or asset
context when needed for follow-through.

If ownership is unknown, create an action to assign ownership instead of hiding
that uncertainty.

---

## Pattern 6 — Value proof summary screen

### Value proof summary use cases

Use this pattern when the prompt asks for:

- value proof
- customer value summary
- service outcomes
- proof points
- business value evidence
- value delivered

### Value proof summary user goal

Help the user understand what value can be shown to the customer, what proof is
still missing and what needs validation before customer use.

### Value proof summary supported needs

This pattern supports:

```txt
Need 5 — Understand why a signal matters
Need 10 — See customer-specific context without losing structure
Need 11 — See value proof over time
Need 19 — Understand unresolved questions and gaps
Need 20 — Move from service activity to customer-ready value
Need 22 — Separate expected outcomes, internal proof and customer-ready proof
```

### Value proof summary structure

```txt
PageHeader
CustomerStatusCard or RenewalRiskSummary when context is needed
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for proof preparation action creation
```

### Value proof summary recommended content

Use `ValueProofCard` for:

- customer objective
- service scope
- value period
- proof status
- customer-ready proof points
- proof gaps

Use `MetricGrid` with up to three `MetricCard` items such as:

- closed actions
- recommendations completed
- assets covered
- proof readiness

Use proof points such as:

- completed recommendations
- closed risks
- improved visibility
- resolved connectivity issues
- customer-ready outcomes

Use `PriorityList` with `AlertCard` items such as:

- value proof not yet customer-ready
- recent service work not summarized
- missing owner for value summary

Use `ActionList` with `ActionCard` items such as:

- prepare customer-ready value summary
- collect proof points from service team
- review completed recommendations

### Value proof summary primary action

Prefer:

```txt
Prepare value summary
```

or:

```txt
Create proof action
```

Use `CreateActionDialog` when creating a proof preparation action.

### Value proof summary trust rules

Do not invent proof points.

Do not invent sources or citations.

Proof points should be grounded in completed actions, resolved risks, reviewed
recommendations, completed recommendations or measurable outcomes.

Do not make internal operational activity look customer-ready when it still
needs synthesis or validation.

Do not present technical outcomes or internal proof as customer-ready proof
without validation.

If proof is incomplete, show the proof gap and create a follow-up action when
appropriate.

Keep expected outcomes, technical outcomes, internal proof and customer-ready
proof distinguishable.

---

## Choosing the right screen pattern

Use this guide:

| Prompt intent | Screen pattern |
| --- | --- |
| Monitor customer status | Customer monitoring screen |
| Assess renewal risk | Renewal risk review screen |
| Prepare a customer review | QBR preparation screen |
| Review connected assets | Connectivity review screen |
| Organize next actions | Service action plan screen |
| Prepare value evidence | Value proof summary screen |

When available, also choose the pattern that best supports the documented user
need in `knowledge/user-needs.md`.

If the prompt contains multiple intents, choose the pattern that matches the
primary user task.

---

## Screen content density

Prefer compact screens.

Recommended density:

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
large dashboards
more than 6 MetricCard items
large tables
long reports
many equal-priority cards
many low-value alerts
many weak actions
```

---

## Pattern quality rules

A generated screen should:

- have one clear purpose
- start with a specific `PageHeader`
- show context before detailed signals
- show visible facts before interpretation
- reflect relevant knowledge-layer user needs when applicable
- make trust, freshness, uncertainty or scope limits visible when they affect the decision
- make asset scope, source scope, source strength, connectivity status and proof status visible when they affect trust
- separate raw Health facts and Intelligence interpretation when both are present
- keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinguishable when relevant
- use metrics that support the decision
- group metrics with `MetricGrid`
- explain risks with recommendations
- support important recommendations with visible facts
- group risks with `PriorityList`
- provide concrete actions
- make proof gaps, missing ownership or unresolved assumptions visible when relevant
- group actions with `ActionList`
- make the primary action obvious
- use business patterns when they match the section intent
- remain sober and B2B

---

## AI usage rules

Use BI-first, AI-assisted logic when AI is relevant.

Preferred:

```txt
Visible structured facts
→ source scope and evidence strength
→ guided AI synthesis or explanation
→ evidenced recommendation
→ expected outcome or proof status when relevant
→ human-reviewed action
```

Avoid:

```txt
Prompt box first
→ AI answer
→ hidden evidence
→ unclear action
```

Do not use GenAI for:

- basic retrieval
- dates
- owners
- statuses
- counts
- lists
- standard KPIs
- asset coverage
- monitoring freshness
- renewal status
- action ownership
- value proof source facts
- asset hierarchy
- telemetry values
- connectivity status
- lifecycle status
- source scope
- source strength

Use GenAI only for:

- synthesis
- explanation
- prioritization
- recommendation
- proof gap explanation
- grounded action-plan drafting
- reformulation
- customer-ready value proof synthesis
- mitigation talking points

---

## Bad screen patterns

Do not generate these patterns unless explicitly requested:

```txt
Generic analytics dashboard
Marketing landing page
Decorative hero page
Chart-first dashboard
Large raw data table
Component gallery
Admin settings page
Prompt-first chatbot for basic structured data
```

These patterns are not aligned with the current Make kit goal.

---

## Anti-patterns

Do not generate:

- screens without a clear user goal
- generic `Dashboard` screens
- screens with random component order
- screens with metrics but no interpretation
- screens with alerts but no recommendations
- screens with actions but no owner, due date or priority
- screens with recommendations but no visible evidence
- prompt-first screens for basic structured data
- screens that recreate the design system locally
- screens that create local wrappers for package components
- screens that manually rebuild business patterns
- screens that leave `App.tsx` empty
- screens that use GenAI for basic facts, counts, statuses, owners or dates
- screens that invent proof points, value outcomes, evidence, sources or citations
- screens that hide partial visibility or missing scope limits
- screens that hide asset scope, source scope, source strength or proof status when they affect trust
- screens that show raw Health facts and Intelligence interpretation at the same visual level
- screens that present non-connected assets as live-monitored
- screens that present expected outcomes as proven value
- screens that present technical outcomes or internal proof as customer-ready proof without validation
- screens that use confidence language as a substitute for source evidence
- screens that treat open research questions as fully validated product standards
- screens disconnected from documented user needs when relevant

---

## Review checklist

After generation, verify:

- the chosen screen pattern matches the prompt
- the screen starts with a specific `PageHeader`
- the primary action is clear
- context appears before metrics, risks and actions
- visible facts appear before interpretation
- relevant knowledge-layer user needs are reflected when applicable
- open research questions are not presented as fully validated facts
- trust, freshness, uncertainty or scope limits are visible when they affect the decision
- asset scope, source scope, source strength, connectivity status and proof status are visible when they affect trust
- raw Health facts and Intelligence interpretation are separated when both are present
- expected outcomes, technical outcomes, internal proof and customer-ready proof remain distinguishable when relevant
- metrics support the user decision
- metrics are grouped with `MetricGrid`
- alerts are grouped with `PriorityList`
- alerts include recommendations
- important recommendations are supported by visible facts
- actions are grouped with `ActionList`
- actions include owner, due date and priority
- business patterns are used when they match the section intent
- the visual style remains sober and operational
- components are imported from `design-system-ai-lab`
- styles are imported from `design-system-ai-lab/styles.css`
- no local design system was recreated
- no local wrappers were created
- GenAI is not used for basic structured retrieval
- GenAI is not used for asset hierarchy, telemetry values, connectivity status, lifecycle status, source scope or source strength
- no invented proof points, value outcomes, evidence, sources or citations are present
- no invented asset facts, telemetry, lifecycle status, expected outcomes or proven value are present
- confidence language does not replace source evidence

---

## Final principle

A screen pattern should make the generated interface immediately useful and
research-informed.

If the screen could be renamed `Dashboard` without losing meaning, the pattern is
too generic and should be revised.

If the screen does not support a documented user need when one is relevant, the
pattern is too generic and should be revised.

If the screen does not help the user distinguish what is observed, what is
interpreted, what is expected and what is proven when relevant, the pattern
should be revised.
