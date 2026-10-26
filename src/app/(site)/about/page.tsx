import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { AboutVideo } from "@/components/sections/AboutVideo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.role.toLowerCase()} — background, experience, and approach to design.`,
  path: "/about",
});

const video = {
  src: "/videos/about-me-web.mp4",
  title: "Hey, I'm Abhay — a quick intro",
  channel: "Abhayym",
  channelSubtitle: "Product Experience Designer",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-24">
      <AboutVideo src={video.src} title={video.title} />

      <h1 className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
        {video.title}
      </h1>

      <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            width={44}
            height={44}
            sizes="44px"
            className="size-11 shrink-0 rounded-full object-cover"
          />
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
          href={`mailto:${siteConfig.email}`}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>

    </div>
  );
}
