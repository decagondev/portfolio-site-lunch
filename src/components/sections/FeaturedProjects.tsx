import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { type Project } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

export interface FeaturedProjectsProps {
  projects: readonly Project[]
  maxItems?: number
  className?: string
}

/**
 * Featured projects section component displaying a subset of projects
 * Follows Single Responsibility Principle - only handles featured projects display
 * Note: Will be refactored to use ProjectCard component in PR 2.2
 */
export function FeaturedProjects({
  projects,
  maxItems = 3,
  className,
}: FeaturedProjectsProps) {
  const prefersReducedMotion = useReducedMotion()
  const featuredProjects = projects.slice(0, maxItems)

  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button asChild variant="outline">
            <Link to="/projects">View All</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => {
                  // Navigate to project detail
                  window.location.href = `/projects#${project.id}`
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

