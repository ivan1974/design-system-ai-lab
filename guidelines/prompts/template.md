# Prompt Template

## Purpose

Use this template to write Figma Make prompts that generate complete screens with
`design-system-ai-lab`.

This file is a reusable prompt model.

It should stay easy to copy, adapt and test.

Use it when creating or updating dedicated prompt files such as:

```txt
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
prompts/asset-recommendation-review.md
prompts/qbr-readiness.md
```

Do not turn this file into a full prompt library.

Detailed screen prompts should live in dedicated screen prompt files.

---

## How to use this template

1. Copy the template block.
2. Replace every placeholder in square brackets.
3. Remove optional sections that do not apply.
4. Keep the required Make kit context block.
5. Keep the package usage and output requirements.
6. Keep the acceptance criteria.
7. Add only the constraints that matter for the selected screen intent.

A good prompt should be specific enough to guide Make, but not so long that the
core instruction becomes hard to follow.

---

## Prompt template

Copy and adapt this block.

```txt
# [SCREEN NAME] Prompt

## Purpose

Create a complete visible desktop [SCREEN NAME] screen in App.tsx.

The screen should help [USER ROLE] [USER DECISION].

## Required Make kit context

Read and follow:
- Guidelines.md
- setup.md
- tokens.md
- styles.md

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.
Do not use internal package imports.
Do not leave App.tsx empty.

## User role

[USER ROLE]

## User decision

[DECISION THE SCREEN SUPPORTS]

## Screen intent

[SCREEN INTENT]

Use one primary screen intent.
Do not generate a generic dashboard.
Do not include every available business pattern by default.

## Required components and patterns

Use business patterns before low-level components when a pattern fits the section intent.

Required:
- [COMPONENT OR PATTERN]
- [COMPONENT OR PATTERN]
- [COMPONENT OR PATTERN]

Do not manually rebuild these sections with raw Card, div, dt or dd markup when a dedicated pattern exists.

## Screen structure

1. [SECTION 1]
2. [SECTION 2]
3. [SECTION 3]
4. [SECTION 4]
5. [SECTION 5 WHEN NEEDED]
6. [SECTION 6 WHEN NEEDED]

The structure should follow the user decision:

Context
→ decision signals
→ risks or readiness gaps
→ recommendations when relevant
→ owned actions

## Content requirements

- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts or context.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical risks or blockers should appear before lower-priority items.
- High-priority actions should appear before medium and low-priority actions.
- Button labels must be explicit and action-oriented.
- Do not duplicate customer context across sections.
- Do not invent proof points, sources, citations, asset facts or customer facts.

## AI usage constraints

Use BI-first, AI-assisted logic.

- Do not use GenAI to retrieve basic facts, dates, owners, statuses, counts, lists or standard KPIs.
- Assume structured data comes from APIs, BI tools, databases or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status or proof readiness.

## Evidence and trust constraints

- Show visible facts before interpretation.
- Distinguish facts, signals, recommendations and actions.
- Every important recommendation must be supported by visible or auditable evidence.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show freshness when timing affects trust.
- Show validation status when content may be used for customer, contract, service, renewal, value proof, asset intelligence or modernization decisions.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Keep human validation visible for critical decisions.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Use display components, not disabled form fields, for display-only facts.

## Asset intelligence constraints, when relevant

Remove this section if the screen is not asset-related.

- Use AssetIntelligenceSummary before asset-related recommendations.
- Distinguish source-system facts, Health signals and Intelligence interpretation.
- Do not present Intelligence interpretation as source-system truth.
- Do not present partial Health visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Show source context, source scope, source strength and freshness when relevant.
- Keep expert or human validation visible before customer use.
- Use RecommendationReviewPanel and RecommendationCard for recommendation rationale when recommendations need review.
- Use ActionList and ActionCard for assigned validation or follow-up work.

## Value proof constraints, when relevant

Remove this section if the screen is not proof-related.

- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Show validation status when proof needs review before customer use.
- Show source context when proof trust depends on source scope or freshness.
- Use ActionList and ActionCard for assigned proof preparation work.

## Recommendation review constraints, when relevant

Remove this section if the screen does not include recommendation review.

- Use RecommendationReviewPanel to frame the recommendation set.
- Use RecommendationCard for each individual recommendation.
- Each RecommendationCard should include priority, readiness, rationale, scope and evidence.
- Do not use RecommendationReviewPanel to approve recommendations automatically.
- Do not claim AI validation or automatic approval.
- Use ActionList for assigned internal follow-up actions.

## Visual constraints

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

Use tokens and styles from design-system-ai-lab/styles.css.
Use the official --ec-* token namespace when manual token usage is needed.
Use only approved Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

## Output requirement

Generate a complete visible desktop screen in App.tsx.
Do not leave App.tsx empty.
Do not generate only setup code.
Do not generate a local component library.
Use package components and patterns directly.

## Acceptance criteria

- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package is created.
- No local design system components are recreated.
- No local wrappers for package components are created.
- No internal package imports are used.
- Business patterns are used when they match the section intent.
- Form components are used for form fields.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- The screen does not claim AI validation or automatic approval.
- The screen does not present expected outcomes as proven value.
- Badge tones use only neutral, primary, success, warning or danger.
- No Badge uses tone="info".
- The screen helps answer what is happening, why it matters and what to do next.
```

---

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

Avoid vague names:

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

Avoid generic roles unless context makes them specific:

```txt
User
Admin
Manager
Operator
```

---

### User decision

Describe the decision the screen supports.

Good examples:

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
Create a dashboard.
Make a professional screen.
Add AI insights.
```

---

### Screen intent

Use a known screen intent when possible.

Recommended intents:

```txt
Customer monitoring
Renewal risk review
Asset recommendation review
Customer review readiness
Connectivity review
Value proof preparation
Service risk review
QBR preparation
Service action plan
```

The screen intent should match the main user task.

Do not ask for a generic dashboard unless the designer explicitly needs one.

---

## Pattern-first component map

Use this map when completing the `Required components and patterns` section.

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

Use base components only when a business pattern or decision component does not
fit:

```txt
Button
Badge
Card
Dialog
DialogClose
DialogFooter
Field
Input
Label
Select
Textarea
PageHeader
SectionHeader
```

---

## Recommended prompt file workflow

When creating a dedicated screen prompt:

1. Start from this template.
2. Select one screen intent.
3. Define one user role.
4. Define one user decision.
5. Choose the minimum pattern set that supports that decision.
6. Remove optional sections that do not apply.
7. Add only the content constraints required for that screen.
8. Keep the output requirement and acceptance criteria.
9. Test generation in Figma Make.
10. If Make fails repeatedly, create a repair prompt instead of overloading the screen prompt.

---

## Common mistakes

Avoid these prompt mistakes:

- asking for a generic dashboard
- asking for too many screen goals
- listing every available business pattern
- omitting the user role
- omitting the user decision
- omitting package import rules
- omitting the complete `App.tsx` output requirement
- asking Make to be visually creative
- asking Make to create charts for decoration
- asking Make to use GenAI for structured data retrieval
- asking Make to validate recommendations automatically
- letting Make invent evidence, proof, sources, citations or customer facts
- keeping optional asset or value proof constraints when they do not apply

---

## Final principle

A template should make good prompts easier to write.

A prompt should make good generation easier to produce.

The goal is not to maximize creativity.

The goal is to produce reliable, governed, decision-oriented first drafts.
