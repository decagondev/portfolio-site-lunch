import { motion } from "framer-motion"
import { type Experience } from "@/data/experience"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

export interface ExperienceTimelineProps {
  experience: readonly Experience[]
  className?: string
}

/**
 * Experience timeline component displaying work experience vertically
 * Follows Single Responsibility Principle - only handles experience display
 */
export function ExperienceTimeline({
  experience,
  className,
}: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-background bg-primary md:left-6" />

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>

                  <p className="mb-4 text-muted-foreground">{exp.description}</p>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="mb-4">
                      <p className="mb-2 text-sm font-medium">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-2 py-1 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <p className="mb-2 text-sm font-medium">Key Achievements:</p>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

