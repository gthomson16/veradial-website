"use client";

import { useState } from "react";
import Image from "next/image";

export function FounderPhoto() {
  const [showIllustration, setShowIllustration] = useState(false);

  return (
    <div
      className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border"
      onMouseEnter={() => setShowIllustration(true)}
      onMouseLeave={() => setShowIllustration(false)}
      onTouchStart={() => setShowIllustration((prev) => !prev)}
    >
      <Image
        src="/graham-thomson.jpg"
        alt="Graham Thomson, Founder of VeraDial"
        fill
        className={`object-cover transition-opacity duration-500 ${
          showIllustration ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 640px) 100vw, 384px"
        priority
      />
      <Image
        src="/graham-thomson-illustrated.png"
        alt="Graham Thomson, illustrated"
        fill
        className={`object-cover transition-opacity duration-500 ${
          showIllustration ? "opacity-100" : "opacity-0"
        }`}
        sizes="(max-width: 640px) 100vw, 384px"
      />
    </div>
  );
}
