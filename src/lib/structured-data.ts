import { siteConfig } from "@/data/site";
import type { Project } from "@/types/project";

/**
 * JSON-LD builders. Each returns a plain object suitable for serialization
 * into a <script type="application/ld+json"> tag via the JsonLd component.
 */

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    dateCreated: `${project.year}`,
    image: new URL(project.coverImage.src, siteConfig.url).toString(),
    url: new URL(`/work/${project.slug}`, siteConfig.url).toString(),
    keywords: project.seo.keywords.join(", "),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
