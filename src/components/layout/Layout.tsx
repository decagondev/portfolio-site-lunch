import { type ReactNode } from "react"
import { Navbar } from "./Navbar"
import { Footer, type FooterConfig } from "./Footer"

interface LayoutProps {
  children: ReactNode
  footerConfig?: FooterConfig
}

/**
 * Main layout component that composes navbar, main content, and footer
 * Follows Composition over Inheritance principle
 */
export function Layout({ children, footerConfig }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer config={footerConfig} />
    </div>
  )
}
