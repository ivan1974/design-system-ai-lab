import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { StatusPill } from "./status-pill";
import type { StatusPillTone } from "./status-pill";

export type AssetHealth = "critical" | "poor" | "fair" | "good" | "excellent" | "unknown";

export type HealthPillProps = HTMLAttributes<HTMLSpanElement> & {
  health: AssetHealth;
  label?: string;
};

const healthMeta: Record<AssetHealth, { label: string; tone: StatusPillTone }> = {
  critical: { label: "Critical", tone: "danger" },
  poor: { label: "Poor", tone: "danger" },
  fair: { label: "Fair", tone: "warning" },
  good: { label: "Good", tone: "success" },
  excellent: { label: "Excellent", tone: "success" },
  unknown: { label: "Unknown", tone: "neutral" },
};

export const HealthPill = forwardRef<HTMLSpanElement, HealthPillProps>(
  ({ health, label, className = "", ...props }, ref) => {
    const meta = healthMeta[health];

    return (
      <StatusPill ref={ref} tone={meta.tone} className={className} {...props}>
        {label ?? meta.label}
      </StatusPill>
    );
  },
);

HealthPill.displayName = "HealthPill";
