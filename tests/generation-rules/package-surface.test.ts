import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, "package.json"), "utf-8")) as {
  files: string[];
};

const requiredPackageFiles = [
  "dist",
  "README.md",
  "CHANGELOG.md",
  "contracts",
  "benchmarks/figma-make",
  "guidelines/Guidelines.md",
  "guidelines/setup.md",
  "guidelines/tokens.md",
  "guidelines/styles.md",
  "guidelines/runtime",
  "guidelines/reference",
  "guidelines/evaluation",
  "guidelines/source",
];

const forbiddenPackageFiles = [
  "guidelines/make-minimal-contract.md",
  "guidelines/migration",
  "guidelines/handoff",
  "guidelines/templates",
  "guidelines/prompts",
  "guidelines/knowledge",
  "guidelines/principles",
  "guidelines/review",
  "guidelines/repair-prompts",
  "guidelines/screen-architecture",
  "docs",
  "docs/archive",
  "docs/audit",
];

describe("generation rules: published package surface", () => {
  it("publishes the v0.6.0 Make Kit surface", () => {
    expect(packageJson.files).toEqual(requiredPackageFiles);
  });

  it("does not publish legacy or historical guidance paths", () => {
    for (const forbiddenPath of forbiddenPackageFiles) {
      expect(packageJson.files).not.toContain(forbiddenPath);
    }
  });

  it("keeps source available but clearly outside default runtime", () => {
    expect(packageJson.files).toContain("guidelines/source");
    expect(packageJson.files).toContain("guidelines/runtime");
    expect(packageJson.files.indexOf("guidelines/runtime")).toBeLessThan(packageJson.files.indexOf("guidelines/source"));
  });
});
