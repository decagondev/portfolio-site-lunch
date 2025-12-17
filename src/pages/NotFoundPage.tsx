import { Link } from "react-router-dom"
import { SEO } from "@/components/seo/SEO"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { appConfig } from "@/config/app.config"

/**
 * 404 Not Found page component
 * Displays friendly error message with navigation options
 */
export function NotFoundPage() {
  return (
    <>
      <SEO
        title={`404 - Page Not Found - ${appConfig.name}`}
        description="The page you're looking for doesn't exist."
      />
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
          <div className="mt-12">
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
          </div>
        </div>
      </div>
    </>
  )
}

