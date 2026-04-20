import { CheckCircle2, MinusCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { CompareVerdict } from "@/lib/compare-verdicts";

interface BottomLineProps {
  verdict: CompareVerdict;
}

/**
 * Shared "Bottom Line" verdict section for /compare/* pages.
 * Renders two side-by-side "Pick X if..." cards plus a short summary passage.
 * The summary is written for passage-level citability by AI search tools.
 */
export function BottomLine({ verdict }: BottomLineProps) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,27,46,0.28),transparent_28%,rgba(11,27,46,0.18))]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Bottom Line
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Which should you pick?
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ScrollReveal>
            <Card
              glow
              hover={false}
              className="h-full bg-[linear-gradient(180deg,rgba(115,242,195,0.08),rgba(255,255,255,0.02))] p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={22} className="shrink-0 text-accent" />
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Pick VeraDial if...
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                {verdict.pickVeraDialWhen}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <Card
              hover={false}
              className="h-full border-[var(--color-accent-secondary)]/20 bg-[linear-gradient(180deg,rgba(255,191,105,0.05),rgba(255,255,255,0.01))] p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <MinusCircle
                  size={22}
                  className="shrink-0 text-[var(--color-accent-secondary)]"
                />
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Pick {verdict.competitorName} if...
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                {verdict.pickCompetitorWhen}
              </p>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160}>
          <div className="mx-auto mt-10 max-w-3xl">
            <Card
              hover={false}
              className="border-accent/20 bg-card/70 p-6 sm:p-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted">
                The short version
              </p>
              <p className="mt-3 text-base leading-relaxed text-text-primary sm:text-lg">
                {verdict.summary}
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
