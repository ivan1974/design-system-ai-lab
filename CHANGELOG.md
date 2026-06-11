# Changelog

## 0.6.0-alpha.0 — GenAI Runtime Optimization

Version `0.6.0-alpha.0` prepares the project as a GenAI-first Make Kit runtime.

This release is public for experimentation and validation, but it is not production-ready.

---

## 0.6.0-alpha.0 Added

- v0.6.0 runtime operating path in `guidelines/runtime/`.
- Short Figma Make reading order in `README.md`.
- Component registry contract in `contracts/component-registry.contract.json`.
- Domain model contract in `contracts/domain-model.contract.json`.
- Visual rules contract in `contracts/visual-rules.contract.json`.
- Benchmark contract and active fixed benchmark cases in `benchmarks/figma-make/`.
- Reduced package surface test in `tests/generation-rules/package-surface.test.ts`.
- README alignment test for the v0.6.0 public package status.
- Reference boundary guidance in `guidelines/reference/README.md` and `guidelines/reference/reference-boundaries.md`.
- Storybook alignment test for active golden examples.

---

## 0.6.0-alpha.0 Changed

- Rewrote `README.md` as a v0.6.0 entry point.
- Declared the package public, active-development and not production-ready.
- Reduced the active prompt set to three reusable prompts:
  - `guidelines/prompts/customer-monitoring.md`
  - `guidelines/prompts/renewal-risk-review.md`
  - `guidelines/prompts/asset-recommendation-review.md`
- Reduced golden examples to three active first-generation fixtures:
  - `guidelines/examples/golden/customer-monitoring.App.tsx`
  - `guidelines/examples/golden/renewal-risk-review.App.tsx`
  - `guidelines/examples/golden/asset-recommendation-review.App.tsx`
- Aligned reference guidance so full component-template enforcement applies to preferred components only.
- Added boundary guidance for allowed, use-with-care, deprecated, blocked and internal reference files.
- Reduced the published package surface to runtime, reference, evaluation, source, contracts and benchmarks.

---

## 0.6.0-alpha.0 Removed

- Legacy `guidelines/make-minimal-contract.md`.
- Legacy migration notes under `guidelines/migration/`.
- Obsolete handoff guides under `guidelines/handoff/`.
- Obsolete release checklists under `docs/release/`.
- Obsolete reusable prompts:
  - `guidelines/prompts/qbr-readiness.md`
  - `guidelines/prompts/installed-base-explorer.md`
  - `guidelines/prompts/overview.md`
  - `guidelines/prompts/template.md`
  - `guidelines/prompts/workspace-v2.md`
- Obsolete golden examples:
  - `guidelines/examples/golden/qbr-readiness.App.tsx`
  - `guidelines/examples/golden/installed-base-explorer.App.tsx`
- Obsolete Storybook golden stories importing removed examples.

---

## 0.6.0-alpha.0 Known limitations

- This package is not production-ready.
- Public APIs and contracts may still change before a stable release.
- Real Figma Make validation is still required.
- Accessibility and visual regression review are not complete production gates yet.
- v0.7.0 will focus on decision progressive disclosure and component-level decision experience.

---

## 0.5.1 — GenAI Guidance Hardening

Version `0.5.1` hardens the controlled generation standard introduced in `0.5.0`.

It aligns guidelines, contracts, prompts, examples, review checklists, repair prompts and documentation tests so generated screens can be reviewed against the same rules the package contracts enforce.

---

## 0.5.1 Added

- GenAI-ready component guideline template in `guidelines/templates/component-guideline-template.md`.
- Expanded guidelines for priority components, screen architecture, forms, decision components and business patterns.
- Reusable installed base prompt in `guidelines/prompts/installed-base-explorer.md`.
- Repair router in `guidelines/evaluation/repair/repair-router.md`.
- v0.5.1 review loop across blocking, workspace and quality checklists.
- Documentation drift tests for contracts, exports, guidelines, prompts and repair routes.
- Migration note in `guidelines/migration/v0.5.0-to-v0.5.1.md`.
- Release checklist in `docs/release/v0.5.1-release-hardening-checklist.md`.

