import * as React from 'react';

import { cn } from '../../lib/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neutral' | 'success' | 'warning' | 'danger';
}

const alertVariants: Record<NonNullable<AlertProps['variant']>, string> = {
  neutral: 'border-neutral-200 bg-neutral-50 text-neutral-800',
  success: 'border-[#b3e6d0] bg-[#f0faf5] text-[#006B43]',
  warning: 'border-amber-200 bg-amber-50 text-amber-800',
  danger: 'border-red-200 bg-red-50 text-red-800',
};

function Alert({ className, variant = 'neutral', ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="status"
      className={cn('relative w-full rounded-xl border px-4 py-3 text-[13px] leading-relaxed', alertVariants[variant], className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-title" className={cn('mb-1 text-[13px] text-current', className)} style={{ fontWeight: 700, ...props.style }} {...props} />;
}

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="alert-description" className={cn('text-[12px] opacity-85', className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription };
