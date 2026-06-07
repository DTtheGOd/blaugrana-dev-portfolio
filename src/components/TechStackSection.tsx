import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2, FileCode, Server, FileType, Database, Wind, Terminal, Box,
  GitBranch, PenTool, HardDrive, Layers, Workflow, Cloud, Flame, Circle,
  GraduationCap, Trophy, Activity
} from "lucide-react";

const squadList = [
  { name: "React", icon: Code2, desc: "A JavaScript library for building component-driven UI." },
  { name: "Next.js", icon: FileCode, desc: "A React framework for production-grade applications." },
  { name: "Node.js", icon: Server, desc: "A runtime environment for server-side JavaScript." },
  { name: "TypeScript", icon: FileType, desc: "A strongly typed language that builds on JavaScript." },
  { name: "MongoDB", icon: Database, desc: "A NoSQL database program using JSON-like documents." },
  { name: "Tailwind", icon: Wind, desc: "A utility-first CSS framework for rapid UI dev." },
  { name: "Python", icon: Terminal, desc: "A high-level programming language known for readability." },
  { name: "Docker", icon: Box, desc: "Platform for developing and running apps in containers." },
  { name: "Git", icon: GitBranch, desc: "Version control system for tracking source code changes." },
  { name: "Figma", icon: PenTool, desc: "A collaborative web application for interface design." },
  { name: "PostgreSQL", icon: HardDrive, desc: "An open-source object-relational database system." },
  { name: "Redux", icon: Layers, desc: "A predictable state container for JavaScript apps." },
  { name: "Express", icon: Workflow, desc: "A minimal and flexible Node.js web framework." },
  { name: "AWS", icon: Cloud, desc: "Comprehensive cloud computing platform provided by Amazon." },
  { name: "Firebase", icon: Flame, desc: "Google's platform for creating mobile and web apps." },
  { name: "GraphQL", icon: Circle, desc: "A query language for APIs and fulfilling those queries." },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section id="techstack" className="py-8 relative" ref={ref}>
      <div className="container mx-auto px-6">


        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Squad List - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-black text-lg text-foreground uppercase tracking-wider">
                Skill List
              </h3>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {squadList.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                  onClick={() => setActiveTech(activeTech === tech.name ? null : tech.name)}
                  className="glass-card glass-card-hover rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all duration-300 relative overflow-hidden"
                >
                  <tech.icon
                    size={28}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>

                  <AnimatePresence>
                    {activeTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 z-10 bg-barca-navy/95 backdrop-blur-md p-3 flex items-center justify-center text-center rounded-xl"
                      >
                        <p className="font-mono text-[10px] sm:text-[11px] leading-relaxed text-white/90">
                          {tech.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Match Stats - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-black text-lg text-foreground uppercase tracking-wider">
                Career Summary
              </h3>
            </div>

            {/* Player Card */}
            <div className="glass-card rounded-2xl p-6 mb-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Player ID</p>
                  <p className="font-body font-bold text-xl text-foreground tracking-tight">DHRUV_DEV</p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Season</p>
                  <p className="font-body font-bold text-lg text-accent tracking-tight">2024-25</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* CGPA */}
                <div className="flex items-center justify-between py-3 border-b border-white/5 group-hover:border-white/10 transition-colors">
                  <span className="text-sm font-body font-medium text-white/70 flex items-center gap-3">
                    <GraduationCap size={16} className="text-accent" />
                    CGPA SCORE
                  </span>
                  <span className="font-mono font-semibold text-sm text-white px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    8.2
                  </span>
                </div>

                {/* Bit N Build */}
                <div className="flex items-center justify-between py-3 border-b border-white/5 group-hover:border-white/10 transition-colors">
                  <span className="text-sm font-body font-medium text-white/70 flex items-center gap-3">
                    <Trophy size={16} className="text-accent" />
                    BIT N BUILD
                  </span>
                  <span className="font-body font-bold text-[11px] uppercase tracking-wider text-accent-foreground bg-accent px-3 py-1 rounded-full shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                    FINALIST
                  </span>
                </div>

                {/* Code Housie */}
                <div className="flex items-center justify-between py-3 border-b border-white/5 group-hover:border-white/10 transition-colors">
                  <span className="text-sm font-body font-medium text-white/70 flex items-center gap-3">
                    <Code2 size={16} className="text-primary" />
                    CODE HOUSIE
                  </span>
                  <span className="font-body font-bold text-[11px] uppercase tracking-wider text-white px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    RUNNER UP
                  </span>
                </div>

                {/* Current Form */}
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-body font-medium text-white/70 flex items-center gap-3">
                    <Activity size={16} className="text-secondary" />
                    CURRENT FORM
                  </span>
                  <span className="font-body font-bold text-[11px] uppercase tracking-wider text-white flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_var(--secondary)]" />
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Total Commits</p>
                <p className="font-body font-black text-3xl text-white tracking-tighter">1,240+</p>
              </div>
              <div className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Projects Live</p>
                <p className="font-body font-black text-3xl text-white tracking-tighter">08</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
