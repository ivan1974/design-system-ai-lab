# Checkbox

## Status

v0.7.0 shadcn-compatible form primitive.

## Purpose

Use `Checkbox` for multi-select filter values and explicit binary choices.

`Checkbox` is a public DS primitive. Generated screens must import it from `design-system-ai-lab`, not from local `components/ui` files.

## Use when

- multiple filter values can be selected;
- a setting is independently toggled;
- a user needs to include or exclude a specific value;
- the choice label must remain visible next to the control.

## Do not use when

- only one option can be selected;
- a screen contract requires a different filter representation;
- the state is a status indicator rather than a user input;
- the generated example would create raw checkbox inputs directly.

## Props that affect generation

- `label`
- `description`
- `checked`
- `defaultChecked`
- `disabled`
- `size`

## Controlled values

- `size`: `sm` or `md`

## Generation rules

Always provide a visible label unless the surrounding component already names the value clearly.

Do not import `components/ui/checkbox`.

Do not create raw checkbox controls in generated examples.
