import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectCard({ project, banner }: { project: Project; banner?: { src: string; alt: string } }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full min-w-0 flex-col gap-3 rounded-[22px] border border-[#ffe5e5] bg-[#fffafa] p-2 transition-colors duration-(--duration-default) ease-(--ease-default) hover:border-neutral-300 sm:gap-6 sm:rounded-[2rem] sm:border-neutral-200 sm:bg-white sm:p-6"
    >
      <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-[14px] bg-surface sm:rounded-[1.5rem]">
        <Image
          src={banner?.src ?? project.coverImage.src}
          alt={banner?.alt ?? project.coverImage.alt}
          fill
          sizes="(min-width: 768px) 45vw, calc(100vw - 66px)"
          className={`${banner ? "object-cover" : "object-contain p-2"} transition-transform duration-(--duration-slow) ease-(--ease-default) group-hover:scale-[1.02]`}
        />
      </div>

      <div className="mt-auto flex items-center gap-3 rounded-[14px] border border-neutral-100 bg-white px-3 py-3 sm:gap-4 sm:rounded-[1.5rem] sm:border-neutral-200 sm:p-4">
        <span
          aria-hidden
          className="hidden size-12 shrink-0 items-center justify-center rounded-[1rem] bg-brand text-lg font-semibold text-brand-foreground sm:flex"
        >
          {project.title.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm leading-snug font-medium text-foreground sm:text-base">
            {project.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {project.category} <span aria-hidden>•</span> {project.year}{" "}
            <span className="hidden sm:inline"><span aria-hidden>•</span> {project.role}</span>
          </p>
        </div>
        <ArrowUpRight size={18} className="shrink-0 text-red-500 sm:hidden" aria-hidden="true" />
      </div>
    </Link>
  );
}
