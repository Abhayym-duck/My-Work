import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.role.toLowerCase()} — background, experience, and approach to design.`,
  path: "/about",
});

// Placeholder copy — replace with the real title and description.
const video = {
  src: "/videos/about-me.mp4",
  title: "Hey, I'm Abhay — a quick intro",
  channel: "Abhayym",
  channelSubtitle: "Product Experience Designer",
  subtitle:
    "A short intro to who I am, how I think about product design, and the kind of problems I like working on.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-4 pt-16 pb-24 sm:px-6">
      <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-black shadow-(--shadow-md)">
        <video
          src={video.src}
          controls
          playsInline
          preload="metadata"
          aria-label={video.title}
          className="h-full w-full object-contain"
        />
      </div>

      <h1 className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
        {video.title}
      </h1>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-base font-semibold text-brand-foreground"
          >
            {video.channel.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-foreground">
              {video.channel}
            </p>
            <p className="truncate text-sm text-muted-foreground">
              {video.channelSubtitle}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>

      <p className="mt-6 rounded-[1.25rem] bg-neutral-100 p-4 text-sm leading-relaxed text-foreground">
        {video.subtitle}
      </p>
    </div>
  );
}
