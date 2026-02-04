import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Book a free consultation",
    description: "Schedule a quick 15-minute call to discuss your project idea and goals.",
  },
  {
    number: "02",
    title: "We define scope and goals together",
    description: "We'll map out exactly what you need, the features, timeline, and deliverables.",
  },
  {
    number: "03",
    title: "You receive a fixed project quote",
    description: "No surprises. You'll know exactly what you're paying before we start.",
  },
  {
    number: "04",
    title: "We build, deploy, and support your app",
    description: "We handle everything from development to launch, plus ongoing support.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/3 to-background" />
      <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/5" data-testid="badge-how-it-works">
            Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-how-it-works-description">
            A simple, transparent process from first call to launched product.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative"
              data-testid={`card-step-${index}`}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                {/* Top accent line */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-accent/60 via-purple-500/40 to-transparent" />
                
                {/* Step number */}
                <span className="mb-3 block text-3xl font-bold bg-gradient-to-br from-accent to-purple-400 bg-clip-text text-transparent">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="mb-2 text-base font-semibold leading-snug">{step.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="gap-2 bg-accent border-accent-border"
            data-testid="button-how-it-works-cta"
          >
            Start with a Free Consultation
            <ArrowRight size={16} />
          </Button>
          <p className="mt-3 text-sm text-muted-foreground" data-testid="text-how-it-works-confidential">
            All consultations are confidential. NDA available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
