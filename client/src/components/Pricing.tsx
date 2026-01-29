import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pricingTiers = [
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

export function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4" data-testid="badge-pricing">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-pricing-title">
            Transparent, affordable pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-pricing-description">
            No hidden fees. No hourly billing. You know exactly what you're paying 
            for upfront. We keep it affordable because everyone deserves great tech.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm ${
                tier.popular ? "ring-2 ring-accent" : ""
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
                  <span className="text-4xl font-bold" data-testid={`text-pricing-price-${tier.name.toLowerCase()}`}>{tier.price}</span>
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
                  className="mt-6 w-full"
                  variant={tier.variant}
                  onClick={scrollToContact}
                  data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-lg font-semibold" data-testid="text-addons-title">Add-Ons & Extras</h3>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-card/30 px-4 py-3"
                data-testid={`card-addon-${index}`}
              >
                <span className="text-sm">{addon.name}</span>
                <Badge variant="secondary" className="text-xs" data-testid={`badge-addon-price-${index}`}>{addon.price}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need something custom?{" "}
            <Button 
              variant="link" 
              className="h-auto p-0 text-accent" 
              onClick={scrollToContact} 
              data-testid="link-custom-quote"
            >
              Get a custom quote
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
