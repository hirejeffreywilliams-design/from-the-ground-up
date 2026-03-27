# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Project: From The Ground Up

A nonprofit website for "From The Ground Up" — a trade skills training nonprofit founded by Jeffrey Williams in honor of his father Jeffrey Williams Sr. The nonprofit teaches construction, electrical, plumbing, carpentry, HVAC, and AI-in-trades skills to people of all ages.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + wouter (routing) + TanStack React Query
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **UI Components**: shadcn/ui, Lucide icons, Framer Motion animations
- **Fonts**: DM Sans (body), Fraunces (display/headings)
- **Auth**: Replit OIDC (OpenID Connect with PKCE), openid-client v6

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/         # Express API server (auth + admin + public routes)
│   └── from-the-ground-up/ # React + Vite nonprofit website + admin dashboard
├── lib/
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   ├── db/                 # Drizzle ORM schema + DB connection
│   └── replit-auth-web/    # Browser auth hook (useAuth)
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Database Tables

- **programs** — Trade training programs (construction, electrical, plumbing, carpentry, HVAC, AI in trades)
- **contacts** — Contact form submissions (enrollment, general inquiry, volunteer, donate)
- **testimonials** — Student testimonials
- **users** — Authenticated users (Replit OIDC)
- **sessions** — Auth sessions (server-side cookie sessions)
- **donors** — Donor profiles with tier, total donated, recurring status
- **donations** — Individual donation records linked to donors
- **volunteers** — Volunteer profiles with skills, availability, hours logged
- **financial_records** — Income/expense tracking by fiscal year and quarter
- **impact_metrics** — Student outcome tracking for Impact Cascade algorithm
- **activity_log** — Admin activity audit trail
- **grants** — Grant application tracking (name, funder, amount, status, deadlines)
- **compliance_tasks** — Regulatory filing deadlines and compliance tracking
- **board_meetings** — Board meeting scheduling, agendas, minutes, action items

## API Endpoints

### Public
- `GET /api/healthz` — Health check
- `GET /api/programs` — List all programs
- `GET /api/programs/:id` — Get program detail
- `POST /api/contact` — Submit contact/enrollment form
- `GET /api/testimonials` — List testimonials

### Auth (Replit OIDC)
- `GET /api/auth/user` — Get current authenticated user
- `GET /api/login` — Start browser OIDC login flow
- `GET /api/callback` — OIDC callback handler
- `GET /api/logout` — Clear session and OIDC logout

### Admin (requires authentication)
- `GET /api/admin/dashboard` — Dashboard stats and recent activity
- `GET/DELETE /api/admin/contacts` — Manage contact submissions
- `GET/POST/PUT/DELETE /api/admin/programs` — CRUD programs
- `GET/POST/DELETE /api/admin/testimonials` — Manage testimonials
- `GET/POST/PUT/DELETE /api/admin/donors` — Manage donors
- `GET/POST /api/admin/donations` — Record donations (auto-updates donor totals)
- `GET/POST/PUT/DELETE /api/admin/volunteers` — Manage volunteers
- `GET/POST /api/admin/financials` — Financial records
- `GET /api/admin/financials/summary` — Fiscal year summary
- `GET/POST/PUT /api/admin/impact` — Track student impact metrics
- `GET /api/admin/impact/cascade` — Impact Cascade Algorithm (novel)
- `GET /api/admin/skills-gap` — Skills Gap Analyzer (novel)
- `GET/POST/PUT/DELETE /api/admin/grants` — Grant application tracking
- `GET/POST/PUT/DELETE /api/admin/compliance` — Compliance task management
- `GET /api/admin/compliance/defaults` — Pre-built DC nonprofit compliance tasks
- `GET/POST/PUT/DELETE /api/admin/board-meetings` — Board meeting management
- `GET /api/admin/activity` — Activity log

## Website Pages

### Public
- **Home** (`/`) — Hero with ombre gradient, impact stats, vision statement, featured programs, testimonials, newsletter signup, CTA
- **Programs** (`/programs`) — All 6 trade programs with AI advantage section, detailed cards with outcomes
- **About Us** (`/about`) — Founder story, mission & vision statements, logo meaning, board preview
- **Contact** (`/contact`) — Contact form with enrollment/volunteer/donate options, contact info
- **Donate** (`/donate`) — Donation tiers, impact stats, transparency on fund allocation
- **Governance** (`/governance`) — Board of directors, core values, governance documents links
- **Bylaws** (`/bylaws`) — Full organizational bylaws with accordion sections (10 articles)
- **FAQ** (`/faq`) — 12 frequently asked questions organized by category
- **100-Year Roadmap** (`/roadmap`) — 5-phase century-long strategic roadmap
- **Foundation Strategy** (`/strategy`) — Comprehensive nonprofit-to-foundation transition plan
- **DC Startup Guide** (`/startup-guide`) — 13-step checklist for forming a 501(c)(3) in DC
- **Formation Documents** (`/documents`) — 12 complete organizational documents
- **Career Pathways** (`/careers`) — Interactive career progression explorer for all 6 trades with salary ranges, certifications, timelines, DC job market data, and Commander Stadium opportunity
- **Skills Assessment** (`/assessment`) — 10-question interactive quiz that recommends the best trade program based on interests, goals, and aptitude
- **Resource Library** (`/resources`) — 60+ curated external resources across 8 categories (certifications, apprenticeships, licensing, unions, financial aid, tools, safety, business startup)
- **Student Earning Hub** (`/earn`) — 25+ side job/freelance opportunities by trade, 5 FTGU earning programs (Project Marketplace, Tool Library, Cert Fast-Track, Apprenticeship Pipeline, Business Launcher), DC Commanders Stadium job table
- **Fundraising Playbook** (`/fundraising`) — 12 funding sources with pre-written applications, 12-month fundraising calendar, 10-year revenue projections ($315K→$4.5M), $5M capital campaign strategy, social enterprise revenue streams
- **Grant Applications** (`/grant-applications`) — 4 complete pre-written grant applications: DOES Workforce Development ($250K), Foundation General Template, Corporate Partnership Proposal, Case for Support
- **25-Year Strategic Plan** (`/strategic-plan`) — 5-phase growth plan (Foundation→Growth→Leadership→Transformation→Legacy) with milestones, KPIs, revenue projections ($315K→$20M+), risk mitigation, "What to Watch Out For" compliance/legal/financial guide
- **Compliance Guide** (`/compliance-guide`) — Complete federal/DC/employment/safety compliance reference with 15+ filing requirements, step-by-step processes, deadlines, fees, consequences, insurance requirements table, annual compliance calendar
- **404** — Custom not found page

