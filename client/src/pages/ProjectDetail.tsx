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
  status: "Live" | "Coming Soon" | "In Development" | "Waitlist Open";
  url?: string;
  overview: string;
  problem: string;
  solution: string;
  results?: string[];
  resultsLabel?: string;
  vision?: string[];
  features: string[];
  techStack: string[];
  timeline: string;
  ctaText?: string;
  ctaSubtext?: string;
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
    status: "Waitlist Open",
    url: "https://snaptagsync.com",
    overview: "SnapTagSync is a next-generation photo capture, organization, and synchronization platform designed for teams and individuals who need structured, reliable photo workflows across devices. Built for real-world operations, from industrial teams to growing organizations, SnapTagSync focuses on making photo capture smarter, searchable, and securely organized from the moment a photo is taken. Currently in private development with early access available via waitlist.",
    problem: "Photos are everywhere: phones, tablets, shared drives, cloud folders. But managing them across teams and devices quickly becomes chaotic. Files get duplicated, lost, mislabeled, or buried in personal photo libraries. Critical images lack context, metadata, or structure, making them difficult to find when they matter most. Existing solutions are either consumer-focused, expensive, or not designed for structured, team-based workflows.",
    solution: "SnapTagSync is being built to solve this by providing a structured, metadata-driven photo workflow. The platform enables users to capture photos with purpose, automatically attaching tags, context, and organization at the source, while syncing securely across devices and cloud storage. The goal is simple: Make every photo easy to capture, easy to find, and easy to trust.",
    vision: [
      "A reliable alternative to fragmented photo storage",
      "Structured photo workflows for real-world teams",
      "Reduced photo loss during device transitions",
      "Faster photo retrieval through tagging and search",
      "A platform that scales from individuals to organizations",
    ],
    features: [
      "Real-time photo sync across devices (in development)",
      "AI-assisted tagging and smart search (early access)",
      "Structured albums based on tags, projects, or workflows",
      "One-tap secure cloud backup",
      "Controlled sharing for teams and collaborators",
      "Offline capture with automatic sync when reconnected",
    ],
    techStack: ["React Native", "Node.js", "AWS S3", "TensorFlow", "PostgreSQL"],
    timeline: "Private Development: In Progress · Early Access: Open · Public Launch: 2026",
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
    overview: "Roxy's Beauty Lab is a professional beauty studio offering high-quality, personalized services in a modern and welcoming environment. Focused on precision, care, and client experience, Roxy's Beauty Lab combines expert technique with a seamless booking experience, so clients can focus on feeling confident and taken care of.",
    problem: "Booking beauty services is often inconvenient: unclear availability, slow responses, and outdated booking processes. Clients want quality service without friction, uncertainty, or wasted time.",
    solution: "Roxy's Beauty Lab delivers a smooth, professional experience from booking to service. Clients can easily view availability, book appointments online, and receive clear communication, all while receiving expert care in a clean, modern setting.",
    results: [
      "Trusted by a growing local client base",
      "Consistent, high-quality results",
      "Easy online booking experience",
      "Reliable communication and follow-ups",
      "Designed around client comfort and confidence",
    ],
    resultsLabel: "Why Clients Love Roxy's Beauty Lab",
    features: [
      "Online booking and scheduling",
      "Professional, personalized services",
      "Clear availability and pricing",
      "Reliable appointment reminders",
      "Client-focused experience",
      "Trusted local beauty services",
    ],
    techStack: ["Modern Booking Platform", "Secure Payments", "Mobile-Friendly"],
    timeline: "Now Booking",
    ctaText: "Book an Appointment",
    ctaSubtext: "Appointments available — secure your spot today.",
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
    url: "https://joinvibez.com",
    overview: "Vibez is a social discovery app designed to help people find local events, connect through shared interests, and coordinate plans with friends, all in one place. Instead of juggling group chats, social feeds, and multiple event platforms, Vibez brings everything together into a simple, social-first experience built around real-life moments. Currently in development, with early access planned through a limited beta.",
    problem: "Discovering what's happening locally is scattered across countless apps, social posts, and group chats. Even when you find an event, coordinating with friends often turns into long message threads, missed updates, and last-minute confusion. There's no single place that combines event discovery with social coordination.",
    solution: "Vibez is being built to centralize local events into one curated feed while adding lightweight social tools that make planning effortless. Users can see what events are happening, who's interested, and coordinate plans with a single tap, without endless texting or switching apps. The focus is on simplicity, connection, and real-world experiences.",
    vision: [
      "Reduce friction in finding local events",
      "Make social planning effortless",
      "Bring friends onto the same page faster",
      "Replace scattered coordination with one shared experience",
    ],
    features: [
      "Curated local event discovery",
      "Friend activity and interest signals",
      "One-tap interest and RSVP",
      "Lightweight group coordination tools",
      "Event reminders and updates",
      "Venue insights and community feedback",
    ],
    techStack: ["React Native", "Firebase", "Node.js", "Google Maps API", "Push Notifications"],
    timeline: "Development: In Progress · Private Beta: Planned · Public Release: 2026",
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
                  variant="default"
                  className={
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400 border-green-500/30" 
                      : project.status === "Waitlist Open"
                      ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                      : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                  }
                  data-testid="badge-project-status"
                >
                  <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                    project.status === "Live" 
                      ? "bg-green-400" 
                      : project.status === "Waitlist Open"
                      ? "bg-purple-400"
                      : "bg-blue-400"
                  }`} />
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
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-green-400" data-testid="text-results-label">
                      {project.resultsLabel || "The Results"}
                    </h2>
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

              {/* What We're Building Toward (for pre-launch projects) */}
              {project.vision && project.vision.length > 0 && (
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="text-accent" />
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-accent" data-testid="text-vision-label">What We're Building Toward</h2>
                  </div>
                  <ul className="space-y-2">
                    {project.vision.map((item, index) => (
                      <li key={index} className="flex items-start gap-2" data-testid={`text-vision-${index}`}>
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span className="text-foreground/90">{item}</span>
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
                  {project.vision && (
                    <p className="mt-2 text-xs text-muted-foreground">Join the waitlist for early access</p>
                  )}
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
                {project.ctaText ? (
                  <>
                    <p className="mb-4 text-sm text-muted-foreground">{project.ctaSubtext}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className="w-full bg-accent border-accent-border"
                        data-testid="button-custom-cta"
                      >
                        {project.ctaText}
                      </Button>
                    </a>
                  </>
                ) : project.vision ? (
                  <>
                    <p className="mb-4 text-sm text-muted-foreground">Join the waitlist and help shape the future of {project.title}.</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className="w-full bg-accent border-accent-border"
                        data-testid="button-join-waitlist"
                      >
                        Get Early Access
                      </Button>
                    </a>
                  </>
                ) : (
                  <>
                    <p className="mb-4 text-sm text-muted-foreground">Want to build something like this?</p>
                    <Button 
                      className="w-full bg-accent border-accent-border"
                      onClick={scrollToContact}
                      data-testid="button-start-conversation"
                    >
                      Start a Conversation
                    </Button>
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
