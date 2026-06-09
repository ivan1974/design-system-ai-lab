import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type WorkspaceShellProps = HTMLAttributes<HTMLElement> & {
  header?: ReactNode;
  controls?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  maxWidth?: "full" | "wide" | "standard";
};

export const WorkspaceShell = forwardRef<HTMLElement, WorkspaceShellProps>(
  (
    {
      header,
      controls,
      children,
      footer,
      maxWidth = "wide",
      className = "",
      ...props
    },
    ref,
  ) => {
    const maxWidthClassName =
      maxWidth === "full"
        ? "max-w-none"
        : maxWidth === "standard"
          ? "max-w-6xl"
          : "max-w-7xl";

    return (
      <main
        ref={ref}
        className={[
          "min-h-screen bg-(--ec-color-background) p-6 md:p-8",
          className,
        ].join(" ")}
        {...props}
      >
        <div className={["mx-auto space-y-6", maxWidthClassName].join(" ")}>
          {header && <div>{header}</div>}
          {controls && <div>{controls}</div>}
          <div>{children}</div>
          {footer && <div>{footer}</div>}
        </div>
      </main>
    );
  },
);

WorkspaceShell.displayName = "WorkspaceShell";
