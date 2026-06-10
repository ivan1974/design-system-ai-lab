import { describe, it } from "vitest";
import {
  expectRequiredPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

describe("generation rules: workspace structure", () => {
  it.each(targets)("$path renders WorkspaceShell", (target) => {
    expectRequiredPattern(target, /<WorkspaceShell\b/, "Expected WorkspaceShell for decision workspace structure.");
  });

  it.each(targets)("$path renders PageHeading", (target) => {
    expectRequiredPattern(target, /<PageHeading\b/, "Expected PageHeading for page intent.");
  });

  it.each(targets)("$path renders MasterDetailLayout", (target) => {
    expectRequiredPattern(target, /<MasterDetailLayout\b/, "Expected MasterDetailLayout for list/detail review screens.");
  });

  it.each(targets)("$path renders ListContainer", (target) => {
    expectRequiredPattern(target, /<ListContainer\b/, "Expected ListContainer around repeated review rows.");
  });

  it.each(targets)("$path renders WorkspaceDetailPanel", (target) => {
    expectRequiredPattern(target, /<WorkspaceDetailPanel\b/, "Expected WorkspaceDetailPanel for selected item details.");
  });
});
