import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusSummary } from "../decision/status-summary";
import type {
  StatusSummaryBadge,
  StatusSummaryItem,
} from "../decision/status-summary";

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
      ...props
    },
    ref,
  ) => {
    const items: StatusSummaryItem[] = [
      ...(customerName ? [{ label: "Customer", value: customerName }] : []),
      ...(coverageRate ? [{ label: "Coverage rate", value: coverageRate }] : []),
      ...(connectedAssets
        ? [{ label: "Connected assets", value: connectedAssets }]
        : []),
      ...(disconnectedAssets
        ? [{ label: "Disconnected assets", value: disconnectedAssets }]
        : []),
      ...(criticalDisconnectedAssets
        ? [
          {
            label: "Critical disconnected assets",
            value: criticalDisconnectedAssets,
          },
        ]
        : []),
      ...(monitoringStatus
        ? [{ label: "Monitoring status", value: monitoringStatus }]
        : []),
      ...(affectedScope
        ? [{ label: "Affected scope", value: affectedScope }]
        : []),
      ...(lastUpdate ? [{ label: "Last update", value: lastUpdate }] : []),
      ...(sourceScope ? [{ label: "Source scope", value: sourceScope }] : []),
      ...(sourceStrength
        ? [{ label: "Source strength", value: sourceStrength }]
        : []),
      ...(coverageBasis
        ? [{ label: "Coverage basis", value: coverageBasis }]
        : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatus }]
        : []),
      ...(recoveryStatus
        ? [{ label: "Recovery status", value: recoveryStatus }]
        : []),
      ...(customerDependency
        ? [{ label: "Customer dependency", value: customerDependency }]
        : []),
      ...(serviceDependency
        ? [{ label: "Service dependency", value: serviceDependency }]
        : []),
      ...extraItems,
    ];

    return (
      <StatusSummary
        ref={ref}
        title={title}
        description={description}
        badges={badges}
        items={items}
        {...props}
      />
    );
  },
);

ConnectivityCoverageCard.displayName = "ConnectivityCoverageCard";