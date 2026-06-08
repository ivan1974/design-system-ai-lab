# Renewal Risk Review Prompt

## Purpose

This file provides a ready-to-use Figma Make prompt for generating a renewal risk
review screen with the `design-system-ai-lab` package.

Use this prompt when the goal is to help a Customer Success Manager or Renewal
Manager understand renewal exposure, identify missing value proof, review
recommendation readiness and launch mitigation actions before a renewal
discussion.

This prompt is aligned with the v0.2.1 Make-ready design system guidance and
should use business patterns before low-level components.

It follows the shared prompt structure defined in:

```txt
prompts/template.md
```

---

## Screen intent

Generate a decision-oriented renewal risk review screen.

The screen should help the user answer:

1. What is the renewal situation?
2. Why might the renewal be at risk?
3. Is the customer discussion ready?
4. What value proof is missing or not customer-ready?
5. Which recommendations need review before customer use?
6. What mitigation action is needed next?

Do not generate a generic dashboard.

Do not generate a financial reporting page.

Do not generate a component gallery.

Do not generate a local design system.

Do not generate a chatbot-first interface for basic renewal facts.

Do not rebuild renewal, proof, recommendation or action sections with raw `Card`
or `div` wrappers when a business pattern exists.

---

## Required package instruction

The generated project must use the published npm package:

```txt
design-system-ai-lab
```

Components must be imported from:

```txt
design-system-ai-lab
```

Styles must be imported from:

```txt
design-system-ai-lab/styles.css
```

Do not create a local package named `design-system-ai-lab`.

Do not create `packages/design-system-ai-lab`.

Do not recreate the design system components locally.

Do not create local wrappers for package components.

Do not import from `dist/`.

Do not import from `src/`.

Do not use internal package imports.

---

## Expected imports

Use this import pattern:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  CreateActionDialog,
  CustomerReviewReadinessCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  RecommendationCard,
  RecommendationReviewPanel,
  RenewalRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

Use only the imports that are actually needed in the generated screen, but import
all components from the package root.

---

## Primary prompt

Use this prompt for the first renewal risk review screen generation:

