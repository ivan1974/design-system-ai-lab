import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type DecisionBlockTone = "neutral" | "primary" | "info" | "success" | "warning" | "danger";

export type DecisionBlockProps = HTMLAttributes<HTMLElement> & {
  title: string;
  summary?: string;
  rationale?: ReactNode;
  signal?: ReactNode;
  recommendation?: ReactNode;
  evidence?: ReactNode;
  action?: ReactNode;
  tone?: DecisionBlockTone;
};

const toneClasses: Record<DecisionBlockTone, string> = {
  neutral: "border-(--ec-color-border-soft) bg-(--ec-color-surface)",
  primary: "border-(--ec-color-primary-border) bg-(--ec-color-primary-soft)",
  info: "border-(--ec-color-info-border) bg-(--ec-color-info-soft)",
  success: "border-(--ec-color-success-border) bg-(--ec-color-success-soft)",
  warning: "border-(--ec-color-warning-border) bg-(--ec-color-warning-soft)",
  danger: "border-(--ec-color-danger-border) bg-(--ec-color-danger-soft)",
};

export const DecisionBlock = forwardRef<HTMLElement, DecisionBlockProps>(
  (
    {
      title,
      summary,
      rationale,
      signal,
      recommendation,
      evidence,
      action,
      tone = "neutral",
      className = "",
      ...props
    },
    ref,
  ) => {
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
        <div className="space-y-4">
          <header className="space-y-1">
            <h3 className="text-sm font-semibold leading-5 text-(--ec-color-text-primary)">{title}</h3>
            {summary && <p className="text-sm leading-5 text-(--ec-color-text-secondary)">{summary}</p>}
          </header>

          {signal && <div className="text-sm leading-5 text-(--ec-color-text-secondary)">{signal}</div>}
          {recommendation && <div className="text-sm leading-5 text-(--ec-color-text-primary)">{recommendation}</div>}
          {rationale && <div className="text-sm leading-5 text-(--ec-color-text-secondary)">{rationale}</div>}
          {evidence && <div className="border-t border-(--ec-color-border-soft) pt-3">{evidence}</div>}
          {action && <div className="border-t border-(--ec-color-border-soft) pt-3">{action}</div>}
        </div>
      </section>
    );
  },
);

DecisionBlock.displayName = "DecisionBlock";
