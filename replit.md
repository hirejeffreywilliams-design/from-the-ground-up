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

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/         # Express API server
│   └── from-the-ground-up/ # React + Vite nonprofit website
├── lib/
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
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

## API Endpoints

- `GET /api/healthz` — Health check
- `GET /api/programs` — List all programs
- `GET /api/programs/:id` — Get program detail
- `POST /api/contact` — Submit contact/enrollment form
- `GET /api/testimonials` — List testimonials

## Website Pages

- **Home** (`/`) — Hero with ombre gradient, impact stats, vision statement, featured programs, testimonials, newsletter signup, CTA
- **Programs** (`/programs`) — All 6 trade programs with AI advantage section, detailed cards with outcomes
- **About Us** (`/about`) — Founder story, mission & vision statements, logo meaning, board preview
- **Contact** (`/contact`) — Contact form with enrollment/volunteer/donate options, contact info
- **Donate** (`/donate`) — Donation tiers, impact stats, transparency on fund allocation
- **Governance** (`/governance`) — Board of directors, core values, governance documents links
- **Bylaws** (`/bylaws`) — Full organizational bylaws with accordion sections (10 articles)
- **FAQ** (`/faq`) — 12 frequently asked questions organized by category
- **100-Year Roadmap** (`/roadmap`) — 5-phase century-long strategic roadmap (Foundation → Growth → National → Global → Legacy) with goals, milestones, metrics, and leadership structure for each phase
- **Foundation Strategy** (`/strategy`) — Comprehensive nonprofit-to-foundation transition plan with foundation type analysis, 4-phase transition playbook, financial roadmap, and key success factors
- **DC Startup Guide** (`/startup-guide`) — 13-step ordered checklist for forming a 501(c)(3) nonprofit in Washington DC, with timelines, costs, links, and pro tips
- **Formation Documents** (`/documents`) — 12 complete organizational documents: Articles of Incorporation, Conflict of Interest Policy, Whistleblower Policy, Document Retention Policy, Compensation Policy, Code of Ethics, Nondiscrimination Policy, Gift Acceptance Policy, Financial Policies, Meeting Minutes Template, IRS Form 1023 Narrative, and 3-Year Financial Projections
- **404** — Custom not found page

## Brand Identity

- **Name**: From The Ground Up
- **Logo**: Concrete "J" with a crayon-drawn rose growing from it
- **Colors**: Deep crimson/rose primary, sage green secondary, golden amber accent, concrete charcoal dark sections
- **Design**: Premium ombre gradient (rose tones at top → concrete dark at bottom), bold typography, architectural feel
- **Fonts**: DM Sans (body), Fraunces (display headings)
- **Theme**: Building, uplifting, growth, community, legacy
- **Gender-neutral** and inclusive

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/from-the-ground-up` (`@workspace/from-the-ground-up`)

React + Vite nonprofit website with 8 pages. Uses wouter for routing, TanStack React Query for data fetching, Framer Motion for animations, and react-hook-form for forms.

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server with routes for programs, contacts, and testimonials.

### `lib/db` (`@workspace/db`)

Database layer with Drizzle ORM schemas for programs, contacts, and testimonials tables.

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI 3.1 spec and Orval codegen config.

### `scripts` (`@workspace/scripts`)

Utility scripts including `seed` to populate initial program and testimonial data.

- `pnpm --filter @workspace/scripts run seed` — seeds the database with programs and testimonials

Production migrations are handled by Replit when publishing. In development, use `pnpm --filter @workspace/db run push`.
