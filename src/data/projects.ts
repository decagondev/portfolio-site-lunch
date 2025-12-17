/**
 * Projects data
 * Static typed data for projects showcase with case studies
 */

export interface ProjectLinks {
  readonly demo?: string
  readonly github?: string
  readonly caseStudy?: string
}

export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly image?: string
  readonly tech: readonly string[]
  readonly tags: readonly string[]
  readonly role?: string
  readonly challenges?: readonly string[]
  readonly solutions?: readonly string[]
  readonly outcomes?: readonly string[]
  readonly links: ProjectLinks
}

export const projects: readonly Project[] = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    tags: ["Frontend", "Portfolio", "React"],
    role: "Full-stack Developer",
    challenges: [
      "Creating a responsive design that works on all devices",
      "Implementing smooth animations and transitions",
      "Optimizing for performance and SEO",
    ],
    solutions: [
      "Used Tailwind CSS for responsive design with mobile-first approach",
      "Implemented Framer Motion for smooth animations",
      "Added SEO component with dynamic meta tags",
    ],
    outcomes: [
      "Achieved 100% Lighthouse scores for Performance, Accessibility, and SEO",
      "Reduced initial load time to under 2 seconds",
      "Improved user engagement with smooth animations",
    ],
    links: {
      demo: "https://example.com",
      github: "https://github.com/example/portfolio",
    },
  },
  {
    id: "project-2",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    tags: ["Full-stack", "E-Commerce", "React", "Node.js"],
    role: "Full-stack Developer",
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state for shopping cart",
      "Building scalable backend API",
    ],
    solutions: [
      "Integrated Stripe for secure payment processing",
      "Used React Context and Redux for state management",
      "Built RESTful API with Express and MongoDB",
    ],
    outcomes: [
      "Successfully processed 1000+ transactions",
      "Achieved 99.9% uptime",
      "Reduced checkout time by 40%",
    ],
    links: {
      demo: "https://example.com/ecommerce",
      github: "https://github.com/example/ecommerce",
    },
  },
] as const