### Admin Dashboard (`/admin/*`)
- **Dashboard** (`/admin`) — Overview with 8 key metrics, recent contacts, donations, activity
- **Contacts** (`/admin/contacts`) — View/filter/delete contact submissions
- **Programs** (`/admin/programs`) — Full CRUD for programs
- **Testimonials** (`/admin/testimonials`) — Add/delete testimonials
- **Donors** (`/admin/donors`) — Donor management with tiers, record donations
- **Volunteers** (`/admin/volunteers`) — Volunteer tracking with hours logging
- **Financials** (`/admin/financials`) — Income/expense tracking, fiscal year summary
- **Impact Cascade** (`/admin/impact`) — Novel Impact Cascade Algorithm tracker
- **Skills Gap** (`/admin/skills-gap`) — Novel Community Skills Gap Analyzer
- **Grant Tracker** (`/admin/grants`) — Track grant applications, deadlines, amounts, status, funder contacts
- **Compliance Calendar** (`/admin/compliance`) — Annual filing deadlines, renewals, regulatory requirements with pre-built DC nonprofit defaults
- **Board Meetings** (`/admin/meetings`) — Schedule meetings, manage agendas, minutes, decisions, action items, attendees
- **Activity Log** (`/admin/activity`) — Admin action audit trail

## Novel Systems

### Impact Cascade Algorithm v1.0
Multi-order economic ripple effect analysis that traces how trade education creates cascading community value. Unlike simple output counting, it quantifies:
- 1st Order: Direct student earnings, project revenue, certification value
- 2nd Order: Jobs created by graduates, community projects, local economic multiplier
- 3rd Order: Generational skill transfer, tax revenue, long-term community infrastructure
Uses configurable economic multipliers (salary 1.8x, projects $15K, hires $45K, community $75K, etc.)

### Community Skills Gap Analyzer v1.0
Workforce demand-supply analysis for the DC metro area that calculates urgency scores based on gap percentage (30%), growth rate (30%), wage potential (20%), and projected openings (20%). Cross-references with program graduate outcomes to recommend capacity expansions and strategic priorities. Covers Construction, Electrical, Plumbing, Carpentry, HVAC, and AI in Trades.

## Brand Identity

- **Name**: From The Ground Up
- **Logo**: Concrete "J" with a crayon-drawn rose growing from it
- **Colors**: Deep crimson/rose primary, sage green secondary, golden amber accent, concrete charcoal dark sections
- **Design**: Premium ombre gradient (rose tones at top → concrete dark at bottom), bold typography, architectural feel
- **Fonts**: DM Sans (body), Fraunces (display headings)
- **Theme**: Building, uplifting, growth, community, legacy
- **Gender-neutral** and inclusive

## Mobile Responsive Patterns

All pages follow consistent responsive typography to prevent text overflow at 320px:
- **Headings**: `text-4xl sm:text-5xl md:text-7xl` (hero h1/h2)
- **Padding**: `p-6 sm:p-10 md:p-16` for large sections
- **Border radius**: `rounded-2xl sm:rounded-[3rem]` for rounded panels
- `overflow-x-hidden` applied globally to html/body in `index.css`

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/from-the-ground-up` (`@workspace/from-the-ground-up`)

React + Vite nonprofit website with 12 public pages and 10 admin dashboard pages. Uses wouter for routing, TanStack React Query for data fetching, Framer Motion for animations, and react-hook-form for forms. Auth via @workspace/replit-auth-web.

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server with auth (Replit OIDC), public routes (programs, contacts, testimonials), and admin routes (dashboard, CRUD for all entities, Impact Cascade algorithm, Skills Gap Analyzer).

### `lib/db` (`@workspace/db`)

Database layer with Drizzle ORM schemas for programs, contacts, testimonials, users, sessions, donors, donations, volunteers, financial_records, impact_metrics, and activity_log tables.

### `lib/replit-auth-web` (`@workspace/replit-auth-web`)

Browser auth package providing `useAuth()` hook for React components (login, logout, user state).

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI 3.1 spec and Orval codegen config. Includes auth endpoints.

### `scripts` (`@workspace/scripts`)

Utility scripts including `seed` to populate initial program and testimonial data.

- `pnpm --filter @workspace/scripts run seed` — seeds the database with programs and testimonials

Production migrations are handled by Replit when publishing. In development, use `pnpm --filter @workspace/db run push`.
