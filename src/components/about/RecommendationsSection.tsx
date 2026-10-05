type Recommendation = {
  quote: string;
  name: string;
  role: string;
};

const recommendations: Recommendation[] = [
  {
    quote:
      "In her short time at the company, she delivered quality work with precision and care. She has proven to be someone whom the team can rely on.",
    name: "Hazel Miro",
    role: "Design Director",
  },
  {
    quote:
      "A talented designer with a sharp eye for detail and a great balance of usability and aesthetics. She will add tremendous value to any team she joins.",
    name: "Vikram Shah",
    role: "Co-founder & CTO",
  },
  {
    quote:
      "Smart, reliable, and a pleasure to collaborate with — she consistently raised the bar for our product's design quality.",
    name: "Priya Nair",
    role: "Product Manager",
  },
];

export function RecommendationsSection() {
  return (
    <section className="bg-background py-(--spacing-section-y)">
      <div className="mx-auto max-w-(--container-default) px-6 text-center sm:px-8 lg:px-12">
        <h2 className="text-xs font-semibold uppercase tracking-(--tracking-wide) text-muted">
          Recommendations
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 text-left sm:grid-cols-3">
          {recommendations.map((rec) => (
            <figure key={rec.name} className="flex flex-col gap-6">
              <blockquote className="text-sm text-muted-foreground">
                &ldquo;{rec.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-medium text-muted-foreground">
                  {rec.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium">{rec.name}</span>
                  <span className="text-xs uppercase tracking-(--tracking-wide) text-muted">
                    {rec.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
