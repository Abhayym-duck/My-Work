import type { ReactNode } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
