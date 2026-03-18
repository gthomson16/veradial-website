import Image from "next/image";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto w-fit">
        <div className="flex flex-wrap items-center gap-3">
          <Image
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={135}
            height={40}
            className="w-[122px] opacity-50 grayscale"
          />
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={564}
            height={168}
            className="h-10 w-auto opacity-50 grayscale"
          />
        </div>
        <p className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
