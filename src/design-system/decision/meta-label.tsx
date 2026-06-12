import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type MetaLabelTone = "neutral" | "muted" | "primary" | "success" | "warning" | "danger";

export type MetaLabelProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: MetaLabelTone;
  label?: ReactNode;
  value?: ReactNode;
  separator?: ReactNode;
};

const toneClasses: Record<MetaLabelTone, string> = {
  neutral: "text-(--ec-color-text-secondary)",
  muted: "text-(--ec-color-text-muted)",
  primary: "text-(--ec-color-primary-hover)",
  success: "text-(--ec-color-success)",
  warning: "text-(--ec-color-warning)",
  danger: "text-(--ec-color-danger)",
};

export const MetaLabel = forwardRef<HTMLSpanElement, MetaLabelProps>(
  ({ tone = "muted", label, value, separator = " · ", children, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={["text-xs font-medium leading-4", toneClasses[tone], className].join(" ")}
        {...props}
      >
        {children ?? (
          <>
            {label}
            {label && value ? separator : null}
            {value}
          </>
        )}
      </span>
    );
  },
);

MetaLabel.displayName = "MetaLabel";
