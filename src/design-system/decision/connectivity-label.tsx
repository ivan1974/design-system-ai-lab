import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type ConnectivityValue = "connected" | "not-connected" | "unknown";

export type ConnectivityLabelProps = HTMLAttributes<HTMLSpanElement> & {
  value: ConnectivityValue;
  label?: string;
};

const connectivityMeta: Record<ConnectivityValue, { label: string; indicatorClassName: string }> = {
  connected: {
    label: "Connected",
    indicatorClassName: "bg-(--ec-color-success)",
  },
  "not-connected": {
    label: "Not connected",
    indicatorClassName: "bg-(--ec-color-warning)",
  },
  unknown: {
    label: "Unknown",
    indicatorClassName: "bg-(--ec-color-text-muted)",
  },
};

export const ConnectivityLabel = forwardRef<HTMLSpanElement, ConnectivityLabelProps>(
  ({ value, label, className = "", ...props }, ref) => {
    const meta = connectivityMeta[value];

    return (
      <span
        ref={ref}
        className={["inline-flex items-center gap-1.5 text-xs font-medium text-(--ec-color-text-secondary)", className].join(" ")}
        {...props}
      >
        <span aria-hidden="true" className={["h-1.5 w-1.5 rounded-full", meta.indicatorClassName].join(" ")} />
        {label ?? meta.label}
      </span>
    );
  },
);

ConnectivityLabel.displayName = "ConnectivityLabel";
