import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type StatusIndicatorTone = "neutral" | "muted" | "primary" | "info" | "success" | "warning" | "danger";
export type StatusIndicatorIcon = "none" | "dot" | "check" | "warning" | "clock" | "dash";

export type StatusIndicatorProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: StatusIndicatorTone;
  icon?: StatusIndicatorIcon;
  label: ReactNode;
  meta?: ReactNode;
};

const toneClasses: Record<StatusIndicatorTone, string> = {
  neutral: "text-(--ec-color-text-secondary)",
  muted: "text-(--ec-color-text-muted)",
  primary: "text-(--ec-color-primary-hover)",
  info: "text-(--ec-color-info)",
  success: "text-(--ec-color-success)",
  warning: "text-(--ec-color-warning)",
  danger: "text-(--ec-color-danger)",
};

const dotClasses: Record<StatusIndicatorTone, string> = {
  neutral: "bg-(--ec-color-text-secondary)",
  muted: "bg-(--ec-color-text-muted)",
  primary: "bg-(--ec-color-primary)",
  info: "bg-(--ec-color-info)",
  success: "bg-(--ec-color-success)",
  warning: "bg-(--ec-color-warning)",
  danger: "bg-(--ec-color-danger)",
};

const iconText: Record<Exclude<StatusIndicatorIcon, "none" | "dot">, string> = {
  check: "✓",
  warning: "⚠",
  clock: "◷",
  dash: "—",
};

export const StatusIndicator = forwardRef<HTMLSpanElement, StatusIndicatorProps>(
  ({ tone = "neutral", icon = "dot", label, meta, className = "", ...props }, ref) => {
    const iconNode = icon === "none" ? null : icon === "dot" ? (
      <span aria-hidden="true" className={["h-1.5 w-1.5 rounded-full", dotClasses[tone]].join(" ")} />
    ) : (
      <span aria-hidden="true" className={toneClasses[tone]}>{iconText[icon]}</span>
    );

    return (
      <span ref={ref} className={["inline-flex flex-col gap-0.5 text-xs", className].join(" ")} {...props}>
        <span className="inline-flex items-center gap-1.5 font-medium text-(--ec-color-text-primary)">
          {iconNode}
          <span>{label}</span>
        </span>
        {meta ? <span className="text-(--ec-color-text-muted)">{meta}</span> : null}
      </span>
    );
  },
);

StatusIndicator.displayName = "StatusIndicator";
