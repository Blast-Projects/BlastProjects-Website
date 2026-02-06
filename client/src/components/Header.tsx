import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import blastProjectsLogoDark from "@assets/BlastProjects_Main_Logo_1770175061562.png";
import blastProjectsLogoLight from "@assets/IMG_4360_1770176964631.png";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
          className="flex items-center"
          data-testid="link-logo"
        >
          <img 
            src={resolvedTheme === "dark" ? blastProjectsLogoDark : blastProjectsLogoLight} 
            alt="BlastProjects" 
            className="h-12 w-auto"
          />
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
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            className="text-muted-foreground"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} className="!text-black" fill="#4b5563" />}
          </Button>
          <Button 
            onClick={() => scrollToSection("#contact")}
            data-testid="button-get-started"
            className="bg-accent border-accent-border"
          >
            Book a Consultation
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-mobile-theme-toggle"
            className="text-muted-foreground"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} className="!text-black" fill="#4b5563" />}
          </Button>
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
              className="mt-2 bg-accent border-accent-border"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-mobile-get-started"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
