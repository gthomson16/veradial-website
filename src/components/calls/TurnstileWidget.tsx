"use client";

import { useEffect, useRef } from "react";
import { DEMO_TURNSTILE_DISCLOSURE } from "@/lib/demo-copy";

type TurnstileWidgetProps = {
  siteKey?: string;
  onToken: (token: string) => void;
  action: string;
  disabled?: boolean;
};

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const MOCK_TURNSTILE_TOKEN = "mock-turnstile-token";

export function TurnstileWidget({ siteKey, onToken, action, disabled = false }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const isMocked = !siteKey || process.env.NEXT_PUBLIC_USE_MOCK_CALLS !== "false";

  useEffect(() => {
    if (disabled) return;

    if (isMocked) {
      onToken(MOCK_TURNSTILE_TOKEN);
      return;
    }

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        action,
        callback: onToken,
        "expired-callback": () => onToken(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [action, disabled, isMocked, onToken, siteKey]);

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        className="flex min-h-[68px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface px-0 sm:px-4"
      >
        {isMocked ? (
          <span className="px-4 text-sm font-medium text-accent">
            Security check verified for preview.
          </span>
        ) : (
          <span className="px-4 text-sm text-text-muted">Security check loading...</span>
        )}
      </div>
      <p className="text-xs leading-relaxed text-text-muted">{DEMO_TURNSTILE_DISCLOSURE}</p>
    </div>
  );
}
