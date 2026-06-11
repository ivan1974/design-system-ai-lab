# Installed Base Intelligence scorecard

## Run metadata

- Prompt:
- Output file:
- Evaluator:
- Date:
- Generation tool/version:

## Automated checks

```txt
GENERATED_APP_PATH=benchmarks/figma-make/outputs/output-file.tsx npm run test:generation
```

- Test result: Pass / Fail
- Blocking failures:

## Score

Architecture compliance:

- Maximum: 15
- Score:
- Notes:

Navigation and header compliance:

- Maximum: 10
- Score:
- Notes:

Filter compliance:

- Maximum: 10
- Score:
- Notes:

Installed base list/table compliance:

- Maximum: 20
- Score:
- Notes:

Asset state compliance:

- Maximum: 15
- Score:
- Notes:

Detail panel compliance:

- Maximum: 15
- Score:
- Notes:

Progressive decision disclosure:

- Maximum: 10
- Score:
- Notes:

Visual density and DS compliance:

- Maximum: 5
- Score:
- Notes:

Total:

- Maximum: 100
- Score:
- Notes:

## Blocking failures

Reject regardless of score when any blocker is present:

- local components or local design-system primitives are created;
- public package imports are bypassed;
- primary layers are not exactly Main Navigation, Page Header, View & Filter Bar, Installed Base List and Asset Detail Panel;
- Installed Base List does not have exactly seven columns;
- Asset Detail Panel does not have exactly six tabs;
- third-party asset rule is violated;
- Health and Intelligence are mixed or duplicated;
- sticky action area does not contain exactly Schedule Service, Download Report and Contact Expert;
- the screen becomes a generic dashboard or card stack.

## Status

Choose one:

- Excellent / accepted
- Valid first draft / accepted with minor improvements
- Needs repair
- Rejected

## Repair notes

List concrete fixes and route through `guidelines/evaluation/repair/repair-router.md`.

- Repair note 1:
- Repair note 2:
- Repair note 3:

## Decision

- Accept as benchmark pass: Yes / No
- Add to golden examples: Yes / No
