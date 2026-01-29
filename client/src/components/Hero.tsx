import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-8">
      {/* Raycast-style diagonal gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        
        {/* Option 2: Subtle gradient from top corners */}
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-purple-900/20 blur-[100px]" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-900/15 blur-[80px]" />
        
        {/* Option 3: Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-purple-400/30"
              style={{
                left: `${10 + (i * 4.5)}%`,
                top: `${5 + (i * 3.2) % 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        {/* Animated diagonal stripes - positioned lower and more subtle */}
        <div className="absolute inset-0 opacity-60">
          <motion.div 
            className="absolute left-[10%] top-[30%] h-[120%] w-48 rotate-[25deg] bg-gradient-to-r from-transparent via-purple-500/25 to-transparent blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute left-[25%] top-[20%] h-[120%] w-64 rotate-[25deg] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent blur-3xl"
            animate={{ 
              x: [0, 40, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute left-[40%] top-[25%] h-[120%] w-56 rotate-[25deg] bg-gradient-to-r from-transparent via-fuchsia-500/15 to-transparent blur-3xl"
            animate={{ 
              x: [0, 35, 0],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{ 
              duration: 9, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Ambient glow orbs - subtle and centered */}
        <motion.div 
          className="absolute left-1/4 top-1/2 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/8 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Grid overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-12 text-center md:py-14 lg:py-16">
        <motion.div 
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="badge-hero"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-muted-foreground">Powered by vibe-coding</span>
        </motion.div>

        <motion.h1 
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="text-hero-title"
        >
          Build. Launch. Scale.
          <br />
          <span className="text-muted-foreground">Your ideas deserve to be real.</span>
        </motion.h1>

        <motion.p 
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="text-hero-description"
        >
          Not a traditional developer - just someone who learned to build real apps 
          using AI tools like Replit. Now offering development services and training 
          to help you do the same. Your ideas deserve to exist.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            onClick={() => scrollToSection("#services")}
            className="gap-2 bg-accent border-accent-border"
            data-testid="button-view-services"
          >
            View Services
            <ArrowRight size={16} />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("#projects")}
            className="backdrop-blur-sm"
            data-testid="button-see-work"
          >
            See Our Work
          </Button>
        </motion.div>

        <motion.div 
          className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-8 border-t border-border/50 pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center" data-testid="stat-apps-launched">
            <motion.div 
              className="text-3xl font-bold md:text-4xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            >
              15+
            </motion.div>
            <div className="mt-1 text-sm text-muted-foreground">Apps Launched</div>
          </div>
          <div className="text-center" data-testid="stat-students-trained">
            <motion.div 
              className="text-3xl font-bold md:text-4xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
            >
              50+
            </motion.div>
            <div className="mt-1 text-sm text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center" data-testid="stat-satisfaction">
            <motion.div 
              className="text-3xl font-bold md:text-4xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            >
              100%
            </motion.div>
            <div className="mt-1 text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
