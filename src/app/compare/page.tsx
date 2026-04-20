import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
} from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StoreBadges } from "@/components/ui/StoreBadges";

const PAGE_TITLE = "VeraDial Alternatives & Comparisons";
const PAGE_DESCRIPTION =
  "Compare VeraDial with Google Voice, OpenPhone, Grasshopper, Line2, iPlum, Dialpad, RingCentral, Vonage, and more to find the right business calling app.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/compare",
  keywords: [
    "VeraDial comparison",
    "AI calling app comparison",
    "business calling app alternatives",
    "Google Voice alternative",
    "second phone number app comparison",
    "verified caller ID",
    "OpenPhone alternative",
    "Grasshopper alternative",
    "Dialpad alternative",
    "RingCentral alternative",
    "Vonage alternative",
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
      "Call recording and transcription",
      "AI-powered conversations",
    ],
  },
  {
    name: "Sideline",
    href: "/compare/sideline",
    tagline: "Traditional second line vs. AI-powered business calling",
    highlights: [
      "AI makes calls for you",
      "Call recording and transcription",
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
  {
    name: "OpenPhone",
    href: "/compare/openphone",
    tagline: "Team VoIP platform vs. solo AI calling powerhouse",
    highlights: [
      "AI makes calls, not just summaries",
      "Caller ID control",
      "No per-seat pricing",
    ],
  },
  {
    name: "Grasshopper",
    href: "/compare/grasshopper",
    tagline: "Traditional call forwarding vs. modern AI calling",
    highlights: [
      "Dedicated VoIP, not call forwarding",
      "AI-powered outbound calls",
      "Lower price, more features",
    ],
  },
  {
    name: "Dialpad",
    href: "/compare/dialpad",
    tagline: "Enterprise contact center vs. focused AI calling",
    highlights: [
      "AI that calls, not just coaches",
      "No enterprise bloat",
      "Instant setup, no admin portal",
    ],
  },
  {
    name: "RingCentral",
    href: "/compare/ringcentral",
    tagline: "Full UCaaS suite vs. focused AI calling platform",
    highlights: [
      "Half the price, focused features",
      "AI agent outbound calling",
      "No complex setup required",
    ],
  },
  {
    name: "Vonage",
    href: "/compare/vonage",
    tagline: "Legacy platform vs. modern AI calling app",
    highlights: [
      "Active development, not legacy maintenance",
      "AI calling out of the box",
      "Verified caller identity",
    ],
  },
  {
    name: "Line2",
    href: "/compare/line2",
    tagline: "Spam-flagged second line vs. verified AI calling",
    highlights: [
      "Calls that get answered, not flagged",
      "AI agents + call recording",
      "Lower price, more features",
    ],
  },
  {
    name: "iPlum",
    href: "/compare/iplum",
    tagline: "Compliance-focused phone vs. AI-powered business calling",
    highlights: [
      "Verified caller identity",
      "AI-powered outbound calls",
      "Modern app experience",
    ],
  },
];

const MATRIX_COMPETITORS = [
  { key: "veradial", name: "VeraDial", href: null },
  { key: "google-voice", name: "Google Voice", href: "/compare/google-voice" },
  { key: "openphone", name: "OpenPhone (now Quo)", href: "/compare/openphone" },
  { key: "grasshopper", name: "Grasshopper", href: "/compare/grasshopper" },
  { key: "ringcentral", name: "RingCentral", href: "/compare/ringcentral" },
  { key: "dialpad", name: "Dialpad", href: "/compare/dialpad" },
] as const;

type CellValue = { text: string; strong?: boolean; icon?: "check" | "dash" };

const MATRIX_ROWS: { label: string; cells: Record<string, CellValue> }[] = [
  {
    label: "Autonomous outbound agent",
    cells: {
      veradial: { text: "Yes", icon: "check", strong: true },
      "google-voice": { text: "No", icon: "dash" },
      openphone: { text: "No", icon: "dash" },
      grasshopper: { text: "No", icon: "dash" },
      ringcentral: { text: "No", icon: "dash" },
      dialpad: { text: "Roadmap" },
    },
  },
  {
    label: "STIR/SHAKEN attestation",
    cells: {
      veradial: { text: "A-level", strong: true },
      "google-voice": { text: "Not published" },
      openphone: { text: "A-level" },
      grasshopper: { text: "Not published" },
      ringcentral: { text: "A-level" },
      dialpad: { text: "A-level" },
    },
  },
  {
    label: "Starting price / month",
    cells: {
      veradial: { text: "$9.99", strong: true },
      "google-voice": { text: "$10 / user" },
      openphone: { text: "$15 / user" },
      grasshopper: { text: "$14" },
      ringcentral: { text: "$20 / user" },
      dialpad: { text: "$15 / user" },
    },
  },
  {
    label: "Free trial",
    cells: {
      veradial: { text: "3 days", strong: true },
      "google-voice": { text: "No trial", icon: "dash" },
      openphone: { text: "7 days" },
      grasshopper: { text: "7 days" },
      ringcentral: { text: "14 days" },
      dialpad: { text: "14 days" },
    },
  },
  {
    label: "Call recording",
    cells: {
      veradial: { text: "Included", icon: "check", strong: true },
      "google-voice": { text: "Paid tier" },
      openphone: { text: "Paid tier" },
      grasshopper: { text: "Included", icon: "check" },
      ringcentral: { text: "Paid tier" },
      dialpad: { text: "Included", icon: "check" },
    },
  },
  {
    label: "Setup",
    cells: {
      veradial: { text: "Install app", strong: true },
      "google-voice": { text: "Google account" },
      openphone: { text: "Self-serve" },
      grasshopper: { text: "Self-serve" },
      ringcentral: { text: "Self-serve / sales" },
      dialpad: { text: "Self-serve" },
    },
  },
];

function CellIcon({ icon }: { icon?: "check" | "dash" }) {
  if (icon === "check") {
    return <Check size={14} className="inline text-accent" strokeWidth={2.5} aria-hidden="true" />;
  }
  if (icon === "dash") {
    return <Minus size={14} className="inline text-text-muted" strokeWidth={2.5} aria-hidden="true" />;
  }
  return null;
}

function FeatureMatrix() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              At a glance
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              How VeraDial compares on the things that matter.
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card/40 [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-card/90 px-5 py-4 text-left text-xs font-medium uppercase tracking-[0.18em] text-text-muted backdrop-blur"
                >
                  Feature
                </th>
                {MATRIX_COMPETITORS.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    className={`px-5 py-4 text-left font-display text-[15px] font-semibold ${
                      c.key === "veradial"
                        ? "bg-accent/[0.06] text-accent"
                        : "text-text-primary"
                    }`}
                  >
                    {c.href ? (
                      <Link
                        href={c.href}
                        className="underline decoration-border decoration-[1px] underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {c.name}
                      </Link>
                    ) : (
                      c.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX_ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border/60 last:border-b-0">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-card/90 px-5 py-4 text-left text-sm font-medium text-text-secondary backdrop-blur"
                  >
                    {row.label}
                  </th>
                  {MATRIX_COMPETITORS.map((c) => {
                    const cell = row.cells[c.key];
                    const isVera = c.key === "veradial";
                    return (
                      <td
                        key={c.key}
                        className={`px-5 py-4 ${
                          isVera ? "bg-accent/[0.06]" : ""
                        } ${cell.strong ? "text-text-primary" : "text-text-secondary"}`}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <CellIcon icon={cell.icon} />
                          {cell.text}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-text-muted">
          Competitor values drawn from each provider&rsquo;s public pricing and
          feature pages. Accurate as of publish. Click a competitor name above
          for the full VeraDial-vs breakdown.
        </p>
      </div>
    </section>
  );
}

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

function CompareCollectionJsonLd() {
  const jsonLd = buildCollectionPageJsonLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/compare",
    itemListName: "VeraDial comparison pages",
    items: COMPARISONS.map((comparison) => ({
      name: `VeraDial vs ${comparison.name}`,
      path: comparison.href,
      description: comparison.tagline,
    })),
  });

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
      <CompareCollectionJsonLd />
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[88px]">
        <GradientMesh />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center">
          <Badge
            variant="hero"
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

      <FeatureMatrix />

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
                Get verified caller ID, AI agents, call recording, and
                transcription — everything the alternatives don&apos;t offer.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="ghost" href="/">
                  Explore VeraDial Features
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
