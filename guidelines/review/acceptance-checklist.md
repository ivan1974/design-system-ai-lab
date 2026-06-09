# Acceptance Checklist

## Purpose

This file is the entry point for reviewing Figma Make generations.

The detailed acceptance checklist has been split into two more actionable files:

```txt
review/blocking-checklist.md
review/quality-checklist.md
```

Use this file to choose which review checklist to apply.

---

## Review model

Review happens in two steps:

```txt
1. Blocking review
2. Quality review
```

The goal is to separate:

```txt
what blocks acceptance
```

from:

```txt
what improves the screen
```

This prevents long checklists from mixing critical failures with normal design
iteration.

---

## Step 1 — Blocking review

Use:

```txt
review/blocking-checklist.md
```

Use it to decide whether a generated screen must be rejected before quality
review.

A generation should be blocked when it fails the design system contract or breaks
trust integrity.

Typical blocking failures:

- `App.tsx` does not render a complete visible screen.
- Components are not imported from `design-system-ai-lab`.
- `design-system-ai-lab/styles.css` is not imported.
- Local design system components are created.
- Internal package imports are used.
- Raw form fields replace package form components.
- Business patterns are ignored when available.
- An `AlertCard` has no recommendation.
- An `ActionCard` has no owner, due date or priority.
- Source, evidence, asset facts or value proof are invented.
- Expected outcomes are presented as proven value.

If a blocking item fails, stop the review.

Use the relevant repair prompt from the matching prompt file or from:

```txt
review/anti-patterns.md
```

---

## Step 2 — Quality review

Use:

```txt
review/quality-checklist.md
```

Use it only after the generation passes the blocking review.

Quality review improves the screen without treating every issue as a rejection.

Typical quality improvements:

- one clearer user decision
- less generic dashboard structure
- fewer and more decision-relevant metrics
- clearer facts-before-interpretation hierarchy
- more visible source strength when trust is affected
- more explicit human validation for critical decisions
- more sober and B2B visual style
- better comparison with the closest golden example

Quality issues should usually lead to refinement, not rejection.

---

## Anti-pattern diagnosis

Use:

```txt
review/anti-patterns.md
```

Use it when a generated screen shows a recognizable failure mode.

Examples:

- local package recreation
- local component wrappers
- generic dashboard drift
- wrong component hierarchy
- manual business pattern reconstruction
- alerts without recommendations
- actions without ownership
- invented evidence or proof
- expected outcomes presented as proven value
- asset intelligence overconfidence
- wrong GenAI usage
- decorative SaaS styling

---

## Golden example comparison

After blocking review, compare the generated screen with the closest golden
example:

```txt
guidelines/examples/golden/customer-monitoring.App.tsx
guidelines/examples/golden/renewal-risk-review.App.tsx
guidelines/examples/golden/asset-recommendation-review.App.tsx
guidelines/examples/golden/qbr-readiness.App.tsx
```

Check whether the generated screen preserves:

```txt
screen intent
→ component hierarchy
→ evidence hierarchy
→ actionability
→ visual sobriety
→ package usage
```

---

## Component audit roadmap

The file below is not an acceptance checklist:

```txt
review/component-audit-roadmap.md
```

It is a working roadmap for auditing and evolving package components and business
patterns.

Do not use it to accept or reject a Make generation.

Keep it only if the repository still needs a component audit planning document.

---

## Final principle

Acceptance review should be fast and actionable.

Use the blocking checklist to reject invalid generations.

Use the quality checklist to improve valid generations.

Use anti-patterns to diagnose and repair recurring Make failures.
