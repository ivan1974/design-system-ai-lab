import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "./button";
import type { ButtonProps } from "./button";

export type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root> & {
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  contentClassName?: string;
  overlayClassName?: string;
  contentProps?: ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
  overlayProps?: ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
  footer?: ReactNode;
};

export type DialogFooterProps = ComponentPropsWithoutRef<"div">;

export type DialogCloseProps = ButtonProps & {
  asChild?: boolean;
};

export function Dialog({
  trigger,
  title,
  description,
  children,
  cancelLabel = "Annuler",
  confirmLabel = "Créer l’action",
  contentClassName = "",
  overlayClassName = "",
  contentProps,
  overlayProps,
  footer,
  ...rootProps
}: DialogProps) {
  return (
    <DialogPrimitive.Root {...rootProps}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={["fixed inset-0 bg-black/40", overlayClassName].join(" ")}
          {...overlayProps}
        />

        <DialogPrimitive.Content
          className={[
            "fixed left-1/2 top-1/2 w-[min(520px,calc(100vw-32px))]",
            "-translate-x-1/2 -translate-y-1/2 rounded-(--ec-radius-lg)",
            "bg-(--ec-color-surface) p-6 shadow-(--ec-shadow-popover)",
            "focus-visible:outline-none",
            contentClassName,
          ].join(" ")}
          {...contentProps}
        >
          <div className="mb-6">
            <DialogPrimitive.Title className="text-lg font-semibold text-(--ec-color-text-primary)">
              {title}
            </DialogPrimitive.Title>

            {description && (
              <DialogPrimitive.Description className="mt-2 text-sm text-(--ec-color-text-secondary)">
                {description}
              </DialogPrimitive.Description>
            )}
          </div>

          {children}

          {footer ?? (
            <DialogFooter>
              <DialogClose variant="secondary">{cancelLabel}</DialogClose>
              <DialogClose>{confirmLabel}</DialogClose>
            </DialogFooter>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["mt-6 flex justify-end gap-2", className].join(" ")}
        {...props}
      />
    );
  },
);

DialogFooter.displayName = "DialogFooter";

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <DialogPrimitive.Close asChild>
          {children as ReactNode}
        </DialogPrimitive.Close>
      );
    }

    return (
      <DialogPrimitive.Close asChild>
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </DialogPrimitive.Close>
    );
  },
);

DialogClose.displayName = "DialogClose";