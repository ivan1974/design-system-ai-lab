import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { SourceStrength } from "../types/trust";
import { sourceStrengthLabels } from "../types/trust";

export type { SourceStrength } from "../types/trust";

export type SourceStrengthPillProps = HTMLAttributes<HTMLSpanElement> & {
  strength: SourceStrength;
};

const strengthClasses: Record<SourceStrength, string> = {
  unknown: "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
  partial: "bg-amber-50 text-(--ec-color-warning)",
  "single-source": "bg-blue-50 text-(--ec-color-primary)",
  "multi-source": "bg-green-50 text-(--ec-color-success)",
  validated: "bg-green-50 text-(--ec-color-success)",
};

export const SourceStrengthPill = forwardRef<HTMLSpanElement, SourceStrengthPillProps>(
  ({ strength, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
          strengthClasses[strength],
          className,
        ].join(" ")}
        {...props}
      >
        {sourceStrengthLabels[strength]}
      </span>
    );
  },
);

SourceStrengthPill.displayName = "SourceStrengthPill";
