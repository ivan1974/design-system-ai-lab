# Prompt Guidelines Overview

## Purpose

This file explains how prompts should be structured for Figma Make when using
`design-system-ai-lab`.

Its role is to act as the prompt hub for the Make kit.

Use this file to define:

- the purpose of prompts in the design system
- the required prompt reading order
- the standard prompt structure
- the approved screen prompt types
- the rules that every prompt must preserve
- the difference between screen prompts and repair prompts
- the prompt review checklist

Do not use this file as a long prompt library.

Detailed prompts should live in dedicated files.

---

## Prompt role in the Make kit

Prompts are not just generation requests.

Prompts are part of design system governance.

A good prompt should help Figma Make generate a screen that is:

- governed by the package
- composed from approved components and business patterns
- focused on one user decision
- accessible
- sober
- B2B
- BI-first and AI-assisted when AI is relevant
- evidence-aware
- reviewable
- easy to correct when generation drifts

Prompts should not encourage Make to invent a new UI, recreate local components
or produce a generic SaaS dashboard.

---

## Required reading order

Before using a screen prompt, Figma Make should follow this Make kit order:

```txt
1. Guidelines.md
2. setup.md
3. tokens.md
4. styles.md
5. the relevant prompt file
6. review/acceptance-checklist.md when reviewing the output
7. review/anti-patterns.md when correcting the output
```

The four Make kit files define the baseline contract.

Prompt files should apply that contract to a specific screen intent.

Prompt files should not duplicate every rule from the Make kit.

They should repeat only the blocking rules that Make must not miss.

---

## Core prompt principle

Every screen prompt should answer six questions:

```txt
1. What screen should be generated?
2. Who is the user?
3. What decision should the screen support?
4. Which package components and patterns must be used?
5. What evidence, AI and trust constraints apply?
6. How should the generated screen be reviewed?
```

Do not rely on Make to infer these points.

State the important constraints directly in the prompt.

---

## Standard prompt structure

Use this structure for screen prompts:

```txt
# [Screen name] Prompt

## Purpose

## Required Make kit context

## User role

## User decision

## Screen intent

## Required package usage

## Required components and patterns

## Screen structure

## Content requirements

## AI usage constraints

## Evidence and trust constraints

## Asset intelligence constraints, when relevant

## Value proof constraints, when relevant

## Visual constraints

## Output requirement

## Acceptance criteria
```

This structure should remain stable across prompt files.

Stable prompt structure makes Make outputs easier to compare, review and improve.

---

## Required Make kit context block

Every prompt should include this block near the top:

```txt
Read and follow:
- Guidelines.md
- setup.md
- tokens.md
- styles.md

Generate a complete visible screen in App.tsx.
Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Do not create local design system components.
Do not create packages/design-system-ai-lab.
Do not use internal package imports.
Do not recreate package components with raw HTML or local wrappers.
```

This block prevents the most common Make drift:

- empty `App.tsx`
- local package creation
- internal imports
- local UI recreation
- raw component rebuilding
- visual systems outside the package

---

## Approved screen prompt types

Use dedicated prompt files for the main screen intents.

```txt
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
prompts/asset-recommendation-review.md
prompts/qbr-readiness.md
```

Optional future prompt files:

```txt
prompts/connectivity-review.md
prompts/service-action-plan.md
prompts/value-proof-summary.md
prompts/customer-review-readiness.md
prompts/service-risk-review.md
```

Do not create many overlapping prompt files for similar intents.

If two prompts support the same decision, merge them or make the difference
explicit.

---

## Screen intent guidance

Each prompt should define one primary screen intent.

Good screen intents:

```txt
Customer monitoring
Renewal risk review
Asset recommendation review
QBR readiness
Connectivity review
Service action plan
Value proof summary
```

Avoid generic screen intents:

```txt
Dashboard
Overview
Admin page
Analytics page
Professional UI
Modern app screen
```

A screen prompt should support one main decision.

Do not ask Make to include every available business pattern by default.

Use `Guidelines.md` screen intent router to choose the right pattern set.

---

## User role guidance

Every prompt should specify the user role.

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

Avoid vague roles unless the context makes them specific:

```txt
User
Admin
Operator
Manager
```

The user role helps Make choose the right hierarchy, wording, actions and level of
detail.

---

## User decision guidance

Every prompt should define the decision the screen supports.

Good user decisions:

```txt
Decide which service risks need action before the next customer touchpoint.
```

```txt
Decide which renewal blockers require mitigation before the renewal meeting.
```

```txt
Decide whether asset recommendations are ready for customer communication.
```

```txt
Decide whether the QBR is ready or which proof gaps must be closed first.
```

Avoid vague goals:

```txt
Show customer data.
Display an overview.
Create a dashboard.
Make it look professional.
```

A strong prompt describes the decision, not just the information to display.

---

## Component and pattern guidance

