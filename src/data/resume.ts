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
  title: "Product Designer | UI/UX Designer — B2B SaaS, CRM & Design Systems",
  location: "Mumbai, India",
  contact: [
    { label: "+91 9963995619", href: "tel:+919963995619" },
    { label: "abhay.uiux@gmail.com", href: "mailto:abhay.uiux@gmail.com", title: "abhay.uiux@gmail.com" },
    { label: "Portfolio", href: "https://abhay-maske-portfolio.vercel.app/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhay-maske-866a93200/" },
  ],
  summary:
    "Product Designer with 3+ years of experience designing SaaS, CRM, logistics, e-commerce and fintech products. Specializes in simplifying complex operational workflows, structuring information and building scalable UI systems. Experienced in taking products from requirements and workflows through interface design, design systems, developer handoff and design QA, while working closely with product managers, developers and stakeholders.",
  experience: [
    {
      company: "Growve Logistics",
      roles: [{ title: "Product Experience Designer", dates: "Oct 2025 – Present" }],
      bullets: [
        { text: "Designed RedFox Courier’s operations CRM, landing page and lead-generation flow end-to-end, translating backend data and operational workflows into clear customer and shipment experiences—from verification, item details, weight and dimensions to payment and post-payment stages—with a focus on information hierarchy, service communication and user journey." },
        { text: "Structured complex operational workflows and edge cases into clear, task-oriented interfaces for internal users." },
        { text: "Built the Growve Design System as a shared UI foundation across multiple internal projects, covering color, typography, spacing, design tokens, Figma variables, reusable components and documentation." },
        { text: "Redesigned the Growve internal CRM, improving workflow structure, functionality and UI consistency across operational experiences." },
        { text: "Designed the Walherb e-commerce experience for childcare supplements and healthcare products, collaborating with the Product Manager and developers to translate designs into a working website." },
        { text: "Took the Walherb design from Figma to a deployed working build using AI-assisted development with Claude." },
      ],
    },
    {
      company: "Kalpins.co",
      roles: [{ title: "UI/UX Designer", dates: "Oct 2024 – Sep 2025" }],
      bullets: [
        { text: "Worked as the sole designer, owning UI/UX design from requirements and workflows through final interfaces in collaboration with stakeholders and developers." },
        { text: "Designed dashboards, landing pages and product interfaces with clear information hierarchy, scalable UI patterns, and loading, empty and data-availability states." },
      ],
    },
    {
      company: "Hygwell",
      roles: [{ title: "Product Designer, Freelance", dates: "Apr 2024 – Aug 2024" }],
      bullets: [
        { text: "Led product design across research, UI design and visual communication, translating product requirements into structured digital experiences." },
        { text: "Worked closely with developers throughout implementation to maintain design intent and coordinate the development process." },
      ],
    },
    {
      company: "Bombay Tone",
      roles: [
        { title: "Junior UX Designer", dates: "Dec 2023 – Apr 2024" },
        { title: "UX Designer Intern", dates: "Jul 2023 – Nov 2023" },
      ],
      bullets: [
        { text: "Progressed from UX Design Intern to Junior UX Designer after 5 months." },
        { text: "Designed fintech experiences including loan websites and app interfaces, working on user flows and interfaces with a user-centered design approach." },
      ],
    },
  ] as ResumeExperience[],
  skills: [
    { label: "Product & UX", items: "Product Thinking, UX Design, User Flows, Information Architecture, Interaction Design, Wireframing, Prototyping, Responsive Design, Usability" },
    { label: "AI & Design-to-Build", items: "AI-Assisted Prototyping, AI-Assisted Development, Claude, Design-to-Deployment" },
    { label: "Tools", items: "Figma, Claude, VS Code" },
    { label: "Domains", items: "B2B SaaS, CRM, Logistics, E-commerce, Fintech" },
  ],
  tools: "Figma, Claude, VS Code",
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "Kirti M. Doongursee College, Dadar, Mumbai",
    dates: "2020 – 2023",
  },
  certification: "Google UX Design Professional Certificate | 2023",
};
