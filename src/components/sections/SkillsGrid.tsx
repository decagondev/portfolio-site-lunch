import { motion } from "framer-motion"
import { type Skill } from "@/data/skills"
import { cn } from "@/lib/utils"

export interface SkillsGridProps {
  skills: readonly Skill[]
  className?: string
}

/**
 * Skills grid component displaying skills as badges grouped by category
 * Follows Single Responsibility Principle - only handles skills display
 */
export function SkillsGrid({ skills, className }: SkillsGridProps) {
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
        return "bg-green-500/20 text-green-600 dark:text-green-400"
      case "intermediate":
        return "bg-blue-500/20 text-blue-600 dark:text-blue-400"
      case "beginner":
        return "bg-gray-500/20 text-gray-600 dark:text-gray-400"
      default:
        return "bg-gray-500/20 text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-xl font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillsByCategory[category].map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium",
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

