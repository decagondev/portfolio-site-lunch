# Portfolio Website Development Task List

**Project Repository:** https://github.com/decagondev/portfolio-site-lunch  
**Tech Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui  
**Core Principles:**  
- Strictly adhere to **SOLID principles** (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).  
- **Modular design**: Feature-based organization, reusable components, small focused files.  
- AI-first workflow using **Cursor IDE**.  
- All code generation/refactoring must respect the PRD v2.0 architecture, file structure, and features.  

This task list is **highly granular** to enable precise AI prompts in Cursor (e.g., "Implement sub-task 3.2 using the rules in .cursor/rules/solid.mdc").

## Epic 0: Cursor IDE Project Configuration & AI Guidance Setup
**Goal:** Establish persistent AI guidance via Cursor rules and a basic memory bank to ensure consistent adherence to PRD, SOLID, modularity, and project conventions across all sessions.

**PR 0.1: Create .cursor/rules Directory and Core Rule Files**
- Sub-tasks:
  1. Create directory `.cursor/rules/` in project root.
  2. Create `project-overview.mdc` (alwaysApply: true) – Summarize PRD: project purpose, pages, global features, file structure, dark mode default, sticky navbar, remove sidebar.
  3. Create `solid-principles.mdc` (globs: ["src/**/*.ts", "src/**/*.tsx"]) – Detailed SOLID enforcement examples tailored to React/TS (e.g., SRP: components render only UI, logic in hooks).
  4. Create `modular-design.mdc` (globs: ["src/**/*.ts", "src/**/*.tsx"]) – Enforce proposed file structure, reusable sections/components, data in src/data/.
  5. Create `react-typescript-best-practices.mdc` (globs: ["src/**/*.tsx"]) – Functional components, explicit types/interfaces, shadcn/ui usage, Tailwind conventions.
  6. Create `tailwind-shadcn.mdc` (globs: ["**/*.tsx"]) – Prefer shadcn/ui components, Tailwind utility classes, accessibility focus.
  7. Create `seo-and-global.mdc` – Mandate use of SEO component on every page, theme toggle persistence.
- Suggested Commits:
  - `chore(cursor): initialize .cursor/rules directory`
  - `feat(cursor): add project-overview.mdc with PRD summary`
  - `feat(cursor): add solid-principles.mdc and modular-design.mdc`
  - `feat(cursor): add react-typescript, tailwind-shadcn, and seo rules`

**PR 0.2: Initialize Memory Bank for Persistent Context**
- Sub-tasks:
  1. Create directory `.cursor/memory-bank/`.
  2. Create `prd-summary.md` – Concise copy of key PRD sections (pages, architecture, enhancements).
  3. Create `decisions-log.md` – Initial empty log for architectural decisions (e.g., "Remove sidebar – cleaner navbar focus").
  4. Create `task-progress.md` – Initial TODO list mirroring this task list.
  5. Create `memory-bank-loader.mdc` in `.cursor/rules/` – Rule to always load memory-bank files into context and update them when decisions are made.
- Suggested Commits:
  - `chore(cursor): setup memory-bank directory and initial files`
  - `feat(cursor): add memory-bank-loader rule`

**PR 0.3: Finalize Cursor Setup**
- Sub-tasks:
  1. Add `.cursorignore` to exclude node_modules, dist, etc.
  2. Test rules: Open a file, use Composer/Chat to generate sample component and verify rules apply.
  3. Update memory-bank with initial decision: "Epic 0 complete – AI guidance established".
- Suggested Commits:
  - `chore(cursor): add .cursorignore and test rules`

## Epic 1: Foundation Cleanup & Modular Refactoring
**Goal:** Clean starter repo, remove sidebar, establish modular base.

**PR 1.1: Remove Sidebar & Simplify Layout**
- Sub-tasks:
  1. Locate and delete Sidebar component/files and all imports/references.
  2. Update main Layout component to compose: Navbar + children + Footer only.
  3. Implement responsive hamburger menu in Navbar for mobile navigation.
  4. Ensure sticky behavior preserved.
  5. Test on desktop/mobile.
