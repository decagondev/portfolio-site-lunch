import { type Experience } from "@/data/experience"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ResumeTimelineProps {
  experience: readonly Experience[]
  resumeUrl?: string
  className?: string
}

/**
 * Resume timeline component with PDF download
 * Follows Single Responsibility Principle - only handles resume display and download
 */
export function ResumeTimeline({
  experience,
  resumeUrl,
  className,
}: ResumeTimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Experience</h2>
        {resumeUrl && (
          <Button asChild>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </a>
          </Button>
        )}
      </div>
      <ExperienceTimeline experience={experience} />
    </div>
  )
}

