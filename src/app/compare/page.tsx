import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";

export const metadata = buildPageMetadata({
  title: "How VeraDial Compares",
  description:
    "See how VeraDial stacks up against Google Voice, TextNow, Burner, Hushed, Sideline, and SpoofCard. Compare AI calling, verified caller ID, voice privacy, and more.",
  path: "/compare",
  keywords: [
    "VeraDial comparison",
    "AI calling app comparison",
    "business calling app alternatives",
    "Google Voice alternative",
    "second phone number app comparison",
    "verified caller ID",
  ],
});

const COMPARISONS = [
  {
    name: "Google Voice",
    href: "/compare/google-voice",
    tagline: "Free second number vs. verified business calling",
    highlights: [
      "AI-powered outbound calling",
      "STIR/SHAKEN A-level attestation",
      "No Google account required",
    ],
  },
  {
    name: "TextNow",
    href: "/compare/textnow",
    tagline: "Ad-supported free calling vs. professional AI calling",
    highlights: [
      "No ads or data selling",
      "Caller ID control",
      "AI call agents",
    ],
  },
  {
    name: "Burner",
    href: "/compare/burner",
    tagline: "Disposable numbers vs. verified business identity",
    highlights: [
      "Persistent verified numbers",
      "AI calling capability",
      "Call recording on every call",
    ],
  },
  {
    name: "Hushed",
    href: "/compare/hushed",
    tagline: "Privacy-focused second number vs. verified AI calling",
    highlights: [
      "STIR/SHAKEN verification",
      "Voice privacy effects",
      "AI-powered conversations",
    ],
  },
  {
    name: "Sideline",
    href: "/compare/sideline",
    tagline: "Traditional second line vs. AI-powered business calling",
    highlights: [
      "AI makes calls for you",
      "Voice effects and recording",
      "Verified caller identity",
    ],
  },
  {
    name: "SpoofCard",
    href: "/compare/spoofcard",
    tagline: "Caller ID spoofing vs. legitimate verified calling",
    highlights: [
      "Dedicated verified numbers",
      "Carrier-grade attestation",
      "Full call history and transcripts",
    ],
  },
];

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ComparePage() {
  return (
    <>
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            Comparisons
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            How VeraDial compares
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            VeraDial isn&apos;t another second number app. See how AI-powered
            business calling with verified caller ID stacks up against the
            alternatives.
          </p>
        </div>
      </section>

      {/* Comparison grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARISONS.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 60}>
                <Link href={item.href} className="block h-full">
                  <Card className="h-full p-6 group">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-xl font-semibold text-text-primary">
                        vs {item.name}
                      </h2>
                      <ArrowRight
                        size={18}
                        className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.tagline}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Ready to Switch?
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                More than a second number.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Get verified caller ID, AI agents, voice effects, and call
                recording — everything the alternatives don&apos;t offer.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/">
                  Learn More
                </Button>
              </div>
              <StoreBadges className="mt-6 justify-center" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
