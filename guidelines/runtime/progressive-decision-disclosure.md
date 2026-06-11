# Runtime Progressive Decision Disclosure

## Status

```txt
ACTIVE RUNTIME / DECISION HIERARCHY / FIGMA MAKE
```

This file prevents information overload in generated decision screens.

It is now an active v0.7.0 runtime rule.

---

## Core rule

```txt
Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.
```

Do not expose every fact, metric, source, proof point and action at the same hierarchy level.

---

## Required disclosure model

Use three levels:

```txt
1. Signal
2. Decision
3. Evidence
```

### Signal

Signal answers:

```txt
What requires attention?
```

Show signals early.

Examples:

- critical health;
- active alert;
- connectivity issue;
- no coverage;
- unknown asset visibility;
- overdue action;
- missing validation;
- weak source strength.

### Decision

Decision answers:

```txt
What should be done?
```

Decision content must be visible before deep evidence.

Examples:

- schedule service;
- contact expert;
- review recommendation;
- assign follow-through;
- validate source;
- request missing information;
- download report.

### Evidence

Evidence answers:

```txt
Why should the user trust this?
```

Evidence should be available without overwhelming the first view.

Examples:

- source;
- freshness;
- source strength;
- validation status;
- proof readiness;
- history;
- documents;
- measurements;
- observations.

---

## First view rule

The first view should show the minimum information needed to understand:

```txt
what requires attention
why it matters enough to act
what decision is needed
what action follows
```

Keep the first level short.

Prefer:

```txt
1 primary decision
2 to 4 key signals
1 visible next action area
```

Avoid long unprioritized card stacks.

---

## Evidence placement rule

Expose supporting information in a secondary level:

```txt
detail panel
tabs
expandable section
evidence list
supporting row
key-value list
status summary
```

Use detail to build trust, not to overwhelm the first view.

Evidence must remain available when it affects trust.

---

## Trust adjacency rule

Trust-sensitive decision content must keep trust markers nearby.

When a recommendation or expected outcome is shown, keep these close when available:

- source strength;
- validation status;
- proof readiness;
- freshness;
- source scope.

Do not hide validation when trust matters.

Do not make expected outcomes look proven unless proof readiness supports it.

Do not use AI confidence as source strength.

---

## Action visibility rule

When an action is available, these must remain visible:

- action label;
- owner;
- due date;
- priority.

Do not bury action ownership under long explanations.

For operational screens, the action area may appear before full evidence.

---

## Screen contract relationship

A screen contract controls structure.

Progressive decision disclosure controls hierarchy inside that structure.

Do not add extra sections, tabs, cards or columns to expose evidence if the screen contract does not allow them.

Use allowed tabs, rows, detail panels and action areas.

---

## Recommended hierarchy

```txt
1. Attention cue or signal
2. Decision summary
3. Confidence reason
4. Evidence detail
5. Owned action
```

For operational screens, the action may be visible in the row or sticky action area while supporting evidence remains in detail.

---

## Good pattern

```txt
Active alert
→ Main reason: recent telemetry changed and validation is available
→ Recommended next step: schedule service
→ Evidence visible in detail panel
→ Action area with owner, due date and priority
```

---

## Bad pattern

```txt
12 equal cards
+ all metrics
+ full evidence list
+ all proof points
+ all actions
+ no clear first decision
```

---

## Repair information overload

Repair the screen if:

```txt
every section has the same visual weight
all evidence is visible before the decision summary
too many cards compete for attention
action is hidden below evidence detail
validation status is buried when trust matters
source strength is far from the recommendation
proof readiness is hidden when expected outcome appears
metrics, proof, recommendations and actions are all exposed equally
```

---

## v0.7.0 implementation note

Component modes may later expose names such as `summary`, `standard` and `expanded`.

Until then, the runtime rule is semantic:

```txt
Signal → Decision → Evidence
```
