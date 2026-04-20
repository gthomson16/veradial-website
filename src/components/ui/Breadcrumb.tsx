import Link from "next/link";
import { Fragment } from "react";

export type BreadcrumbItem = {
  label: string;
  /** Omit `href` for the final, current-page segment. */
  href?: string;
};

/**
 * Shared breadcrumb nav used above page H1s. Renders as
 *   Home / Parent / Current
 * matching the inline pattern previously repeated across 22 pages.
 */
export function Breadcrumb({
  items,
  className = "mb-4",
}: {
  items: BreadcrumbItem[];
  /** Override the default `mb-4` spacing. Other nav classes are fixed. */
  className?: string;
}) {
  return (
    <nav
      className={`text-sm text-text-muted ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <Fragment key={`${index}-${item.label}`}>
          {index > 0 && (
            <span aria-hidden="true" className="mx-2">
              /
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-text-secondary"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-secondary">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
