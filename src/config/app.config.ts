/**
 * Application configuration
 * Centralized configuration following Single Responsibility Principle
 * Easy to customize for different projects
 */
export interface NavItem {
  readonly path: string
  readonly label: string
}

export interface SocialLinks {
  readonly github?: string
  readonly linkedin?: string
  readonly twitter?: string
  readonly email?: string
  readonly website?: string
}

export interface FooterConfig {
  readonly companyName?: string
  readonly year?: number
  readonly links?: ReadonlyArray<{ readonly label: string; readonly path: string }>
  readonly showPrivacyPolicy?: boolean
  readonly showTermsOfService?: boolean
}

export const appConfig = {
  // Branding
  name: "Tom Tarpey",
  tagline: "Principal AI Engineer | Security & Database Analyst | Infrastructure & Software Architect | CS Consultant",
  bio: "Principal AI Engineer with extensive experience in LLM fine-tuning, agentic workflows, and AI/ML infrastructure. Specializing in RAG systems, quantization, and security-focused LLM deployments. Teaching AI for Developer Productivity and leading engineering teams across EdTech and enterprise platforms.",
  companyName: "Tom Tarpey",
  description:
    "Portfolio of Tom Tarpey - Principal AI Engineer specializing in Large Language Models, AI/ML infrastructure, and full-stack development. Expert in LLM fine-tuning, RAG systems, and agentic workflows.",
  baseUrl: import.meta.env.VITE_BASE_URL || (typeof window !== "undefined" ? window.location.origin : ""),

  // Navigation
  navItems: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ] as const satisfies ReadonlyArray<NavItem>,

  // Social Links
  socialLinks: {
    github: "https://github.com/decagondev",
    linkedin: "https://linkedin.com/in/tom-tarpey-38594455",
    email: "mailto:tomtarpeydev@gmail.com",
  } satisfies SocialLinks,

  // Footer
  footer: {
    companyName: "Tom Tarpey",
    year: new Date().getFullYear(),
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
    ],
    showPrivacyPolicy: true,
    showTermsOfService: true,
  } as const satisfies FooterConfig,
} as const
