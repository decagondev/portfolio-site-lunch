import { motion } from "framer-motion"
import { type Experience } from "@/data/experience"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

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
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
      className={cn("space-y-8", className)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Experience</h2>
        {resumeUrl && (
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
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
          </motion.div>
        )}
      </div>
      <ExperienceTimeline experience={experience} />
    </motion.div>
  )
}

