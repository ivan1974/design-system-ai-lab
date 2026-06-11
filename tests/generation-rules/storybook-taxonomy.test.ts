import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const storiesDir = path.join(rootDir, "src/design-system/stories");

const allowedRoots = [
  "AI / Make",
  "Applications",
  "Components",
  "Composition",
  "Decision",
  "Forms",
  "Foundations",
  "Golden Examples",
  "Patterns",
  "Screen Architecture",
  "Screen Contracts",
];

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.name.endsWith(".stories.tsx") ? [fullPath] : [];
  });
}

function readTitle(filePath: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  const metaStart = content.indexOf("const meta");
  const source = metaStart >= 0 ? content.slice(metaStart) : content;
  const match = source.match(/title:\s*["']([^"']+)["']/);
  return match?.[1] ?? null;
}

describe("generation rules: Storybook taxonomy", () => {
  it("does not use the legacy Design System root", () => {
    for (const filePath of walk(storiesDir)) {
      const title = readTitle(filePath);
      if (!title) continue;
      expect(title, path.relative(rootDir, filePath)).not.toMatch(/^Design System\//);
    }
  });

  it("uses one approved top-level taxonomy root", () => {
    for (const filePath of walk(storiesDir)) {
      const title = readTitle(filePath);
      if (!title) continue;
      const root = title.split("/")[0];
      expect(allowedRoots, `${title} in ${path.relative(rootDir, filePath)}`).toContain(root);
    }
  });

  it("keeps folder and title roots aligned for core DS story folders", () => {
    const folderToRoot: Record<string, string> = {
      components: "Components",
      composition: "Composition",
      decision: "Decision",
      forms: "Forms",
      foundations: "Foundations",
      patterns: "Patterns",
      "screen-architecture": "Screen Architecture",
      "screen-contracts": "Screen Contracts",
    };

    for (const filePath of walk(storiesDir)) {
      const relativePath = path.relative(storiesDir, filePath);
      const folder = relativePath.split(path.sep)[0];
      const expectedRoot = folderToRoot[folder];
      const title = readTitle(filePath);
      if (!expectedRoot || !title) continue;
      expect(title, relativePath).toMatch(new RegExp(`^${expectedRoot}/`));
    }
  });
});
