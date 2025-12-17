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
  name: "Your Application",
  tagline: "A modern portfolio website",
  bio: "A passionate developer building modern web applications with React, TypeScript, and cutting-edge technologies.",
  companyName: "Your Company",
  description:
    "A modern starter template for React applications with TypeScript, Vite, ShadCN UI, and Tailwind CSS 4",
  baseUrl: import.meta.env.VITE_BASE_URL || "https://yourdomain.com",

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
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  } as const satisfies SocialLinks,

  // Footer
  footer: {
    companyName: "Your Company",
    year: new Date().getFullYear(),
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
    ],
    showPrivacyPolicy: true,
    showTermsOfService: true,
  } as const satisfies FooterConfig,
} as const
