# Asset Recommendation Review Prompt

## Purpose

This file provides a ready-to-use Figma Make prompt for generating an asset
recommendation review screen with the `design-system-ai-lab` package.

Use this prompt when the goal is to help a Service Manager, Customer Success
Manager or asset/service expert review asset signals, source limits,
recommendation readiness and validation actions before customer communication.

This prompt follows the shared structure defined in:

```txt
prompts/template.md
```

It should generate a complete visible screen in `App.tsx`.

It should not generate a generic dashboard, asset inventory table, chatbot-first
screen or local design system.

---

## Screen intent

Generate a decision-oriented asset recommendation review screen.

The screen should help the user answer:

1. What asset context is known?
2. What is source-system fact versus Health signal versus Intelligence interpretation?
3. Which visibility limits affect trust?
4. Which recommendations are ready, blocked or need expert validation?
5. What follow-up action is needed before customer communication?

The primary decision is:

```txt
Decide whether asset recommendations are ready for customer communication.
```

---

## Primary prompt

Use this prompt for the first asset recommendation review screen generation.

```txt
# Asset Recommendation Review Prompt

## Purpose

Create a complete visible desktop asset recommendation review screen in App.tsx.

The screen should help a Service Manager or Customer Success Manager decide whether asset recommendations are ready for customer communication.

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

Service Manager or Customer Success Manager.

## User decision

Decide whether asset recommendations are ready for customer communication.

## Screen intent

Asset recommendation review.

Generate a decision-oriented asset recommendation review screen.
Do not generate a generic analytics dashboard.
Do not generate a simple asset inventory table.
Do not generate a chatbot-first interface for asset facts.
Do not include every available business pattern by default.

## Required components and patterns

Use business patterns before low-level components when a pattern fits the section intent.

Required:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- AssetIntelligenceSummary
- ServiceRiskSummary
- RecommendationReviewPanel
- RecommendationCard
- ActionList
- ActionCard

Optional, only if useful for the decision:
- MetricGrid
- MetricCard
- PriorityList
- AlertCard
- ConnectivityCoverageCard

Do not manually rebuild customer context, asset intelligence, service risk, recommendation review or action lists with raw Card, div, dt or dd markup when a dedicated pattern exists.

## Screen structure

1. PageHeader with title, description and CreateActionDialog for validation or follow-up action creation.
2. CustomerStatusCard for customer context, plan, contract, owner, coverage and validation status.
3. AssetIntelligenceSummary for source-system facts, Health signals, Intelligence interpretation, visibility limits, source scope, source strength and freshness.
4. ServiceRiskSummary when the asset signals create a service risk or customer communication risk.
5. RecommendationReviewPanel with 2 to 3 RecommendationCard items for recommendation readiness review.
6. ActionList with 2 to 4 ActionCard items for validation, expert review or follow-up actions.

The screen should follow this flow:

Customer context
→ asset source facts
→ Health signals
→ Intelligence interpretation
→ service or communication risk
→ recommendation review
→ validation actions

## Content requirements

- Use CustomerStatusCard when customer context matters.
- Use AssetIntelligenceSummary before asset-related recommendations.
- Use ServiceRiskSummary when asset signals create service, visibility or customer communication risk.
- Use RecommendationReviewPanel with RecommendationCard items for recommendation review.
- Use ActionList with ActionCard items for assigned validation or follow-up work.
- Every RecommendationCard should include priority, readiness, rationale, scope and evidence.
- Every important recommendation must be supported by visible facts or context.
- Every action must include owner, due date and priority.
- Button labels must be explicit and action-oriented.
- Distinguish source-system facts, Health signals and Intelligence interpretation.
- Distinguish partial visibility from complete asset knowledge.
- Do not present Intelligence interpretation as source-system truth.
- Do not present non-connected assets as live-monitored.
- Do not invent asset facts, telemetry, sources, citations, evidence or customer facts.
- The screen must help answer: what is known, what is uncertain, what is recommended and what needs validation.

## Suggested content

Use this sample content to make the generated screen concrete.

Customer context:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Contract: #NS-2024-118
- Owner: Sarah Moreau, CSM
- Coverage: 25 known assets across 3 sites
- Source context: Schneider monitored assets and known installed base
- Validation status: expert review needed before customer communication
- Status badges: Active plan, Source strength: partial, Review needed

Asset intelligence summary:
- Asset group: Backup power system
- Site: Main production site
- Asset scope: 8 known assets, 5 connected, 3 non-connected
- Source-system facts: 8 assets identified in known installed base; 5 assets connected to monitoring platform
- Health signals: 2 connected UPS assets show recurring battery health warnings; 1 switchboard has incomplete telemetry
- Intelligence interpretation: Battery replacement and connectivity recovery may reduce service risk before the next customer review
- Visibility limits: 3 assets are not connected and cannot be treated as live-monitored
- Source scope: known installed base, monitoring platform and service history
- Source strength: partial
- Freshness: monitoring update 18 hours ago; installed base updated last month
- Validation status: expert review needed before customer communication
- Badges: Partial visibility, Health signal, Intelligence interpretation, Expert review needed

Service risk summary:
- Risk level: warning
- Risk summary: Asset recommendations may be useful, but visibility is partial and expert review is needed before customer communication.
- Affected scope: Backup power system at main production site
- Customer impact: Recommendations could affect maintenance planning and budget discussion
- Service impact: Premature customer communication could overstate monitoring coverage or recommendation certainty
- Source context: monitoring platform, known installed base and service history
- Source strength: partial
- Freshness: monitoring update 18 hours ago
- Validation status: expert review needed
- Recommended review: Validate source scope, connected asset status and recommendation rationale before customer communication

Recommendation review:
- Review scope: Backup power system recommendation set
- Review status: Expert validation needed
- Source context: monitoring platform, known installed base and service history
- Validation status: Review before customer use
- Customer readiness: Not customer-ready yet
- Recommendation: Review UPS battery replacement plan, priority: high, readiness: needs review, rationale: recurring battery health warnings suggest a maintenance planning discussion may be needed, scope: connected UPS assets, evidence: 2 connected UPS assets show recurring battery health warnings.
- Recommendation: Recover connectivity for non-connected critical assets, priority: high, readiness: ready for internal action, rationale: 3 known assets are not connected and cannot be treated as live-monitored, scope: backup power system, evidence: 3 of 8 known assets are not connected.
- Recommendation: Prepare customer communication only after expert validation, priority: medium, readiness: blocked, rationale: recommendation confidence depends on source scope and partial asset visibility, scope: customer communication, evidence: source strength is partial and 3 assets are non-connected.

Actions:
- Validate asset recommendation with service expert, owner: Service Manager, due date: next 3 business days, priority: high, status: todo, context: expert validation needed before customer communication.
- Confirm connectivity status for non-connected assets, owner: Remote Support Specialist, due date: this week, priority: high, status: in progress, context: non-connected assets cannot be treated as live-monitored.
- Prepare customer-ready recommendation summary after validation, owner: CSM, due date: before customer review, priority: medium, status: todo, context: translate validated recommendation into customer-ready language.

## AI usage constraints

Use BI-first, AI-assisted logic.

- Do not use GenAI to retrieve basic asset facts.
- Do not use GenAI to retrieve asset counts, telemetry, connectivity status, owner, contract or service history.
- Assume structured asset data comes from APIs, BI tools, databases, monitoring platforms or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation drafting or customer-ready wording after evidence is visible.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status, customer readiness or proof readiness.

## Evidence and trust constraints

- Show visible facts before interpretation.
- Distinguish source-system facts, Health signals, Intelligence interpretation, recommendations and actions.
- Every important recommendation must be supported by visible or auditable evidence.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show freshness when asset, Health, telemetry or service history data may be outdated.
- Show validation status when content may be used for customer, service, asset, modernization or maintenance decisions.
- Do not invent proof points, evidence, sources, citations, telemetry, asset facts or customer facts.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Keep human or expert validation visible before customer communication.
- Do not claim AI validation or automatic approval.
- Use display components, not disabled form fields, for display-only facts.

## Asset intelligence constraints

- Use AssetIntelligenceSummary before asset-related recommendations.
- Distinguish source-system facts, Health signals and Intelligence interpretation.
- Do not present Intelligence interpretation as source-system truth.
- Do not present partial Health visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Show source context, source scope, source strength and freshness when relevant.
- Keep expert or human validation visible before customer use.
- Use RecommendationReviewPanel and RecommendationCard for recommendation rationale when recommendations need review.
- Use ActionList and ActionCard for assigned validation or follow-up work.

## Recommendation review constraints

- Use RecommendationReviewPanel to frame the recommendation set.
- Use RecommendationCard for each individual recommendation.
- Each RecommendationCard should include priority, readiness, rationale, scope and evidence.
- The panel should carry shared review scope, source context, validation status, customer-readiness and source/proof context.
- Do not use RecommendationReviewPanel to approve recommendations automatically.
- Do not claim AI validation or automatic approval.
- Use CreateActionDialog only to create accountable follow-up work, not to approve the recommendation.
- Use ActionList for assigned internal actions.

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
- The screen includes PageHeader, CreateActionDialog, CustomerStatusCard, AssetIntelligenceSummary, ServiceRiskSummary, RecommendationReviewPanel, RecommendationCard, ActionList and ActionCard.
- Business patterns are used when they match the section intent.
- Form components are used for form fields if forms are generated.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- Visible asset facts appear before Health signals, Intelligence interpretation, recommendations and actions.
- Source context, source strength, freshness or validation status is visible when trust matters.
- Source-system facts, Health signals and Intelligence interpretation are clearly separated.
- Non-connected assets are not presented as live-monitored.
- Partial visibility is not presented as complete asset knowledge.
- Every important recommendation is supported by visible facts or context.
- Every action includes owner, due date and priority.
- Badge tones use only neutral, primary, success, warning or danger.
- No Badge uses tone="info".
- The primary action is clear.
- The screen does not claim AI validation or automatic approval.
- The screen helps answer what is known, what is uncertain, what is recommended and what needs validation.
```

