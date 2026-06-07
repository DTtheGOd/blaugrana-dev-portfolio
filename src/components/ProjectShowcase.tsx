import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 0,
    title: "Indian Bank App Revamp",
    category: "UI / UX",
    summary:
      "A full end-to-end redesign of the Indian Bank mobile experience — reimagining onboarding, payment flows, and dashboard architecture using modern design principles and microinteraction-driven prototyping.",
    tech: ["Figma", "ProtoPie", "Case Study"],
    image: ["/indianbanklanding.png", "/homedashboard.png"],
    link: "/projects/indian-bank",
    accent: "#1A56DB",
  },
  {
    id: 1,
    title: "Natya AI",
    category: "AI & ML",
    summary:
      "A hybrid RAG pipeline that weaves Bharatanatyam knowledge with Gemini AI to generate poetic narratives. Built with semantic document ingestion and a ChromaDB vector backend for deep cultural storytelling.",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Gemini"],
    image: "/Natya-ai.png",
    link: "/projects/natya-ai",
    accent: "#C9A84C",
  },
  {
    id: 2,
    title: "ChromaGen",
    category: "Creative Tool",
    summary:
      "An AI-powered color palette generator with full WCAG compliance checking, RAG pipeline, K-Means image seeding, and colorblindness simulation. Designed for designers who care about accessibility.",
    tech: ["Flask", "Tailwind", "Google Gemini", "FAISS", "PIL"],
    image: "/Chroma-gen.png",
    link: "/projects/chroma-gen",
    accent: "#C8102E",
  },
  {
    id: 3,
    title: "Nirmaan UI",
    category: "SaaS",
    summary:
      "A hackathon-ready component hub with 20+ reusable React components, live preview + props playground, instant copy/export pipeline, personal vault, and JWT-secured REST APIs.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary", "React Live"],
    image: "/nirmaanui-image1.png",
    link: "/projects/nirmaan-ui",
    accent: "#1A56DB",
  },
];

const AUTOPLAY_INTERVAL = 4500;

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
            {/* Image side */}
            <div className="relative w-full lg:w-[58%] h-56 sm:h-72 lg:h-full overflow-hidden bg-[#050810] flex items-center justify-center">
              {/* Accent glow */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${project.accent}55, transparent 70%)`,
                }}
              />
              {Array.isArray(project.image) ? (
                <div className="flex h-full w-full gap-4 p-6 justify-center items-center relative z-10">
                  {project.image.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} view ${i + 1}`}
                      className="w-1/2 h-full object-contain drop-shadow-2xl"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={project.image as string}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 relative z-10"
                />
              )}
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0E1A] to-transparent lg:hidden" />
              {/* Right fade (desktop) */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0E1A] to-transparent" />
            </div>

            {/* Info side */}
            <div className="flex flex-col justify-center flex-1 px-6 sm:px-10 py-8 lg:py-10 relative z-10">
              {/* Top accent line */}
              <div
                className="w-8 h-[2px] rounded-full mb-5"
                style={{ background: project.accent }}
              />

              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-white/40 uppercase mb-3">
                {project.category}
              </span>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4 leading-tight">
                {project.title}
              </h3>

              <p className="font-body text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
                {project.summary}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border border-white/10 text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-full text-sm font-body font-medium text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 group"
              >
                Explore Project
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
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
