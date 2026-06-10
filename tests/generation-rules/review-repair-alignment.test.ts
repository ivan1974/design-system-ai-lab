import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const reviewDocs = [
  "guidelines/review/blocking-checklist.md",
  "guidelines/review/workspace-v2-checklist.md",
  "guidelines/review/quality-checklist.md",
];

const repairPrompts = [
  "ai-confidence-as-source-strength.md",
  "actions-without-ownership.md",
  "card-saturation.md",
  "expected-outcomes-as-proven-value.md",
  "generic-dashboard.md",
  "invalid-props-or-local-visual-components.md",
  "missing-detail-panel.md",
  "missing-evidence.md",
  "missing-human-validation.md",
  "missing-list-container.md",
  "no-inline-styled-inputs.md",
  "no-local-components.md",
  "overdecorated-surface.md",
  "partial-visibility-overstated.md",
  "poor-row-density.md",
  "raw-form-controls.md",
  "repair-router.md",
  "too-many-metrics.md",
  "weak-layout.md",
  "weak-typography-hierarchy.md",
];

function read(relativePath: string) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
}

describe("generation rules: review and repair alignment", () => {
  it.each(reviewDocs)("%s exists", (relativePath) => {
    expect(fs.existsSync(path.join(rootDir, relativePath))).toBe(true);
  });

  it.each(repairPrompts)("repair prompt %s exists", (fileName) => {
    expect(fs.existsSync(path.join(rootDir, "guidelines/repair-prompts", fileName))).toBe(true);
  });

  it("blocking checklist routes through the repair router", () => {
    const content = read("guidelines/review/blocking-checklist.md");

    expect(content).toContain("guidelines/repair-prompts/repair-router.md");
    expect(content).toContain("blocking = reject and repair before accepting first draft");
    expect(content).toContain("quality = valid draft, improve if needed");
    expect(content).toContain("acceptance = final confirmation before handoff");
  });

  it("repair router mentions every repair prompt in scope", () => {
    const content = read("guidelines/repair-prompts/repair-router.md");

    for (const fileName of repairPrompts.filter((fileName) => fileName !== "repair-router.md")) {
      expect(content).toContain(fileName);
    }
  });

  it("review docs route to actual repair prompt files", () => {
    const knownRepairPrompts = new Set(repairPrompts);
    const routePattern = /repair-prompts\/([a-z0-9-]+\.md)/g;

    for (const doc of reviewDocs) {
      const content = read(doc);
      const matches = [...content.matchAll(routePattern)].map((match) => match[1]);

      expect(matches.length).toBeGreaterThan(0);

      for (const fileName of matches) {
        expect(knownRepairPrompts.has(fileName)).toBe(true);
      }
    }
  });
});
