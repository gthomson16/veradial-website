import Image from "next/image";

const SCREENS = [
  {
    src: "/screenshots/raw-captures/numbers-updated.png",
    alt: "Number management with purchased and verified numbers",
    label: "Number Management",
  },
  {
    src: "/screenshots/raw-captures/ai-composer-updated.png",
    alt: "AI calling with presets and custom goals",
    label: "AI Calling",
  },
  {
    src: "/screenshots/raw-captures/ai-detail-updated.png",
    alt: "AI call transcript and summary",
    label: "Call Transcripts",
  },
  {
    src: "/screenshots/raw-captures/call-map-updated.png",
    alt: "Call activity mapped across US and Canada",
    label: "Call Map",
  },
];

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="overflow-hidden rounded-[2.25rem]">{children}</div>
    </div>
  );
}

export function AppPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
            Inside the App
          </p>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
            The app, at a glance.
          </h2>
        </div>

        <div
          className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:snap-none sm:items-end sm:justify-center sm:gap-8 sm:overflow-x-visible sm:pb-0 lg:gap-12"
          tabIndex={0}
          role="region"
          aria-label="App preview carousel"
        >
          {SCREENS.map((screen, index) => {
            const isCenter = index === 1 || index === 2;
            const imageSizes = isCenter
              ? "(max-width: 640px) 200px, (max-width: 1024px) 220px, 260px"
              : "(max-width: 640px) 200px, (max-width: 1024px) 190px, 230px";
            return (
              <div key={screen.src} className="flex shrink-0 snap-center flex-col items-center gap-4">
                <PhoneFrame
                  className={`w-[200px] ${
                    isCenter
                      ? "sm:w-[220px] lg:w-[260px]"
                      : "sm:w-[190px] lg:w-[230px] sm:opacity-85"
                  }`}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1320}
                    height={2868}
                    sizes={imageSizes}
                    className="w-full"
                  />
                </PhoneFrame>
                <p className="text-sm text-text-secondary">{screen.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
