import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const genAiReadyGuidelines = [
  "guidelines/reference/screen-architecture/workspace-shell.md",
  "guidelines/reference/components/badge.md",
  "guidelines/reference/components/breadcrumbs.md",
  "guidelines/reference/components/button.md",
  "guidelines/reference/components/card.md",
  "guidelines/reference/components/compact-metric.md",
  "guidelines/reference/components/dialog.md",
  "guidelines/reference/components/divider.md",
  "guidelines/reference/components/document-row.md",
  "guidelines/reference/components/header-tabs.md",
  "guidelines/reference/components/key-value-list.md",
  "guidelines/reference/components/list-container.md",
  "guidelines/reference/components/metric-card.md",
  "guidelines/reference/components/metric-strip.md",
  "guidelines/reference/components/page-heading.md",
  "guidelines/reference/components/page-header.md",
  "guidelines/reference/components/panel-primitives.md",
  "guidelines/reference/components/secondary-navigation.md",
  "guidelines/reference/components/segmented-control.md",
  "guidelines/reference/components/surface.md",
  "guidelines/reference/components/tabs.md",
  "guidelines/reference/components/toolbar.md",
  "guidelines/reference/components/typography.md",
  "guidelines/reference/components/well.md",
  "guidelines/reference/forms/field.md",
  "guidelines/reference/forms/input.md",
  "guidelines/reference/forms/label.md",
  "guidelines/reference/forms/select.md",
  "guidelines/reference/forms/textarea.md",
  "guidelines/reference/screen-architecture/filter-bar.md",
  "guidelines/reference/screen-architecture/master-detail-layout.md",
  "guidelines/reference/screen-architecture/workspace-detail-panel.md",
  "guidelines/reference/decision/action-card.md",
  "guidelines/reference/decision/action-list.md",
  "guidelines/reference/decision/action-row.md",
  "guidelines/reference/decision/alert-card.md",
  "guidelines/reference/decision/evidence-row.md",
  "guidelines/reference/decision/metric-grid.md",
  "guidelines/reference/decision/priority-list.md",
  "guidelines/reference/decision/priority-pill.md",
  "guidelines/reference/decision/recommendation-card.md",
  "guidelines/reference/decision/review-queue-row.md",
  "guidelines/reference/decision/section-header.md",
  "guidelines/reference/decision/semantic-tag.md",
  "guidelines/reference/decision/signal-row.md",
  "guidelines/reference/decision/source-strength-pill.md",
  "guidelines/reference/decision/status-pill.md",
  "guidelines/reference/decision/status-summary.md",
  "guidelines/reference/patterns/asset-intelligence-summary.md",
  "guidelines/reference/patterns/component-hierarchy.md",
  "guidelines/reference/patterns/connectivity-coverage-card.md",
  "guidelines/reference/patterns/create-action-dialog.md",
  "guidelines/reference/patterns/customer-review-readiness-card.md",
  "guidelines/reference/patterns/customer-status-card.md",
  "guidelines/reference/patterns/queue-row-patterns.md",
  "guidelines/reference/patterns/recommendation-review-panel.md",
  "guidelines/reference/patterns/value-proof-card.md",
  "guidelines/reference/patterns/renewal-risk-summary.md",
  "guidelines/reference/patterns/service-risk-summary.md",
];

const requiredSections = [
  "## Purpose",
  "## Use this component when",
  "## Do not use this component when",
  "## Prefer this component over",
  "## Never generate",
  "## Required props",
  "## Controlled values",
  "## GenAI generation rules",
  "## Common generation failures",
  "## Repair prompt",
  "## Related stories",
  "## Related contracts",
];

describe("generation rules: GenAI-ready guideline structure", () => {
  it.each(genAiReadyGuidelines)("%s exists", (relativePath) => {
    expect(fs.existsSync(path.join(rootDir, relativePath))).toBe(true);
  });

  it.each(genAiReadyGuidelines)("%s uses the required GenAI sections", (relativePath) => {
    const source = fs.readFileSync(path.join(rootDir, relativePath), "utf-8");

    for (const section of requiredSections) {
      expect(source).toContain(section);
    }
  });
});
