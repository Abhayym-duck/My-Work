import type { Project } from "@/types/project";
import { redfoxCourierStory } from "@/data/stories/redfox-courier";

/**
 * Add a new project by appending an object to this array — the /work
 * listing and /work/[slug] case study page render entirely from this data,
 * so no page templates need to change.
 */
export const projects: Project[] = [
  {
    slug: "automation-suite",
    title: "Growve CRM (internal)",
    shortDescription: "Redesigning an internal operations platform around orders, inventory, warehouses, returns, claims and international shipping.",
    category: "UX Design",
    year: 2025,
    role: "Product Designer",
    tools: [],
    coverImage: {
      src: "/images/projects/automation-suite/cover.svg",
      alt: "Growve CRM (internal)",
      width: 1600,
      height: 1200,
    },
    galleryImages: [],
    challenge: "Growve had outgrown an internal system that had evolved alongside the business. Increasing operational complexity made connected workflows harder to manage.",
    solution: "Redesigned the internal product around the information, states and actions needed across orders, inventory, warehouses, shipping, returns and claims.",
    process: [],
    outcomes: [
      "A more structured operational experience across connected workflows.",
      "Clearer representation of order and shipment journeys, including returns and claims.",
      "Support for international operations and visibility into warehouse inventory with potential for resale.",
    ],
    metrics: [],
    seo: {
      title: "Growve CRM (internal) - Case Study",
      description: "Redesigning Growve's internal operations platform around orders, warehouses, inventory, returns, claims and international shipping.",
      keywords: ["product design", "operational systems", "internal tools", "dropshipping"],
      ogImage: "/images/projects/automation-suite/cover.svg",
    },
    featured: true,
    published: true,
  },
  {
    slug: "redfox-courier",
    title: "RedFox Courier",
    shortDescription: "International shipping, without the logistics headache.",
    category: "Product Design",
    year: 2025,
    role: "Product Designer",
    tools: ["Figma"],
    coverImage: {
      src: "/images/projects/redfox-courier/cover.svg",
      alt: "Cover artwork for the RedFox Courier case study",
      width: 1600,
      height: 1200,
    },
    galleryImages: [],
    challenge:
      "International shipping spans quotes, duties, customs, carriers and tracking — a lot for users to understand at once.",
    solution:
      "A connected shipping experience that reveals complexity progressively, from quote to delivery and operations.",
    process: [],
    outcomes: [],
    metrics: [],
    seo: {
      title: "RedFox Courier — Case Study",
      description:
        "Designing simpler international shipping: RedFox service selection, cost clarity, pickup requests and the CRM behind the operation.",
      keywords: ["product design case study", "logistics UX", "shipping"],
      ogImage: "/images/projects/redfox-courier/cover.svg",
    },
    story: redfoxCourierStory,
    featured: true,
    published: true,
  },
  {
    slug: "design-editor",
    title: "Atlantic Ocean {ecommerce website}",
    shortDescription: "Designing a scalable e-commerce experience focused on clean UI, product discovery, and usability.",
    category: "Product Design",
    year: 2025,
    role: "Product Designer",
    tools: [],
    coverImage: {
      src: "/images/projects/banners/globe365-india.png",
      alt: "Atlantic Ocean e-commerce website overview",
      width: 968,
      height: 560,
    },
    galleryImages: [],
    challenge: "Organizing a large catalogue of products, pricing, offers, ratings, variants, specifications and availability without overwhelming the shopper.",
    solution: "Created a clear visual hierarchy and reusable UI language across the shopping journey, with layouts that adapt across categories and screen sizes.",
    process: ["Visual hierarchy and product discovery", "Reusable UI patterns", "Responsive layouts"],
    outcomes: ["A clean, structured and scalable e-commerce UI.", "A consistent shopping experience across product discovery, cart and checkout."],
    metrics: [],
    seo: {
      title: "Atlantic Ocean - E-commerce Website Case Study",
      description: "Designing a consistent e-commerce experience across product discovery, listings, product details, cart and checkout.",
      keywords: ["e-commerce", "UI/UX design", "visual design", "responsive design"],
      ogImage: "/images/projects/banners/globe365-india.png",
    },
    featured: true,
    published: true,
  },
  {
    slug: "onboarding-revamp",
    title: "Growve Design System",
    shortDescription: "A scalable design foundation built to unify the Growve product ecosystem.",
    category: "UI/UX Design",
    year: 2025,
    role: "Product Designer",
    tools: ["Figma"],
    coverImage: {
      src: "/images/projects/banners/growve-design-system.png",
      alt: "Growve Design Guidelines overview",
      width: 968,
      height: 560,
    },
    galleryImages: [],
    challenge: "Multiple Growve applications and internal tools used different approaches to shared UI patterns, creating unnecessary design and development effort.",
    solution: "Created a centralized library of foundations, components, Figma variables and reusable patterns to support the Growve product ecosystem.",
    process: ["Visual foundations", "Component architecture", "Figma variables and tokens", "Reusable patterns and product application"],
    outcomes: ["A shared base layer for new screens and applications.", "More consistent UI patterns and predictable developer handoffs.", "Less repetitive design work across Growve products."],
    metrics: [],
    seo: {
      title: "Growve Design System - Case Study",
      description: "Building a shared foundation of design tokens, Figma variables, components and patterns for the Growve product ecosystem.",
      keywords: ["design systems", "UI/UX design", "Figma variables", "design tokens"],
      ogImage: "/images/projects/banners/growve-design-system.png",
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
