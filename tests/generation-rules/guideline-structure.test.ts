import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const genAiReadyGuidelines = [
  "guidelines/screen-architecture/workspace-shell.md",
  "guidelines/components/badge.md",
  "guidelines/components/breadcrumbs.md",
  "guidelines/components/button.md",
  "guidelines/components/card.md",
  "guidelines/components/compact-metric.md",
  "guidelines/components/dialog.md",
  "guidelines/components/divider.md",
  "guidelines/components/document-row.md",
  "guidelines/components/header-tabs.md",
  "guidelines/components/key-value-list.md",
  "guidelines/components/list-container.md",
  "guidelines/components/metric-card.md",
  "guidelines/components/metric-strip.md",
  "guidelines/components/page-heading.md",
  "guidelines/components/page-header.md",
  "guidelines/components/panel-primitives.md",
  "guidelines/components/secondary-navigation.md",
  "guidelines/components/segmented-control.md",
  "guidelines/components/surface.md",
  "guidelines/components/tabs.md",
  "guidelines/components/toolbar.md",
  "guidelines/components/typography.md",
  "guidelines/components/well.md",
  "guidelines/forms/field.md",
  "guidelines/forms/input.md",
  "guidelines/forms/label.md",
  "guidelines/forms/select.md",
  "guidelines/forms/textarea.md",
  "guidelines/screen-architecture/filter-bar.md",
  "guidelines/screen-architecture/master-detail-layout.md",
  "guidelines/screen-architecture/workspace-detail-panel.md",
  "guidelines/decision/action-card.md",
  "guidelines/decision/action-list.md",
  "guidelines/decision/action-row.md",
  "guidelines/decision/alert-card.md",
  "guidelines/decision/evidence-row.md",
  "guidelines/decision/metric-grid.md",
  "guidelines/decision/priority-list.md",
  "guidelines/decision/priority-pill.md",
  "guidelines/decision/recommendation-card.md",
  "guidelines/decision/review-queue-row.md",
  "guidelines/decision/section-header.md",
  "guidelines/decision/semantic-tag.md",
  "guidelines/decision/signal-row.md",
  "guidelines/decision/source-strength-pill.md",
  "guidelines/decision/status-pill.md",
  "guidelines/decision/status-summary.md",
  "guidelines/patterns/asset-intelligence-summary.md",
  "guidelines/patterns/component-hierarchy.md",
  "guidelines/patterns/connectivity-coverage-card.md",
  "guidelines/patterns/create-action-dialog.md",
  "guidelines/patterns/customer-review-readiness-card.md",
  "guidelines/patterns/customer-status-card.md",
  "guidelines/patterns/queue-row-patterns.md",
  "guidelines/patterns/recommendation-review-panel.md",
  "guidelines/patterns/value-proof-card.md",
  "guidelines/patterns/renewal-risk-summary.md",
  "guidelines/patterns/service-risk-summary.md",
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
