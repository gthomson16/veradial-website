import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "VeraDial \u2014 AI-Powered Business Calling",
    template: "%s | VeraDial",
  },
  description:
    "Your AI assistant makes calls on your behalf \u2014 scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.",
  keywords: [
    "AI calling",
    "AI phone assistant",
    "business calling",
    "caller ID",
    "AI appointment scheduling",
    "verified calling",
    "voice effects",
    "business SMS",
  ],
  authors: [{ name: "VeraDial" }],
  metadataBase: new URL("https://veradial.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veradial.com",
    siteName: "VeraDial",
    title: "VeraDial \u2014 AI-Powered Business Calling",
    description:
      "Your AI assistant makes calls on your behalf \u2014 scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeraDial \u2014 AI-Powered Business Calling",
    description:
      "Your AI assistant makes calls on your behalf \u2014 scheduling appointments, following up with clients, and handling routine conversations with verified caller ID.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
