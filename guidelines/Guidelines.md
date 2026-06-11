# Guidelines — Design System AI Lab

## Purpose

This file is the mandatory Figma Make entry point for `design-system-ai-lab`.

It is a short router, not full documentation.

Use it to find the smallest useful context before generating.

```txt
Figma Make should read little.
Figma Make should read the same files.
Figma Make should only open detailed references when needed.
```

---

## What this kit generates

Generate sober, operational, B2B decision workspaces using the public `design-system-ai-lab` package.

The kit helps GenAI compose screens from approved components, patterns, contracts and rules.

It must not invent a local design system.

---

## Mandatory read order

Read in this order:

```txt
1. Guidelines.md
2. setup.md
3. tokens.md
4. styles.md
5. runtime/generation-contract.md
6. runtime/screen-contract-generation.md
7. runtime/generation-flow.md
8. runtime/component-selection.md
9. runtime/trust-action-rules.md
10. runtime/visual-rules.md
11. runtime/operational-intelligence-visual-rules.md
12. runtime/progressive-decision-disclosure.md
```

Only read detailed files when the task requires them:

```txt
reference/ = component, pattern and screen details
source/ = research, principles, domain models and historical visual brand
evaluation/ = review, repair and benchmark guidance
contracts/ = machine-readable checks
```

If the requested screen has a screen contract, read it before component reference documentation.

Screen contracts override generic workspace suggestions when they define exact layers, zones, filters, columns, tabs, actions or prohibited content.

---

## Generation contract summary

Always:

1. Render one complete visible screen in `App.tsx`.
2. Import components only from `design-system-ai-lab`.
3. Import styles once from `design-system-ai-lab/styles.css`.
4. Use public package components and business patterns first.
5. Generate one decision-oriented screen, not a generic dashboard.
6. Prefer workspace structure over long card stacks.
7. Read a matching screen contract before selecting components.
8. Preserve exact screen-contract layers, zones, filters, columns, tabs and actions.
9. Show facts before interpretation.
10. Show the minimum decision-critical information first.
11. Keep evidence, source scope and validation available but not overwhelming.
12. Every actionable item must have owner, due date and priority.

Never:

1. Import from internal paths.
2. Create `components/ui`, local wrappers or a local design system.
3. Invent evidence, sources, citations, telemetry, asset facts or value proof.
4. Present expected outcomes as proven value.
5. Use AI confidence as evidence strength.
6. Hide human validation for sensitive decisions.
7. Use visual emphasis to make weak evidence look stronger.
8. Expose every fact, proof point and action at the same hierarchy level.
9. Add undefined filters, columns, tabs, actions or primary layers when a screen contract exists.

---

## Default generation flow

Use this flow before selecting components:

```txt
1. Identify whether a screen contract exists.
2. If yes, read and preserve the screen contract first.
3. Identify the primary user decision.
4. Select the main domain object.
5. Select the screen type.
6. Use the default workspace architecture only when no screen contract defines one.
7. Use business patterns before low-level components.
8. Add decision components only where they support action.
9. Add evidence and trust markers.
10. Add owned next actions.
11. Apply visual rules.
12. Run blockers before final answer.
```

Default workspace architecture:

```txt
WorkspaceShell
→ PageHeading
→ FilterBar or SecondaryNavigation
→ MasterDetailLayout when list/detail is needed
→ ListContainer with approved rows
→ WorkspaceDetailPanel for selected-item detail
→ Tabs only when detail has several views
→ ActionRow or StickyActionBar for follow-through
```

When a screen contract exists, use the contract architecture instead of the default architecture.

---

## Task router

Use one primary decision per screen.

| User intent | Prefer |
| --- | --- |
| Customer monitoring | `CustomerStatusCard`, `ConnectivityCoverageCard`, `ServiceRiskSummary`, `AlertCard`, `ActionRow` |
| Renewal risk review | `RenewalRiskSummary`, `CustomerReviewReadinessCard`, `ValueProofCard`, `RecommendationReviewPanel`, `RiskQueueRow` |
| Asset recommendation review | `AssetIntelligenceSummary`, `ServiceRiskSummary`, `RecommendationReviewPanel`, `RecommendationQueueRow`, `EvidenceRow` |
| QBR or customer readiness | `CustomerReviewReadinessCard`, `ValueProofCard`, `ServiceRiskSummary`, `RecommendationReviewPanel` |
| Installed base exploration | read `reference/screen-contracts/installed-base-intelligence.md` when the requested screen is Installed Base Intelligence |
| Operational inventory | `ListContainer`, approved row component, detail panel, operational density rules |
| Action follow-through | `ActionRow`, `ActionCard`, `StickyActionBar` |
| Evidence review | `EvidenceRow`, `SourceStrengthPill`, `KeyValueList`, `RecommendationReviewPanel` |

For component selection details, read:

```txt
runtime/component-selection.md
contracts/component-registry.contract.json
contracts/components.contract.json
contracts/props.contract.json
```

---

## Blocking failures

Reject or repair the screen if it contains:

```txt
internal package imports
missing stylesheet import
local design-system components
generic dashboard layout
long stack of equal cards
invented evidence or sources
expected outcomes shown as proven value
missing owner, due date or priority on actions
hidden validation for sensitive decisions
unsupported enum-like prop values
decorative gradients, glassmorphism or heavy shadows
all evidence and actions exposed at the same level
screen contract ignored
undefined screen-contract layer, filter, column, tab or action
```

---

## Repair instruction

When a blocker appears:

1. Do not add more context.
2. Identify the blocker family.
3. Use the smallest relevant repair rule.
4. Regenerate only the broken part when possible.

Repair guidance lives in:

```txt
evaluation/repair/repair-router.md
evaluation/review/blocking-checklist.md
contracts/generation-blockers.contract.json
```

---

## Final rule

```txt
Guidelines.md tells Make where to look.
It does not explain everything.
```
