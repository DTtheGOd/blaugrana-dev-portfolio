import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 0,
    title: "ChromaGen",
    category: "Creative Tool",
    summary:
      "An AI-powered color palette generator with full WCAG compliance checking, RAG pipeline, K-Means image seeding, and colorblindness simulation. Designed for designers who care about accessibility.",
    tech: ["Flask", "Tailwind", "Google Gemini", "FAISS", "PIL"],
    image: "/Chroma-gen.png",
    link: "/projects/chroma-gen",
    accent: "#1A56DB",
  },
  {
    id: 1,
    title: "Indian Bank App Revamp",
    category: "UX / UI",
    summary:
      "A full end-to-end redesign of the Indian Bank mobile experience — reimagining onboarding, payment flows, and dashboard architecture using modern design principles and microinteraction-driven prototyping.",
    tech: ["Figma", "ProtoPie", "Case Study"],
    image: ["/indianbanklanding.png", "/homedashboard.png", "/paymentflow.png"],
    link: "/projects/indian-bank",
    accent: "#C9A84C",
  },
  {
    id: 2,
    title: "Nirmaan UI",
    category: "SaaS",
    summary:
      "A hackathon-ready component hub with 20+ reusable React components, live preview + props playground, instant copy/export pipeline, personal vault, and JWT-secured REST APIs.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "React Live"],
    image: "/nirmaanui-image1.png",
    link: "/projects/nirmaan-ui",
    accent: "#1A56DB",
  },
  {
    id: 3,
    title: "Natya AI",
    category: "AI & ML",
    summary:
      "A hybrid RAG pipeline that weaves Bharatanatyam knowledge with Gemini AI to generate poetic narratives. Built with semantic document ingestion and a ChromaDB vector backend for deep cultural storytelling.",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Gemini"],
    image: "/Natya-ai.png",
    link: "/projects/natya-ai",
    accent: "#1A56DB",
  },
];

const AUTOPLAY_INTERVAL = 15000;

