import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#training", label: "Training" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
          data-testid="link-logo"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground">
            <span className="text-sm font-bold text-background">DS</span>
          </div>
          <span>Dev Studio</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={() => scrollToSection(link.href)}
              data-testid={`link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button 
            onClick={() => scrollToSection("#contact")}
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="justify-start"
                onClick={() => scrollToSection(link.href)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Button>
            ))}
            <Button 
              className="mt-2"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-mobile-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
