import type { Metadata } from "next";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

/** Print-only A4 render of the resume, used to generate the downloadable PDF. */
export const metadata: Metadata = {
  title: "Abhay Maske — Resume",
  robots: { index: false, follow: false },
};

export default function ResumePrintPage() {
  return (
    <>
      <style>{"@page { size: A4; margin: 12mm 14mm } html, body { background: #fff }"}</style>
      <div
        className="mx-auto box-border w-full bg-white print:[&_h2]:break-after-avoid print:[&_h3]:break-after-avoid print:[&_li]:break-inside-avoid"
        style={{ fontSize: "10pt" }}
      >
        <ResumeDocument />
      </div>
    </>
  );
}
