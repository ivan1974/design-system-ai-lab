import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type CompactMetricTone = "neutral" | "success" | "warning" | "danger";

export type CompactMetricProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: ReactNode;
  helper?: string;
  tone?: CompactMetricTone;
};

const toneClasses: Record<CompactMetricTone, string> = {
  neutral: "text-(--ec-color-text-secondary)",
  success: "text-(--ec-color-success)",
  warning: "text-(--ec-color-warning)",
  danger: "text-(--ec-color-danger)",
};

export const CompactMetric = forwardRef<HTMLDivElement, CompactMetricProps>(
  ({ label, value, helper, tone = "neutral", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "min-w-0 rounded-(--ec-radius-sm) border border-(--ec-color-border)",
          "bg-(--ec-color-surface) px-3 py-2",
          className,
        ].join(" ")}
        {...props}
      >
        <p className="text-xs font-medium text-(--ec-color-text-muted)">{label}</p>
        <p className={["mt-1 text-sm font-semibold", toneClasses[tone]].join(" ")}>{value}</p>
        {helper && <p className="mt-1 text-xs text-(--ec-color-text-muted)">{helper}</p>}
      </div>
    );
  },
);

CompactMetric.displayName = "CompactMetric";
