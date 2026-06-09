import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type SourceStrength = "strong" | "partial" | "needs_review" | "internal" | "customer_ready" | "unknown";

export type SourceStrengthPillProps = HTMLAttributes<HTMLSpanElement> & {
  strength: SourceStrength;
};

const strengthLabels: Record<SourceStrength, string> = {
  strong: "Source: strong",
  partial: "Source: partial",
  needs_review: "Source: needs review",
  internal: "Internal proof",
  customer_ready: "Customer-ready",
  unknown: "Source: unknown",
};

const strengthClasses: Record<SourceStrength, string> = {
  strong: "bg-green-50 text-(--ec-color-success)",
  partial: "bg-amber-50 text-(--ec-color-warning)",
  needs_review: "bg-amber-50 text-(--ec-color-warning)",
  internal: "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
  customer_ready: "bg-blue-50 text-(--ec-color-primary)",
  unknown: "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
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
        {strengthLabels[strength]}
      </span>
    );
  },
);

SourceStrengthPill.displayName = "SourceStrengthPill";
