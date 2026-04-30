"use client";

import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { trackStoreClick, type StorePlatform } from "@/lib/analytics";

interface StoreLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  analyticsLocation: string;
  children: ReactNode;
  href: string;
  platform: StorePlatform;
}

export function StoreLink({
  analyticsLocation,
  children,
  href,
  onClick,
  platform,
  ...props
}: StoreLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackStoreClick({
      platform,
      location: analyticsLocation,
      linkUrl: href,
    });

    onClick?.(event);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
