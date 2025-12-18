/**
 * Environment-aware logging utility
 * Follows Single Responsibility Principle - only handles logging
 * Security best practice: No sensitive data in production logs
 */

const isDevelopment = import.meta.env.DEV

/**
 * Sanitizes sensitive data from log messages
 * Removes or masks potentially sensitive information
 */
function sanitizeData(data: unknown): unknown {
  if (typeof data !== "object" || data === null) {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(sanitizeData)
  }

  const sanitized: Record<string, unknown> = {}
  const sensitiveKeys = ["password", "token", "secret", "key", "auth", "email", "phone", "ssn", "credit"]

  for (const [key, value] of Object.entries(data)) {
    const lowerKey = key.toLowerCase()
    if (sensitiveKeys.some((sensitive) => lowerKey.includes(sensitive))) {
      sanitized[key] = "[REDACTED]"
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = sanitizeData(value)
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}

/**
 * Logs information (development only)
 */
export function logInfo(message: string, ...args: unknown[]): void {
  if (isDevelopment) {
    console.log(`[INFO] ${message}`, ...args.map(sanitizeData))
  }
}

/**
 * Logs warnings (development only)
 */
export function logWarning(message: string, ...args: unknown[]): void {
  if (isDevelopment) {
    console.warn(`[WARN] ${message}`, ...args.map(sanitizeData))
  }
}

/**
 * Logs errors with sanitization
 * In production, errors should be sent to error tracking service
 */
export function logError(message: string, error?: unknown, context?: Record<string, unknown>): void {
  const sanitizedError = error instanceof Error 
    ? {
        name: error.name,
        message: error.message,
        stack: isDevelopment ? error.stack : undefined,
      }
    : sanitizeData(error)

  const sanitizedContext = context ? sanitizeData(context) : undefined

  if (isDevelopment) {
    console.error(`[ERROR] ${message}`, sanitizedError, sanitizedContext)
  } else {
    // In production, send to error tracking service (e.g., Sentry)
    // Example: Sentry.captureException(error, { extra: { message, context: sanitizedContext } })
    // For now, we silently log in production to avoid exposing errors
  }
}

/**
 * Logs debug information (development only)
 */
export function logDebug(message: string, ...args: unknown[]): void {
  if (isDevelopment) {
    console.debug(`[DEBUG] ${message}`, ...args.map(sanitizeData))
  }
}

