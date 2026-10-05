import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectPreviewCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-4/3 overflow-hidden rounded-(--radius-lg) bg-surface">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-(--duration-slow) ease-(--ease-default) group-hover:scale-105"
        />
        <span className="absolute right-4 bottom-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-(--radius-full) bg-background text-foreground opacity-0 shadow-(--shadow-md) transition-all duration-(--duration-fast) ease-(--ease-default) group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} aria-hidden />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-(--radius-full) bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-hover">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}
