# Phase 3 Reclassification Plan

## Purpose

This document tracks the v0.6.0 documentation reclassification before and after file moves.

The goal is to remove ambiguity between runtime guidance, reference guidance, source material and evaluation material.

---

## Target classification

```txt
guidelines/source/knowledge/
guidelines/source/principles/
guidelines/source/domain-models/
guidelines/source/visual-brand/

guidelines/reference/components/
guidelines/reference/composition/
guidelines/reference/decision/
guidelines/reference/forms/
guidelines/reference/patterns/
guidelines/reference/screen-architecture/

guidelines/evaluation/review/
guidelines/evaluation/repair/
guidelines/evaluation/benchmarks/
```

---

## Move rules

1. Move files, do not duplicate them.
2. Keep long source files out of the default Figma Make read path.
3. Keep runtime files short and active.
4. Keep historical audit files out of active contracts.
5. Update references after moving files.
6. Verify that old paths no longer remain as active guidance.

---

## Source moves

| Current path | Target path | Status |
|---|---|---|
| `guidelines/knowledge/` | `guidelines/source/knowledge/` | Planned |
| `guidelines/principles/` | `guidelines/source/principles/` | Planned |
| `guidelines/domain-models/` | `guidelines/source/domain-models/` | Planned |
| `guidelines/visual-brand.md` | `guidelines/source/visual-brand/visual-brand-v0.4.md` | Done |

---

## Reference moves

| Current path | Target path | Status |
|---|---|---|
| `guidelines/components/` | `guidelines/reference/components/` | Planned |
| `guidelines/decision/` | `guidelines/reference/decision/` | Planned |
| `guidelines/forms/` | `guidelines/reference/forms/` | Planned |
| `guidelines/patterns/` | `guidelines/reference/patterns/` | Planned |
| `guidelines/screen-architecture/` | `guidelines/reference/screen-architecture/` | Planned |

---

## Evaluation moves

| Current path | Target path | Status |
|---|---|---|
| `guidelines/review/` | `guidelines/evaluation/review/` | Planned |
| `guidelines/repair-prompts/` | `guidelines/evaluation/repair/` | Planned |
| `benchmarks/figma-make/` | `guidelines/evaluation/benchmarks/` as lightweight mirror only | Planned |

---

## Audit moves

| Current path | Target path | Status |
|---|---|---|
| `docs/audit/v0.5.1-*` | `docs/archive/v0.5.1-hardening/` | Planned |

---

## Verification checklist

After moves, verify:

```txt
No root visual-brand.md exists.
No default read path points to knowledge/, principles/ or domain-models/.
No active runtime file points to old screen-architecture/ path.
No active runtime file points to review/ or repair-prompts/ old paths.
No active contract references docs/audit/v0.5.1-* as source guidance.
README and package files are updated in later phases.
```
