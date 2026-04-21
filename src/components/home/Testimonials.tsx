import { USE_CASE_SCENARIOS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Who it&rsquo;s for
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Three kinds of busy.
              <span className="block text-text-muted">One app picks up.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Real estate, home services, sales &mdash; VeraDial fits wherever
            the phone gets in the way. Below are illustrative scenarios that
            show the shape of the work, not attributed testimonials.
          </p>
        </div>

        <ul className="mt-16 grid list-none gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 lg:grid-cols-3">
          {USE_CASE_SCENARIOS.map((item) => (
            <li
              key={item.role}
              className="group relative flex flex-col bg-bg p-8 sm:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/0 transition-colors duration-300 group-hover:bg-accent/40"
              />

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/60 text-accent">
                  <item.icon size={17} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-text-muted">
                  {item.role}
                </p>
              </div>

              <div className="mt-10 flex items-baseline gap-3">
                <span className="font-display text-5xl font-semibold tracking-[-0.03em] text-accent sm:text-[3.5rem]">
                  {item.metric}
                </span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-text-muted">
                  {item.metricLabel}
                </span>
              </div>

              <p className="mt-6 text-[0.95rem] leading-relaxed text-text-secondary">
                {item.scenario}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
