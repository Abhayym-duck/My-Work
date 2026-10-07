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
      <style>{"@page { size: A4; margin: 0 } html, body { background: #fff }"}</style>
      <div
      className="mx-auto box-border h-[297mm] w-[210mm] overflow-hidden bg-white px-[14mm] py-[10mm]"
      style={{ fontSize: "8.4pt" }}
    >
      <ResumeDocument />
      </div>
    </>
  );
}
