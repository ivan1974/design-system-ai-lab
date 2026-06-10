import { describe, it } from "vitest";
import {
  expectRequiredPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

const actionComponentPattern = /<(ActionRow|ActionCard)\b/;

describe("generation rules: actionability", () => {
  it.each(targets)("$path includes action ownership when actions are present", (target) => {
    if (actionComponentPattern.test(target.content)) {
      expectRequiredPattern(target, /owner=/, "Expected action components to include owner.");
    }
  });

  it.each(targets)("$path includes action due date when actions are present", (target) => {
    if (actionComponentPattern.test(target.content)) {
      expectRequiredPattern(target, /dueDate=/, "Expected action components to include dueDate.");
    }
  });

  it.each(targets)("$path includes action priority when actions are present", (target) => {
    if (actionComponentPattern.test(target.content)) {
      expectRequiredPattern(target, /priority=/, "Expected action components to include priority.");
    }
  });

  it.each(targets)("$path includes recommendation on alerts", (target) => {
    if (/<AlertCard\b/.test(target.content)) {
      expectRequiredPattern(target, /<AlertCard[\s\S]*recommendation=/, "Expected AlertCard to include recommendation.");
    }
  });
});
