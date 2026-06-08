import { forwardRef } from "react";
import { Card } from "./card";
import type { CardProps } from "./card";

export type MetricTrendTone = "neutral" | "success" | "warning" | "danger";

export type MetricCardProps = Omit<
  CardProps,
  "title" | "description" | "children"
> & {
  label: string;
  value: string;
  helper?: string;
  trend?: string;
  trendTone?: MetricTrendTone;
  meta?: string;
  source?: string;
  sourceScope?: string;
  sourceStrength?: string;
  freshness?: string;
  validationStatus?: string;
};

const trendToneClasses: Record<MetricTrendTone, string> = {
  neutral: "text-(--ec-color-text-secondary)",
  success: "text-(--ec-color-success)",
  warning: "text-(--ec-color-warning)",
  danger: "text-(--ec-color-danger)",
};

export const MetricCard = forwardRef<HTMLElement, MetricCardProps>(
  (
    {
      label,
      value,
      helper,
      trend,
      trendTone = "neutral",
      meta,
      source,
      sourceScope,
      sourceStrength,
      freshness,
      validationStatus,
      className = "",
      ...props
    },
    ref,
  ) => {
    const trustMetadata = [
      source && `Source: ${source}`,
      sourceScope && `Scope: ${sourceScope}`,
      sourceStrength && `Source strength: ${sourceStrength}`,
      freshness && `Freshness: ${freshness}`,
      validationStatus && `Validation: ${validationStatus}`,
    ].filter(Boolean);

    return (
      <Card ref={ref} className={className} {...props}>
        <div className="space-y-2">
          <p className="text-sm text-(--ec-color-text-secondary)">{label}</p>

          <div className="flex items-end justify-between gap-4">
            <p className="text-3xl font-semibold tracking-tight text-(--ec-color-text-primary)">
              {value}
            </p>

            {trend && (
              <p
                className={[
                  "text-xs font-medium",
                  trendToneClasses[trendTone],
                ].join(" ")}
              >
                {trend}
              </p>
            )}
          </div>

          {helper && (
            <p className="text-xs text-(--ec-color-text-muted)">{helper}</p>
          )}

          {meta && (
            <p className="text-xs text-(--ec-color-text-muted)">{meta}</p>
          )}

          {trustMetadata.length > 0 && (
            <dl className="space-y-1 text-xs text-(--ec-color-text-muted)">
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
      </Card>
    );
  },
);

MetricCard.displayName = "MetricCard";