import { motion } from "framer-motion"
import { SEO } from "@/components/seo/SEO"
import { ResumeTimeline } from "@/components/shared/ResumeTimeline"
import { experience } from "@/data/experience"
import { appConfig } from "@/config/app.config"
import { useReducedMotion } from "@/lib/hooks/useReducedMotion"

/**
 * Resume page component with interactive timeline and PDF download
 */
export function ResumePage() {
  const prefersReducedMotion = useReducedMotion()
  // Placeholder for resume PDF URL - update with actual resume file path
  const resumeUrl = "/resume.pdf" // This would be the actual path to the PDF file

  return (
    <>
      <SEO
        title={`Resume - ${appConfig.name}`}
        description={`View my professional experience and download my resume. ${appConfig.bio}`}
        keywords="resume, CV, experience, professional, portfolio"
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 text-4xl font-bold">Resume</h1>
          <ResumeTimeline experience={experience} resumeUrl={resumeUrl} />
        </motion.div>
      </div>
    </>
  )
}

