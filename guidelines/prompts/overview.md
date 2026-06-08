# Prompt Guidelines Overview

## Purpose

This file explains how to write effective prompts for Figma Make when using the
`design-system-ai-lab` package.

Prompts should guide Make toward governed, decision-oriented screens.

A good prompt should not only describe what to generate.

It should also constrain how the screen should be generated, which components and
business patterns it should use, which principles it must follow and which
anti-patterns it must avoid.

Prompt quality is part of design system governance.

Prompts should help Make compose with the package instead of rebuilding local UI.

Prompts should also preserve the knowledge model:

- BI-first, AI-assisted logic
- source-aware interpretation
- visible evidence before recommendation
- human validation for critical decisions
- asset intelligence boundaries
- value proof discipline
- no unsupported AI validation claims

---

## Core prompt principle

A Make prompt should specify:

1. the package to use
2. the package import and CSS import expectations
3. the transversal principles to follow
4. the user role
5. the user goal
6. the screen pattern
7. the required components and business patterns
8. the screen structure
9. the content rules
10. the AI usage constraints when AI is relevant
11. the evidence and trust constraints
12. the asset intelligence constraints when asset interpretation is relevant
13. the value proof constraints when customer proof is relevant
14. the visual constraints
15. the acceptance criteria

Do not rely on Make to infer the design system rules by itself.

State the important constraints directly in the prompt.

A good prompt should make it easier for Make to choose the correct pattern before
falling back to lower-level components.

---

## Mandatory principles

Every prompt should ask Make to follow these principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

These principles should be written explicitly in important prompts.

Recommended prompt block:

```txt
Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles
```

This helps prevent generated screens that are visually coherent but
inaccessible, noisy, AI-expensive, unsupported by evidence or disconnected from
the user decision.

When the screen includes asset, proof, recommendation or review readiness
content, the prompt should also explicitly preserve:

```txt
- source context
- source strength
- freshness when relevant
- validation status
- human review for critical decisions
- distinction between facts, Health signals, Intelligence interpretation, recommendations and actions
- distinction between internal proof, customer-ready proof and expected outcomes
```

---

## Required package instruction

Every prompt should include this package instruction:

```txt
Use the npm package design-system-ai-lab.

Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.
Do not import from internal package paths.
```

This prevents Make from generating local replacements for the design system.

---

## Use patterns before low-level components

Prompts should ask Make to use business patterns when they match the section
intent.

Use patterns first:

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
```

Then use decision components:

```txt
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

## Required import expectation

When useful, include the expected imports in the prompt.

For customer monitoring screens:

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
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

For renewal risk screens:

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

For asset recommendation review screens:

```tsx
import {
  ActionCard,
  ActionList,
  AssetIntelligenceSummary,
  CreateActionDialog,
  CustomerStatusCard,
  PageHeader,
  RecommendationCard,
  RecommendationReviewPanel,
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

For customer review readiness or QBR preparation screens:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  CustomerReviewReadinessCard,
  CustomerStatusCard,
  PageHeader,
  PriorityList,
  RecommendationCard,
  RecommendationReviewPanel,
  ServiceRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

This is especially useful for first tests and correction prompts.

---

## Prompt structure

Use this structure for most prompts:

```txt
Create a complete visible desktop screen in App.tsx.

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not use internal package imports.
Do not leave App.tsx empty.

Use business patterns before low-level components when a pattern fits the section intent.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles

User role:
[role]

User goal:
[goal]

Screen pattern:
[pattern]

Screen structure:
1. [section]
2. [section]
3. [section]

Required components and patterns:
- [component or pattern]
- [component or pattern]

Content requirements:
- [requirement]
- [requirement]

AI usage constraints:
- [constraint]
- [constraint]

Evidence and trust constraints:
- [constraint]
- [constraint]

Asset intelligence constraints when relevant:
- [constraint]
- [constraint]

Value proof constraints when relevant:
- [constraint]
- [constraint]

Visual constraints:
- sober
- B2B
- readable
- no gradients
- no glassmorphism
- no generic SaaS dashboard

