import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt=""
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-display text-lg font-semibold">
                <span className="text-text-primary">Vera</span>
                <span className="text-accent">Dial</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              AI-powered business calling. Your AI assistant schedules,
              follows up, and handles the conversations you don&apos;t have time for.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Product
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <Link href="/compare" className="transition-colors hover:text-text-primary">
                Compare
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.compare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <Link href="/use-cases" className="transition-colors hover:text-text-primary">
                Use Cases
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.useCases.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Contact
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">Supported by</span>
            <a
              href="https://elevenlabs.io/startup-grants"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp"
                alt="Backed by ElevenLabs Grants"
                width={200}
                height={40}
                unoptimized
                className="opacity-70 transition-opacity hover:opacity-100"
              />
            </a>
          </div>
          <p className="text-center text-xs text-text-muted">
            &copy; {new Date().getFullYear()} VeraDial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
