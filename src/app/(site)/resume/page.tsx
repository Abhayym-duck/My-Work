import type { Metadata } from "next";
import { Download } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { RESUME_FILENAME } from "@/data/resume";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

export const metadata: Metadata = buildMetadata({
  title: "Resume — Abhay Maske",
  description:
    "One-page resume of Abhay Maske, Product Experience Designer for SaaS, CRM, logistics and e-commerce products.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[860px] px-4 pt-16 pb-24 sm:px-6">
      <div className="flex justify-center sm:justify-end">
        <a
          href={`/${RESUME_FILENAME}`}
          download={RESUME_FILENAME}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Download size={18} aria-hidden />
          Download Resume
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white px-6 py-10 text-[12.5px] shadow-sm sm:px-16 sm:py-16 sm:text-[13.5px]">
        <ResumeDocument />
      </div>
    </div>
  );
}
