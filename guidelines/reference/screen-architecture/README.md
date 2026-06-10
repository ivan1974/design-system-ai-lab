# Screen architecture

## Purpose

This folder groups the rules used to create full screens with the design system.

It consolidates the previous information architecture, composition and visualization guidance into one place so Figma Make can find the screen-generation rules quickly.

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
guidelines/source/domain-models/
guidelines/prompts/
guidelines/examples/golden/
guidelines/evaluation/review/
guidelines/evaluation/repair/
```

---

## Reading order

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

Then read the relevant domain models and prompt file.

---

## Layer responsibility

```txt
Screen architecture
= choose screen type, navigation model, panel structure, disclosure depth and composition flow.

Domain models
= define business objects, relationships, allowed statuses and evidence rules.

Prompts
= apply the right architecture and components to one generation task.

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
avoid one-column card stacks when a workspace is needed
use cards intentionally, not by default
keep actions owned, dated and prioritized
```

---

## Legacy paths

The older folders below are kept only as compatibility redirects:

```txt
guidelines/ia/
guidelines/composition/
guidelines/visualization/
```

Do not maintain duplicate rules there. Update this folder instead.
