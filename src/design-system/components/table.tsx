import { forwardRef } from "react";
import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export type TableDensity = "compact" | "default";

export type TableProps = HTMLAttributes<HTMLTableElement> & {
  density?: TableDensity;
};

export type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

const densityClasses: Record<TableDensity, string> = {
  compact:
    "[&_th]:px-(--ec-density-table-cell-x) [&_th]:py-(--ec-density-table-cell-y) [&_td]:px-(--ec-density-table-cell-x) [&_td]:py-(--ec-density-table-cell-y)",
  default: "[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3",
};

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className = "", density = "compact", ...props }, ref) => (
    <table
      ref={ref}
      className={[
        "w-full caption-bottom border-collapse text-left text-sm text-(--ec-color-text-primary)",
        densityClasses[density],
        className,
      ].join(" ")}
      {...props}
    />
  ),
);

export const TableHeader = forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className = "", ...props }, ref) => (
    <thead
      ref={ref}
      className={[
        "border-b border-(--ec-color-border) bg-(--ec-color-surface-muted)",
        className,
      ].join(" ")}
      {...props}
    />
  ),
);

export const TableBody = forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className = "", ...props }, ref) => <tbody ref={ref} className={className} {...props} />,
);

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className = "", ...props }, ref) => (
    <tr
      ref={ref}
      className={[
        "border-b border-(--ec-color-border-soft) transition-colors duration-(--ec-transition-fast)",
        "hover:bg-(--ec-color-row-hover) data-[state=selected]:bg-(--ec-color-row-selected)",
        className,
      ].join(" ")}
      {...props}
    />
  ),
);

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className = "", ...props }, ref) => (
    <th
      ref={ref}
      className={[
        "whitespace-nowrap align-middle text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-secondary)",
        className,
      ].join(" ")}
      {...props}
    />
  ),
);

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className = "", ...props }, ref) => (
    <td
      ref={ref}
      className={[
        "align-middle text-(--ec-color-text-primary)",
        className,
      ].join(" ")}
      {...props}
    />
  ),
);

Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableRow.displayName = "TableRow";
TableHead.displayName = "TableHead";
TableCell.displayName = "TableCell";
