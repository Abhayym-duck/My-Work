import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about new projects, collaborations, or opportunities.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section spacing="default" as="div" className="pt-16">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hello? Reach out below or send an email directly."
      />

      <Reveal className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2" as="div">
        <ContactForm />

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-base text-foreground hover:underline"
          >
            <Mail size={18} aria-hidden />
            {siteConfig.email}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
