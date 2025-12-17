import { SEO } from "@/components/seo/SEO"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { projects } from "@/data/projects"
import { appConfig } from "@/config/app.config"

/**
 * Landing/Home page component
 * Displays hero section and featured projects
 */
export function LandingPage() {
  return (
    <>
      <SEO
        title={`${appConfig.name} - ${appConfig.tagline}`}
        description={appConfig.description}
        keywords="AI engineer, LLM, machine learning, principal engineer, AI consultant, LLM fine-tuning, RAG, agentic workflows, full-stack developer, React, TypeScript"
      />
      <HeroSection
        title={appConfig.name}
        tagline={appConfig.tagline}
        description={appConfig.bio}
        ctaText="View My Work"
        ctaLink="/projects"
        image="/hero-image.jpg"
      />
      <FeaturedProjects projects={projects} maxItems={3} />
    </>
  )
}
