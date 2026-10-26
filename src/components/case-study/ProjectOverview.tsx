import type { Project } from "@/types/project";
import styles from "./CaseStudy.module.css";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <div>
      <header className={styles.intro}>
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--cs-muted)]">Quick overview</p>
        <h1 className="mt-3">{project.title}</h1>
        <p className="mt-4 text-base text-[var(--cs-muted)]">{project.shortDescription}</p>
        <dl className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-[var(--cs-border)] p-5 sm:grid-cols-3">
          {[{ label: "Role", value: project.role }, { label: "Year", value: project.year }, { label: "Tools", value: project.tools.join(", ") }].map((item) => (
            <div key={item.label}>
              <dt className="text-xs text-[var(--cs-muted)]">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>
      <div className={`${styles.body} flex flex-col gap-8`}>
        {project.metrics.length > 0 && (
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl bg-[var(--cs-accent-soft)] p-5">
                <dt className="text-sm text-[var(--cs-muted)]">{metric.label}</dt>
                <dd className="mt-2 text-3xl font-semibold">{metric.value}</dd>
                {metric.description && <p className="mt-2">{metric.description}</p>}
              </div>
            ))}
          </dl>
        )}
        <section><h2>The challenge</h2><p className="mt-3 text-[var(--cs-muted)]">{project.challenge}</p></section>
        <section><h2>The solution</h2><p className="mt-3 text-[var(--cs-muted)]">{project.solution}</p></section>
        {project.process.length > 0 && <section><h2>My approach</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--cs-muted)]">{project.process.map((step) => <li key={step}>{step}</li>)}</ul></section>}
        {project.outcomes.length > 0 && <section><h2>Outcomes</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--cs-muted)]">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>}
      </div>
    </div>
  );
}
