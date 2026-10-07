import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectStory } from "@/types/project";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function StoryRelated({ items }: { items: ProjectStory["related"] }) {
  return (
    <section className="border-t border-[var(--cs-border)] bg-[#fafafa]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-lg font-semibold text-[var(--cs-fg)]">
          Similar breakdowns
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item) => {
            const card = (
              <>
                <ImagePlaceholder
                  id={item.image.id}
                  title={item.image.title}
                  className="rounded-xl"
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--cs-fg)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--cs-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cs-muted)]"
                    aria-hidden
                  />
                </div>
              </>
            );
            return item.slug ? (
              <Link key={item.title} href={`/work/${item.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
