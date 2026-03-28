import { TESTIMONIALS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "" : "opacity-30"}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
          What Beta Users Say
        </p>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Don&apos;t take our word for it.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="h-full p-6">
              <StarRating count={t.stars} />
              <blockquote className="mt-4 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/12 text-xs font-semibold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
