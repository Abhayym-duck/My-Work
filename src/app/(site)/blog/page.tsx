import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: `Notes on design and process from ${siteConfig.name} — coming soon.`,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section spacing="default" as="div" className="pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Blog"
        title="Coming soon"
        description="Writing on design process, tools, and lessons learned is on the way. Nothing published yet."
      />
    </Section>
  );
}
