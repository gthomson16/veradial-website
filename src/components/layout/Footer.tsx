import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://x.com/VeraDialApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VeraDial on X"
                className="text-text-secondary transition-colors hover:text-text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21.5l-7.5 8.574L22.5 22h-6.75l-5.285-6.91L4.5 22H1.244l8.02-9.167L1.5 2h6.925l4.776 6.31L18.244 2Zm-2.368 18.008h1.862L7.215 3.89H5.23l10.646 16.118Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/112327687/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VeraDial on LinkedIn"
                className="text-text-secondary transition-colors hover:text-text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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

        {/* Deep content row — Compare / Use Cases / Numbers */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3">
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

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              <Link href="/numbers" className="transition-colors hover:text-text-primary">
                Numbers
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.numbers.map((link) => (
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
