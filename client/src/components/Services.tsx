import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Globe, CreditCard, Server, Layers, Workflow } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Rocket,
    title: "MVP & Prototype Development",
    description: "Validate your idea quickly with a working product. Get to market fast.",
  },
  {
    icon: Layers,
    title: "Full Web & Mobile App Builds",
    description: "Complete applications, dashboards, and SaaS platforms from design to deployment.",
  },
  {
    icon: Globe,
    title: "Website & Booking Systems",
    description: "Professional websites with integrated scheduling and appointment booking.",
  },
  {
    icon: CreditCard,
    title: "Payments, Auth & Integrations",
    description: "Stripe, authentication, APIs, and workflow automations.",
  },
  {
    icon: Server,
    title: "Deployment, Domains & Hosting",
    description: "Custom domains, SSL certificates, and reliable hosting setup.",
  },
  {
    icon: Workflow,
    title: "Automations & Internal Tools",
    description: "Custom workflows, admin dashboards, and internal tools that streamline operations.",
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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-services">Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-services-title">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-services-description">
            We handle everything from design to deployment. You focus on your business, 
            we build the tech that powers it.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card/50"
              data-testid={`card-service-${index}`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-6 text-muted-foreground italic" data-testid="text-services-note">
            Every project is scoped individually and quoted after a short consultation.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-accent border-accent-border"
            data-testid="button-services-cta"
          >
            Book a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
