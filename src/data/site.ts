/**
 * Single source of truth for site-wide identity, used by metadata,
 * structured data, and the layout shell (nav/footer/social links).
 * Replace placeholder values once real content is available.
 */
export const siteConfig = {
  name: "Abhay Maske",
  role: "UX Designer",
  title: "Abhay Maske — UX Designer",
  description:
    "Portfolio of Abhay Maske, a UX designer crafting thoughtful, user-centered digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  email: "hello@example.com",
  avatar: null as string | null,
  availability: {
    open: true,
    label: "Available for Work",
  },
  hero: {
    greeting: "Hey, I'm Abhay",
    headline: "I design products people enjoy using.",
    subtext:
      "I've been crafting digital products and interfaces for the past 6 years.",
  },
  stats: [
    { value: "6+", label: "Years experience" },
    { value: "20+", label: "Projects shipped" },
    { value: "3", label: "Markets launched in" },
  ],
  social: {
    twitter: "https://x.com/example",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    dribbble: "https://dribbble.com/example",
    behance: "https://behance.net/example",
  },
  keywords: [
    "product designer",
    "UI/UX designer",
    "portfolio",
    "design case studies",
    "product design",
  ],
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/work" },
    { label: "Shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
