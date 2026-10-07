import Image from "next/image";
import type { CaseStudyPattern } from "@/types/project";

export function PatternBlock({ pattern }: { pattern: CaseStudyPattern }) {
  return (
    <article className="border-b border-[var(--cs-border)] py-12 first:pt-0 last:border-b-0">
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

      <h3 className="mt-3 text-xl font-semibold text-balance text-[var(--cs-fg)] sm:text-2xl">
        {pattern.title}
      </h3>

      <div className="mt-6 overflow-hidden rounded-xl border border-[var(--cs-border)] bg-[#fafafa] shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-[var(--cs-border)] bg-white px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="relative aspect-16/9">
          <Image
            src={pattern.image.src}
            alt={pattern.image.alt}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {pattern.sections.map((section) => (
          <div key={section.label}>
            <h4 className="text-sm font-semibold text-[var(--cs-fg)]">
              {section.label}
            </h4>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--cs-muted)] text-pretty">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
