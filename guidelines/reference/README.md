# Reference guidelines

## Purpose

This folder contains reference guidance for components, decision elements, forms, patterns and screen architecture.

It is not the default Figma Make reading path.

The default runtime path remains:

```txt
guidelines/Guidelines.md
guidelines/runtime/*
contracts/component-registry.contract.json
contracts/props.contract.json
```

## How to use this folder

Read reference files only when the runtime path is not specific enough.

Use the registry status before choosing any component or pattern.

```txt
preferred = default GenAI choice when the need matches
allowed = usable when relevant, but not the default choice
use-with-care = usable only when the specific constraint matches
deprecated = do not generate for new screens unless explicitly asked
blocked-for-genai = do not generate
internal-only = do not use directly in generated screens
```

## Boundary standard

Use this file for the folder-level boundary rules:

```txt
guidelines/reference/reference-boundaries.md
```

Preferred guidelines must follow the full GenAI template.

Non-preferred guidelines must at least have a clear generation boundary when they are likely to influence generated output.

Architecture background files explain concepts and must not override runtime rules.