```txt
Create a complete visible desktop renewal risk review screen in App.tsx.

Use the npm package design-system-ai-lab.

Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Expected imports:

import {
  ActionCard,
  ActionList,
  AlertCard,
  CreateActionDialog,
  CustomerReviewReadinessCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  RecommendationCard,
  RecommendationReviewPanel,
  RenewalRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.
Do not use internal package imports.
Do not leave App.tsx empty.

Use bg-(--ec-color-background) for the main page background.
Do not use bg-background for the main page background unless explicitly testing compatibility aliases.

Use only these Badge tone values:
- neutral
- primary
- success
- warning
- danger

Do not use tone="info".
For informational badges, use tone="neutral".
For partial, uncertain, review-needed or not-customer-ready badges, use tone="warning".

Use business patterns before low-level components when a pattern fits the section intent.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles

User role:
Customer Success Manager or Renewal Manager.

User goal:
Help the user understand renewal exposure, identify missing value proof, review recommendation readiness and decide which mitigation actions should be launched before the renewal discussion.

Screen pattern:
Renewal risk review screen.

Screen structure:
1. PageHeader with title, description and CreateActionDialog for mitigation action creation.
2. RenewalRiskSummary with customer, renewal window, readiness, value proof status, recommendations reviewed, overdue actions, renewal risk reason, proof readiness, validation status and source context.
3. CustomerReviewReadinessCard for customer discussion readiness, proof readiness, recommendation readiness, risk status, action readiness and validation status.
4. ValueProofCard with period, customer objective, proof status, proof readiness, validation status, source context, expected outcome and grounded proof points.
5. MetricGrid with three decision-relevant MetricCard items.
6. PriorityList with AlertCard items for renewal blockers sorted by severity or business impact.
7. RecommendationReviewPanel with RecommendationCard items when recommendations need review before customer use.
8. ActionList with ActionCard items for mitigation actions.

Required components and patterns:
- PageHeader
- CreateActionDialog
- RenewalRiskSummary
- CustomerReviewReadinessCard
- ValueProofCard
- MetricGrid
- MetricCard
- PriorityList
- AlertCard
- RecommendationReviewPanel
- RecommendationCard
- ActionList
- ActionCard

Content requirements:
- Use RenewalRiskSummary for renewal context.
- Use CustomerReviewReadinessCard when customer discussion readiness matters.
- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Use RecommendationReviewPanel with RecommendationCard items when recommendations need review.
- Use PriorityList with AlertCard items for renewal blockers.
- Use ActionList with ActionCard items for assigned mitigation actions.
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts.
- Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
- Do not generate a RecommendationCard without the recommendation prop.
- Do not generate a RecommendationCard without the scope prop.
- Every action must include owner, due date and priority.
- Value proof points must be grounded in completed actions, resolved risks, reviewed recommendations or measurable outcomes.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Metrics must include helper text explaining why they matter.
- Critical renewal risks should appear before warning and neutral informational risks.
- High-priority mitigation actions should appear before medium and low-priority actions.
- Button labels must be explicit and action-oriented.
- Do not duplicate renewal, proof or recommendation context across sections.
- Do not invent proof points, evidence, sources, citations or customer facts.
- The screen must help answer: what is happening, why it matters and what to do next.

AI usage constraints:
- Do not use GenAI to retrieve basic renewal facts.
- Do not use GenAI to retrieve the renewal date, contract owner, customer name, status, counts or KPIs.
- Assume structured renewal data comes from APIs, BI tools, databases or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not spend GenAI tokens on customer name, plan, contract, renewal date, owner, status, counts, lists or standard KPIs.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status or proof readiness.

Evidence and trust constraints:
- Show visible facts before interpretation.
- Distinguish facts, signals, recommendations and actions.
- Every important recommendation must be supported by visible or auditable evidence.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show freshness when renewal, proof, recommendation or action data may be outdated.
- Show validation status when content may be used for customer, contract, service, renewal or value proof decisions.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Do not make unsupported renewal risk claims.
- Keep human validation visible for critical customer, contract, service, renewal or proof decisions.
- Do not claim AI validation or automatic approval.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Use display components, not disabled form fields, for display-only facts.

Value proof constraints:
- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Show validation status when proof needs review before customer use.
- Show source context when proof trust depends on source scope or freshness.
- Use ActionList and ActionCard for assigned proof preparation work.

Recommendation review constraints:
- Use RecommendationReviewPanel to frame the recommendation set.
- Use RecommendationCard for each individual recommendation.
- Each RecommendationCard should include priority, readiness, rationale and evidence.
- The panel should carry shared review scope, source context, validation status, customer-readiness and proof context.
- Do not use RecommendationReviewPanel to approve recommendations.
- Do not claim AI validation or automatic approval.
- Use CreateActionDialog only to create accountable follow-up work, not to approve the recommendation.
- Use ActionList for assigned internal actions.

Suggested renewal context:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Contract: #NS-2024-118
- Renewal date: Sep 15, 2026
- Renewal window: 90 days
- Renewal readiness: Medium
- Value proof status: Incomplete
- Recommendations reviewed: 5 of 12
- Overdue actions: 4 mitigation actions
- Renewal risk reason: value proof is incomplete and mitigation actions are overdue
- Customer objective: improve service visibility before renewal
- Proof readiness: internal proof, not customer-ready
- Validation status: proof review needed before customer use
- Source context: closed service actions and recommendation history from the last 90 days
- Status badges: active plan, renewal watch, value proof incomplete, proof review needed
- Badge tone guidance: Active plan = primary, Renewal in 90 days = neutral, Renewal watch = warning, Value proof incomplete = warning, Proof review needed = warning

Suggested customer review readiness:
- Review type: Renewal discussion
- Review date: Jun 24, 2026
- Review readiness: Needs review
- Proof readiness: Internal proof, not customer-ready
- Recommendation readiness: Recommendations need source and proof review
- Risk status: Three renewal blockers need review
- Action readiness: Proof follow-up and mitigation actions need ownership confirmation
- Validation status: Review before customer use
- Source context: Closed service actions and monitored assets from the last 90 days

Suggested value proof:
- Period: Last 90 days
- Customer objective: Improve service visibility before renewal
- Proof status: Customer-ready summary incomplete
- Proof readiness: Internal proof, not customer-ready
- Validation status: Proof review needed
- Source context: Closed service actions, resolved risks and recommendation history from the last 90 days
- Expected outcome: stronger renewal discussion after proof consolidation, not yet proven value
- Badges: Proof incomplete, Review needed, Internal proof
- Badge tone guidance: Proof incomplete = warning, Review needed = warning, Internal proof = warning
- Proof point: Closed actions, value: 12 service actions closed during the period, including 3 high-priority actions linked to monitoring coverage, pending customer-ready synthesis
- Proof point: Recommendations delivered, value: 5 recommendations reviewed with the customer team and linked to service objectives
- Proof point: Remaining proof gap, value: resolved risks and monitoring progress still need to be translated into customer-ready language

Suggested metrics:
- Renewal readiness: Medium, helper: value proof and mitigation actions need review before renewal, trend: stable, trend tone: neutral
- Recommendations reviewed: 42%, helper: 5 of 12 recent recommendations reviewed by the customer, trend: +12% this quarter, trend tone: success
- Overdue mitigation actions: 4, helper: action plan should be updated this week, trend: +3 since last review, trend tone: warning

Suggested alerts:
- Critical: Renewal value proof is not customer-ready, scope: Renewal preparation, description: Value proof is incomplete and cannot yet support a confident renewal discussion, recommendation: prepare a customer-ready value summary before the renewal meeting, evidenceSummary: internal proof exists but validation is still needed, sourceScope: closed service actions and recommendation history, sourceStrength: partial, freshness: last 90 days, validationStatus: proof review needed before customer use.
- Warning: Customer has not reviewed latest recommendations, scope: Customer portal, description: The latest recommendations have not been reviewed by the customer team, recommendation: plan a recommendation review with the customer before the renewal discussion, evidence: 5 of 12 recommendations reviewed.
- Warning: Critical mitigation actions are overdue, scope: Mitigation action plan, description: Overdue actions reduce confidence in renewal readiness, recommendation: assign owners and confirm due dates this week, evidence: 4 mitigation actions overdue.

Suggested recommendation review:
- Review scope: Renewal preparation
- Review status: Proof and source review needed
- Source context: Closed service actions and recommendation history
- Validation status: Review before customer use
- Customer readiness: Not customer-ready
- Proof context: Internal proof, not customer-ready
- Recommendation 1 title: Prepare customer-ready value proof summary
- Recommendation 1 recommendation: Prepare a customer-ready value proof summary before the renewal meeting.
- Recommendation 1 priority: high
- Recommendation 1 readiness: needs_review
- Recommendation 1 scope: Renewal preparation
- Recommendation 1 rationale: The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity.
- Recommendation 1 evidenceSummary: 12 actions were closed during the period, but proof has not been consolidated for customer use.
- Recommendation 1 proofStatus: Internal proof, not customer-ready
- Recommendation 1 validationStatus: Review before customer use
- Recommendation 2 title: Review unresolved recommendations with the customer team
- Recommendation 2 recommendation: Plan a recommendation review with the customer team before the renewal discussion.
- Recommendation 2 priority: medium
- Recommendation 2 readiness: needs_review
- Recommendation 2 scope: Customer recommendation review
- Recommendation 2 rationale: Unreviewed recommendations could weaken confidence if they are not prioritized or explained before the renewal meeting.
- Recommendation 2 evidenceSummary: 5 of 12 recommendations have been reviewed.
- Recommendation 2 validationStatus: Review before customer use

Generated RecommendationCard examples must follow this shape:

<RecommendationCard
  title="Prepare customer-ready value proof summary"
  recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
  priority="high"
  readiness="needs_review"
  rationale="The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity."
  scope="Renewal preparation"
  evidenceSummary="12 actions were closed during the period, but proof has not been consolidated for customer use."
  proofStatus="Internal proof, not customer-ready"
  validationStatus="Review before customer use"
/>

Suggested actions:
- Prepare customer-ready value summary, owner: CSM, due date: before renewal meeting, priority: high, status: todo, proof context: internal proof not customer-ready, validation status: proof review needed
- Plan recommendation review with the customer, owner: CSM, due date: next 5 business days, priority: high, status: todo, context: recommendations need review before renewal discussion
- Assign owners for overdue mitigation actions, owner: Service Manager, due date: this week, priority: medium, status: in_progress, context: overdue actions reduce renewal confidence

Visual constraints:
- B2B
- sober
- readable
- structured
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no decorative hero sections
- no generic SaaS dashboard
- no financial reporting page
- no custom design system components
- no visual styling that hides uncertainty

Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package is created.
- No local design system components are recreated.
- No local wrappers for package components are created.
- No internal package imports are used.
- The screen includes PageHeader, CreateActionDialog, RenewalRiskSummary, CustomerReviewReadinessCard, ValueProofCard, MetricGrid, MetricCard, PriorityList, AlertCard, RecommendationReviewPanel, RecommendationCard, ActionList and ActionCard.
- Business patterns are used when they match the section intent.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- Visible renewal facts appear before proof gaps, risks, recommendations and actions.
- Value proof points are grounded in visible or stated evidence.
- Internal proof is not presented as customer-ready proof without validation.
- Expected outcomes are not presented as proven value.
- Every alert includes a recommendation.
- Every important recommendation is supported by visible facts.
- Every RecommendationCard includes title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
- No RecommendationCard is generated without recommendation.
- No RecommendationCard is generated without scope.
- No Badge uses tone="info".
- The main page background uses bg-(--ec-color-background).
- Every action includes owner, due date and priority.
- Source context, source strength, freshness or validation status is visible when trust matters.
- The primary mitigation action is clear.
- The screen does not claim AI validation or automatic approval.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Short prompt

Use this shorter version when the Make kit already contains the guidelines:

```txt
Create a complete visible renewal risk review screen in App.tsx using design-system-ai-lab.

