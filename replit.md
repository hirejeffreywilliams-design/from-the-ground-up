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

- **Home** — Hero section, mission statement, featured programs, testimonials, CTA
- **Programs** — Grid of all 6 trade programs with AI features, duration, skill levels
- **About Us** — Founder story (Jeffrey Williams honoring his father), mission & vision, logo meaning
- **Contact** — Contact form with enrollment/volunteer/donate options, contact info
- **404** — Custom not found page

## Brand Identity

- **Name**: From The Ground Up
- **Logo**: Concrete "J" with a crayon-drawn rose growing from it
- **Colors**: Warm earthy tones (terracotta, sage, warm whites)
- **Theme**: Building, uplifting, growth, community, legacy
- **Gender-neutral** and inclusive

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — only `.d.ts` files during typecheck; bundling by esbuild/vite

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/from-the-ground-up` (`@workspace/from-the-ground-up`)

React + Vite nonprofit website. Uses wouter for client-side routing, TanStack React Query for data fetching, Framer Motion for animations, and react-hook-form for the contact form.

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
