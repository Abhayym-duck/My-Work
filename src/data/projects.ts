import type { Project } from "@/types/project";

/**
 * Add a new project by appending an object to this array — the /work
 * listing and /work/[slug] case study page render entirely from this data,
 * so no page templates need to change.
 */
export const projects: Project[] = [
  {
    slug: "padel-iq",
    title: "AI-powered padel intelligence platform",
    shortDescription:
      "Scaling the new design to 3 international markets (Dubai, London, Spain).",
    category: "Product Design",
    year: 2025,
    role: "Lead Product Designer",
    tools: ["Figma", "FigJam", "Maze"],
    coverImage: {
      src: "/images/projects/padel-iq/cover.svg",
      alt: "Cover artwork for the AI-powered padel intelligence platform",
      width: 1600,
      height: 1200,
    },
    galleryImages: [],
    challenge:
      "Coaches and clubs had no unified way to turn match footage into actionable player insights across regions with very different levels of digital maturity.",
    solution:
      "Designed an AI-assisted analytics workspace that surfaces player performance trends automatically, with a rollout plan tailored to each market's device and connectivity constraints.",
    process: [
      "Field research with coaches in Dubai, London, and Spain",
      "Concept exploration for the AI insights workspace",
      "Usability testing across markets",
      "Phased visual design and engineering handoff",
    ],
    outcomes: [
      "Launched in 3 international markets within two quarters.",
      "Coach engagement with the insights dashboard up 3x post-launch.",
    ],
    metrics: [
      { label: "Markets launched", value: "3", description: "Dubai, London, Spain" },
      { label: "Coach engagement", value: "3x" },
    ],
    seo: {
      title: "AI-powered padel intelligence platform — Case Study",
      description:
        "Scaling an AI-assisted analytics platform for padel coaches across 3 international markets.",
      keywords: ["product design case study", "sports tech", "AI analytics"],
      ogImage: "/images/projects/padel-iq/cover.svg",
    },
    featured: true,
    published: true,
  },
  {
    slug: "design-editor",
    title: "Reimagining the drag-and-drop design editor",
    shortDescription:
      "Simplified a complex creation flow for non-designers, cutting time-to-first-design by 40%.",
    category: "Product Design",
    year: 2024,
    role: "Product Designer",
    tools: ["Figma", "Maze", "Amplitude"],
    coverImage: {
      src: "/images/projects/design-editor/cover.svg",
      alt: "Cover artwork for the drag-and-drop design editor redesign",
      width: 1600,
      height: 1200,
    },
    galleryImages: [],
    challenge:
      "First-time users were abandoning the editor before publishing their first design, overwhelmed by a canvas built for power users.",
    solution:
      "Introduced a guided, template-first editing flow with progressive disclosure of advanced tools, so beginners could ship a first design in minutes.",
    process: [
      "Funnel analysis and session review",
      "Prototyping a template-first editing flow",
      "Moderated usability testing with new users",
      "Staged rollout with in-product measurement",
    ],
    outcomes: [
      "Time-to-first-published-design down 40%.",
      "First-week retention for new accounts improved measurably.",
    ],
    metrics: [
      { label: "Time to first design", value: "-40%" },
      { label: "First-week retention", value: "+15%" },
    ],
    seo: {
      title: "Reimagining the drag-and-drop design editor — Case Study",
      description:
        "Simplifying a complex design canvas for non-designer, first-time users.",
      keywords: ["product design case study", "onboarding", "editor UX"],
      ogImage: "/images/projects/design-editor/cover.svg",
    },
    featured: true,
    published: true,
  },
  {
    slug: "automation-suite",
    title: "Marketing automation suite for small businesses",
    shortDescription:
      "Unified scheduling, email, and social publishing into a single guided workflow.",
    category: "UX Design",
    year: 2024,
    role: "Product Designer",
    tools: ["Figma", "Notion", "Dovetail"],
    coverImage: {
      src: "/images/projects/automation-suite/cover.svg",
      alt: "Cover artwork for the marketing automation suite",
      width: 1600,
      height: 1200,
    },
    galleryImages: [],
    challenge:
      "Small business owners were juggling three disconnected tools to plan a single campaign, with no shared calendar or status view.",
    solution:
      "Designed a single campaign workspace that combines scheduling, email, and social publishing behind one guided setup flow.",
    process: [
      "Stakeholder interviews across support and sales",
      "Information architecture for the unified workspace",
      "Design system contributions for shared components",
      "Beta rollout with a cohort of existing customers",
    ],
    outcomes: [
      "Campaign setup time cut from three tools to one guided flow.",
      "Positive reception from the beta cohort ahead of full launch.",
    ],
    metrics: [{ label: "Setup steps", value: "-60%" }],
    seo: {
      title: "Marketing automation suite for small businesses — Case Study",
      description:
        "Unifying scheduling, email, and social publishing into one guided marketing workflow.",
      keywords: ["UX case study", "marketing tools", "design systems"],
      ogImage: "/images/projects/automation-suite/cover.svg",
    },
    featured: true,
    published: true,
  },
  {
    slug: "onboarding-revamp",
    title: "Zero-to-first-value onboarding revamp",
    shortDescription:
      "Redesigned the signup-to-activation journey, lifting week-one retention by 22%.",
    category: "UX Research",
    year: 2023,
    role: "Product Designer",
    tools: ["Figma", "Amplitude", "UserTesting"],
    coverImage: {
      src: "/images/projects/onboarding-revamp/cover.svg",
      alt: "Cover artwork for the onboarding revamp project",
      width: 1600,
      height: 1200,
    },
    galleryImages: [],
    challenge:
      "New users signed up but rarely reached the moment where the product's value became obvious, leading to steep early drop-off.",
    solution:
      "Mapped the journey to a single first-value milestone and redesigned onboarding around getting every new user there as directly as possible.",
    process: [
      "Activation funnel analysis",
      "Defining a single first-value milestone",
      "Prototyping a streamlined onboarding flow",
      "A/B testing against the existing flow",
    ],
    outcomes: [
      "Week-one retention improved by 22%.",
      "Time to first-value milestone cut substantially.",
    ],
    metrics: [{ label: "Week-1 retention", value: "+22%" }],
    seo: {
      title: "Zero-to-first-value onboarding revamp — Case Study",
      description:
        "Redesigning the signup-to-activation journey to lift week-one retention by 22%.",
      keywords: ["UX research case study", "onboarding", "activation"],
      ogImage: "/images/projects/onboarding-revamp/cover.svg",
    },
    featured: true,
    published: true,
  },
];

export function getAllProjects(): Project[] {
  return projects.filter((project) => project.published !== false);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
