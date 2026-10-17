import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getAllProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
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
  const banners = [
    { src: "/images/projects/banners/redfox.png", alt: "RedFox Courier website design" },
    { src: "/images/projects/banners/globe365-india.png", alt: "Globe365 India storefront design" },
    { src: "/images/projects/banners/growve-crm.png", alt: "Growve CRM dashboard design" },
    { src: "/images/projects/banners/growve-design-system.png", alt: "Growve Design System guidelines" },
  ];

  return (
    <Section spacing="default" as="div" className="pt-16">
      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} as="div" className="h-full">
            <ProjectCard project={project} banner={banners[index]} />
          </Reveal>
        ))}
      </StaggerContainer>
    </Section>
  );
}
