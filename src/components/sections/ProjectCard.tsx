import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col gap-6 rounded-[2rem] border border-neutral-200 bg-white p-5 transition-colors duration-(--duration-default) ease-(--ease-default) hover:border-neutral-300 sm:p-6"
    >
      <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-surface">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain p-2 transition-transform duration-(--duration-slow) ease-(--ease-default) group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-auto flex items-center gap-4 rounded-[1.5rem] border border-neutral-200 p-4">
        <span
          aria-hidden
          className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] bg-brand text-lg font-semibold text-brand-foreground"
        >
          {project.title.charAt(0)}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {project.category} <span aria-hidden>•</span> {project.year}{" "}
            <span aria-hidden>•</span> {project.role}
          </p>
        </div>
      </div>
    </Link>
  );
}
