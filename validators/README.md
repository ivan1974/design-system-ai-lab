# Automatic validators

## Status

```txt
DETERMINISTIC VALIDATORS / RUN QUALITY GATES
```

## Purpose

Validators provide deterministic checks for agentic screen exploration runs.

They reduce dependence on LLM judgment by blocking or warning on critical failure patterns.

They do not replace guidelines, agent briefs or human design-system governance.

## Source-of-truth rule

```txt
Guidelines define the rules.
Contracts define artifact shapes.
Validators check observable failure patterns.
```

If a validator appears to create new design guidance, simplify the validator and reference the guideline instead.

## Initial validators

```txt
Import Validator
Stylesheet Validator
Fictional Evidence Validator
Local Component Validator
Accessibility Validator
Reasoning Contract Validator
```

## Command

```bash
npm run validate:run -- outputs/<run-id>
```

The validator exits with a non-zero code when blocking issues are found.

## Current scope

The first implementation is intentionally lightweight and dependency-free.

It validates files and patterns that can be checked deterministically.

It does not replace manual review for interaction quality, visual nuance or strategic design-system evolution.
