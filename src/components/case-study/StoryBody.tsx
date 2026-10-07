import { ArrowRight, ArrowDown } from "lucide-react";
import type { ProjectStory, StoryBlock } from "@/types/project";
import { ImagePlaceholder } from "./ImagePlaceholder";

function Block({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div>
          {block.label && (
            <h4 className="text-sm font-semibold text-[var(--cs-fg)]">
              {block.label}
            </h4>
          )}
          <div
            className={`flex flex-col gap-3 ${block.label ? "mt-2" : ""}`}
          >
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-[var(--cs-muted)] text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      );

    case "list":
      return (
        <div>
          {block.label && (
            <h4 className="text-sm font-semibold text-[var(--cs-fg)]">
              {block.label}
            </h4>
          )}
          <ul className="flex flex-col gap-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-[var(--cs-fg)]"
              >
                <span
                  aria-hidden
                  className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cs-accent)]"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "flow": {
      const Arrow = block.vertical ? ArrowDown : ArrowRight;
      return (
        <ol
          className={`flex gap-2 ${
            block.vertical ? "flex-col items-start" : "flex-wrap items-center"
          }`}
        >
          {block.steps.map((step, index) => (
            <li
              key={step}
              className={`flex gap-2 ${
                block.vertical ? "flex-col items-start" : "items-center"
              }`}
            >
              <span className="rounded-full border border-[var(--cs-border)] bg-white px-4 py-1.5 text-sm font-medium text-[var(--cs-fg)]">
                {step}
              </span>
              {index < block.steps.length - 1 && (
                <Arrow
                  className="ml-4 h-4 w-4 text-[var(--cs-muted)] sm:ml-0"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      );
    }

    case "steps":
      return (
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[var(--cs-border)] bg-[#fafafa] p-5"
            >
              <h4 className="text-sm font-semibold text-[var(--cs-fg)]">
                {item.title}
              </h4>
              <p className="mt-1.5 text-[15px] text-[var(--cs-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      );

    case "image":
      return (
        <ImagePlaceholder
          id={block.id}
          title={block.title}
          brief={block.brief}
        />
      );

    case "outcome":
      return (
        <div className="rounded-2xl bg-[var(--cs-accent-soft)] p-5">
          <p className="text-xs font-semibold tracking-wide text-[var(--cs-accent)] uppercase">
            Outcome
          </p>
          <p className="mt-1.5 text-[15px] text-[var(--cs-fg)]">
            {block.text}
          </p>
        </div>
      );
  }
}

export function StoryBody({ story }: { story: ProjectStory }) {
  return (
    <div className="flex flex-col gap-20">
      {story.sections.map((section) => (
        <section key={section.title}>
          {section.eyebrow && (
            <p className="text-xs font-semibold tracking-wide text-[var(--cs-accent)] uppercase">
              {section.eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl font-semibold text-balance text-[var(--cs-fg)] sm:text-3xl">
            {section.title}
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-semibold text-[var(--cs-fg)] sm:text-3xl">
          {story.learned.title}
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          {story.learned.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[15px] leading-relaxed text-[var(--cs-muted)] text-pretty"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
