import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import type { Project } from "@shared/schema";

import snapTagSyncLogoDark from "@assets/SnapTagSync-Logo-WhiteSNAP-TransparentBackground_1769723696024.png";
import snapTagSyncLogoLight from "@assets/SnapTagSync-Logo-BlackSNAP-TransparentBackground.png_1769729379764.png";
import roxysBeautyLabLogo from "@assets/57FB4895-AA27-4B1B-8DD6-1F40EC2F6D3F_1769723626732.PNG";
import vibezLogo from "@assets/6797076_Main_Logo_1769723619802.png";

interface ProjectWithLogo extends Project {
  logoDark: string;
  logoLight: string;
  logoSize: string;
  slug: string;
}

const projects: ProjectWithLogo[] = [
  {
    id: "1",
    slug: "snaptagsync",
    title: "SnapTagSync",
    description: "A powerful synchronization app that seamlessly connects your photos across all devices. Real-time backup, smart organization, and instant sharing capabilities.",
    tags: ["Mobile App", "Cloud Sync", "Photo Management"],
    gradient: "from-cyan-500/30 via-blue-500/20 to-blue-600/30",
    logoDark: snapTagSyncLogoDark,
    logoLight: snapTagSyncLogoLight,
    logoSize: "h-10",
  },
  {
    id: "2",
    slug: "roxys-beauty-lab",
    title: "Roxy's Beauty Lab",
    description: "Complete salon management system with online booking, client management, inventory tracking, and integrated payment processing for beauty professionals.",
    tags: ["E-Commerce", "Booking System", "Payments"],
    gradient: "from-amber-500/30 via-yellow-400/20 to-orange-400/30",
    logoDark: roxysBeautyLabLogo,
    logoLight: roxysBeautyLabLogo,
    logoSize: "h-28",
  },
  {
    id: "3",
    slug: "vibez",
    title: "Vibez",
    description: "Social entertainment platform connecting people through shared music experiences. Playlist sharing, live listening sessions, and event coordination.",
    tags: ["Social App", "Music Streaming", "Real-time"],
    gradient: "from-orange-500/30 via-orange-400/20 to-yellow-500/30",
    logoDark: vibezLogo,
    logoLight: vibezLogo,
    logoSize: "h-14",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { resolvedTheme } = useTheme();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-portfolio">Portfolio</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-projects-title">
            Projects we've brought to life
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" data-testid="text-projects-description">
            Real applications built from the ground up, deployed live, and running with 
            full integrations. Here's what we've created for our clients.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`}>
                <div 
                  className="group relative h-full cursor-pointer"
                  data-testid={`card-project-${project.id}`}
                >
                  {/* Subtle glowing background effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`} />
                  
                  {/* Glass card */}
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                    
                    {/* Logo container with floating effect */}
                    <div className="mb-8 flex h-24 items-center justify-center">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {/* Logo glow effect */}
                        <div className="absolute inset-0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30">
                          <img 
                            src={resolvedTheme === "dark" ? project.logoDark : project.logoLight} 
                            alt=""
                            className={`${project.logoSize} w-auto object-contain`}
                            aria-hidden="true"
                          />
                        </div>
                        <img 
                          src={resolvedTheme === "dark" ? project.logoDark : project.logoLight} 
                          alt={`${project.title} logo`}
                          className={`relative ${project.logoSize} w-auto object-contain drop-shadow-lg`}
                          data-testid={`img-project-logo-${project.id}`}
                        />
                      </motion.div>
                    </div>

                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>{project.title}</h3>
                      <motion.div 
                        className="rounded-full border border-white/10 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-accent/50"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowRight size={14} className="text-accent" />
                      </motion.div>
                    </div>
                    
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="border-white/10 bg-white/5 text-xs backdrop-blur-sm"
                          data-testid={`badge-tag-${project.id}-${tag.toLowerCase().replace(/\s/g, "-")}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
