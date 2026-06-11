# Screen architecture

## Purpose

This folder groups reference rules for full-screen structure.

It is not the default Figma Make runtime path.

Use it only when `guidelines/runtime/generation-flow.md` is not specific enough.

This folder answers:

```txt
What type of screen should be generated?
How should the screen be navigated?
How should panels and tabs be structured?
How should information be progressively disclosed?
How should components be composed?
When should visual formats be used?
```

Domain models remain separate because they define business objects and relationships, not screen structure.

Use with:

```txt
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/source/domain-models/
guidelines/evaluation/review/
guidelines/evaluation/repair/
```

---

## Reading order when screen architecture detail is needed

```txt
1. screen-types.md
2. navigation-models.md
3. panel-structures.md
4. tab-architectures.md
5. progressive-disclosure.md
6. visualization-selection-rules.md
7. composition-overview.md
8. decision-layout.md
9. screen-patterns.md
```

Do not read this whole folder by default.

---

## Layer responsibility

```txt
Runtime
= default generation rules and short operating flow.

Screen architecture reference
= deeper explanation of screen type, navigation model, panel structure, disclosure depth and composition flow.

Domain models
= define business objects, relationships, allowed statuses and evidence rules.

Review and repair
= detect and correct weak generations.
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

## Non-negotiable screen principles

Every generated screen must:

```txt
start from the user decision
show facts before interpretation
make source scope visible when trust matters
make validation visible when customer use is sensitive
avoid decorative dashboards
avoid card stacks
keep next actions owned
```
