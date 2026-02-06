import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { Rocket, Code, Palette, Zap, Calendar, CheckCircle, Volume2, VolumeX } from "lucide-react";
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

function useAudioEngine() {
  const ctxRef = useRef<AudioContext | null>(null);
  const soundEnabledRef = useRef(false);
  const [soundOn, setSoundOn] = useState(false);
  const ambientNodesRef = useRef<{ stop: () => void } | null>(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const startAmbient = useCallback(() => {
    if (ambientNodesRef.current) return;
    const ctx = getCtx();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.035, ctx.currentTime + 2);
    masterGain.connect(ctx.destination);

    const pad1 = ctx.createOscillator();
    const pad1Gain = ctx.createGain();
    pad1.type = "sine";
    pad1.frequency.setValueAtTime(55, ctx.currentTime);
    pad1Gain.gain.setValueAtTime(0.6, ctx.currentTime);
    pad1.connect(pad1Gain);
    pad1Gain.connect(masterGain);
    pad1.start();

    const pad2 = ctx.createOscillator();
    const pad2Gain = ctx.createGain();
    pad2.type = "sine";
    pad2.frequency.setValueAtTime(82.41, ctx.currentTime);
    pad2Gain.gain.setValueAtTime(0.3, ctx.currentTime);
    pad2.connect(pad2Gain);
    pad2Gain.connect(masterGain);
    pad2.start();

    const pad3 = ctx.createOscillator();
    const pad3Gain = ctx.createGain();
    pad3.type = "triangle";
    pad3.frequency.setValueAtTime(110, ctx.currentTime);
    pad3Gain.gain.setValueAtTime(0.15, ctx.currentTime);
    pad3.connect(pad3Gain);
    pad3Gain.connect(masterGain);
    pad3.start();

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
    lfoGain.gain.setValueAtTime(8, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(pad2.frequency);
    lfo.start();

    const noiseLen = ctx.sampleRate * 4;
    const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) {
      noiseData[i] = (Math.random() * 2 - 1);
    }
    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = noiseBuf;
    noiseSrc.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.setValueAtTime(200, ctx.currentTime);
    noiseFilter.Q.setValueAtTime(0.5, ctx.currentTime);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, ctx.currentTime);
    noiseSrc.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noiseSrc.start();

    ambientNodesRef.current = {
      stop: () => {
        const now = ctx.currentTime;
        masterGain.gain.linearRampToValueAtTime(0, now + 1);
        setTimeout(() => {
          pad1.stop(); pad2.stop(); pad3.stop(); lfo.stop(); noiseSrc.stop();
          pad1.disconnect(); pad2.disconnect(); pad3.disconnect();
          lfo.disconnect(); noiseSrc.disconnect(); masterGain.disconnect();
        }, 1200);
      }
    };
  }, [getCtx]);

  const stopAmbient = useCallback(() => {
    if (ambientNodesRef.current) {
      ambientNodesRef.current.stop();
      ambientNodesRef.current = null;
    }
  }, []);

  const toggleSound = useCallback(() => {
    setSoundOn(prev => {
      const next = !prev;
      soundEnabledRef.current = next;
      if (next) {
        getCtx();
        startAmbient();
      } else {
        stopAmbient();
      }
      return next;
    });
  }, [getCtx, startAmbient, stopAmbient]);

  const playTransition = useCallback(() => {
    if (!soundEnabledRef.current) return;
    const ctx = getCtx();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.2);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(660, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.2);
    gain2.gain.setValueAtTime(0.03, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.25);
  }, [getCtx]);

  const playItemPop = useCallback(() => {
    if (!soundEnabledRef.current) return;
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    const baseFreq = 600 + Math.random() * 200;
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, ctx.currentTime + 0.04);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.2, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  }, [getCtx]);

  const playBlastOff = useCallback(() => {
    if (!soundEnabledRef.current) return;
    const ctx = getCtx();

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.type = "sawtooth";
    osc1.frequency.setValueAtTime(120, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.3);
    osc1.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 1.2);
    gain1.gain.setValueAtTime(0.05, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.4);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 1.4);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(220, ctx.currentTime + 0.15);
    osc2.frequency.exponentialRampToValueAtTime(2200, ctx.currentTime + 1.2);
    gain2.gain.setValueAtTime(0.04, ctx.currentTime + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.3);
    osc2.start(ctx.currentTime + 0.15);
    osc2.stop(ctx.currentTime + 1.3);

    const rumbleLen = ctx.sampleRate * 1.2;
    const rumbleBuf = ctx.createBuffer(1, rumbleLen, ctx.sampleRate);
    const rumbleData = rumbleBuf.getChannelData(0);
    for (let i = 0; i < rumbleLen; i++) {
      rumbleData[i] = (Math.random() * 2 - 1);
    }
    const rumble = ctx.createBufferSource();
    rumble.buffer = rumbleBuf;
    const rumbleFilter = ctx.createBiquadFilter();
    rumbleFilter.type = "lowpass";
    rumbleFilter.frequency.setValueAtTime(150, ctx.currentTime);
    rumbleFilter.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 1.0);
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.setValueAtTime(0.06, ctx.currentTime);
    rumbleGain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 0.3);
    rumbleGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.3);
    rumble.connect(rumbleFilter);
    rumbleFilter.connect(rumbleGain);
    rumbleGain.connect(ctx.destination);
    rumble.start(ctx.currentTime);
    rumble.stop(ctx.currentTime + 1.3);

    const chime = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    chime.connect(chimeGain);
    chimeGain.connect(ctx.destination);
    chime.type = "sine";
    chime.frequency.setValueAtTime(1047, ctx.currentTime + 0.5);
    chimeGain.gain.setValueAtTime(0, ctx.currentTime);
    chimeGain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.55);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    chime.start(ctx.currentTime + 0.5);
    chime.stop(ctx.currentTime + 1.5);
  }, [getCtx]);

  useEffect(() => {
    return () => { stopAmbient(); };
  }, [stopAmbient]);

  return { soundOn, toggleSound, playTransition, playItemPop, playBlastOff };
}

