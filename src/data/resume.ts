/**
 * Single source of truth for the resume. The /resume page and the
 * downloadable PDF are both rendered from this file, so the wording is
 * always identical.
 */
export const RESUME_FILENAME = "Abhay_Maske_Product_Experience_Designer_Resume.pdf";

export interface ResumeRole {
  title: string;
  dates: string;
}

export interface ResumeBullet {
  /** Project or area the bullet refers to, shown in bold before the text */
  lead?: string;
  text: string;
}

export interface ResumeExperience {
  company: string;
  roles: ResumeRole[];
  bullets: ResumeBullet[];
}

export const resume = {
  name: "Abhay Maske",
  title: "Product Experience Designer",
  contact: [
    { label: "9963995619", href: "tel:+919963995619" },
    { label: "abhay.uiux@gmail.com", href: "mailto:abhay.uiux@gmail.com" },
    {
      label: "linkedin.com/in/abhay-maske-866a93200",
      href: "https://linkedin.com/in/abhay-maske-866a93200",
    },
  ],
  summary:
    "Product Experience Designer with experience designing SaaS, CRM, logistics, e-commerce and fintech products. Strong at simplifying complex workflows, structuring information and building scalable UI systems, and at working with product managers, developers and stakeholders to turn business requirements into functional digital experiences.",
  experience: [
    {
      company: "Growve Logistics",
      roles: [{ title: "Product Experience Designer", dates: "Oct 2025 – Present" }],
      bullets: [
        {
          lead: "RedFoxCourier",
          text: "Ideated and designed a fully functional CRM based on RedFox's backend and operational workflow, covering customer and shipment workflows, verification, item details, weight and dimensions, payment and post-payment operational stages.",
        },
        {
          lead: "RedFoxCourier",
          text: "Designed the landing page and lead-generation flow.",
        },
        {
          lead: "Growve CRM",
          text: "Reworked the internal CRM, improving workflow structure, functionality and UI consistency so users can navigate and complete operational workflows more easily.",
        },
        {
          lead: "Growve Design System",
          text: "Created an internal design system to standardize and scale UI across multiple internal projects: color and design tokens, typography, spacing, reusable components (buttons, forms, tables), Figma variables and documentation.",
        },
        {
          lead: "Walherb",
          text: "Designed the landing page for an e-commerce site selling childcare supplements and healthcare products. Collaborated with the Product Manager and developers to deliver on time, and used Figma and Claude to build a functional site from the design (walherb.vercel.app).",
        },
        {
          lead: "Growve Logistics website",
          text: "Designed a logistics landing page with a focus on visual hierarchy and clear product and service communication.",
        },
        {
          lead: "Veltora (ongoing)",
          text: "Designing the landing page for a travel-bag product, focused on product presentation, visual storytelling and conversion.",
        },
      ],
    },
    {
      company: "Kalpins.co",
      roles: [{ title: "UI/UX Designer", dates: "Oct 2024 – Sep 2025" }],
      bullets: [
        {
          text: "Worked as the solo designer with stakeholders and developers on dashboards, landing pages and dynamic loader and empty-state experiences.",
        },
      ],
    },
    {
      company: "Hygwell",
      roles: [{ title: "Product Designer (Freelance)", dates: "Apr 2024 – Aug 2024" }],
      bullets: [
        {
          text: "Shaped the product's visual experience from research and UI design through graphics, while coordinating the development process.",
        },
      ],
    },
    {
      company: "Bombay Tone",
      roles: [
        { title: "Jr. UX Designer", dates: "Dec 2023 – Apr 2024" },
        { title: "UX Designer Intern", dates: "Jul 2023 – Nov 2023" },
      ],
      bullets: [
        {
          text: "Designed fintech products with a focus on loan websites and app experiences, building hands-on experience in user-centered design.",
        },
      ],
    },
  ] as ResumeExperience[],
  skills: [
    {
      label: "Product Design",
      items:
        "UX Design, UI Design, Product Thinking, User Flows, Information Architecture, Interaction Design, Wireframing, Prototyping, Design Systems, Usability, Responsive Design",
    },
    {
      label: "Collaboration",
      items:
        "Stakeholder Collaboration, Product Manager Collaboration, Developer Handoff, Design QA, Requirements Analysis",
    },
    {
      label: "Technical / AI",
      items:
        "Figma Variables, Design Tokens, AI-Assisted Prototyping, Front-End Collaboration",
    },
  ],
  tools: "Figma, Figma Variables, Claude, Adobe Creative Suite",
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "Kirti M. Doongursee College, Dadar",
    dates: "2020 – 2023",
  },
  certification: "Google UX Design Professional Certificate",
};
