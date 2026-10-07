import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export function SimilarLessons({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="border-t border-[var(--cs-border)] bg-[#fafafa]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-lg font-semibold text-[var(--cs-fg)]">
          Similar Breakdown Lessons
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-xl border border-[var(--cs-border)] bg-white transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-16/9">
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  fill
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[var(--cs-fg)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--cs-muted)]">
                  {project.category} · {project.tools[0]} · {project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
