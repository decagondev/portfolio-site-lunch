import { motion } from "framer-motion"
import { type Project } from "@/data/projects"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

export interface ProjectCardProps {
  project: Project
  onClick?: () => void
  className?: string
}

/**
 * Project card component displaying project information
 * Follows Single Responsibility Principle - only handles project card display
 */
export function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md",
        className
      )}
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
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-primary hover:underline"
            >
              Live Demo →
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-primary hover:underline"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

