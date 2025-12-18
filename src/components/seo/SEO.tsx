import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { sanitizeMetaContent, sanitizeMetaName, sanitizeUrl } from "@/lib/security/sanitize"

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonical?: string
}

/**
 * SEO component that dynamically updates page metadata
 * Follows Single Responsibility Principle - only handles SEO metadata
 */
export function SEO({
  title = "Tom Tarpey - Principal AI Engineer | Portfolio",
  description = "Portfolio of Tom Tarpey - Principal AI Engineer specializing in Large Language Models, AI/ML infrastructure, and full-stack development. Expert in LLM fine-tuning, RAG systems, and agentic workflows.",
  keywords = "AI engineer, LLM, machine learning, principal engineer, AI consultant, LLM fine-tuning, RAG, agentic workflows, full-stack developer, React, TypeScript",
  author = "Tom Tarpey",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonical,
}: SEOProps) {
  const location = useLocation()
  // Use environment variable or detect from window (works in browser)
  const baseUrl = import.meta.env.VITE_BASE_URL || (typeof window !== "undefined" ? window.location.origin : "")
  const fullCanonical = canonical || (baseUrl ? `${baseUrl}${location.pathname}` : location.pathname)

  useEffect(() => {
    // Sanitize and update title
    const sanitizedTitle = sanitizeMetaContent(title)
    document.title = sanitizedTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      if (!content) return // Skip if content is empty
      const sanitizedName = sanitizeMetaName(name)
      const sanitizedContent = sanitizeMetaContent(content)
      if (!sanitizedName || !sanitizedContent) return // Skip if sanitization removed everything
      
      let element = document.querySelector(`meta[${attribute}="${sanitizedName}"]`)
      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, sanitizedName)
        document.head.appendChild(element)
      }
      element.setAttribute("content", sanitizedContent)
    }

    // Standard meta tags
    if (description) updateMetaTag("description", description)
    if (keywords) updateMetaTag("keywords", keywords)
    if (author) updateMetaTag("author", author)

    // Open Graph tags
    if (title) updateMetaTag("og:title", title, "property")
    if (description) updateMetaTag("og:description", description, "property")
    if (ogImage) updateMetaTag("og:image", ogImage, "property")
    if (ogType) updateMetaTag("og:type", ogType, "property")
    if (fullCanonical) updateMetaTag("og:url", fullCanonical, "property")

    // Twitter Card tags
    if (twitterCard) updateMetaTag("twitter:card", twitterCard)
    if (title) updateMetaTag("twitter:title", title)
    if (description) updateMetaTag("twitter:description", description)
    if (ogImage) updateMetaTag("twitter:image", ogImage)

    // Canonical link
    const sanitizedCanonical = sanitizeUrl(fullCanonical)
    if (sanitizedCanonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (!canonicalLink) {
        canonicalLink = document.createElement("link")
        canonicalLink.setAttribute("rel", "canonical")
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute("href", sanitizedCanonical)
    }
  }, [title, description, keywords, author, ogImage, ogType, twitterCard, canonical, baseUrl, location.pathname, fullCanonical])

  return null
}
