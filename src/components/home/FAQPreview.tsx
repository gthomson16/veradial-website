import { FAQ_PREVIEW } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function FAQPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
          FAQ
        </p>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
          Common questions.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FAQ_PREVIEW.map((faq) => (
            <Card key={faq.question} hover={false} className="h-full p-6">
              <h4 className="font-display text-base font-medium text-text-primary">
                {faq.question}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" href="/faq">
            See All FAQ &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