const ProjectShowcase = () => {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir: 1 | -1 = 1, pauseAutoplay = true) => {
      setDirection(dir);
      setActive(index);
      if (pauseAutoplay) {
        setIsPlaying(false);
      }
    },
    []
  );

  const next = useCallback(() => {
    const nextIdx = (active + 1) % projects.length;
    goTo(nextIdx, 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    const prevIdx = (active - 1 + projects.length) % projects.length;
    goTo(prevIdx, -1);
  }, [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % projects.length);
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const project = projects[active];

  const heroVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* ── HERO AREA ─────────────────────────────────── */}
      <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#0A0E1A] min-h-[420px] sm:min-h-[500px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={active}
            custom={direction}
            variants={heroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col lg:flex-row"
          >
            {/* ── IMAGE SIDE (Sexy Infographic Presentation) ── */}
            <div className="relative w-full lg:w-[55%] min-h-[320px] lg:h-full overflow-hidden bg-[#030408] flex items-center justify-center group perspective-[1200px]">
              {/* Dynamic Abstract Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Large blurred orb */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30 transition-colors duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${project.accent} 0%, transparent 60%)`,
                    filter: "blur(60px)",
                  }}
                />
                
                {/* Curved wave effect at the bottom */}
                <div 
                  className="absolute bottom-0 left-[-10%] right-[-10%] h-[60%] opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 100% 100% at 50% 100%, ${project.accent} 0%, transparent 100%)`,
                    borderRadius: "50% 50% 0 0",
                    transform: "translateY(40%)",
                  }}
                />
              </div>

              {/* Floating Elements (Particles) */}
              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white/20 blur-[1px]" />
                <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full" style={{ background: project.accent, filter: "blur(2px)", opacity: 0.4 }} />
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full bg-white/10 blur-[2px]" />
              </motion.div>

              {/* Foreground Composition */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                {Array.isArray(project.image) ? (
                  /* ── Mobile App Presentation (Multiple Phones) ── */
                  <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">
                    {project.image.map((img, i) => {
                      let rotateY = 0, rotateZ = 0, x = "0%", zIndex = 20, scale = 1;
                      const isLength3 = project.image.length === 3;
                      
                      if (isLength3) {
                        if (i === 0) { rotateY = 25; rotateZ = -6; x = "-60%"; zIndex = 10; scale = 0.85; }
                        else if (i === 1) { rotateY = 0; rotateZ = 0; x = "0%"; zIndex = 30; scale = 1; }
                        else if (i === 2) { rotateY = -25; rotateZ = 6; x = "60%"; zIndex = 10; scale = 0.85; }
                      } else {
                        const isLeft = i === 0;
                        rotateY = isLeft ? 15 : -15;
                        rotateZ = isLeft ? -4 : 4;
                        x = isLeft ? "-25%" : "25%";
                        zIndex = isLeft ? 10 : 20;
                        scale = 1;
                      }

                      return (
                        <motion.div
                          key={`${project.id}-${i}`}
                          initial={{ opacity: 0, y: 40, rotateY: rotateY * 1.5, rotateZ: rotateZ * 1.5, scale: scale * 0.9 }}
                          animate={{ opacity: 1, y: 0, rotateY, rotateZ, scale, x }}
                          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
                          className="absolute w-[40%] sm:w-[45%] aspect-[9/19.5] rounded-[24px] p-1.5 shadow-2xl transition-transform duration-500 hover:scale-105 hover:z-40"
                          style={{
                            background: "linear-gradient(145deg, #2a2d3e 0%, #10121b 100%)",
                            zIndex,
                            boxShadow: `0 30px 60px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px ${project.accent}30`
                          }}
                        >
                          {/* Inner Screen */}
                          <div className="w-full h-full bg-black rounded-[18px] overflow-hidden relative">
                            {/* iPhone Dynamic Island Mockup */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[4%] bg-black rounded-full z-20" />
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  /* ── Desktop/Web App Presentation (Browser/Macbook) ── */
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30, rotateX: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="relative w-[90%] max-w-[500px] h-auto rounded-xl p-1.5 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                    style={{
                      background: "linear-gradient(180deg, #2a2d3e 0%, #151824 100%)",
                      boxShadow: `0 40px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px ${project.accent}25`
                    }}
                  >
                    {/* Browser Header */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-[#1a1d29] rounded-t-xl flex items-center px-3 gap-1.5 border-b border-white/5 z-10">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    </div>
                    {/* Inner Screen */}
                    <div className="w-full mt-6 bg-[#0a0c14] rounded-b-lg overflow-hidden relative border border-white/5">
                      <img src={project.image as string} alt="" className="w-full h-auto block" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right fade overlay for smooth blend into info panel */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0E1A] to-transparent z-20 pointer-events-none" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0E1A] to-transparent z-20 pointer-events-none" />
            </div>

            {/* ── INFO SIDE (Sexy Infographic Text Panel) ── */}
            <div className="flex flex-col justify-center flex-1 px-8 sm:px-12 py-10 lg:py-12 relative z-10 bg-[#0A0E1A]/60 backdrop-blur-md">
              {/* Subtle background grid pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
              />
              
              <div className="relative z-10">
                {/* Fancy Category Badge */}
                <div 
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border mb-7" 
                  style={{ borderColor: `${project.accent}40`, background: `${project.accent}15` }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ background: project.accent, boxShadow: `0 0 10px 2px ${project.accent}80` }} 
                  />
                  <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase font-semibold" style={{ color: project.accent }}>
                    {project.category}
                  </span>
                </div>

                <h3 className="font-heading font-light tracking-tight text-3xl sm:text-4xl text-[#F0EDE8] mb-6 leading-[1.1]">
                  {project.title}
                </h3>

                <div className="relative pl-5 border-l-2 mb-8" style={{ borderColor: `${project.accent}60` }}>
                  <p className="font-body text-[0.9rem] sm:text-sm text-[#8A8FA8] leading-relaxed max-w-sm">
                    {project.summary}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[0.65rem] font-mono uppercase tracking-widest rounded-lg border bg-[#ffffff05] text-white/50 transition-all duration-300 hover:bg-[#ffffff0a] hover:text-white"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Enhanced CTA */}
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-3 w-fit px-6 py-3 rounded-full text-sm font-body font-medium text-white border transition-all duration-300 group overflow-hidden relative"
                  style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.03)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: project.accent }} />
                  <span className="relative z-10">Explore Project</span>
                  <ArrowUpRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    style={{ color: project.accent }}
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>



        {/* Progress bar */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
            <motion.div
              key={`progress-${active}`}
              className="h-full bg-white/30"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
            />
          </div>
        )}
      </div>

      {/* ── THUMBNAIL STRIP + CONTROLS ────────────────── */}
      <div className="flex items-center justify-center gap-3 mt-2">
        {/* Autoplay toggle */}
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="flex-shrink-0 p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200 bg-[#0A0E1A]"
          aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {/* Thumbnails — horizontally scrollable on mobile */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-0.5">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i, i > active ? 1 : -1)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden border transition-all duration-300 ${
                active === i
                  ? "border-white/50 scale-[1.03] shadow-lg"
                  : "border-white/8 opacity-50 hover:opacity-80 hover:border-white/25"
              }`}
              style={{
                width: "clamp(90px, 18vw, 130px)",
                height: "clamp(56px, 10vw, 76px)",
              }}
              aria-label={`Switch to ${p.title}`}
            >
              {/* Thumbnail image */}
              <div className="absolute inset-0 bg-[#050810] flex items-center justify-center overflow-hidden">
                {Array.isArray(p.image) ? (
                  <div className="flex w-full h-full gap-1 p-1 items-center justify-center">
                    {(p.image as string[]).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={p.title}
                        className="w-1/2 h-full object-contain"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={p.image as string}
                    alt={p.title}
                    className="w-full h-full object-contain p-1.5"
                  />
                )}
              </div>

              {/* Overlay: title label */}
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/80 to-transparent flex items-end px-1.5 pb-1">
                <span className="font-mono text-[0.5rem] text-white/70 uppercase tracking-wider truncate leading-none">
                  {p.title}
                </span>
              </div>

              {/* Active accent border glow */}
              {active === i && (
                <div
                  className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 12px ${p.accent}`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="hidden sm:flex gap-1.5 flex-shrink-0">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
