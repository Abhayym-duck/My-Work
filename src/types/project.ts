export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectSeo {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface Project {
  /** Unique, URL-safe identifier used for /work/[slug] */
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  year: number;
  role: string;
  tools: string[];
  coverImage: ProjectImage;
  galleryImages: ProjectImage[];
  challenge: string;
  solution: string;
  process: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  seo: ProjectSeo;
  /** Whether this project is surfaced on the home page / featured lists */
  featured?: boolean;
  /** Controls whether the project appears in listings; drafts stay reachable by direct link */
  published?: boolean;
}
