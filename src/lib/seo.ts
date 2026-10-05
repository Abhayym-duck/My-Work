import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { SeoInput } from "@/types/seo";

/**
 * Builds a full Next.js Metadata object from a minimal, page-level input,
 * so individual pages only specify what differs from the site defaults.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  noIndex,
}: SeoInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const image = ogImage ?? "/og-default.jpg";

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
