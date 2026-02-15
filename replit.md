# Replit.md

## Overview

This is a personal developer portfolio website for Faisal Younis — a "Cyberpunk Professional" themed single-page application. It showcases projects, work experience, skills, and a contact form. The app uses a full-stack architecture with a React frontend and Express backend, backed by a PostgreSQL database. The design features a dark mode aesthetic with neon accents (#00ffd5 cyan, #ff66cc pink), glassmorphism effects, and terminal-like UI elements.

Currently, the frontend uses static data from `shared/static-data.ts` rather than fetching from the API endpoints, though the backend API routes are fully wired up to serve data from PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — single page app with just `/` and a 404 fallback
- **State/Data Fetching**: TanStack React Query — currently hooks in `use-portfolio.ts` return static data from `shared/static-data.ts` instead of calling the API
- **Styling**: Tailwind CSS with CSS variables for theming, shadcn/ui component library (New York style), class-variance-authority for variants
- **Animations**: Framer Motion for scroll reveals and transitions, typewriter-effect for the hero typing animation
- **UI Components**: Full shadcn/ui component library installed in `client/src/components/ui/`
- **Custom Components**: Hero, Navbar, AboutSection, ExperienceTimeline, SkillsMatrix, ProjectsGrid, ContactTerminal, Footer — all in `client/src/components/`
- **Fonts**: Inter (sans), JetBrains Mono (mono), plus others loaded via Google Fonts
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx)
- **Server Setup**: HTTP server created in `server/index.ts`, with Vite dev middleware in development and static file serving in production
- **API Routes**: Defined in `server/routes.ts`, following a shared contract in `shared/routes.ts`
  - `GET /api/projects` — returns all projects ordered by `order`
  - `GET /api/experience` — returns all experience entries ordered by `order`
  - `GET /api/skills` — returns all skills
  - `POST /api/contact` — validates and stores contact form messages
- **Storage Layer**: `server/storage.ts` implements `IStorage` interface using `DatabaseStorage` class with Drizzle ORM queries
- **Build**: Custom build script in `script/build.ts` using esbuild for server and Vite for client

### Database
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` with four tables:
  - `projects` — id, title, description, techStack (text array), imageUrl, demoUrl, repoUrl, featured, order
  - `experience` — id, company, role, location, startDate, endDate, description, achievements (text array), order
  - `skills` — id, category, name, proficiency (0-100), icon
  - `messages` — id, name, email, message, createdAt
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Config**: `drizzle.config.ts` points to `shared/schema.ts` and outputs to `./migrations`

### Shared Layer
- `shared/schema.ts` — Database table definitions and Zod insert schemas
- `shared/routes.ts` — API contract with paths, methods, input/output schemas (acts as a lightweight API spec)
- `shared/static-data.ts` — Hardcoded portfolio data used as fallback/default content

### Key Design Decisions
1. **Static data fallback**: The frontend hooks currently use imported static data rather than API calls, making the site work without a database. To switch to live data, update `use-portfolio.ts` to fetch from the API endpoints.
2. **Shared contract pattern**: API routes are defined once in `shared/routes.ts` and referenced by both server and client, reducing drift.
3. **Single-page portfolio**: All sections (Hero, About, Experience, Skills, Projects, Contact) render on the home page with smooth scroll navigation.
4. **Dark-only theme**: No light mode toggle — the entire design system is built around a dark cyberpunk aesthetic.

## External Dependencies

- **PostgreSQL**: Required. Must be provisioned and `DATABASE_URL` environment variable must be set. Used for storing projects, experience, skills, and contact messages.
- **Google Fonts**: Loaded via CDN for Inter, JetBrains Mono, DM Sans, Geist Mono, Fira Code, and Architects Daughter fonts.
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — used in development only.
- **No external auth**: No authentication system is implemented.
- **No external email service**: Contact form currently stores messages in the database only (no email delivery configured). The frontend hook simulates submission with a timeout.