import { SEO } from "@/components/seo/SEO"
import { ContactForm } from "@/components/shared/ContactForm"
import { appConfig, type SocialLinks } from "@/config/app.config"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { validateEmail } from "@/lib/security/validation"
import { sanitizeUrl } from "@/lib/security/sanitize"

/**
 * Contact page component with form and social links
 */
export function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact - ${appConfig.name}`}
        description={`Get in touch with ${appConfig.name}. Send a message or connect via social media.`}
        keywords="contact, get in touch, email, social media, portfolio"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
          <p className="mb-12 text-lg text-muted-foreground">
            Have a question or want to work together? Send me a message or
            connect via social media.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Social Links */}
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Connect</h2>
              <div className="space-y-4">
                {appConfig.socialLinks.email && (() => {
                  // Extract email from mailto: link or use as-is
                  const emailMatch = appConfig.socialLinks.email.replace(/^mailto:/i, "")
                  const validatedEmail = validateEmail(emailMatch)
                  const safeEmailLink = validatedEmail 
                    ? sanitizeUrl(`mailto:${validatedEmail}`)
                    : null
                  
                  return safeEmailLink ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <a href={safeEmailLink}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  ) : null
                })()}
                {appConfig.socialLinks.github && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={appConfig.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {appConfig.socialLinks.linkedin && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={appConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {(appConfig.socialLinks as SocialLinks).twitter && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <a
                      href={(appConfig.socialLinks as SocialLinks).twitter!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

