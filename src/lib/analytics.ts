import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

export type StorePlatform = "app_store" | "google_play";

const STORE_CLICK_EVENTS: Record<StorePlatform, string> = {
  app_store: "app_store_click",
  google_play: "google_play_click",
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

export function getStorePlatformFromHref(href: string): StorePlatform | null {
  if (href.startsWith(APP_STORE_URL)) {
    return "app_store";
  }

  if (href.startsWith(GOOGLE_PLAY_URL)) {
    return "google_play";
  }

  return null;
}

export function trackStoreClick({
  platform,
  location,
  linkUrl,
}: {
  platform: StorePlatform;
  location: string;
  linkUrl: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", STORE_CLICK_EVENTS[platform], {
    event_category: "download",
    event_label: platform,
    platform,
    location,
    page_path: `${window.location.pathname}${window.location.search}`,
    link_url: linkUrl,
    transport_type: "beacon",
  });
}
