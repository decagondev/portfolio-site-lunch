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
    company: "Tech Company",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Leading frontend development initiatives, building scalable React applications, and mentoring junior developers.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    achievements: [
      "Led migration of legacy codebase to modern React with TypeScript",
      "Improved application performance by 40% through optimization",
      "Mentored 3 junior developers and improved team productivity",
    ],
  },
  {
    id: "exp-2",
    company: "Startup Inc",
    role: "Full-stack Developer",
    period: "2020 - 2022",
    description:
      "Developed and maintained full-stack applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality products.",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    achievements: [
      "Built 5+ production applications from scratch",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to improve UX",
    ],
  },
  {
    id: "exp-3",
    company: "Freelance",
    role: "Web Developer",
    period: "2018 - 2020",
    description:
      "Worked with various clients to build custom web applications and websites. Focused on creating responsive, accessible, and performant solutions.",
    tech: ["JavaScript", "HTML", "CSS", "React"],
    achievements: [
      "Delivered 20+ client projects successfully",
      "Maintained 100% client satisfaction rate",
      "Learned modern web development practices",
    ],
  },
] as const