Acceptance criteria:
- [criterion]
- [criterion]
```

---

## User role guidance

Always specify the user role.

Good roles:

```txt
Customer Success Manager
Service Manager
Support Agent
Account Manager
Field Service Coordinator
Renewal Manager
Service Operations Manager
Remote Support Specialist
Customer Success Hub Agent
```

The role helps Make choose the right content, hierarchy and actions.

Avoid generic roles such as:

```txt
User
Admin
Operator
Manager
```

unless the prompt context makes them specific.

---

## User goal guidance

Always specify the user goal.

Good user goals:

```txt
Help the Customer Success Manager understand the customer situation, identify priority risks and decide the next best actions.
```

```txt
Help the Renewal Manager identify missing value proof and launch mitigation actions before the renewal meeting.
```

```txt
Help the Service Manager review connectivity gaps and plan recovery actions.
```

```txt
Help the Service Manager review asset intelligence, source limits and recommendation readiness before customer communication.
```

```txt
Help the CSM prepare a customer-ready QBR discussion by checking proof readiness, recommendation readiness, risks and assigned actions.
```

Avoid vague goals:

```txt
Show a dashboard.
Display customer data.
Create an overview.
Make it look professional.
```

A strong goal describes the decision the screen supports.

---

## Screen pattern guidance

Use one of the approved screen patterns when possible:

```txt
Customer monitoring screen
Renewal risk review screen
QBR preparation screen
Connectivity review screen
Service action plan screen
Value proof summary screen
Asset recommendation review screen
Customer review readiness screen
Service risk review screen
```

If the prompt combines several goals, choose the pattern that matches the primary
user task.

Do not ask for a generic dashboard unless the designer explicitly needs one.

---

## Component and pattern guidance

Prompts should name the expected components and patterns when precision matters.

Recommended customer monitoring component set:

```txt
Use:
- PageHeader for the screen title and main action
- CreateActionDialog for action creation
- CustomerStatusCard for customer context
- MetricGrid with MetricCard items for key metrics
- ConnectivityCoverageCard for monitoring coverage when relevant
- ServiceRiskSummary for service risk overview when risk context matters
- PriorityList with AlertCard items for priority risks
- ActionList with ActionCard items for recommended next actions
```

Recommended renewal risk component set:

```txt
Use:
- PageHeader for the screen title and main action
- CreateActionDialog for mitigation action creation
- RenewalRiskSummary for renewal context
- CustomerReviewReadinessCard when the customer discussion readiness matters
- ValueProofCard for service outcomes, proof readiness and proof points
- MetricGrid with MetricCard items for key signals
- PriorityList with AlertCard items for blockers
- RecommendationReviewPanel with RecommendationCard items when recommendations need review
- ActionList with ActionCard items for mitigation actions
```

Recommended asset recommendation review component set:

```txt
Use:
- PageHeader for the screen title and main action
- CustomerStatusCard when customer context matters
- AssetIntelligenceSummary for source, Health and Intelligence context
- ServiceRiskSummary when asset intelligence creates a service risk
- RecommendationReviewPanel with RecommendationCard items for recommendation review
- CreateActionDialog for source review, validation or follow-up actions
- ActionList with ActionCard items for assigned internal actions
```

Recommended QBR or customer review readiness component set:

```txt
Use:
- PageHeader for the screen title and main action
- CustomerStatusCard for customer context
- CustomerReviewReadinessCard for review readiness
- ValueProofCard for proof readiness and proof points
- ServiceRiskSummary when service risk affects the review
- RecommendationReviewPanel with RecommendationCard items when recommendations need review
- PriorityList with AlertCard items for blockers
- ActionList with ActionCard items for assigned preparation actions
```

This helps Make avoid inventing alternative UI components.

---

## Composition guidance

Prompts should encourage this decision flow:

```txt
Context
→ Decision signals
→ Risks or readiness gaps
→ Recommendations when needed
→ Assigned actions
```

For customer monitoring, use:

```txt
PageHeader
→ CustomerStatusCard
→ MetricGrid
→ ConnectivityCoverageCard when relevant
→ ServiceRiskSummary when service risk needs synthesis
→ PriorityList
→ ActionList
```

For renewal risk review, use:

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

For asset recommendation review, use:

```txt
PageHeader
→ CustomerStatusCard when customer context matters
→ AssetIntelligenceSummary
→ ServiceRiskSummary when service risk matters
→ RecommendationReviewPanel
→ ActionList
```

For QBR preparation, use:

```txt
PageHeader
→ CustomerStatusCard
→ CustomerReviewReadinessCard
→ ValueProofCard
→ RecommendationReviewPanel when needed
→ PriorityList
→ ActionList
```

Do not ask Make to generate large generic dashboards.

Do not put actions before the user understands the context, evidence, risks and
recommendation readiness.

---

## Content requirement guidance

Prompts should include content rules.

Useful content rules:

```txt
Every alert must include a recommendation.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Metrics must include helper text explaining why they matter.
Critical alerts should appear before warning and info alerts.
High-priority actions should appear before medium and low-priority actions.
Button labels must be explicit and action-oriented.
Do not duplicate customer context across sections.
Do not invent proof points, sources, citations or customer facts.
Use customer-ready only when validation status and proof context support it.
Use expected outcome only when the value is not yet proven.
Use internal proof wording when proof is not customer-ready.
```

These rules improve the usefulness and trustworthiness of the generated screen.

---

## AI usage constraint guidance

If the screen includes AI-assisted behavior, prompts should define exactly what
AI is allowed to do.

Use this principle:

```txt
BI-first, AI-assisted.
```

Prompt constraints should say:

```txt
Do not use GenAI to retrieve basic customer facts.
Assume structured customer data comes from APIs, BI or source systems.
Use AI only for synthesis, explanation, prioritization, recommendation or drafting.
Show visible facts before any AI-assisted interpretation.
Do not use GenAI as a SQL engine replacement.
Do not spend GenAI tokens on dates, owners, statuses, counts, lists or standard KPIs.
Do not claim AI validation.
Do not claim automatic approval.
Do not present AI confidence as source strength, validation status or proof readiness.
```

Good AI-assisted tasks:

```txt
Summarize customer situation.
Explain priority risks.
Prepare renewal talking points.
Draft a customer follow-up email.
Prepare a customer-ready value proof summary after review.
Prioritize mitigation actions based on visible signals.
Explain why a recommendation needs expert validation.
```

Weak AI-assisted tasks:

```txt
Retrieve the customer name.
Find the renewal date.
Count disconnected assets.
List open cases.
Show the contract owner.
Display standard KPIs.
Validate a recommendation automatically.
Prove value automatically.
```

Structured data should be displayed through components and patterns, not hidden
behind a prompt box.

---

## Evidence and trust guidance

Prompts should ask Make to preserve evidence and trust.

Useful constraints:

```txt
Show visible facts before interpretation.
Distinguish facts, signals, recommendations and actions.
Every important recommendation must be supported by visible or auditable evidence.
Show freshness or validation context when data may be outdated or uncertain.
Show source context and source strength when source scope affects trust.
Do not invent proof points, evidence, sources or citations.
Do not create false certainty when data may be incomplete, outdated or inferred.
Keep human validation visible for critical customer, contract or service decisions.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.
Use display components, not disabled form fields, for display-only facts.
```

Recommended evidence flow:

```txt
Observed facts
→ interpreted signals
→ recommendations
→ human-validated actions
```

This helps Make generate screens that are reviewable and trustworthy.

---

## Asset intelligence guidance

Use this section when a screen includes asset context, Health signals,
modernization hypotheses, lifecycle interpretation or asset-related
recommendations.

Prompt constraints should say:

```txt
Use AssetIntelligenceSummary before asset-related recommendations.
Distinguish source-system facts from Health signals and Intelligence interpretation.
Do not present Intelligence interpretation as source-system truth.
Do not present partial Health visibility as complete asset knowledge.
Do not present non-connected assets as live-monitored.
Show source context, source scope, source strength and freshness when relevant.
Keep expert or human validation visible before customer use.
Use RecommendationReviewPanel and RecommendationCard for recommendation rationale.
Use ActionList and ActionCard for assigned validation or follow-up work.
```

Recommended asset intelligence flow:

```txt
Source-system facts
→ Health signals
→ Intelligence interpretation
→ Recommendation review
→ Human validation / follow-up action
```

---

## Value proof guidance

Use this section when a screen includes renewal, QBR, proof points, service
outcomes, customer-ready summaries or expected value.

Prompt constraints should say:

```txt
Use ValueProofCard for proof readiness, proof points and proof gaps.
Distinguish completed service activity from customer-ready proof.
Distinguish internal proof from customer-ready proof.
Distinguish expected outcomes from proven value.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.
Show validation status when proof needs review before customer use.
Show source context when proof trust depends on source scope or freshness.
Use ActionList and ActionCard for assigned proof preparation work.
```

Recommended value proof flow:

```txt
Completed service activity
→ internal proof
→ proof review / validation
→ customer-ready proof
→ customer discussion
```

---

## Recommendation review guidance

Use this section when a screen includes several recommendations or when a
recommendation needs review before customer use.

Prompt constraints should say:

```txt
Use RecommendationReviewPanel to frame the recommendation set.
Use RecommendationCard for each individual recommendation.
Each RecommendationCard should include priority, readiness, rationale and evidence.
The panel should carry shared review scope, source context, validation status, customer-readiness and proof context.
Do not use the panel to approve recommendations.
Do not claim AI validation or automatic approval.
Use CreateActionDialog only to create accountable follow-up work, not to approve the recommendation.
Use ActionList for assigned internal actions.
```

Recommended recommendation review flow:

```txt
Review context
→ individual recommendations
→ source/proof/validation review
→ assigned follow-up actions
```

---

## Visual constraint guidance

Prompts should include visual constraints.

Recommended visual constraints:

```txt
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
```

These constraints prevent Make from creating a decorative, generic or misleading
interface.

---

## Acceptance criteria guidance

Prompts should include acceptance criteria when the output needs to be reliable.

Good acceptance criteria:

```txt
Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package is created.
- No local design system components are recreated.
- No local wrappers for package components are created.
- Business patterns are used when they match the section intent.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- The screen does not claim AI validation or automatic approval.
- The screen does not present expected outcomes as proven value.
- The screen helps answer: what is happening, why it matters, and what to do next.
```

Acceptance criteria make it easier to review the result.

---

## First test prompt

Use this prompt for an initial Make test:

```txt
Create a complete visible desktop customer monitoring screen in App.tsx.