Use imports from design-system-ai-lab and import design-system-ai-lab/styles.css.
Use bg-(--ec-color-background) for the main page background.
Use only supported Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

Do not create a local package, local wrappers, internal imports or recreate the design system components.

Use business patterns before low-level components when a pattern fits the section intent.

Follow accessibility, eco-design, AI usage, and evidence and trust principles.

User role: Customer Success Manager or Renewal Manager.
User goal: understand renewal exposure, identify missing value proof, review recommendation readiness and launch mitigation actions before the renewal discussion.

Use this structure:
1. PageHeader with CreateActionDialog for mitigation action creation
2. RenewalRiskSummary for customer, renewal window, readiness, value proof status, recommendations reviewed, overdue actions, proof readiness, validation status and source context
3. CustomerReviewReadinessCard for customer discussion readiness
4. ValueProofCard for proof readiness, grounded proof points and proof gaps
5. MetricGrid with three MetricCard items
6. PriorityList with AlertCard items sorted by severity or business impact
7. RecommendationReviewPanel with RecommendationCard items when recommendations need review
8. ActionList with ActionCard items for mitigation actions

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts.
Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
Do not generate a RecommendationCard without recommendation.
Do not generate a RecommendationCard without scope.
Every action must include owner, due date and priority.
Value proof points must be grounded in completed actions, resolved risks, recommendations or measurable outcomes.
Distinguish internal proof from customer-ready proof.
Distinguish expected outcomes from proven value.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not use GenAI to retrieve basic renewal facts.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.
Keep the screen sober, B2B, evidence-aware and renewal-decision oriented.
```

---

## Correction prompt — local components were created

Use this if Make creates local components or a local package:

```txt
Revise the project.

