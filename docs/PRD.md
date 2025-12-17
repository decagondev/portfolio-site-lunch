# Product Requirements Document (PRD) - Version 2.0

## 1. Document Overview
**Product Name:** Personal Developer Portfolio Website  

This updated PRD expands on the initial version, incorporating deeper architectural guidance, additional features based on 2025 best practices for developer portfolios (e.g., dedicated projects showcase with case studies, testimonials, GitHub integration), and a detailed implementation breakdown into **Epics**, **Pull Requests (PRs)**, **Commits**, and **Sub-tasks**. The design remains modular, strictly adhering to **SOLID principles** for maintainability and scalability.

The base repository (https://github.com/decagondev/portfolio-site-lunch) provides an excellent foundation: Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui, with dark mode (default), sticky navbar, collapsible sidebar (to be removed), reusable SEO component, and pre-built legal pages.

## 2. Enhanced Product Overview
### 2.1 Purpose & Value Proposition
A modern, high-performance personal portfolio to:
- Showcase technical skills, projects, and professional journey.
- Attract employers, clients, or collaborators.
- Demonstrate expertise through the site's own implementation (e.g., animations, responsiveness, accessibility).
- Highlight personality with subtle interactions and personal touches.

### 2.2 Key Enhancements (from Research)
- Dedicated **Projects** page with detailed case studies (role, challenges, solutions, tech stack, outcomes).
- **Testimonials** section for social proof.
- **Resume** download (PDF) and/or interactive timeline.
- GitHub contribution calendar integration.
- Subtle animations (Framer Motion recommended).
- Analytics-ready (future: Plausible or Vercel Analytics).

## 3. Core Pages (Updated)
| Page                  | Purpose                                                                 | Key Elements                                                                                  | SEO Focus                          |
|-----------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|------------------------------------|
| **Home/Landing**      | First impression, hero introduction                                     | Hero with tagline/photo, skills teaser, featured projects grid, CTA to Projects/Contact       | Primary keywords, OG image         |
| **About**             | Personal story, skills, experience                                      | Bio, photo, skills badges, experience timeline, fun facts/testimonials                        | Bio keywords                       |
| **Projects** (New)    | Detailed showcase of work                                                | Filterable grid, project cards → detailed modal/page (images, description, tech, links, case study) | Project-specific tags              |
| **Resume** (New)      | Downloadable/professional summary                                       | Interactive timeline or static page with PDF download                                         | Resume-related searches            |
| **Contact** (New)     | Inquiry form and links                                                  | Form (client-side validation, integrate Netlify Forms/Formspree), social/email links           | Contact metadata                   |
| **Privacy Policy**    | Legal compliance                                                        | Static (existing)                                                                             | Basic                              |
| **Terms of Service**  | Legal compliance                                                        | Static (existing)                                                                             | Basic                              |
| **404 Not Found**     | Graceful error handling                                                 | Custom page with nav back to home                                                              | N/A                                |

### 3.1 Global Features (Enhanced)
- **Navigation:** Sticky navbar (retain), remove sidebar for cleaner experience.
- **Theme:** Dark default, toggle with localStorage persistence.
- **SEO:** Reusable `<SEO />` component on every page (dynamic title, description, OG tags).
- **Animations:** Subtle entrance/scroll effects (e.g., fade-in sections).
- **Accessibility:** shadcn/ui base + ARIA labels, keyboard nav.
- **Performance:** Image optimization, lazy loading, Vite pre-compression.

## 4. Architecture & SOLID Adherence
### 4.1 File Structure (Proposed Evolution)
```
src/
├── components/
│   ├── layout/     → Navbar, Footer (remove Sidebar)
│   ├── seo/        → SEO.tsx
│   ├── ui/         → shadcn extensions
│   ├── sections/   → Reusable: Hero, SkillsGrid, ProjectCard, TestimonialCarousel
│   └── shared/     → Buttons, Cards, Modals
├── contexts/       → ThemeContext (existing)
├── data/           → projects.ts, testimonials.ts, skills.ts (static JSON/TS arrays)
├── lib/            → utils (e.g., form validation)
├── pages/          → HomePage, AboutPage, ProjectsPage, etc.
├── config/         → app.config.ts (branding, links, socials)
├── App.tsx         → Routing
└── main.tsx
```

### 4.2 SOLID Enforcement
- **Single Responsibility:** e.g., ProjectCard only renders UI; data fetching/logic in hooks.
- **Open/Closed:** Extend sections via props/composition.
- **Liskov Substitution:** All page components implement common interface (e.g., { seoProps }).
- **Interface Segregation:** Small hooks (useTheme, useForm).
- **Dependency Inversion:** Inject contexts/utils via hooks.

## 5. Non-Functional Requirements
- Lighthouse: >95 Performance, 100 Accessibility/SEO.
- Responsive: Mobile-first, tested on devices.
- Bundle size: <200KB initial load.

## 6. Implementation Breakdown (AI-First with Cursor IDE)
Development uses **Cursor IDE** for AI-assisted coding: Prompt with PRD sections, review generated code for SOLID/Tailwind compliance.

### Epic 1: Foundation Cleanup & Setup
**Goal:** Prepare clean base (remove sidebar, enhance modularity).

**PR 1: Remove Sidebar & Refine Layout**
- Sub-tasks:
  1. Delete Sidebar.tsx and references.
  2. Update Layout.tsx to compose only Navbar + children + Footer.
  3. Ensure mobile nav uses hamburger in Navbar.
  4. Test responsiveness.
- Suggested Commits:
  - `chore: remove Sidebar component and imports`
  - `feat(layout): enhance Navbar for mobile navigation`
  - `refactor: simplify Layout composition`

**PR 2: Centralize Configuration & Data**
- Sub-tasks:
  1. Expand `src/config/app.config.ts` (name, bio, socials).
  2. Create `src/data/` with TS arrays for skills, projects, testimonials.
- Commits:
  - `feat(config): add centralized app config`
  - `feat(data): add static data files for content`

### Epic 2: Core Pages Implementation
**Goal:** Build/enhance all pages with SEO and modularity.

**PR 3: Enhance Home & About Pages**
- Sub-tasks:
  1. Hero section with animations.
  2. Featured projects teaser on Home.
  3. Skills/timeline on About.
- Commits:
  - `feat(home): implement hero and teaser sections`
  - `feat(about): add bio, skills, timeline`

**PR 4: Implement Projects Page**
- Sub-tasks:
  1. Project grid with filters (tech/tags).
  2. ProjectCard component.
  3. Modal or sub-page for details (case study).
- Commits:
  - `feat(projects): add grid and filtering`
  - `feat(projects): implement detailed project modal`

**PR 5: Add Resume & Contact Pages**
- Sub-tasks:
  1. Resume: Timeline + PDF download button.
  2. Contact: Form with validation (react-hook-form recommended).
- Commits:
  - `feat(resume): interactive timeline and download`
  - `feat(contact): form with validation and submission`

**PR 6: Polish Legal Pages & 404**
- Sub-tasks:
  1. Minor content updates if needed.
  2. Custom 404 page.
- Commits:
  - `feat: add custom 404 page`
  - `style: minor updates to legal pages`

### Epic 3: Enhancements & Optimizations
**Goal:** Add polish and integrations.

**PR 7: Animations & Interactions**
- Sub-tasks:
  1. Install Framer Motion.
  2. Add scroll-triggered fades, hover effects.
- Commits:
  - `feat(animations): integrate Framer Motion`
  - `enhance: apply animations to sections`

**PR 8: Testimonials & GitHub Integration**
- Sub-tasks:
  1. Testimonial carousel.
  2. GitHub contribution calendar (react-github-calendar).
- Commits:
  - `feat: add testimonials section`
  - `feat: integrate GitHub contributions`

**PR 9: Final Polish & Deployment**
- Sub-tasks:
  1. SEO audit on all pages.
  2. Performance optimizations (lazy images).
  3. Test Netlify deployment.
- Commits:
  - `fix: SEO and accessibility tweaks`
  - `chore: prepare for production build`

## 7. Success Metrics & Next Steps
- All PRs merged, site deployed.
- Lighthouse scores achieved.
- Easy content updates via data files.
