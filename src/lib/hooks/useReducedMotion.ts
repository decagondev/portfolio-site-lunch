import { useState, useEffect } from "react"

/**
 * Hook to detect if user prefers reduced motion
 * Follows Single Responsibility Principle - only handles reduced motion detection
 * 
 * @returns boolean indicating if reduced motion is preferred
 */
export function useReducedMotion(): boolean {
  // Initialize state with media query check if available (SSR safe)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === "undefined") {
      return
    }

    // Get media query (already checked in initial state, but needed for listener)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  return prefersReducedMotion
}

