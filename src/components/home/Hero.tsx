import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Truck, ShoppingCart, PanelsTopLeft, Component } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ScreenFolders } from "@/components/home/ScreenFolders";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="home-hero font-jb flex flex-col items-center px-6 pt-32 text-center sm:pt-40">
      <div className="mobile-home-intro">
        <h1>Hey, I’m Abhay Maske</h1>
        <p className="font-normal">I overthink so users don’t have to, designing clear, intuitive experiences from 3+ years of product design experience.</p>
        <Link href="/work" className="mobile-projects-button">View Projects <ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
      <h1 className="desktop-home-copy max-w-[835px] text-[32px] leading-[1.3] font-medium text-foreground sm:text-[48px] sm:leading-[62.4px]">
        {hero.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p className="desktop-home-copy mt-5 w-full max-w-[760px] font-sans text-base font-normal leading-[20.8px] text-muted-foreground">
        <span className="block">{hero.subtext.split(" good use")[0]}</span>
        <span className="block">good use{hero.subtext.split(" good use")[1].split(" easier")[0]}</span>
        <span className="block">easier{hero.subtext.split(" easier")[1]}</span>
      </p>

      <section id="mobile-projects" className="mobile-home-projects" aria-labelledby="mobile-projects-title">
        <h2 id="mobile-projects-title">Projects</h2>
        <ul className="mobile-projects-track" aria-label="Projects — swipe to explore">
          {[
            { title: "Growve CRM", category: "CRM", image: "growve-crm", href: "/work/automation-suite", icon: PanelsTopLeft },
            { title: "RedFox Courier", category: "Logistics", image: "redfox", href: "/work/redfox-courier", icon: Truck },
            { title: "Atlantic Ocean", category: "eCommerce", image: "globe365-india", href: "/work/design-editor", icon: ShoppingCart },
            { title: "Growve Design System", category: "Design System", image: "growve-design-system", href: "/work/onboarding-revamp", icon: Component },
          ].map(({ title, category, image, href, icon: Icon }) => (
            <li key={title}>
              <Link href={href} className="mobile-project-card">
                <Image src={`/images/projects/banners/${image}.png`} alt={`${title} design preview`} width={242} height={140} sizes="242px" />
                <div className="mobile-project-caption">
                  <Icon size={16} aria-hidden="true" />
                  <div><h3>{title}</h3><p>•&nbsp; {category}</p></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="home-monitor mt-16 w-full max-w-[1600px] px-6 sm:px-[120px]">
        <div className="relative aspect-square w-full">
          <Image
            src="/images/hero/sleeping-cat-retro-monitor.png"
            alt="A red retro desktop computer with a sleeping orange cat curled up beside it on the desk"
            fill
            priority
            sizes="(min-width: 1600px) 1360px, (min-width: 640px) calc(100vw - 240px), calc(100vw - 48px)"
            className="object-contain object-top"
          />
          <div className="desktop-screen-folders"><ScreenFolders /></div>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Abhay Maske on LinkedIn (opens in a new tab)"
            className="mobile-linkedin-screen crt-screen absolute overflow-hidden md:hidden"
          >
            <span className="linkedin-bounce-x" aria-hidden="true">
              <span className="linkedin-bounce-y">
                <Image src="/images/hero/Linked icon.png" alt="" width={44} height={44} sizes="44px" className="linkedin-crt-icon" />
              </span>
            </span>
            <span className="linkedin-screen-caption" aria-hidden="true">LET’S CONNECT ↗</span>
            <span className="crt-overlay" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
