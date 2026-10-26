import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export function SimilarLessons({ projects, compact = false }: { projects: Project[]; compact?: boolean }) {
  if (projects.length === 0) return null;

  return (
    <section className={compact ? "w-full font-sans text-left" : "border-t border-[var(--cs-border)] bg-[#f6f7fa]"} aria-label="Featured projects">
      <div className={compact ? "w-full" : "mx-auto max-w-[1200px] px-4 py-12 sm:px-6"}>
        {!compact && (
        <h2 className="text-lg font-semibold text-[var(--cs-fg)]">
          Explore my projects
        </h2>
        )}

        <div className={`${compact ? "" : "mt-8"} grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8`}>
          {projects.map((project) => {
            return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#e8e8ec] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.025)] transition-shadow hover:shadow-md"
            >
              <div className={`relative mb-5 ${compact ? "aspect-[1.3]" : "aspect-[1.85]"} overflow-hidden rounded-xl`}>
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  fill
                  sizes="(min-width: 1200px) 510px, (min-width: 768px) calc((100vw - 120px) / 2), calc(100vw - 70px)"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-auto flex items-center gap-3 rounded-[18px] border border-[#efeff2] p-4">
                <div className="min-w-0">
                <h3 className={`${compact ? "truncate text-[16px]" : "text-[18px]"} font-semibold leading-snug tracking-tight text-[#252b3b]`}>
                  {project.title}
                </h3>
                <p className="mt-1 text-[14px] leading-snug text-[#8991a3]">
                  {project.shortDescription}
                </p>
                </div>
              </div>
            </Link>
          );})}
        </div>
      </div>
    </section>
  );
}
