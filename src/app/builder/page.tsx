import type { Metadata } from "next";
import { BuilderForm } from "@/components/builder/BuilderForm";

export const metadata: Metadata = {
  title: "See VeraDial answer for your business — Demo Builder",
  description:
    "Paste your website. We'll generate a preview of how VeraDial's AI receptionist would answer for your business.",
};

export default function BuilderPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">
          See VeraDial answer for your business
        </h1>
        <p className="mt-3 text-white/70">
          Paste your website URL and we&apos;ll generate a preview of how
          VeraDial&apos;s AI receptionist would greet your callers, in a few
          seconds.
        </p>
      </header>

      <BuilderForm />
    </main>
  );
}
