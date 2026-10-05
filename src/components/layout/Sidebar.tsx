"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  ShoppingCart,
  Rss,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { XIcon, LinkedInIcon, InstagramIcon } from "./SocialIcons";

const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": User,
  "/services": Briefcase,
  "/work": FolderKanban,
  "/shop": ShoppingCart,
  "/blog": Rss,
  "/contact": Mail,
};

const socialIcons: Record<string, ComponentType<{ size?: number }>> = {
  twitter: XIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Sidebar() {
  const pathname = usePathname();
  const navItems = [{ label: "Home", href: "/" }, ...siteConfig.navLinks];
  const socialLinks = Object.entries(siteConfig.social).filter(
    ([platform]) => socialIcons[platform],
  );

  return (
    <aside className="hidden w-[232px] shrink-0 flex-col bg-surface px-6 pt-8 pb-6 sm:flex">
      <Link href="/" className="flex items-center gap-3 pb-6">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-background text-sm font-medium text-muted-foreground grayscale">
          {siteConfig.avatar ? (
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center">
              {initials(siteConfig.name)}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-foreground">
            {siteConfig.name.split(" ")[0]}
          </span>
          <span className="text-sm text-muted-foreground">
            {siteConfig.role}
          </span>
        </div>
      </Link>

      <div className="border-t border-dashed border-border" />

      <nav aria-label="Primary" className="flex flex-col gap-1 pt-5">
        {navItems.map((link) => {
          const Icon = navIcons[link.href] ?? Home;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2.5 rounded-(--radius-md) px-3 py-2.5 text-sm transition-colors duration-(--duration-fast) ${
                isActive
                  ? "border border-border bg-background font-medium text-foreground"
                  : "border border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={16} aria-hidden />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-3 pt-6">
        <span className="text-xs text-muted">Follow Me</span>
        <div className="border-t border-dashed border-border" />
        <div className="flex items-center gap-4 pt-1">
          {socialLinks.map(([platform, url]) => {
            const Icon = socialIcons[platform];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                className="text-muted-foreground transition-colors duration-(--duration-fast) hover:text-foreground"
              >
                <Icon size={16} aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
