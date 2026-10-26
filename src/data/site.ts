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
  email: "abhay.uiux@gmail.com",
  avatar: "/images/hero/potrait.jpg",
  hero: {
    lines: ["Hey, I'm Abhay Maske"],
    subtext:
      "With 3+ years in product design, I've learned to put my overthinking to good use by spotting confusion and creating experiences that are easier for everyone to use.",
  },
  social: {
    twitter: "https://x.com/example",
    linkedin: "https://www.linkedin.com/in/abhay-maske-866a93200/",
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
    { label: "Resume", href: "/resume" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
