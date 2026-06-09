# Guidelines — Design System AI Lab

## Purpose

This file is the main entry point for Figma Make.

Figma Make should read this file first, then use the more specific guideline
files when needed.

These guidelines define how Make should generate interfaces using the
`design-system-ai-lab` package.

The goal is not to generate free-form UI from a blank canvas.

The goal is to generate coherent, accessible, sober, reviewable and reusable
product interfaces by composing the approved design system package.

Generated screens should be useful first drafts.

They are not production-ready by default.

The designer remains responsible for UX judgment, hierarchy, validation and final
quality.

---

## How this file should be used

`Guidelines.md` is the mandatory entry point for Figma Make.

Keep this file concise, operational and generation-oriented.

Use it to define:

- the non-negotiable generation contract
- the required package usage
- the screen intent router
- the approved component vocabulary
- the transversal principles that always apply
- the blocking acceptance criteria
- the correction instruction when generation drifts

Use the more specific guideline files only when Make needs deeper detail about a
component, pattern, principle, prompt or review criterion.

Do not turn `Guidelines.md` into the full design system documentation.

The detailed documentation should remain in the linked files.

---

## Non-negotiable generation contract

When generating code, Figma Make must follow these rules.

These rules are blocking.

If one of them is not respected, the generated screen should be revised before it
is accepted.

1. Render a complete visible screen in `App.tsx`.
2. Import components only from `design-system-ai-lab`.
3. Import styles once from `design-system-ai-lab/styles.css`.
4. Never import from `design-system-ai-lab/dist/*`, `design-system-ai-lab/src/*`, `./components/ui/*` or `packages/design-system-ai-lab/*`.
5. Never create a local `packages/design-system-ai-lab` folder.
6. Never recreate `Button`, `Card`, `Badge`, `Dialog`, form components or business patterns locally.
7. Use business patterns before rebuilding known business sections manually.
8. Use decision components for metrics, risks, recommendations and actions.
9. Use form components for every generated form field.
10. Generate one clear decision-oriented screen, not a generic dashboard.
11. Show visible facts before AI interpretation.
12. Never invent evidence, sources, asset facts, telemetry, citations or value proof.
13. Every `AlertCard` must include a recommendation.
14. Every `ActionCard` must include owner, due date and priority.
15. Expected outcomes must not be presented as proven value.
16. Critical customer, contract, service, renewal, asset or value-proof decisions must keep human validation visible.

Use this package import pattern:

```tsx
import {
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

Do not import from:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
packages/design-system-ai-lab/*
```

Do not create:

```txt
packages/design-system-ai-lab
local Button wrappers
local Card wrappers
local Badge wrappers
local Dialog wrappers
local design-system copies
custom UI primitives that duplicate package components
```

---

## Core principle

Do not generate from imagination.

Generate product interfaces from a governed system:

- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles
- research-informed knowledge
- user needs and design implications
- package components
- form components
- decision components
- business patterns
- CSS styles
- design tokens
- composition rules
- prompt constraints
- acceptance criteria

The design system is the source of truth.

The knowledge layer explains why the system exists and how research should
inform generated screens.

The generated output should be a useful first draft, not a final production
screen.

---

## Mandatory principles

Before generating a screen, apply these four transversal principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

These principles constrain every component, pattern, prompt and composition.

They are not optional review notes.

They are part of the generation contract.

---

## Knowledge layer

The design system includes a lightweight knowledge layer based on UX research,
customer interviews, internal interviews, service experience insights and asset
intelligence domain knowledge.

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

- why screens should be decision-oriented
- why business patterns exist
- why risks must lead to recommendations
- why recommendations must lead to owned actions
- why evidence, freshness and uncertainty matter
- why asset hierarchy, connectivity and source scope affect trust
- why Health data and Intelligence interpretation must be separated
- why expected outcomes are not proven value until evidenced
- why GenAI should be used only where it adds value
- what still needs validation before becoming a stable rule

Research should not be copied directly into generated screens.

It should be translated into user needs, design implications, prompt constraints,
component rules, pattern guidance and review criteria.

Current evidence status:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Open questions should remain visible in `knowledge/open-questions.md` and should
not be treated as fully validated product standards.

