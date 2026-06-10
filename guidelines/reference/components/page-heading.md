# PageHeading Guidelines

Status: preferred

## Purpose

`PageHeading` states the primary screen intent and decision context.

It should help the user understand what the screen is for before reading any detail.

## Use this component when

- A generated screen needs a clear title, subtitle or page-level action.
- The screen supports a customer, asset, renewal, service or recommendation decision.
- The old `PageHeader` would otherwise be used.

## Do not use this component when

- The heading is only a section title.
- A compact section title should use `SectionHeader` or `SectionHeading`.
- Legacy code already requires `PageHeader`.

## Prefer this component over

- `PageHeader` for new GenAI output.
- Local header, hero, title bar or page title components.

## Never generate

- Marketing hero copy.
- Decorative subtitle text without decision value.
- Multiple page-level headings in one screen.

## Required props

Provide a clear title.

Use subtitle or metadata only when it clarifies scope, decision or review state.

## Controlled values

No controlled values beyond the public component API.

## GenAI generation rules

- Put the decision intent in the title or subtitle.
- Keep wording operational and specific.
- Pair with `FilterBar` when scope controls affect the decision.
- Do not use this component for every section.

## Common generation failures

- Generic titles such as “Dashboard”.
- Decorative marketing language.
- Reusing `PageHeader` in new output.
- Hiding the user decision in body copy.

## Repair prompt

Use `guidelines/evaluation/repair/weak-typography-hierarchy.md` when page hierarchy is weak.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#PageHeading
contracts/components.contract.json
```
