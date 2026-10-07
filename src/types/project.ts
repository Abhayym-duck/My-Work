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

export interface CaseStudySection {
  /** e.g. "Why it works", "When to apply it", "Implementation considerations" */
  label: string;
  content: string;
}

export interface CaseStudyPattern {
  /** Short category labels shown above the pattern title, e.g. ["UX Writing", "Clarity"] */
  tags: string[];
  title: string;
  image: ProjectImage;
  sections: CaseStudySection[];
}

/** A building block inside a long-form story section. */
export type StoryBlock =
  | { type: "text"; label?: string; paragraphs: string[] }
  | { type: "list"; label?: string; items: string[] }
  | { type: "flow"; steps: string[]; vertical?: boolean }
  | { type: "steps"; items: { title: string; body: string }[] }
  /** Image placeholder: `brief` describes what the final visual should show. */
  | { type: "image"; id: string; title: string; brief: string[] }
  | { type: "outcome"; text: string };

export interface StorySection {
  /** e.g. "01 — Quote first, explain later" */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  blocks: StoryBlock[];
}

export interface ProjectStory {
  meta: { label: string; value: string }[];
  intro: string;
  hero: { id: string; title: string; brief: string[] };
  sections: StorySection[];
  learned: { title: string; paragraphs: string[] };
  related: {
    title: string;
    description: string;
    slug?: string;
    image: { id: string; title: string };
  }[];
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
  /** Long-form narrative case study (takes precedence over `patterns`) */
  story?: ProjectStory;
  /** Pattern-by-pattern UX breakdown rendered on the case study page, if present */
  patterns?: CaseStudyPattern[];
  /** Whether this project is surfaced on the home page / featured lists */
  featured?: boolean;
  /** Controls whether the project appears in listings; drafts stay reachable by direct link */
  published?: boolean;
}
