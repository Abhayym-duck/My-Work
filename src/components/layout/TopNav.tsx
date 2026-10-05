"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const HOME_ICON = "/images/nav/home.svg";
const GENERIC_ICON = "/images/nav/generic.svg";

export function TopNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-6 z-(--z-header) flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex items-center gap-8 rounded-(--radius-full) border border-[#f3f3f3] bg-[#fcfafa] px-5 py-3.5 shadow-[0px_4px_2px_rgba(0,0,0,0.04)]"
      >
        {siteConfig.navLinks.map((link) => {
          const isActive = pathname === link.href;
          const external = link.href.endsWith(".pdf");
          return (
            <Link
              key={link.href}
              href={link.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-current={isActive ? "page" : undefined}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap"
              style={{ color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)" }}
            >
              <Image
                src={isActive ? HOME_ICON : GENERIC_ICON}
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
