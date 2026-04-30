"use client";

import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { trackStoreClick, type StorePlatform } from "@/lib/analytics";
import {
  getButtonClasses,
  type ButtonVariant,
} from "@/components/ui/buttonStyles";

interface StoreButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  analyticsLocation: string;
  children: ReactNode;
  href: string;
  platform: StorePlatform;
  variant?: ButtonVariant;
}

export function StoreButton({
  analyticsLocation,
  children,
  className = "",
  href,
  onClick,
  platform,
  variant = "primary",
  ...props
}: StoreButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackStoreClick({
      platform,
      location: analyticsLocation,
      linkUrl: href,
    });

    onClick?.(event);
  }

  return (
    <a
      href={href}
      className={getButtonClasses({ variant, className })}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
