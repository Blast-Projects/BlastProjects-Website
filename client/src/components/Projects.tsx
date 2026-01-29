import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { Project } from "@shared/schema";

const projects: Project[] = [
  {
    id: "1",
    title: "SnapTapSync",
    description: "A powerful synchronization app that seamlessly connects your photos across all devices. Real-time backup, smart organization, and instant sharing capabilities.",
    tags: ["Mobile App", "Cloud Sync", "Photo Management"],
    gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    id: "2",
    title: "Roxy's Beauty Lab",
    description: "Complete salon management system with online booking, client management, inventory tracking, and integrated payment processing for beauty professionals.",
    tags: ["E-Commerce", "Booking System", "Payments"],
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
  },
  {
    id: "3",
    title: "Vibez",
    description: "Social entertainment platform connecting people through shared music experiences. Playlist sharing, live listening sessions, and event coordination.",
    tags: ["Social App", "Music Streaming", "Real-time"],
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <Badge variant="outline" className="mb-4" data-testid="badge-portfolio">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-projects-title">
            Projects we've brought to life
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-testid="text-projects-description">
            Real applications built from the ground up, deployed live, and running with 
            full integrations. Here's what we've created for our clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group relative overflow-visible border-border/50 bg-card/50 backdrop-blur-sm hover-elevate"
              data-testid={`card-project-${project.id}`}
            >
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${project.gradient} opacity-50`} />
              
              <div className="relative p-6">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>{project.title}</h3>
                  <div className="rounded-full border border-border/50 p-2 opacity-0 transition-opacity group-hover:opacity-100" data-testid={`button-project-link-${project.id}`}>
                    <ExternalLink size={14} />
                  </div>
                </div>
                
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-background/50 text-xs"
                      data-testid={`badge-tag-${project.id}-${tag.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
