import type { ProjectStory } from "@/types/project";

// Accurate fallback data for consumers of the shared Project model.
// The editorial page is rendered by RedFoxCaseStudy.
export const redfoxCourierStory: ProjectStory = {
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Scope", value: "Customer Experience · Website · CRM · Order Management" },
    { label: "Timeline", value: "[X months]" },
    { label: "Team", value: "[X]" },
  ],
  intro: "You ship. We handle the rest. RedFox customers provide shipment information, choose a RedFox service and request a pickup. RedFox handles the operational complexity behind the scenes.",
  hero: {
    id: "IMAGE 01 — HERO",
    title: "RedFox service selection experience",
    brief: ["Large customer-facing product screen. Replace with an actual screenshot; no device mockup."],
  },
  sections: [
    {
      title: "Move the complexity backstage.",
      blocks: [{ type: "text", paragraphs: ["Customers choose RedFox’s own services based on speed, shipping mode, eligibility and cost. RedFox manages verification, documentation, customs, shipment handling, tracking and delivery."] }],
    },
    {
      title: "Design hypotheses, not proven outcomes",
      blocks: [{ type: "text", paragraphs: ["The pre-launch design focuses on reducing customer responsibility, clarifying services and costs, introducing complexity progressively and making CRM information actionable. Production outcomes remain to be validated."] }],
    },
  ],
  learned: {
    title: "Simplicity depends on who is using the product.",
    paragraphs: ["For customers: tell me what I need to know. For operations: show me what needs my attention. RedFox needed both."],
  },
  related: [],
};
