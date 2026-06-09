import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

describe("generation rules: no inline styled inputs", () => {
  it.each(targets)("$path does not use inline style objects", (target) => {
    expectNoForbiddenPattern(
      target,
      /style=\{\{/,
      "Do not use inline style objects. Use package components and design-system-ai-lab/styles.css.",
    );
  });

  it.each(targets)("$path does not use inline-styled raw input controls", (target) => {
    expectNoForbiddenPattern(
      target,
      /<(input|select|textarea)\b[^>]*style=\{\{/i,
      "Do not use inline-styled raw form controls. Use Field, Input, Select and Textarea from design-system-ai-lab.",
    );
  });
});
