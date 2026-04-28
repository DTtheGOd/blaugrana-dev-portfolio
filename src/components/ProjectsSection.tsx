import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nirmaan UI",
    subtitle: "Hackathon Component Hub",
    tech: ["React", "Node.js", "MongoDB", "React Live", "Cloudinary"],
    description:
      "Built hackathon-ready library of 20+ reusable React components with instant copy/export, personal vault, live preview + props playground, JWT auth REST APIs.",
    features: ["Component library", "Live preview", "Dark/light themes", "Export pipeline"],
  },
  {
    title: "Natya AI",
    subtitle: "Bharatanatyam Dance Narrative",
    tech: ["React", "Express", "FastAPI", "ChromaDB"],
    description:
      "Hybrid RAG pipeline with ChromaDB for Bharatanatyam knowledge, Gemini AI for poetic narratives, semantic document ingestion.",
    features: ["AI-powered storytelling", "Vector database", "Cultural tech"],
  },
  {
    title: "ChromaGen",
    subtitle: "AI Color Palette Generator",
    tech: ["React", "Flask", "Google Gemini", "FAISS", "PIL"],
    description:
      "Full-stack AI palette generator with WCAG compliance, RAG pipeline, K-Means image seeding, colorblindness preview.",
    features: ["AI generation", "Accessibility", "Image-to-palette"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 group relative ${hovered ? "glow-red border-secondary/40" : "glow-blue"
        }`}
    >
      {/* Scanning Line Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-20 pointer-events-none opacity-50"
          />
        )}
      </AnimatePresence>

      {/* Background patterns */}
      <div className="absolute inset-0 bg-diagonal-stripes opacity-[0.03] pointer-events-none" />

      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-gradient-barca transition-all">
              {project.title}
            </h3>
            <p className="font-heading text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <motion.div
            animate={{ rotate: hovered ? -45 : 0 }}
            className="p-2 rounded-lg bg-secondary/10 text-secondary"
          >
            <ExternalLink size={18} />
          </motion.div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.features.map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-heading font-semibold"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-md bg-muted/50 text-xs font-heading font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mb-2">
            PROJECTS
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
