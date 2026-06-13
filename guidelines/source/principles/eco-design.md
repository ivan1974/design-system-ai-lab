# Eco-design principle

## Status

```txt
SOURCE PRINCIPLE / SOBRIETY / GENAI JUDGMENT
```

## Purpose

Eco-design means generating the smallest useful interface that supports the user task without unnecessary visual, content, interaction or AI complexity.

It is not minimalism for its own sake.

It is useful sobriety.

A generated screen should remove noise without removing the context, evidence or trust cues needed to decide safely.

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

## Prefer focused composition

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

If everything is visible, nothing is prioritized.

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

Do not generate metrics just to fill space.

Use metrics only when they help the user interpret the situation or decide what to do next.

A useful first-level summary often uses 2 to 4 strong indicators.

More metrics may be appropriate when the prompt explicitly asks for analysis, comparison or monitoring density.

Weak metrics include:

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

## Content sobriety

Generated copy should be concise and useful.

Write less, but make each sentence carry meaning.

Good concise content can still include important qualifiers:

```txt
partial visibility
historical evidence
expected outcome
not customer-ready proof
review needed
```

Do not remove those qualifiers if they prevent false confidence.

Avoid:

```txt
long paragraph cards
generic filler text
repeated helper text
repeated customer context
repeated status labels
repeated proof claims
```

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

Use existing DS primitives and usage components before creating custom structures.

Do not create local wrappers when approved DS material exists.

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

## Relationship with accessibility

Eco-design and accessibility support each other.

Reducing unnecessary complexity improves:

```txt
reading order
comprehension
keyboard navigation
cognitive load
review quality
maintainability
```

Do not reduce content so much that users lose necessary context.

The goal is useful sobriety, not visual emptiness.

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
