import { useParams, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Code2, Calendar, ExternalLink, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "@/components/ThemeProvider";

import snapTagSyncLogoDark from "@assets/SnapTagSync-Logo-WhiteSNAP-TransparentBackground_1769723696024.png";
import snapTagSyncLogoLight from "@assets/SnapTagSync-Logo-BlackSNAP-TransparentBackground.png_1769729379764.png";
import roxysBeautyLabLogo from "@assets/57FB4895-AA27-4B1B-8DD6-1F40EC2F6D3F_1769723626732.PNG";
import vibezLogo from "@assets/6797076_Main_Logo_1769723619802.png";

interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  status: "Live" | "Coming Soon" | "In Development";
  url?: string;
  overview: string;
  problem: string;
  solution: string;
  results?: string[];
  features: string[];
  techStack: string[];
  timeline: string;
  logoDark: string;
  logoLight: string;
  logoSize: string;
  gradient: string;
}

const projectsData: ProjectDetail[] = [
  {
    id: "1",
    slug: "snaptagsync",
    title: "SnapTagSync",
    status: "Live",
    url: "https://snaptagsync.com",
    overview: "SnapTagSync is a powerful photo synchronization and management app designed for photographers and everyday users who want their memories accessible everywhere. It seamlessly connects all your devices with real-time backup and intelligent organization.",
    problem: "Managing photos across multiple devices is a nightmare. People lose precious memories when phones break, storage fills up, or they can't find that one photo from years ago. Existing solutions are either too expensive, too complicated, or don't work reliably.",
    solution: "SnapTagSync provides effortless, real-time photo syncing across all devices with smart AI tagging that makes finding any photo instant. One tap backup, intelligent albums, and sharing that just works - without the monthly subscription trap.",
    results: [
      "Replaced iCloud and Google Photos subscriptions",
      "Saved users $120+/year on storage fees",
      "10,000+ photos synced in first month",
      "Zero photos lost during device transitions",
    ],
    features: [
      "Real-time sync across unlimited devices",
      "AI-powered photo tagging and search",
      "Smart album organization",
      "One-tap backup to cloud",
      "Instant sharing with anyone",
      "Offline access to favorites",
    ],
    techStack: ["React Native", "Node.js", "AWS S3", "TensorFlow", "PostgreSQL"],
    timeline: "Q1 2026 Launch",
    logoDark: snapTagSyncLogoDark,
    logoLight: snapTagSyncLogoLight,
    logoSize: "h-16",
    gradient: "from-cyan-500/20 via-blue-500/10 to-blue-600/20",
  },
  {
    id: "2",
    slug: "roxys-beauty-lab",
    title: "Roxy's Beauty Lab",
    status: "Live",
    url: "https://roxysbeautylab.com",
    overview: "Roxy's Beauty Lab is a complete salon management platform built specifically for beauty professionals. From online booking to payment processing, inventory management to client relationships - everything a modern salon needs in one beautiful interface.",
    problem: "Running a beauty business means juggling appointments, inventory, payments, and client relationships - usually with a mix of paper calendars, text messages, and separate payment apps. It's chaotic, unprofessional, and loses money.",
    solution: "A single platform that handles everything: clients book online 24/7, automatic reminders reduce no-shows, inventory tracks itself, payments process instantly, and beautiful analytics show what's working. Built by beauty pros, for beauty pros.",
    results: [
      "Eliminated Square subscription ($60/month saved)",
      "Eliminated Calendly subscription ($20/month saved)",
      "Reduced no-shows by 40% with auto-reminders",
      "One platform replaced 4 separate tools",
      "Saves 5+ hours/week on admin tasks",
    ],
    features: [
      "Online booking with automatic reminders",
      "Client management and history",
      "Inventory tracking and alerts",
      "Integrated payment processing",
      "Staff scheduling and payroll",
      "Analytics and business insights",
    ],
    techStack: ["Next.js", "Stripe", "Twilio", "PostgreSQL", "Vercel"],
    timeline: "Launched 2025",
    logoDark: roxysBeautyLabLogo,
    logoLight: roxysBeautyLabLogo,
    logoSize: "h-32",
    gradient: "from-amber-500/20 via-yellow-400/10 to-orange-400/20",
  },
  {
    id: "3",
    slug: "vibez",
    title: "Vibez",
    status: "Coming Soon",
    url: "https://vibez.app",
    overview: "Vibez is a social event discovery app that helps users find local happenings and coordinate attendance with friends. It combines event discovery with social coordination in a seamless mobile experience.",
    problem: "Finding out what's happening locally is fragmented across dozens of apps, social media, and word of mouth. Coordinating with friends about which events to attend involves endless group chats and confusion.",
    solution: "Vibez aggregates local events into one beautiful feed, lets you see which friends are interested or going, and provides simple coordination tools. No more 'are you going?' texts - just tap to show interest and see who else is in.",
    results: [
      "Replaces Eventbrite, Facebook Events, and group chats",
      "One app instead of checking 5+ platforms",
      "No more missed events from friends",
      "Simplified group coordination in one tap",
    ],
    features: [
      "Curated local event discovery",
      "Friend activity feed",
      "One-tap interest and RSVP",
      "Group coordination tools",
      "Event reminders and updates",
      "Venue ratings and reviews",
    ],
    techStack: ["React Native", "Firebase", "Node.js", "Google Maps API", "Push Notifications"],
    timeline: "Q3 2026 Beta",
    logoDark: vibezLogo,
    logoLight: vibezLogo,
    logoSize: "h-20",
    gradient: "from-orange-500/20 via-orange-400/10 to-yellow-500/20",
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const { resolvedTheme } = useTheme();
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-gradient-to-br ${project.gradient} blur-[120px] opacity-40`} />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
              <ArrowLeft size={16} />
              Back to Work
            </Button>
          </Link>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8" data-testid="card-project-main">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Products</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={resolvedTheme === "dark" ? project.logoDark : project.logoLight} 
                      alt={`${project.title} logo`}
                      className={`${project.logoSize} w-auto object-contain`}
                      data-testid="img-project-logo"
                    />
                  </div>
                  <h1 className="mt-4 text-3xl font-bold" data-testid="text-project-title">{project.title}</h1>
                </div>
                <Badge 
                  variant={project.status === "Live" ? "default" : "secondary"}
                  className={project.status === "Live" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                  data-testid="badge-project-status"
                >
                  <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${project.status === "Live" ? "bg-green-400" : "bg-blue-400"}`} />
                  {project.status}
                </Badge>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground" data-testid="text-overview-label">Overview</h2>
                <p className="text-foreground/90 leading-relaxed" data-testid="text-overview">{project.overview}</p>
              </div>

              {/* The Problem */}
              <div className="mb-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground" data-testid="text-problem-label">The Problem</h2>
                <p className="text-foreground/90 leading-relaxed" data-testid="text-problem">{project.problem}</p>
              </div>

              {/* The Solution */}
              <div className="mb-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground" data-testid="text-solution-label">The Solution</h2>
                <p className="text-foreground/90 leading-relaxed" data-testid="text-solution">{project.solution}</p>
              </div>

              {/* The Results */}
              {project.results && project.results.length > 0 && (
                <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="text-green-400" />
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-green-400" data-testid="text-results-label">The Results</h2>
                  </div>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2" data-testid={`text-result-${index}`}>
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-400" />
                        <span className="text-foreground/90">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6" data-testid="card-features">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-accent" />
                  <h3 className="font-semibold uppercase tracking-wider text-sm">Key Features</h3>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
                      <CheckCircle2 size={14} className="mt-1 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6" data-testid="card-tech-stack">
                <div className="mb-4 flex items-center gap-2">
                  <Code2 size={18} className="text-accent" />
                  <h3 className="font-semibold uppercase tracking-wider text-sm">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="border-white/10 bg-white/5"
                      data-testid={`badge-tech-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Website URL */}
            {project.url && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6" data-testid="card-url">
                  <div className="mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-accent" />
                    <h3 className="font-semibold uppercase tracking-wider text-sm">Website</h3>
                  </div>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:underline"
                    data-testid="link-project-url"
                  >
                    {project.url.replace('https://', '')}
                    <ExternalLink size={14} />
                  </a>
                </Card>
              </motion.div>
            )}

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6" data-testid="card-timeline">
                <div className="mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <h3 className="font-semibold uppercase tracking-wider text-sm">Timeline</h3>
                </div>
                <p className="text-muted-foreground" data-testid="text-timeline">{project.timeline}</p>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm p-6 text-center" data-testid="card-cta">
                <p className="mb-4 text-sm text-muted-foreground">Want to build something like this?</p>
                <Button 
                  className="w-full bg-accent border-accent-border"
                  onClick={scrollToContact}
                  data-testid="button-start-conversation"
                >
                  Start a Conversation
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
