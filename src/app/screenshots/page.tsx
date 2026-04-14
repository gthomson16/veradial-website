import Image from "next/image";
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
} from "@/lib/metadata-helpers";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/home/CTA";

const PAGE_TITLE = "VeraDial App Screenshots";
const PAGE_DESCRIPTION =
  "See VeraDial in action — AI calling, call transcripts, number management, voicemail, call map, SMS, and more.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/screenshots",
  keywords: [
    "VeraDial app",
    "VeraDial screenshots",
    "AI calling app",
    "business calling app",
    "call transcript app",
    "business phone number app",
  ],
});

const SCREENSHOTS = [
  {
    src: "/screenshots/app-store/01-hero.png",
    title: "Your Business Phone",
    alt: "VeraDial overview showing AI calling, number management, and call history",
  },
  {
    src: "/screenshots/app-store/02-ai-call.png",
    title: "AI Calling",
    alt: "Set a goal and let AI make the call for you",
  },
  {
    src: "/screenshots/app-store/03-numbers.png",
    title: "Number Management",
    alt: "Up to 5 business lines with local and toll-free numbers",
  },
  {
    src: "/screenshots/app-store/04-ai-results.png",
    title: "Call Transcripts",
    alt: "Full transcript and summary after every AI call",
  },
  {
    src: "/screenshots/app-store/05-voicemail.png",
    title: "AI Voicemail",
    alt: "Generate professional voicemail greetings with AI voices",
  },
  {
    src: "/screenshots/app-store/06-history.png",
    title: "Call History",
    alt: "Unified timeline of voice calls, AI calls, and voicemail",
  },
  {
    src: "/screenshots/app-store/07-dialer.png",
    title: "Outbound Calls",
    alt: "Dialer with caller ID selection and call recording",
  },
  {
    src: "/screenshots/app-store/08-call-map.png",
    title: "Call Map",
    alt: "Geographic view of all call activity across US and Canada",
  },
  {
    src: "/screenshots/app-store/09-messages.png",
    title: "Business SMS",
    alt: "Send and receive texts from any business number",
  },
];

function BreadcrumbJsonLd() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Screenshots", path: "/screenshots" },
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ScreenshotsPage() {
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
            Inside the App
          </Badge>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            See the app in action
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            AI calling, verified business numbers, call transcripts, voicemail,
            SMS, and more — all from one app.
          </p>
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCREENSHOTS.map((screen, index) => (
              <ScrollReveal key={screen.src} delay={index * 60}>
                <Card hover={false} className="overflow-hidden p-0">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1320}
                    height={2868}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full"
                  />
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