Use the npm package design-system-ai-lab.

Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not use internal package imports.
Do not leave App.tsx empty.

Use business patterns before low-level components when a pattern fits the section intent.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles

User role:
Customer Success Manager.

User goal:
Help the CSM understand the customer situation, identify priority risks and decide the next best actions.

Screen pattern:
Customer monitoring screen.

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer, plan, contract, owner, renewal date, customer objective and coverage
3. MetricGrid with three decision-relevant MetricCard items
4. ConnectivityCoverageCard for monitoring coverage and visibility limits
5. ServiceRiskSummary for the main service risk when the monitoring gap affects customer communication
6. PriorityList with AlertCard items sorted by severity
7. ActionList with ActionCard items for recommended next steps

Required components and patterns:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- MetricGrid
- MetricCard
- ConnectivityCoverageCard
- ServiceRiskSummary
- PriorityList
- AlertCard
- ActionList
- ActionCard

Content requirements:
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical alerts should appear before lower-priority alerts.
- High-priority actions should appear before medium and low-priority actions.
- Do not duplicate customer context across sections.

AI usage constraints:
- Do not use GenAI to retrieve basic customer facts.
- Assume structured customer data comes from APIs, BI or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation or drafting.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not claim AI validation or automatic approval.

Evidence and trust constraints:
- Show source context, source strength, freshness or validation context when data may be outdated, partial or uncertain.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Keep human validation visible for critical customer, contract or service decisions.
- Do not present expected outcomes as proven value.