For asset-heavy service screens, use `knowledge/asset-intelligence.md` to
preserve installed base hierarchy, connectivity status, source scope,
recommendation traceability and value proof discipline.

---

## Required package

Use the published npm package:

```txt
design-system-ai-lab
```

Import components and patterns from the package root:

```tsx
import {
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
} from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal package paths.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

More details:

```txt
handoff/design-system-package.md
```

---

## Composition order

Figma Make should compose screens in this order:

1. Mandatory principles.
2. Relevant knowledge-layer guidance when the screen relates to documented user needs or asset intelligence.
3. Business patterns when they match the screen intent.
4. Decision components for screen structure.
5. Generic components for reusable UI blocks.
6. Form components for dialogs and input flows.
7. Custom markup only when no existing component or pattern fits.

This order is important.

It prevents Figma Make from rebuilding known business sections manually with raw
`Card`, `Badge`, `div`, `dt` and `dd` markup.

It also prevents Make from producing screens that are visually plausible but
inaccessible, noisy, wasteful or AI-first without reason.

Composition details:

```txt
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
```

---

## Screen intent router

Use this router before selecting components.

A generated screen must support one primary user decision.

Do not include every available business pattern by default.

Use only the patterns that support the requested screen intent.

### Pattern-first routing map

Use business patterns before low-level components when a pattern fits the section
intent.

```txt
Customer context → CustomerStatusCard
Connectivity coverage → ConnectivityCoverageCard
Renewal context → RenewalRiskSummary
Value proof → ValueProofCard
Asset intelligence → AssetIntelligenceSummary
Service risk overview → ServiceRiskSummary
Recommendation review → RecommendationReviewPanel
Customer review readiness → CustomerReviewReadinessCard
Action creation → CreateActionDialog
Metrics → MetricGrid with MetricCard items
Risks and blockers → PriorityList with AlertCard items
Assigned internal actions → ActionList with ActionCard items
Generic structured metadata → StatusSummary
```

Do not rebuild customer context, renewal context, value proof, risk summaries,
recommendation review or action lists with raw `Card` or `div` wrappers when a
dedicated pattern exists.

### Customer monitoring

Use when the user needs to understand customer status, monitoring coverage,
priority service risks and next actions.

Use by default:

- `PageHeader`
- `CustomerStatusCard`
- `MetricGrid` with 2 to 4 `MetricCard` items
- `ConnectivityCoverageCard` when monitoring coverage matters
- `ServiceRiskSummary` when a monitoring or service gap needs synthesis
- `PriorityList` with 2 to 5 `AlertCard` items
- `ActionList` with 2 to 5 `ActionCard` items
- `CreateActionDialog` when action creation is part of the flow

Do not use by default:

- `RenewalRiskSummary`
- `ValueProofCard`
- `CustomerReviewReadinessCard`

Use those only when renewal, value proof or customer review readiness is part of
the requested decision.

### Renewal risk review

Use when the user needs to prepare or mitigate a renewal risk.

Use by default:

- `PageHeader`
- `RenewalRiskSummary`
- `CustomerReviewReadinessCard` when customer discussion readiness matters
- `ValueProofCard` when service outcomes or proof gaps matter
- `MetricGrid` with readiness, adoption or proof metrics
- `PriorityList` with renewal blockers
- `RecommendationReviewPanel` when recommendations need review
- `ActionList` with mitigation actions

Do not use by default:

- `ConnectivityCoverageCard`, unless connectivity affects renewal risk
- `AssetIntelligenceSummary`, unless asset scope affects the review

### Asset recommendation review

Use when the user needs to review asset health, lifecycle, modernization or asset
recommendations.

Use by default:

- `PageHeader`
- `CustomerStatusCard` when customer context matters
- `AssetIntelligenceSummary`
- `ServiceRiskSummary` when partial asset visibility creates service risk
- `RecommendationReviewPanel` with `RecommendationCard` items
- `ActionList` with validation or follow-up actions

Do not use by default:

- `RenewalRiskSummary`
- `ValueProofCard`, unless value proof is explicitly requested

### Customer review readiness or QBR preparation

Use when the user needs to prepare a customer review, QBR, renewal discussion or
service meeting.

Use by default:

- `PageHeader`
- `CustomerStatusCard`
- `CustomerReviewReadinessCard`
- `ValueProofCard` when proof readiness or outcomes matter
- `ServiceRiskSummary` when service risk affects the review
- `RecommendationReviewPanel` when recommendations need review
- `PriorityList` with blockers
- `ActionList` with preparation actions

## Approved vocabulary

### Components

Generic UI components:

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

Use these components for foundational UI and simple compositions.

Prefer business patterns when a specific pattern matches the section intent.

### Forms

Form primitives:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

Use these components for generated forms and dialogs.

Do not generate raw inline-styled form controls.

### Decision components

Decision-oriented composition components:

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `RecommendationCard`
- `SectionHeader`
- `StatusSummary`

Use these components to structure screens around context, metrics, risks,
recommendations and next actions.

### Business patterns

Business patterns:

- `AssetIntelligenceSummary`
- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerReviewReadinessCard`
- `CustomerStatusCard`
- `RecommendationReviewPanel`
- `RenewalRiskSummary`
- `ServiceRiskSummary`
- `ValueProofCard`

