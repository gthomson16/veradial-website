import Image from "next/image";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto w-fit">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download VeraDial on the App Store"
            className="transition-opacity hover:opacity-85"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="w-[122px]"
            />
          </a>

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
      </div>
    </div>
  );
}
