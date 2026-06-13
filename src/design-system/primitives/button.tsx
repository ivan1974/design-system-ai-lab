import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center transition-all whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgba(0,152,95,0.12)]',
  {
    variants: {
      variant: {
        primary: 'gap-1.5 rounded-lg text-white text-[13px] hover:opacity-90 bg-[#00985F]',
        secondary: 'gap-1.5 rounded-lg text-neutral-700 text-[13px] border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300',
        ghost: 'rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100',
        filter: 'gap-1.5 rounded-lg text-[13px] border border-neutral-200 text-neutral-600 bg-white hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800',
        icon: 'rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100',
      },
      size: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2.5',
        iconSm: 'h-7 w-7',
        iconMd: 'h-8 w-8',
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'filter',
        active: true,
        className: 'border-[#00985F] text-[#00985F] bg-[#f0faf5]',
      },
    ],
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
      active: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant = 'secondary',
  size,
  active = false,
  asChild = false,
  icon,
  style,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const resolvedSize = size ?? (variant === 'icon' ? 'iconMd' : 'md');
  const isPrimary = variant === 'primary';

  return (
    <Comp
      data-slot="button"
      type={asChild ? undefined : type}
      className={cn(buttonVariants({ variant, size: resolvedSize, active, className }))}
      style={{
        fontWeight: isPrimary ? 600 : 500,
        ...style,
      }}
      {...props}
    >
      {icon}
      {children}
    </Comp>
  );
}

export { buttonVariants };
