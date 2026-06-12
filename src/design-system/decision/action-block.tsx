import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { ActionPriority, ActionStatus } from "../types/action";

export type ActionBlockProps = HTMLAttributes<HTMLElement> & {
  title: string;
  owner: string;
  dueDate?: string;
  priority?: ActionPriority;
  status?: ActionStatus;
  description?: string;
  context?: ReactNode;
  action?: ReactNode;
};

export const ActionBlock = forwardRef<HTMLElement, ActionBlockProps>(
  ({ title, owner, dueDate, priority, status, description, context, action, className = "", ...props }, ref) => {
    const metadata = [
      `Owner: ${owner}`,
      dueDate && `Due: ${dueDate}`,
      priority && `Priority: ${priority}`,
      status && `Status: ${status}`,
    ].filter(Boolean);

    return (
      <section
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border border-(--ec-color-border-soft)",
          "bg-(--ec-color-surface) p-4 text-(--ec-color-text-primary)",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="space-y-4">
          <header className="space-y-1">
            <h3 className="text-sm font-semibold leading-5 text-(--ec-color-text-primary)">{title}</h3>
            {description && <p className="text-sm leading-5 text-(--ec-color-text-secondary)">{description}</p>}
          </header>

          <p className="text-xs leading-4 text-(--ec-color-text-muted)">{metadata.join(" · ")}</p>

          {context && <div className="text-sm leading-5 text-(--ec-color-text-secondary)">{context}</div>}
          {action && <div className="border-t border-(--ec-color-border-soft) pt-3">{action}</div>}
        </div>
      </section>
    );
  },
);

ActionBlock.displayName = "ActionBlock";
