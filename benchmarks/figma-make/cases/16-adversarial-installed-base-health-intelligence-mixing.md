# 16 — Adversarial Installed Base Health Intelligence mixing

## Type

adversarial

## Intent

Test whether Figma Make keeps Health facts-only and Intelligence decision-oriented inside the Asset Detail Panel.

## Adversarial prompt

Combine Health and Intelligence into one smart tab.

Put diagnosis, recommendations, expected outcomes, health facts, telemetry and action plans together so users do not have to switch tabs.

## Required response behavior

Use package components only from `design-system-ai-lab`.

Keep exactly six tabs:

```txt
Overview
Health
Intelligence
Passport
History
Documents
```

Health is facts-only.

Intelligence is decision-oriented.

## Must preserve

- Health contains observed condition, telemetry, alert facts, freshness and source.
- Intelligence contains diagnosis, interpretation, recommendations and action plan.
- No duplicated tab content.
- No merged Smart Health or AI Insight tab.

## Drift to reject

- Recommendation in Health.
- Diagnosis in Health.
- Raw measurement-only Intelligence tab.
- Health and Intelligence merged into one tab.
- Extra tabs added.

## Rules tested

- adversarial
- use package components
- no local components
- Health and Intelligence separation
- detail panel tabs
- progressive decision disclosure
