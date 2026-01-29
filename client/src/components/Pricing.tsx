import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
  features: PricingFeature[];
  cta: string;
  variant: "default" | "outline";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    price: "$1,499",
    period: "one-time",
    features: [
      { text: "Single page app or landing page", included: true },
      { text: "Basic contact form", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "1 week delivery", included: true },
      { text: "Custom integrations", included: false },
      { text: "Admin dashboard", included: false },
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Professional",
    description: "For growing businesses that need a full application",
    price: "$3,999",
    period: "one-time",
    popular: true,
    features: [
      { text: "Full web application", included: true },
      { text: "User authentication", included: true },
      { text: "Payment processing (Stripe)", included: true },
      { text: "Custom domain & SSL", included: true },
      { text: "Admin dashboard", included: true },
      { text: "60-day support", included: true },
    ],
    cta: "Get Started",
    variant: "default" as const,
  },
  {
    name: "Business",
    description: "For established businesses with complex needs",
    price: "$7,999",
    period: "one-time",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Advanced integrations", included: true, tooltip: "Google, Twilio, AWS, etc." },
      { text: "Analytics & reporting", included: true },
      { text: "Performance optimization", included: true },
      { text: "Priority support", included: true },
      { text: "Training session included", included: true },
    ],
    cta: "Contact Us",
    variant: "outline" as const,
  },
];

const addOns = [
  { name: "Extra pages", price: "+$299/page" },
  { name: "API integrations", price: "+$499/each" },
  { name: "Monthly maintenance", price: "$199/month" },
  { name: "Rush delivery (50% faster)", price: "+30%" },
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32">
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
          <Badge variant="outline" className="mb-4" data-testid="badge-pricing">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-pricing-title">
            Transparent, affordable pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-pricing-description">
            No hidden fees. No hourly billing. You know exactly what you're paying 
            for upfront. We keep it affordable because everyone deserves great tech.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className={`relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                  tier.popular 
                    ? "ring-2 ring-accent shadow-[0_0_50px_-10px] shadow-accent/40" 
                    : "hover:border-accent/30 hover:shadow-lg"
                }`}
                data-testid={`card-pricing-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-accent px-12 py-1 text-xs font-medium text-accent-foreground">
                    Best Value
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold" data-testid={`text-pricing-name-${tier.name.toLowerCase()}`}>{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
                  
                  <div className="mt-6">
                    <motion.span 
                      className="text-4xl font-bold" 
                      data-testid={`text-pricing-price-${tier.name.toLowerCase()}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tier.price}
                    </motion.span>
                    <span className="text-muted-foreground"> / {tier.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <Check 
                          size={16} 
                          className={`mt-0.5 shrink-0 ${
                            feature.included ? "text-accent" : "text-muted-foreground/30"
                          }`} 
                        />
                        <span className={feature.included ? "text-muted-foreground" : "text-muted-foreground/50 line-through"}>
                          {feature.text}
                        </span>
                        {feature.tooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button type="button" data-testid={`button-tooltip-${tier.name.toLowerCase()}-${fIndex}`}>
                                <HelpCircle size={14} className="text-muted-foreground/50" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`mt-6 w-full ${tier.popular ? "bg-accent border-accent-border" : ""}`}
                    variant={tier.variant}
                    onClick={scrollToContact}
                    data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-6 text-center text-lg font-semibold" data-testid="text-addons-title">Add-Ons & Extras</h3>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            {addOns.map((addon, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-card/30 px-4 py-3 transition-all duration-300 hover:border-accent/30"
                data-testid={`card-addon-${index}`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm">{addon.name}</span>
                <Badge variant="secondary" className="text-xs" data-testid={`badge-addon-price-${index}`}>{addon.price}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            Need something custom?{" "}
            <button 
              className="text-accent underline underline-offset-4 transition-colors hover:text-accent/80" 
              onClick={scrollToContact} 
              data-testid="link-custom-quote"
            >
              Get a custom quote
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
