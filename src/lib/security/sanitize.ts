/**
 * Input sanitization utilities
 * Follows Single Responsibility Principle - only handles input sanitization
 * Security best practice: Sanitize all user inputs before DOM manipulation
 */

/**
 * Sanitizes meta tag content by:
 * - Removing HTML tags
 * - Encoding special characters
 * - Removing dangerous protocols
 * - Trimming whitespace
 */
export function sanitizeMetaContent(content: string): string {
  if (!content || typeof content !== "string") {
    return ""
  }

  return content
    // Remove HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove dangerous protocols (javascript:, data:, vbscript:, etc.)
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/vbscript:/gi, "")
    .replace(/on\w+\s*=/gi, "") // Remove event handlers (onclick, onerror, etc.)
    // Encode special characters that could be used for XSS
    .replace(/[<>]/g, "")
    // Trim whitespace
    .trim()
    // Limit length to prevent DoS
    .slice(0, 5000)
}

/**
 * Sanitizes meta tag name/attribute by:
 * - Removing HTML tags
 * - Removing special characters that could break HTML
 * - Validating format
 */
export function sanitizeMetaName(name: string): string {
  if (!name || typeof name !== "string") {
    return ""
  }

  return name
    // Remove HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove dangerous characters
    .replace(/[<>"']/g, "")
    // Remove whitespace
    .replace(/\s+/g, "")
    // Limit length
    .slice(0, 100)
}

/**
 * Sanitizes URL for use in href attributes
 * Validates protocol and removes dangerous schemes
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== "string") {
    return ""
  }

  const trimmed = url.trim()

  // Allow only http, https, and mailto protocols
  const allowedProtocols = /^(https?|mailto):/i
  if (!allowedProtocols.test(trimmed)) {
    // If no protocol, assume https
    if (!trimmed.startsWith("/") && !trimmed.startsWith("#")) {
      return `https://${trimmed}`
    }
    return trimmed
  }

  return trimmed
}

/**
 * Sanitizes text content for display in HTML
 * Escapes HTML entities to prevent XSS
 */
export function sanitizeText(text: string): string {
  if (!text || typeof text !== "string") {
    return ""
  }

  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }

  return text.replace(/[&<>"']/g, (char) => map[char] || char)
}

