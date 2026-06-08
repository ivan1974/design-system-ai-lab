import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Badge } from "../components/badge";

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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge tone={severityTone[severity]}>
                {severityLabel[severity]}
              </Badge>

              {displayedScope && (
                <span className="text-xs text-(--ec-color-text-muted)">
                  {displayedScope}
                </span>
              )}
            </div>

            <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">
              {title}
            </h3>

            <p className="mt-1 text-sm text-(--ec-color-text-secondary)">
              {description}
            </p>

            {evidenceSummary && (
              <p className="mt-3 text-xs text-(--ec-color-text-muted)">
                Evidence: {evidenceSummary}
              </p>
            )}

            <p className="mt-3 text-sm font-medium text-(--ec-color-text-primary)">
              Recommendation: {recommendation}
            </p>

            {(source ||
              sourceScope ||
              sourceStrength ||
              freshness ||
              validationStatus) && (
                <dl className="mt-3 space-y-1 text-xs text-(--ec-color-text-muted)">
                  {source && (
                    <div>
                      <dt className="sr-only">Source</dt>
                      <dd>Source: {source}</dd>
                    </div>
                  )}

                  {sourceScope && (
                    <div>
                      <dt className="sr-only">Source scope</dt>
                      <dd>Scope: {sourceScope}</dd>
                    </div>
                  )}

                  {sourceStrength && (
                    <div>
                      <dt className="sr-only">Source strength</dt>
                      <dd>Source strength: {sourceStrength}</dd>
                    </div>
                  )}

                  {freshness && (
                    <div>
                      <dt className="sr-only">Freshness</dt>
                      <dd>Freshness: {freshness}</dd>
                    </div>
                  )}

                  {validationStatus && (
                    <div>
                      <dt className="sr-only">Validation status</dt>
                      <dd>Validation: {validationStatus}</dd>
                    </div>
                  )}
                </dl>
              )}
          </div>

          {action && <div className="shrink-0">{action}</div>}
        </div>
      </article>
    );
  },
);

AlertCard.displayName = "AlertCard";