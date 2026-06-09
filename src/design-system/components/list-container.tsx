import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type ListContainerSpacing = "compact" | "comfortable" | "spacious";

export type ListContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  spacing?: ListContainerSpacing;
  divided?: boolean;
};

const spacingClasses: Record<ListContainerSpacing, string> = {
  compact: "space-y-1",
  comfortable: "space-y-2",
  spacious: "space-y-3",
};

export const ListContainer = forwardRef<HTMLDivElement, ListContainerProps>(
  ({ children, spacing = "comfortable", divided = true, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "rounded-(--ec-radius-lg) border border-(--ec-color-border-soft) bg-(--ec-color-surface)",
          divided ? "divide-y divide-(--ec-color-border-soft)" : spacingClasses[spacing],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ListContainer.displayName = "ListContainer";
