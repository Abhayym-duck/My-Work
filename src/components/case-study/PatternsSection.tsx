"use client";

import { useState } from "react";
import type { CaseStudyPattern } from "@/types/project";
import { PatternBlock } from "./PatternBlock";

type Mode = "quick" | "deep";

function takeaway(pattern: CaseStudyPattern) {
  const preferred = pattern.sections.find((section) =>
    section.label.toLowerCase().includes("takeaway"),
  );
  return (preferred ?? pattern.sections[0])?.content;
}

export function PatternsSection({
  patterns,
}: {
  patterns: CaseStudyPattern[];
}) {
  const [mode, setMode] = useState<Mode>("deep");

  return (
    <div>
      <div className="inline-flex items-center gap-1 rounded-full border border-[var(--cs-border)] bg-[#fafafa] p-1">
        {(
          [
            { key: "quick", label: "Quick Read" },
            { key: "deep", label: "Deep Dive" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setMode(tab.key)}
            aria-pressed={mode === tab.key}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              mode === tab.key
                ? "bg-white text-[var(--cs-fg)] shadow-sm"
                : "text-[var(--cs-muted)] hover:text-[var(--cs-fg)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {mode === "deep" ? (
        <div className="mt-8">
          {patterns.map((pattern) => (
            <PatternBlock key={pattern.title} pattern={pattern} />
          ))}
        </div>
      ) : (
        <ul className="mt-8 flex flex-col gap-6">
          {patterns.map((pattern) => (
            <li
              key={pattern.title}
              className="border-b border-[var(--cs-border)] pb-6 last:border-b-0"
            >
              <div className="flex flex-wrap items-center gap-2">
                {pattern.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--cs-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--cs-accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--cs-fg)]">
                {pattern.title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--cs-muted)]">
                {takeaway(pattern)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
