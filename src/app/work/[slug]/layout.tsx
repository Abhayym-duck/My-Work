import type { CSSProperties, ReactNode } from "react";
import { Inter } from "next/font/google";
import { TopNav } from "@/components/layout/TopNav";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-case-study",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const themeStyle = {
  fontFamily: "var(--font-case-study), ui-sans-serif, system-ui, sans-serif",
  "--cs-bg": "#ffffff",
  "--cs-fg": "#15151f",
  "--cs-muted": "#6b7280",
  "--cs-border": "#e5e7eb",
  "--cs-accent": "#4f46e5",
  "--cs-accent-hover": "#4338ca",
  "--cs-accent-soft": "#eef2ff",
} as CSSProperties;

/**
 * The site-wide nav and footer wrap every page; only the case study body
 * uses its own editorial font + local color tokens.
 */
export default async function CaseStudyRouteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "redfox-courier") {
    return (
      <div className="flex min-h-full flex-1 flex-col bg-white text-[#36383e]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        <TopNav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#eeeff0]">
          <div className="mx-auto flex w-[calc(100%-40px)] max-w-[700px] flex-wrap justify-between gap-4 py-7 text-[10px] text-[#737780]">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </div>
    );
  }
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <TopNav />
      <main
        className={`${inter.variable} flex-1 bg-white text-[#15151f]`}
        style={themeStyle}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
