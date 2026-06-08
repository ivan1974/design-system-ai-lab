# Prompt Template

## Purpose

Use this template to write Figma Make prompts that generate complete screens with
`design-system-ai-lab`.

This template is designed to prevent Make from generating local components,
inaccessible UI, over-designed dashboards, unsupported recommendations, fake
evidence, unnecessary GenAI usage or misleading AI validation claims.

Copy the template, replace the placeholder values, then adapt the component list,
screen structure and trust constraints to the target use case.

Prompts are part of the design system governance.

A prompt should not only ask Make to generate an interface.

It should teach Make how to use the governed system correctly.

---

## Prompt template

```txt
Create a complete visible desktop [SCREEN NAME] screen in App.tsx.

Use the npm package design-system-ai-lab.

Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not use internal package imports.
Do not import from dist/.
Do not import from src/.
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
[USER ROLE]

User goal:
[USER GOAL]

Screen pattern:
[SCREEN PATTERN]

Screen structure:
1. [SECTION 1]
2. [SECTION 2]
3. [SECTION 3]
4. [SECTION 4]
5. [SECTION 5]
6. [SECTION 6 WHEN NEEDED]

Required components and patterns:
- [COMPONENT OR PATTERN]
- [COMPONENT OR PATTERN]
- [COMPONENT OR PATTERN]

Content requirements:
- [CONTENT REQUIREMENT]
- [CONTENT REQUIREMENT]
- [CONTENT REQUIREMENT]
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts.
- Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
- Do not generate a RecommendationCard without recommendation.
- Do not generate a RecommendationCard without scope.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical alerts should appear before warning and neutral informational alerts.

AI usage constraints:
- Do not use GenAI to retrieve basic facts, dates, owners, statuses, counts, lists or standard KPIs.
- Assume structured data comes from APIs, BI tools, databases or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status or proof readiness.

Evidence and trust constraints:
- Show visible facts before interpretation.
- Distinguish facts, signals, recommendations and actions.
- Every important recommendation must be supported by visible or auditable evidence.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show freshness when timing affects trust.
- Show validation status when content may be used for customer, contract, service, safety, compliance, renewal, value proof, asset intelligence or modernization decisions.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Keep human validation visible for critical decisions.
- Do not claim AI validation or automatic approval.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Use display components, not disabled form fields, for display-only facts.

Asset intelligence constraints when relevant:
- Use AssetIntelligenceSummary before asset-related recommendations.
- Distinguish source-system facts, Health signals and Intelligence interpretation.
- Do not present Intelligence interpretation as source-system truth.
- Do not present partial Health visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Show source context, source scope, source strength and freshness when relevant.
- Keep expert or human validation visible before customer use.

Value proof constraints when relevant:
- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Show validation status when proof needs review before customer use.
- Show source context when proof trust depends on source scope or freshness.

Recommendation review constraints when relevant:
- Use RecommendationReviewPanel to frame the recommendation set.
- Use RecommendationCard for each individual recommendation.
- Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
- Do not generate a RecommendationCard without recommendation.
- Do not generate a RecommendationCard without scope.
- Do not use RecommendationReviewPanel to approve recommendations.
- Do not claim AI validation or automatic approval.
- Use ActionList for assigned internal follow-up actions.

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
- no custom design system components
- no visual styling that hides uncertainty
- main page background must use bg-(--ec-color-background)
- Badge tones must use only neutral, primary, success, warning or danger
- no tone="info"

Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package is created.
- No local design system components are recreated.
- No local wrappers for package components are created.
- No internal package imports are used.
- The main page background uses bg-(--ec-color-background).
- No Badge uses tone="info".
- Badge tones use only neutral, primary, success, warning or danger.
- Business patterns are used when they match the section intent.
- Form components are used for form fields.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- The screen does not claim AI validation or automatic approval.
- The screen does not present expected outcomes as proven value.
- Every RecommendationCard includes title, recommendation, priority, readiness, rationale, scope and evidenceSummary when RecommendationCard is used.
- No RecommendationCard is generated without recommendation.
- No RecommendationCard is generated without scope.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Required generated code rules

Apply these rules in every Figma Make prompt.

### Main page background

Use the official technical token namespace for the main page background:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
```

Do not use `bg-background` unless the prompt explicitly asks to test
compatibility aliases.

### Badge tones

Use only these `Badge` tone values:

```txt
neutral
primary
success
warning
danger
```

Do not generate `tone="info"`.

Use this mapping:

