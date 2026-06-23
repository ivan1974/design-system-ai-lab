import { runDeterministicPipeline } from "./deterministic.mjs";

const configurableSteps = new Set([
  "Brief Interpreter",
  "Rule Selector",
  "Information Architect",
  "Component Fit Reviewer",
  "Screen Explorer",
  "Trust Reviewer",
  "DS Evolution Reviewer",
]);

export function runLlmPipeline({ prompt, llmSteps = [] }) {
  const requestedSteps = llmSteps.filter(Boolean);
  const unsupportedSteps = requestedSteps.filter((step) => !configurableSteps.has(step));

  if (unsupportedSteps.length > 0) {
    throw new Error(`Unsupported LLM agent step(s): ${unsupportedSteps.join(", ")}`);
  }

  const result = runDeterministicPipeline({ prompt, runner: "llm" });

  result.runner_config = {
    runner: "llm",
    status: "prepared_not_connected",
    requested_llm_steps: requestedSteps,
    fallback: "deterministic",
    reason: "LLM execution is not connected yet. The deterministic runner preserves the output contract.",
  };

  result.trace = result.trace.map((step) => ({
    ...step,
    runner: requestedSteps.includes(step.agent) ? "llm-prepared-deterministic-fallback" : "deterministic-fallback",
  }));

  return result;
}
