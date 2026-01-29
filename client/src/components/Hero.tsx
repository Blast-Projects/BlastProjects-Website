import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32 lg:py-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm" data-testid="badge-hero">
          <Sparkles size={14} className="text-accent" />
          <span className="text-muted-foreground">From concept to live app</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl" data-testid="text-hero-title">
          Build. Launch. Scale.
          <br />
          <span className="text-muted-foreground">Your ideas deserve to be real.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl" data-testid="text-hero-description">
          Professional app development services and hands-on training programs. 
          We turn your ideas into fully functional, live applications with real 
          integrations, domains, and everything you need to succeed.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("#services")}
            className="gap-2"
            data-testid="button-view-services"
          >
            View Services
            <ArrowRight size={16} />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("#projects")}
            data-testid="button-see-work"
          >
            See Our Work
          </Button>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8 border-t border-border/50 pt-10">
          <div className="text-center" data-testid="stat-apps-launched">
            <div className="text-3xl font-bold md:text-4xl">15+</div>
            <div className="mt-1 text-sm text-muted-foreground">Apps Launched</div>
          </div>
          <div className="text-center" data-testid="stat-students-trained">
            <div className="text-3xl font-bold md:text-4xl">50+</div>
            <div className="mt-1 text-sm text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center" data-testid="stat-satisfaction">
            <div className="text-3xl font-bold md:text-4xl">100%</div>
            <div className="mt-1 text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
