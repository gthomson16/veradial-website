import Image from "next/image";

export function HeroPhone() {
  return (
    <div
      className="relative flex justify-center"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative mx-auto w-[280px] sm:w-[300px]"
        style={{
          transform: "rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="rounded-[3rem] border-[3px] border-white/10 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-[2.25rem]">
            <Image
              src="/screenshots/raw-captures/ai-composer-updated.png"
              alt="VeraDial AI calling with presets and custom goals"
              width={1320}
              height={2868}
              sizes="(max-width: 640px) 280px, 300px"
              priority
              quality={70}
              className="w-full"
            />
          </div>
        </div>

        <div
          className="absolute -left-4 bottom-24 hidden rounded-2xl border border-accent/20 bg-card/90 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block sm:-left-16"
          style={{ transform: "translateZ(40px)" }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
            AI Calling
          </p>
          <p className="mt-1 font-display text-lg text-text-primary">
            Schedule &middot; Follow up &middot; Confirm
          </p>
        </div>
      </div>
    </div>
  );
}
