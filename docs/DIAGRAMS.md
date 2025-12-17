```mermaid
flowchart TD
    A["Visitor Arrives<br/>(Any URL)"] --> B{Is URL Valid?}
    B -->|Yes| C[Route to Requested Page]
    B -->|No| D[404 Not Found Page]
    C --> E["Render Layout<br/>(Navbar + Page + Footer)"]
    E --> F[Apply Page-Specific SEO]
    E --> G["Load Page Content<br/>(Home, About, Projects, etc.)"]
    D --> H[Custom 404 with Nav Links]
    H --> I["Click Navigation → Redirect to Valid Page"]
    style A fill:#1e293b,stroke:#475569,color:#e2e8f0
    style E fill:#0f172a,stroke:#334155,color:#cbd5e1
```

```mermaid
flowchart LR
    subgraph Visitor_Journeys["Visitor Journeys"]
        direction TB
        V1["Direct Entry / Bookmark"] --> Home[Home Page]
        V2["Search Engine (SEO)"] --> Home
        V3["Social Share / Link"] --> Home
        V4["GitHub / LinkedIn Profile Link"] --> Home
        V5["Project External Link Click"] --> Projects[Projects Page]
    end

    subgraph Primary_Flow["Primary Flow"]
        direction TB
        Home -->|"Scroll / CTA"| FeaturedProjects[Featured Projects Teaser]
        FeaturedProjects -->|"Click Project"| Projects
        Home -->|"About Me Nav"| About[About Page]
        Home -->|"Contact Nav"| Contact[Contact Page]
        About -->|"View Projects CTA"| Projects
        About -->|"Download Resume"| Resume[Resume Page]
        Projects -->|"Select Project Card"| ProjectDetail["Project Detail Modal / Section"]
        ProjectDetail -->|"Live Demo / GitHub Link"| External[External Site]
        Contact -->|"Submit Form"| Success["Success Message<br/>(Future: Email Sent)"]
    end

    subgraph Secondary_Flows["Secondary Flows"]
        direction TB
        AnyPage[Any Page] -->|"Nav Click"| Switch["Switch Page<br/>(No Reload - SPA)"]
        AnyPage -->|"Theme Toggle"| Toggle["Toggle Dark/Light Mode<br/>(Persisted)"]
        AnyPage -->|Scroll| Animations[Trigger Scroll Animations]
    end

    style Home fill:#1e40af,stroke:#3b82f6,color:#eff6ff
    style Projects fill:#7c3aed,stroke:#a78bfa,color:#f3e8ff
    style About fill:#15803d,stroke:#22c55e,color:#f0fdf4
    style Contact fill:#b91c1c,stroke:#ef4444,color:#fee2e2
    style Resume fill:#c2410c,stroke:#fb923c,color:#fff7ed
```

```mermaid
graph TD
    subgraph Global_Layout["Global Layout"]
        Root[App.tsx] --> Router[React Router]
        Router --> Layout["MainLayout.tsx<br/>(Navbar + Outlet + Footer)"]
        Layout --> Navbar["Navbar.tsx<br/>(Sticky, Links, Theme Toggle, Hamburger)"]
        Layout --> Outlet[Page Content]
        Layout --> Footer["Footer.tsx<br/>(Copyright, Social Links)"]
    end

    subgraph Pages
        Router --> Home[HomePage.tsx]
        Router --> About[AboutPage.tsx]
        Router --> Projects[ProjectsPage.tsx]
        Router --> Resume[ResumePage.tsx]
        Router --> Contact[ContactPage.tsx]
        Router --> Privacy[PrivacyPolicy.tsx]
        Router --> Terms[TermsOfService.tsx]
        Router --> NotFound[NotFoundPage.tsx]
    end

    subgraph Shared_Components["Shared Components"]
        Sections["sections/"] --> Hero[HeroSection.tsx]
        Sections --> SkillsGrid[SkillsGrid.tsx]
        Sections --> ProjectGrid[ProjectGrid.tsx]
        Sections --> Timeline[ExperienceTimeline.tsx]
        Sections --> TestimonialCarousel[TestimonialCarousel.tsx]
        Sections --> GitHubCalendar[GitHubContributions.tsx]

        Shared["shared/"] --> ProjectCard[ProjectCard.tsx]
        Shared --> ProjectModal[ProjectDetailModal.tsx]
        Shared --> Button[Button variants]
        Shared --> Card[Card.tsx]
        Shared --> FormComponents["Input, Textarea, etc."]
    end

    subgraph Data_Config["Data & Config"]
        Data["data/"] --> projects.ts
        Data --> skills.ts
        Data --> testimonials.ts
        Data --> experience.ts
        Config["config/app.config.ts"] --> branding["branding, navLinks, socials"]
    end

    Pages -->|use| Sections
    Pages -->|use| Shared
    Pages -->|"import data"| Data
    Pages -->|"import config"| Config
    Pages -->|"wrap with"| SEO[SEO.tsx Component]

    style Global_Layout fill:#0f172a,stroke:#334155,color:#e2e8f0
    style Pages fill:#1e293b,stroke:#475569,color:#cbd5e1
    style Shared_Components fill:#164e63,stroke:#0891b2,color:#a5f3fc
    style Data_Config fill:#365314,stroke:#84cc16,color:#f0fdf4
```

