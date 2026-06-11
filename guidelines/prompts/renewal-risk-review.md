# Renewal Risk Review Prompt

## Purpose

Reusable prompt for a renewal risk review workspace.

This is reusable generation guidance, not a fixed benchmark case.

Use the fixed benchmark case for scoring:

```txt
benchmarks/figma-make/cases/02-first-generation-renewal-risk.md
```

## Primary decision

```txt
Decide which renewal blockers require mitigation before the renewal discussion.
```

## Prompt

```txt
Create a complete visible desktop renewal risk review workspace in App.tsx.

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Read only the v0.6.0 Make Kit runtime path unless a specific component detail is needed:
- guidelines/Guidelines.md
- guidelines/setup.md
- guidelines/tokens.md
- guidelines/styles.md
- guidelines/runtime/generation-contract.md
- guidelines/runtime/generation-flow.md
- guidelines/runtime/component-selection.md
- guidelines/runtime/trust-action-rules.md
- guidelines/runtime/visual-rules.md
- guidelines/runtime/progressive-decision-disclosure.md

Use a decision workspace structure:
- WorkspaceShell
- PageHeading
- FilterBar
- MasterDetailLayout for blocker or proof-gap review
- ListContainer with RiskQueueRow or ReviewQueueRow
- WorkspaceDetailPanel for selected blocker detail
- ActionRow or StickyActionBar for mitigation follow-through

Prefer business patterns when relevant:
- RenewalRiskSummary
- ValueProofCard
- CustomerReviewReadinessCard
- RecommendationReviewPanel

Rules:
- Do not generate a generic dashboard.
- Do not create a card stack.
- Do not create local components or local wrappers.
- Do not import from dist/ or src/.
- Show proof readiness and validation status when trust matters.
- Distinguish internal proof from customer-ready proof.
- Do not present expected outcomes as proven value.
- Do not invent customer facts, proof points, sources or validation.
- Every action must include owner, due date and priority.
```

## Repair

If Make drifts, use:

```txt
guidelines/evaluation/repair/repair-router.md
```
