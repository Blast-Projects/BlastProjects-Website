# BlastProjects - Professional Portfolio Website

## Overview
A professional portfolio website for BlastProjects, an app development agency with a consultation-based business model. Built with a sleek, dark theme inspired by Linear and Raycast design aesthetics. All pricing is quoted after consultation - no public pricing displayed.

## Project Structure
```
client/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx    # Fixed navigation header with theme toggle & BlastProjects logo
│   │   ├── Hero.tsx      # Hero section with stats and consultation CTA
│   │   ├── Projects.tsx  # Project showcase cards (SnapTapSync, Roxy's, Vibez)
│   │   ├── Services.tsx  # 5 service categories without pricing
│   │   ├── HowItWorks.tsx # 4-step consultation-based process
│   │   ├── Training.tsx  # Brief 1:1 training mention
│   │   ├── Contact.tsx   # Contact form with consultation focus
│   │   ├── Footer.tsx    # Site footer with BlastProjects branding
│   │   ├── ThemeProvider.tsx  # Dark/light theme context
│   │   └── ThemeToggle.tsx    # Theme toggle button
│   ├── pages/
│   │   ├── Home.tsx      # Main landing page
│   │   └── ProjectDetail.tsx  # Individual project detail pages
│   └── index.css         # Global styles with theme variables
server/
├── routes.ts             # API routes (contact form)
└── storage.ts            # In-memory storage for contact submissions
shared/
└── schema.ts             # TypeScript types and Zod schemas
```

## Business Model
- **Consultation-based pricing**: No public pricing displayed
- **All CTAs push toward**: "Book a Free Consultation"
- **Project quotes**: Given after scope is defined in consultation
- **Email**: hello@blastprojects.com

## Key Features
- **Projects Section**: Showcases SnapTapSync, Roxy's Beauty Lab, and Vibez with ROI results
- **Services**: 5 categories - MVP/Prototype, Full Apps, Websites/Booking, Payments/Auth/APIs, Deployment/Hosting
- **How It Works**: 4-step process (Consult → Scope → Quote → Build)
- **Training**: Brief mention of 1:1 AI-assisted building sessions
- **Contact Form**: Functional form with validation and API integration
- **Dark/Light Theme**: Toggle between themes with BlastProjects logo swapping

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
- BlastProjects logo (dark text for dark mode, purple text for light mode)

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
