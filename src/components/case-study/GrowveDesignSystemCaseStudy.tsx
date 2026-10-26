import Link from "next/link";
import type { ReactNode } from "react";
import { ZoomableImage } from "./ZoomableImage";
import s from "./RedFoxCaseStudy.module.css";

function Chapter({ label, children }: { label: string; children: ReactNode }) {
  return <section className={s.chapter}><header><h2>{label}</h2></header>{children}</section>;
}

export function GrowveDesignSystemCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <p className={s.eyebrow}>Growve Design System</p>
      <h1>A scalable design foundation built to unify the Growve product ecosystem.</h1>
      <div className={s.metadata}>Product Designer · 2025</div>
    </header>
    <figure className={s.productImage}>
      <ZoomableImage src="/images/projects/banners/growve-design-system.png" alt="Growve Design Guidelines overview." width={968} height={560} sizes="(max-width: 600px) calc(100vw - 40px), 560px" preload />
    </figure>

    <Chapter label="The challenge">
      <p>As Growve&apos;s product ecosystem grew, we were designing multiple applications and internal tools in parallel. Each product had similar patterns, but they weren&apos;t always being solved or implemented in the same way.</p>
      <p>Different approaches to <strong>buttons, inputs, tables, typography, spacing, colors, and interaction states</strong> made the products harder to maintain and created unnecessary design and development effort.</p>
      <p>We needed a shared foundation that could act as the <strong>skeleton for every Growve application.</strong></p>
    </Chapter>

    <Chapter label="Building the foundation">
      <p>I worked on creating the <strong>Growve Design System</strong> — a centralized library of foundations, components, and patterns that could be reused across products.</p>
      <p>The system was structured around:</p>
      <div className={s.note}><h3>Foundations</h3><p>Color, typography, spacing, sizing, borders, elevation, and other core design tokens established the visual language.</p></div>
      <div className={s.note}><h3>Components</h3><p>Frequently used elements such as buttons, inputs, dropdowns, tabs, cards, tables, navigation, and feedback states were designed as reusable building blocks.</p></div>
      <div className={s.note}><h3>Variables &amp; Tokens</h3><p>Figma variables were used to make the system easier to scale and update. Changes to core values could be reflected consistently instead of being manually updated across individual screens.</p></div>
      <div className={s.note}><h3>Patterns</h3><p>Beyond individual components, we established common interaction and layout patterns for recurring product experiences.</p></div>
    </Chapter>

    <Chapter label="From Figma to product">
      <p>The system wasn&apos;t created as a standalone UI library. It was designed to work as the <strong>shared foundation between design and development.</strong></p>
      <p>Components and design decisions were structured with implementation in mind, making it easier for developers to translate the system into reusable product components.</p>
      <p>This created a more consistent workflow:</p>
      <p className={s.scan}>Design system → Product components → Growve applications</p>
    </Chapter>

    <Chapter label="The impact">
      <p>The Growve Design System became the <strong>base layer for the products we were building</strong>, allowing new features and applications to start from an established foundation rather than recreating UI patterns from scratch.</p>
      <p>It helped the team:</p>
      <ul className={s.list}>
        <li>Build new screens faster</li>
        <li>Maintain visual consistency across products</li>
        <li>Reduce repetitive design work</li>
        <li>Create more predictable developer handoffs</li>
        <li>Scale patterns across different applications</li>
        <li>Keep the Growve ecosystem visually connected</li>
      </ul>
    </Chapter>

    <Chapter label="My role">
      <p><strong>Product Designer — Design Systems · UI/UX</strong></p>
      <p>I worked across the system&apos;s <strong>visual foundations, component architecture, Figma variables, reusable patterns, and product application</strong>, helping establish a consistent design language that could scale with Growve.</p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
