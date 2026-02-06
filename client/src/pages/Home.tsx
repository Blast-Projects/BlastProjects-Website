import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustConfidentiality } from "@/components/TrustConfidentiality";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/Starfield";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="space-nebula" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Testimonials />
          <Services />
          <HowItWorks />
          <TrustConfidentiality />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
