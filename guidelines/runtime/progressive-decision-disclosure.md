# Runtime Progressive Decision Disclosure

## Status

```txt
ACTIVE RUNTIME / INFORMATION DENSITY / FIGMA MAKE
```

This file prevents information overload in generated decision screens.

It introduces the principle only.

Full component-level disclosure modes are deferred to v0.7.0.

---

## Core rule

```txt
Signal first.
Evidence second.
Detail on demand.
```

Generated decision screens must not expose every fact, metric, source, proof point and action at the same hierarchy level.

---

## First show decision-critical information

Show the minimum information needed to understand:

```txt
what requires attention
why it matters
what decision is needed
what action follows
```

Keep this first level short.

Prefer 1 primary decision, 2 to 4 key signals and 1 visible next action area.

Avoid long unprioritized card stacks.

---

## Then show trust-building detail

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

## Recommended hierarchy

```txt
1. Attention cue
2. Decision summary
3. Confidence reason
4. Evidence detail
5. Owned action
```

Actions may appear early when the screen is operational.

Do not hide ownership under long explanations.

Do not hide validation when trust matters.

---

## Good pattern

```txt
High renewal risk
→ Main reason: proof is internal-only and two actions are overdue
→ Recommended next step: assign renewal readiness review
→ Evidence visible in detail panel
→ ActionRow with owner, due date and priority
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
metrics, proof, recommendations and actions are all exposed equally
```

---

## v0.7.0 note

Component modes such as `summary`, `standard` and `expanded` are intentionally not introduced in v0.6.0.

They belong to the v0.7.0 Decision Progressive Disclosure release.
