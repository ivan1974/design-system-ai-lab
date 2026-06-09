import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

describe("generation rules: no internal imports", () => {
  it.each(targets)("$path does not import from dist", (target) => {
    expectNoForbiddenPattern(
      target,
      /from\s+["']design-system-ai-lab\/dist\//,
      "Do not import from design-system-ai-lab/dist/. Use the package root instead.",
    );
  });

  it.each(targets)("$path does not import from src", (target) => {
    expectNoForbiddenPattern(
      target,
      /from\s+["']design-system-ai-lab\/src\//,
      "Do not import from design-system-ai-lab/src/. Use the package root instead.",
    );
  });
});
