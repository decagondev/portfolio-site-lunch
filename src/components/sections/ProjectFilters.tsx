import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export interface ProjectFiltersProps {
  availableFilters: readonly string[]
  selectedFilters: Set<string>
  onToggleFilter: (filter: string) => void
  onClearFilters: () => void
  className?: string
}

/**
 * Project filters component displaying filter buttons/chips
 * Follows Single Responsibility Principle - only handles filter UI
 */
export function ProjectFilters({
  availableFilters,
  selectedFilters,
  onToggleFilter,
  onClearFilters,
  className,
}: ProjectFiltersProps) {
  if (availableFilters.length === 0) return null

  return (
    <div className={cn("container mx-auto px-4 py-4", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Filter by:
        </span>
        {availableFilters.map((filter) => {
          const isSelected = selectedFilters.has(filter)
          return (
            <Button
              key={filter}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onToggleFilter(filter)}
              className={cn(
                "transition-all duration-200",
                isSelected && "shadow-sm ring-2 ring-primary/20"
              )}
            >
              {filter}
            </Button>
          )
        })}
        {selectedFilters.size > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground"
          >
            <X className="mr-1 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>
    </div>
  )
}

