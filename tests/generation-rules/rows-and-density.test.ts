import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  expectRequiredPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

const rowPattern = /<(CustomerQueueRow|AssetQueueRow|RiskQueueRow|RecommendationQueueRow|ReviewQueueRow|EvidenceRow|ActionRow)\b/;

const genericRepeatedCardPatterns = [
  /\.map\s*\([^)]*=>\s*\(\s*<Card\b/s,
  /\.map\s*\([^)]*=>\s*<Card\b/s,
];

describe("generation rules: rows and density", () => {
  it.each(targets)("$path uses row components for repeated review objects", (target) => {
    expectRequiredPattern(
      target,
      rowPattern,
      "Expected repeated review objects to use approved queue, evidence or action rows.",
    );
  });

  it.each(targets)("$path keeps repeated rows inside ListContainer", (target) => {
    expectRequiredPattern(
      target,
      /<ListContainer\b[\s\S]*<(CustomerQueueRow|AssetQueueRow|RiskQueueRow|RecommendationQueueRow|ReviewQueueRow)\b/,
      "Expected queue rows to appear inside ListContainer.",
    );
  });

  it.each(targets)("$path does not map repeated facts to generic cards", (target) => {
    for (const pattern of genericRepeatedCardPatterns) {
      expectNoForbiddenPattern(
        target,
        pattern,
        "Do not render repeated review objects as a generic mapped Card stack.",
      );
    }
  });
});
