# Component Guideline Template

## Purpose

Use this template for GenAI-ready component and pattern guidelines.

A guideline is not valid for `v0.5.1` if a generative AI cannot use it to choose, configure and reject a component without guessing.

This template applies to:

- `guidelines/components/`
- `guidelines/decision/`
- `guidelines/patterns/`
- `guidelines/forms/`

Domain model files may use a lighter variant, but they must still define controlled vocabulary and generation boundaries when a model influences generated UI.

---

## Required structure

Every GenAI-ready guideline should contain these sections:

```txt
Purpose
Use this component when
Do not use this component when
Prefer this component over
Never generate
Required props
Controlled values
GenAI generation rules
Common generation failures
Repair prompt
Related stories
Related contracts
```

Add these sections when relevant:

```txt
Evidence and trust rules
Actionability rules
Accessibility rules
Business intent
Domain model alignment
```

---

## Section contract

### Purpose section

Explain the role of the component in one or two sentences.

The purpose must say what decision, task or perception the component supports.

### Use section

List the conditions that make this component the right choice.

Use direct instructions:

```txt
Use this component when the screen needs...
Use this component when the user must compare...
Use this component when evidence must remain visible...
```

### Do not use section

List conditions that should make the AI choose something else.

Use direct instructions:

```txt
Do not use this component when...
Do not use this component for...
```

### Preference section

Name competing components or patterns.

Example:

```txt
Prefer ActionRow over ActionCard for dense repeated action lists.
```

### Never generate section

List hard blockers.

Example:

```txt
Never generate this component without owner, due date and priority.
```

### Required props section

List the props that are mandatory or generation-critical.

Do not list every React prop.

### Controlled values section

List only values accepted by TypeScript and `contracts/props.contract.json`.

Do not invent future values.

### GenAI generation rules section

Explain how Make or another generative AI should compose the component.

Rules should be imperative and testable.

### Common generation failures section

List predictable mistakes.

Use this format:

```txt
Failure: The generated screen...
Why it fails: ...
Fix: ...
```

### Repair prompt section

Link to a repair prompt when one exists.

Use:

```txt
guidelines/repair-prompts/name.md
```

If no repair prompt exists yet, write:

```txt
No dedicated repair prompt yet. Use review/repair-routing.md.
```

### Related stories section

List Storybook proof.

Use:

```txt
src/design-system/stories/file.stories.tsx
Story title: ...
```

### Related contracts section

List machine-readable contracts that must match this guideline.

Use:

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```

---

## Quality bar

A guideline fails the v0.5.1 standard if it:

- describes the component visually but not generatively
- omits when not to use the component
- omits required props for action, trust, evidence or readiness
- documents prop values that do not exist in TypeScript
- promises a usage not demonstrated in Storybook
- contradicts a contract file
- allows local visual substitutes
- lets AI infer proof, validation, source strength or ownership from vague text
