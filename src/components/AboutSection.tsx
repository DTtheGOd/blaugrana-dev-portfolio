import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  { icon: "⚽", label: "Football" },
  { icon: "🏏", label: "Cricket" },
  { icon: "🎌", label: "Anime" },
  { icon: "💪", label: "Gym" },
  { icon: "💻", label: "Coding" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mb-2">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          <div className="glass-card glass-card-hover rounded-2xl p-8 sm:p-10 relative overflow-hidden transition-all duration-500">
            {/* Gradient border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

            <p className="text-foreground/90 leading-relaxed mb-4 text-lg">
              I'm a passionate developer who loves building things that live on the internet. I specialize in{" "}
              <span className="text-accent font-semibold">full-stack development</span>, with a keen eye for{" "}
              <span className="text-accent font-semibold">UI/UX design</span> and a growing interest in{" "}
              <span className="text-accent font-semibold">game design</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me watching Barcelona matches, hitting the gym, binging anime, or playing cricket. I believe in building with passion — just like Barça plays: bold, creative, and always pushing forward.
            </p>

            <div>
              <p className="font-heading font-bold text-sm tracking-widest text-muted-foreground uppercase mb-4">
                Beyond Code
              </p>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={hobby.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border hover:border-secondary/40 transition-all duration-300 cursor-default group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{hobby.icon}</span>
                    <span className="text-sm font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {hobby.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
