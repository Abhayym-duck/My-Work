type Experiment = {
  title: string;
  description: string;
  emoji: string;
  bg: string;
  fg: string;
};

const experiments: Experiment[] = [
  {
    title: "Claude design + Figma MCP",
    description:
      "Translated a concept into a working landing page using Claude in 5 hours.",
    emoji: "🎨",
    bg: "bg-[#bcd7ea]",
    fg: "text-neutral-900",
  },
  {
    title: "Cursor + Github",
    description:
      "Built and shipped a pixel-perfect portfolio using Cursor AI agents.",
    emoji: "💻",
    bg: "bg-[#141414]",
    fg: "text-neutral-50",
  },
  {
    title: "Claude + GPT",
    description:
      "Eliminated manual color picking by automating HEX code extraction.",
    emoji: "🌈",
    bg: "bg-[#f3ded6]",
    fg: "text-neutral-900",
  },
];

export function GenAISection() {
  return (
    <section className="bg-background py-(--spacing-section-y)">
      <div className="mx-auto max-w-(--container-default) px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-semibold tracking-(--tracking-tight) sm:text-4xl">
          Gen AI experiments
        </h2>
        <p className="mt-2 font-serif text-lg italic text-muted-foreground">
          Late-night explorations with AI
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-4 sm:grid-cols-3 sm:p-6">
          {experiments.map((exp) => (
            <article key={exp.title} className="flex flex-col gap-4">
              <div
                className={`flex aspect-video items-center justify-center rounded-lg ${exp.bg}`}
              >
                <span className="text-5xl">{exp.emoji}</span>
              </div>
              <div>
                <h3 className="text-base font-medium">{exp.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exp.description}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-foreground underline underline-offset-4">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
