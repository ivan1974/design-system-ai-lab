import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Card } from "../components/card";
import { CompactMetric } from "../components/compact-metric";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { MetricStrip } from "../components/metric-strip";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { SemanticTag } from "../decision/semantic-tag";
import type { StatusSummaryBadge, StatusSummaryItem } from "../decision/status-summary";

export type ConnectivityCoverageCardMode = "card" | "section" | "compact";

export type ConnectivityCoverageCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  customerName?: string;
  connectedAssets?: string;
  disconnectedAssets?: string;
  criticalDisconnectedAssets?: string;
  coverageRate?: string;
  lastUpdate?: string;
  monitoringStatus?: string;
  affectedScope?: string;
  sourceScope?: string;
  sourceStrength?: string;
  coverageBasis?: string;
  validationStatus?: string;
  recoveryStatus?: string;
  customerDependency?: string;
  serviceDependency?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
  mode?: ConnectivityCoverageCardMode;
};

export const ConnectivityCoverageCard = forwardRef<
  HTMLElement,
  ConnectivityCoverageCardProps
>(
  (
    {
      customerName,
      connectedAssets,
      disconnectedAssets,
      criticalDisconnectedAssets,
      coverageRate,
      lastUpdate,
      monitoringStatus,
      affectedScope,
      sourceScope,
      sourceStrength,
      coverageBasis,
      validationStatus,
      recoveryStatus,
      customerDependency,
      serviceDependency,
      badges = [],
      extraItems = [],
      title = "Connectivity coverage",
      description = "Monitoring coverage, disconnected assets and recovery context.",
      mode = "card",
      className = "",
      ...props
    },
    ref,
  ) => {
    const content = (
      <SectionStack gap="sm">
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <SemanticTag key={badge.label} tone={badge.tone ?? "neutral"}>{badge.label}</SemanticTag>
            ))}
          </div>
        )}

        {(coverageRate || connectedAssets || disconnectedAssets || criticalDisconnectedAssets) && (
          <MetricStrip columns={4}>
            {coverageRate && <CompactMetric label="Coverage rate" value={coverageRate} />}
            {connectedAssets && <CompactMetric label="Connected" value={connectedAssets} tone="success" />}
            {disconnectedAssets && <CompactMetric label="Disconnected" value={disconnectedAssets} tone="warning" />}
            {criticalDisconnectedAssets && <CompactMetric label="Critical disconnected" value={criticalDisconnectedAssets} tone="danger" />}
          </MetricStrip>
        )}

        <SectionBlock title="Coverage context">
          <KeyValueList columns={mode === "compact" ? 2 : 3}>
            {customerName && <KeyValueRow label="Customer" value={customerName} />}
            {monitoringStatus && <KeyValueRow label="Monitoring status" value={monitoringStatus} />}
            {affectedScope && <KeyValueRow label="Affected scope" value={affectedScope} />}
            {lastUpdate && <KeyValueRow label="Last update" value={lastUpdate} />}
            {sourceScope && <KeyValueRow label="Source scope" value={sourceScope} />}
            {sourceStrength && <KeyValueRow label="Source strength" value={sourceStrength} />}
            {coverageBasis && <KeyValueRow label="Coverage basis" value={coverageBasis} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatus} />}
            {recoveryStatus && <KeyValueRow label="Recovery" value={recoveryStatus} />}
            {customerDependency && <KeyValueRow label="Customer dependency" value={customerDependency} />}
            {serviceDependency && <KeyValueRow label="Service dependency" value={serviceDependency} />}
            {extraItems.map((item) => (
              <KeyValueRow key={item.label} label={item.label} value={item.value} />
            ))}
          </KeyValueList>
        </SectionBlock>
      </SectionStack>
    );

    if (mode === "card") {
      return (
        <Card ref={ref} title={title} description={description} className={className} {...props}>
          {content}
        </Card>
      );
    }

    return (
      <section ref={ref} className={className} {...props}>
        {mode !== "compact" && (
          <header className="mb-4">
            <h2 className="text-sm font-semibold text-(--ec-color-text-primary)">{title}</h2>
            {description && <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{description}</p>}
          </header>
        )}
        {content}
      </section>
    );
  },
);

ConnectivityCoverageCard.displayName = "ConnectivityCoverageCard";
