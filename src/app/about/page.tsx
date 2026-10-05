import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { HeroCollage } from "@/components/about/HeroCollage";
import { CaseStudiesSection } from "@/components/about/CaseStudiesSection";
import { JournalBreak } from "@/components/about/JournalBreak";
import { GenAISection } from "@/components/about/GenAISection";
import { TagRibbon } from "@/components/about/TagRibbon";
import { CuriositySection } from "@/components/about/CuriositySection";
import { RecommendationsSection } from "@/components/about/RecommendationsSection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.role.toLowerCase()} — background, experience, and approach to design.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeroCollage />
      <CaseStudiesSection />
      <JournalBreak />
      <GenAISection />
      <TagRibbon
        items={["Interaction Design", "Claude Code", "Design Systems"]}
        rotate={-2}
      />
      <CuriositySection />
      <TagRibbon
        items={["Rapid Prototyping", "User Research", "User Flows"]}
        rotate={2}
      />
      <RecommendationsSection />
    </>
  );
}
