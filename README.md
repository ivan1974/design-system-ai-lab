# Design System AI Lab

Design System AI Lab is being rebooted as a GenAI-ready React/Vite design system and Figma Make kit.

The goal is not to restrict GenAI to component assembly.

The goal is to help GenAI generate better product screens by using the design system’s components, patterns, principles, domain knowledge and guardrails.

## Current branch

```txt
reboot/from-figma-make
```

This branch rebuilds the project from the Figma Make Installed Base Intelligence prototype.

The previous repository state is preserved in:

```txt
legacy/pre-reboot-main
```

## Product reference

The first reboot target is:

```txt
Installed Base Intelligence
```

The prototype defines the first product reference for:

```txt
Main Navigation
Page Header
View & Filter Bar
Installed Base List
Asset Detail Panel
```

These layers are the starting reference for the first release. They are not intended to make every future screen follow the same structure.

## Design system philosophy

This project treats the design system as more than a component library.

```txt
components = reliable interface material
patterns = reusable composition structures
principles = design judgment
knowledge = domain, user and product context
contracts = guardrails against critical generation failures
```

GenAI should prefer approved components and patterns, but it should also apply the design system’s principles and domain knowledge to make better design decisions.

Contracts are guardrails. They should prevent critical failures such as invented evidence, fake sources, local design system clones, misleading value claims or broken domain values.

They are not meant to turn the system into a rigid screen generator.

## Current roadmap

See:

```txt
docs/reboot/roadmap.md
```

## Reboot sequence

```txt
1. Preserve the legacy repository state
2. Clean the reboot branch
3. Import the Figma Make prototype
4. Run the prototype exactly as-is
5. Extract the minimal design system
6. Document patterns, principles and knowledge
7. Add guardrail contracts
8. Connect the Make kit
9. Extend toward additional product screens
```

## Status

```txt
Reboot in progress.
Not production-ready.
Do not use as a stable package yet.
```
