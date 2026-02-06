import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Rocket, Code, Palette, Zap, Calendar, CheckCircle } from "lucide-react";
import blastProjectsLogoDark from "@assets/BlastProjects_Main_Logo_1770175061562.png";
import snapTagSyncLogo from "@assets/SnapTagSync-Logo-WhiteSNAP-TransparentBackground_1769723696024.png";
import roxysBeautyLabLogo from "@assets/57FB4895-AA27-4B1B-8DD6-1F40EC2F6D3F_1769723626732.PNG";
import vibezLogo from "@assets/6797076_Main_Logo_1769723619802.png";

const slides = [
  {
    id: 1,
    type: "intro",
    title: "BlastProjects",
    subtitle: "We Build Real Apps for Real Businesses",
  },
  {
    id: 2,
    type: "services",
    title: "What We Build",
    items: ["Custom Mobile Apps", "Professional Websites", "Booking Systems", "Automations & Tools"],
  },
  {
    id: 3,
    type: "process",
    title: "How It Works",
    steps: [
      { icon: Calendar, label: "Consult", desc: "Free discovery call" },
      { icon: Code, label: "Scope", desc: "Define your project" },
      { icon: Palette, label: "Quote", desc: "Transparent pricing" },
      { icon: Zap, label: "Build", desc: "We bring it to life" },
    ],
  },
  {
    id: 4,
    type: "projects",
    title: "Our Work",
    projects: [
      { name: "SnapTagSync", logo: snapTagSyncLogo, logoClass: "max-h-14" },
      { name: "Roxy's Beauty Lab", logo: roxysBeautyLabLogo, logoClass: "max-h-32" },
      { name: "Vibez", logo: vibezLogo, logoClass: "max-h-14" },
    ],
  },
  {
    id: 5,
    type: "cta",
    title: "Ready to Build?",
    subtitle: "Book Your Free Consultation",
    tagline: "Let's Blast Off",
  },
];

export default function Demo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    const slide = slides[currentSlide];
    let itemCount = 0;
    
    if (slide.type === "services") itemCount = slide.items?.length || 0;
    if (slide.type === "process") itemCount = slide.steps?.length || 0;
    if (slide.type === "projects") itemCount = (slide.projects as unknown[])?.length || 0;

    if (itemIndex < itemCount) {
      const timer = setTimeout(() => setItemIndex(itemIndex + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
          setItemIndex(0);
        } else {
          setTimeout(() => {
            setCurrentSlide(0);
            setItemIndex(0);
          }, 4000);
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, itemIndex]);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-black to-[#05050f]" />

      <div className="absolute -left-10 -top-10 h-[500px] w-[500px] rounded-full bg-purple-800/30 blur-[150px]" />
      <div className="absolute -right-10 -top-10 h-[400px] w-[400px] rounded-full bg-violet-800/25 blur-[120px]" />
      <div className="absolute -left-10 bottom-0 h-[400px] w-[500px] rounded-full bg-purple-900/25 blur-[130px]" />
      <div className="absolute -right-10 bottom-0 h-[350px] w-[400px] rounded-full bg-violet-900/20 blur-[120px]" />

      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-purple-400/40"
            style={{
              left: `${5 + (i * 3.8)}%`,
              top: `${5 + (i * 3.7) % 85}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[5%] top-[20%] h-[130%] w-56 rotate-[25deg] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-3xl"
          animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[25%] top-[15%] h-[130%] w-72 rotate-[25deg] bg-gradient-to-r from-transparent via-violet-500/25 to-transparent blur-3xl"
          animate={{ x: [0, 40, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute left-[45%] top-[20%] h-[130%] w-64 rotate-[25deg] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent blur-3xl"
          animate={{ x: [0, 35, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute left-[65%] top-[25%] h-[120%] w-48 rotate-[25deg] bg-gradient-to-r from-transparent via-purple-400/15 to-transparent blur-3xl"
          animate={{ x: [0, 25, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div
        className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-purple-500/15 blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-purple-600/15 blur-[130px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/12 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 800px 500px at 15% 20%, rgba(139, 92, 246, 0.15), transparent),
            radial-gradient(ellipse 700px 450px at 85% 60%, rgba(124, 58, 237, 0.12), transparent),
            radial-gradient(ellipse 600px 400px at 50% 90%, rgba(167, 139, 250, 0.1), transparent),
            radial-gradient(ellipse 500px 350px at 70% 10%, rgba(139, 92, 246, 0.08), transparent)
          `,
        }}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-8 max-w-4xl"
        >
          {slide.type === "intro" && (
            <div className="space-y-8">
              <motion.img
                src={blastProjectsLogoDark}
                alt="BlastProjects"
                className="h-24 mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.p
                className="text-2xl md:text-3xl text-purple-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {slide.subtitle}
              </motion.p>
            </div>
          )}

          {slide.type === "services" && (
            <div className="space-y-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {slide.title}
              </motion.h2>
              <div className="inline-flex flex-col items-start gap-4">
                {slide.items?.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={i < itemIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 text-xl md:text-2xl text-gray-200"
                  >
                    <CheckCircle className="text-purple-400 shrink-0" size={24} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "process" && (
            <div className="space-y-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {slide.title}
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-6">
                {slide.steps?.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={i < itemIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 min-w-[140px]"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <step.icon size={24} />
                    </div>
                    <span className="text-lg font-semibold text-white">{step.label}</span>
                    <span className="text-sm text-gray-400">{step.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "projects" && (
            <div className="space-y-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {slide.title}
              </motion.h2>
              <div className="flex flex-wrap items-center justify-center gap-12">
                {(slide.projects as { name: string; logo: string; logoClass: string }[])?.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={i < itemIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="flex h-32 w-48 items-center justify-center">
                      <img
                        src={project.logo}
                        alt={project.name}
                        className={`${project.logoClass} max-w-[160px] object-contain`}
                      />
                    </div>
                    <span className="text-base text-gray-400">{project.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {slide.type === "cta" && (
            <div className="space-y-8">
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {slide.title}
              </motion.h2>
              <motion.p
                className="text-2xl md:text-3xl text-purple-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span>{slide.tagline}</span>
                <Rocket className="text-purple-400 animate-bounce" size={36} />
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? "bg-purple-400 w-6" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
