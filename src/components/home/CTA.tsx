import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { EARLY_ACCESS_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
            Ready When You Are
          </p>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            Let AI handle the calls you don&apos;t want to make.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
            Coming soon to iOS and Android. Reach out now and we&apos;ll add you
            to the early-access list.
          </p>
          <div className="mt-8">
            <Button variant="primary" href={EARLY_ACCESS_URL}>
              Email for Early Access
            </Button>
          </div>
          <p className="mt-3 text-xs text-text-muted">
            This opens your email client with a pre-filled request to support.
          </p>
          <StoreBadges className="mt-6 justify-center" />
        </div>
      </div>
    </section>
  );
}
