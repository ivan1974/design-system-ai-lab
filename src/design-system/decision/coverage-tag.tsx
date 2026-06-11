import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { Badge } from "../components/badge";
import type { BadgeTone } from "../components/badge";

export type CoverageValue =
  | "premium-service-plan-advanced"
  | "premium-service-plan-essential"
  | "advanced-service-plan"
  | "no-coverage";

export type CoverageTagProps = HTMLAttributes<HTMLSpanElement> & {
  coverage: CoverageValue;
  label?: string;
};

const coverageMeta: Record<CoverageValue, { label: string; tone: BadgeTone }> = {
  "premium-service-plan-advanced": {
    label: "Premium Service Plan Advanced",
    tone: "primary",
  },
  "premium-service-plan-essential": {
    label: "Premium Service Plan Essential",
    tone: "success",
  },
  "advanced-service-plan": {
    label: "Advanced Service Plan",
    tone: "neutral",
  },
  "no-coverage": {
    label: "No Coverage",
    tone: "warning",
  },
};

export const CoverageTag = forwardRef<HTMLSpanElement, CoverageTagProps>(
  ({ coverage, label, className = "", ...props }, ref) => {
    const meta = coverageMeta[coverage];

    return (
      <Badge ref={ref} tone={meta.tone} className={className} {...props}>
        {label ?? meta.label}
      </Badge>
    );
  },
);

CoverageTag.displayName = "CoverageTag";
