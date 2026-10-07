import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ScreenFolders } from "@/components/home/ScreenFolders";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="font-jb flex flex-col items-center px-6 pt-32 text-center sm:pt-40">
      <h1 className="max-w-[835px] text-[32px] leading-[1.3] font-medium text-foreground sm:text-[48px] sm:leading-[62.4px]">
        {hero.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p className="mt-5 max-w-[713px] text-base leading-[20.8px] text-muted-foreground text-balance">
        {hero.subtext}
      </p>

      <div className="mt-16 w-full max-w-[1600px] px-6 sm:px-[120px]">
        <div className="relative aspect-square w-full">
          <Image
            src="/images/hero/sleeping-cat-retro-monitor.png"
            alt="A red retro desktop computer with a sleeping orange cat curled up beside it on the desk"
            fill
            priority
            sizes="(min-width: 1600px) 1360px, (min-width: 640px) calc(100vw - 240px), calc(100vw - 48px)"
            className="object-contain object-top"
          />
          <ScreenFolders />
        </div>
      </div>
    </section>
  );
}
