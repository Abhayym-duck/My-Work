import Link from "next/link";
import type { ReactNode } from "react";
import { ZoomableImage } from "./ZoomableImage";
import s from "./RedFoxCaseStudy.module.css";

function Chapter({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className={s.chapter}>
    <header><p className={s.eyebrow}>{number}</p><h2>{title}</h2></header>
    {children}
  </section>;
}

export function GrowveCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <h1>Growve CRM</h1>
      <p className={s.decision}>Modernising a complex CRM workflow into a clearer CRM product experience.</p>
      <p>Growve’s CRM, handling around 1,000+ orders daily, had become outdated and difficult to navigate. Teams spent significant manual effort tracking order journeys and managing new orders. Working with stakeholders, I redesigned the experience end-to-end.</p>
      <dl className={s.record}>
        <div><dt>Role</dt><dd>Product Experience Designer</dd></div>
        <div><dt>Year</dt><dd>2025–2026</dd></div>
        <div><dt>Scope</dt><dd>Strategy, UX/UI Design, Research</dd></div>
      </dl>
    </header>

    <Chapter number="01" title="The challenge">
      <p>This was a completely new domain for me. With no detailed documentation, I had to learn the complex e-commerce, dropshipping and logistics workflows before designing. The goal was to speed up task completion and save time, money and resources without disrupting existing workflows.</p>
    </Chapter>

    <Chapter number="02" title="Collaboration">
      <p>I worked directly with business stakeholders, the dropshipping manager and developers from discovery through execution, keeping the design aligned with business goals and technical feasibility. I also owned the research, grounding the redesign in real user workflows.</p>
    </Chapter>

    <Chapter number="03" title="Designing for existing users">
      <p>Warehouse workers and managers were the two main user groups. The CRM also needed to be easy for the business owner to understand and quickly check the status of any order.</p>
      <p>The senior developer and I interviewed users to understand where the previous platform fell short, and met with business stakeholders to gather requirements. We asked:</p>
      <ul className={s.list}>
        <li>“Can you walk me through how you currently use the CRM?”</li>
        <li>“Show me how you process a new order.”</li>
        <li>“What issues do you face while processing an order?”</li>
        <li>“What suggestions do you have for the current flow?”</li>
        <li>“Which existing functionality should we preserve?”</li>
        <li>“What do you need, and what functionality would you like?”</li>
      </ul>
      <p>These conversations helped us understand what users currently used, their pain points and what needed to improve. We used their answers to review the existing experience.</p>
    </Chapter>

    <Chapter number="04" title="Design process">
      <p>Most discussions happened in Excel, where the business owner was most comfortable. He explained the flow of each journey, and we discussed how to structure the data tables, their information and the flows.</p>
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/Growve CRM Internal/Excel.png"
          alt="Excel document used to discuss the shipment journey, showing parcel dimensions, shipment receipt and received shipment data."
          width={2002}
          height={1308}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
        <figcaption className={s.caption}>Excel document used to discuss shipment flows and data with the business owner.</figcaption>
      </figure>
    </Chapter>

    <Chapter number="05" title="Key features">
      <h3>Order management</h3>
      <p>Connected order details, inventory and shipping information so teams could follow an order’s journey and manage new orders.</p>
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/Growve CRM Internal/Order Management.png?v=2222fcdb5c"
          alt="Growve CRM order management screens showing order information and workflows."
          width={5760}
          height={3224}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
      </figure>
      <h3>Shipment tracking, returns and claims</h3>
      <p>Made shipment stages, including international journeys, easier to follow, with visibility into returns and safety claims that needed attention.</p>
      <h3>Warehouse inventory and resale</h3>
      <p>Helped teams track warehouse stock and identify products that could be sold again.</p>
    </Chapter>

    <Chapter number="06" title="Result / Impact">
      <ul className={s.list}>
        <li><strong>20%</strong> growth in order processing</li>
        <li><strong>15%</strong> increase in orders handled</li>
        <li><strong>25%</strong> faster delivery to customers</li>
      </ul>
      <p>The success of the CRM helped Growve venture further into e-commerce.</p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
