import type { ReactNode } from "react";
import Link from "next/link";
import s from "./RedFoxCaseStudy.module.css";

// Each image slot reserves the screenshot's aspect ratio for later replacement.
function Evidence({ label, compact = false }: { label: string; compact?: boolean }) {
  return <figure className={`${s.evidence} ${compact ? s.compact : ""}`}><figcaption>[IMAGE — {label}]</figcaption></figure>;
}
function Chapter({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return <section id={id} className={s.chapter}><header><p className={s.eyebrow}>{label}</p><h2>{title}</h2></header>{children}</section>;
}
function Note({ label, children }: { label: string; children: ReactNode }) {
  return <div className={s.note}><h3>{label}</h3>{children}</div>;
}
function Journey({ label, steps }: { label: string; steps: string[] }) {
  return <div className={s.journey}><h3>{label}</h3><ol>{steps.map(step => <li key={step}>{step}</li>)}</ol></div>;
}

export function RedFoxCaseStudy() {
  return <article className={s.page}>
    <header className={s.intro} id="top">
      <p className={s.eyebrow}>RedFox Courier</p>
      <h1>You ship.<br />We handle the rest.</h1>
      <p>RedFox is an international shipping platform designed to simplify the experience of shipping across borders — while taking care of the operational complexity behind the scenes.</p>
      <div className={s.metadata}>Product Design<br />Customer Experience · CRM · Order Management</div>
    </header>
    <Evidence label="RedFox service selection" />

    <Chapter id="problem" label="The problem" title="International shipping is complicated. Choosing how to ship shouldn’t be.">
      <div className={s.diagram} aria-label="Shipment lifecycle">
        <Journey label="Customer journey" steps={["Shipment details", "Service", "Verification", "Details", "Payment", "Pickup"]} />
        <Journey label="RedFox handles" steps={["Verification", "Documentation", "Customs", "Shipment handling", "Tracking", "Delivery"]} />
      </div>
      <p>Behind a single international shipment are multiple moving parts — pricing, service types, verification, documentation, customs, tracking and delivery.</p>
      <p>Most of that complexity is necessary. But it doesn’t necessarily need to belong to the customer.</p>
      <Note label="The idea"><p>You provide the shipment details. You request a pickup. RedFox takes care of the complexity behind the scenes.</p></Note>
    </Chapter>

    <Chapter id="approach" label="Our approach" title="Move the complexity backstage.">
      <div className={s.diagram}>
        <Journey label="Common shipping experience" steps={["Enter details", "Understand services", "Manage shipment", "Arrange pickup", "Track"]} />
        <Journey label="RedFox customer" steps={["Provide shipment details", "Choose RedFox service", "Request pickup"]} />
        <Journey label="RedFox" steps={["Handles the rest"]} />
        <p className={s.caption}>An illustrative comparison of common shipping patterns, not a claim about every platform.</p>
      </div>
      <p>The goal wasn’t to remove the complexity of international shipping. It was to make sure the customer didn’t have to manage all of it.</p>
    </Chapter>

    <Chapter id="responsibility" label="Hypothesis 01" title="Reduce the customer’s responsibility.">
      <Evidence label="Customer-to-RedFox responsibility handoff" compact />
      <p>If RedFox takes ownership of the operational steps after a pickup request, customers can ship internationally without having to manage the logistics themselves.</p>
      <Note label="Why we believed this"><p>International shipping contains many operational steps that are invisible to the customer but necessary for delivery. The experience should expose only the decisions and information the customer actually needs.</p></Note>
    </Chapter>

    <Chapter id="services" label="Service selection" title="Help people choose. Don’t make them learn logistics.">
      <Evidence label="RedFox service selection screen" />
      <p>RedFox doesn’t ask customers to choose between individual courier companies. Customers choose from RedFox’s own shipping services, each designed around a different combination of speed, shipping mode and shipment requirements.</p>
      <dl className={s.services}>{[["RedFox Priority", "Express air · Door to door · 1–2 business days"], ["RedFox Express Saver", "Air · Door to door · 3–5 business days"], ["RedFox Air Cargo", "Consolidated air · Door to door · 5–8 business days"], ["RedFox Economy LCL", "Ocean groupage · Port to door · 22–30 days"]].map(([name, detail]) => <div key={name}><dt>{name}</dt><dd>{detail}</dd></div>)}</dl>
      <p className={s.caption}>Service examples and indicative delivery estimates.</p>
      <Note label="Why it works"><p>The most decision-relevant information is visible directly on the service card. Customers only need to understand what each option means for them, rather than the logistics network behind it.</p></Note>
    </Chapter>

    <Chapter id="differences" label="Hypothesis 02" title="Make the difference visible.">
      <Evidence label="Cropped service cards · price, speed, service type and eligibility" compact />
      <Note label="Why we did it"><p>Customers need to understand price, speed, service type and eligibility.</p></Note>
      <Note label="Then what?"><p>We surfaced those attributes directly inside the selection experience rather than hiding them behind additional steps.</p></Note>
      <Note label="Design decision"><p>The interface supports the decision without making the decision for the customer.</p></Note>
    </Chapter>

    <Chapter id="costs" label="Cost transparency" title="The price is only useful when you understand it.">
      <Evidence label="Order summary and bill breakdown" />
      <p>A shipment price is rarely just one number. The final amount can include freight, GST, booking fees, duties and destination taxes.</p>
      <p>Instead of hiding that complexity, we separate what is already known from what may be determined later.</p>
      <Note label="Known"><p>Freight · GST · AWB · Booking fee</p></Note>
      <Note label="Determined later"><p>Import duty · Destination tax</p></Note>
      <p>The goal isn’t to promise a final number when one isn’t available. It’s to make the current cost understandable.</p>
    </Chapter>

    <Chapter id="progressive" label="Hypothesis 03" title="Introduce complexity only when it becomes relevant.">
      <Evidence label="Progress navigation · Shipment → Verify → Details → Payment" compact />
      <p>International shipping requires information that isn’t relevant at every stage. RedFox progressively introduces it instead of asking customers to understand the entire process upfront.</p>
      <Note label="Why we did it"><p>Progressive disclosure keeps the primary task visible.</p></Note>
      <Note label="Then what?"><p>Each step introduces only the information needed to move forward.</p></Note>
    </Chapter>

    <Chapter id="customer" label="The customer journey" title="The customer’s job ends at the pickup request.">
      <Evidence label="Full customer flow · shipment details to pickup request" />
      <p>Provide the shipment information. Choose the appropriate RedFox service. Complete the required details. Request a pickup.</p>
      <p>After that, RedFox takes over the operational work required to move the shipment forward.</p>
      <div className={s.diagram}>
        <Journey label="Customer" steps={["Shipment", "Service", "Pickup request"]} />
        <Journey label="RedFox" steps={["Verification", "Documentation", "Customs", "Shipment", "Tracking", "Delivery"]} />
      </div>
    </Chapter>

    <Chapter id="operations" label="Operational experience" title="We didn’t remove the complexity. We moved it to where it belongs.">
      <Evidence label="RedFox CRM" />
      <p>A simple customer experience doesn’t mean the underlying operation is simple.</p>
      <p>RedFox’s internal teams need visibility into leads, orders, verification, shipments, documents, exceptions and delivery. The CRM is where that complexity lives.</p>
    </Chapter>

    <Chapter id="crm" label="CRM" title="Customers see one shipment. Operations see hundreds.">
      <Evidence label="Manifest / Order Management" />
      <p>For operations teams, simplicity means being able to:</p>
      <p className={s.scan}>Search. Filter. Scan. Identify. Act.</p>
      <p>The interface prioritises structured tables, status, filters, search, bulk actions and contextual information.</p>
    </Chapter>

    <Chapter id="clarity" label="Operational clarity" title="A CRM should tell you what needs to happen next.">
      <Evidence label="Lead Queue" />
      <p>Instead of treating operational records as static information, we structured key workflows around three questions: What happened? What’s blocking it? What needs to happen next?</p>
      <dl className={s.record}><div><dt>Customer</dt><dd>Mumbai → London · 8 kg</dd></div><div><dt>Status</dt><dd>Booking incomplete</dd></div><div><dt>Next action</dt><dd>Follow up</dd></div></dl>
      <p className={s.caption}>Illustrative workflow example.</p>
    </Chapter>

    <Chapter id="validation" label="Validation" title="What we could validate — and what we couldn’t.">
      <Evidence label="Annotated design / validation example" compact />
      <p>RedFox wasn’t fully live, so we didn’t have access to real conversion, completion or operational performance data. We didn’t want to manufacture success metrics.</p>
      <p>Pre-launch review focused on the reasoning behind the experience:</p>
      <ul className={s.list}><li>Competitive pattern analysis</li><li>Heuristic evaluation</li><li>Scenario-based walkthroughs</li><li>Information hierarchy review</li></ul>
      <p className={s.caption}>These methods assess design reasoning, not production impact.</p>
    </Chapter>

    <Chapter id="next" label="Next validation" title="The real test begins with real shipments.">
      <Evidence label="Hypothesis → metric framework" compact />
      <p>Once RedFox is live, the hypotheses can be tested against real behaviour.</p>
      <Note label="Customer"><ul className={s.list}><li>Time to select a service</li><li>Time to request a pickup</li><li>Booking completion</li><li>Abandonment</li><li>Pricing-related questions</li></ul></Note>
      <Note label="Operations"><ul className={s.list}><li>Shipment processing time</li><li>Manual interventions</li><li>Documentation errors</li><li>Exception resolution</li><li>Lead follow-up time</li></ul></Note>
      <p className={s.caption}>These are future validation metrics, not current results.</p>
    </Chapter>

    <Chapter id="outcome" label="Outcome" title="A simpler customer experience, without simplifying the operation.">
      <Evidence label="Final RedFox product collage · customer experience, CRM and order management" />
      <p>RedFox brings two very different experiences together.</p>
      <Note label="For customers"><p>Tell us what you’re shipping. Request a pickup. We’ll handle the rest.</p></Note>
      <Note label="For operations"><p>A structured system for managing everything that happens after.</p></Note>
      <p>The design challenge wasn’t to eliminate the complexity of international shipping. It was to make sure the right people deal with it.</p>
    </Chapter>

    <Chapter id="reflection" label="Reflection" title="Simplicity depends on who’s using the product.">
      <p>For a customer, simplicity means: “Tell me what I need to know.”</p>
      <p>For an operations team, simplicity means: “Show me what needs my attention.”</p>
      <p>RedFox needed both.</p>
    </Chapter>
    <div className={s.end}><Link href="/work">← All work</Link><a href="#top">Back to top ↑</a></div>
  </article>;
}
