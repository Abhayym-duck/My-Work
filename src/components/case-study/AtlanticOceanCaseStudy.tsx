import Link from "next/link";
import type { ReactNode } from "react";
import { ZoomableImage } from "./ZoomableImage";
import s from "./RedFoxCaseStudy.module.css";

function Chapter({ title, children }: { title: string; children: ReactNode }) {
  return <section className={s.chapter}><header><h2>{title}</h2></header>{children}</section>;
}

export function AtlanticOceanCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <p className={s.eyebrow}>Atlantic Ocean · E-commerce Website</p>
      <h1>Designing a scalable e-commerce experience focused on clean UI, product discovery, and usability.</h1>
      <div className={s.metadata}>Product Designer · 2025</div>
    </header>
    <figure className={s.productImage}>
      <ZoomableImage src="/images/projects/banners/globe365-india.png" alt="Atlantic Ocean e-commerce website overview." width={968} height={560} sizes="(max-width: 600px) calc(100vw - 40px), 560px" preload />
    </figure>

    <Chapter title="Overview">
      <p>I worked on the UI/UX of an e-commerce platform with a primary focus on <strong>visual design and creating a consistent shopping experience</strong> across the product.</p>
      <p>The platform needed to support a wide range of products and categories while keeping the experience simple and easy to navigate.</p>
    </Chapter>

    <Chapter title="The challenge">
      <p>A large catalogue brings a lot of information — products, pricing, offers, ratings, variants, specifications, and availability. The challenge was to organize this information without making the interface feel overwhelming.</p>
      <p>I focused on creating a clear visual hierarchy and a reusable UI language that could work across different product categories.</p>
    </Chapter>

    <Chapter title="What I worked on">
      <p>I designed key parts of the shopping journey, including:</p>
      <p><strong>Homepage · Category &amp; Listing Pages · Search &amp; Filters · Product Details · Cart · Checkout · Reviews · Account</strong></p>
      <p>For product and listing pages, I focused on making important information such as <strong>product imagery, pricing, discounts, ratings, and actions</strong> easy to scan.</p>
      <p>I also developed reusable patterns for <strong>product cards, buttons, forms, filters, navigation, badges, ratings, and different product states</strong>, helping maintain consistency across the platform.</p>
    </Chapter>

    <Chapter title="Design approach">
      <p>The visual direction focused on <strong>strong product imagery, typography, spacing, and clear hierarchy</strong>. I designed the layouts to be flexible enough to accommodate different categories while maintaining a consistent overall experience.</p>
      <p>The UI was also considered from a responsive perspective, ensuring the system could adapt across different screen sizes.</p>
    </Chapter>

    <Chapter title="Outcome">
      <p>The project created a <strong>clean, structured, and scalable e-commerce UI</strong> that made product discovery easier while providing a consistent experience across the shopping journey.</p>
    </Chapter>

    <Chapter title="My role">
      <p><strong>Product Designer — UI Design · Visual Design · UX · Interaction Design · Responsive Design</strong></p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
