/**
 * URL and input validation utilities
 * Follows Single Responsibility Principle - only handles validation
 * Security best practice: Validate all external inputs
 */

import { z } from "zod"

/**
 * URL validation schema using Zod
 */
const urlSchema = z
  .string()
  .url("Invalid URL format")
  .refine(
    (url) => {
      try {
        const parsed = new URL(url)
        // Only allow http, https protocols
        return parsed.protocol === "http:" || parsed.protocol === "https:"
      } catch {
        return false
      }
    },
    { message: "URL must use http or https protocol" }
  )

/**
 * GitHub username validation schema
 * GitHub usernames: alphanumeric, hyphens, and underscores only
 * Length: 1-39 characters
 */
export const githubUsernameSchema = z
  .string()
  .min(1, "Username cannot be empty")
  .max(39, "Username cannot exceed 39 characters")
  .regex(/^[a-zA-Z0-9]([a-zA-Z0-9]|-(?![.-])){0,38}$/, "Invalid GitHub username format")

/**
 * Email validation schema
 */
export const emailSchema = z.string().email("Invalid email format")

/**
 * Validates a base URL
 * Returns validated URL or throws error
 */
export function validateBaseUrl(url: string | undefined | null): string {
  if (!url) {
    // Fallback to current origin if in browser
    if (typeof window !== "undefined") {
      const origin = window.location.origin
      // Validate the origin before using it
      try {
        urlSchema.parse(origin)
        return origin
      } catch {
        // If origin is invalid, return empty string
        return ""
      }
    }
    return ""
  }

  try {
    return urlSchema.parse(url)
  } catch {
    // Log validation error but don't expose details
    if (typeof window !== "undefined") {
      const origin = window.location.origin
      try {
        urlSchema.parse(origin)
        return origin
      } catch {
        return ""
      }
    }
    return ""
  }
}

/**
 * Validates a GitHub username
 * Returns validated username or null if invalid
 */
export function validateGitHubUsername(username: string | null | undefined): string | null {
  if (!username) {
    return null
  }

  try {
    return githubUsernameSchema.parse(username)
  } catch {
    return null
  }
}

/**
 * Validates an email address
 * Returns validated email or null if invalid
 */
export function validateEmail(email: string | null | undefined): string | null {
  if (!email) {
    return null
  }

  try {
    return emailSchema.parse(email)
  } catch {
    return null
  }
}

/**
 * Validates a URL
 * Returns validated URL or null if invalid
 */
export function validateUrl(url: string | null | undefined): string | null {
  if (!url) {
    return null
  }

  try {
    return urlSchema.parse(url)
  } catch {
    return null
  }
}

