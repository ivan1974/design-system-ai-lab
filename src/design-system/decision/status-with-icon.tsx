import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusIndicator } from "./status-indicator";
import type { StatusIndicatorIcon, StatusIndicatorTone } from "./status-indicator";

export type OperationalStatus =
  | "live-telemetry"
  | "active-alert"
  | "connectivity-issue"
  | "last-service-visit"
  | "no-record";

/** @deprecated Use StatusIndicator with contract-controlled operational-status mapping. */
export type StatusWithIconProps = HTMLAttributes<HTMLSpanElement> & {
  status: OperationalStatus;
  date?: string;
  label?: string;
};

const statusMeta: Record<OperationalStatus, { label: string; icon: StatusIndicatorIcon; tone: StatusIndicatorTone }> = {
  "live-telemetry": { label: "Live telemetry", icon: "check", tone: "success" },
  "active-alert": { label: "Active alert", icon: "warning", tone: "danger" },
  "connectivity-issue": { label: "Connectivity issue", icon: "warning", tone: "warning" },
  "last-service-visit": { label: "Last service visit", icon: "clock", tone: "neutral" },
  "no-record": { label: "No record", icon: "dash", tone: "muted" },
};

/** @deprecated Use StatusIndicator with contract-controlled operational-status mapping. */
export const StatusWithIcon = forwardRef<HTMLSpanElement, StatusWithIconProps>(
  ({ status, date, label, className = "", ...props }, ref) => {
    const meta = statusMeta[status];

    return (
      <StatusIndicator
        ref={ref}
        tone={meta.tone}
        icon={meta.icon}
        label={label ?? meta.label}
        meta={date}
        className={className}
        {...props}
      />
    );
  },
);

StatusWithIcon.displayName = "StatusWithIcon";