Prompts should name the expected components and business patterns when precision
matters.

Use business patterns before low-level components when a pattern fits the section
intent.

Pattern-first map:

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

Do not ask Make to rebuild business sections with raw `Card`, `div`, `dt` or `dd`
markup when a dedicated pattern exists.

---

## Content rules every prompt should preserve

Every prompt should preserve these content rules when relevant:

```txt
Every alert must include a recommendation.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Metrics must include helper text explaining why they matter.
Critical alerts should appear before lower-priority alerts.
High-priority actions should appear before medium and low-priority actions.
Button labels must be explicit and action-oriented.
Do not duplicate customer context across sections.
Do not invent proof points, sources, citations, asset facts or customer facts.
Use customer-ready proof only when validation status and proof context support it.
Use expected outcome wording when value is not yet proven.
Use internal proof wording when proof is not customer-ready.
```

These rules improve usefulness, trust and reviewability.

---

## AI usage rules every prompt should preserve

Use this principle:

```txt
BI-first, AI-assisted.
```

When AI is relevant, prompts should say:

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

## Evidence and trust rules every prompt should preserve

Prompts should preserve evidence and trust.

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
→ source scope and evidence strength
→ interpreted signals
→ recommendations
→ owned actions
→ human validation when needed
```

---

## Asset intelligence prompt rules

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

## Value proof prompt rules

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

## Visual rules every prompt should preserve

Prompts should include a compact visual constraint block:

```txt
Visual constraints:
- B2B
- sober
- readable
- structured
- action-oriented
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no decorative hero sections
- no generic SaaS dashboard
- no custom design system components
- no visual styling that hides uncertainty
```

These constraints prevent Make from creating decorative, generic or misleading
interfaces.

---

## Output requirement every prompt should preserve

Every screen prompt should include:

```txt
Output requirement:
Generate a complete visible desktop screen in App.tsx.
Do not leave App.tsx empty.
Do not generate only setup code.
Do not generate a local component library.
Use package components and patterns directly.
```

This prevents Make from stopping too early.

---

## Acceptance criteria every prompt should preserve

Every prompt should include a short acceptance criteria block.

Recommended block:

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

Acceptance criteria make the output easier to review and correct.

---

## Screen prompt files

Use the dedicated screen prompt files for generation.

```txt
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
prompts/asset-recommendation-review.md
prompts/qbr-readiness.md
```

Each prompt should be independently usable by Figma Make after the Make kit files
have been read.

Do not put full screen prompts in this overview file.

This overview file should explain the rules, not carry the whole prompt library.

---

## Repair prompts

Repair prompts are different from screen prompts.

Use screen prompts to generate a first screen.

Use repair prompts to correct a known failure mode.

Recommended repair prompt files:

```txt
repair-prompts/no-local-components.md
repair-prompts/no-internal-imports.md
repair-prompts/generic-dashboard.md
repair-prompts/missing-evidence.md
repair-prompts/wrong-ai-usage.md
repair-prompts/too-many-sections.md
repair-prompts/raw-form-controls.md
```

Common repair situations:

- Make created local components.
- Make created `packages/design-system-ai-lab`.
- Make imported from `dist/*` or `src/*`.
- Make generated a generic dashboard.
- Make used raw form controls.
- Make invented evidence, sources or proof.
- Make used AI for structured retrieval.
- Make added too many sections or patterns.
- Make made expected outcomes look like proven value.

---

## Prompt maintenance rules

Keep prompts concise enough for Make to follow.

Do not overload every prompt with every rule from every file.

Repeat only blocking rules and intent-specific constraints.

Move repeated generic rules to:

```txt
Guidelines.md
setup.md
tokens.md
styles.md
```

Move reusable screen structure into dedicated prompt files.

Move correction instructions into repair prompt files.

When Make repeatedly fails, add a repair prompt instead of making every screen
prompt longer.

---

## Prompt review checklist

Before accepting a prompt, verify:

- it names the screen type
- it names the user role
- it names the user decision
- it includes the required Make kit context block
- it asks for a complete visible `App.tsx`
- it requires package imports from `design-system-ai-lab`
- it requires `design-system-ai-lab/styles.css`
- it forbids local package creation
- it forbids local design system recreation
- it uses business patterns before low-level components
- it names required patterns and components when precision matters
- it includes content rules for alerts, metrics and actions
- it includes AI usage constraints when AI is relevant
- it includes evidence and trust constraints
- it includes asset intelligence constraints when asset interpretation is relevant
- it includes value proof constraints when proof or renewal is relevant
- it includes visual constraints from `styles.md`
- it includes acceptance criteria
- it does not ask for a generic dashboard
- it does not ask Make to invent evidence, sources, citations or proof

---

## Final principle

A prompt should not ask Make to be creative with the design system.

A prompt should ask Make to compose a useful screen from a governed system.

The goal is reliable first drafts, not visually impressive improvisation.
