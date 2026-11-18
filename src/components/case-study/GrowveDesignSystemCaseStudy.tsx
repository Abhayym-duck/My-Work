import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { ZoomableImage } from "./ZoomableImage";
import s from "./RedFoxCaseStudy.module.css";

function Chapter({ label, children }: { label: string; children: ReactNode }) {
  return <section className={s.chapter}><header><h2>{label}</h2></header>{children}</section>;
}

export function GrowveDesignSystemCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <p className={s.eyebrow}>Growve · Design system</p>
      <h1>Creating a shared design foundation for Growve&apos;s product ecosystem.</h1>
      <p>As Growve developed multiple applications and internal tools, teams were solving familiar interface problems in different ways. I created a shared system of foundations, components and patterns to give product design and development a common starting point.</p>
      <a className={s.viewProject} href="https://growve-design-guidelines.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="View project (opens in a new tab)">
        View project <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <div className={s.metadata}>Product Designer · 2025</div>
    </header>

    <section className={s.chapter} aria-labelledby="business-impact">
      <header><p className={s.eyebrow}>Business impact</p><h2 id="business-impact">A common foundation for consistent product growth.</h2></header>
      <p>The design system became the base layer for Growve products in development, giving teams a reusable starting point instead of repeating foundational UI decisions across tools. It supported more consistent interfaces and clearer design-to-development handoffs; time saved and system adoption were not formally measured.</p>
    </section>

    <figure className={s.productImage}>
      <ZoomableImage src="/images/projects/banners/growve-design-system.png" alt="Growve Design Guidelines overview." width={968} height={560} sizes="(max-width: 600px) calc(100vw - 40px), 560px" preload />
    </figure>

    <Chapter label="Benefits for the team and product">
      <p>The system addressed day-to-day friction while giving the product ecosystem room to grow.</p>
      <ul className={s.list}>
        <li><strong>Less repeated design work.</strong> Teams could start with established components and patterns instead of recreating common UI.</li>
        <li><strong>More consistent experiences.</strong> Shared foundations aligned visual details and interaction states across applications.</li>
        <li><strong>Clearer collaboration.</strong> Designers and developers could refer to the same decisions when shaping and implementing product interfaces.</li>
      </ul>
    </Chapter>

    <Chapter label="Why Growve needed a shared system">
      <p>Multiple products were being designed in parallel, with recurring elements such as buttons, inputs, tables, typography, spacing and interaction states. Without shared standards, teams made those decisions repeatedly and sometimes differently.</p>
      <p>That inconsistency made products harder to maintain and created avoidable design and development effort. Growve needed a foundation that could support individual tools while keeping the wider ecosystem coherent.</p>
    </Chapter>

    <Chapter label="How I built the system">
      <p>I organized the system into layers so teams could reuse decisions at the right level, from core visual rules to complete interface patterns.</p>
      <div className={s.note}>
        <h3>Foundations and variables</h3>
        <p>I defined color, typography, spacing, sizing, borders and elevation, then used Figma variables to make shared values easier to maintain and update.</p>
      </div>
      <div className={s.note}>
        <h3>Reusable components</h3>
        <p>I created building blocks for recurring interface needs, including buttons, inputs, dropdowns, tabs, cards, tables, navigation and feedback states.</p>
      </div>
      <div className={s.note}>
        <h3>Patterns for common tasks</h3>
        <p>I defined recurring layout and interaction patterns so teams could apply components consistently within product experiences.</p>
      </div>
    </Chapter>

    <Chapter label="From Figma to product">
      <p>I shaped components and design decisions with implementation in mind, making the system a shared reference for design and development rather than a standalone visual library. The intent was to help developers translate established patterns into reusable product components.</p>
      <p className={s.scan}>Foundations and patterns → Product components → Growve applications</p>
    </Chapter>

    <Chapter label="Outcome">
      <p>The result was a centralized design foundation used as the base layer for products Growve was building. New screens and features could draw on established standards, supporting a connected product experience as the ecosystem expanded.</p>
    </Chapter>

    <Chapter label="My role">
      <p><strong>Product Designer · Design systems · UI/UX</strong></p>
      <p>I worked across the visual foundations, component architecture, Figma variables, reusable patterns and application of the system to Growve products.</p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
