import { useState, useEffect, useRef, useCallback } from "react";
import { PenTool, Sparkles, Code2, Server, Figma, MonitorCheck, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import IslandNavbar from "@/components/IslandNavbar";
import { GlowCard, GlowBorder } from "@/components/ui/glow-card";

/* ─── Accent colour for this project ──────────────────────── */
const ACCENT = "#1A56DB"; // blue

/* ─── Screen Walkthrough Data ─────────────────────────────── */
const screens = [
  {
    id: 1,
    label: "01 · Landing",
    title: "Platform Overview",
    description:
      "The Natya AI landing page introduces the fusion of classical Bharatanatyam heritage and modern AI. Users are greeted with an immersive cultural aesthetic that sets the tone for the narrative experience ahead.",
    highlights: ["Cultural-first design", "Immersive hero section", "Clear onboarding flow"],
    image: "/natya ai landing.png",
  },
  {
    id: 2,
    label: "02 · Dance → Narrative",
    title: "Movement to Poetry",
    description:
      "Upload or stream dance frames and watch the Hybrid RAG pipeline transform sequential mudras and postures into flowing, culturally accurate poetic narratives — processed in real-time via the FastAPI backend.",
    highlights: ["Real-time frame processing", "Hybrid RAG pipeline", "Culturally accurate output"],
    image: "/natya 1.png",
  },
  {
    id: 3,
    label: "03 · Knowledge Base",
    title: "Semantic Retrieval",
    description:
      "ChromaDB powers a rich vector knowledge base of Bharatanatyam mudras, rasas, postures, and classical texts. SentenceTransformer embeddings enable deep semantic search that grounds every narrative in authentic tradition.",
    highlights: ["ChromaDB vector store", "SentenceTransformer embeddings", "PDF / TXT / Markdown ingestion"],
    image: "/natya 2.png",
  },
  {
    id: 4,
    label: "04 · Choreography",
    title: "Text → Choreography",
    description:
      "Bi-directional translation lets choreographers input poetic text and receive structured dance frames — complete with mudra sequences, timing, and rasa mapping — ready for performance or rehearsal.",
    highlights: ["Bi-directional translation", "Mudra sequence mapping", "Rasa-aware generation"],
    image: "/natya 3.png",
  },
];

/* ─── Design Process Steps ────────────────────────────────── */
const processSteps = [
  {
    tool: "Research",
    Icon: PenTool,
    phase: "Cultural Research",
    points: ["Bharatanatyam mudra study", "Rasa classification mapping", "Expert consultation"],
  },
  {
    tool: "Figma",
    Icon: Sparkles,
    phase: "UX / UI Design",
    points: ["Cultural aesthetic system", "Flow & wireframes", "High-fidelity prototypes"],
  },
  {
    tool: "VS Code",
    Icon: Code2,
    phase: "Frontend Build",
    points: ["React + Express API", "Real-time frame UI", "Responsive layouts"],
  },
  {
    tool: "VS Code",
    Icon: Server,
    phase: "AI Pipeline",
    points: ["FastAPI endpoints", "ChromaDB + Gemini RAG", "SentenceTransformer ingestion"],
  },
];

/* ─── Tech Stack ──────────────────────────────────────────── */
const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Express", color: "#FFFFFF" },
  { name: "FastAPI", color: "#10B981" },
  { name: "ChromaDB", color: "#F59E0B" },
  { name: "Google Gemini", color: "#4285F4" },
  { name: "SentenceTransformers", color: "#E879F9" },
  { name: "Python", color: "#3776AB" },
  { name: "Hybrid RAG", color: "#10B981" },
];

/* ─── Metrics ──────────────────────────────────────────────── */
const metrics = [
  { value: "2", suffix: "", label: "Translation Modes\nDance → Poetry · Text → Frames" },
  { value: "RAG", suffix: "", label: "AI Architecture\nHybrid Retrieval Pipeline" },
  { value: "3+", suffix: "", label: "Knowledge Formats\nPDF · TXT · Markdown" },
  { name: "Real-time", value: "Live", suffix: "", label: "Processing\nFrame-by-frame narratives" },
];

