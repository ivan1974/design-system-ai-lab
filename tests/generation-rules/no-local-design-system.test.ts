import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

const forbiddenLocalImportPatterns = [
  {
    pattern: /from\s+["']\.\/?components\//,
    message: 'Do not import from "./components". Use design-system-ai-lab instead.',
  },
  {
    pattern: /from\s+["']\.\.\/components\//,
    message: 'Do not import from "../components". Use design-system-ai-lab instead.',
  },
  {
    pattern: /from\s+["']@\/components\//,
    message: 'Do not import from "@/components". Use design-system-ai-lab instead.',
  },
  {
    pattern: /from\s+["']\.\/?components\/ui\//,
    message: "Do not import from local components/ui. Use design-system-ai-lab instead.",
  },
];

const forbiddenLocalComponentPatterns = [
  {
    pattern: /packages\/design-system-ai-lab/,
    message: "Do not create or reference a local packages/design-system-ai-lab folder.",
  },
  {
    pattern: /function\s+Button\s*\(/,
    message: "Do not recreate a local Button component.",
  },
  {
    pattern: /function\s+Card\s*\(/,
    message: "Do not recreate a local Card component.",
  },
  {
    pattern: /function\s+Badge\s*\(/,
    message: "Do not recreate a local Badge component.",
  },
  {
    pattern: /function\s+Dialog\s*\(/,
    message: "Do not recreate a local Dialog component.",
  },
  {
    pattern: /const\s+Button\s*=\s*\(/,
    message: "Do not recreate a local Button component.",
  },
  {
    pattern: /const\s+Card\s*=\s*\(/,
    message: "Do not recreate a local Card component.",
  },
];

describe("generation rules: no local design system", () => {
  it.each(targets)("$path does not import local components", (target) => {
    for (const forbidden of forbiddenLocalImportPatterns) {
      expectNoForbiddenPattern(target, forbidden.pattern, forbidden.message);
    }
  });

  it.each(targets)("$path does not recreate core components", (target) => {
    for (const forbidden of forbiddenLocalComponentPatterns) {
      expectNoForbiddenPattern(target, forbidden.pattern, forbidden.message);
    }
  });
});
