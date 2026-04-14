import { Check, Minus, X } from "lucide-react";

type ComparisonValue = "yes" | "no" | "partial" | string;

export interface ComparisonTableRow {
  feature: string;
  primary: ComparisonValue;
  secondary: ComparisonValue;
}

function ComparisonValueCell({ value }: { value: ComparisonValue }) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
        <Check size={14} className="text-accent" />
      </span>
    );
  }

  if (value === "no") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
        <X size={14} className="text-text-muted" />
      </span>
    );
  }

  if (value === "partial") {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-secondary)]/15">
        <Minus
          size={14}
          className="text-[var(--color-accent-secondary)]"
        />
      </span>
    );
  }

  return <span className="text-sm text-text-secondary">{value}</span>;
}

interface ComparisonTableProps {
  caption: string;
  rows: ComparisonTableRow[];
  primaryLabel: string;
  secondaryLabel: string;
}

export function ComparisonTable({
  caption,
  rows,
  primaryLabel,
  secondaryLabel,
}: ComparisonTableProps) {
  return (
    <div
      className="mt-12 overflow-x-auto rounded-2xl border border-border"
      tabIndex={0}
      role="region"
      aria-label={caption}
    >
      <table className="w-full min-w-[30rem] border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-card/80">
          <tr>
            <th
              scope="col"
              className="px-5 py-4 text-left text-xs uppercase tracking-[0.2em] text-text-muted sm:px-6"
            >
              Feature
            </th>
            <th
              scope="col"
              className="w-[100px] px-3 py-4 text-center text-xs uppercase tracking-[0.2em] text-accent sm:w-[140px]"
            >
              {primaryLabel}
            </th>
            <th
              scope="col"
              className="w-[100px] px-3 py-4 text-center text-xs uppercase tracking-[0.2em] text-text-muted sm:w-[140px]"
            >
              {secondaryLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.feature}
              className={`${index !== rows.length - 1 ? "border-b border-border" : ""} ${
                index % 2 === 0 ? "bg-card/40" : "bg-transparent"
              }`}
            >
              <th
                scope="row"
                className="px-5 py-4 pr-4 text-left text-sm font-normal text-text-secondary sm:px-6"
              >
                {row.feature}
              </th>
              <td className="px-3 py-4 text-center align-middle">
                <ComparisonValueCell value={row.primary} />
              </td>
              <td className="px-3 py-4 text-center align-middle">
                <ComparisonValueCell value={row.secondary} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
