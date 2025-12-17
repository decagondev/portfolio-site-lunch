/**
 * Testimonials data
 * Static typed data for testimonials showcase
 */

export interface Testimonial {
  readonly id: string
  readonly author: string
  readonly role: string
  readonly company?: string
  readonly content: string
  readonly avatar?: string
}

export const testimonials: readonly Testimonial[] = [
  {
    id: "testimonial-1",
    author: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and commitment to writing clean, maintainable code is exceptional. They delivered our project on time and exceeded our expectations.",
    avatar: "/john-doe.png",
  },
  {
    id: "testimonial-2",
    author: "Jane Smith",
    role: "Product Manager",
    company: "Startup Inc",
    content:
      "The portfolio website they built for us was exactly what we needed. It's fast, responsive, and beautifully designed. They were responsive to feedback and made the entire process smooth and enjoyable.",
    avatar: "/jane-smith.png",
  },
  {
    id: "testimonial-3",
    author: "Mike Johnson",
    role: "CTO",
    company: "Innovation Labs",
    content:
      "Outstanding technical skills combined with great communication. They helped us solve complex problems and delivered high-quality solutions. I would definitely work with them again.",
    avatar: "/mike-johnson.jpg",
  },
] as const