| State or label | Recommended tone |
| --- | --- |
| Active plan | `primary` |
| Current or selected | `primary` |
| Healthy | `success` |
| Completed | `success` |
| Customer-ready | `success` |
| Informational metadata | `neutral` |
| Renewal in 90 days | `neutral` |
| Health fact | `neutral` |
| Intelligence interpretation | `neutral` |
| Renewal watch | `warning` |
| Connectivity partial | `warning` |
| Source partial | `warning` |
| Review needed | `warning` |
| Internal proof, not customer-ready | `warning` |
| Expected outcome, not proven | `warning` |
| Critical risk | `danger` |
| Critical assets disconnected | `danger` |
| Renewal at risk | `danger` |

### RecommendationCard required props

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

Use this minimum valid shape:

```tsx
<RecommendationCard
  title="Prepare customer-ready value proof summary"
  recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
  priority="high"
  readiness="needs_review"
  rationale="The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity."
  scope="Renewal preparation"
  evidenceSummary="12 actions were closed during the period, but proof has not been consolidated for customer use."
  validationStatus="Review before customer use"
/>
```

### Critical AlertCard evidence

For critical `AlertCard` items, include these props when trust matters:

```txt
evidenceSummary
sourceScope
sourceStrength
freshness
validationStatus
```

Use `sourceScope`, not `sourceContext`, on `AlertCard`.

## Placeholder guidance

### Screen name

Use a specific screen name.

Good examples:

```txt
customer monitoring
renewal risk review
asset recommendation review
customer review readiness
connectivity review
value proof preparation
service risk review
QBR preparation
```

Avoid vague names such as:

```txt
dashboard
overview
admin page
data screen
AI insights screen
```

The screen name should describe a user task, not a generic layout.

---

### User role

Use a concrete role.

Good examples:

```txt
Customer Success Manager
Renewal Manager
Service Manager
Support Agent
Account Manager
Field Service Coordinator
Service Operations Manager
Remote Support Specialist
Customer Success Hub Agent
```

Avoid generic roles such as:

```txt
User
Admin
Manager
Operator
```

unless the context makes them specific.

---

### User goal

Describe the decision the screen supports.

Good examples:

```txt
Help the Customer Success Manager understand the customer situation, identify priority risks and decide the next best actions.
```

```txt
Help the Renewal Manager understand renewal exposure, identify missing value proof and launch mitigation actions before the customer discussion.
```

```txt
Help the Service Manager review asset intelligence, source limits and recommendation readiness before customer communication.
```

```txt
Help the CSM prepare a customer-ready QBR discussion by checking proof readiness, recommendation readiness, risks and assigned actions.
```

Avoid vague goals such as:

```txt
Show customer data.
Create a dashboard.
Make a professional screen.
Add AI insights.
```

A strong goal describes the decision the screen supports.

---

### Screen pattern

Use a known screen pattern when possible.

Recommended patterns:

```txt
Customer monitoring screen
Renewal risk review screen
Asset recommendation review screen
Customer review readiness screen
Connectivity review screen
Value proof preparation screen
Service risk review screen
QBR preparation screen
Service action plan screen
```

The screen pattern should match the main user task.

Do not ask for a generic dashboard unless the designer explicitly needs one.

---

## Pattern-first component map

Prompts should ask Make to use business patterns before low-level components when
a pattern fits the section intent.

Use this map:

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

Use base components only when a business pattern does not fit:

```txt
Button
Badge
Card
Dialog
Field
Input
Label
Select
Textarea
PageHeader
```

Do not ask Make to rebuild business sections with raw `Card` or `div` wrappers
when a dedicated pattern exists.

---

## Recommended component sets

### Customer monitoring

Use this component set for customer monitoring screens:

```txt
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- MetricGrid
- MetricCard
- ConnectivityCoverageCard
- ServiceRiskSummary when service risk needs synthesis
- PriorityList
- AlertCard
- ActionList
- ActionCard
```

Recommended structure:

```txt
PageHeader
→ CustomerStatusCard
→ MetricGrid
→ ConnectivityCoverageCard when relevant
→ ServiceRiskSummary when service risk needs synthesis
→ PriorityList
→ ActionList
```

---

### Renewal risk review

Use this component set for renewal risk review screens:

```txt
- PageHeader
- CreateActionDialog
- RenewalRiskSummary
- CustomerReviewReadinessCard when customer discussion readiness matters
- ValueProofCard
- MetricGrid
- MetricCard
- PriorityList
- AlertCard
- RecommendationReviewPanel when recommendations need review
- RecommendationCard
- ActionList
- ActionCard
```

Recommended structure:

```txt
PageHeader
→ RenewalRiskSummary
→ CustomerReviewReadinessCard when customer discussion readiness matters
→ ValueProofCard
→ MetricGrid
→ PriorityList
→ RecommendationReviewPanel when recommendations need review
→ ActionList
```

---

### Asset recommendation review

Use this component set for asset recommendation review screens:

```txt
- PageHeader
- CreateActionDialog
- CustomerStatusCard when customer context matters
- AssetIntelligenceSummary
- ServiceRiskSummary when asset intelligence creates a service risk
- RecommendationReviewPanel
- RecommendationCard
- ActionList
- ActionCard
```

Recommended structure:

```txt
PageHeader
→ CustomerStatusCard when customer context matters
→ AssetIntelligenceSummary
→ ServiceRiskSummary when service risk matters
→ RecommendationReviewPanel
→ ActionList
```

---

### Customer review readiness / QBR preparation

Use this component set for customer review readiness or QBR preparation screens:

```txt
- PageHeader
- CreateActionDialog when follow-up action creation is needed
- CustomerStatusCard
- CustomerReviewReadinessCard
- ValueProofCard
- ServiceRiskSummary when service risk affects the review
- RecommendationReviewPanel when recommendations need review
- RecommendationCard
- PriorityList
- AlertCard
- ActionList
- ActionCard
```

Recommended structure:

```txt
PageHeader
→ CustomerStatusCard
→ CustomerReviewReadinessCard
→ ValueProofCard
→ ServiceRiskSummary when service risk matters
→ RecommendationReviewPanel when recommendations need review
→ PriorityList
→ ActionList
```

---

### Connectivity review

Use this component set for connectivity review screens:

```txt
- PageHeader
- CreateActionDialog
- CustomerStatusCard when customer context is needed
- ConnectivityCoverageCard
- MetricGrid
- MetricCard
- ServiceRiskSummary when the connectivity gap affects customer communication
- PriorityList
- AlertCard
- ActionList
- ActionCard
```

Recommended structure:

```txt
PageHeader
→ CustomerStatusCard when needed
→ ConnectivityCoverageCard
→ MetricGrid
→ ServiceRiskSummary when relevant
→ PriorityList
→ ActionList
```

---

### Value proof preparation

Use this component set for value proof preparation screens:

```txt
- PageHeader
- CreateActionDialog
- CustomerStatusCard or RenewalRiskSummary when context is needed
- CustomerReviewReadinessCard when customer discussion readiness matters
- ValueProofCard
- MetricGrid
- MetricCard
- PriorityList
- AlertCard
- ActionList
- ActionCard
```

Recommended structure:

```txt
PageHeader
→ CustomerStatusCard or RenewalRiskSummary
→ CustomerReviewReadinessCard when relevant
→ ValueProofCard
→ MetricGrid
→ PriorityList
→ ActionList
```

---

## Content requirement examples

Use requirements like these when they fit the screen:

```txt
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts.
- Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
- Do not generate a RecommendationCard without recommendation.
- Do not generate a RecommendationCard without scope.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical alerts should appear before warning and neutral informational alerts.
- Badge tones must use only neutral, primary, success, warning or danger.
- Do not use tone="info".
- Use bg-(--ec-color-background) for the main page background.
- High-priority actions should appear before medium and low-priority actions.
- Value proof points must be grounded in completed actions, resolved risks, recommendations or measurable outcomes.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Do not duplicate customer, renewal or proof context across sections.
- Do not invent proof points, sources, citations or customer facts.
```

---

## AI usage examples

Use AI constraints only when AI is relevant to the generated experience.

Good AI-assisted tasks:

```txt
- summarize customer situation
- explain priority risks
- prepare renewal talking points
- draft a customer follow-up email
- prepare a customer-ready value proof summary after review
- prioritize mitigation actions based on visible signals
- explain why a recommendation needs expert validation
```

Weak AI-assisted tasks:

```txt
- retrieve the customer name
- find the renewal date
- count disconnected assets
- list open cases
- show the contract owner
- display standard KPIs
- validate a recommendation automatically
- prove value automatically
```

The prompt should make clear that structured data is shown directly through
components and patterns.

GenAI should only support interpretation, synthesis, recommendation,
prioritization, drafting or reformulation.

---

## Evidence and trust examples

Use evidence constraints when the screen includes risks, recommendations, AI
outputs, renewal claims, value proof, asset intelligence or operational decisions.

Good constraints:

```txt
- Show visible facts before interpretation.
- Show last update when monitoring or status data may be outdated.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show validation status when customer use or critical decisions are possible.
- For critical AlertCard items, include evidenceSummary, sourceScope, sourceStrength, freshness and validationStatus when trust matters.
- Do not make unsupported renewal risk claims.
- Do not invent proof points or sources.
- Keep human validation visible for customer-facing actions.
- Do not claim AI validation or automatic approval.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
```

Good evidence flow:

```txt
Observed facts
→ interpreted signals
→ recommendations
→ human-validated actions
```

---

## Asset intelligence examples