Use these patterns first when they match the requested screen.

---

## Screen generation goal

Generated screens should help the user answer four questions:

1. What is happening?
2. Why does it matter?
3. What can I trust?
4. What should I do next?

Do not generate generic dashboards.

Do not display data only because it is available.

Do not use AI only because AI is available.

Prioritize decision support, accessibility, sobriety, evidence, actionability and
clear information hierarchy.

---

## Accessibility principle

Generated screens must be understandable, navigable and actionable.

Figma Make should:

- use package components instead of raw replacements
- keep heading hierarchy clear
- provide visible labels for form controls
- connect `htmlFor` and `id` when possible
- avoid relying only on placeholders
- use explicit button labels
- preserve visible focus states
- avoid communicating status only through color
- use `Dialog` and `CreateActionDialog` with meaningful titles
- keep the reading order logical

Recommended reading order:

```txt
Context
→ Decision signals
→ Risks or readiness gaps
→ Recommendations when needed
→ Actions
```

Do not generate visually correct but inaccessible UI.

Refer to:

```txt
principles/accessibility.md
```

---

## Eco-design principle

Generated screens should be useful, focused and proportionate to the user task.

Figma Make should generate the smallest useful interface that helps the user
understand the situation and decide what to do next.

Prefer:

```txt
Clear context
→ a few useful metrics
→ prioritized risks
→ owned next actions
```

Avoid:

- large dashboards by default
- too many cards
- too many metrics
- too many alerts
- too many actions
- duplicated content
- decorative UI
- unnecessary interactions
- local wrappers
- manual reconstruction of existing patterns
- AI-generated text that does not add decision value

Do not generate more UI than the task requires.

Refer to:

```txt
principles/eco-design.md
```

---

## AI usage principle

Do not use GenAI by default.

Use the right capability for the right job:

```txt
BI shows what is happening.
GenAI helps users understand what it means and what to do next.
Workflow helps users execute.
Human validation protects critical decisions.
```

Use BI, APIs, databases or business tools for:

- retrieval
- filters
- counts
- lists
- dates
- owners
- statuses
- KPIs
- trends
- tables
- structured operational data
- asset hierarchy
- connectivity status
- telemetry values
- lifecycle status
- source scope and source strength

Use GenAI for:

- synthesis
- explanation
- prioritization
- recommendation
- drafting
- reformulation
- summarizing unstructured notes
- proof gap explanation
- grounded action-plan drafting
- customer-ready value narrative drafting after evidence is visible

Do not use GenAI as a SQL engine replacement.

Do not spend GenAI tokens on basic facts that should be retrieved through
structured systems and displayed directly.

Preferred model:

```txt
BI-first, AI-assisted
```

Refer to:

```txt
principles/ai-usage.md
```

---

## Evidence and trust principle

Generated screens must help users understand what is known, what is inferred,
what is recommended and what still needs validation.

