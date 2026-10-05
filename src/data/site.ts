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
  hero: {
    lines: ["Hey, I'm Abhay.", "I design products & sleep."],
    subtext:
      "I have around 3 years of experience designing digital products, and around 23 years of experience sleeping",
  },
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
    { label: "Home", href: "/" },
    { label: "Projects", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume.pdf" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