Visual constraints:
- B2B
- sober
- readable
- structured
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no generic SaaS dashboard

Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local design system components are recreated.
- No local wrappers for package components are created.
- Business patterns are used when they match the section intent.
- The screen follows accessibility, eco-design, AI usage, and evidence and trust principles.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Renewal risk prompt example

Use this prompt for a renewal risk review screen:

```txt
Create a complete visible desktop renewal risk review screen in App.tsx.

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not use internal package imports.
Do not leave App.tsx empty.

Use business patterns before low-level components when a pattern fits the section intent.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles

User role:
Renewal Manager.

User goal:
Help the Renewal Manager understand renewal exposure, identify missing value proof and launch mitigation actions before the customer discussion.

Screen pattern:
Renewal risk review screen.

Screen structure:
1. PageHeader with title, description and CreateActionDialog for mitigation action creation
2. RenewalRiskSummary with customer, renewal window, readiness, value proof status, recommendations reviewed, overdue actions, proof readiness and validation status
3. CustomerReviewReadinessCard for customer discussion readiness
4. ValueProofCard with period, customer objective, proof status, proof readiness, validation status and grounded proof points
5. MetricGrid with three decision-relevant MetricCard items
6. PriorityList with AlertCard items for renewal blockers sorted by severity
7. RecommendationReviewPanel with RecommendationCard items when recommendations need review
8. ActionList with ActionCard items for mitigation actions

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
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts.
- Every action must include owner, due date and priority.
- Value proof points must be grounded in completed actions, resolved risks, recommendations or measurable outcomes.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Metrics must include helper text explaining why they matter.
- Do not duplicate renewal context across sections.

AI usage constraints:
- Do not use GenAI to retrieve the renewal date, contract owner, customer name, status, counts or KPIs.
- Assume structured renewal data comes from APIs, BI or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation or drafting.
- Show visible facts before any AI-assisted interpretation.
- Do not claim AI validation or automatic approval.

Evidence and trust constraints:
- Do not invent proof points, evidence, sources or citations.
- Show source context, source strength, freshness or validation context when data may be outdated, partial or uncertain.
- Keep human validation visible for critical customer, contract or service decisions.
- Do not make unsupported renewal risk claims.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.

Visual constraints:
- B2B
- sober
- readable
- structured
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no generic SaaS dashboard

Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local design system components are recreated.
- No local wrappers for package components are created.
- Business patterns are used when they match the section intent.
- The screen follows accessibility, eco-design, AI usage, and evidence and trust principles.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Asset recommendation review prompt example

Use this prompt for an asset recommendation review screen:

```txt
Create a complete visible desktop asset recommendation review screen in App.tsx.

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not use internal package imports.
Do not leave App.tsx empty.