```mermaid
flowchart TD
    A[Contact Page Loaded] --> B["Render Contact Form<br/>(react-hook-form + zod)"]
    B --> C["User Fills Fields<br/>(Name, Email, Message)"]
    C --> D["Client-Side Validation<br/>(On Change / Submit)"]
    D --> E{Valid?}
    E -->|No| F["Show Inline Errors<br/>(shadcn/ui FormMessage)"]
    F --> C
    E -->|Yes| G[Submit Handler]
    G --> H["Future: Netlify Forms / Formspree POST"]
    H --> I[Show Success Toast/Message]
    H --> J[Reset Form]
    I --> K[User Can Close / Navigate Away]
```

```mermaid
flowchart LR
    P[Projects Page] --> Filter["Filter Bar<br/>(Tech Tags)"]
    Filter -->|"Select Tag"| ApplyFilter[Apply Filter to projects array]
    ApplyFilter --> Grid[Render Filtered ProjectGrid]
    Grid --> Card[Click ProjectCard]
    Card --> Modal[Open ProjectDetailModal]
    Modal --> Content["Display Case Study:<br/>- Role<br/>- Challenges<br/>- Solutions<br/>- Tech Stack<br/>- Outcomes<br/>- Screenshots<br/>- Links"]
    Content --> Links[Live Demo / GitHub Buttons]
    Links --> External[Open External Tab]
    Modal --> Close["Close Modal → Back to Grid"]
```

```mermaid
sequenceDiagram
    participant Browser
    participant App
    participant ThemeContext
    participant localStorage

    Browser->>App: Load / Refresh
    App->>ThemeContext: Read preferred theme
    ThemeContext->>localStorage: Get "theme" value
    localStorage-->>ThemeContext: "dark" | "light" | null
    alt null or no preference
        ThemeContext->>ThemeContext: Default to "dark"
    end
    ThemeContext-->>App: Apply theme classes (tailwind dark:)
    App->>Browser: Render in selected theme

    Note over Browser,ThemeContext: User clicks Theme Toggle
    Browser->>App: Toggle click
    App->>ThemeContext: toggleTheme()
    ThemeContext->>ThemeContext: Switch dark ↔ light
    ThemeContext->>localStorage: Save new theme
    ThemeContext-->>App: Updated theme
    App->>Browser: Re-render with new theme
```

These Mermaid diagrams comprehensively cover the portfolio website:

- **Site Flow & Routing** – How pages are reached and fallback handled.
- **User Journeys** – Typical visitor paths and interactions.
- **Component Architecture** – Modular structure showing SOLID adherence (separation of layout, pages, reusable sections, data).
- **Contact Form Flow** – Detailed user interaction with validation.
- **Projects Interaction Flow** – Filtering and deep dive into project details.
- **Theme Toggle Sequence** – Persistence and application of dark mode.