---

## 0.5.1 Changed

- Aligned controlled values across domain models, props contract and guidelines.
- Updated golden examples to use canonical readiness, validation, proof and source strength values.
- Aligned reusable prompts with fixed benchmark cases.
- Clarified blocking, quality and acceptance review levels.
- Mapped common generation failures to actual repair prompts.

---

## 0.5.1 Fixed

- Reduced documentation drift around legacy components and generic dashboard generation.
- Tightened tests so preferred components require guidelines.
- Improved repair coverage for local components, card saturation, weak layout, evidence gaps, human validation, action ownership, raw form controls and metric overload.

---

## 0.5.1 Migration notes

Runtime React migration is not expected for consuming apps.

---

## 0.5.0 — Controlled Generation Standard

Version `0.5.0` turns the project into a controlled generation standard for Figma Make.

It adds machine-readable rules, stricter critical props, tested golden examples, benchmark cases, scoring and repair routing.

---

## 0.5.0 Added

- Machine-readable generation contracts in `contracts/`.
- Shared critical TypeScript types for trust, evidence, decision and action dimensions.
- Stricter critical component props for actionability, evidence, source strength, validation and proof readiness.
- Tested golden examples in `guidelines/examples/golden/`.
- Generation rule tests for package imports, local design-system recreation, workspace structure, rows and density, evidence and trust, actionability and golden example coverage.
- Figma Make benchmark cases in `benchmarks/figma-make/cases/`.
- Figma Make scoring model in `benchmarks/figma-make/scoring/`.
- Review loop documentation in `guidelines/evaluation/review/review-loop.md`.
- Repair routing matrix in `guidelines/evaluation/review/repair-routing.md`.
- New repair prompts for unsupported evidence, weak action ownership, expected outcomes presented as proven value, AI confidence used as source strength, partial visibility overstated and missing human validation.
- Make Minimal Contract in `guidelines/make-minimal-contract.md`.
- Migration guide in `guidelines/migration/v0.4-to-v0.5.md`.
- Release checklist in `docs/release/v0.5.0-release-checklist.md`.

---

## 0.5.0 Changed

- `Guidelines.md` now points to `make-minimal-contract.md` as the first blocking contract to read before full generation guidance.
- `README.md` now positions v0.5.0 as the main release milestone.
- Golden examples are now compliance fixtures, not only inspirational examples.
- The review model now follows a controlled loop: prompt, generation, blocking review, score, repair, revised generation and final decision.
- Package metadata now targets version `0.5.0`.
- Markdown linting now covers release and benchmark documentation.

---

## 0.5.0 Fixed

- Package import checks now validate the current `PageHeading` / workspace structure expectations.
- Evidence and trust checks avoid false positives on customer-ready proof gap language.
- Source strength values were aligned with the shared `SourceStrength` type.
- Critical action components now require owner, due date and priority.
- `AlertCard` now requires a recommendation.

---

## 0.5.0 Deprecated

- Free-text statuses for trust-critical fields.
- Free-text source strength values.
- Free-text proof readiness values.
- AI confidence as a replacement for source strength.
- Expected savings or expected outcomes presented as proven value.
- Local component wrappers that duplicate package components.
- Generic card-stack layouts for decision workspaces.

---

## 0.5.0 Migration notes

Main migration tasks:

- Use `guidelines/make-minimal-contract.md` before full generation guidance.
- Use `contracts/` for machine-readable generation rules.
- Replace free-text statuses with documented controlled values.
- Ensure action components include owner, due date and priority.
- Ensure sensitive recommendations, proof and asset intelligence expose source, proof readiness, validation and human review when needed.
- Validate generated screens with `npm run test:generation`.
- Use the Figma Make benchmark process for real Make validation.
