# Acceptance Checklist

## Purpose

This file is the entry point for reviewing Figma Make generations.

The detailed acceptance checklist is split into actionable files:

```txt
review/blocking-checklist.md
review/quality-checklist.md
review/workspace-v2-checklist.md
review/review-loop.md
review/repair-routing.md
```

Use this file to choose which review checklist to apply.

---

## Review model

Review happens in a controlled loop:

```txt
Prompt
→ Generation
→ Blocking review
→ Score, when benchmarked
→ Repair prompt, when needed
→ Revised generation
→ Final score or decision
```

Use:

```txt
review/review-loop.md
```

when a generation needs repair or benchmark scoring.

---

## Step 1 — Blocking review

Use:

```txt
review/blocking-checklist.md
```

Use it to decide whether a generated screen must be rejected before quality review.

A generation should be blocked when it fails the design system contract or breaks trust integrity.

Typical blocking failures:

- `App.tsx` does not render a complete visible screen.
- Components are not imported from `design-system-ai-lab`.
- `design-system-ai-lab/styles.css` is not imported.
- Local design system components are created.
- Internal package imports are used.
- Raw form fields replace package form components.
- Business patterns are ignored when available.
- Workspace structure is missing when the task requires list/detail review.
- The output is a long stack of equal generic cards.
- An `AlertCard` has no recommendation.
- An `ActionCard` or `ActionRow` has no owner, due date or priority.
- Source, evidence, asset facts or value proof are unsupported or overstated.
- Expected outcomes are presented as proven value.

If a blocking item fails, stop the review and route the failure with:

```txt
review/repair-routing.md
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

## Step 3 — Workspace v2 review

Use:

```txt
review/workspace-v2-checklist.md
```

Use it when the requested screen involves:

- customer monitoring
- installed base exploration
- asset recommendation review
- renewal risk review
- QBR readiness
- list/detail review
- selected item detail
- evidence review
- follow-up action assignment

The workspace review checks whether Make understood that the system is not an empilement of cards.

It should verify:

```txt
WorkspaceShell
→ FilterBar
→ MasterDetailLayout when relevant
→ WorkspaceDetailPanel when selected-item review is needed
→ compact facts, evidence and action rows
```

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
- card saturation
- weak layout hierarchy
- missing detail panel
- wrong component hierarchy
- manual business pattern reconstruction
- alerts without recommendations
- actions without ownership
- unsupported evidence or proof
- expected outcomes presented as proven value
- asset intelligence overconfidence
- wrong GenAI usage
- decorative SaaS styling

Then route repair with:

```txt
review/repair-routing.md
```

---

## Golden example comparison

After blocking review, compare the generated screen with the closest golden example:

```txt
guidelines/examples/golden/customer-monitoring.App.tsx
guidelines/examples/golden/renewal-risk-review.App.tsx
guidelines/examples/golden/asset-recommendation-review.App.tsx
guidelines/examples/golden/qbr-readiness.App.tsx
guidelines/examples/golden/installed-base-explorer.App.tsx
```

Check whether the generated screen preserves:

```txt
screen intent
→ component hierarchy
→ workspace structure
→ evidence hierarchy
→ actionability
→ visual sobriety
→ package usage
```

---

## Benchmark review

For benchmark outputs, use:

```txt
benchmarks/figma-make/scoring/scoring-model.md
benchmarks/figma-make/evaluations/evaluation-template.md
```

Document initial score, repair prompt used, revised score and final decision.

---

## Roadmap and release scope

Do not use roadmap files to accept or reject a Make generation.

Use active roadmap documents only to understand release scope and planned work.
