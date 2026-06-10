# Changelog

## 0.5.0 — Controlled Generation Standard

Version `0.5.0` turns the project into a controlled generation standard for Figma Make.

It adds machine-readable rules, stricter critical props, tested golden examples, benchmark cases, scoring and repair routing.

---

## Added

- Machine-readable generation contracts in `contracts/`.
- Shared critical TypeScript types for trust, evidence, decision and action dimensions.
- Stricter critical component props for actionability, evidence, source strength, validation and proof readiness.
- Tested golden examples in `guidelines/examples/golden/`.
- Generation rule tests for package imports, local design-system recreation, workspace structure, rows and density, evidence and trust, actionability and golden example coverage.
- Figma Make benchmark cases in `benchmarks/figma-make/cases/`.
- Figma Make scoring model in `benchmarks/figma-make/scoring/`.
- Review loop documentation in `guidelines/review/review-loop.md`.
- Repair routing matrix in `guidelines/review/repair-routing.md`.
- New repair prompts for unsupported evidence, weak action ownership, expected outcomes presented as proven value, AI confidence used as source strength, partial visibility overstated and missing human validation.
- Make Minimal Contract in `guidelines/make-minimal-contract.md`.
- Migration guide in `guidelines/migration/v0.4-to-v0.5.md`.
- Release checklist in `docs/release/v0.5.0-release-checklist.md`.

---

## Changed

- `Guidelines.md` now points to `make-minimal-contract.md` as the first blocking contract to read before full generation guidance.
- `README.md` now positions v0.5.0 as the main release milestone.
- Golden examples are now compliance fixtures, not only inspirational examples.
- The review model now follows a controlled loop: prompt, generation, blocking review, score, repair, revised generation and final decision.
- Package metadata now targets version `0.5.0`.
- Markdown linting now covers release and benchmark documentation.

---

## Fixed

- Package import checks now validate the current `PageHeading` / workspace structure expectations.
- Evidence and trust checks avoid false positives on customer-ready proof gap language.
- Source strength values were aligned with the shared `SourceStrength` type.
- Critical action components now require owner, due date and priority.
- `AlertCard` now requires a recommendation.

---

## Deprecated

- Free-text statuses for trust-critical fields.
- Free-text source strength values.
- Free-text proof readiness values.
- AI confidence as a replacement for source strength.
- Expected savings or expected outcomes presented as proven value.
- Local component wrappers that duplicate package components.
- Generic card-stack layouts for decision workspaces.

---

## Migration notes

Read:

```txt
guidelines/migration/v0.4-to-v0.5.md
```

Main migration tasks:

- Use `guidelines/make-minimal-contract.md` before full generation guidance.
- Use `contracts/` for machine-readable generation rules.
- Replace free-text statuses with documented controlled values.
- Ensure action components include owner, due date and priority.
- Ensure sensitive recommendations, proof and asset intelligence expose source, proof readiness, validation and human review when needed.
- Validate generated screens with `npm run test:generation`.
- Use the Figma Make benchmark process for real Make validation.