/* ══════════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════════ */
export default function NatyaAIProject() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#1A56DB] selection:text-white bg-[#05070F] text-[#F0EDE8]">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1A56DB]/6 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#9B5CF6]/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-50">
        <IslandNavbar backLink="/projects" backLabel="Projects" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <ScreenWalkthrough />
        <TechnicalInfographic />
        <DesignProcessMap />
        <TechStackSection />
        <MetricsSection />
      </main>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative px-6 md:px-12 pt-36 pb-20 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#1A56DB]" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#8A8FA8]">
              Full-Stack AI Project · 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-[clamp(3rem,7vw,7rem)] font-heading font-light tracking-tight text-[#F0EDE8] leading-[0.88] -ml-1 mb-6"
          >
            Natya<span className="text-[#10B981]"> AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl font-light text-[#8A8FA8] mb-10 leading-relaxed max-w-md"
          >
            Bharatanatyam Dance Narrative Platform — classical heritage meets AI, transforming movement into culturally accurate poetry in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 w-full"
          >
            {[
              { label: "Stack", value: "React + FastAPI" },
              { label: "AI", value: "Gemini + RAG" },
              { label: "Type", value: "Team Project" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#4A5070] mb-1">{m.label}</span>
                <span className="font-heading text-lg text-[#F0EDE8] font-normal">{m.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — cover image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="absolute inset-0 bg-[#1A56DB]/10 blur-[80px] rounded-2xl" />
          <GlowBorder color={ACCENT} intensity={0.5} blur={32} className="overflow-hidden">
            <img
              src="/Natya-ai.png"
              alt="Natya AI App Preview"
              className="w-full object-cover rounded-2xl"
            />
          </GlowBorder>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Screen Walkthrough Slideshow ───────────────────────── */
function ScreenWalkthrough() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const INTERVAL = 8000;

  const goTo = useCallback((idx: number, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setActive(idx);
  }, []);

  const next = useCallback(() => goTo((active + 1) % screens.length, 1), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + screens.length) % screens.length, -1), [active, goTo]);

  useEffect(() => {
    if (!isPlaying) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((p) => (p + 1) % screens.length);
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [next, prev]);

  const screen = screens[active];

  const imgVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 30 : -30 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -30 : 30, transition: { duration: 0.3 } }),
  };

  return (
    <section className="py-24 border-b border-white/[0.06] overflow-x-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-4 mb-16"
        >
          <span className="font-mono text-sm tracking-widest" style={{ color: ACCENT }}>01.</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#F0EDE8] tracking-tight">
            Screen Walkthrough
          </h2>
        </motion.div>

        {/* ── 3-column row ── */}
        <div className="flex items-center gap-8 lg:gap-12">

          {/* LEFT PANEL */}
          <div className="hidden lg:flex flex-col gap-6 flex-shrink-0" style={{ width: "200px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${active}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-3"
              >
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: `${ACCENT}99` }}>
                  {screen.label}
                </span>
                <h3 className="font-heading text-2xl text-[#F0EDE8] font-light leading-tight tracking-tight">
                  {screen.title}
                </h3>
              </motion.div>
            </AnimatePresence>

            {/* Slide pills */}
            <div className="flex flex-col gap-2 mt-2">
              {screens.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i, i > active ? 1 : -1); setIsPlaying(false); }}
                  className="flex items-center gap-3 text-left group"
                >
                  <div
                    className="h-[1px] flex-shrink-0 transition-all duration-300"
                    style={{
                      background: i === active ? ACCENT : "rgba(255,255,255,0.15)",
                      width: i === active ? "20px" : "12px",
                    }}
                  />
                  <span
                    className="font-mono text-[0.65rem] transition-colors duration-200"
                    style={{ color: i === active ? "#F0EDE8" : "rgba(255,255,255,0.3)" }}
                  >
                    {String(i + 1).padStart(2, "0")} — {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CENTER — MacBook Mockup */}
          <div className="flex-1 relative" style={{ perspective: "1400px" }}>
            <div
              className="absolute -inset-8 blur-[80px] rounded-[40px] pointer-events-none"
              style={{ background: `${ACCENT}1F` }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              style={{ transform: "perspective(1400px) rotateY(-4deg) rotateX(3deg)", transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* LID */}
              <div
                style={{
                  borderRadius: "16px 16px 4px 4px",
                  background: "linear-gradient(160deg, #4a5568 0%, #3a4255 40%, #2a3244 100%)",
                  padding: "3px 3px 2px 3px",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.07), -8px 20px 60px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.5)",
                }}
              >
                {/* Camera dot */}
                <div className="flex justify-center pt-1.5 pb-0.5">
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1c2230", boxShadow: "0 0 0 1px rgba(255,255,255,0.07)" }} />
                </div>

                {/* Screen bezel */}
                <div
                  style={{
                    borderRadius: "12px 12px 2px 2px",
                    background: "#101420",
                    padding: "8px 8px 6px 8px",
                    position: "relative",
                  }}
                >
                  {/* Progress bar */}
                  {isPlaying && (
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.04)", zIndex: 20 }}>
                      <motion.div
                        key={`prog-${active}`}
                        style={{ height: "100%", background: ACCENT, borderRadius: "2px" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                      />
                    </div>
                  )}

                  {/* Screen */}
                  <div
                    style={{
                      aspectRatio: "16/10",
                      borderRadius: "6px",
                      overflow: "hidden",
                      background: "#0a0c14",
                      position: "relative",
                    }}
                  >
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img
                        key={`screen-${active}`}
                        src={screen.image}
                        alt={screen.title}
                        custom={direction}
                        variants={imgVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* HINGE */}
              <div style={{
                height: "4px",
                background: "linear-gradient(180deg, #252e40 0%, #1a2230 100%)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              }} />

              {/* BASE */}
              <div style={{
                height: "30px",
                borderRadius: "0 0 12px 12px",
                background: "linear-gradient(180deg, #3a4255 0%, #2e3850 60%, #252e40 100%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", bottom: "5px", left: "50%", transform: "translateX(-50%)",
                  width: "70px", height: "8px", borderRadius: "4px",
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
                }} />
              </div>

              {/* Ground shadow */}
              <div style={{
                height: "10px",
                background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,0,0,0.55) 0%, transparent 100%)",
              }} />
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden lg:flex flex-col gap-5 flex-shrink-0" style={{ width: "200px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${active}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="flex flex-col gap-5"
              >
                <div className="border-l-2 pl-4" style={{ borderColor: `${ACCENT}4D` }}>
                  <p className="text-sm font-body text-[#8A8FA8] leading-relaxed">
                    {screen.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  {screen.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: `${ACCENT}99` }} />
                      <span className="text-xs font-mono text-[#F0EDE8]/60">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile info */}
        <div className="lg:hidden mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-[0.6rem] tracking-widest uppercase" style={{ color: `${ACCENT}99` }}>{screen.label}</span>
              <h3 className="font-heading text-2xl text-[#F0EDE8] font-light mt-1 mb-3">{screen.title}</h3>
              <p className="text-sm text-[#8A8FA8] leading-relaxed mb-4">{screen.description}</p>
              <div className="flex flex-wrap gap-2">
                {screen.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[0.65rem] font-mono px-2.5 py-1 rounded-full border"
                    style={{ color: `${ACCENT}CC`, borderColor: `${ACCENT}33`, backgroundColor: `${ACCENT}14` }}
                  >{h}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* NAV CONTROLS */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => { prev(); setIsPlaying(false); }}
            className="px-3 py-2 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all font-mono text-sm"
          >←</button>

          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i, i > active ? 1 : -1); setIsPlaying(false); }}
              className="transition-all duration-300 rounded-lg font-mono text-xs px-4 py-2 border"
              style={{
                background: i === active ? ACCENT : "transparent",
                borderColor: i === active ? ACCENT : "rgba(255,255,255,0.1)",
                color: i === active ? "#fff" : "rgba(255,255,255,0.35)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}

          <button
            onClick={() => { next(); setIsPlaying(false); }}
            className="px-3 py-2 rounded-xl border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all font-mono text-sm"
          >→</button>
        </div>

      </div>
    </section>
  );
}

