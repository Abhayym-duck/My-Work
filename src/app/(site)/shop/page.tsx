import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Shop",
  description: `Templates and resources from ${siteConfig.name} — coming soon.`,
  path: "/shop",
});

export default function ShopPage() {
  return (
    <Section spacing="default" as="div">
      <SectionHeading
        as="h1"
        eyebrow="Shop"
        title="Coming soon"
        description="Templates, UI kits, and other resources will land here. Check back later, or reach out if you're looking for something specific."
      />
    </Section>
  );
}
