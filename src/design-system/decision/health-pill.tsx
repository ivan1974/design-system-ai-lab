import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { SemanticPill } from "./semantic-pill";
import type { SemanticPillTone } from "./semantic-pill";

export type AssetHealth = "critical" | "poor" | "fair" | "good" | "excellent" | "unknown";

/** @deprecated Use SemanticPill with contract-controlled health mapping. */
export type HealthPillProps = HTMLAttributes<HTMLSpanElement> & {
  health: AssetHealth;
  label?: string;
};

const healthMeta: Record<AssetHealth, { label: string; tone: SemanticPillTone }> = {
  critical: { label: "Critical", tone: "danger" },
  poor: { label: "Poor", tone: "danger" },
  fair: { label: "Fair", tone: "warning" },
  good: { label: "Good", tone: "success" },
  excellent: { label: "Excellent", tone: "success" },
  unknown: { label: "Unknown", tone: "muted" },
};

/** @deprecated Use SemanticPill with contract-controlled health mapping. */
export const HealthPill = forwardRef<HTMLSpanElement, HealthPillProps>(
  ({ health, label, className = "", ...props }, ref) => {
    const meta = healthMeta[health];

    return (
      <SemanticPill ref={ref} tone={meta.tone} className={className} {...props}>
        {label ?? meta.label}
      </SemanticPill>
    );
  },
);

HealthPill.displayName = "HealthPill";
