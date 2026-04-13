import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/metadata-helpers";
import { SITE_URL } from "@/lib/metadata";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { FounderPhoto } from "@/components/about/FounderPhoto";
import { Award, Shield, BadgeCheck, Linkedin, MapPin, ExternalLink } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "About VeraDial",
  description:
    "VeraDial is built by Graham Thomson in Toronto, Canada. Learn about the founder, the mission behind AI-powered business calling, and the technology that powers it.",
  path: "/about",
  keywords: [
    "VeraDial founder",
    "Graham Thomson",
    "AI calling app",
    "VeraDial Toronto",
    "about VeraDial",
  ],
});

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about#founder`,
    name: "Graham Thomson",
    jobTitle: "Founder & Developer",
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/graham-thomson.jpg`,
    sameAs: ["https://www.linkedin.com/in/graham-thomson16/"],
    worksFor: {
      "@type": "Organization",
      name: "VeraDial",
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    knowsAbout: [
      "AI voice technology",
      "telecommunications",
      "STIR/SHAKEN",
      "mobile application development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

const TRUST_CARDS = [
  {
    icon: Award,
    title: "Backed by ElevenLabs Grants",
    description:
      "Selected for the ElevenLabs Grants program, supporting innovative AI voice applications pushing the boundaries of what voice technology can do.",
  },
  {
    icon: Shield,
    title: "Twilio SOC 2 Infrastructure",
    description:
      "All calls route through Twilio\u2019s carrier-grade infrastructure with TLS encryption in transit and SOC 2 Type II compliance.",
  },
  {
    icon: BadgeCheck,
    title: "STIR/SHAKEN A-Level",
    description:
      "Purchased numbers carry A-level attestation \u2014 the highest level of caller identity verification \u2014 so your calls display as verified, not spam.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="outline"
            className="border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            About
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Built by a solo developer in Toronto
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            VeraDial is an independent product built with the belief that small
            businesses deserve the same calling tools as large enterprises
            &mdash; without the complexity or cost.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="mx-auto lg:mx-0">
                <FounderPhoto />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                  Founder &amp; Developer
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                  Graham Thomson
                </h2>
                <div className="mt-2 flex items-center gap-2 text-sm text-text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Toronto, Canada</span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-text-secondary">
                  I build products that solve problems I&apos;ve hit myself. As
                  someone who ran a small service business, I spent too many
                  hours on hold, chasing confirmations, and playing phone tag.
                  VeraDial started as a way to get that time back &mdash; an AI
                  that handles the calls you don&apos;t have time for.
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Before VeraDial, I built{" "}
                  <a
                    href="https://www.canscan.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
                  >
                    CanScan AI
                  </a>
                  , an app helping Canadians identify and support locally made
                  products. I care about building useful tools and shipping them
                  to real people.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/graham-thomson16/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/2 px-4 py-2 text-sm font-medium text-text-secondary transition-all hover:border-white/18 hover:bg-white/4 hover:text-text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-center text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              The Mission
            </p>
            <h2 className="mt-5 text-center font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Calling shouldn&apos;t be the bottleneck
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
              <p>
                Small businesses lose hours every week to phone calls that could
                be automated &mdash; appointment confirmations, follow-ups,
                rescheduling, reminders. The tools that exist are either built
                for call centers with enterprise pricing, or they&apos;re
                second-number apps that still expect you to make every call
                yourself.
              </p>
              <p>
                VeraDial sits in the gap. It gives you a real, verified business
                number with AI that actually makes calls on your behalf. Not a
                chatbot. Not an IVR menu. A voice that calls the number, has the
                conversation, and sends you the summary.
              </p>
              <p>
                The goal is simple: let solo operators, sales teams, and service
                businesses spend their time on the work &mdash; not on the
                phone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-center text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              Built On
            </p>
            <h2 className="mt-5 text-center font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Serious infrastructure, independent product
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_CARDS.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 60}>
                <Card hover={false} className="p-6">
                  <card.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {card.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(155deg,rgba(17,36,58,0.94),rgba(7,17,29,0.98))] p-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
                Get In Touch
              </p>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
                Try VeraDial early.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                VeraDial is launching soon on iOS and Android. Request early
                access to be among the first to use it.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="primary" href="/#download">
                  Request Early Access
                </Button>
                <Button variant="ghost" href="mailto:support@veradial.com">
                  Email Me
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
