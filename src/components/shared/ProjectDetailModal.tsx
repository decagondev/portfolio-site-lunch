import { type Project } from "@/data/projects"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export interface ProjectDetailModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

/**
 * Project detail modal component displaying full case study
 * Follows Single Responsibility Principle - only handles project detail display
 */
export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          {project.image && (
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={`${project.title} - Project screenshot`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Role */}
          {project.role && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-accent/20 hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Challenges</h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {project.challenges.map((challenge) => (
                  <li key={`challenge-${challenge.slice(0, 20)}`}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Solutions */}
          {project.solutions && project.solutions.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Solutions</h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {project.solutions.map((solution) => (
                  <li key={`solution-${solution.slice(0, 20)}`}>{solution}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Outcomes</h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {project.outcomes.map((outcome) => (
                  <li key={`outcome-${outcome.slice(0, 20)}`}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.demo && (
              <Button asChild>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button asChild variant="outline">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

