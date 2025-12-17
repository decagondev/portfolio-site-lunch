import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { SEO } from "@/components/seo/SEO"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { appConfig } from "@/config/app.config"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * 404 Not Found page component
 * Displays friendly error message with navigation options
 */
export function NotFoundPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SEO
        title={`404 - Page Not Found - ${appConfig.name}`}
        description="The page you're looking for doesn't exist."
      />
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          className="mx-auto max-w-md text-center"
        >
          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="mb-4 text-6xl font-bold"
          >
            404
          </motion.h1>
          <motion.h2
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="mb-4 text-2xl font-semibold"
          >
            Page Not Found
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="mb-8 text-muted-foreground"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Popular Pages:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link to="/about">About</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/projects">Projects</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/resume">Resume</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

