import type { Project } from "@/types/project";
import { redfoxCourierStory } from "@/data/stories/redfox-courier";

/**
 * Add a new project by appending an object to this array — the /work
 * listing and /work/[slug] case study page render entirely from this data,
 * so no page templates need to change.
 */
export const projects: Project[] = [
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
        "Designing one connected international shipping experience: quotes, cost clarity, carrier comparison, tracking and operations.",
      keywords: ["product design case study", "logistics UX", "shipping"],
      ogImage: "/images/projects/redfox-courier/cover.svg",
    },
    story: redfoxCourierStory,
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
    patterns: [
      {
        tags: ["Onboarding", "Reduced Friction"],
        title: "Templates replace the blank canvas",
        image: {
          src: "/images/projects/design-editor/cover.svg",
          alt: "Template picker placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "A blank canvas asks a non-designer to make a dozen decisions before they've made any progress. A template starts them at 'edit this' instead of 'invent this.'",
          },
          {
            label: "When to apply it",
            content:
              "This pattern pays off most when your power users and your first-time users want fundamentally different starting points — don't force both down the same empty-canvas door.",
          },
          {
            label: "What often goes wrong",
            content:
              "Template libraries that look impressive but aren't filtered by intent just become a second decision paralysis screen in front of the first one.",
          },
        ],
      },
      {
        tags: ["Progressive Disclosure"],
        title: "Advanced tools stay one tap away, not one click away",
        image: {
          src: "/images/projects/design-editor/cover.svg",
          alt: "Progressive toolbar placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "Hiding advanced tools entirely protects beginners but frustrates everyone else. Keeping them one predictable gesture away protects beginners without punishing people who already know what they're doing.",
          },
          {
            label: "Implementation considerations",
            content:
              "The reveal gesture has to be discoverable through normal use, not something a user has to be told about — otherwise it's functionally the same as hiding the tools entirely.",
          },
          {
            label: "Actionable takeaway",
            content:
              "Progressive disclosure only works if the 'progression' is something users stumble into naturally, not a feature they have to go looking for.",
          },
        ],
      },
      {
        tags: ["Trust", "Error Recovery"],
        title: "Undo is always visible, never buried",
        image: {
          src: "/images/projects/design-editor/cover.svg",
          alt: "Undo affordance placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "First-time users experiment more freely when the cost of a mistake is visibly low. A persistent, always-reachable undo does more for confidence than any onboarding tooltip.",
          },
          {
            label: "Business impact",
            content:
              "Session recordings showed a clear link between how often new users touched undo early in a session and whether they published a first design at all.",
          },
          {
            label: "What often goes wrong",
            content:
              "Burying undo inside a menu to save toolbar space quietly tells cautious users the product doesn't expect them to make mistakes — which is exactly backwards for this audience.",
          },
        ],
      },
    ],
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
    patterns: [
      {
        tags: ["Information Architecture", "Consolidation"],
        title: "One calendar replaces three separate tools",
        image: {
          src: "/images/projects/automation-suite/cover.svg",
          alt: "Unified calendar placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "Small business owners don't think of email, social, and scheduling as separate jobs — they think of 'getting this campaign out.' One calendar matches how they actually plan their week.",
          },
          {
            label: "Business impact",
            content:
              "Consolidating the view didn't just save clicks — it surfaced scheduling conflicts (a social post and an email landing the same hour) that used to go unnoticed across three disconnected tools.",
          },
          {
            label: "Implementation considerations",
            content:
              "Merging three tools' worth of status states into one calendar meant agreeing on a single shared vocabulary for 'draft,' 'scheduled,' and 'live' across teams that previously used their own terms.",
          },
        ],
      },
      {
        tags: ["Visual Hierarchy", "Scannability"],
        title: "Campaign status uses color before it uses words",
        image: {
          src: "/images/projects/automation-suite/cover.svg",
          alt: "Status color-coding placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "A busy owner scanning a week of campaigns shouldn't have to read every label. Color lets 'what needs my attention' register before any text does.",
          },
          {
            label: "When to apply it",
            content:
              "This earns its complexity when users are scanning many items quickly under time pressure — it's overkill for a screen with two or three statuses total.",
          },
          {
            label: "What often goes wrong",
            content:
              "Color-only status systems exclude colorblind users and anyone skimming in bright sunlight on a phone — color should reinforce a label, not replace it entirely.",
          },
        ],
      },
      {
        tags: ["Onboarding", "Commitment"],
        title: "Guided setup commits users one small step at a time",
        image: {
          src: "/images/projects/automation-suite/cover.svg",
          alt: "Guided setup flow placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "Asking a new user to configure scheduling, email, and social in one long form invites abandonment. Breaking it into small, individually-completable steps turns setup into a series of easy yeses.",
          },
          {
            label: "Actionable takeaway",
            content:
              "Measure setup funnels step-by-step, not just start-to-finish — the step with the steepest drop-off tells you exactly where the form is asking for too much too soon.",
          },
        ],
      },
    ],
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
    patterns: [
      {
        tags: ["Clarity", "Activation"],
        title: "Every screen points at one milestone",
        image: {
          src: "/images/projects/onboarding-revamp/cover.svg",
          alt: "Single-milestone onboarding placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "The old flow introduced the product's full feature set up front. The new one asks only 'have you reached first value yet?' at every step, which gave every screen a single, unambiguous job.",
          },
          {
            label: "When to apply it",
            content:
              "This works when a product has one clear activation moment. If there are several equally valid 'first wins,' forcing a single milestone can actually mislead some user segments.",
          },
          {
            label: "Implementation considerations",
            content:
              "Defining the milestone required pulling actual retention data, not just a product team's opinion of what 'aha' should look like.",
          },
        ],
      },
      {
        tags: ["Motivation", "Progress Indicators"],
        title: "Progress is shown before it's earned",
        image: {
          src: "/images/projects/onboarding-revamp/cover.svg",
          alt: "Progress indicator placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "A visible progress bar that starts partially filled (rather than at zero) leverages the same endowed-progress effect used in loyalty programs — users are more likely to finish something they've already 'started.'",
          },
          {
            label: "What often goes wrong",
            content:
              "Overstating progress erodes trust fast — if the bar says 80% and the user clearly isn't close to done, every future progress indicator in the product stops being believed.",
          },
          {
            label: "Accessibility angle",
            content:
              "The progress state needs a text equivalent for screen readers, not just a visual bar — 'step 2 of 4' should always be present in the markup, not implied by color or fill width alone.",
          },
        ],
      },
      {
        tags: ["Measurement", "Business Impact"],
        title: "The A/B test measured activation, not clicks",
        image: {
          src: "/images/projects/onboarding-revamp/cover.svg",
          alt: "Activation funnel measurement placeholder mockup",
          width: 1600,
          height: 1200,
        },
        sections: [
          {
            label: "Why it works",
            content:
              "Early tests optimized for onboarding completion rate, which quietly rewarded flows that were just shorter, not more effective. Switching the success metric to week-one retention changed which version actually won.",
          },
          {
            label: "Business impact",
            content:
              "The variant with the higher completion rate actually retained worse — it was correctly flagged as a loss once retention, not completion, was the metric being tested.",
          },
          {
            label: "Actionable takeaway",
            content:
              "Pick the A/B test metric that's closest to the business outcome you actually care about, even if it takes longer to reach significance than an easier proxy metric would.",
          },
        ],
      },
    ],
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
