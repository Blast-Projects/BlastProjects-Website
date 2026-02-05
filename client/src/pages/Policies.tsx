import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const policies = [
  {
    title: "Workplace Policy",
    content: "BlastProjects is a remote-first software development studio. We operate with flexibility, trust, and accountability, focusing on outcomes rather than rigid schedules or locations. Team members collaborate across time zones using modern tools and clear communication to deliver high-quality work efficiently and responsibly."
  },
  {
    title: "Confidentiality & Client Work",
    content: "All client projects, discussions, designs, and deliverables are treated as strictly confidential. BlastProjects respects non-disclosure agreements (NDAs) and confidentiality obligations. We do not share, reuse, or disclose client information, intellectual property, or materials without explicit permission."
  },
  {
    title: "Security & Data Responsibility",
    content: "We take reasonable measures to protect project data and access, including:",
    list: [
      "Secure authentication and access controls",
      "Trusted development and collaboration tools",
      "Principle-of-least-access for internal systems"
    ],
    footer: "While no system is immune to risk, we are committed to responsible data handling and continuous improvement of security practices."
  },
  {
    title: "Intellectual Property",
    content: "Unless otherwise agreed in writing:",
    list: [
      "Client-owned work remains the property of the client upon completion and payment",
      "BlastProjects retains the right to showcase non-confidential work for portfolio or marketing purposes"
    ],
    footer: "Any deviations from this are documented contractually."
  },
  {
    title: "Professional Conduct",
    content: "BlastProjects is committed to respectful, ethical, and professional collaboration. We do not tolerate harassment, discrimination, misuse of data, or unethical behavior in any form. We aim to build long-term relationships based on transparency, trust, and mutual respect."
  },
  {
    title: "Changes to These Policies",
    content: "BlastProjects may update these policies periodically to reflect changes in operations, legal requirements, or best practices. Updates will be posted on this page with a revised \"Last updated\" date."
  },
  {
    title: "Contact",
    content: "For questions regarding these policies, please contact:",
    email: "hello@blastprojects.com"
  }
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <button 
                className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                data-testid="link-back-home"
              >
                <ArrowLeft size={16} />
                Back to Home
              </button>
            </Link>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-policies-title">
              Company Policies
            </h1>
            <p className="mt-2 text-sm text-muted-foreground" data-testid="text-policies-updated">
              Last updated: February 2026
            </p>

            <div className="mt-12 space-y-12">
              {policies.map((policy, index) => (
                <motion.section
                  key={policy.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-border/30 pb-10 last:border-b-0"
                  data-testid={`section-policy-${index}`}
                >
                  <h2 className="mb-4 text-xl font-semibold" data-testid={`text-policy-title-${index}`}>
                    {policy.title}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {policy.content}
                  </p>
                  {policy.list && (
                    <ul className="mt-4 space-y-2 pl-6">
                      {policy.list.map((item, i) => (
                        <li key={i} className="relative text-muted-foreground before:absolute before:-left-4 before:content-['•'] before:text-accent">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {policy.footer && (
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {policy.footer}
                    </p>
                  )}
                  {policy.email && (
                    <a 
                      href={`mailto:${policy.email}`}
                      className="mt-2 inline-block text-accent transition-colors hover:text-accent/80"
                      data-testid="link-contact-email"
                    >
                      {policy.email}
                    </a>
                  )}
                </motion.section>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
