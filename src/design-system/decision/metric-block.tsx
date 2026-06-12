import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type MetricBlockTone = "neutral" | "primary" | "success" | "warning" | "danger";

export type MetricBlockProps = HTMLAttributes<HTMLElement> & {
  label: string;
  value: ReactNode;
  description?: string;
  meta?: ReactNode;
  trend?: ReactNode;
  tone?: MetricBlockTone;
};

const toneClasses: Record<MetricBlockTone, string> = {
  neutral: "border-(--ec-color-border-soft) bg-(--ec-color-surface)",
  primary: "border-(--ec-color-primary-border) bg-(--ec-color-primary-soft)",
  success: "border-(--ec-color-success-border) bg-(--ec-color-success-soft)",
  warning: "border-(--ec-color-warning-border) bg-(--ec-color-warning-soft)",
  danger: "border-(--ec-color-danger-border) bg-(--ec-color-danger-soft)",
};

export const MetricBlock = forwardRef<HTMLElement, MetricBlockProps>(
  ({ label, value, description, meta, trend, tone = "neutral", className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border p-4",
          "text-(--ec-color-text-primary)",
          toneClasses[tone],
          className,
        ].join(" ")}
        {...props}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-(--ec-color-text-muted)">{label}</p>
            {trend && <div className="shrink-0 text-xs text-(--ec-color-text-secondary)">{trend}</div>}
          </div>
          <div className="text-2xl font-semibold leading-8 tracking-(--ec-letter-spacing-tight)">{value}</div>
          {description && <p className="text-sm leading-5 text-(--ec-color-text-secondary)">{description}</p>}
          {meta && <div className="text-xs leading-4 text-(--ec-color-text-muted)">{meta}</div>}
        </div>
      </section>
    );
  },
);

MetricBlock.displayName = "MetricBlock";
