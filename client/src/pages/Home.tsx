import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Training } from "@/components/Training";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <HowItWorks />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
