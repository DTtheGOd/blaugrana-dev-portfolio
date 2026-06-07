import { useState, useEffect, useRef, useCallback } from "react";
import { PenTool, Sparkles, Code2, Server, Figma, MonitorCheck, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import IslandNavbar from "@/components/IslandNavbar";
import { GlowCard, GlowBorder } from "@/components/ui/glow-card";

/* ─── Screen Walkthrough Data ─────────────────────────────── */
const screens = [
  {
    id: 1,
    label: "01 · Generate",
    title: "Generate Palette",
    description:
      "Enter a text prompt, upload an image, or paste any website URL. ChromaGen uses K-Means seeding + Google Gemini to return a fully WCAG-AA compliant 5-role color palette in under 2 seconds.",
    highlights: ["Text / Image / URL input", "5-role semantic palette", "WCAG AA contrast check"],
    image: "/chromagen_screen1.png",
  },
  {
    id: 2,
    label: "02 · Preview & Validate",
    title: "Preview & Validate",
    description:
      "Instantly validate contrast ratios and simulate how your palette looks across Protanopia, Deuteranopia, and Tritanopia color-blindness modes — all in real time before exporting.",
    highlights: ["Real-time contrast ratios", "3 color-blindness simulations", "Live UI context preview"],
    image: "/chromagen_screen2.png",
  },
  {
    id: 3,
    label: "03 · Library",
    title: "Palette Library",
    description:
      "Explore 100+ handcrafted, beautifully named palettes organised by mood and style. Use them as inspiration or as a direct starting point for a new project.",
    highlights: ["100+ curated palettes", "Search & filter by mood", "One-click palette load"],
    image: "/chromagen_screen3.png",
  },
  {
    id: 4,
    label: "04 · Learn",
    title: "Learning Roadmap",
    description:
      "Structured color theory lessons from Beginner to Advanced — covering UI Color Systems, WCAG standards, and the psychology of color — built directly into the app.",
    highlights: ["Beginner → Advanced path", "Color theory fundamentals", "Interactive lesson modules"],
    image: "/chromagen_screen4.png",
  },
];

/* ─── Design Process Steps ────────────────────────────────── */
const BLUE = "#1A56DB";
const processSteps = [
  {
    tool: "Figma",
    Icon: PenTool,
    phase: "Research & Wireframe",
    points: ["Color theory exploration", "Accessibility constraints mapping", "User flow architecture"],
  },
  {
    tool: "Figma",
    Icon: Sparkles,
    phase: "High-Fidelity Design",
    points: ["Component library", "Palette preview system", "Color-blindness simulations UI"],
  },
  {
    tool: "VS Code",
    Icon: Code2,
    phase: "Frontend Build",
    points: ["React + Tailwind CSS", "Live palette preview", "Animated UI components"],
  },
  {
    tool: "VS Code",
    Icon: Server,
    phase: "AI & Backend",
    points: ["Flask REST API", "Gemini + FAISS RAG pipeline", "PIL K-Means image seeding"],
  },
];

/* ─── Tech Stack ──────────────────────────────────────────── */
const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Flask", color: "#FFFFFF" },
  { name: "Google Gemini", color: "#4285F4" },
  { name: "FAISS", color: "#F7931E" },
  { name: "Python PIL", color: "#3776AB" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "WCAG AA", color: "#34D399" },
  { name: "SentenceTransformers", color: "#E879F9" },
];

/* ─── Metrics ──────────────────────────────────────────────── */
const metrics = [
  { value: "5", suffix: "", label: "Export Formats\nCSS, JSON, SCSS, PNG, Copy" },
  { value: "100", suffix: "+", label: "Curated Palettes\nin the Library" },
  { value: "3", suffix: "", label: "Color-Blindness\nSimulations" },
  { value: "WCAG", suffix: " AA", label: "Accessibility\nCompliance" },
];

