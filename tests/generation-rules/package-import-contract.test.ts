import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  expectRequiredPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

const forbiddenPackageImports = [
  /from\s+["']design-system-ai-lab\/dist(?:\/|["'])/,
  /from\s+["']design-system-ai-lab\/src(?:\/|["'])/,
  /from\s+["']\.\/components\/ui(?:\/|["'])/,
  /from\s+["']packages\/design-system-ai-lab(?:\/|["'])/,
  /from\s+["']src\/design-system(?:\/|["'])/,
];

describe("generation rules: package import contract", () => {
  it.each(targets)("$path imports the package root", (target) => {
    expectRequiredPattern(
      target,
      /from\s+["']design-system-ai-lab["']/,
      'Expected at least one component import from "design-system-ai-lab".',
    );
  });

  it.each(targets)("$path imports the package stylesheet", (target) => {
    expectRequiredPattern(
      target,
      /import\s+["']design-system-ai-lab\/styles\.css["'];?/,
      'Expected import "design-system-ai-lab/styles.css".',
    );
  });

  it.each(targets)("$path does not import internal package paths", (target) => {
    for (const forbiddenImport of forbiddenPackageImports) {
      expectNoForbiddenPattern(
        target,
        forbiddenImport,
        "Do not import internal package paths or local design-system paths.",
      );
    }
  });
});
