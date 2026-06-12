import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { SourceStrength } from "../types/trust";
import { sourceStrengthLabels } from "../types/trust";
import { SemanticPill } from "./semantic-pill";
import type { SemanticPillTone } from "./semantic-pill";

export type { SourceStrength } from "../types/trust";

/** @deprecated Use SemanticPill with contract-controlled source-strength mapping. */
export type SourceStrengthPillProps = HTMLAttributes<HTMLSpanElement> & {
  strength: SourceStrength;
};

const strengthTone: Record<SourceStrength, SemanticPillTone> = {
  unknown: "neutral",
  partial: "warning",
  "single-source": "info",
  "multi-source": "success",
  validated: "success",
  strong: "success",
  needs_review: "warning",
  internal: "neutral",
  customer_ready: "info",
};

/** @deprecated Use SemanticPill with contract-controlled source-strength mapping. */
export const SourceStrengthPill = forwardRef<HTMLSpanElement, SourceStrengthPillProps>(
  ({ strength, className = "", ...props }, ref) => {
    return (
      <SemanticPill ref={ref} tone={strengthTone[strength]} className={className} {...props}>
        {sourceStrengthLabels[strength]}
      </SemanticPill>
    );
  },
);

SourceStrengthPill.displayName = "SourceStrengthPill";
