import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiLinkedin } from "react-icons/si";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roxana Quintero",
    role: "Beauty Lab Owner",
    platform: "linkedin",
    quote: "This was way more than a website! You truly built a full system that streamlined my bookings and payments and made everything feel seamless for my clients and for me on the backend.",
    highlight: "I appreciate your attention to detail, communication, and ability to translate business needs into something that actually works.",
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/3 to-background" />
      <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/5" data-testid="badge-testimonials">
            Client Feedback
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground" data-testid="text-testimonials-description">
            Real feedback from founders we've worked with.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="w-full max-w-2xl"
              data-testid={`card-testimonial-${index}`}
            >
              <Card className="relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <div className="absolute right-6 top-6">
                  <SiLinkedin size={24} className="text-[#0A66C2]" />
                </div>
                
                <div className="absolute -left-4 -top-4 opacity-10">
                  <Quote size={80} className="text-accent" />
                </div>

                <div className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-purple-500/20 text-lg font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <blockquote className="mb-4 text-lg leading-relaxed text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <p className="border-l-2 border-accent/50 pl-4 text-base italic text-foreground/90">
                    "{testimonial.highlight}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
