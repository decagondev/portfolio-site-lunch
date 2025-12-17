import { useState } from "react"
import { SEO } from "@/components/seo/SEO"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { ProjectFilters } from "@/components/sections/ProjectFilters"
import { ProjectDetailModal } from "@/components/shared/ProjectDetailModal"
import { useProjectFilter } from "@/lib/hooks/useProjectFilter"
import { projects } from "@/data/projects"
import { type Project } from "@/data/projects"
import { appConfig } from "@/config/app.config"

/**
 * Projects page component with filtering and detail modal
 * Follows Single Responsibility Principle - orchestrates project display
 */
export function ProjectsPage() {
  const {
    filteredProjects,
    availableFilters,
    selectedFilters,
    toggleFilter,
    clearFilters,
  } = useProjectFilter(projects)

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Small delay to allow modal close animation
    setTimeout(() => setSelectedProject(null), 200)
  }

  return (
    <>
      <SEO
        title={`Projects - ${appConfig.name}`}
        description={`Explore my portfolio of projects. Built with modern technologies including React, TypeScript, and more.`}
        keywords="projects, portfolio, web development, React, TypeScript, case studies"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-4xl font-bold">Projects</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            A collection of my work, showcasing various technologies and
            solutions.
          </p>

          <ProjectFilters
            availableFilters={availableFilters}
            selectedFilters={selectedFilters}
            onToggleFilter={toggleFilter}
            onClearFilters={clearFilters}
          />

          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

