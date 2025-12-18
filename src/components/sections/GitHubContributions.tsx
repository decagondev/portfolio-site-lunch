import { useMemo, Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"
import { appConfig } from "@/config/app.config"
import { validateGitHubUsername } from "@/lib/security/validation"
import { ErrorBoundary } from "@/components/shared/ErrorBoundary"

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
  
  // Extract and validate username using useMemo to avoid setState in effect
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const gitHubUsername = useMemo(() => {
    if (username) {
      // Validate provided username
      return validateGitHubUsername(username)
    }
    if (appConfig.socialLinks.github) {
      // Extract username from GitHub URL (e.g., https://github.com/username)
      const match = appConfig.socialLinks.github.match(
        /github\.com\/([^/?]+)/
      )
      if (match && match[1]) {
        // Validate extracted username
        return validateGitHubUsername(match[1])
      }
    }
    return null
  }, [username])

  if (!gitHubUsername) {
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

        <div className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md">
          {!gitHubUsername ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">Loading contributions...</p>
            </div>
          ) : (
            <ErrorBoundary
              fallback={
                <div className="flex items-center justify-center py-12">
                  <p className="text-muted-foreground">Failed to load GitHub calendar. Please try again later.</p>
                </div>
              }
            >
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-12">
                    <p className="text-muted-foreground">Loading calendar...</p>
                  </div>
                }
              >
              <div
                className="flex justify-center overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:[data-theme=light]:invert [&_svg]:[data-theme=light]:hue-rotate-180"
                role="img"
                aria-label={`GitHub contribution calendar for ${gitHubUsername}`}
                aria-describedby="github-calendar-description"
              >
                <GitHubCalendar
                  username={gitHubUsername}
                  colorScheme="dark"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                />
              </div>
              <p id="github-calendar-description" className="sr-only">
                Visual representation of GitHub contributions over the past year. Each square represents a day, with darker colors indicating more contributions.
              </p>
              </Suspense>
            </ErrorBoundary>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          View my contributions on{" "}
          <a
            href={`https://github.com/${gitHubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-200 hover:underline"
          >
            GitHub
          </a>
        </p>
      </motion.div>
    </section>
  )
}


