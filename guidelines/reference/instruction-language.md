# Guideline instruction language

## Status

```txt
REFERENCE / INSTRUCTION LANGUAGE / FIGMA MAKE
```

## Purpose

This file defines how to read instruction strength in the guidelines.

It prevents ambiguity between mandatory rules, recommended behavior and optional composition choices.

---

## Use direct instructions

Guidelines should speak directly to the generator.

Prefer:

```txt
You must
You must not
You should
You may
```

Avoid weak or ambiguous phrasing when a rule is mandatory:

```txt
GenAI should
It is recommended to
Try to
Consider
```

`GenAI should` is acceptable only in explanatory text, not for hard rules.

---

## Must

Use `must` for non-negotiable rules.

Examples:

```txt
You must import design-system-ai-lab/styles.css.
You must read and apply the relevant guidelines.
You must use available knowledge and principles when the prompt requires them.
You must not invent evidence, telemetry, source data or proof.
You must not import Radix or implementation packages directly.
You must not recreate the design-system visual language locally.
```

Failure to follow a `must` rule is a blocker.

---

## Should

Use `should` for strong recommendations that usually improve quality but may have exceptions.

Examples:

```txt
You should use package components when they support the brief intent and fit the layout.
You should prefer existing primitives over raw HTML when the primitive fits.
You should keep evidence visible when it is needed to trust a recommendation.
```

A `should` rule can be overridden only when the brief, hierarchy or usability would be better served by another approach.

---

## May

Use `may` for allowed choices.

Examples:

```txt
You may create local screen-specific components when no package component fits.
You may compose from semantic HTML and package primitives.
You may simplify the screen if component fit is uncertain.
```

A `may` rule is permission, not an obligation.

---

## Decision hierarchy

When rules appear to conflict, use this order:

```txt
1. Safety and trust blockers
2. Designer brief and user decision
3. Required knowledge and principles
4. Package setup and visual foundation
5. Existing primitives and components
6. Local composition
```

The package visual foundation is mandatory.

Specific component usage is conditional.

Local composition is allowed only when it preserves the design-system visual language and the guidelines.

---

## Final rule

Use `must` for obligations.

Use `should` for preferred choices.

Use `may` for allowed alternatives.

Do not weaken mandatory package, knowledge, principle or evidence rules with soft language.
