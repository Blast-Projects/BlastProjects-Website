import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  Clock,
  CheckCircle2,
  ArrowRight,
  Play,
  Wand2
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TrainingModule } from "@shared/schema";

const modules: TrainingModule[] = [
  {
    id: "1",
    title: "Getting Started with Vibe-Coding",
    description: "Learn how to use AI tools like Replit Agent to build your first working app - no coding background needed.",
    duration: "Week 1-2",
    topics: [
      "Introduction to AI-assisted development",
      "Setting up your Replit workspace",
      "Communicating with AI to build features",
      "Understanding what the AI creates",
      "Your first live deployment",
    ],
  },
  {
    id: "2",
    title: "Integrations: Making It Real",
    description: "Connect your app to real services - payments, logins, emails - all with AI assistance.",
    duration: "Week 3-4",
    topics: [
      "Adding user authentication",
      "Setting up Stripe payments",
      "Connecting email services",
      "Working with databases",
      "API integrations made simple",
    ],
  },
  {
    id: "3",
    title: "Going Live: Your App on the Internet",
    description: "Learn the full process of taking your app from development to a real website people can visit.",
    duration: "Week 5-6",
    topics: [
      "Getting your own domain name",
      "SSL and security basics",
      "Publishing your app",
      "Making it fast and reliable",
      "Basic analytics setup",
    ],
  },
  {
    id: "4",
    title: "Leveling Up: Maintaining & Growing",
    description: "Keep your app running smoothly and learn to add new features as your idea evolves.",
    duration: "Week 7-8",
    topics: [
      "Fixing issues when things break",
      "Adding new features with AI",
      "Understanding user feedback",
      "Iterating on your product",
      "Building your next app",
    ],
  },
];

const highlights = [
  {
    icon: Wand2,
    title: "No Coding Required",
    description: "Use AI to build - you guide the vision, AI handles the code.",
  },
  {
    icon: BookOpen,
    title: "Real Projects",
    description: "Build actual apps you can show off, not just follow-along exercises.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Max 10 students so you get personal attention when stuck.",
  },
  {
    icon: Clock,
    title: "Learn Your Way",
    description: "Evening sessions that fit around your life and job.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function Training() {
  const highlightsRef = useRef(null);
  const modulesRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, margin: "-50px" });
  const modulesInView = useInView(modulesRef, { once: true, margin: "-50px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="training" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-training">
            <Sparkles size={14} className="mr-1" />
            Vibe-Coding Bootcamp
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-training-title">
            Build apps with AI, not code
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-training-description">
            You don't need to be a developer. Learn to use AI tools like Replit to 
            turn your ideas into real, working applications. I did it, and so can you.
          </p>
        </motion.div>

        <motion.div 
          ref={highlightsRef}
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={highlightsInView ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center"
              data-testid={`card-highlight-${index}`}
            >
              <motion.div 
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon size={24} className="text-accent" />
              </motion.div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-16 overflow-hidden border-border/50 bg-gradient-to-br from-accent/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm" data-testid="card-bootcamp">
            <div className="grid gap-8 p-8 lg:grid-cols-2">
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground" data-testid="badge-bootcamp-duration">8-Week Program</Badge>
                <h3 className="text-2xl font-bold md:text-3xl" data-testid="text-bootcamp-title">
                  The Vibe-Coder Bootcamp
                </h3>
                <p className="mt-4 text-muted-foreground" data-testid="text-bootcamp-description">
                  I'm not a traditional developer - I learned to build real apps using AI tools 
                  like Replit Agent. It took time to figure out, but now I want to teach you 
                  everything I learned. Skip the struggle and learn the shortcuts.
                </p>
                
                <div className="mt-6 flex flex-wrap items-baseline gap-2">
                  <motion.span 
                    className="text-4xl font-bold" 
                    data-testid="text-bootcamp-price"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    $1,299
                  </motion.span>
                  <span className="text-lg text-muted-foreground line-through">$1,999</span>
                  <Badge variant="secondary" data-testid="badge-limited-time">Limited Time</Badge>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button 
                    size="lg" 
                    className="gap-2 bg-accent border-accent-border"
                    onClick={scrollToContact}
                    data-testid="button-enroll-now"
                  >
                    Enroll Now
                    <ArrowRight size={16} />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="gap-2"
                    data-testid="button-watch-intro"
                  >
                    <Play size={16} />
                    Watch Intro
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-muted-foreground">What you'll learn to do:</h4>
                <ul className="space-y-2">
                  {[
                    "Build real apps using AI assistance",
                    "Set up payments, logins, and databases",
                    "Deploy to your own custom domain",
                    "Fix issues when things go wrong",
                    "Iterate and improve your app over time",
                    "Launch products people actually use",
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-2" 
                      data-testid={`text-skill-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle2 size={16} className="shrink-0 text-accent" />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        <div>
          <h3 className="mb-8 text-center text-xl font-semibold" data-testid="text-curriculum-title">What We'll Cover</h3>
          <motion.div 
            ref={modulesRef}
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate={modulesInView ? "visible" : "hidden"}
          >
            {modules.map((module) => (
              <motion.div key={module.id} variants={itemVariants}>
                <Card 
                  className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                  data-testid={`card-module-${module.id}`}
                >
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <Badge variant="outline" className="text-xs" data-testid={`badge-module-duration-${module.id}`}>
                        {module.duration}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold" data-testid={`text-module-title-${module.id}`}>{module.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
                    
                    <ul className="mt-4 space-y-2">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm" data-testid={`text-topic-${module.id}-${index}`}>
                          <div className="h-1 w-1 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
