import type { ProjectStory } from "@/types/project";

export const redfoxCourierStory: ProjectStory = {
  meta: [
    { label: "Role", value: "Product Designer" },
    {
      label: "Focus",
      value:
        "UX/UI · Product Thinking · Information Architecture · Shipping Experience",
    },
    {
      label: "Platform",
      value: "Web · Customer-facing shipping platform · Operations",
    },
  ],
  intro:
    "RedFox helps individuals and businesses ship internationally from India by bringing rate comparison, booking, customs documentation, tracking and fulfilment into one connected experience.",
  hero: {
    id: "IMAGE 01 — HERO",
    title: "RedFox product mockup",
    brief: [
      "Place a large RedFox product mockup here.",
      "Show the shipping quote / rate comparison flow inside a desktop browser frame.",
      "Use a clean white background with subtle RedFox branding.",
      "Image should visually communicate: Origin → Destination → Package → Compare Rates.",
    ],
  },
  sections: [
    {
      title: "Designing for a shipping journey, not just a shipping website",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "International shipping involves multiple decisions before a parcel even leaves the sender.",
            "The experience had to help users understand where they are shipping, what it will cost, what documentation is required, which carrier makes sense, and what happens after booking — without overwhelming them with logistics terminology.",
          ],
        },
      ],
    },
    {
      title: "The challenge",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Shipping is inherently complex.",
            "Users may need to think about package dimensions, carrier rates, duties and taxes, customs documentation, pickup, delivery timelines and tracking — all within the same journey.",
            "RedFox already had the operational capabilities. The opportunity was to make those capabilities easier to understand and act on.",
          ],
        },
      ],
    },
    {
      eyebrow: "01 — Quote first, explain later",
      title: "Reduce the effort required to start a shipment",
      blocks: [
        {
          type: "text",
          label: "Why I focused on this",
          paragraphs: [
            "The first interaction determines whether a user feels confident enough to continue. Asking users to understand logistics terminology before showing them useful information creates unnecessary friction.",
          ],
        },
        {
          type: "text",
          label: "What I changed",
          paragraphs: [
            "I treated the quote experience as the entry point to the shipping journey rather than a standalone calculator.",
            "Users first provide the essentials:",
          ],
        },
        {
          type: "flow",
          steps: ["Origin", "Destination", "Weight / Dimensions", "Goods"],
        },
        {
          type: "text",
          paragraphs: [
            "The system can then surface relevant shipping options and pricing.",
            "RedFox's current shipping flow follows this model, collecting origin, destination, weight/dimensions and goods before comparing courier rates.",
          ],
        },
        {
          type: "image",
          id: "IMAGE 02 — BEFORE / AFTER OR FLOW",
          title: "Quote form",
          brief: [
            "Show the quote form at a large enough scale to read.",
            "Annotate the important fields: Origin, Destination, Weight, Dimensions and Goods.",
            "Add a small arrow/flow underneath: Enter details → Compare rates → Choose service",
          ],
        },
        {
          type: "outcome",
          text: "The quote becomes the beginning of the user's journey instead of another form they have to figure out.",
        },
      ],
    },
    {
      eyebrow: "02 — Make the cost understandable",
      title: "Shipping price shouldn't feel like a surprise",
      blocks: [
        {
          type: "text",
          label: "Why it matters",
          paragraphs: [
            "International shipping isn't simply a delivery fee.",
            "The final cost can involve freight, duties, taxes and customs-related charges. Users need to understand what they're actually paying before committing to a shipment.",
          ],
        },
        {
          type: "text",
          label: "The UX decision",
          paragraphs: [
            "Instead of presenting a single unexplained number, the experience separates the major cost components and makes the payment responsibility clear.",
            "For example:",
          ],
        },
        {
          type: "list",
          items: ["Freight", "Duties & taxes", "Customs / clearance", "Total"],
        },
        {
          type: "text",
          paragraphs: [
            "The DDP/DDU decision is also surfaced clearly so the sender understands whether they or the receiver is responsible for duties and taxes. RedFox's current flow explicitly supports I pay (DDP) and Receiver pays (DDU).",
          ],
        },
        {
          type: "image",
          id: "IMAGE 03 — PRICING / RATE COMPARISON",
          title: "Rate comparison screen",
          brief: [
            "Show a rate-comparison screen with 3–4 carrier options.",
            "Highlight the recommended option.",
            "Include delivery estimate + total price + duties/tax treatment.",
            "Add callouts around Price, Transit time, and DDP/DDU.",
          ],
        },
        {
          type: "outcome",
          text: "Users can compare options based on price, speed and responsibility, rather than simply choosing the cheapest number.",
        },
      ],
    },
    {
      eyebrow: "03 — Turn carrier comparison into a decision",
      title: "More options shouldn't mean more confusion",
      blocks: [
        {
          type: "text",
          label: "Why I focused on this",
          paragraphs: [
            "Showing multiple courier options is useful only when users can quickly understand the trade-offs between them.",
            "A rate comparison should answer:",
          ],
        },
        {
          type: "list",
          items: [
            "Which option is cheapest?",
            "Which arrives sooner?",
            "What am I actually paying for?",
          ],
        },
        {
          type: "text",
          label: "What I designed around",
          paragraphs: [
            "Rather than presenting carriers as equal rows of information, the interface should make the important differences immediately scannable.",
          ],
        },
        {
          type: "flow",
          steps: ["Carrier", "Price", "ETA", "Service", "Duties", "Select"],
        },
        {
          type: "text",
          paragraphs: [
            "RedFox's platform is built around comparing international carrier rates and choosing the service that fits the shipment.",
          ],
        },
        {
          type: "image",
          id: "IMAGE 04 — CARRIER COMPARISON",
          title: "Carrier comparison",
          brief: [
            "Show the comparison table/cards.",
            "Highlight one recommended option with a small Best value or Recommended indicator.",
            "Add 2–3 annotations explaining how hierarchy helps users make the decision faster.",
          ],
        },
        {
          type: "outcome",
          text: "The comparison becomes a decision-making tool rather than a list of courier prices.",
        },
      ],
    },
    {
      eyebrow: "04 — Remove the anxiety after booking",
      title: "A shipment shouldn't disappear after payment",
      blocks: [
        {
          type: "text",
          label: "Why it matters",
          paragraphs: [
            "Booking is not the end of the user's journey.",
            "Once a shipment leaves their hands, the biggest question becomes:",
            "“Where is my package?”",
            "International shipments also pass through several operational stages — pickup, dispatch, customs, transit and final delivery. RedFox itself describes this journey as a five-step process from order preparation through final-mile delivery.",
          ],
        },
        {
          type: "text",
          label: "The UX approach",
          paragraphs: [
            "I treated tracking as a progressive timeline, rather than simply displaying a tracking number.",
          ],
        },
        {
          type: "flow",
          vertical: true,
          steps: [
            "Pickup scheduled",
            "Picked up",
            "In transit",
            "Customs clearance",
            "Out for delivery",
            "Delivered",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Important exceptions should be surfaced instead of making users repeatedly check the shipment themselves.",
          ],
        },
        {
          type: "image",
          id: "IMAGE 05 — TRACKING EXPERIENCE",
          title: "Shipment tracking",
          brief: [
            "Show a shipment tracking screen with the timeline clearly visible.",
            "Highlight the current shipment state.",
            "Include one example of an exception/notification state.",
            "The visual should make the journey understandable in under 5 seconds.",
          ],
        },
        {
          type: "outcome",
          text: "Tracking becomes a source of confidence instead of another place where users have to search for information.",
        },
      ],
    },
    {
      eyebrow: "05 — From customer journey to operational system",
      title: "The experience doesn't end with the customer",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "RedFox also operates across the operational side of shipping — managing shipments, invoices, claims, returns, fulfilment and logistics workflows.",
            "This created a second UX challenge:",
            "How do we help internal teams manage the growing number of shipments without losing context?",
          ],
        },
        {
          type: "text",
          label: "The problem",
          paragraphs: ["A shipment can have multiple states:"],
        },
        {
          type: "flow",
          steps: [
            "New",
            "Payment pending",
            "Booked",
            "Pickup",
            "In transit",
            "Customs",
            "Delivered",
          ],
        },
        {
          type: "text",
          paragraphs: ["But operational teams also need to know:"],
        },
        {
          type: "list",
          items: [
            "Who owns it?",
            "What is blocking it?",
            "What needs to happen next?",
          ],
        },
        {
          type: "text",
          label: "The design direction",
          paragraphs: [
            "I approached the CRM less like a traditional CRM and more like a shipment operations system.",
            "Instead of organising the interface purely around customers, the experience is organised around:",
          ],
        },
        {
          type: "flow",
          steps: ["Customer", "Shipment", "Status", "Blocker", "Next action"],
        },
        {
          type: "image",
          id: "IMAGE 06 — REDFOX CRM",
          title: "RedFox CRM",
          brief: [
            "Show the operations dashboard / shipment queue.",
            "Include realistic shipment rows with status, payment state, owner and next action.",
            "Add annotations showing how the interface helps an operator identify what needs attention now.",
          ],
        },
        {
          type: "outcome",
          text: "The CRM becomes action-oriented rather than simply informational.",
        },
      ],
    },
    {
      title: "Designing one connected shipping experience",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The final experience connects the journey instead of treating each screen as an isolated feature.",
          ],
        },
        {
          type: "steps",
          items: [
            {
              title: "01 — Get a quote",
              body: "Understand the shipment and compare available options.",
            },
            {
              title: "02 — Choose a service",
              body: "Make the trade-off between cost, speed and service.",
            },
            {
              title: "03 — Book & prepare",
              body: "Complete shipment details and documentation.",
            },
            {
              title: "04 — Track",
              body: "Understand exactly where the shipment is.",
            },
            {
              title: "05 — Resolve exceptions",
              body: "Surface problems early and give users a clear next action.",
            },
          ],
        },
        {
          type: "image",
          id: "IMAGE 07 — END-TO-END JOURNEY",
          title: "End-to-end journey",
          brief: [
            "Create one horizontal journey diagram showing: Quote → Compare → Book → Pickup → Customs → Transit → Delivered",
            "Use small RedFox UI screenshots above/below each stage.",
          ],
        },
      ],
    },
  ],
  learned: {
    title: "What I learned",
    paragraphs: [
      "Logistics UX is fundamentally about reducing uncertainty.",
      "The hardest part wasn't adding more information.",
      "It was deciding which information users need at each moment.",
      "A good shipping experience doesn't hide the complexity of logistics — it progressively reveals it, giving users enough information to make the next decision without forcing them to understand the entire process upfront.",
    ],
  },
  related: [
    {
      title: "RedFox CRM",
      description:
        "Turning a fragmented shipment workflow into an action-oriented operations system.",
      image: { id: "IMAGE 08 — RELATED", title: "RedFox CRM" },
    },
    {
      title: "RedFox Website",
      description:
        "Making international shipping easier to understand before users commit.",
      image: { id: "IMAGE 08 — RELATED", title: "RedFox Website" },
    },
    {
      title: "Growve CRM",
      description:
        "Simplifying complex logistics operations through better information hierarchy.",
      image: { id: "IMAGE 08 — RELATED", title: "Growve CRM" },
    },
    {
      title: "Order Management",
      description:
        "Designing a clearer workflow for creating, managing and tracking purchase orders.",
      image: { id: "IMAGE 08 — RELATED", title: "Order Management" },
    },
  ],
};
