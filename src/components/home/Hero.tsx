import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  const { availability, hero, stats } = siteConfig;

  return (
    <section className="relative flex flex-col items-start overflow-hidden pt-14 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-32 h-80 w-80 rounded-full bg-brand-soft opacity-70 blur-3xl"
      />

      <div className="relative">
        {availability.open && (
          <span className="inline-flex items-center gap-2 rounded-(--radius-full) bg-surface px-3.5 py-2 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {availability.label}
          </span>
        )}

        <p className="mt-6 font-serif text-2xl text-muted-foreground italic sm:text-3xl">
          {hero.greeting}
        </p>

        <h1 className="mt-2 max-w-[760px] text-4xl leading-[1.1] font-extrabold tracking-(--tracking-tight) text-balance sm:text-6xl">
          {hero.headline}
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
          {hero.subtext}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-[42px] items-center justify-center rounded-(--radius-md) bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors duration-(--duration-fast) hover:bg-brand-hover"
          >
            Get In Touch
          </a>
          <Link
            href="/about"
            className="inline-flex h-[42px] items-center justify-center rounded-(--radius-md) border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-(--duration-fast) hover:bg-surface"
          >
            About Me
          </Link>
        </div>

        <dl className="mt-12 flex flex-wrap items-start gap-x-10 gap-y-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="order-2 text-sm text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-bold text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
