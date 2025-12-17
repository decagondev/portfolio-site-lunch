/**
 * Experience data
 * Static typed data for experience timeline
 */

export interface Experience {
  readonly id: string
  readonly company: string
  readonly role: string
  readonly period: string
  readonly description: string
  readonly tech?: readonly string[]
  readonly achievements?: readonly string[]
}

export const experience: readonly Experience[] = [
  {
    id: "exp-1",
    company: "Gauntlet AI",
    role: "Head of Engineering / Principal Solutions Architect",
    period: "2024 - Present",
    description:
      "Lead engineering initiatives across AI-driven EdTech platforms with focus on productivity and assessment automation. Designed and deployed Automated Marking Workflows using hyper-specialized LLMs. Developed LMS-integrated agentic systems for learner performance monitoring.",
    tech: ["LLMs", "Python", "LangChain", "RAG", "Agentic Workflows", "DevOps"],
    achievements: [
      "Designed Automated Marking Workflows using custom LLMs and rubrics",
      "Developed time-tracking and watchdog agents for learner monitoring",
      "Taught AI for Developer Productivity courses internally and externally",
      "Oversaw full DevOps and SysOps lifecycle of AI platforms",
    ],
  },
  {
    id: "exp-2",
    company: "Aitra",
    role: "Engineering Manager / Principal AI Engineer",
    period: "2022 - Present",
    description:
      "Delivered LLM-based solutions across industries including utility management, embedded systems, and defense. Designed agentic workflows for form filling and research automation. Built micro LLMs for constrained hardware using quantization.",
    tech: ["LLMs", "OpenAI", "QLoRA", "LoRA", "RAG", "Computer Vision", "Python", "LangChain"],
    achievements: [
      "Built Form Filling Agent and Form Research Agent for utility automation",
      "Integrated observability platforms for cost tracking and outcome optimization",
      "Developed micro LLMs using quantization for low-powered hardware",
      "Created video overwatch systems with CV/LLM pipelines for threat detection",
      "Developed security-focused LLM gating mechanisms",
    ],
  },
  {
    id: "exp-3",
    company: "BloomTech (formerly Lambda School)",
    role: "CS / Java Enterprise Backend Development Instructor",
    period: "2019 - Present",
    description:
      "Delivered comprehensive backend and computer science curriculum with focus on Java, Spring Boot, Postgres, and system design. Built and maintained internal educational platforms and developer tools.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "System Design", "Backend Development"],
    achievements: [
      "Led student cohorts through Labs projects and curriculum evolution",
      "Conducted whiteboarding sessions and mock interviews",
      "Contributed to curriculum development and platform maintenance",
    ],
  },
  {
    id: "exp-4",
    company: "Decagon Development Limited",
    role: "CEO / Dev Director / Security & DB Analyst / Infrastructure Architect",
    period: "1998 - 2019",
    description:
      "Oversaw company-wide development operations including system design, architecture, and security compliance for B2B/B2G clients. Delivered infrastructure solutions including telemetric, encrypted, and compliant systems.",
    tech: ["BERT", "GPT-2", "Machine Learning", "Infrastructure", "Security", "Database"],
    achievements: [
      "Led multiple development teams across web, mobile, and embedded platforms",
      "Pioneered BERT model integrations as early adopter",
      "Delivered infrastructure solutions for B2B/B2G clients",
    ],
  },
] as const

