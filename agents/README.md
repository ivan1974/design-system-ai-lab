# Agent briefs

## Status

```txt
AGENT BRIEFS / ORCHESTRATION / DESIGN SYSTEM AI LAB
```

## Purpose

This directory defines the responsibilities of agents used in agentic screen exploration workflows.

Agent briefs do not replace guidelines or contracts.

```txt
Guidelines define how to reason and design.
Contracts define the shape of structured artifacts.
Agent briefs define who does what in the workflow.
```

## Core orchestration rule

Every agent must preserve the project intent:

```txt
Design principles and relevant knowledge must be applied.
Available design-system material must be inspected.
Existing components and primitives should be used when they fit the brief and layout.
Local composition may be used when exported components do not fit.
Fictional package imports are not allowed.
```

This means component usage is recommended and conditional, while principle application and DS inspection are mandatory.

## Primary references

Agents must use these references instead of redefining their rules:

```txt
guidelines/runtime/genai-reasoning-hierarchy.md
guidelines/reference/instruction-language.md
guidelines/reference/component-selection.md
guidelines/reference/design-system-vocabulary.md
guidelines/reference/component-usage-cards.md
contracts/README.md
```

## Agents

```txt
brief-interpreter.md
rule-selector.md
information-architect.md
component-fit-reviewer.md
screen-explorer.md
trust-reviewer.md
ds-evolution-reviewer.md
```
