import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Target, FileText, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book a free consultation",
    description: "Schedule a quick 15-minute call to discuss your project idea and goals.",
  },
  {
    number: "02",
    icon: Target,
    title: "We define scope and goals together",
    description: "We'll map out exactly what you need, the features, timeline, and deliverables.",
  },
  {
    number: "03",
    icon: FileText,
    title: "You receive a fixed project quote",
    description: "No surprises. You'll know exactly what you're paying before we start.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "We build, deploy, and support your app",
    description: "We handle everything from development to launch, plus ongoing support.",
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

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-how-it-works">Process</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-how-it-works-description">
            A simple, transparent process from first call to launched product.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative"
              data-testid={`card-step-${index}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-accent/50 to-transparent lg:block" />
              )}
              
              <div className="relative rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card/50">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl font-bold text-accent/30">{step.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <step.icon size={20} className="text-accent" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-accent border-accent-border"
            data-testid="button-how-it-works-cta"
          >
            Start with a Free Consultation
          </Button>
          <p className="mt-3 text-sm text-muted-foreground" data-testid="text-how-it-works-confidential">
            All consultations are confidential. NDA available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