Use the published npm package design-system-ai-lab directly.

Do not create or use packages/design-system-ai-lab.
Do not recreate PageHeader, Card, MetricCard, MetricGrid, AlertCard, PriorityList, ActionCard, ActionList, Badge, Button, Dialog, Field, Input, Label, Select, Textarea, StatusSummary, RecommendationCard, CreateActionDialog or business patterns.
Do not use local components such as ./components/ui/button or ./components/ui/card.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.

Update App.tsx to import all design system components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Use bg-(--ec-color-background) for the main page background.
Use only supported Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

Remove any local design system components that duplicate the package API.

Use business patterns when they match the section intent.
Use form components instead of inline-styled raw inputs.
Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Use BI-first, AI-assisted logic when AI is relevant.
Show visible facts before interpretation.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.

The result must render a complete visible renewal risk review screen in App.tsx.
```

---

## Correction prompt — App.tsx is empty

Use this if Make installs packages but does not render a screen:

```txt
Revise App.tsx.

App.tsx must render a complete visible desktop renewal risk review screen.

Use components imported from design-system-ai-lab.
Use the existing package CSS from design-system-ai-lab/styles.css.
Use bg-(--ec-color-background) for the main page background.
Use only supported Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

Create a renewal risk review screen for a Customer Success Manager or Renewal Manager.

