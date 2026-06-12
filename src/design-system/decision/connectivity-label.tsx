import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusIndicator } from "./status-indicator";
import type { StatusIndicatorTone } from "./status-indicator";

export type ConnectivityValue = "connected" | "not-connected" | "unknown";

/** @deprecated Use StatusIndicator with contract-controlled connectivity mapping. */
export type ConnectivityLabelProps = HTMLAttributes<HTMLSpanElement> & {
  value: ConnectivityValue;
  label?: string;
};

const connectivityMeta: Record<ConnectivityValue, { label: string; tone: StatusIndicatorTone }> = {
  connected: { label: "Connected", tone: "success" },
  "not-connected": { label: "Not connected", tone: "warning" },
  unknown: { label: "Unknown", tone: "muted" },
};

/** @deprecated Use StatusIndicator with contract-controlled connectivity mapping. */
export const ConnectivityLabel = forwardRef<HTMLSpanElement, ConnectivityLabelProps>(
  ({ value, label, className = "", ...props }, ref) => {
    const meta = connectivityMeta[value];

    return (
      <StatusIndicator ref={ref} tone={meta.tone} icon="dot" label={label ?? meta.label} className={className} {...props} />
    );
  },
);

ConnectivityLabel.displayName = "ConnectivityLabel";
