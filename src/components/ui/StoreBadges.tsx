import Image from "next/image";
import { StoreLink } from "@/components/analytics/StoreLink";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

export function StoreBadges({
  analyticsLocation = "store_badges",
  className = "",
}: {
  analyticsLocation?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mx-auto w-fit">
        <div className="flex flex-wrap items-center gap-3">
          <StoreLink
            href={APP_STORE_URL}
            platform="app_store"
            analyticsLocation={analyticsLocation}
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
          </StoreLink>

          <StoreLink
            href={GOOGLE_PLAY_URL}
            platform="google_play"
            analyticsLocation={analyticsLocation}
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
          </StoreLink>
        </div>
      </div>
    </div>
  );
}
