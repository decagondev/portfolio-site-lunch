import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

export interface HeroSectionProps {
  title: string
  tagline: string
  description?: string
  ctaText: string
  ctaLink: string
  image?: string
  className?: string
}

/**
 * Hero section component with fade-in animation
 * Follows Single Responsibility Principle - only handles hero display
 */
export function HeroSection({
  title,
  tagline,
  description,
  ctaText,
  ctaLink,
  image,
  className,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className={cn("container mx-auto px-4 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mb-4 text-xl font-semibold text-primary sm:text-2xl">
              {tagline}
            </p>
            {description && (
              <p className="mb-6 text-lg text-muted-foreground">{description}</p>
            )}
            <Button asChild size="lg">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </motion.div>

          {/* Image/Visual */}
          {image && (
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.9 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                loading="eager"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

