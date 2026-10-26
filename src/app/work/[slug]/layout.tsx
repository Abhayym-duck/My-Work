import type { ReactNode } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

export default function CaseStudyRouteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-[#36383e]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
      <TopNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
