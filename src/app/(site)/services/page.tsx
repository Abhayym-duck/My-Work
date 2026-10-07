import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: `Design services offered by ${siteConfig.name}.`,
  path: "/services",
});

const services = [
  {
    title: "Product Design",
    description:
      "End-to-end design for web and mobile products, from concept through polished, shippable interfaces.",
  },
  {
    title: "UX Research",
    description:
      "User interviews, usability testing, and journey mapping to ground decisions in real user behavior.",
  },
  {
    title: "Design Systems",
    description:
      "Reusable component libraries and design tokens that keep growing products visually and structurally consistent.",
  },
];

export default function ServicesPage() {
  return (
    <Section spacing="default" as="div" className="pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Services"
        title="How I can help"
        description="A few of the ways I typically work with teams — reach out if you have something else in mind."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col gap-3">
            <Tag>{service.title}</Tag>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
