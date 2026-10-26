import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ZoomableImage } from "./ZoomableImage";
import s from "./RedFoxCaseStudy.module.css";

function Chapter({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return <section id={id} className={s.chapter}><header><p className={s.eyebrow}>{label}</p><h2>{title}</h2></header>{children}</section>;
}
function Note({ label, children }: { label: string; children: ReactNode }) {
  return <div className={s.note}><h3>{label}</h3>{children}</div>;
}

export function RedFoxCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <div className={s.introTop}>
        <p className={s.eyebrow}>RedFox Courier</p>
        <a className={s.viewProject} href="https://redfoxcourier.com/" target="_blank" rel="noopener noreferrer" aria-label="View project (opens in a new tab)">
          View project <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <h1>Making a complex shipping workflow easier to navigate.</h1>
      <p>RedFox is an international shipping platform. We worked as a team on the customer booking flow and internal CRM. Our challenge was to decide what information each person needed, when they needed it, and how the interface should help them act on it.</p>
      <div className={s.metadata}>Product Design<br />Customer Experience · CRM · Order Management</div>
    </header>
    <figure className={s.productImage}>
      <ZoomableImage
        src="/images/projects/redfox-courier/ux-showcase.png"
        alt="Annotated RedFox homepage showing shipping quote search, tracking access, navigation and the main shipping message."
        width={1576}
        height={998}
        sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        preload
      />
    </figure>

    <Chapter id="problem" label="The challenge" title="Two different tasks to design for.">
      <p>Customers needed to compare shipping options and complete a booking. Operations needed to manage leads, documents, shipment status and exceptions across many records. A simplified form alone would only address one side of the problem.</p>
      <p>We focused our work on <strong>the booking sequence, information hierarchy and the handoff to operations</strong>. The same shipment needed a focused customer view and a more detailed operational view.</p>
      <p className={s.caption}>Customer verification steps collect the required information; RedFox’s operational verification continues behind the scenes.</p>
    </Chapter>

    <Chapter id="approach" label="Our approach" title="Deciding what to show, and when.">
      <p><strong>We used the task on each screen to decide which information deserved priority.</strong></p>
      <p>For customers, we prioritised service comparison, price and required details. For operations, we prioritised status, blockers and next actions. This meant keeping more detail in the CRM rather than trying to make both interfaces equally minimal.</p>
    </Chapter>

    <Chapter id="services" label="Designing the customer experience" title="The decisions behind the booking flow.">
      <h3 className={s.decision}>We made service differences comparable</h3>
      <p>We organised RedFox’s services into cards with a consistent hierarchy. Each option needed to answer the same questions: what does it cost, when will it arrive, and is this shipment eligible?</p>
      <p>We kept <strong>price and delivery estimates close to the service name</strong>, with mode, coverage and eligibility alongside them. The trade-off was showing enough detail to support a choice without making customers open each option to compare it.</p>
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/redfox-courier/1.png"
          alt="RedFox shipping service selection with Priority and Express Saver options, delivery estimates, eligibility requirements and an order cost summary."
          width={3808}
          height={1746}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
      </figure>
      <div id="costs" className={s.decisionGroup}>
      <h3 className={s.decision}>We made pricing uncertainty explicit</h3>
      <p>We separated confirmed charges from costs determined later. A single total would be easier to scan, but would not explain the limits of the quote. We chose to keep that distinction visible in the summary.</p>
      <Note label="Known"><p>Freight · GST · AWB · Booking fee</p></Note>
      <Note label="Determined later"><p>Import duty · Destination tax</p></Note>
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/redfox-courier/2.png"
          alt="RedFox shipment details showing weight-based rates, duty and tax payment choices, package dimensions and the order bill breakdown."
          width={3808}
          height={1846}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
      </figure>
      </div>
      <div id="progressive" className={s.decisionGroup}>
      <h3 className={s.decision}>We broke information collection into stages</h3>
      <p>We split the requirements across four stages so each screen had a clear task. This kept the initial booking step focused without dropping information the operation required.</p>
      <p><strong>Shipment → Verify → Details → Payment</strong></p>
      <p>We kept the full sequence visible in the progress navigation. Our aim was to make the current task manageable while showing what remained.</p>
      </div>
    </Chapter>

    <Chapter id="customer" label="Connecting the workflows" title="We designed around the pickup handoff.">
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/redfox-courier/3.png"
          alt="RedFox customer booking workflow and pickup handoff."
          width={2880}
          height={2676}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
      </figure>
      <p>We made the pickup request the end of the booking task. RedFox then handles operational verification, documentation, customs and delivery. This boundary helped us decide what to collect from customers and what belonged in the internal workflow.</p>
    </Chapter>

    <Chapter id="operations" label="Designing the CRM" title="We prioritised scanning and action over a minimal screen.">
      <p>In the CRM, hiding detail could make the work harder. We structured lead, order and shipment views around finding a record, assessing its state and deciding what to do next.</p>
      <p className={s.scan}>Search → Filter → Scan → Identify → Act</p>
      <p>We chose tables to keep records comparable, search and filters to narrow the list, and status to support scanning. Bulk actions supported work across records. Our focus was on organising density so the team could find what needed attention.</p>
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/redfox-courier/4.png"
          alt="RedFox CRM interface for scanning and managing shipment records."
          width={1440}
          height={806}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
      </figure>
    </Chapter>

    <Chapter id="clarity" label="A closer look at hierarchy" title="We connected shipment context to the next task.">
      <p>We grouped shipment context, booking status and next action in the lead view. In the example below, the route and weight explain the shipment, the status explains the blocker, and “Follow up” identifies the task. This was the relationship we wanted the hierarchy to make clear.</p>
      <dl className={s.record}><div><dt>Customer</dt><dd>Mumbai → London · 8 kg</dd></div><div><dt>Status</dt><dd>Booking incomplete</dd></div><div><dt>Next action</dt><dd>Follow up</dd></div></dl>
      <p className={s.caption}>Illustrative workflow example.</p>
      <figure className={s.productImage}>
        <ZoomableImage
          src="/images/projects/redfox-courier/5.png"
          alt="RedFox lead queue connecting shipment context, booking status and next actions."
          width={1440}
          height={806}
          sizes="(max-width: 600px) calc(100vw - 40px), 560px"
        />
      </figure>
    </Chapter>

    <Chapter id="validation" label="Validation" title="How we reviewed our design decisions.">
      <p>RedFox was not fully live, so we could not assess the design using production booking or operational performance data.</p>
      <p>We evaluated the proposed flow and hierarchy through:</p>
      <ul className={s.list}><li>Competitive pattern analysis</li><li>Heuristic evaluation</li><li>Scenario-based walkthroughs</li><li>Information hierarchy review</li></ul>
      <p>We examined whether the service comparison supported a choice, the pricing communicated uncertainty, and the CRM made the next task clear. These reviews assessed design reasoning and proposed usability; they did not prove improvements in real use.</p>
      <Note label="Future validation"><p>We would track booking completion, abandonment, time to request pickup and pricing questions, alongside shipment processing time, documentation errors, exception resolution and lead follow-up time. These are planned measures, not results.</p></Note>
    </Chapter>

    <Chapter id="outcome" label="Outcome" title="What our work brought together.">
      <p>Our design connected a staged booking flow with CRM views for lead, order and shipment management. The key design work was deciding which information belonged in each experience and how to make it actionable.</p>
      <Note label="Customers"><p>Comparable services, an explained price and a staged path to requesting pickup.</p></Note>
      <Note label="Operations"><p>Structured tools for finding records, understanding status and acting on outstanding work.</p></Note>
      <Note label="Product"><p>A clear handoff between customer input and logistics operations.</p></Note>
    </Chapter>

    <Chapter id="reflection" label="Reflection" title="What I took from designing both sides.">
      <p>Working on both interfaces made me more deliberate about information density. I learned to reduce the decisions customers need to make while preserving the detail the operations team needs to make theirs.</p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
