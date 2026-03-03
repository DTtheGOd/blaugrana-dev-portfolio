import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, FileCode, Server, FileType, Database, Wind, Terminal, Box,
  GitBranch, PenTool, HardDrive, Layers, Workflow, Cloud, Flame, Circle
} from "lucide-react";

const squadList = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: FileCode },
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: FileType },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind", icon: Wind },
  { name: "Python", icon: Terminal },
  { name: "Docker", icon: Box },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: PenTool },
  { name: "PostgreSQL", icon: HardDrive },
  { name: "Redux", icon: Layers },
  { name: "Express", icon: Workflow },
  { name: "AWS", icon: Cloud },
  { name: "Firebase", icon: Flame },
  { name: "GraphQL", icon: Circle },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="techstack" className="py-24 relative bg-diagonal-stripes">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-accent mb-2 italic tracking-wide uppercase">
            Tactical Analysis
          </h2>
          <p className="text-muted-foreground font-heading text-sm tracking-[0.3em] uppercase">
            — Tech Stack & Achievements —
          </p>
        </motion.div>

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
                Squad List
              </h3>
              <span className="font-heading text-xs text-muted-foreground tracking-[0.2em] uppercase">
                System: 4-3-3 Attack
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {squadList.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                  className="glass-card glass-card-hover rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-default group transition-all duration-300"
                >
                  <tech.icon
                    size={28}
                    className="text-primary group-hover:text-accent transition-colors duration-300"
                  />
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
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
                Match Stats
              </h3>
              <span className="flex items-center gap-2 text-xs font-heading text-muted-foreground uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Live Feed
              </span>
            </div>

            {/* Player Card */}
            <div className="glass-card rounded-xl p-5 mb-4 border-t-2 border-t-primary">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] font-heading text-muted-foreground uppercase tracking-widest">Player ID</p>
                  <p className="font-heading font-black text-lg text-foreground">DHRUV_DEV</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-heading text-muted-foreground uppercase tracking-widest">Season</p>
                  <p className="font-heading font-black text-lg text-accent">2024-25</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* CGPA */}
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-sm font-heading text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">⊛</span> CGPA SCORE
                  </span>
                  <span className="font-heading font-black text-lg text-foreground px-3 py-0.5 rounded border border-border bg-muted/30">
                    8.2
                  </span>
                </div>

                {/* Bit N Build */}
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-sm font-heading text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">⚡</span> BIT N BUILD
                  </span>
                  <span className="font-heading font-black text-sm text-accent-foreground bg-accent px-3 py-1 rounded">
                    FINALIST
                  </span>
                </div>

                {/* Code Housie */}
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-sm font-heading text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">&lt;/&gt;</span> CODE HOUSIE
                  </span>
                  <span className="font-heading font-black text-sm text-foreground bg-muted/50 px-3 py-1 rounded border border-border">
                    RUNNER UP
                  </span>
                </div>

                {/* Current Form */}
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-heading text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✦</span> CURRENT FORM
                  </span>
                  <span className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card rounded-xl p-4 border-t-2 border-t-primary">
                <p className="text-[10px] font-heading text-muted-foreground uppercase tracking-widest mb-1">Total Commits</p>
                <p className="font-heading font-black text-2xl text-foreground">1,240+</p>
              </div>
              <div className="glass-card rounded-xl p-4 border-t-2 border-t-primary">
                <p className="text-[10px] font-heading text-muted-foreground uppercase tracking-widest mb-1">Projects Live</p>
                <p className="font-heading font-black text-2xl text-foreground">08</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
