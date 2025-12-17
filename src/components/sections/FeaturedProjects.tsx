import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { type Project } from "@/data/projects"
import { Button } from "@/components/ui/button"
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
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="group rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {project.image && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-md bg-muted px-2 py-1 text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={`/projects#${project.id}`}>View Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

