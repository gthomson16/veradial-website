"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;

  return (
    <ScrollReveal delay={index * 60}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
        >
          <span className="font-display text-base text-text-primary sm:text-lg">
            {item.question}
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-text-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          id={panelId}
          role="region"
          className={`grid transition-all duration-200 ease-out ${
            open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FAQContent({ sections }: { sections: FAQSection[] }) {
  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <div
          key={section.title}
          className={sectionIndex > 0 ? "mt-16" : ""}
        >
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-secondary)]">
              {section.title}
            </h2>
          </ScrollReveal>
          <div className="mt-6">
            {section.items.map((item, index) => (
              <FAQAccordion key={item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
