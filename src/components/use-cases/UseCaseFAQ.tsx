import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export type UseCaseFAQItem = {
  question: string;
  answer: string;
};

interface UseCaseFAQProps {
  items: readonly UseCaseFAQItem[];
  eyebrow?: string;
  heading: string;
}

/**
 * Shared FAQ section for use-case pages. Renders visible cards + emits
 * FAQPage JSON-LD so the answers are indexable as rich results.
 * Always emit the JSON-LD from the same source as the visible content to
 * keep Google's content-match requirement satisfied.
 */
export function UseCaseFAQ({
  items,
  eyebrow = "FAQ",
  heading,
}: UseCaseFAQProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                {eyebrow}
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                {heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 space-y-4">
            {items.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 50}>
                <Card hover={false} className="p-6 sm:p-7">
                  <h3 className="font-display text-base font-semibold text-text-primary sm:text-lg">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.answer}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
