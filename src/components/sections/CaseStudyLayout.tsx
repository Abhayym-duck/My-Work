import Link from "next/link";
import type { ReactNode } from "react";
import type { Project, ProjectImage } from "@/types/project";
import { ZoomableImage } from "@/components/case-study/ZoomableImage";
import { StoryBody } from "@/components/case-study/StoryBody";
import s from "@/components/case-study/RedFoxCaseStudy.module.css";

function ProjectFigure({ image, preload = false }: { image: ProjectImage; preload?: boolean }) {
  return <figure className={s.productImage}>
    <ZoomableImage {...image} sizes="(max-width: 600px) calc(100vw - 40px), 560px" preload={preload} />
    {image.caption && <figcaption className={s.caption}>{image.caption}</figcaption>}
  </figure>;
}

function Chapter({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className={s.chapter}>
    <header><p className={s.eyebrow}>{label}</p><h2>{title}</h2></header>
    {children}
  </section>;
}

export function CaseStudyLayout({ project }: { project: Project }) {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <p className={s.eyebrow}>{project.title}</p>
      <h1>{project.title}</h1>
      <p>{project.story?.intro ?? project.shortDescription}</p>
      <div className={s.metadata}>{project.role}<br />{project.category} · {project.year}</div>
    </header>
    <ProjectFigure image={project.coverImage} preload />

    {project.story ? <StoryBody story={project.story} /> : <>
      <Chapter label="The challenge" title="The problem to solve.">
        <p>{project.challenge}</p>
      </Chapter>
      <Chapter label="Our approach" title="How we approached the design.">
        <p>{project.solution}</p>
        <ul className={s.list}>{project.process.map(step => <li key={step}>{step}</li>)}</ul>
      </Chapter>
      {project.patterns?.map(pattern => <Chapter key={pattern.title} label={pattern.tags.join(" · ")} title={pattern.title}>
        {pattern.sections.map(section => <div className={s.note} key={section.label}>
          <h3>{section.label}</h3><p>{section.content}</p>
        </div>)}
        <ProjectFigure image={pattern.image} />
      </Chapter>)}
      {project.outcomes.length > 0 && <Chapter label="Outcome" title="What our work brought together.">
        <ul className={s.list}>{project.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>
      </Chapter>}
    </>}

    {project.reflection && <Chapter label="Reflection" title={project.reflection.title}>
      {project.reflection.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </Chapter>}
    <div className={s.end}><Link href="/work">&larr; All work</Link><a href="#top">Back to top &uarr;</a></div>
  </article>;
}