Figma Make should distinguish:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or value proof status when relevant
→ human validation when needed
```

Show facts before interpretation.

Use structured components and business patterns to make evidence visible:

- `CustomerStatusCard` for customer facts
- `ConnectivityCoverageCard` for monitoring coverage and freshness
- `RenewalRiskSummary` for renewal context and readiness
- `CustomerReviewReadinessCard` for customer discussion readiness
- `ValueProofCard` for grounded proof points
- `AssetIntelligenceSummary` for asset context, source limits, Health signals and Intelligence interpretation
- `ServiceRiskSummary` for service risk overview
- `RecommendationReviewPanel` and `RecommendationCard` for recommendation review
- `MetricGrid` and `MetricCard` for measurable signals
- `PriorityList` and `AlertCard` for risks and recommendations
- `ActionList` and `ActionCard` for owned next steps

Important facts should include source, source strength, freshness or validation
context when it affects trust.

Do not generate:

- unsupported recommendations
- fake evidence
- fake citations
- invented proof points
- false certainty about incomplete data
- false certainty about partial asset visibility
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- confidence language used as a substitute for source evidence
- embedded components presented as top-level assets unless component-level investigation is required
- AI outputs without visible or auditable facts
- critical decisions without human validation

Refer to:

```txt
principles/evidence-and-trust.md
```

---

## Token and visual style rules

The visual style must remain:

- sober
- B2B
- readable
- structured
- action-oriented
- evidence-aware

Use the design system CSS package and approved utility classes.

Do not create:

- decorative gradients
- glassmorphism
- unrelated color palettes
- arbitrary shadows
- arbitrary border radius values
- decorative charts
- custom card systems
- custom button systems
- custom badge systems
- custom form systems
- decorative images or animations unless they support comprehension

The official token namespace is:

```txt
--ec-*
```

Examples:

```txt
--ec-color-background
--ec-color-surface
--ec-color-text-primary
--ec-color-border
--ec-color-primary
--ec-radius-sm
--ec-shadow-card
```

Compatibility aliases may be available for generated code:

```txt
--background
--foreground
--border
--input-background
--radius-sm
--radius-md
```

These aliases help Figma Make and shadcn-like output.

They do not replace the official `--ec-*` token system.

Refer to:

```txt
tokens.md
styles.md
```

---

## Component usage rules

### PageHeader

Use `PageHeader` at the top of the main screen.

It should clarify:

- the screen objective
- the user task
- the main action when relevant

Use one `PageHeader` per main screen.

Do not use `PageHeader` repeatedly as a section title.

### Button

Use `Button` for explicit user actions.

Use only one primary action per main screen section.

Button labels must be action-oriented.

Use `Button` directly as a `Dialog` trigger.

Do not create a local `ForwardedButton` wrapper.

### Badge

Use `Badge` for short status, tone or metadata.

Do not use badges as buttons.

Do not rely on color alone to communicate status.

### Card

Use `Card` to group related information.

Each card should have one clear purpose.

Prefer business patterns when an existing pattern matches the section intent.

### MetricCard and MetricGrid

Use `MetricCard` only for decision-relevant metrics.

Metrics should include context or helper text.

Avoid vanity metrics.

Wrap multiple metric cards with `MetricGrid`.

### Dialog and CreateActionDialog

Use `Dialog` for short focused creation or confirmation flows.

Use `DialogFooter` and `DialogClose` for custom dialog footers.

Prefer `CreateActionDialog` for action creation flows.

Do not use `Dialog` for complex multi-step workflows.

Do not rebuild action creation manually when `CreateActionDialog` fits.

---

## Form usage rules

Use form components for all generated forms.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Rules:

- use `Field` to group label, control, helper text and errors
- use `Input` for short values
- use `Select` for limited choices
- use `Textarea` for notes and recommendations
- use `Label` directly only for lower-level custom form composition
- connect `htmlFor` and `id` when possible
- do not rely only on placeholders
- do not generate inline-styled `input`, `select` or `textarea` elements

---

## Decision component usage rules

Use `MetricGrid` to arrange decision-relevant metrics.

Use `PriorityList` to group alerts, risks or blockers.

Use `ActionList` to group assigned internal actions.

Use `RecommendationCard` for customer-facing or decision recommendations.

Use `StatusSummary` for structured context and label/value metadata when no
specific business pattern fits.

Use `SectionHeader` for section titles and section-level actions.

Every `AlertCard` must include:

- severity
- title
- equipment or scope
- description
- recommendation

Alert recommendations should be supported by the alert description or by visible
context shown earlier on the screen.

Every `ActionCard` must include:

- title
- owner
- due date
- priority

`ActionCard` is for assigned internal work.

`RecommendationCard` is for recommendation rationale, evidence, priority and
readiness.

Do not use one as a substitute for the other.

---

## Business pattern usage rules

Use `CustomerStatusCard` for customer identity, plan or contract context, owner
context, objectives, assets covered and status.

Use `ConnectivityCoverageCard` for monitoring coverage, connected assets,
disconnected assets, critical disconnected assets, recovery context, source
scope, source strength and freshness.

Use `RenewalRiskSummary` for renewal preparation, renewal readiness, value proof
status, recommendations reviewed and overdue actions.

Use `ValueProofCard` for service outcomes, proof gaps, grounded proof points,
completed actions, recommendations followed, renewal or QBR preparation and the
distinction between expected outcomes, internal proof and customer-ready proof.

Use `AssetIntelligenceSummary` for installed base context, asset source limits,
Health signals, Intelligence interpretation, source strength, freshness and
validation status.

Use `ServiceRiskSummary` for the main service risk, affected scope, source
limits, validation needs and next review focus before detailed blockers,
recommendations or actions.

Use `RecommendationReviewPanel` to frame a set of recommendations with shared
review scope, source context, validation status, customer-readiness and proof
context.

Use `CustomerReviewReadinessCard` to summarize readiness before a QBR, renewal
discussion, service review or customer meeting.

Use `CreateActionDialog` for creating follow-up actions, mitigation actions,
assigned ownership and customer-facing next steps.

---

## Asset intelligence usage rules

Use `knowledge/asset-intelligence.md` when the generated screen involves
installed base, asset health, connectivity coverage, lifecycle modernization,
asset recommendations or value proof linked to assets.

Asset-heavy screens should respect this flow:

```txt
Installed base context
→ connectivity, source scope and source strength
→ raw Health or lifecycle facts
→ interpreted Intelligence
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcomes
→ technical outcome, internal proof or customer-ready proof only when evidenced
```

Rules:

- Level 1 assets should be maintainable physical assets, systems or cabinets.
- Embedded meters, relays, sensors and controllers should remain child components unless component-level investigation is required.
- Brownfield and multi-vendor scope should be visible when it affects trust.
- Source strength should be visible when it affects trust.
- Connectivity status should distinguish connected, partially connected and non-connected assets.
- Non-connected assets must not be presented as live-monitored.
- Health data should show what is observed, sourced and fresh.
- Intelligence should explain what observed facts may mean.
- Recommendations should be traceable to asset context and evidence.
- Expected outcomes are not value proof until actions are completed and evidence is available.
- Technical outcomes and internal proof are not customer-ready proof without validation.
- Customer-ready proof must be distinguished from internal draft proof.

Do not use GenAI to invent asset hierarchy, connectivity status, telemetry,
lifecycle status, data source, source strength, expected outcomes or proven value.

---

## Preferred screen structures

Use `Screen intent router` first.

The structures below are defaults, not mandatory templates.

Figma Make should adapt them to the requested user decision and avoid adding
patterns that do not support that decision.

Detailed screen composition guidance lives in:

```txt
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
```

## AI-assisted output rules

When generating AI-assisted screens:

- show visible structured facts before AI interpretation
- use BI, APIs or source systems for asset hierarchy, connectivity, telemetry and source scope
- show source strength when it affects trust
- separate raw Health data from Intelligence interpretation
- distinguish facts, signals, recommendations and actions
- use guided AI actions instead of prompt-first flows for frequent workflows
- link AI outputs to visible or auditable evidence
- show uncertainty when data may be incomplete, outdated or inferred
- do not use confidence language as a substitute for source evidence
- keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinguishable
- keep human validation for critical decisions
- avoid automatic AI generation on every page load
- avoid sending excessive context to the model by default
- avoid AI text that simply repeats visible structured data
- avoid fake citations, fake evidence, invented sources, invented asset facts or invented value outcomes

Preferred pattern:

```txt
BI-first structured view
→ source scope and evidence strength
→ guided AI action
→ evidenced AI output
→ expected outcome or proof status
→ user review
→ action creation or communication draft
```

---

## Required output quality

Generated code should be:

- React
- TypeScript-friendly
- component-based
- accessible by design
- sober by design
- AI-disciplined when AI is used
- evidence-aware when recommendations or risks are shown
- informed by the knowledge layer when the screen relates to known user needs
- easy to review
- easy to refine
- aligned with the package public API

Generated code should avoid:

- internal package imports
- local component wrappers
- custom design system components
- duplicated token definitions
- inline-styled form fields
- unnecessary state
- unnecessary abstraction
- large unstructured tables
- generic dashboard patterns
- AI-first interfaces without clear user value
- GenAI used for basic data retrieval
- recommendations without visible or auditable evidence
- fake sources, fake citations or invented proof
- embedded asset components modeled as top-level assets without need
- confidence language used as a substitute for source evidence
- technical outcomes or internal proof shown as customer-ready proof without validation
- non-connected assets shown as live-monitored
- expected outcomes shown as proven value
- false certainty when data may be incomplete, outdated, partial or asset scope is limited

---

## Acceptance criteria

### Blocking acceptance criteria

The generated screen should be rejected or revised if any of these checks fail:

- `App.tsx` does not render a complete visible screen.
- components are not imported from `design-system-ai-lab`.
- `design-system-ai-lab/styles.css` is not imported.
- internal package paths are used.
- local design system components are created.
- raw inline-styled form controls are generated.
- an existing business pattern is manually rebuilt with raw markup.
- the screen is a generic dashboard instead of a decision-oriented screen.
- alerts do not include recommendations.
- actions do not include owner, due date and priority.
- important recommendations are not supported by visible or auditable evidence.
- evidence, sources, citations, asset facts, telemetry or value proof are invented.
- expected outcomes are presented as proven value.
- critical decisions do not include human validation.

### Full review criteria

Before considering a generated screen acceptable, verify:

- the screen imports components from `design-system-ai-lab`
- the screen imports `design-system-ai-lab/styles.css`
- the screen uses approved components and patterns
- the screen follows accessibility principles
- the screen follows eco-design principles
- AI usage follows AI usage principles when AI is present
- the screen follows evidence and trust principles
- the screen reflects relevant knowledge-layer user needs when applicable
- the screen applies asset intelligence guidance when installed base, connectivity, asset health or recommendations are involved
- asset scope, connectivity status and source scope are visible when they affect trust
- source strength is visible when it affects trust
- raw Health data is separated from Intelligence interpretation when both are present
- the screen does not treat open research questions as fully validated facts
- the screen uses form components for form fields
- form controls have visible labels
- `htmlFor` and `id` are connected when possible
- the screen avoids internal package imports
- the screen avoids local component wrappers
- the screen avoids local design-system folders
- the screen avoids inline-styled raw form controls
- the screen has one clear user goal
- the primary action is obvious
- metrics support a decision
- metric count is limited and useful
- every alert includes a recommendation
- every action includes owner, due date and priority
- risks and actions are prioritized
- duplicated content is avoided
- the visual style remains sober and B2B
- GenAI is not used for simple retrieval, filtering, counts, dates, owners or statuses
- AI recommendations are linked to evidence when AI is used
- important recommendations are supported by visible or auditable evidence
- uncertainty is visible when data may be incomplete, outdated or inferred
- partial asset visibility is visible when scope is limited
- non-connected assets are not presented as live-monitored
- expected outcomes are not presented as proven value
- technical outcomes and internal proof are not presented as customer-ready proof without validation
- confidence language does not replace source evidence
- no fake evidence, fake citations or invented sources are present
- human validation is present for critical decisions
- the screen can be explained in terms of user decision-making

Detailed review files:

```txt
review/acceptance-checklist.md
review/anti-patterns.md
```

---

## Repair instruction

Use this instruction when Make drifts away from the package, recreates components,
creates a generic dashboard or ignores the generation contract.

If generated code recreates components or creates a local package, revise it
using this instruction:

```txt
Revise the project.