---

## Short prompt

Use this shorter version when Figma Make has already loaded the Make kit files.

```txt
Create a complete visible asset recommendation review screen in App.tsx using design-system-ai-lab.

Read and follow Guidelines.md, setup.md, tokens.md and styles.md.

Use imports from design-system-ai-lab and import design-system-ai-lab/styles.css.

Do not create a local package, local wrappers, internal imports or recreate design system components.

User role: Service Manager or Customer Success Manager.
User decision: decide whether asset recommendations are ready for customer communication.

Use this structure:
1. PageHeader with CreateActionDialog for validation or follow-up action creation.
2. CustomerStatusCard for customer context.
3. AssetIntelligenceSummary for source-system facts, Health signals, Intelligence interpretation, visibility limits, source scope, source strength and freshness.
4. ServiceRiskSummary when asset signals create a service or customer communication risk.
5. RecommendationReviewPanel with RecommendationCard items for recommendation readiness review.
6. ActionList with ActionCard items for validation, expert review or follow-up actions.

Show visible asset facts before interpretation.
Distinguish source-system facts, Health signals and Intelligence interpretation.
Do not present Intelligence interpretation as source-system truth.
Do not present partial visibility as complete asset knowledge.
Do not present non-connected assets as live-monitored.
Show source context, source strength, freshness or validation status when trust matters.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Do not use GenAI to retrieve basic asset facts.
Do not invent telemetry, evidence, sources, citations, asset facts or customer facts.
Do not claim AI validation or automatic approval.
Keep the screen sober, B2B, readable, evidence-aware and decision-oriented.
Use only approved Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".
```

