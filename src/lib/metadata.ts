import type { Metadata } from "next";

export const SITE_URL = "https://veradial.com";
export const SITE_NAME = "VeraDial";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const DEFAULT_DESCRIPTION =
  "Your AI assistant makes calls on your behalf \u2014 scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.";

export const siteMetadata: Metadata = {
  title: {
    default: "VeraDial \u2014 AI-Powered Business Calling",
    template: "%s | VeraDial",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "AI calling",
    "AI phone assistant",
    "business calling",
    "caller ID",
    "AI appointment scheduling",
    "verified calling",
    "call recording",
    "business SMS",
  ],
  authors: [{ name: SITE_NAME }],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "VeraDial \u2014 AI-Powered Business Calling",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VeraDial \u2014 AI-Powered Business Calling",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};
