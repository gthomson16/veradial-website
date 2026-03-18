import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="VeraDial"
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
              Verified business calling. Purchase dedicated numbers, control
              your caller ID, and communicate with confidence.
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
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Compare
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.compare.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-xs text-text-muted">
            &copy; {new Date().getFullYear()} VeraDial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