The screen must include:
- PageHeader
- CreateActionDialog
- RenewalRiskSummary
- CustomerReviewReadinessCard
- ValueProofCard
- MetricGrid with MetricCard items
- PriorityList with AlertCard items
- RecommendationReviewPanel with RecommendationCard items
- ActionList with ActionCard items

Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.

Do not stop after package setup.
Generate the visible interface now.
```

---

## Correction prompt — screen is too generic

Use this if the generated screen looks like a generic dashboard:

```txt
Revise the screen to make it more renewal-risk oriented and evidence-aware.

Do not generate a generic dashboard.
Do not generate a financial reporting page.

The screen should help a Customer Success Manager or Renewal Manager answer:
1. What is the renewal situation?
2. Why might the renewal be at risk?
3. Is the customer discussion ready?
4. What value proof or mitigation action is needed next?

Replace generic cards or charts with:
- RenewalRiskSummary for renewal context
- CustomerReviewReadinessCard for customer discussion readiness
- ValueProofCard for proof readiness, proof points and proof gaps
- MetricGrid with three decision-relevant MetricCard items
- PriorityList with AlertCard items sorted by severity or business impact
- RecommendationReviewPanel with RecommendationCard items when recommendations need review before customer use
- ActionList with ActionCard items for mitigation actions
- CreateActionDialog for mitigation action creation

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts.
Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
Do not generate a RecommendationCard without recommendation.
Do not generate a RecommendationCard without scope.
Use only supported Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".
Every action must include owner, due date and priority.
Value proof points must be grounded in completed actions, resolved risks, recommendations or measurable outcomes.
Distinguish internal proof from customer-ready proof.
Distinguish expected outcomes from proven value.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not invent proof points, evidence, sources or citations.
Do not use GenAI to retrieve basic renewal facts.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.

