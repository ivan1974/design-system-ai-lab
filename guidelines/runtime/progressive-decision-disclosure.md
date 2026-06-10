# Runtime Progressive Decision Disclosure

## Purpose

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
