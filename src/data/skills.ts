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
  // AI / ML / LLM
  { id: "gpt4", name: "GPT-4", category: "AI / ML / LLM", level: "advanced" },
  { id: "claude", name: "Claude", category: "AI / ML / LLM", level: "advanced" },
  { id: "llama", name: "LLaMA", category: "AI / ML / LLM", level: "advanced" },
  { id: "mistral", name: "Mistral", category: "AI / ML / LLM", level: "advanced" },
  { id: "qlora", name: "QLoRA / LoRA", category: "AI / ML / LLM", level: "advanced" },
  { id: "peft", name: "PEFT", category: "AI / ML / LLM", level: "advanced" },
  { id: "rag", name: "RAG", category: "AI / ML / LLM", level: "advanced" },
  { id: "langchain", name: "LangChain", category: "AI / ML / LLM", level: "advanced" },
  { id: "llmops", name: "LLMOps", category: "AI / ML / LLM", level: "advanced" },
  { id: "computer-vision", name: "Computer Vision", category: "AI / ML / LLM", level: "advanced" },
  { id: "quantization", name: "Quantization", category: "AI / ML / LLM", level: "advanced" },
  { id: "fine-tuning", name: "LLM Fine-tuning", category: "AI / ML / LLM", level: "advanced" },

  // Frontend
  { id: "react", name: "React", category: "Frontend", level: "advanced" },
  { id: "nextjs", name: "Next.js", category: "Frontend", level: "advanced" },
  { id: "typescript", name: "TypeScript", category: "Frontend", level: "advanced" },
  { id: "javascript", name: "JavaScript", category: "Frontend", level: "advanced" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", level: "advanced" },
  { id: "html", name: "HTML5", category: "Frontend", level: "advanced" },
  { id: "css", name: "CSS3", category: "Frontend", level: "advanced" },
  { id: "redux", name: "Redux", category: "Frontend", level: "advanced" },
  { id: "react-native", name: "React Native", category: "Frontend", level: "advanced" },
  { id: "electron", name: "Electron", category: "Frontend", level: "intermediate" },

  // Backend
  { id: "python", name: "Python", category: "Backend", level: "advanced" },
  { id: "java", name: "Java", category: "Backend", level: "advanced" },
  { id: "c", name: "C / C++", category: "Backend", level: "advanced" },
  { id: "csharp", name: "C#", category: "Backend", level: "advanced" },
  { id: "node", name: "Node.js", category: "Backend", level: "advanced" },
  { id: "express", name: "Express", category: "Backend", level: "advanced" },
  { id: "flask", name: "Flask", category: "Backend", level: "advanced" },
  { id: "django", name: "Django", category: "Backend", level: "intermediate" },
  { id: "spring-boot", name: "Spring Boot", category: "Backend", level: "advanced" },

  // Database
  { id: "postgres", name: "PostgreSQL", category: "Database", level: "advanced" },
  { id: "mongodb", name: "MongoDB", category: "Database", level: "advanced" },
  { id: "sql", name: "SQL", category: "Database", level: "advanced" },

  // Cloud & DevOps
  { id: "aws", name: "AWS", category: "Cloud & DevOps", level: "advanced" },
  { id: "kubernetes", name: "Kubernetes", category: "Cloud & DevOps", level: "advanced" },
  { id: "docker", name: "Docker", category: "Cloud & DevOps", level: "advanced" },
  { id: "gcp", name: "GCP", category: "Cloud & DevOps", level: "intermediate" },
  { id: "vercel", name: "Vercel", category: "Cloud & DevOps", level: "advanced" },
  { id: "netlify", name: "Netlify", category: "Cloud & DevOps", level: "advanced" },
  { id: "heroku", name: "Heroku", category: "Cloud & DevOps", level: "intermediate" },

  // Tools
  { id: "git", name: "Git", category: "Tools", level: "advanced" },
  { id: "github", name: "GitHub", category: "Tools", level: "advanced" },
  { id: "vite", name: "Vite", category: "Tools", level: "advanced" },
] as const

