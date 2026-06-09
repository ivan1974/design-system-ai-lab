import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

const forbiddenRawFormControls = [
  {
    pattern: /<input\b/i,
    message: "Do not use raw <input>. Use Input with Field from design-system-ai-lab.",
  },
  {
    pattern: /<select\b/i,
    message: "Do not use raw <select>. Use Select with Field from design-system-ai-lab.",
  },
  {
    pattern: /<textarea\b/i,
    message: "Do not use raw <textarea>. Use Textarea with Field from design-system-ai-lab.",
  },
];

describe("generation rules: no raw form controls", () => {
  it.each(targets)("$path does not use raw form controls", (target) => {
    for (const forbidden of forbiddenRawFormControls) {
      expectNoForbiddenPattern(target, forbidden.pattern, forbidden.message);
    }
  });
});