Use asset intelligence constraints when the screen includes asset context, Health
signals, modernization hypotheses, lifecycle interpretation or asset-related
recommendations.

Good constraints:

```txt
- Use AssetIntelligenceSummary before asset-related recommendations.
- Distinguish source-system facts, Health signals and Intelligence interpretation.
- Do not present Intelligence interpretation as source-system truth.
- Do not present partial Health visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Show source context, source scope, source strength and freshness when relevant.
- Keep expert or human validation visible before customer use.
```

Good flow:

```txt
Source-system facts
→ Health signals
→ Intelligence interpretation
→ Recommendation review
→ Human validation / follow-up action
```

---

## Value proof examples

Use value proof constraints when the screen includes renewal, QBR, proof points,
service outcomes, customer-ready summaries or expected value.

Good constraints:

```txt
- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Show validation status when proof needs review before customer use.
- Show source context when proof trust depends on source scope or freshness.
```

Good flow:

```txt
Completed service activity
→ internal proof
→ proof review / validation
→ customer-ready proof
→ customer discussion
```

---

## Correction prompt template

Use this correction prompt when Make recreates local components or ignores the
package:

```txt
Revise the project.

Use the published npm package design-system-ai-lab directly.

Do not create or use packages/design-system-ai-lab.
Do not recreate PageHeader, Card, MetricCard, MetricGrid, AlertCard, PriorityList, ActionCard, ActionList, Badge, Button, Dialog, Field, Input, Label, Select, Textarea, StatusSummary, RecommendationCard, CreateActionDialog or business patterns.
Do not use local components such as ./components/ui/button or ./components/ui/card.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.

Update App.tsx to import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Use bg-(--ec-color-background) for the main page background.
Use only supported Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

Use business patterns when they match the section intent.
Use form components instead of inline-styled raw inputs.
Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Use BI-first, AI-assisted logic when AI is relevant.
Show visible facts before interpretation.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.

Every RecommendationCard must include title, recommendation, priority, readiness, rationale, scope and evidenceSummary.
Do not generate a RecommendationCard without recommendation.
Do not generate a RecommendationCard without scope.

The result must render a complete visible screen in App.tsx.
```

---

## Correction prompt when App.tsx is empty

Use this prompt when Make sets up dependencies but leaves the screen empty:

```txt
Revise App.tsx.

App.tsx must render a complete visible desktop screen.

Use components imported from design-system-ai-lab.
Use the existing package CSS from design-system-ai-lab/styles.css.

Use bg-(--ec-color-background) for the main page background.
Use only supported Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

Create a customer monitoring screen for a Customer Success Manager.

The screen must include:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- MetricGrid with MetricCard items
- ConnectivityCoverageCard
- ServiceRiskSummary
- PriorityList with AlertCard items
- ActionList with ActionCard items

Follow accessibility, eco-design, AI usage, and evidence and trust principles.

Do not stop after package setup.
Generate the visible interface now.
```

---

## Review checklist

Before using a prompt generated from this template, verify:

- the prompt names `design-system-ai-lab`
- the prompt asks Make to import package styles
- the prompt forbids local package creation
- the prompt forbids local component recreation
- the prompt forbids local wrappers for package components
- the prompt forbids internal package imports
- the prompt names the four transversal principles
- the prompt defines the user role
- the prompt defines the user goal
- the prompt names the screen pattern
- the prompt gives a section structure
- the prompt asks Make to use business patterns when they match the section intent
- the prompt names required components and business patterns when precision matters
- the prompt includes content requirements
- the prompt includes AI usage constraints when AI is relevant
- the prompt includes evidence and trust constraints
- the prompt includes asset intelligence constraints when relevant
- the prompt includes value proof constraints when relevant
- the prompt includes recommendation review constraints when relevant
- the prompt includes visual constraints
- the prompt includes acceptance criteria when reliability matters
- the prompt asks Make to use `bg-(--ec-color-background)` for the main page background
- the prompt forbids `tone="info"`
- the prompt lists the supported Badge tones: `neutral`, `primary`, `success`, `warning` and `danger`
- the prompt requires `RecommendationCard` to include `title`, `recommendation`, `priority`, `readiness`, `rationale`, `scope` and `evidenceSummary` when relevant
- the prompt forbids generated `RecommendationCard` code without `recommendation`
- the prompt forbids generated `RecommendationCard` code without `scope`

---

## Final principle

This template should make every new prompt easier to write and easier to review.

A prompt should not only ask Make to generate a screen.

It should teach Make how to use the governed system correctly.

A good prompt prevents Make from generating local components, inaccessible UI,
over-designed dashboards, unsupported recommendations, fake evidence, automatic
AI validation claims or GenAI usage where structured data would be more reliable
and cheaper.
