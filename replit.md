# Dev Studio

## Overview

Dev Studio is a professional services website for an app development agency. It's a full-stack web application featuring a marketing landing page with sections for projects, services, training programs, and pricing. The site includes a contact form that submits to a backend API with PostgreSQL storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming (dark/light mode support)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with HMR support

The frontend is a single-page application with smooth-scroll navigation between sections (Hero, Projects, Services, Training, Pricing, Contact). All UI components follow the shadcn/ui pattern with customizable variants.

### Backend Architecture
- **Framework**: Express.js 5 on Node.js
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints under `/api/*` prefix
- **Development**: Vite middleware integration for HMR during development
- **Production**: Static file serving from built assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Migrations**: Drizzle Kit with `db:push` command
- **Current Storage**: In-memory storage class (`MemStorage`) that implements `IStorage` interface - designed for easy swap to database storage

### Schema Design
- **users**: Basic user table with id, username, password
- **contactSubmissions**: Contact form entries with name, email, subject, message, createdAt

### Build System
- **Client Build**: Vite outputs to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Optimization**: Common dependencies are bundled to reduce cold start times

## External Dependencies

### UI Libraries
- Radix UI (comprehensive primitive components)
- Lucide React (icons)
- React Icons (additional icon sets)
- class-variance-authority (component variants)
- embla-carousel-react (carousels)
- cmdk (command palette)
- vaul (drawer component)
- react-day-picker (calendar)
- recharts (charts)

### Backend Dependencies
- express-session with connect-pg-simple (session management)
- drizzle-orm with drizzle-zod (database and validation)
- zod (schema validation)

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Drizzle Kit for migrations

### Development Tools
- Replit-specific Vite plugins (error overlay, cartographer, dev banner)
- tsx for TypeScript execution