import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Training() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="training" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="rounded-xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-testid="card-training"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-training">
            <Sparkles size={14} className="mr-1" />
            Training
          </Badge>
          <h3 className="text-xl font-semibold md:text-2xl" data-testid="text-training-title">
            Learn to Build with AI
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground" data-testid="text-training-description">
            Limited 1:1 AI-assisted building sessions available by request. 
            Learn to turn your ideas into working apps using modern AI development tools.
          </p>
          <Button 
            variant="outline"
            className="mt-6"
            onClick={scrollToContact}
            data-testid="button-training-inquire"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
