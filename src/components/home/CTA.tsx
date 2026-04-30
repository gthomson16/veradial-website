import Link from "next/link";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { isDemoFunnelEnabled } from "@/lib/demo-flags";

export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-32 sm:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_50%,rgba(115,242,195,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="min-w-0">
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
            Stop answering.
            <span className="block text-accent">Start calling back.</span>
          </h2>

          <StoreBadges className="mt-10 [&_.mx-auto]:mx-0" />

          {isDemoFunnelEnabled ? (
            <Link
              href="/try"
              className="mt-5 inline-flex text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-text-primary hover:decoration-accent"
            >
              Try it live first
            </Link>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"
              />
              3-day free trial
            </span>
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"
              />
              100 credits included
            </span>
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"
              />
              Cancel anytime
            </span>
          </div>

          <p className="mt-6 text-xs text-text-muted">
            Not ready?{" "}
            <Link
              href="/pricing"
              className="underline decoration-text-muted/40 underline-offset-4 transition-colors hover:text-text-secondary hover:decoration-accent"
            >
              See pricing
            </Link>
            <span className="mx-2 text-text-muted/40">&middot;</span>
            <Link
              href="/faq"
              className="underline decoration-text-muted/40 underline-offset-4 transition-colors hover:text-text-secondary hover:decoration-accent"
            >
              Read FAQ
            </Link>
          </p>
        </div>

        <figure className="relative min-w-0">
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-8 font-display text-[8rem] font-extralight leading-none text-accent/20 sm:-left-6 sm:-top-12 sm:text-[12rem]"
          >
            &ldquo;
          </span>
          <blockquote className="relative pl-6 sm:pl-10">
            <p className="font-display text-xl font-medium leading-snug text-text-primary sm:text-2xl lg:text-[1.75rem]">
              VeraDial confirmed 12 appointments last week while I was
              elbow-deep in a water heater install.
            </p>
            <figcaption className="mt-6 text-sm">
              <span className="block text-text-primary">
                Solo plumber, Austin TX
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-text-muted">
                Illustrative scenario
              </span>
            </figcaption>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
