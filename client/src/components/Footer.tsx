import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTheme } from "./ThemeProvider";
import blastProjectsLogoDark from "@assets/BlastProjects_Main_Logo_1770175061562.png";
import blastProjectsLogoLight from "@assets/IMG_4360_1770176964631.png";

const footerLinks = {
  services: [
    { label: "App Development", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
  ],
  company: [
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Policies", href: "/policies" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/Blast-Projects", icon: SiGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/blastprojects", icon: SiLinkedin },
    { label: "X", href: "https://x.com/blastprojects?s=21", icon: SiX },
    { label: "Instagram", href: "https://www.instagram.com/blast.projects", icon: SiInstagram },
  ],
};

export function Footer() {
  const { resolvedTheme } = useTheme();
  
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#" 
              className="flex items-center"
              data-testid="link-footer-logo"
            >
              <img 
                src={resolvedTheme === "dark" ? blastProjectsLogoDark : blastProjectsLogoLight} 
                alt="BlastProjects" 
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building real applications for real businesses. From idea to deployment, 
              we make your vision come to life.
            </p>
            <div className="mt-6 flex gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-accent"
                  aria-label={item.label}
                  data-testid={`link-social-${item.label.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 font-medium">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 font-medium">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link href={item.href}>
                      <span
                        className="text-sm text-muted-foreground transition-colors hover:text-accent cursor-pointer"
                        data-testid={`link-footer-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      data-testid={`link-footer-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BlastProjects. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care. Deployed with confidence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
