import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

export function TrustConfidentiality() {
  return (
    <section id="trust" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="rounded-xl border border-border/50 bg-card/30 p-8 md:p-10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-testid="card-trust"
        >
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4" data-testid="badge-trust">
              <Shield size={14} className="mr-1" />
              Trust & Confidentiality
            </Badge>
            
            <h3 className="text-xl font-semibold md:text-2xl" data-testid="text-trust-title">
              Your ideas stay yours. Period.
            </h3>
            
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-testid="text-trust-description">
              All conversations, project details, and materials shared with us are treated as 
              strictly confidential. We never reuse, resell, or share client ideas or concepts.
            </p>
            
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-testid="text-trust-nda">For additional protection, we sign a mutual non-disclosure agreement before any work begins.</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2" data-testid="trust-feature-confidential">
                <Lock size={16} className="text-accent" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2" data-testid="trust-feature-nda">
                <FileCheck size={16} className="text-accent" />
                <span>NDA Available</span>
              </div>
              <div className="flex items-center gap-2" data-testid="trust-feature-secure">
                <Shield size={16} className="text-accent" />
                <span>Your Ideas Protected</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