---

## Correction prompt — local components were created

Use this if Make creates local components or a local package.

```txt
Revise the generated screen.

Use the published npm package design-system-ai-lab directly.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/ or src/.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Keep the same asset recommendation review screen intent.
Use PageHeader, CreateActionDialog, CustomerStatusCard, AssetIntelligenceSummary, ServiceRiskSummary, RecommendationReviewPanel, RecommendationCard, ActionList and ActionCard from the package.

Update App.tsx so it renders a complete visible screen using package imports.
```

---

## Correction prompt — generic dashboard was generated

Use this if Make generates a generic dashboard or asset inventory table instead of
an asset recommendation review screen.

```txt
Revise the generated screen.

It is too generic and dashboard-like.

Keep one primary user decision:
Decide whether asset recommendations are ready for customer communication.

Use this structure instead:
1. PageHeader with CreateActionDialog for validation or follow-up action creation.
2. CustomerStatusCard for customer context.
3. AssetIntelligenceSummary for asset facts, Health signals, Intelligence interpretation and visibility limits.
4. ServiceRiskSummary when asset signals create service or communication risk.
5. RecommendationReviewPanel with RecommendationCard items for recommendation readiness review.
6. ActionList with ActionCard items for validation and follow-up actions.

Remove decorative charts, generic cards, decorative hero sections and large asset inventory tables.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Do not invent asset facts, telemetry, evidence, sources or citations.
```

---

## Correction prompt — asset intelligence is unsafe

Use this if Make presents asset interpretation as too certain or customer-ready.

```txt
Revise the generated screen.

The asset intelligence is unsafe or overconfident.

Distinguish source-system facts, Health signals and Intelligence interpretation.
Do not present Intelligence interpretation as source-system truth.
Do not present partial Health visibility as complete asset knowledge.
Do not present non-connected assets as live-monitored.
Show source context, source scope, source strength and freshness when relevant.
Keep expert or human validation visible before customer use.
Use AssetIntelligenceSummary before asset-related recommendations.
Use RecommendationReviewPanel and RecommendationCard for recommendation rationale.
Use ActionList and ActionCard for assigned validation or follow-up work.

Keep the asset recommendation review structure and package components.
```

---

## Correction prompt — recommendation review is unsafe

Use this if Make presents recommendations as automatically approved or validated.

```txt
Revise the generated screen.

The recommendation review is unsafe or overconfident.

Use RecommendationReviewPanel to frame the recommendation set.
Use RecommendationCard for individual recommendations.
Each recommendation should include priority, readiness, rationale, scope and evidence.
Do not use RecommendationReviewPanel to approve recommendations automatically.
Do not claim AI validation or automatic approval.
Show validation status before customer use.
Use ActionList for assigned internal follow-up actions.

Keep the asset recommendation review structure and package components.
```

---

## Final principle

This prompt should generate a focused asset recommendation review screen, not a
generic dashboard or inventory table.

The output should help the user distinguish facts, Health signals and
Intelligence interpretation, review recommendation readiness and assign
validation actions before customer communication.
