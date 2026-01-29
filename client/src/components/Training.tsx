import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock,
  CheckCircle2,
  ArrowRight,
  Play
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TrainingModule } from "@shared/schema";

const modules: TrainingModule[] = [
  {
    id: "1",
    title: "Foundation: Building Your First App",
    description: "Learn the basics of modern web development and build your first working application from scratch.",
    duration: "Week 1-2",
    topics: [
      "Understanding the modern tech stack",
      "Setting up your development environment",
      "Building responsive user interfaces",
      "Basic backend concepts",
      "Deploying your first app",
    ],
  },
  {
    id: "2",
    title: "Integrations: Connecting the Dots",
    description: "Master the art of connecting APIs, payment systems, and third-party services to your app.",
    duration: "Week 3-4",
    topics: [
      "API fundamentals and REST",
      "Authentication (Google, OAuth, etc.)",
      "Payment integration (Stripe)",
      "Email and notification systems",
      "Database connections",
    ],
  },
  {
    id: "3",
    title: "Launch: Going Live Like a Pro",
    description: "Learn everything about domains, hosting, SSL, and making your app production-ready.",
    duration: "Week 5-6",
    topics: [
      "Domain registration and DNS",
      "SSL certificates and security",
      "Hosting and deployment strategies",
      "Performance optimization",
      "Monitoring and analytics",
    ],
  },
  {
    id: "4",
    title: "Scale: Growing Your Application",
    description: "Advanced techniques for scaling, debugging, and maintaining production applications.",
    duration: "Week 7-8",
    topics: [
      "Debugging in production",
      "Performance at scale",
      "User feedback integration",
      "Continuous deployment",
      "Building for growth",
    ],
  },
];

const highlights = [
  {
    icon: Users,
    title: "Small Cohorts",
    description: "Maximum 10 students per cohort for personalized attention",
  },
  {
    icon: BookOpen,
    title: "Hands-On Projects",
    description: "Build real apps, not just tutorials. You'll have a portfolio by the end.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Evening and weekend sessions. Learn while keeping your day job.",
  },
  {
    icon: GraduationCap,
    title: "Certificate",
    description: "Earn a certificate to showcase your new skills to employers.",
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
            <GraduationCap size={14} className="mr-1" />
            Training Program
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-training-title">
            Learn to build & launch apps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-training-description">
            Stop watching tutorials that never teach you the full picture. 
            Our bootcamp covers everything: from code to live deployment, 
            integrations to debugging. Go from zero to one.
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
                  The Complete App Builder Bootcamp
                </h3>
                <p className="mt-4 text-muted-foreground" data-testid="text-bootcamp-description">
                  An intensive, hands-on program designed for beginners who want to 
                  learn the FULL process of building and launching real applications. 
                  No more tutorial hell. Just practical skills that get you results.
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
                <h4 className="font-medium text-muted-foreground">What you'll master:</h4>
                <ul className="space-y-2">
                  {[
                    "Build full-stack web applications",
                    "Connect APIs and third-party services",
                    "Set up authentication and payments",
                    "Deploy to custom domains with SSL",
                    "Debug and troubleshoot like a pro",
                    "Scale and maintain production apps",
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
          <h3 className="mb-8 text-center text-xl font-semibold" data-testid="text-curriculum-title">Curriculum Overview</h3>
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