Use business patterns before low-level components when a pattern fits the section intent.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles

User role:
Service Manager.

User goal:
Help the Service Manager review asset intelligence, source limits and recommendation readiness before a customer-facing modernization or service recommendation.

Screen pattern:
Asset recommendation review screen.

Screen structure:
1. PageHeader with title, description and CreateActionDialog for source or validation follow-up action
2. CustomerStatusCard when customer context affects interpretation
3. AssetIntelligenceSummary for asset scope, source context, Health signals, Intelligence interpretation, source strength, freshness and validation status
4. ServiceRiskSummary when partial asset visibility or interpretation creates service or customer communication risk
5. RecommendationReviewPanel with RecommendationCard items for recommendations requiring review
6. ActionList with ActionCard items for source review, expert validation or customer-ready preparation

Required components and patterns:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- AssetIntelligenceSummary
- ServiceRiskSummary
- RecommendationReviewPanel
- RecommendationCard
- ActionList
- ActionCard

Content requirements:
- Use AssetIntelligenceSummary before asset-related recommendations.
- Distinguish source-system facts, Health signals and Intelligence interpretation.
- Every recommendation must include priority, readiness, rationale and evidence summary.
- Every action must include owner, due date and priority.
- Do not present non-connected assets as live-monitored.

AI usage constraints:
- Do not use GenAI to retrieve asset facts, customer facts, counts, statuses or KPIs.
- Assume structured asset and service data comes from APIs, BI or source systems.
- Use AI only for synthesis, interpretation, prioritization, recommendation or drafting.
- Do not claim AI validation or automatic approval.

