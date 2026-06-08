import type { ReactNode } from "react";
import { Label } from "./label";

export type FieldProps = {
  label: string;
  htmlFor?: string;
  helper?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function Field({
  label,
  htmlFor,
  helper,
  error,
  children,
  className = "",
}: FieldProps) {
  return (
    <div className={["space-y-2", className].join(" ")}>
      <Label htmlFor={htmlFor}>{label}</Label>

      {children}

      {error ? (
        <p className="text-xs text-(--ec-color-danger)">{error}</p>
      ) : helper ? (
        <p className="text-xs text-(--ec-color-text-muted)">{helper}</p>
      ) : null}
    </div>
  );
}