import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { ActionPriority } from "../decision/action-card";
import { ReviewQueueRow } from "../decision/review-queue-row";
import type { ReviewQueueRowMetric } from "../decision/review-queue-row";
import type { SourceStrength } from "../decision/source-strength-pill";
import type { StatusPillTone } from "../decision/status-pill";

export type RiskQueueRowProps = HTMLAttributes<HTMLDivElement> & {
  riskTitle: string;
  description?: string;
  scope?: string;
  riskLabel?: ReactNode;
  riskTone?: StatusPillTone;
  priority?: ActionPriority;
  sourceStrength?: SourceStrength;
  impact?: ReactNode;
  dueDate?: ReactNode;
  selected?: boolean;
  interactive?: boolean;
  trailing?: ReactNode;
};

export const RiskQueueRow = forwardRef<HTMLDivElement, RiskQueueRowProps>(
  (
    {
      riskTitle,
      description,
      scope,
      riskLabel,
      riskTone = "warning",
      priority,
      sourceStrength,
      impact,
      dueDate,
      selected,
      interactive = true,
      trailing,
      className = "",
      ...props
    },
    ref,
  ) => {
    const metrics: ReviewQueueRowMetric[] = [
      ...(impact ? [{ label: "Impact", value: impact }] : []),
      ...(dueDate ? [{ label: "Due", value: dueDate }] : []),
    ];

    return (
      <ReviewQueueRow
        ref={ref}
        eyebrow={scope}
        title={riskTitle}
        description={description}
        status={riskLabel}
        statusTone={riskTone}
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

RiskQueueRow.displayName = "RiskQueueRow";
