import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { SectionHeader } from "./section-header";

export type ActionListProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export const ActionList = forwardRef<HTMLElement, ActionListProps>(
  (
    {
      title,
      description,
      actions,
      children,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={["space-y-3", className].join(" ")}
        {...props}
      >
        {(title || description || actions) && (
          <SectionHeader
            title={title ?? "Actions"}
            description={description}
            actions={actions}
          />
        )}

        <div className="min-w-0 space-y-3">{children}</div>
      </section>
    );
  },
);

ActionList.displayName = "ActionList";