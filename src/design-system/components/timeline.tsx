import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type TimelineProps = HTMLAttributes<HTMLOListElement> & {
  children: ReactNode;
};

export type TimelineItemProps = HTMLAttributes<HTMLLIElement> & {
  title: string;
  date: string;
  description?: string;
  meta?: ReactNode;
};

export const Timeline = forwardRef<HTMLOListElement, TimelineProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <ol ref={ref} className={["space-y-4", className].join(" ")} {...props}>
        {children}
      </ol>
    );
  },
);

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ title, date, description, meta, className = "", ...props }, ref) => {
    return (
      <li ref={ref} className={["relative pl-5", className].join(" ")} {...props}>
        <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-(--ec-color-border)" />
        <div className="space-y-1">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <p className="text-sm font-medium text-(--ec-color-text-primary)">{title}</p>
            <p className="text-xs text-(--ec-color-text-muted)">{date}</p>
          </div>
          {description && <p className="text-sm text-(--ec-color-text-secondary)">{description}</p>}
          {meta && <div className="pt-1">{meta}</div>}
        </div>
      </li>
    );
  },
);

Timeline.displayName = "Timeline";
TimelineItem.displayName = "TimelineItem";
