import { motion } from "framer-motion"
import { type Testimonial } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export interface TestimonialsTeaserProps {
  testimonials: readonly Testimonial[]
  maxItems?: number
  className?: string
}

/**
 * Testimonials teaser component displaying a subset of testimonials
 * Follows Single Responsibility Principle - only handles testimonials display
 */
export function TestimonialsTeaser({
  testimonials,
  maxItems = 2,
  className,
}: TestimonialsTeaserProps) {
  const displayedTestimonials = testimonials.slice(0, maxItems)

  return (
    <section className={cn("container mx-auto px-4 py-12", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <p className="mb-4 italic text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full"
                  />
                )}
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

