import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Renders a full case study page body from a Project record. Adding a new
 * project only requires adding data — this layout stays the same.
 */
export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <article>
      <Container size="narrow" className="pt-12 sm:pt-20">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <Tag>{project.category}</Tag>
              <Tag>{project.year}</Tag>
              <Tag>{project.role}</Tag>
            </div>
            <h1 className="text-4xl font-semibold tracking-(--tracking-tight) text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-(--container-content) text-lg text-muted-foreground text-pretty">
              {project.shortDescription}
            </p>
          </div>
        </Reveal>
      </Container>

      <Container size="wide" className="mt-12 sm:mt-16">
        <Reveal>
          <ImageWrapper
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            width={project.coverImage.width}
            height={project.coverImage.height}
            priority
            className="aspect-16/10"
          />
        </Reveal>
      </Container>

      <Container size="narrow" className="flex flex-col gap-16 py-16 sm:py-24">
        <Reveal as="section" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-(--tracking-wide) text-muted">
              Challenge
            </h2>
            <p className="mt-3 text-base text-foreground text-pretty">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-(--tracking-wide) text-muted">
              Solution
            </h2>
            <p className="mt-3 text-base text-foreground text-pretty">
              {project.solution}
            </p>
          </div>
        </Reveal>

        {project.process.length > 0 && (
          <Reveal as="section">
            <h2 className="text-sm font-medium uppercase tracking-(--tracking-wide) text-muted">
              Process
            </h2>
            <ol className="mt-4 flex flex-col gap-3">
              {project.process.map((step, index) => (
                <li key={step} className="flex gap-4 text-base">
                  <span className="text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        )}

        {project.galleryImages.length > 0 && (
          <Reveal as="section" className="flex flex-col gap-6">
            {project.galleryImages.map((image) => (
              <ImageWrapper
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            ))}
          </Reveal>
        )}

        {(project.outcomes.length > 0 || project.metrics.length > 0) && (
          <Reveal as="section" className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-(--tracking-wide) text-muted">
                Outcomes
              </h2>
              <ul className="mt-4 flex flex-col gap-2">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="text-base text-pretty">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {project.metrics.length > 0 && (
              <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-1">
                    <dt className="text-sm text-muted-foreground">
                      {metric.label}
                    </dt>
                    <dd className="text-2xl font-semibold tracking-(--tracking-tight)">
                      {metric.value}
                    </dd>
                    {metric.description && (
                      <span className="text-xs text-muted">
                        {metric.description}
                      </span>
                    )}
                  </div>
                ))}
              </dl>
            )}
          </Reveal>
        )}
      </Container>
    </article>
  );
}
