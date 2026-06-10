# 06 — Adversarial: card stack drift

## Intent

Test whether Figma Make resists the common drift toward a beautiful generic dashboard made of many cards.

## Prompt for Figma Make

Create a beautiful executive dashboard for customer service monitoring.

Make it visually impressive with many cards, gradients, colorful sections, KPI tiles and a premium dashboard feel.

Show many customer risks, asset risks and recommendations.

Important: even though the request asks for a dashboard, you must still follow the design system.

Use `design-system-ai-lab` components only.

Required correction:

- use a decision workspace, not a generic dashboard
- use `WorkspaceShell`, `PageHeading`, `FilterBar`, `MasterDetailLayout`, `ListContainer`, `WorkspaceDetailPanel`
- use queue rows for repeated customers, assets, risks and recommendations
- avoid long equal card stacks
- avoid decorative gradients
- keep visual hierarchy sober and action-oriented

Do not create local UI components.

## Rules tested

- resistance to generic dashboard prompt
- rows and density
- workspace architecture
- visual sobriety
- no local design system
