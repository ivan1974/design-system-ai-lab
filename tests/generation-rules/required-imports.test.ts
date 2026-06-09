import { describe, it } from "vitest";
import {
  expectRequiredPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

describe("generation rules: required imports", () => {
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

  it.each(targets)("$path renders a PageHeader", (target) => {
    expectRequiredPattern(
      target,
      /<PageHeader\b/,
      "Expected the generated screen to render PageHeader.",
    );
  });
});
