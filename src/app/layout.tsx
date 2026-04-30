import localFont from "next/font/local";
import { siteMetadata } from "@/lib/metadata";
import { ProductionAnalytics } from "@/components/analytics/ProductionAnalytics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import "./globals.css";

const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "200 700",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata = siteMetadata;

const GA_ID = "G-TFH4BRGT13";
const IS_PRODUCTION_DEPLOYMENT = process.env.VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${satoshi.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <GrainOverlay />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ProductionAnalytics
          gaId={GA_ID}
          enabled={IS_PRODUCTION_DEPLOYMENT}
        />
      </body>
    </html>
  );
}
