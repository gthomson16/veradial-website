import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "" : "opacity-30"} aria-hidden="true">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
          What Beta Users Say
        </p>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Don&apos;t take our word for it.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Featured pull-quote */}
          <figure className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-10 font-display text-[8rem] font-extralight leading-none text-accent/20 sm:-left-4 sm:-top-16 sm:text-[11rem]"
            >
              &ldquo;
            </span>
            <blockquote className="relative pl-6 sm:pl-10">
              <StarRating count={featured.stars} />
              <p className="mt-5 font-display text-2xl font-medium leading-[1.25] text-text-primary sm:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">
                {featured.quote}
              </p>
              <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <figcaption className="text-sm text-text-secondary">
                  <span className="block text-text-primary">{featured.tag}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-text-muted">
                    Beta user
                  </span>
                </figcaption>
                <div className="text-left sm:text-right">
                  <p className="font-display text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                    {featured.outcome}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-muted">
                    {featured.outcomeLabel}
                  </p>
                </div>
              </div>
            </blockquote>
          </figure>

          {/* Side notes */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((t) => (
              <figure
                key={t.tag}
                className="rounded-2xl border border-border bg-card/60 p-6"
              >
                <StarRating count={t.stars} />
                <blockquote className="mt-4 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
                  <span className="text-xs text-text-muted">{t.tag}</span>
                  <span className="text-right">
                    <span className="block font-display text-lg font-semibold tracking-tight text-accent">
                      {t.outcome}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      {t.outcomeLabel}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
