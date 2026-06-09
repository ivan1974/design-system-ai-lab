# Information architecture index

## Purpose

This folder defines the information architecture layer of the decision workspace
system.

It helps Figma Make decide what type of screen to generate and how to organize
information before selecting components.

Use it before:

```txt
guidelines/composition/overview.md
guidelines/composition/decision-layout.md
guidelines/composition/screen-patterns.md
```

---

## Reading order

```txt
1. screen-types.md
2. navigation-models.md
3. panel-structures.md
4. tab-architectures.md
5. progressive-disclosure.md
6. ../domain-models/*.md when the screen contains business objects
7. ../visualization/selection-rules.md when the screen contains metrics, tables, timelines or benchmarks
8. ../composition/overview.md
9. ../composition/decision-layout.md
10. ../composition/screen-patterns.md
```

---

## Layer responsibility

```txt
IA layer
= choose screen type, navigation model, panel structure and information depth.

Domain model layer
= define business objects, relationships, allowed statuses and evidence rules.

Visualization layer
= choose the right visual format for comparison, trend, hierarchy, distribution or follow-through.

Composition layer
= arrange approved components and patterns into a decision-oriented screen.
```

---

## Core principle

```txt
Decide the screen architecture before selecting components.
```

A good Make generation should follow this order:

```txt
user task
→ screen type
→ navigation model
→ domain objects
→ information depth
→ visualization choice
→ component composition
→ review checklist
```

---

## Acceptance criteria

A generated screen passes the information architecture review when:

```txt
The screen type matches the user task.
The navigation model supports the decision flow.
Panels and tabs separate user questions, not internal systems.
Domain objects and relationships are coherent.
Progressive disclosure prevents information overload.
Visualizations are used for a decision purpose, not decoration.
```
