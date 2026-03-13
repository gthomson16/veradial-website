import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "VeraDial \u2014 Verified Business Calling",
    template: "%s | VeraDial",
  },
  description:
    "Purchase dedicated phone numbers, control your caller ID, and make business calls through secure, carrier-grade infrastructure.",
  keywords: [
    "business calling",
    "caller ID",
    "phone number",
    "verified calling",
    "STIR SHAKEN",
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
    title: "VeraDial \u2014 Verified Business Calling",
    description:
      "Purchase dedicated phone numbers, control your caller ID, and make business calls through secure, carrier-grade infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeraDial \u2014 Verified Business Calling",
    description:
      "Purchase dedicated phone numbers, control your caller ID, and make business calls through secure, carrier-grade infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
