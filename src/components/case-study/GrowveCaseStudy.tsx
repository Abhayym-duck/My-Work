import Link from "next/link";
import type { ReactNode } from "react";
import { ZoomableImage } from "./ZoomableImage";
import { OperationalFlow } from "./OperationalFlow";
import s from "./RedFoxCaseStudy.module.css";


function ProductImage({ file, version, alt, width = 5760, height = 3224 }: { file: string; version: string; alt: string; width?: number; height?: number }) {
  return <figure className={s.productImage}>
    <ZoomableImage
      src={`/images/projects/Growve CRM Internal/${file}?v=${version}`}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 600px) calc(100vw - 40px), 560px"
    />
  </figure>;
}

function Chapter({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className={s.chapter}>
    <header><p className={s.eyebrow}>{number}</p><h2>{title}</h2></header>
    {children}
  </section>;
}

export function GrowveCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <h1>Growve had outgrown the system that ran it.</h1>
      <p>Growve is a dropshipping company started by two college friends. By the time I joined, it had been operating for around five years. Its internal CRM had grown alongside the business, but the demands on it had changed.</p>
      <p>Orders connected to inventory, warehouses and shipping. Returns and safety claims needed attention. International operations were adding more stages to track. The existing product was struggling to make those workflows manageable.</p>
      <p>This was the first major product I worked on at Growve. My work focused on redesigning the internal system around how the business now operated, and the complexity it needed to support next.</p>
    </header>
    <figure className={s.productImage}>
      <ZoomableImage
        src="/images/projects/banners/growve-crm.png"
        alt="Growve CRM internal operations platform overview."
        width={968}
        height={560}
        sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        preload
      />
    </figure>

    <Chapter number="02" title="Understanding the business behind the interface.">
      <p>Before I could decide how to organise the interface, I had to understand what happened after an order was placed. Where did it go next? How did inventory affect it? What happened inside the warehouse, and what information did the shipping workflow need?</p>
      <p>I also had to understand the less straightforward paths: a returned product, a safety claim, an order that needed investigation. Each brought different information and decisions into the same system.</p>
      <p>I was learning the business through the product that ran it. That gave the design a clearer starting point: the work people needed to do at each stage.</p>
      <OperationalFlow />
    </Chapter>

    <Chapter number="03" title="Following the order made the complexity clearer.">
      <p>A single order touched several parts of the business. Looking across its lifecycle helped me understand the connections the product needed to represent.</p>
      <p className={s.scan}>Order placed → Processing → Inventory → Warehouse → Shipping → Delivery</p>
      <p>That was a way to understand the journey, rather than a fixed sequence for every order. A failed delivery could lead to a return or claim. A product could remain in warehouse inventory, with resale becoming a possible next step.</p>
      <p>International shipping extended that journey. The team needed visibility into the stages between dispatch and delivery, including what had happened and what still needed attention.</p>
    </Chapter>

    <Chapter number="04" title="Redesigning around what people needed to know and do.">
      <p>The previous system had developed around individual operational needs. As those needs grew, it became harder to follow related information across workflows and understand the state of a record.</p>
      <p>I approached the redesign through the questions at each stage: what matters now, what explains the current situation, and what can the operator do next?</p>
      <p>That guided the information hierarchy. Important details needed to be easy to scan, different operational states needed to be distinguishable, and related information needed to stay connected. Actions also needed to follow a consistent logic as people moved between workflows.</p>
      <p>The aim was to give new requirements a place in the product without making every addition another isolated screen.</p>
      <ProductImage file="CRM MAIN INTERFACE.png" version="5afcd5ed70" alt="Growve CRM main interface." />
    </Chapter>

    <Chapter number="05" title="Orders needed context, not just a place in a list.">
      <p>An order carried more than its current status. It connected products, inventory and shipping information, along with a history that could explain a later issue.</p>
      <p>I treated order management as a way to understand a record and act on it. The design needed to help an operator answer: where is this order, what happened previously, is something wrong, and what needs to happen next?</p>
      <p>This meant considering the current state alongside its context. A status was only useful if the person reading it could understand what it meant for the order and which related information mattered.</p>
      <ProductImage file="Order Management.png" version="2222fcdb5c" alt="Growve CRM order management interface." />
    </Chapter>

    <Chapter number="06" title="Returns and claims were part of the core workflow.">
      <p>Returns were an operational and financial concern. When a returned product became difficult to track, the business could lose sight of both the work required and the value still tied up in it.</p>
      <p>Safety claims also needed a clear status and history. A damaged product, a shipment issue or an order requiring investigation could not be understood from the successful delivery path alone.</p>
      <p>I designed around these exceptions as ongoing work: something with a current state, relevant information and a next decision. Making them visible was essential to keeping them manageable after the original shipment had stopped progressing as expected.</p>
      <ProductImage file="Reverse Pickup.png" version="66be28fc78" alt="Growve CRM reverse pickup workflow." width={4320} height={2418} />
    </Chapter>

    <Chapter number="07" title="Making the international journey understandable.">
      <p>International shipping made the limits of a single shipment status much clearer. The journey was longer, with more stages between an order leaving one part of the operation and arriving at its destination.</p>
      <p>The team needed to understand where a shipment currently was, which stages it had passed through, and what came next. If progress slowed, they also needed enough context to understand where attention was required.</p>
      <p>I approached this as a hierarchy problem: make the current stage clear, preserve the journey around it, and keep the information relevant to that stage understandable. Giving every detail equal weight would make the shipment harder to follow.</p>
      <p>The design needed to support both a quick reading of progress and a closer look when an operator needed to understand a particular stage.</p>
      <ProductImage file="International SHipment journey.png" version="bb2444d081" alt="Growve CRM international shipment journey." />
    </Chapter>

    <Chapter number="08" title="Warehouse inventory could still have a next step.">
      <p>A product sitting in a warehouse represented value tied up in stock. Knowing that it existed was only the start; the team also needed to understand its state and what could happen to it next.</p>
      <p>Resale made that distinction particularly important. The internal product needed to help Growve identify warehouse products that could potentially be sold again, rather than letting them disappear into inventory records.</p>
      <p>This connected an operational view to a business decision. Better visibility could help the team recognise an opportunity to recover value, without assuming every stored product was eligible for resale.</p>
      <ProductImage file="Warehouse resell flow.png" version="f48fd387cf" alt="Growve CRM warehouse inventory and resale workflow." />
    </Chapter>

    <Chapter number="09" title="The relationships mattered as much as the screens.">
      <p>Orders depended on inventory. Inventory connected to warehouses. Shipping connected to delivery, while a failed journey could return to the system as a return or claim. Warehouse stock could also become part of a resale workflow.</p>
      <p>Those relationships shaped how I thought about system design. I needed to consider what a state meant across workflows, which information carried forward, and how a change in one place affected the decisions people made elsewhere.</p>
      <p>Consistent structures and reusable patterns mattered because people were moving through the same business from different starting points. As the operation grew, the product needed a shared logic that could accommodate more states and relationships.</p>
      <ProductImage file="Design System.png" version="a99499da55" alt="Growve CRM design system." width={1399} height={806} />
    </Chapter>

    <Chapter number="10" title="A more structured foundation for operations.">
      <p>The redesign brought orders, inventory, warehouses, shipping, returns and claims into a more structured operational experience. Its focus was clearer visibility into records, their journeys and the exceptions that needed attention.</p>
      <p>It gave international workflows a place in the product and made warehouse inventory relevant to decisions about potential resale. Together, these changes created a foundation for handling more complex operations as Growve continued to grow.</p>
      <p>The value of that work was in how the product represented the business: connected workflows, clearer states and information people could use to understand what needed to happen next.</p>
    </Chapter>

    <Chapter number="11" title="What this project taught me.">
      <p>Growve CRM was my first major product after joining the company, and it changed how I thought about Product Design. Until then, I had mostly understood products through individual screens and interactions. This project made me look at what was happening behind them.</p>
      <p>My biggest learning was system design: how information moves between workflows, how different teams depend on the same data, and how one operational decision can affect another part of the business. I began to see states and relationships as part of the design work itself.</p>
      <p>I also learned what happens after someone presses Buy. I followed the journey through processing, inventory, warehouses, shipping and delivery, then learned what happens when it breaks into returns, claims or other exceptions. International shipping made those connections even more apparent.</p>
      <p>I started asking more than <strong>“What should this screen look like?”</strong> I wanted to understand: <strong>“What is happening in the system, who needs to know, and what happens next?”</strong></p>
      <p>I now bring those questions into my work much earlier. Learning to design around the operation behind an interface was one of the biggest steps in my growth as a Product Designer.</p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
