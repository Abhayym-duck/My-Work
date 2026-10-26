"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import WorkOutline from "@mui/icons-material/WorkOutlined";
import PersonOutline from "@mui/icons-material/PersonOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import { siteConfig } from "@/data/site";

const navIcons = { Home: HomeOutlined, Projects: WorkOutline, About: PersonOutline, Resume: DescriptionOutlined };

export function TopNav() {
  const pathname = usePathname();

  return (
    <div className="site-nav font-jb sticky top-6 z-(--z-header) flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex items-center gap-8 rounded-(--radius-full) border border-[#f3f3f3] bg-[#fcfafa] px-5 py-3.5 shadow-[0px_4px_2px_rgba(0,0,0,0.04)]"
      >
        {siteConfig.navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);
          const external = link.href.endsWith(".pdf");
          const Icon = navIcons[link.label];
          return (
            <Link
              key={link.href}
              href={link.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-current={isActive ? "page" : undefined}
              className="site-nav-link flex items-center gap-2 text-sm font-medium whitespace-nowrap"
              style={{ color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)" }}
            >
              <Icon className="site-nav-icon" aria-hidden="true" sx={{ fontSize: 18, flexShrink: 0 }} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
