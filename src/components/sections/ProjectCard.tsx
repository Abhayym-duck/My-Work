import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-4"
    >
      <ImageWrapper
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        width={project.coverImage.width}
        height={project.coverImage.height}
        className="aspect-4/3 transition-transform duration-(--duration-slow) ease-(--ease-default) group-hover:scale-[1.02]"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted-foreground transition-transform duration-(--duration-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="mt-1 flex flex-wrap gap-2">
          <Tag>{project.category}</Tag>
          <Tag>{project.year}</Tag>
        </div>
      </div>
    </Link>
  );
}
