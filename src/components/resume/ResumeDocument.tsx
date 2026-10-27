import { resume } from "@/data/resume";

/**
 * Plain, single-column, text-only resume markup (semantic headings, lists,
 * real text) so ATS parsers and PDF text extraction read it in order.
 * All sizing is in em; the wrapper sets the base font size.
 */
function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-[1.6em] border-b border-neutral-300 pb-[0.35em] text-[0.95em] font-bold tracking-[0.08em] text-neutral-900 uppercase">
      {children}
    </h2>
  );
}

export function ResumeDocument() {
  return (
    <div className="font-sans [overflow-wrap:anywhere] leading-[1.5] text-neutral-800">
      <header>
        <h1 className="text-[2.3em] leading-tight font-bold text-neutral-900">
          {resume.name}
        </h1>
        <p className="text-[1.2em] font-medium text-neutral-700">
          {resume.title}
        </p>
        <p className="mt-[0.6em]">{resume.location}</p>
        <div className="mt-[0.6em] flex flex-wrap gap-2">
          {resume.contact.map((item) => (
            <a
              key={item.label}
              href={item.href}
              title={item.title ?? item.label}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 px-[1em] py-[0.4em] text-[0.95em] font-medium text-neutral-900 transition-colors hover:border-neutral-500 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section>
        <SectionHeading>Professional Summary</SectionHeading>
        <p className="mt-[0.8em]">{resume.summary}</p>
      </section>

      <section>
        <SectionHeading>Experience</SectionHeading>
        {resume.experience.map((job) => (
          <div key={job.company} className="mt-[1em] first:mt-[0.8em]">
            {job.roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 print:flex-row print:items-baseline print:justify-between print:gap-4"
              >
                <h3 className="font-bold text-neutral-900">
                  {job.company} —{" "}
                  <span className="font-semibold">{role.title}</span>
                </h3>
                <span className="shrink-0 whitespace-nowrap">{role.dates}</span>
              </div>
            ))}
            <ul className="mt-[0.4em] list-disc pl-[1.3em] marker:text-neutral-500">
              {job.bullets.map((bullet) => (
                <li key={bullet.text} className="mt-[0.3em]">
                  {bullet.lead && (
                    <strong className="font-semibold text-neutral-900">
                      {bullet.lead}:{" "}
                    </strong>
                  )}
                  {bullet.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <SectionHeading>Skills</SectionHeading>
        <ul className="mt-[0.8em]">
          {resume.skills.map((group) => (
            <li key={group.label} className="mt-[0.3em]">
              <strong className="font-semibold text-neutral-900">
                {group.label}:
              </strong>{" "}
              {group.items}
            </li>
          ))}

        </ul>
      </section>

      <section>
        <SectionHeading>Education</SectionHeading>
        <div className="mt-[0.8em] flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 print:flex-row print:items-baseline print:justify-between print:gap-4">
          <p>
            <strong className="font-semibold text-neutral-900">
              {resume.education.degree}
            </strong>
            , {resume.education.school}
          </p>
          <span className="shrink-0 whitespace-nowrap">
            {resume.education.dates}
          </span>
        </div>
      </section>

      <section>
        <SectionHeading>Certification</SectionHeading>
        <p className="mt-[0.8em]">{resume.certification}</p>
      </section>
    </div>
  );
}