/* ══════════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════════ */
export default function ChromaGenProject() {
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
            className="text-[clamp(3.5rem,7vw,7rem)] font-heading font-light tracking-tight text-[#F0EDE8] leading-[0.88] -ml-1 mb-6"
          >
            Chroma<span className="text-[#1A56DB]">Gen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl font-light text-[#8A8FA8] mb-10 leading-relaxed max-w-md"
          >
            AI-Powered Accessible Color Systems — from inspiration to WCAG-compliant palettes in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 w-full"
          >
            {[
              { label: "Stack", value: "React + Flask" },
              { label: "AI", value: "Gemini + FAISS" },
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
          <GlowBorder color="#1A56DB" intensity={0.5} blur={32} className="overflow-hidden">
            <img
              src="/Chroma-gen.png"
              alt="ChromaGen App Preview"
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
          <span className="font-mono text-sm text-[#1A56DB] tracking-widest">01.</span>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#F0EDE8] tracking-tight">
            Screen Walkthrough
          </h2>
        </motion.div>

        {/* ── 3-column row: Left info | MacBook | Right info ── */}
        <div className="flex items-center gap-8 lg:gap-12">

          {/* ─── LEFT PANEL — slide selector + title ─── */}
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
                <span className="font-mono text-[0.6rem] text-[#1A56DB]/60 tracking-[0.25em] uppercase">
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
                    className="w-5 h-[1px] flex-shrink-0 transition-all duration-300"
                    style={{ background: i === active ? "#1A56DB" : "rgba(255,255,255,0.15)", width: i === active ? "20px" : "12px" }}
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

          {/* ─── CENTER — Tilted MacBook Mockup ─── */}
          <div className="flex-1 relative" style={{ perspective: "1400px" }}>
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-[#1A56DB]/12 blur-[80px] rounded-[40px] pointer-events-none" />

            {/* MacBook wrapper — slight tilt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              style={{ transform: "perspective(1400px) rotateY(-4deg) rotateX(3deg)", transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* ── LID ── */}
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
                        style={{ height: "100%", background: "#1A56DB", borderRadius: "2px" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                      />
                    </div>
                  )}

                  {/* Screen — IMAGE ONLY, full, no crop */}
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

              {/* ── HINGE ── */}
              <div style={{
                height: "4px",
                background: "linear-gradient(180deg, #252e40 0%, #1a2230 100%)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              }} />

              {/* ── BASE ── */}
              <div style={{
                height: "30px",
                borderRadius: "0 0 12px 12px",
                background: "linear-gradient(180deg, #3a4255 0%, #2e3850 60%, #252e40 100%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
                position: "relative",
              }}>
                {/* Trackpad */}
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

          {/* ─── RIGHT PANEL — description + features ─── */}
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
                {/* Description */}
                <div className="border-l-2 border-[#1A56DB]/30 pl-4">
                  <p className="text-sm font-body text-[#8A8FA8] leading-relaxed">
                    {screen.description}
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="flex flex-col gap-2.5">
                  {screen.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1A56DB]/60 flex-shrink-0 mt-1.5" />
                      <span className="text-xs font-mono text-[#F0EDE8]/60">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── Mobile info (shown below on small screens) ── */}
        <div className="lg:hidden mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-[0.6rem] text-[#1A56DB]/60 tracking-widest uppercase">{screen.label}</span>
              <h3 className="font-heading text-2xl text-[#F0EDE8] font-light mt-1 mb-3">{screen.title}</h3>
              <p className="text-sm text-[#8A8FA8] leading-relaxed mb-4">{screen.description}</p>
              <div className="flex flex-wrap gap-2">
                {screen.highlights.map((h) => (
                  <span key={h} className="text-[0.65rem] font-mono text-[#1A56DB]/80 border border-[#1A56DB]/20 bg-[#1A56DB]/8 px-2.5 py-1 rounded-full">{h}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── NAV CONTROLS ── */}
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
                background: i === active ? "#1A56DB" : "transparent",
                borderColor: i === active ? "#1A56DB" : "rgba(255,255,255,0.1)",
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
          <span className="font-mono text-sm text-[#1A56DB] tracking-widest">02.</span>
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
          {/* Glow behind infographic */}
          <div className="absolute -inset-4 bg-[#1A56DB]/8 blur-[60px] rounded-3xl" />

          <GlowBorder color="#1A56DB" intensity={0.6} blur={36} className="relative overflow-hidden">
            <img
              src="/ChromaGen Main infographics.png"
              alt="ChromaGen Technical Infographic — AI Generation Pipeline"
              className="w-full object-contain rounded-2xl"
            />
          </GlowBorder>

          <p className="mt-6 text-center text-sm font-mono text-[#4A5070] tracking-wide">
            The full AI generation pipeline — from Inspiration input to WCAG-validated, exportable palette
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
          <span className="font-mono text-sm text-[#1A56DB] tracking-widest">03.</span>
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
          Every screen started life in Figma — designed, iterated, and handed off to code in VS Code.
        </motion.p>

        {/* Tool header badges */}
        <div className="flex items-center gap-3 mb-10">
          <ToolBadge label="Figma" Icon={Figma} />
          <div className="flex-1 h-[1px] border-t border-dashed border-white/15" />
          <ToolBadge label="VS Code" Icon={MonitorCheck} />
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connector line */}
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
              color={BLUE}
              intensity={0.4}
              blur={20}
              className="flex flex-col items-center text-center px-5 py-6 group h-full"
            >
              {/* Node circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(26,86,219,0.12)",
                  borderColor: "rgba(26,86,219,0.25)",
                  boxShadow: "0 0 24px rgba(26,86,219,0.15)",
                }}
              >
                <step.Icon size={22} style={{ color: BLUE }} strokeWidth={1.5} />
              </div>

              {/* Tool badge */}
              <span
                className="font-mono text-[0.6rem] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border mb-3"
                style={{ color: "rgba(26,86,219,0.9)", borderColor: "rgba(26,86,219,0.25)", backgroundColor: "rgba(26,86,219,0.08)" }}
              >
                {step.tool}
              </span>

              <h4 className="font-heading text-lg text-[#F0EDE8] font-medium mb-4 leading-tight">
                {step.phase}
              </h4>

              <ul className="flex flex-col gap-2">
                {step.points.map((pt) => (
                  <li key={pt} className="text-xs text-[#8A8FA8] leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Arrow connector for desktop */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-10 -translate-y-1/2 text-white/20 text-lg">
                  →
                </div>
              )}
            </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Pipeline flow bar */}
        <GlowBorder color={BLUE} intensity={0.35} blur={20} className="mt-10 overflow-hidden">
          <div className="flex items-center gap-0 rounded-xl overflow-hidden">
            <div className="flex-1 bg-[#1A56DB]/8 py-4 px-6 text-center flex flex-col items-center gap-2">
              <Figma size={16} style={{ color: BLUE }} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: BLUE }}>Figma</span>
              <p className="text-[0.65rem] text-[#8A8FA8]">Design & Prototype</p>
            </div>
            <div className="px-3 text-white/20 text-sm">→</div>
            <div className="flex-1 bg-[#1A56DB]/8 py-4 px-6 text-center flex flex-col items-center gap-2">
              <Code2 size={16} style={{ color: BLUE }} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: BLUE }}>React</span>
              <p className="text-[0.65rem] text-[#8A8FA8]">Frontend Implementation</p>
            </div>
            <div className="px-3 text-white/20 text-sm">→</div>
            <div className="flex-1 bg-[#1A56DB]/8 py-4 px-6 text-center flex flex-col items-center gap-2">
              <Server size={16} style={{ color: BLUE }} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: BLUE }}>Flask + AI</span>
              <p className="text-[0.65rem] text-[#8A8FA8]">Backend & Pipeline</p>
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
      style={{ color: "#1A56DB", borderColor: "rgba(26,86,219,0.3)", backgroundColor: "rgba(26,86,219,0.08)" }}
    >
      <Icon size={14} strokeWidth={1.5} style={{ color: "#1A56DB" }} />
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
          <span className="font-mono text-sm text-[#1A56DB] tracking-widest">04.</span>
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
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1A56DB]/6 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-16"
        >
          <span className="font-mono text-sm text-[#1A56DB] tracking-widest">05.</span>
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
            <GlowCard color="#1A56DB" intensity={0.45} blur={22} className="flex flex-col items-start p-7 h-full hover:scale-[1.02] transition-transform duration-300">
              <span className="font-heading text-[clamp(3rem,5vw,5rem)] leading-none text-[#1A56DB] tracking-tighter mb-4">
                {m.value}
                <span className="text-[0.5em] text-[#1A56DB]/60">{m.suffix}</span>
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
