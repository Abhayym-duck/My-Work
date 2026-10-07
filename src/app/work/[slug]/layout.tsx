import type { CSSProperties, ReactNode } from "react";
import { Inter } from "next/font/google";
import { TopNav } from "@/components/layout/TopNav";
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
export default function CaseStudyRouteLayout({
  children,
}: {
  children: ReactNode;
}) {
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
