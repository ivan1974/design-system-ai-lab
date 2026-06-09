import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { ActionPriority } from "../decision/action-card";
import { ReviewQueueRow } from "../decision/review-queue-row";
import type { ReviewQueueRowMetric } from "../decision/review-queue-row";
import type { SourceStrength } from "../decision/source-strength-pill";
import type { StatusPillTone } from "../decision/status-pill";

export type RecommendationQueueRowProps = HTMLAttributes<HTMLDivElement> & {
  recommendationTitle: string;
  description?: string;
  scope?: string;
  readinessLabel?: ReactNode;
  readinessTone?: StatusPillTone;
  priority?: ActionPriority;
  sourceStrength?: SourceStrength;
  evidenceCount?: ReactNode;
  owner?: ReactNode;
  selected?: boolean;
  interactive?: boolean;
  trailing?: ReactNode;
};

export const RecommendationQueueRow = forwardRef<HTMLDivElement, RecommendationQueueRowProps>(
  (
    {
      recommendationTitle,
      description,
      scope,
      readinessLabel,
      readinessTone = "neutral",
      priority,
      sourceStrength,
      evidenceCount,
      owner,
      selected,
      interactive = true,
      trailing,
      className = "",
      ...props
    },
    ref,
  ) => {
    const metrics: ReviewQueueRowMetric[] = [
      ...(evidenceCount ? [{ label: "Evidence", value: evidenceCount }] : []),
      ...(owner ? [{ label: "Owner", value: owner }] : []),
    ];

    return (
      <ReviewQueueRow
        ref={ref}
        eyebrow={scope}
        title={recommendationTitle}
        description={description}
        status={readinessLabel}
        statusTone={readinessTone}
        priority={priority}
        sourceStrength={sourceStrength}
        metrics={metrics}
        trailing={trailing}
        selected={selected}
        interactive={interactive}
        className={className}
        {...props}
      />
    );
  },
);

RecommendationQueueRow.displayName = "RecommendationQueueRow";
