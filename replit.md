# Dev Studio - Professional Portfolio Website

## Overview
A professional portfolio website for showcasing app development services and training programs. Built with a sleek, dark theme inspired by Linear and Raycast design aesthetics.

## Project Structure
```
client/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx    # Fixed navigation header with theme toggle
│   │   ├── Hero.tsx      # Hero section with stats
│   │   ├── Projects.tsx  # Project showcase cards
│   │   ├── Services.tsx  # Service offerings with process steps
│   │   ├── Training.tsx  # Training program details
│   │   ├── Pricing.tsx   # Pricing tiers
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Footer.tsx    # Site footer
│   │   ├── ThemeProvider.tsx  # Dark/light theme context
│   │   └── ThemeToggle.tsx    # Theme toggle button
│   ├── pages/
│   │   └── Home.tsx      # Main landing page
│   └── index.css         # Global styles with theme variables
server/
├── routes.ts             # API routes (contact form)
└── storage.ts            # In-memory storage for contact submissions
shared/
└── schema.ts             # TypeScript types and Zod schemas
```

## Key Features
- **Projects Section**: Showcases SnapTapSync, Roxy's Beauty Lab, and Vibez
- **Services**: MVP Development, Full App Build, Enterprise Solutions
- **Training Program**: 8-week bootcamp covering app building from scratch
- **Pricing**: Transparent pricing tiers (Starter, Professional, Business)
- **Contact Form**: Functional form with validation and API integration
- **Dark/Light Theme**: Toggle between themes with persistence

## Tech Stack
- React with TypeScript
- Vite for bundling
- Tailwind CSS for styling
- Shadcn/ui for components
- React Query for data fetching
- Express.js backend
- In-memory storage

## Design
- Dark theme by default (Linear/Raycast inspired)
- Purple accent color (#8B5CF6)
- Inter font family
- Smooth scroll navigation
- Responsive design for all screen sizes

### Animation System (Framer Motion)
- Hero: Raycast-style animated diagonal gradient stripes with pulsing glow orbs
- Scroll reveals: All sections animate in on scroll using `useInView`
- Staggered cards: Project/service cards animate in with stagger timing
- Interactive elements: Cards have hover lift effects, buttons have built-in elevations
- Ambient backgrounds: Blurred gradient orbs throughout for depth

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

## Running the App
The app runs on port 5000 with `npm run dev`
