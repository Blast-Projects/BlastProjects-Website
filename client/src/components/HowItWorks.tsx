import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Target, FileText, Rocket, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book a free consultation",
    description: "Schedule a quick 15-minute call to discuss your project idea and goals.",
    color: "from-purple-500/20 to-violet-600/20",
    iconBg: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
  },
  {
    number: "02",
    icon: Target,
    title: "We define scope and goals together",
    description: "We'll map out exactly what you need, the features, timeline, and deliverables.",
    color: "from-violet-500/20 to-indigo-600/20",
    iconBg: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
  },
  {
    number: "03",
    icon: FileText,
    title: "You receive a fixed project quote",
    description: "No surprises. You'll know exactly what you're paying before we start.",
    color: "from-indigo-500/20 to-blue-600/20",
    iconBg: "bg-indigo-500/20",
    borderColor: "border-indigo-500/30",
    glowColor: "shadow-indigo-500/20",
  },
  {
    number: "04",
    icon: Rocket,
    title: "We build, deploy, and support your app",
    description: "We handle everything from development to launch, plus ongoing support.",
    color: "from-blue-500/20 to-cyan-600/20",
    iconBg: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
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
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/3 to-background" />
      <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/5 blur-[150px]" />
      <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div 
          className="mb-20 text-center"
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

        {/* Timeline connector for desktop */}
        <div className="relative hidden lg:block">
          <motion.div 
            className="absolute left-0 right-0 top-[88px] h-[2px] bg-gradient-to-r from-purple-500/40 via-violet-500/40 via-indigo-500/40 to-blue-500/40"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            style={{ originX: 0 }}
          />
          {/* Animated glow on the line */}
          <motion.div 
            className="absolute left-0 top-[86px] h-[6px] w-32 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent blur-sm"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "800%" } : { x: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
          />
        </div>

        <motion.div 
          ref={ref}
          className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
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
              {/* Card */}
              <div className={`relative h-full rounded-2xl border ${step.borderColor} bg-gradient-to-br ${step.color} p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${step.glowColor} hover:scale-[1.02] hover:border-accent/50`}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Step number and icon row */}
                <div className="relative mb-5 flex items-center gap-3">
                  <motion.span 
                    className="text-4xl font-bold bg-gradient-to-br from-accent via-purple-400 to-violet-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.number}
                  </motion.span>
                  <motion.div 
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.iconBg} border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    whileHover={{ rotate: 5 }}
                  >
                    <step.icon size={22} className="text-accent" />
                  </motion.div>
                  
                  {/* Connector dot for desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden h-3 w-3 -translate-y-1/2 lg:block">
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-accent"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      />
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="relative mb-3 text-lg font-semibold leading-tight">{step.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="mx-auto my-4 flex h-8 w-8 items-center justify-center md:hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <ArrowRight className="text-accent/50 rotate-90" size={20} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="group relative gap-2 overflow-hidden bg-accent border-accent-border px-8 py-6 text-base"
            data-testid="button-how-it-works-cta"
          >
            <span className="relative z-10">Start with a Free Consultation</span>
            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 transition-opacity group-hover:opacity-100"
              initial={false}
            />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground" data-testid="text-how-it-works-confidential">
            All consultations are confidential. NDA available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
