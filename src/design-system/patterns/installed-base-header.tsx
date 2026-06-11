import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Badge } from "../components/badge";
import { PageHeading, Text } from "../components/typography";

export type InstalledBaseHeaderProps = HTMLAttributes<HTMLElement> & {
  contextPill?: string;
  siteContext?: string;
  portfolioTitle?: string;
  buildingCount?: number;
  electricalRoomCount?: number;
  assetIntelligence?: string;
};

export const InstalledBaseHeader = forwardRef<HTMLElement, InstalledBaseHeaderProps>(
  (
    {
      contextPill = "Reference Campus",
      siteContext = "Demo Data Center — DC-WE01",
      portfolioTitle = "Asset Portfolio",
      buildingCount = 0,
      electricalRoomCount = 0,
      assetIntelligence = "Component hierarchy + intelligence enabled",
      className = "",
      ...props
    },
    ref,
  ) => (
    <PageHeading
      ref={ref}
      eyebrow={<Badge tone="primary">{contextPill}</Badge>}
      title={portfolioTitle}
      description={`${buildingCount} Buildings · ${electricalRoomCount} Electrical Rooms`}
      actions={
        <div className="text-right">
          <Text variant="caption">{siteContext}</Text>
          <Text variant="caption" className="text-(--ec-color-text-secondary)">{assetIntelligence}</Text>
        </div>
      }
      className={className}
      {...props}
    />
  ),
);

InstalledBaseHeader.displayName = "InstalledBaseHeader";
