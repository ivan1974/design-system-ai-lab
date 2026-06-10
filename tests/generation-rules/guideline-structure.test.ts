import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const genAiReadyGuidelines = [
  "guidelines/screen-architecture/workspace-shell.md",
  "guidelines/components/page-heading.md",
  "guidelines/screen-architecture/filter-bar.md",
  "guidelines/screen-architecture/master-detail-layout.md",
  "guidelines/screen-architecture/workspace-detail-panel.md",
  "guidelines/components/list-container.md",
  "guidelines/decision/review-queue-row.md",
  "guidelines/decision/action-row.md",
  "guidelines/decision/alert-card.md",
  "guidelines/decision/evidence-row.md",
  "guidelines/decision/recommendation-card.md",
  "guidelines/decision/source-strength-pill.md",
  "guidelines/patterns/asset-intelligence-summary.md",
  "guidelines/patterns/recommendation-review-panel.md",
  "guidelines/patterns/value-proof-card.md",
  "guidelines/patterns/renewal-risk-summary.md",
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