Do not create or use packages/design-system-ai-lab.
Use the published npm package design-system-ai-lab directly.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Remove custom components that duplicate the design system package.
Use business patterns when they match the section intent.
Use form components instead of inline-styled raw inputs.
Follow accessibility, eco-design, AI usage, evidence and trust principles, and relevant knowledge-layer guidance.
Use BI-first, AI-assisted logic when AI is relevant.
The result must render a complete visible screen in App.tsx.
```

---

## Recommended first prompt

Use this prompt for the first Make test:

```txt
Create a complete visible desktop customer monitoring screen in App.tsx.

Use the npm package design-system-ai-lab.

Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not recreate the design system components.
Do not leave App.tsx empty.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles
- knowledge-layer guidance, including asset intelligence when asset scope or connectivity matters

User role:
Service team member or customer success user.

User goal:
Help the user understand customer status, identify priority risks and decide the next best actions.

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer, plan, contract, owner, renewal date and coverage
3. MetricGrid with three decision-relevant metrics
4. ConnectivityCoverageCard for monitoring coverage
5. ServiceRiskSummary when the monitoring gap affects customer communication or service follow-up
6. PriorityList with AlertCard items sorted by severity
7. ActionList with ActionCard items for recommended next steps

Content requirements:
- Every alert must include a recommendation
- Every important recommendation must be supported by visible facts
- Every action must include owner, due date and priority
- Metrics must include helper text explaining why they matter
- Show freshness or validation context when data may be outdated or uncertain
- Show asset scope, connectivity status and source scope when they affect trust
- Show source strength when it affects trust
- Keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinguishable
- Do not present non-connected assets as live-monitored
- Do not present expected outcomes as proven value
- Do not duplicate customer context across sections

