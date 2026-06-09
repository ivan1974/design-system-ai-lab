import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { ActionPriority } from "../decision/action-card";
import { ReviewQueueRow } from "../decision/review-queue-row";
import type { ReviewQueueRowMetric } from "../decision/review-queue-row";
import type { SourceStrength } from "../decision/source-strength-pill";
import type { StatusPillTone } from "../decision/status-pill";

export type CustomerQueueRowProps = HTMLAttributes<HTMLDivElement> & {
  customerName: string;
  description?: string;
  plan?: string;
  riskLabel?: ReactNode;
  riskTone?: StatusPillTone;
  priority?: ActionPriority;
  sourceStrength?: SourceStrength;
  nextTouchpoint?: string;
  coverage?: ReactNode;
  openActions?: ReactNode;
  selected?: boolean;
  interactive?: boolean;
  trailing?: ReactNode;
};

export const CustomerQueueRow = forwardRef<HTMLDivElement, CustomerQueueRowProps>(
  (
    {
      customerName,
      description,
      plan,
      riskLabel,
      riskTone = "neutral",
      priority,
      sourceStrength,
      nextTouchpoint,
      coverage,
      openActions,
      selected,
      interactive = true,
      trailing,
      className = "",
      ...props
    },
    ref,
  ) => {
    const metrics: ReviewQueueRowMetric[] = [
      ...(coverage ? [{ label: "Coverage", value: coverage }] : []),
      ...(openActions ? [{ label: "Actions", value: openActions }] : []),
    ];

    return (
      <ReviewQueueRow
        ref={ref}
        eyebrow={plan}
        title={customerName}
        description={description ?? nextTouchpoint}
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

CustomerQueueRow.displayName = "CustomerQueueRow";
