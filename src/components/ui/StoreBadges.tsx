import Image from "next/image";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto w-fit">
        <div className="flex flex-wrap items-center gap-3">
          {/* Apple — still coming soon */}
          <div className="pointer-events-none select-none" aria-hidden="true">
            <Image
              src="/app-store-badge.svg"
              alt=""
              width={135}
              height={40}
              className="w-[122px] opacity-50 grayscale"
            />
          </div>

          {/* Google Play — live */}
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get VeraDial on Google Play"
            className="transition-opacity hover:opacity-85"
          >
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={564}
              height={168}
              className="h-10 w-auto"
            />
          </a>
        </div>
        <p className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
          iOS coming soon
        </p>
      </div>
    </div>
  );
}
