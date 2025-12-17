import { motion } from "framer-motion"
import { type Skill } from "@/data/skills"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

export interface SkillsGridProps {
  skills: readonly Skill[]
  className?: string
}

/**
 * Skills grid component displaying skills as badges grouped by category
 * Follows Single Responsibility Principle - only handles skills display
 */
export function SkillsGrid({ skills, className }: SkillsGridProps) {
  const prefersReducedMotion = useReducedMotion()
  
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )

  const categories = Object.keys(skillsByCategory)

  const getLevelColor = (level: Skill["level"]) => {
    switch (level) {
      case "advanced":
        return "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
      case "intermediate":
        return "bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
      case "beginner":
        return "bg-muted text-muted-foreground border border-border hover:bg-muted/80 transition-colors"
      default:
        return "bg-muted text-muted-foreground border border-border hover:bg-muted/80 transition-colors"
    }
  }

  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-xl font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillsByCategory[category].map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: index * 0.05 }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  >
                    <div
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                        getLevelColor(skill.level)
                      )}
                    >
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

