import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import barcaPhoto from "@/assets/my pic barca background.jpeg";

const techIcons = ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "Python"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative background elements removed to show GridScan */}

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="max-w-4xl flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading font-medium text-5xl sm:text-6xl lg:text-8xl leading-[1.1] mb-6 tracking-tight text-gradient-headline"
            >
              Digital craftsmanship<br />
              & precise engineering.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-muted-foreground text-lg sm:text-xl max-w-2xl mb-4 leading-relaxed font-light"
            >
              I'm Dhruv — I build creative systems that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-10 inline-block">
                Software Engineer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-secondary text-white font-body font-medium tracking-[0.06em] hover:bg-secondary/90 transition-colors"
              >
                View Selected Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-transparent border border-white/10 text-foreground font-body font-medium tracking-[0.06em] hover:border-white/20 hover:bg-white/5 transition-colors"
              >
                Get In Touch
              </Link>
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

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-muted">
                <img
                  src={barcaPhoto}
                  alt="Dhruv Tiwari"
                  className="w-full h-full object-cover object-center transition-all duration-700"
                />
              </div>
              {/* Subtle back glow instead of chaotic borders */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-primary/20 blur-3xl -z-10" />
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
