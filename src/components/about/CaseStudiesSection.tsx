import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";

type CaseStudy = {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  bg: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Real time AI commentary",
    description:
      "Designing a real-time AI experience that increased free trial starts by 162%.",
    tags: ["AI Prediction", "Monetisation"],
    emoji: "📱",
    bg: "bg-[#efe6da]",
  },
  {
    title: "AI-powered padel intelligence platform",
    description:
      "Scaling the new design to 3 international markets (Dubai, London, Spain), achieving 88% first-time user activation.",
    tags: ["Video Analytics", "Sports Intelligence"],
    emoji: "🎾",
    bg: "bg-[#1c2333]",
  },
  {
    title: "Reducing drop off at checkout",
    description:
      "How we reduced cart abandonment by 18% and increased AOV by 24%.",
    tags: ["Personalisation", "E-commerce"],
    emoji: "🛒",
    bg: "bg-[#dbe8f7]",
  },
  {
    title: "The interview scheduler",
    description:
      "Documenting how we made hiring easier and 2X faster for our customers.",
    tags: ["Application Tracking", "Chat"],
    emoji: "🗓️",
    bg: "bg-[#dfeee1]",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-background py-(--spacing-section-y)">
      <div className="mx-auto max-w-(--container-default) px-6 sm:px-8 lg:px-12">
        <p className="text-xs font-medium uppercase tracking-(--tracking-wide) text-muted">
          Case studies
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-(--tracking-tight) sm:text-4xl">
          Think. Design. Develop. Launch.
          <br />
          <span className="text-muted-foreground">Repeat</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="group flex flex-col gap-4">
              <div
                className={`relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl ${study.bg}`}
              >
                <span className="text-6xl">{study.emoji}</span>
                <ArrowUpRight
                  size={16}
                  className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-neutral-800"
                  aria-hidden
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">{study.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {study.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
