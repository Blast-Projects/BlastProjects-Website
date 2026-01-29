import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Code2, Zap, Globe, Server, Shield } from "lucide-react";
import type { Service } from "@shared/schema";

const services: Service[] = [
  {
    id: "1",
    title: "MVP Development",
    description: "Perfect for startups and entrepreneurs who want to validate their idea quickly with a working product.",
    features: [
      "Full-stack web or mobile app",
      "Up to 5 core features",
      "Basic integrations (Auth, Payments)",
      "Custom domain setup",
      "2 weeks delivery",
      "30-day support included",
    ],
    price: "$2,499",
  },
  {
    id: "2",
    title: "Full App Build",
    description: "Complete application development from design to deployment. Everything you need to launch and scale.",
    features: [
      "Everything in MVP, plus:",
      "Unlimited features",
      "Advanced integrations",
      "Admin dashboard",
      "Analytics & monitoring",
      "4-6 weeks delivery",
      "90-day support included",
    ],
    price: "$5,999",
    popular: true,
  },
  {
    id: "3",
    title: "Enterprise Solution",
    description: "For businesses that need robust, scalable solutions with ongoing development and premium support.",
    features: [
      "Everything in Full Build, plus:",
      "Custom architecture design",
      "Team training sessions",
      "Priority support",
      "Ongoing maintenance",
      "Dedicated project manager",
    ],
    price: "Custom",
  },
];

const processSteps = [
  {
    icon: Code2,
    title: "Design & Plan",
    description: "We map out your entire application architecture and user experience.",
  },
  {
    icon: Zap,
    title: "Build & Develop",
    description: "Our team builds your app with modern tech stack and best practices.",
  },
  {
    icon: Globe,
    title: "Deploy & Launch",
    description: "We handle domains, hosting, SSL, and everything for going live.",
  },
  {
    icon: Server,
    title: "Connect & Integrate",
    description: "All your APIs, payment systems, and third-party services connected.",
  },
  {
    icon: Shield,
    title: "Test & Secure",
    description: "Rigorous testing, security audits, and performance optimization.",
  },
  {
    icon: Rocket,
    title: "Support & Scale",
    description: "Ongoing support to keep your app running smoothly as you grow.",
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4" data-testid="badge-services">Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-services-title">
            From idea to live app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-services-description">
            We handle everything: design, development, integrations, domains, hosting, 
            and deployment. You focus on your business, we build the tech.
          </p>
        </div>

        <div className="mb-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 rounded-lg border border-border/50 bg-card/30 p-4 backdrop-blur-sm"
              data-testid={`card-process-step-${index}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                <step.icon size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-medium">{step.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm ${
                service.popular ? "ring-2 ring-accent" : ""
              }`}
              data-testid={`card-service-${service.id}`}
            >
              {service.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-accent px-12 py-1 text-xs font-medium text-accent-foreground">
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold" data-testid={`text-service-title-${service.id}`}>{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                
                <div className="mt-6">
                  <span className="text-3xl font-bold" data-testid={`text-service-price-${service.id}`}>{service.price}</span>
                  {service.price !== "Custom" && (
                    <span className="text-muted-foreground"> / project</span>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="mt-6 w-full"
                  variant={service.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                  data-testid={`button-service-${service.id}`}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
