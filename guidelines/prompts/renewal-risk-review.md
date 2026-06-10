# Renewal Risk Review Prompt

## Purpose

Use this reusable prompt to generate a renewal risk review workspace with the v0.5.1 decision workspace standard.

This is reusable generation guidance, not a fixed benchmark case.

Fixed scoring cases live in:

```txt
benchmarks/figma-make/cases/*
```

## Primary decision

```txt
Decide which renewal blockers require mitigation before the renewal discussion.
```

## Primary prompt

```txt
Create a complete visible desktop renewal risk review workspace in App.tsx.

Read and follow:
- make-minimal-contract.md
- Guidelines.md
- setup.md
- prompts/workspace-v2.md
- contracts/components.contract.json
- contracts/props.contract.json
- contracts/evidence-and-trust.contract.json

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/ or src/.
Do not generate a generic dashboard.
Do not create card saturation.

User role: account owner, renewal manager or service team member.
User decision: decide which renewal blockers require mitigation before the renewal discussion.

Use a v0.5.1 decision workspace structure:
1. WorkspaceShell with PageHeading and a primary mitigation action.
2. FilterBar for renewal scope, blockers and readiness status.
3. MasterDetailLayout when blockers or proof gaps need selected-item review.
4. ListContainer with RiskQueueRow for repeated blockers.
5. WorkspaceDetailPanel for selected blocker review.
6. Tabs when selected detail has several local views.
7. StickyActionBar, ActionRow or ActionCard for mitigation follow-through.
8. SectionStack and SectionBlock for grouped content.

Use business patterns before low-level composition:
- RenewalRiskSummary for renewal context.
- ValueProofCard in mode="section" for proof readiness and proof gaps.
- CustomerReviewReadinessCard when customer discussion readiness matters.
- RecommendationReviewPanel in mode="drawer" when recommendations need review.
- RecommendationCard for recommendation rationale and readiness.
- AlertCard for highlighted renewal blockers.
- RiskQueueRow inside ListContainer for repeated blockers.
- ActionRow for mitigation actions.

Content constraints:
- Show renewal date or renewal window.
- Show proof readiness and validation status using canonical values.
- Distinguish internal proof from customer-ready proof.
- Do not present expected outcomes as proven value.
- Keep source context visible where trust matters.
- Every alert must include a recommendation.
- Every action must include owner, due date and priority.
- Do not invent customer facts, proof points, sources or validation.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

## Short prompt

```txt
Create a renewal risk review workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, PageHeading, FilterBar, MasterDetailLayout, ListContainer, RiskQueueRow, WorkspaceDetailPanel, Tabs and StickyActionBar.
Use RenewalRiskSummary, ValueProofCard, CustomerReviewReadinessCard, RecommendationReviewPanel, AlertCard and ActionRow.
Do not create local components, a generic dashboard or card stack.
Keep proof readiness, validation, source context and mitigation ownership visible.
```

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
repair-prompts/expected-outcomes-as-proven-value.md
repair-prompts/actions-without-ownership.md
```

## Benchmark alignment

Related fixed benchmark case:

```txt
benchmarks/figma-make/cases/02-renewal-risk-review.md
```

Benchmark cases are stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.
