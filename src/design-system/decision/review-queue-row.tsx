import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { ActionPriority } from "./action-card";
import type { SourceStrength } from "../types/trust";
import { actionPriorityLabels } from "../types/action";
import { sourceStrengthLabels } from "../types/trust";
import { SemanticPill } from "./semantic-pill";
import type { SemanticPillTone } from "./semantic-pill";

export type ReviewQueueRowDensity = "comfortable" | "spacious";

export type ReviewQueueRowMetric = {
  label: string;
  value: ReactNode;
};

export type ReviewQueueRowProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  leading?: ReactNode;
  tags?: ReactNode;
  status?: ReactNode;
  statusTone?: SemanticPillTone;
  priority?: ActionPriority;
  sourceStrength?: SourceStrength;
  metrics?: ReviewQueueRowMetric[];
  trailing?: ReactNode;
  selected?: boolean;
  density?: ReviewQueueRowDensity;
  interactive?: boolean;
};

const densityClasses: Record<ReviewQueueRowDensity, string> = {
  comfortable: "px-5 py-5",
  spacious: "px-6 py-6",
};

const priorityTone: Record<ActionPriority, SemanticPillTone> = {
  critical: "danger",
  high: "danger",
  medium: "warning",
  low: "neutral",
};

const sourceStrengthTone: Record<SourceStrength, SemanticPillTone> = {
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

export const ReviewQueueRow = forwardRef<HTMLDivElement, ReviewQueueRowProps>(
  (
    {
      title,
      description,
      eyebrow,
      leading,
      tags,
      status,
      statusTone = "neutral",
      priority,
      sourceStrength,
      metrics,
      trailing,
      selected = false,
      density = "comfortable",
      interactive = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "group grid gap-4 border-b border-(--ec-color-border-soft) last:border-b-0 md:grid-cols-[minmax(0,1fr)_auto] md:items-center",
          "transition-[background,border-color] duration-150",
          densityClasses[density],
          interactive ? "cursor-pointer hover:bg-(--ec-color-row-hover)" : "",
          selected ? "bg-(--ec-color-row-selected) ring-1 ring-inset ring-(--ec-color-row-selected-border)" : "",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="flex min-w-0 gap-4">
          {leading && <div className="shrink-0 pt-0.5">{leading}</div>}

          <div className="min-w-0 space-y-3">
            <div className="min-w-0 space-y-1.5">
              {eyebrow && (
                <div className="text-(length:--ec-text-caption-size) font-medium uppercase tracking-[0.08em] text-(--ec-color-text-muted)">
                  {eyebrow}
                </div>
              )}
              <div className="text-(length:--ec-title-subsection-size) font-semibold leading-(--ec-title-subsection-line-height) text-(--ec-color-text-primary)">
                {title}
              </div>
              {description && (
                <div className="max-w-2xl text-(length:--ec-text-body-size) leading-(--ec-text-body-line-height) text-(--ec-color-text-secondary)">
                  {description}
                </div>
              )}
            </div>

            {(tags || status || priority || sourceStrength) && (
              <div className="flex flex-wrap items-center gap-2">
                {tags}
                {status && <SemanticPill tone={statusTone}>{status}</SemanticPill>}
                {priority && <SemanticPill tone={priorityTone[priority]}>{actionPriorityLabels[priority]}</SemanticPill>}
                {sourceStrength && <SemanticPill tone={sourceStrengthTone[sourceStrength]}>{sourceStrengthLabels[sourceStrength]}</SemanticPill>}
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 md:items-end">
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-right">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-(length:--ec-text-caption-size) font-medium leading-(--ec-text-caption-line-height) text-(--ec-color-text-muted)">
                    {metric.label}
                  </div>
                  <div className="text-sm font-semibold leading-5 text-(--ec-color-text-primary)">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}
          {trailing && <div>{trailing}</div>}
        </div>
      </div>
    );
  },
);

ReviewQueueRow.displayName = "ReviewQueueRow";
