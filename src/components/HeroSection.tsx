import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const techIcons = ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "Python"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-diagonal-stripes">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-secondary/5" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-handwritten text-2xl text-accent mb-4 inline-block">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-black text-5xl sm:text-6xl lg:text-8xl leading-tight mb-6"
          >
            <span className="text-foreground">Building</span>
            <br />
            <span className="text-gradient-barca">Skills For</span>
            <br />
            <span className="text-secondary">Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-6 leading-relaxed"
          >
            I'm <span className="text-foreground font-semibold">Dhruv</span>, a B.Tech IT student passionate about full-stack development, game design, and UI/UX. I enjoy creating interactive experiences and building innovative web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-handwritten text-xl text-muted-foreground mb-8 italic"
          >
            "More than a Developer"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-sm font-heading font-semibold text-primary-foreground">
              <Sparkles size={14} className="text-accent" />
              Currently Learning: Next.js
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary font-heading font-bold text-sm text-secondary-foreground hover:brightness-110 transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: "0 4px 20px hsl(340 100% 32% / 0.3)" }}
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xs font-heading font-semibold tracking-widest text-muted-foreground mb-3 uppercase">
              Most Used
            </p>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                  className="px-3 py-1.5 rounded-md bg-muted/60 border border-border text-xs font-heading font-semibold text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
