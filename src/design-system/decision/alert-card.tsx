import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { StatusPill } from "./status-pill";

export type AlertSeverity = "critical" | "warning" | "info";

export type AlertCardProps = HTMLAttributes<HTMLElement> & {
  severity: AlertSeverity;
  title: string;
  equipment?: string;
  scope?: string;
  description: string;
  recommendation: string;
  evidenceSummary?: string;
  source?: string;
  sourceScope?: string;
  sourceStrength?: string;
  freshness?: string;
  validationStatus?: string;
  action?: ReactNode;
};

const severityLabel: Record<AlertSeverity, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Information",
};

const severityTone: Record<AlertSeverity, "danger" | "warning" | "primary"> = {
  critical: "danger",
  warning: "warning",
  info: "primary",
};

export const AlertCard = forwardRef<HTMLElement, AlertCardProps>(
  (
    {
      severity,
      title,
      equipment,
      scope,
      description,
      recommendation,
      evidenceSummary,
      source,
      sourceScope,
      sourceStrength,
      freshness,
      validationStatus,
      action,
      className = "",
      ...props
    },
    ref,
  ) => {
    const displayedScope = scope ?? equipment;
    const metadata = [
      source && `Source: ${source}`,
      sourceScope && `Scope: ${sourceScope}`,
      sourceStrength && `Strength: ${sourceStrength}`,
      freshness && `Freshness: ${freshness}`,
      validationStatus && `Validation: ${validationStatus}`,
    ].filter(Boolean);

    return (
      <article
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border border-(--ec-color-border)",
          "bg-(--ec-color-surface) p-4",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill tone={severityTone[severity]}>{severityLabel[severity]}</StatusPill>
                {displayedScope && <span className="text-xs text-(--ec-color-text-muted)">{displayedScope}</span>}
              </div>
              <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">{title}</h3>
              <p className="text-sm text-(--ec-color-text-secondary)">{description}</p>
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>

          {(evidenceSummary || metadata.length > 0) && (
            <div className="border-t border-(--ec-color-border) pt-3">
              <p className="text-xs font-medium text-(--ec-color-text-muted)">Evidence and source</p>
              {evidenceSummary && <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{evidenceSummary}</p>}
              {metadata.length > 0 && <p className="mt-2 text-xs text-(--ec-color-text-muted)">{metadata.join(" · ")}</p>}
            </div>
          )}

          <div className="rounded-(--ec-radius-sm) bg-(--ec-color-surface-muted) px-3 py-2">
            <p className="text-xs font-medium text-(--ec-color-text-muted)">Recommendation</p>
            <p className="mt-1 text-sm font-medium text-(--ec-color-text-primary)">{recommendation}</p>
          </div>
        </div>
      </article>
    );
  },
);

AlertCard.displayName = "AlertCard";