- Suggested Commits:
  - `chore: remove Sidebar component and all references`
  - `feat(layout): simplify Layout to Navbar + children + Footer`
  - `feat(navbar): add responsive hamburger menu`

**PR 1.2: Centralize Configuration & Static Data**
- Sub-tasks:
  1. Expand/create `src/config/app.config.ts` (name, tagline, social links, navigation items).
  2. Create `src/data/skills.ts`, `projects.ts`, `testimonials.ts` as typed arrays.
  3. Create `src/data/experience.ts` for timeline.
  4. Ensure data is easily editable without code changes.
- Suggested Commits:
  - `feat(config): centralize app branding and navigation`
  - `feat(data): add static typed data files for content`

**PR 1.3: Enforce Modular File Structure**
- Sub-tasks:
  1. Create folders: `src/components/layout/`, `src/components/sections/`, `src/components/shared/`, `src/pages/`.
  2. Move existing components accordingly (e.g., Navbar to layout).
  3. Update imports.
- Suggested Commits:
  - `refactor: establish modular folder structure per PRD`

## Epic 2: Core Pages Implementation
**Goal:** Implement all pages with SEO, responsiveness, and modularity.

**PR 2.1: Home & About Pages**
- Sub-tasks:
  1. Create `HomePage.tsx` with Hero section (tagline, photo/teaser).
  2. Add featured projects grid (use data/projects teaser).
  3. Add subtle animations (install Framer Motion if needed later).
  4. Create `AboutPage.tsx` with bio, skills badges, experience timeline, testimonials teaser.
  5. Apply `<SEO />` with page-specific props.
- Suggested Commits:
  - `feat(home): hero and featured projects`
  - `feat(about): bio, skills, timeline`

**PR 2.2: Projects Page**
- Sub-tasks:
  1. Create reusable `ProjectCard.tsx` (image, title, tech badges, links).
  2. Add filtering by tech/tag.
  3. Implement detailed view (modal with case study: role, challenges, solutions, outcomes).
  4. Create `ProjectsPage.tsx` with grid and filters.
  5. Apply SEO.
- Suggested Commits:
  - `feat(projects): project card and grid`
  - `feat(projects): filtering and detail modal`

**PR 2.3: Resume & Contact Pages**
- Sub-tasks:
  1. Create `ResumePage.tsx` with interactive timeline + PDF download button.
  2. Create `ContactPage.tsx` with form (use react-hook-form + zod validation).
  3. Prepare for future Netlify Forms integration.
  4. Apply SEO.
- Suggested Commits:
  - `feat(resume): timeline and PDF download`
  - `feat(contact): validated form`

**PR 2.4: Legal Pages & 404**
- Sub-tasks:
  1. Minor content polish on Privacy/Terms.
  2. Create custom `NotFoundPage.tsx` with navigation CTA.
  3. Update routing to handle 404.
- Suggested Commits:
  - `feat: custom 404 page`
  - `style: polish legal pages`

## Epic 3: Enhancements, Polish & Deployment
**Goal:** Add animations, integrations, optimizations.

**PR 3.1: Animations & Interactions**
- Sub-tasks:
  1. Install Framer Motion.
  2. Add fade-in on scroll, hover effects to cards/sections.
  3. Ensure accessibility (reduced motion support).
- Suggested Commits:
  - `feat(animations): integrate Framer Motion`
  - `enhance: apply section animations`

**PR 3.2: Testimonials & GitHub Integration**
- Sub-tasks:
  1. Create `TestimonialCarousel.tsx` using data.
  2. Integrate react-github-calendar for contributions (About page).
- Suggested Commits:
  - `feat: testimonials carousel`
  - `feat: GitHub contribution calendar`

**PR 3.3: Final Optimizations & Deployment Prep**
- Sub-tasks:
  1. SEO audit: Verify all pages use SEO component correctly.
  2. Image optimization/lazy loading.
  3. Lighthouse testing (>95 performance/accessibility).
  4. Build and test Netlify deployment.
  5. Update memory-bank with completion notes.
- Suggested Commits:
  - `fix: SEO and accessibility final tweaks`
  - `chore: optimize images and performance`
  - `chore: prepare production build and deploy`