export default function Demo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const { soundOn, toggleSound, playTransition, playItemPop, playBlastOff } = useAudioEngine();
  const prevSlideRef = useRef(0);

  useEffect(() => {
    if (currentSlide !== prevSlideRef.current) {
      if (slides[currentSlide].type === "cta") {
        playBlastOff();
      } else {
        playTransition();
      }
      prevSlideRef.current = currentSlide;
    }
  }, [currentSlide, playTransition, playBlastOff]);

  useEffect(() => {
    if (itemIndex > 0) {
      playItemPop();
    }
  }, [itemIndex, playItemPop]);

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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-black to-black" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[120px]" />

      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 15% 20%, rgba(139, 92, 246, 0.04), transparent),
            radial-gradient(ellipse 500px 350px at 85% 60%, rgba(124, 58, 237, 0.03), transparent)
          `,
        }}
      />

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-purple-400/20"
            style={{
              left: `${10 + (i * 5.5)}%`,
              top: `${8 + (i * 4) % 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 max-w-4xl max-h-[calc(100vh-80px)] overflow-hidden"
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
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {slide.steps?.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={i < itemIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 aspect-square justify-center"
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
            <div className="space-y-6 md:space-y-10">
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {slide.title}
              </motion.h2>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                {(slide.projects as { name: string; logo: string; logoClass: string }[])?.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={i < itemIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex h-20 w-36 md:h-32 md:w-48 items-center justify-center">
                      <img
                        src={project.logo}
                        alt={project.name}
                        className={`${project.logoClass} max-w-[120px] md:max-w-[160px] object-contain`}
                      />
                    </div>
                    <span className="text-sm md:text-base text-gray-400">{project.name}</span>
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

      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-gray-400 hover:text-purple-400 transition-colors"
        data-testid="button-sound-toggle"
      >
        {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

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
