import Image from "next/image";
import type { Project } from "@/types/project";
import { getAllProjects } from "@/data/projects";
import { PatternsSection } from "@/components/case-study/PatternsSection";
import { SimilarLessons } from "@/components/case-study/SimilarLessons";
import { StoryBody } from "@/components/case-study/StoryBody";
import { StoryRelated } from "@/components/case-study/StoryRelated";
import { ImagePlaceholder } from "@/components/case-study/ImagePlaceholder";

/**
 * Renders a full case study page body from a Project record. Projects with
 * `patterns` get the pattern-by-pattern breakdown template; others fall
 * back to a simple challenge/solution/outcomes layout.
 */
export function CaseStudyLayout({ project }: { project: Project }) {
  const related = getAllProjects()
    .filter((p) => p.slug !== project.slug)
    .slice(0, 4);

  return (
    <article>
      <div className="mx-auto max-w-5xl px-6 pt-16">
        <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-[var(--cs-muted)] uppercase">
          <span>{project.category}</span>
          <span aria-hidden>·</span>
          <span>{project.role}</span>
          <span aria-hidden>·</span>
          <span>Case Study</span>
        </div>

        <h1 className="mt-3 text-3xl font-bold text-balance text-[var(--cs-fg)] sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-3 max-w-2xl text-base text-[var(--cs-muted)] text-pretty">
          {project.shortDescription}
        </p>

        {project.story && (
          <>
            <dl className="mt-8 grid grid-cols-1 gap-4 border-y border-[var(--cs-border)] py-6 sm:grid-cols-[8rem_1fr] sm:gap-x-6">
              {project.story.meta.map((item) => (
                <div key={item.label} className="contents">
                  <dt className="text-xs font-semibold tracking-wide text-[var(--cs-muted)] uppercase sm:pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-[15px] text-[var(--cs-fg)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--cs-muted)]">
              {project.story.intro}
            </p>
          </>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-6">
        {project.story ? (
          <ImagePlaceholder
            id={project.story.hero.id}
            title={project.story.hero.title}
            brief={project.story.hero.brief}
          />
        ) : (
          <div className="relative aspect-16/9 overflow-hidden rounded-2xl border border-[var(--cs-border)]">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {project.story ? (
          <StoryBody story={project.story} />
        ) : project.patterns && project.patterns.length > 0 ? (
          <PatternsSection patterns={project.patterns} />
        ) : (
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold text-[var(--cs-fg)]">
                  Challenge
                </h2>
                <p className="mt-2 text-[15px] text-[var(--cs-muted)]">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[var(--cs-fg)]">
                  Solution
                </h2>
                <p className="mt-2 text-[15px] text-[var(--cs-muted)]">
                  {project.solution}
                </p>
              </div>
            </div>

            {project.outcomes.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-[var(--cs-fg)]">
                  Outcomes
                </h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="text-[15px] text-[var(--cs-muted)]">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {project.story ? (
        <StoryRelated items={project.story.related} />
      ) : (
        <SimilarLessons projects={related} />
      )}
    </article>
  );
}
