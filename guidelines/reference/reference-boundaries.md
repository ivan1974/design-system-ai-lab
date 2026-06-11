# Reference guideline boundaries

## Purpose

This file defines how to read `guidelines/reference/` in v0.6.0.

Not every reference file is a default Figma Make instruction.

Reference files describe components, patterns, forms and screen architecture, but the active generation path remains:

```txt
guidelines/Guidelines.md
guidelines/runtime/*
contracts/component-registry.contract.json
contracts/props.contract.json
```

## Boundary rule

Use the component registry first.

```txt
preferred = default GenAI choice when the need matches
allowed = usable when relevant, but not the default choice
use-with-care = usable only when the specific constraint matches
deprecated = do not generate for new screens unless explicitly asked
blocked-for-genai = do not generate
internal-only = do not use directly in generated screens
```

## Preferred guidelines

Preferred guideline files must follow the full GenAI template:

```txt
Purpose
Use this component when
Do not use this component when
Prefer this component over
Never generate
Required props
Controlled values
GenAI generation rules
Common generation failures
Repair prompt
Related stories
Related contracts
```

The full template is enforced by tests for registry entries with:

```txt
genAIStatus: preferred
```

## Non-preferred guidelines

Non-preferred files do not all need the full component template.

They must still have a clear generation boundary when they are likely to influence Make output.

A clear boundary should answer:

```txt
What is the status?
When may Make use it?
When should Make avoid it?
What preferred component or pattern should Make use first?
Which repair prompt applies if Make misuses it?
```

## High-value non-preferred boundary matrix

| Guideline | Boundary |
| --- | --- |
| `guidelines/reference/decision/alert-card.md` | Allowed. Use for highlighted risk or warning objects; prefer rows or summaries for repeated items. |
| `guidelines/reference/decision/recommendation-card.md` | Allowed. Use for one recommendation object; prefer RecommendationReviewPanel when sensitive review is required. |
| `guidelines/reference/decision/action-card.md` | Allowed but secondary. Prefer ActionRow for repeated or dense owned actions. |
| `guidelines/reference/patterns/renewal-risk-summary.md` | Allowed. Use when renewal risk is the main decision context. |
| `guidelines/reference/patterns/service-risk-summary.md` | Allowed. Use when service risk is the main decision context. |
| `guidelines/reference/patterns/value-proof-card.md` | Allowed. Use only when proof readiness and proof limits must be visible. |
| `guidelines/reference/patterns/connectivity-coverage-card.md` | Allowed. Use when monitoring coverage or partial visibility matters. |
| `guidelines/reference/patterns/customer-review-readiness-card.md` | Allowed. Use when customer-ready status is the main concern. |
| `guidelines/reference/patterns/customer-status-card.md` | Allowed. Use for customer context; do not replace PageHeading or workspace structure. |
| `guidelines/reference/patterns/create-action-dialog.md` | Allowed. Use only when action creation is required. |
| `guidelines/reference/components/tabs.md` | Allowed. Use for local detail views; do not use as primary navigation. |
| `guidelines/reference/components/dialog.md` | Allowed. Use for focused modal tasks; do not use as a workspace container. |
| `guidelines/reference/forms/input.md` | Allowed. Use package form components; do not generate raw form controls. |
| `guidelines/reference/forms/select.md` | Allowed. Use package form components; do not generate raw select controls. |
| `guidelines/reference/components/page-header.md` | Deprecated / blocked for GenAI. Prefer PageHeading. |
| `guidelines/reference/components/metric-card.md` | Use with care. Prefer MetricStrip and CompactMetric for runtime signals. |
| `guidelines/reference/decision/metric-grid.md` | Use with care. Prefer MetricStrip and CompactMetric unless a grid is explicitly required. |

## Architecture reference files

Architecture reference files may explain concepts and should not be forced into the component template.

They must not override runtime rules.

Use them only when the runtime path is not specific enough:

```txt
guidelines/reference/screen-architecture/README.md
guidelines/reference/screen-architecture/composition-overview.md
guidelines/reference/screen-architecture/screen-types.md
guidelines/reference/screen-architecture/screen-patterns.md
guidelines/reference/screen-architecture/navigation-models.md
guidelines/reference/screen-architecture/progressive-disclosure.md
```

## Repair route

When a generated output misuses a non-preferred component, route through:

```txt
guidelines/evaluation/repair/repair-router.md
```

Common routes:

```txt
local components -> no-local-components.md
raw controls -> raw-form-controls.md
card stack -> card-saturation.md
missing evidence -> missing-evidence.md
missing ownership -> actions-without-ownership.md
visual drift -> overdecorated-surface.md
information overload -> too-many-metrics.md
context drift -> weak-layout.md
```
