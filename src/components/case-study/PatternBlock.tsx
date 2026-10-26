import Image from "next/image";
import type { CaseStudyPattern } from "@/types/project";

export function PatternBlock({ pattern }: { pattern: CaseStudyPattern }) {
  return (
    <article className="border-b border-[var(--cs-border)] py-12 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-center gap-2">
        {pattern.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f7f7f9] px-2.5 py-1 text-[11px] font-medium text-[var(--cs-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-3 text-xl font-semibold text-balance text-[var(--cs-fg)] sm:text-2xl">
        {pattern.title}
      </h3>

      <div className="mt-3 flex flex-col gap-4">
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

      <figure className="relative mx-auto mt-10 aspect-16/9 w-full max-w-[560px] overflow-hidden rounded-xl border border-[var(--cs-border)] bg-[#fafafa]">
        <Image
          src={pattern.image.src}
          alt={pattern.image.alt}
          fill
          sizes="(min-width: 608px) 560px, calc(100vw - 48px)"
          className="object-contain"
        />
      </figure>
    </article>
  );
}
