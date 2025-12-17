import { SEO } from "@/components/seo/SEO"
import { SkillsGrid } from "@/components/sections/SkillsGrid"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel"
import { GitHubContributions } from "@/components/sections/GitHubContributions"
import { skills } from "@/data/skills"
import { experience } from "@/data/experience"
import { testimonials } from "@/data/testimonials"
import { appConfig } from "@/config/app.config"

/**
 * About page component
 * Displays bio, skills, experience timeline, and testimonials
 */
export function AboutPage() {
  return (
    <>
      <SEO
        title={`About - ${appConfig.name}`}
        description={`Learn more about ${appConfig.name}. ${appConfig.bio}`}
        keywords="about, developer, experience, skills, portfolio"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Bio Section */}
          <div className="mb-12">
            <h1 className="mb-6 text-4xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground">{appConfig.bio}</p>
          </div>
        </div>
      </div>

      <SkillsGrid skills={skills} />
      <ExperienceTimeline experience={experience} />
      <GitHubContributions />
      <TestimonialCarousel testimonials={testimonials} />
    </>
  )
}
