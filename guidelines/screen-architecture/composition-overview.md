# Composition overview

## Purpose

This file explains how Figma Make should compose full screens using the `design-system-ai-lab` package.

Composition is the bridge between screen architecture, domain models, components, decision components, business patterns and useful product screens.

The goal is not to place components randomly.

The goal is to create screens that help a user understand a situation, assess priority, trust the evidence and decide what to do next.

---

## Mandatory principles

Every generated composition must remain:

```txt
accessible
sober
evidence-aware
research-informed
decision-oriented
action-oriented
easy to review
```

Principles apply before component choice:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

---

## Knowledge layer

Composition should be informed by the knowledge layer when the screen relates to known service experience needs, internal workflows or open validation questions.

Use the knowledge layer to understand:

```txt
user need
business context
asset context
source scope
source strength
evidence placement
Health versus Intelligence distinction
expected outcome versus proof status
risk prioritization
action ownership
review criteria
```

Do not copy research notes directly into generated screens.

Translate knowledge into:

```txt
user need
→ design implication
→ composition rule
→ component or pattern choice
→ review criterion
```

---

## Core composition principle

Start from the user decision, not from the available data.

Generated screens should answer:

```txt
What is happening?
Why does it matter?
What can I trust?
What should I do next?
```

Every section should support understanding, prioritization, trust or action.

If a section does not support one of these questions, do not generate it.

---

## Evidence-aware composition flow

A screen should distinguish:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
→ human validation when needed
```

Do not start with recommendations before showing the facts or context that make them credible.

---

## Composition order

When generating a screen, use this order:

```txt
1. Apply mandatory principles.
2. Choose the screen type and navigation model.
3. Check relevant domain models.
4. Clarify the user role and decision.
5. Use visible facts, source scope and source strength before interpretation.
6. Use business patterns for known business sections.
7. Use decision components for metrics, risks and actions.
8. Use compact or composition components to avoid card saturation.
9. Use form components for input flows.
10. Add custom markup only when necessary.
```

---

## Approved package usage

Import from the package root:

```tsx
import { PageHeader, CustomerStatusCard, MetricGrid } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

Do not recreate the design system locally.

Do not import from internal package paths.

Do not create local wrappers.

---

## Card usage rule

Use cards for emphasis and containment.

Do not use cards as the default layout primitive for every fact, metric, evidence cue, action, document or detail section.

Prefer:

```txt
WorkspaceShell
MasterDetailLayout
DetailPanel
SectionStack
StickyActionBar
KeyValueList
EvidenceRow
SignalRow
CompactMetric
Timeline
```

when the task requires exploration, drill-down or dense operational review.

---

## Acceptance criteria

A composition is good when:

```txt
it starts from a clear user decision
it uses the correct screen architecture
it shows facts before interpretation
it makes trust limits visible
it avoids generic dashboards
it avoids unnecessary card saturation
it connects risks and recommendations to owned actions
```
