import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Badge } from "../components/badge";
import type { BadgeTone } from "../components/badge";
import { Card } from "../components/card";

export type StatusSummaryItem = {
  label: string;
  value: ReactNode;
};

export type StatusSummaryBadge = {
  label: string;
  tone?: BadgeTone;
};

export type StatusSummaryProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  title: string;
  description?: string;
  badges?: StatusSummaryBadge[];
  items: StatusSummaryItem[];
  columns?: 2 | 3 | 4;
};

const columnClasses: Record<NonNullable<StatusSummaryProps["columns"]>, string> =
{
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export const StatusSummary = forwardRef<HTMLElement, StatusSummaryProps>(
  (
    {
      title,
      description,
      badges = [],
      items,
      columns = 3,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <Card ref={ref} title={title} description={description} {...props}>
        <div className={["space-y-4", className].join(" ")}>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge key={badge.label} tone={badge.tone ?? "neutral"}>
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}

          <dl
            className={[
              "grid grid-cols-1 gap-6 pt-2",
              columnClasses[columns],
            ].join(" ")}
          >
            {items.map((item) => (
              <div key={item.label} className="min-w-0">
                <dt className="mb-1 text-xs text-(--ec-color-text-muted)">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-(--ec-color-text-primary)">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>
    );
  },
);

StatusSummary.displayName = "StatusSummary";