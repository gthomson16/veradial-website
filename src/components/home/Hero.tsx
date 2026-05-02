import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { isDemoFunnelEnabled } from "@/lib/demo-flags";
import { HeroPhone } from "./HeroPhone";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[88px]">
      <GradientMesh />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="min-w-0 max-w-2xl">
          <Image
            src="/icon-216.webp"
            alt="VeraDial"
            width={72}
            height={72}
            className="rounded-2xl"
            priority
            unoptimized
          />

          <Badge variant="hero" className="mt-5">
            AI-powered business calling
          </Badge>

          <h1 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] min-[420px]:text-4xl sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
            Your AI assistant calls{" "}
            <span className="block text-text-primary">
              so you{" "}
              <span className="text-accent underline decoration-accent/60 decoration-[0.08em] underline-offset-[0.12em]">
                don&rsquo;t
              </span>{" "}
              have to.
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg lg:max-w-xl lg:text-xl">
            VeraDial&apos;s AI makes calls on your behalf &mdash; scheduling
            appointments, following up with clients, and handling the
            conversations you don&apos;t have time for.
          </p>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              {isDemoFunnelEnabled ? (
                <>
                  <Button variant="primary" href="/try">
                    Try a live AI call
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>
                  <Button variant="ghost" href="#download">
                    Download the app
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="primary" href="#download">
                    Download the app
                  </Button>
                  <Button variant="ghost" href="#how-it-works">
                    <PlayCircle size={16} aria-hidden="true" />
                    Hear the demo call
                  </Button>
                </>
              )}
              <Button variant="ghost" href="/#pricing">
                See Pricing
              </Button>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              {isDemoFunnelEnabled
                ? "No app install required. VeraDial texts first, then calls only after you confirm."
                : "Available now on the App Store and Google Play."}
            </p>
            {isDemoFunnelEnabled ? (
              <Link
                href="/try"
                className="mt-4 inline-flex max-w-xl items-start gap-3 rounded-2xl border border-accent/25 bg-accent/[0.06] px-4 py-3 text-left transition-colors hover:border-accent/45 hover:bg-accent/10"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-accent"
                  style={{ animation: "call-pulse 1.8s ease-out infinite" }}
                />
                <span>
                  <span className="block text-sm font-semibold text-text-primary">
                    Try it on your own phone in about a minute.
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-text-secondary">
                    Pick a scenario, verify by SMS, and watch the AI place a real outbound call.
                  </span>
                </span>
              </Link>
            ) : null}
            <StoreBadges className="mt-6" />
          </div>
        </div>

        <HeroPhone />
      </div>
    </section>
  );
}
