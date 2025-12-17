import { type Project } from "@/data/projects"
import { ProjectCard } from "@/components/shared/ProjectCard"
import { cn } from "@/lib/utils"

export interface ProjectGridProps {
  projects: readonly Project[]
  onProjectClick: (project: Project) => void
  className?: string
}

/**
 * Project grid component displaying filterable grid of projects
 * Follows Single Responsibility Principle - only handles project grid display
 */
export function ProjectGrid({
  projects,
  onProjectClick,
  className,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className={cn("container mx-auto px-4 py-12", className)}>
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            No projects found matching your filters.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </div>
  )
}

