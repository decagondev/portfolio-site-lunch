import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Testimonial } from "@/data/testimonials"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

export interface TestimonialCarouselProps {
  testimonials: readonly Testimonial[]
  autoRotate?: boolean
  autoRotateInterval?: number
  className?: string
}

/**
 * Testimonial carousel component with auto-rotation and manual navigation
 * Follows Single Responsibility Principle - only handles testimonial carousel display
 */
export function TestimonialCarousel({
  testimonials,
  autoRotate = true,
  autoRotateInterval = 5000,
  className,
}: TestimonialCarouselProps) {
  const prefersReducedMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isPaused || prefersReducedMotion || testimonials.length <= 1) {
      return
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotate, autoRotateInterval, isPaused, prefersReducedMotion, testimonials.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  if (testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className={cn("container mx-auto px-4 py-12", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg border bg-card p-8 shadow-sm transition-all duration-200 hover:shadow-md">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
              >
                <div className="text-center">
                  <p className="mb-6 text-lg italic text-muted-foreground">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    {currentTestimonial.avatar && (
                      <img
                        src={currentTestimonial.avatar}
                        alt={`${currentTestimonial.author} - ${currentTestimonial.role}`}
                        className="h-12 w-12 rounded-full"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{currentTestimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {currentTestimonial.role}
                        {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {testimonials.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          {/* Dot Indicators */}
          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      goToIndex(index)
                    }
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted hover:bg-primary/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