Keep the visual style sober, B2B and operational.
```

---

## Expected screen sections

A strong renewal risk review screen should include these sections.

### Page header

Recommended title:

```txt
Renewal risk review
```

Recommended description:

```txt
Review renewal signals, proof readiness, recommendation readiness and mitigation actions before the customer discussion.
```

Recommended primary action:

```txt
Create mitigation action
```

Use `CreateActionDialog` for the primary action.

---

### Renewal risk summary

Use `RenewalRiskSummary` for renewal status.

The renewal risk summary should include:

- customer name
- plan or contract level
- renewal date or renewal window
- renewal readiness
- value proof status
- recommendations reviewed
- overdue actions
- renewal risk reason when it affects interpretation
- customer objective when it affects the renewal decision
- proof readiness when it affects renewal confidence
- validation status when renewal content needs review before customer use
- source context when source scope or strength affects trust
- status badges

Recommended badges:

```txt
Active plan
Renewal in 90 days
Value proof incomplete
Renewal watch
Proof review needed
```

Do not rebuild renewal context with a generic `Card` or `StatusSummary` when
`RenewalRiskSummary` fits.

Do not use `RenewalRiskSummary` to explain proof maturity, recommendation
rationale or mitigation action ownership in detail.

---

### Customer review readiness

Use `CustomerReviewReadinessCard` when the screen prepares a customer-facing
renewal discussion.

The customer review readiness section should include:

- customer name
- review type
- review date when relevant
- customer objective
- review readiness
- proof readiness
- recommendation readiness
- risk status
- action readiness
- validation status
- source context when source scope affects trust

Do not mark the review as customer-ready when proof is internal,
recommendations need review, source evidence is partial or validation status is
missing.

---

### Value proof

Use `ValueProofCard` for value proof.

The value proof section should include:

- period
- customer objective
- proof status
- proof readiness
- validation status
- source context when proof trust depends on source scope or freshness
- expected outcome only when the value is not yet proven
- concise proof badges
- proof points grounded in evidence

Recommended proof point themes:

```txt
closed actions
recommendations delivered
resolved risks
remaining proof gap
customer-ready outcomes
expected renewal impact clearly labeled as expected
```

Do not invent proof points.

Do not present internal proof as customer-ready proof without validation.

Do not present expected outcomes as proven value.

Do not use `ValueProofCard` as a raw metric list.

---

### Metrics

Use `MetricGrid` with `MetricCard` items.

Use three metrics by default.

Recommended metrics:

```txt
Renewal readiness
Recommendations reviewed
Overdue mitigation actions
```

Alternative metrics:

```txt
Connected equipment
Value proof coverage
Customer engagement
```

Each metric should include helper text.

Use trend tone only when the direction and interpretation are clear.

Do not generate metrics without interpretation.

Do not generate more metrics just to fill space.

---

### Alerts

Use `PriorityList` with `AlertCard` items.

Alerts should be sorted by severity or business impact.

Use `critical` first, then `warning`, then neutral informational items when needed.

Each alert must include:

- severity
- title
- scope or equipment
- description
- recommendation
- evidence summary when useful
- source scope when trust matters
- source strength when evidence is partial, inferred or uncertain
- freshness when data may be outdated
- validation status when customer use is possible

Recommended alert themes:

```txt
value proof not visible enough
recommendations not reviewed
mitigation actions overdue
monitoring adoption below expectation
open risks may affect renewal discussion
```

Important recommendations should be supported by the alert description or visible
context shown earlier on the screen.

Do not generate alerts without recommendations.

Do not make unsupported claims about renewal risk.

---

### Recommendation review

Use `RecommendationReviewPanel` with `RecommendationCard` items when multiple
recommendations need review before customer use.

The recommendation review section should include:

- review scope
- review status
- source context
- validation status
- customer readiness
- proof context
- recommendation cards with title, recommendation, priority, readiness, rationale, scope and evidence summary

Use `RecommendationCard` for individual recommendation rationale.

Every generated `RecommendationCard` must include:

```txt
title
recommendation
priority
readiness
rationale
scope
evidenceSummary
```

Do not generate a `RecommendationCard` without `recommendation`.

Do not generate a `RecommendationCard` without `scope`.

Do not use `RecommendationReviewPanel` to approve recommendations.

Do not claim AI validation or automatic approval.

Do not present expected outcomes as proven value.

---

### Actions

Use `ActionList` with `ActionCard` items.

Mitigation actions should be concrete.

Each action must include:

- title
- owner
- due date
- priority
- status when useful
- context when the reason for the action is not obvious
- source context when the action depends on evidence review
- validation status when customer communication is involved
- proof context when the action prepares value proof

High-priority mitigation actions should appear first.

Recommended action themes:

```txt
prepare value summary
plan recommendation review
assign owners for overdue actions
collect proof points from service team
review open risks before renewal meeting
validate customer-ready wording
```

Actions should follow from visible renewal context, proof gaps, risks or
recommendations.

Remember: `ActionCard` is for assigned internal work, not customer-facing
recommendation rationale.

---

### Action creation

Use `CreateActionDialog` for a short mitigation action creation flow.

The trigger should be:

```txt
Create mitigation action
```

or:

```txt
Start mitigation plan
```

Do not rebuild the mitigation action creation dialog manually when
`CreateActionDialog` fits.

Do not place raw form fields directly inside `ActionList`.

Use contextual fields only when the action is trust-sensitive.

Simple mitigation action creation should remain focused and not show all
contextual fields by default.

---

## AI usage guidance

Renewal risk review screens should be BI-first and AI-assisted only when AI adds
clear value.

Use GenAI for:

- explaining renewal risk
- summarizing value proof gaps
- prioritizing mitigation actions
- preparing renewal talking points
- drafting a customer follow-up message
- preparing a customer-ready value proof summary after review
- explaining why a recommendation needs validation

Do not use GenAI for:

- retrieving the customer name
- retrieving the plan
- retrieving the contract
- retrieving the renewal date
- retrieving the owner
- retrieving the renewal status
- counting recommendations
- listing mitigation actions
- showing standard KPIs
- validating recommendations automatically
- proving value automatically

Structured data should come from APIs, BI tools, databases or source systems and
be displayed directly through components and patterns.

---

## Evidence and trust guidance

Renewal risk review screens should make trust visible.

Use this flow:

```txt
Observed facts
→ interpreted signals
→ recommendations
→ human-validated actions
```

Useful trust cues:

- renewal date or renewal window
- proof status
- proof readiness
- validation status
- source context
- source strength
- freshness when relevant
- recommendation review progress
- overdue action ownership
- recommendation evidence
- clear mitigation ownership

Do not invent evidence, proof points, sources or citations.

Do not make false certainty claims when data may be incomplete, outdated or
inferred.

Do not make unsupported claims about renewal risk.

Do not claim AI validation or automatic approval.

Do not present expected outcomes as proven value.

Do not present internal proof as customer-ready proof without validation.

---

## Review checklist

After generation, verify:

- the screen imports components from `design-system-ai-lab`
- the screen imports `design-system-ai-lab/styles.css`
- no local design system components were created
- no local wrappers for package components were created
- no internal package import is used
- the screen follows accessibility principles
- the screen follows eco-design principles
- the screen follows AI usage principles when AI is present
- the screen follows evidence and trust principles
- the screen has one clear `PageHeader`
- `CreateActionDialog` is used for mitigation action creation
- `RenewalRiskSummary` is used for renewal context
- renewal context is visible before proof gaps, risks, recommendations and actions
- renewal risk reason is visible when it affects interpretation
- proof readiness and validation status are visible when renewal content needs review
- `CustomerReviewReadinessCard` is used when customer discussion readiness matters
- `ValueProofCard` is used for proof readiness, proof points and proof gaps
- value proof points are grounded in evidence
- internal proof is not presented as customer-ready proof without validation
- expected outcomes are not presented as proven value
- `MetricGrid` is used for metrics
- there are three or fewer metrics by default
- metrics include helper text
- `PriorityList` is used for renewal risks
- alerts are sorted by severity or business impact
- every alert includes a recommendation
- important recommendations are supported by visible facts
- `RecommendationReviewPanel` is used when recommendations need review
- each `RecommendationCard` includes title, recommendation, priority, readiness, rationale, scope and evidenceSummary
- no `RecommendationCard` is missing `recommendation`
- no `RecommendationCard` is missing `scope`
- no `Badge` uses `tone="info"`
- the main page background uses `bg-(--ec-color-background)`
- `ActionList` is used for mitigation actions
- actions are concrete mitigation actions
- every action includes owner, due date and priority
- GenAI is not used for basic renewal data retrieval
- no invented proof points, evidence, sources or citations are present
- no AI validation or automatic approval is claimed
- the primary mitigation action is obvious
- the screen remains sober and B2B
- the screen does not look like a generic analytics dashboard

---

## Final principle

A renewal risk review prompt should generate a screen that helps the user protect
the renewal without overstating value, recommendation readiness or proof
maturity.

If the result only displays account data without surfacing renewal risk, proof
readiness, recommendation readiness and mitigation actions, revise the prompt or
the generated screen.
