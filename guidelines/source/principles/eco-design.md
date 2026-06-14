# Eco-design principle

## Status

```txt
SOURCE PRINCIPLE / SOBRIETY / GENAI JUDGMENT
```

## Purpose

Eco-design means generating the smallest useful interface that supports the user task without unnecessary visual, content, interaction, code or AI complexity.

It is useful sobriety, not minimalism for its own sake.

---

## Core rule

Generate the smallest useful interface that helps the user understand the situation and decide what to do next.

Smallest useful does not mean smallest possible.

Keep what is needed for:

```txt
orientation
decision
trust
action
validation
```

Remove what is only decorative, duplicated or weakly related to the task.

---

## Must

You must not remove context, evidence or validation cues that are needed to decide safely.

You must not generate metrics, AI text, interactions or visual effects just to fill space.

You must not use AI to invent or retrieve basic source-system facts.

You must not create local wrappers or visual clones when exported components fit.

---

## Should

You should focus the screen around the current decision or task.

You should limit first-level signals, alerts and metrics to what supports the task.

You should use progressive disclosure for secondary evidence and detail.

You should prefer rows, tables and compact panels for dense operational comparison.

---

## May

You may create local screen-specific components when they reduce effort and no exported component fits.

You may simplify the prompt structure when it adds noise, while preserving intent and trust-critical context.

---

## Useful focused composition

A strong operational screen usually contains:

```txt
clear context
few useful signals
prioritized risks or opportunities
visible evidence or trust cues when needed
owned next actions when execution matters
```

Avoid:

```txt
large generic dashboards
too many equal cards
decorative sections
repeated explanations
unnecessary AI-generated content
raw data dumps
```

---

## Data sobriety

Display only the data needed for the current decision or task.

For asset-heavy screens, group or summarize assets when the full list is not needed.

Still preserve trust-critical context when it affects the decision:

```txt
asset scope
connectivity status
source scope
freshness
validation status
proof status
```

Do not hide uncertainty to make the screen shorter.

---

## Metric sobriety

Use metrics only when they help the user interpret the situation or decide what to do next.

A useful first-level summary often uses 2 to 4 strong indicators.

Do not generate weak metrics such as:

```txt
random score
generic performance
nice number
high confidence
all records
all assets count without decision relevance
```

---

## Interaction sobriety

Do not add interactions that are not needed for the user task.

Avoid unnecessary:

```txt
tabs
accordions
filters
dropdowns
modals
hover-only interactions
nested panels
multi-step flows
```

Use interactions when they reduce effort or support progressive disclosure.

Do not hide essential information behind interactions when it should be visible for decision-making.

---

## AI sobriety

Do not generate AI-heavy screens when deterministic data display is enough.

Use AI only when it adds value through:

```txt
synthesis
explanation
prioritization
recommendation wording
proof gap explanation
grounded action-plan drafting
customer-ready reformulation from grounded facts
```

Do not use AI to retrieve, restate or invent basic facts:

```txt
asset hierarchy
asset facts
connectivity status
telemetry values
source scope
lifecycle status
expected outcomes
proven value
```

---

## Component and code sobriety

Use exported DS primitives and components before creating custom structures.

Create local screen-specific components only when they reduce effort or fit the brief better.

Do not manually rebuild component behavior with raw markup.

Do not use inline styles to recreate design-system identity.

Use layout classes only when needed for composition.

---

## Visual sobriety

Avoid decorative elements that do not support comprehension.

Avoid:

```txt
decorative hero images
large background images
unnecessary illustrations
animated decorative elements
icon-only status communication
visual flourishes that do not help the decision
```

Prefer clear text, structured components and meaningful hierarchy.

---

## Review checklist

Before accepting a generated screen, verify:

```txt
the screen has a clear decision or task
the number of sections is justified
metrics are limited and useful
alerts or signals are prioritized
actions are limited and meaningful
duplicated content has been removed
raw data dumps are avoided
AI text is used only where it adds value
compactness does not remove trust-critical context
custom code or wrappers are avoided unless necessary
visual effects support meaning, not decoration
```

---

## Final principle

A screen is better when it is easier to understand and act on, not when it contains more components.

Remove noise.

Keep meaning.

Preserve trust.
