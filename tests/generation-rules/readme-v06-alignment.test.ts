import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const readme = fs.readFileSync(path.join(rootDir, "README.md"), "utf-8");

const requiredSnippets = [
  "Active development.",
  "v0.7.0-alpha.0.",
  "Not production-ready.",
  "Do not use this package as a finished production design system.",
  "v0.6.0 built the GenAI operating system.",
  "v0.7.0-alpha.0 adds Installed Base Intelligence as a closed screen contract.",
  "guidelines/runtime/generation-contract.md",
  "guidelines/reference/screen-contracts/installed-base-intelligence.md",
  "contracts/screen-contracts/installed-base-intelligence.contract.json",
  "12-installed-base-intelligence-closed-spec.md",
  "17-adversarial-installed-base-extra-actions-filters-tabs.md",
  "guidelines/evaluation/repair/repair-router.md",
  "installed-base-intelligence.App.tsx",
  "npm pack --dry-run",
  "npm publish --tag next",
];

const forbiddenSnippets = [
  "What is new in v0.5.0",
  "What changed from v0.4 to v0.5",
  "What v0.5.1 hardens",
  "guidelines/make-minimal-contract.md",
  "guidelines/migration/v0.4-to-v0.5.md",
  "docs/release/v0.5.0-release-checklist.md",
  "01-customer-monitoring.App.tsx",
  "design-system-ai-lab-0.5.0.tgz",
];

describe("generation rules: README v0.7.0 alpha alignment", () => {
  it("states that the public package is a non-production v0.7 alpha", () => {
    for (const snippet of requiredSnippets) {
      expect(readme).toContain(snippet);
    }
  });

  it("does not route readers to obsolete v0.5.x guidance", () => {
    for (const snippet of forbiddenSnippets) {
      expect(readme).not.toContain(snippet);
    }
  });
});
