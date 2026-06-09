import { existsSync, readFileSync } from "node:fs";
import { relative, resolve } from "node:path";

export type GenerationRuleTarget = {
  path: string;
  content: string;
};

const defaultTargetPaths = [
  "guidelines/examples/golden/customer-monitoring.App.tsx",
  "guidelines/examples/golden/renewal-risk-review.App.tsx",
  "guidelines/examples/golden/asset-recommendation-review.App.tsx",
  "guidelines/examples/golden/qbr-readiness.App.tsx",
];

function getTargetPaths() {
  const explicitTargets = process.env.GENERATED_APP_PATH;

  if (!explicitTargets) {
    return defaultTargetPaths;
  }

  return explicitTargets
    .split(",")
    .map((targetPath) => targetPath.trim())
    .filter(Boolean);
}

export function readGenerationRuleTargets(): GenerationRuleTarget[] {
  const targetPaths = getTargetPaths();

  return targetPaths.map((targetPath) => {
    const resolvedPath = resolve(process.cwd(), targetPath);

    if (!existsSync(resolvedPath)) {
      throw new Error(
        `Generation rule target does not exist: ${targetPath}. ` +
          "Set GENERATED_APP_PATH to one or more generated App.tsx files.",
      );
    }

    return {
      path: relative(process.cwd(), resolvedPath),
      content: readFileSync(resolvedPath, "utf8"),
    };
  });
}

export function expectNoForbiddenPattern(
  target: GenerationRuleTarget,
  pattern: RegExp,
  message: string,
) {
  if (pattern.test(target.content)) {
    throw new Error(`${target.path}: ${message}`);
  }
}

export function expectRequiredPattern(
  target: GenerationRuleTarget,
  pattern: RegExp,
  message: string,
) {
  if (!pattern.test(target.content)) {
    throw new Error(`${target.path}: ${message}`);
  }
}