/* ─── Technical Infographic ───────────────────────────────── */
function TechnicalInfographic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-14"
        >
          <span className="font-mono text-sm tracking-widest" style={{ color: ACCENT }}>02.</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#F0EDE8] tracking-tight">
            Technical Summary
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 blur-[60px] rounded-3xl" style={{ background: `${ACCENT}14` }} />

          <GlowBorder color={ACCENT} intensity={0.6} blur={36} className="relative overflow-hidden">
            <img
              src="/natya infographics main.png"
              alt="Natya AI Technical Infographic — Hybrid RAG Pipeline"
              className="w-full object-contain rounded-2xl"
            />
          </GlowBorder>

          <p className="mt-6 text-center text-sm font-mono text-[#4A5070] tracking-wide">
            The full Hybrid RAG pipeline — from dance frames to culturally grounded poetic narratives
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Design Process Map ──────────────────────────────────── */
function DesignProcessMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-6"
        >
          <span className="font-mono text-sm tracking-widest" style={{ color: ACCENT }}>03.</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#F0EDE8] tracking-tight">
            Design Process
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#8A8FA8] font-body text-base mb-14 max-w-xl"
        >
          Deep research into Bharatanatyam tradition came first — every design decision was rooted in cultural authenticity before any code was written.
        </motion.p>

        <div className="flex items-center gap-3 mb-10">
          <ToolBadge label="Figma" Icon={Figma} />
          <div className="flex-1 h-[1px] border-t border-dashed border-white/15" />
          <ToolBadge label="VS Code" Icon={MonitorCheck} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] border-t border-dashed border-white/10 z-0" />

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i + 0.3 }}
              className="relative z-10"
            >
              <GlowCard
                color={ACCENT}
                intensity={0.4}
                blur={20}
                className="flex flex-col items-center text-center px-5 py-6 group h-full"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${ACCENT}1F`,
                    borderColor: `${ACCENT}40`,
                    boxShadow: `0 0 24px ${ACCENT}26`,
                  }}
                >
                  <step.Icon size={22} style={{ color: ACCENT }} strokeWidth={1.5} />
                </div>

                <span
                  className="font-mono text-[0.6rem] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border mb-3"
                  style={{ color: `${ACCENT}E6`, borderColor: `${ACCENT}40`, backgroundColor: `${ACCENT}14` }}
                >
                  {step.tool}
                </span>

                <h4 className="font-heading text-lg text-[#F0EDE8] font-medium mb-4 leading-tight">
                  {step.phase}
                </h4>

                <ul className="flex flex-col gap-2">
                  {step.points.map((pt) => (
                    <li key={pt} className="text-xs text-[#8A8FA8] leading-relaxed">{pt}</li>
                  ))}
                </ul>

                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-10 -translate-y-1/2 text-white/20 text-lg">→</div>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Pipeline flow bar */}
        <GlowBorder color={ACCENT} intensity={0.35} blur={20} className="mt-10 overflow-hidden">
          <div className="flex items-center gap-0 rounded-xl overflow-hidden">
            <div className="flex-1 py-4 px-6 text-center flex flex-col items-center gap-2" style={{ backgroundColor: `${ACCENT}14` }}>
              <Figma size={16} style={{ color: ACCENT }} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: ACCENT }}>Research</span>
              <p className="text-[0.65rem] text-[#8A8FA8]">Cultural Study</p>
            </div>
            <div className="px-3 text-white/20 text-sm">→</div>
            <div className="flex-1 py-4 px-6 text-center flex flex-col items-center gap-2" style={{ backgroundColor: `${ACCENT}14` }}>
              <Code2 size={16} style={{ color: ACCENT }} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: ACCENT }}>React</span>
              <p className="text-[0.65rem] text-[#8A8FA8]">Frontend</p>
            </div>
            <div className="px-3 text-white/20 text-sm">→</div>
            <div className="flex-1 py-4 px-6 text-center flex flex-col items-center gap-2" style={{ backgroundColor: `${ACCENT}14` }}>
              <Server size={16} style={{ color: ACCENT }} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: ACCENT }}>FastAPI + RAG</span>
              <p className="text-[0.65rem] text-[#8A8FA8]">AI Pipeline</p>
            </div>
          </div>
        </GlowBorder>
      </div>
    </section>
  );
}

function ToolBadge({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono"
      style={{ color: ACCENT, borderColor: `${ACCENT}4D`, backgroundColor: `${ACCENT}14` }}
    >
      <Icon size={14} strokeWidth={1.5} style={{ color: ACCENT }} />
      <span>{label}</span>
    </div>
  );
}

/* ─── Tech Stack ──────────────────────────────────────────── */
function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-14"
        >
          <span className="font-mono text-sm tracking-widest" style={{ color: ACCENT }}>04.</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#F0EDE8] tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 + 0.2 }}
            >
              <div
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border bg-[#0A0E1A]/60 transition-all duration-300 cursor-default hover:scale-105"
                style={{
                  borderColor: `${t.color}30`,
                  boxShadow: `0 0 0 1px ${t.color}15, 0 0 12px ${t.color}20`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: t.color, boxShadow: `0 0 8px ${t.color}` }}
                />
                <span className="font-mono text-sm text-[#F0EDE8]/80 group-hover:text-[#F0EDE8] transition-colors">
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Metrics ──────────────────────────────────────────────── */
function MetricsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[160px] rounded-full"
          style={{ background: `${ACCENT}0F` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-16"
        >
          <span className="font-mono text-sm tracking-widest" style={{ color: ACCENT }}>05.</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#F0EDE8] tracking-tight">
            Key Outcomes
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              <GlowCard color={ACCENT} intensity={0.45} blur={22} className="flex flex-col items-start p-7 h-full hover:scale-[1.02] transition-transform duration-300">
                <span
                  className="font-heading text-[clamp(3rem,5vw,5rem)] leading-none tracking-tighter mb-4"
                  style={{ color: ACCENT }}
                >
                  {m.value}
                  <span className="text-[0.5em]" style={{ color: `${ACCENT}99` }}>{m.suffix}</span>
                </span>
                <div className="flex flex-col gap-1">
                  {m.label.split("\n").map((line, idx) => (
                    <span
                      key={idx}
                      className={`font-mono uppercase tracking-widest ${
                        idx === 0 ? "text-xs text-[#F0EDE8]/70" : "text-[0.6rem] text-[#4A5070]"
                      }`}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
