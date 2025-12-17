/**
 * Skills data
 * Static typed data for skills showcase
 */

export type SkillLevel = "beginner" | "intermediate" | "advanced"

export interface Skill {
  readonly id: string
  readonly name: string
  readonly category: string
  readonly level: SkillLevel
  readonly icon?: string
}

export const skills: readonly Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "Frontend", level: "advanced" },
  { id: "typescript", name: "TypeScript", category: "Frontend", level: "advanced" },
  { id: "javascript", name: "JavaScript", category: "Frontend", level: "advanced" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", level: "advanced" },
  { id: "html", name: "HTML5", category: "Frontend", level: "advanced" },
  { id: "css", name: "CSS3", category: "Frontend", level: "advanced" },

  // Backend
  { id: "node", name: "Node.js", category: "Backend", level: "intermediate" },
  { id: "express", name: "Express", category: "Backend", level: "intermediate" },

  // Tools & Others
  { id: "git", name: "Git", category: "Tools", level: "advanced" },
  { id: "vite", name: "Vite", category: "Tools", level: "advanced" },
] as const

