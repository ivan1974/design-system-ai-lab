# SidePanel

## Status

v0.7.0 target composition.

## Purpose

Use `SidePanel` for strict right-side operational panels that need overlay close behavior, Escape close behavior, scroll lock and a sticky footer.

`SidePanel` reuses the existing panel primitives. Do not create local drawer, sheet or overlay components.

## Use when

- an operational detail opens without leaving the current screen;
- a filters panel or analysis panel must preserve the background context;
- the panel needs independent scrolling;
- actions must remain visible at the bottom.

## Props that affect generation

- `open`
- `onClose`
- `title`
- `description`
- `footer`
- `width="analysis"`
- `closeOnOverlay`
- `closeOnEscape`
- `lockBackgroundScroll`

## Required behavior

- overlay click closes when enabled;
- Escape closes when enabled;
- close icon closes;
- background scroll is locked when enabled;
- panel content scrolls independently;
- footer remains visible when present;
- width uses 30vw with 360px minimum and 500px maximum.

## Do not

- create a local drawer component;
- create a local overlay component;
- use raw fixed panels in generated examples;
- replace `SidePanel` with generic cards;
- add unsupported width presets.
