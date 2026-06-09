import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { ActionPriority } from "../decision/action-card";
import { ReviewQueueRow } from "../decision/review-queue-row";
import type { ReviewQueueRowMetric } from "../decision/review-queue-row";
import type { SourceStrength } from "../decision/source-strength-pill";
import type { StatusPillTone } from "../decision/status-pill";

export type AssetQueueRowProps = HTMLAttributes<HTMLDivElement> & {
  assetName: string;
  description?: string;
  site?: string;
  assetType?: string;
  statusLabel?: ReactNode;
  statusTone?: StatusPillTone;
  priority?: ActionPriority;
  sourceStrength?: SourceStrength;
  health?: ReactNode;
  freshness?: ReactNode;
  selected?: boolean;
  interactive?: boolean;
  trailing?: ReactNode;
};

export const AssetQueueRow = forwardRef<HTMLDivElement, AssetQueueRowProps>(
  (
    {
      assetName,
      description,
      site,
      assetType,
      statusLabel,
      statusTone = "neutral",
      priority,
      sourceStrength,
      health,
      freshness,
      selected,
      interactive = true,
      trailing,
      className = "",
      ...props
    },
    ref,
  ) => {
    const metrics: ReviewQueueRowMetric[] = [
      ...(health ? [{ label: "Health", value: health }] : []),
      ...(freshness ? [{ label: "Freshness", value: freshness }] : []),
    ];

    const context = [site, assetType].filter(Boolean).join(" · ");

    return (
      <ReviewQueueRow
        ref={ref}
        eyebrow={context || undefined}
        title={assetName}
        description={description}
        status={statusLabel}
        statusTone={statusTone}
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

AssetQueueRow.displayName = "AssetQueueRow";
