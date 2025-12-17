import { useState, useMemo } from "react"
import { type Project } from "@/data/projects"

/**
 * Custom hook for filtering projects by tech stack or tags
 * Follows Single Responsibility Principle - only handles filter logic
 */
export function useProjectFilter(projects: readonly Project[]) {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set()
  )

  // Extract all unique tech and tags from projects
  const availableFilters = useMemo(() => {
    const filters = new Set<string>()
    projects.forEach((project) => {
      project.tech.forEach((tech) => filters.add(tech))
      project.tags.forEach((tag) => filters.add(tag))
    })
    return Array.from(filters).sort()
  }, [projects])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    if (selectedFilters.size === 0) {
      return projects
    }

    return projects.filter((project) => {
      const projectItems = [
        ...project.tech,
        ...project.tags,
      ] as readonly string[]
      return Array.from(selectedFilters).some((filter) =>
        projectItems.includes(filter)
      )
    })
  }, [projects, selectedFilters])

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev)
      if (next.has(filter)) {
        next.delete(filter)
      } else {
        next.add(filter)
      }
      return next
    })
  }

  const clearFilters = () => {
    setSelectedFilters(new Set())
  }

  return {
    filteredProjects,
    availableFilters,
    selectedFilters,
    toggleFilter,
    clearFilters,
  }
}