Evidence and trust constraints:
- Do not present Intelligence interpretation as source-system truth.
- Do not present partial Health visibility as complete asset knowledge.
- Show source context, source scope, source strength and freshness when relevant.
- Keep human validation visible before customer use.
- Do not present expected outcomes as proven value.

Visual constraints:
- B2B
- sober
- readable
- structured
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no generic SaaS dashboard

Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local design system components are recreated.
- No local wrappers for package components are created.
- Business patterns are used when they match the section intent.
- Health signals are separated from Intelligence interpretation.
- The screen does not claim AI validation or automatic approval.
- The screen helps answer what is known, what is interpreted, what needs review and what action follows.
```

---

## Correction prompt when Make recreates components

Use this prompt if Make creates a local design system or local components:

```txt
Revise the project.

Use the published npm package design-system-ai-lab directly.

Do not create or use packages/design-system-ai-lab.
Do not recreate PageHeader, Card, MetricCard, MetricGrid, AlertCard, PriorityList, ActionCard, ActionList, Badge, Button, Dialog, Field, Input, Select, Textarea, StatusSummary, RecommendationCard, CreateActionDialog or business patterns.
Do not use local components such as ./components/ui/button or ./components/ui/card.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.

Update App.tsx to import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Remove any local design system components that duplicate the package API.

Use business patterns when they match the section intent.
Use form components instead of inline-styled raw inputs.
Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Use BI-first, AI-assisted logic when AI is relevant.
Show visible facts before interpretation.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.

The result must render a complete visible screen in App.tsx.
```

---

## Correction prompt when App.tsx is empty

Use this prompt if Make sets up dependencies but leaves the screen empty:

```txt
Revise App.tsx.

App.tsx must render a complete visible desktop screen.

Use components imported from design-system-ai-lab.
Use the existing package CSS from design-system-ai-lab/styles.css.

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

## Prompt anti-patterns

Avoid prompts like:

```txt
Create a dashboard.
Make it modern.
Use the design system.
Show customer data.
Make it beautiful.
Add AI.
Generate insights.
```

These prompts are too vague and may lead to generic, decorative or AI-first
results.

They do not specify the package, principles, user goal, screen pattern,
component rules, evidence rules or acceptance criteria.

---

## Good prompt qualities

A good prompt is:

- specific about the package
- explicit about the four transversal principles
- specific about the user role
- specific about the user goal
- explicit about the screen pattern
- explicit about components and business patterns
- explicit about content requirements
- explicit about AI usage constraints when AI is relevant
- explicit about evidence and trust constraints
- explicit about asset intelligence constraints when relevant
- explicit about value proof constraints when relevant
- restrictive about visual style
- clear about acceptance criteria

---

## Review checklist

Before using a prompt, verify:

- it names `design-system-ai-lab`
- it asks Make to import package styles
- it forbids local design system recreation
- it forbids local wrappers for package components
- it forbids internal package imports
- it asks Make to use business patterns when they match the section intent
- it names the four transversal principles
- it defines the user role
- it defines the user goal
- it names the screen pattern
- it gives a section structure
- it names required components and business patterns when precision matters
- it includes content requirements
- it includes AI usage constraints when AI is relevant
- it includes evidence and trust constraints
- it includes asset intelligence constraints when relevant
- it includes value proof constraints when relevant
- it includes visual constraints
- it includes acceptance criteria when reliability matters

---

## Final principle

Prompts are part of the design system governance.

A good prompt does not only ask for an interface.

It teaches Make how to use the system correctly.

It should prevent Make from generating local components, inaccessible UI,
over-designed dashboards, unsupported recommendations, fake evidence, automatic
AI validation claims or GenAI usage where structured data would be more reliable
and cheaper.