AI usage constraints:
- Do not use GenAI to retrieve basic customer facts
- Do not use GenAI to retrieve asset hierarchy, connectivity, telemetry, lifecycle status, source scope or source strength
- Use AI only for synthesis, explanation, prioritization, recommendation, proof gap explanation, grounded action-plan drafting or reformulation
- Show visible facts before any AI-assisted interpretation
- Use AI only after visible structured facts are shown
- Do not invent proof points, value outcomes, evidence, sources, citations, asset facts or telemetry
- Keep human validation visible for critical customer, contract, service, renewal, asset intelligence, modernization and value proof decisions

Visual constraints:
- B2B
- sober
- readable
- no gradients
- no glassmorphism
- no decorative charts
- no generic SaaS dashboard

Generate the complete visible screen.
```

More prompts:

```txt
prompts/template.md
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
```

---

## Related guideline files

Use the additional guideline files for more detail:

```txt
setup.md
tokens.md
styles.md
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
components/button.md
components/badge.md
components/card.md
components/dialog.md
components/metric-card.md
components/page-header.md
forms/field.md
forms/input.md
forms/label.md
forms/select.md
forms/textarea.md
decision/action-card.md
decision/action-list.md
decision/alert-card.md
decision/metric-grid.md
decision/priority-list.md
decision/recommendation-card.md
decision/section-header.md
decision/status-summary.md
patterns/asset-intelligence-summary.md
patterns/connectivity-coverage-card.md
patterns/create-action-dialog.md
patterns/customer-review-readiness-card.md
patterns/customer-status-card.md
patterns/recommendation-review-panel.md
patterns/renewal-risk-summary.md
patterns/service-risk-summary.md
patterns/value-proof-card.md
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
prompts/overview.md
prompts/template.md
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
review/acceptance-checklist.md
review/anti-patterns.md
handoff/design-system-package.md
handoff/demo-flow.md
```

---

## Final principle

Figma Make should not generate from imagination.

It should generate from a governed system:

- package components
- form components
- decision components
- business patterns
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles
- research-informed knowledge
- user needs and design implications
- asset intelligence domain knowledge when relevant
- CSS styles
- token rules
- component rules
- screen patterns
- prompt constraints
- acceptance criteria

The result should be accessible, sober, useful, evidence-aware,
research-informed and reviewable.

If a generated screen is visually consistent but inaccessible, noisy,
AI-expensive, unsupported by evidence, disconnected from the user decision or
misleading about asset scope, connectivity or value proof, it should not be
accepted.
