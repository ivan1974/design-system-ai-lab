import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/utils';

type BadgeVariant = 'neutral' | 'subtle' | 'success' | 'info' | 'warning' | 'danger';
type BadgeSize = 'xs' | 'sm';
type BadgeShape = 'pill' | 'rounded';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
  children: ReactNode;
}

const baseClasses = 'inline-flex items-center border whitespace-nowrap';

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-neutral-100 text-neutral-600 border-neutral-200',
  subtle: 'bg-neutral-50 text-neutral-600 border-neutral-200',
  success: 'bg-[#f0faf5] text-[#00985F] border-[#b3e6d0]',
  info: 'bg-blue-50 text-blue-700 border-blue-200',
  warning: 'bg-amber-50 text-amber-600 border-amber-200',
  danger: 'bg-red-50 text-red-600 border-red-200',
};

const sizeClasses: Record<BadgeSize, string> = {
  xs: 'px-1.5 py-0.5 text-[10px]',
  sm: 'px-2 py-0.5 text-[11px]',
};

const shapeClasses: Record<BadgeShape, string> = {
  pill: 'rounded-full',
  rounded: 'rounded-md',
};

export function Badge({
  variant = 'neutral',
  size = 'sm',
  shape = 'pill',
  className,
  style,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], shapeClasses[shape], className)}
      style={{ fontWeight: 500, ...style }}
      {...props}
    >
      {children}
    </span>
  );
}
