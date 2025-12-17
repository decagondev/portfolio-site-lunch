import { useState, useEffect, Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { appConfig } from "@/config/app.config"

// Lazy load the GitHub calendar component to reduce initial bundle size
const GitHubCalendar = lazy(() => 
  import("react-github-calendar").then((module) => ({ default: module.GitHubCalendar }))
)

export interface GitHubContributionsProps {
  username?: string
  className?: string
}

/**
 * GitHub contributions calendar component
 * Follows Single Responsibility Principle - only handles GitHub contributions display
 */
export function GitHubContributions({
  username,
  className,
}: GitHubContributionsProps) {
  const prefersReducedMotion = useReducedMotion()
  const [gitHubUsername, setGitHubUsername] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Extract username from GitHub URL or use provided username
    let extractedUsername: string | null = null

    if (username) {
      extractedUsername = username
    } else if (appConfig.socialLinks.github) {
      // Extract username from GitHub URL (e.g., https://github.com/username)
      const match = appConfig.socialLinks.github.match(
        /github\.com\/([^\/\?]+)/
      )
      if (match && match[1]) {
        extractedUsername = match[1]
      }
    }

    if (extractedUsername) {
      setGitHubUsername(extractedUsername)
      setIsLoading(false)
    } else {
      setHasError(true)
      setIsLoading(false)
    }
  }, [username])

  if (hasError || !gitHubUsername) {
    return null
  }

  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold">GitHub Contributions</h2>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">Loading contributions...</p>
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-12">
                  <p className="text-muted-foreground">Loading calendar...</p>
                </div>
              }
            >
              <div className="github-calendar-wrapper">
                <GitHubCalendar
                  username={gitHubUsername}
                  colorScheme="dark"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                />
              </div>
            </Suspense>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          View my contributions on{" "}
          <a
            href={`https://github.com/${gitHubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        </p>
      </motion.div>

      <style>{`
        .github-calendar-wrapper {
          display: flex;
          justify-content: center;
          overflow-x: auto;
        }
        
        .github-calendar-wrapper svg {
          max-width: 100%;
          height: auto;
        }
        
        /* Dark mode adjustments */
        @media (prefers-color-scheme: light) {
          .github-calendar-wrapper {
            filter: invert(1) hue-rotate(180deg);
          }
        }
        
        /* Ensure calendar respects theme */
        [data-theme="light"] .github-calendar-wrapper {
          filter: invert(1) hue-rotate(180deg);
        }
      `}</style>
    </section>
  )
}

