import Image from "next/image";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto w-fit">
        <div
          className="pointer-events-none flex flex-wrap items-center gap-3 select-none"
          aria-hidden="true"
        >
          <Image
            src="/app-store-badge.svg"
            alt=""
            width={135}
            height={40}
            className="w-[122px] opacity-50 grayscale"
          />
          <Image
            src="/google-play-badge.png"
            alt=""
            width={564}
            height={168}
            className="h-10 w-auto opacity-50 grayscale"
          />
        </div>
        <p className="sr-only">App Store and Google Play availability coming soon.</p>
        <p className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
