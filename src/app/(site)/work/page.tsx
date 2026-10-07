import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getAllProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = buildMetadata({
  title: "Work — Selected Case Studies",
  description:
    "A collection of product and UI/UX design case studies covering research, process, and outcomes.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <Section spacing="default" as="div" className="pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Work"
        title="Selected case studies"
        description="Every project below links to a full case study covering the challenge, process, and outcome."
      />

      <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.slug} as="div" className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </StaggerContainer>
    </Section>
  );
}
