import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectPreviewCard } from "@/components/sections/ProjectPreviewCard";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-[1160px] px-10 sm:px-16">
      <Hero />

      <div className="mt-14 border-t border-dashed border-border sm:mt-16" />

      {/* Selected work */}
      <section id="selected-projects" className="py-16 sm:py-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-(--tracking-tight)">
            Selected Projects
          </h2>
          <Link
            href="/work"
            className="inline-flex h-[42px] items-center justify-center rounded-(--radius-md) border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-(--duration-fast) hover:bg-surface"
          >
            All Projects
          </Link>
        </div>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {featuredProjects.map((project) => (
            <Reveal key={project.slug} as="div">
              <ProjectPreviewCard project={project} />
            </Reveal>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
