import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const forbiddenTerms = [
  "EcoCare",
  "Schneider",
  "Schneider Electric",
  "EcoStruxure",
  "mySchneider",
];

const scannedExtensions = new Set([
  ".md",
  ".mdx",
  ".ts",
  ".tsx",
  ".json",
]);

const ignoredDirectories = new Set([
  ".git",
  "node_modules",
  "dist",
  "storybook-static",
]);

const ignoredFiles = new Set([
  "tests/generation-rules/anonymization.test.ts",
]);

function collectFiles(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(rootDir, absolutePath);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...collectFiles(absolutePath));
      }
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (ignoredFiles.has(relativePath)) {
      continue;
    }

    if (scannedExtensions.has(path.extname(entry.name))) {
      files.push(relativePath);
    }
  }

  return files;
}

describe("generation rules: anonymization", () => {
  it("does not expose proprietary company or product references", () => {
    const matches: string[] = [];

    for (const relativePath of collectFiles(rootDir)) {
      const content = fs.readFileSync(path.join(rootDir, relativePath), "utf-8");

      for (const term of forbiddenTerms) {
        if (content.includes(term)) {
          matches.push(`${relativePath}: ${term}`);
        }
      }
    }

    expect(matches).toEqual([]);
  });
});
