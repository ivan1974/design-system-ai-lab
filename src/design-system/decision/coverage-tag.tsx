import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { SemanticTag } from "./semantic-tag";
import type { SemanticTagTone } from "./semantic-tag";

export type CoverageValue =
  | "premium-service-plan-advanced"
  | "premium-service-plan-essential"
  | "advanced-service-plan"
  | "no-coverage";

/** @deprecated Use SemanticTag with contract-controlled coverage mapping. */
export type CoverageTagProps = HTMLAttributes<HTMLSpanElement> & {
  coverage: CoverageValue;
  label?: string;
};

const coverageMeta: Record<CoverageValue, { label: string; tone: SemanticTagTone }> = {
  "premium-service-plan-advanced": { label: "Advanced plan", tone: "primary" },
  "premium-service-plan-essential": { label: "Essential plan", tone: "success" },
  "advanced-service-plan": { label: "Service plan", tone: "neutral" },
  "no-coverage": { label: "No coverage", tone: "warning" },
};

/** @deprecated Use SemanticTag with contract-controlled coverage mapping. */
export const CoverageTag = forwardRef<HTMLSpanElement, CoverageTagProps>(
  ({ coverage, label, className = "", ...props }, ref) => {
    const meta = coverageMeta[coverage];

    return (
      <SemanticTag ref={ref} tone={meta.tone} className={className} {...props}>
        {label ?? meta.label}
      </SemanticTag>
    );
  },
);

CoverageTag.displayName = "CoverageTag";
