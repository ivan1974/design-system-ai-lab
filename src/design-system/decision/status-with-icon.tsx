import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type OperationalStatus =
  | "live-telemetry"
  | "active-alert"
  | "connectivity-issue"
  | "last-service-visit"
  | "no-record";

export type StatusWithIconProps = HTMLAttributes<HTMLSpanElement> & {
  status: OperationalStatus;
  date?: string;
  label?: string;
};

const statusMeta: Record<OperationalStatus, { label: string; icon: string; className: string }> = {
  "live-telemetry": {
    label: "Live telemetry",
    icon: "✓",
    className: "text-(--ec-color-success)",
  },
  "active-alert": {
    label: "Active alert",
    icon: "⚠",
    className: "text-(--ec-color-danger)",
  },
  "connectivity-issue": {
    label: "Connectivity issue",
    icon: "⚠",
    className: "text-(--ec-color-warning)",
  },
  "last-service-visit": {
    label: "Last service visit",
    icon: "◷",
    className: "text-(--ec-color-text-secondary)",
  },
  "no-record": {
    label: "No record",
    icon: "—",
    className: "text-(--ec-color-text-muted)",
  },
};

export const StatusWithIcon = forwardRef<HTMLSpanElement, StatusWithIconProps>(
  ({ status, date, label, className = "", ...props }, ref) => {
    const meta = statusMeta[status];

    return (
      <span ref={ref} className={["inline-flex flex-col gap-0.5 text-xs", className].join(" ")} {...props}>
        <span className="inline-flex items-center gap-1.5 font-medium text-(--ec-color-text-primary)">
          <span aria-hidden="true" className={meta.className}>{meta.icon}</span>
          <span>{label ?? meta.label}</span>
        </span>
        {date && <span className="text-(--ec-color-text-muted)">{date}</span>}
      </span>
    );
  },
);

StatusWithIcon.displayName = "StatusWithIcon";
