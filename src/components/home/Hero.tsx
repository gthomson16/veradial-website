import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[88px]">
      <GradientMesh />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="min-w-0 max-w-2xl">
          <Image
            src="/icon.png"
            alt="VeraDial"
            width={72}
            height={72}
            className="rounded-2xl"
          />

          <Badge
            variant="outline"
            className="mt-5 border-accent/20 bg-card/70 text-text-primary backdrop-blur-sm"
          >
            AI-powered business calling
          </Badge>

          <h1 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] min-[420px]:text-4xl sm:text-6xl lg:text-7xl lg:leading-[0.98] lg:tracking-[-0.04em]">
            Your AI assistant calls
            <span className="block text-accent">so you don&apos;t have to.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg lg:max-w-xl lg:text-xl">
            VeraDial&apos;s AI makes calls on your behalf &mdash; scheduling
            appointments, following up with clients, and handling the
            conversations you don&apos;t have time for.
          </p>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" href={GOOGLE_PLAY_URL}>
                Download for Android
              </Button>
              <Button variant="ghost" href="/#pricing">
                See Pricing
              </Button>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Available now on Google Play. iOS coming soon.
            </p>
            <a
              href="#how-it-works"
              className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"
              />
              Hear a 31-second demo call
              <span aria-hidden="true">&rarr;</span>
            </a>
            <StoreBadges className="mt-6" />
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <span className="text-accent">&#10003;</span>
              STIR/SHAKEN A-level attestation
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <span className="text-accent">&#128274;</span>
              Twilio SOC 2 infrastructure
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <span className="text-accent">&#127758;</span>
              US + Canada coverage
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative mx-auto w-[280px] sm:w-[300px]">
            <div className="rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[2.25rem]">
                <Image
                  src="/screenshots/raw-captures/ai-composer-updated.png"
                  alt="VeraDial AI calling with presets and custom goals"
                  width={1320}
                  height={2868}
                  sizes="(max-width: 640px) 280px, 300px"
                  priority
                  className="w-full"
                />
              </div>
            </div>

            <div className="absolute -left-4 bottom-24 hidden rounded-2xl border border-accent/20 bg-card/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block sm:-left-16">
              <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                AI Calling
              </p>
              <p className="mt-1 font-display text-lg text-text-primary">
                Schedule · Follow up · Confirm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
