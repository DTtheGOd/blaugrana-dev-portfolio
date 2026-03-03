import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, GraduationCap, Users } from "lucide-react";

const stats = [
  { icon: Trophy, label: "Runners Up", value: "Code Housie", color: "text-accent" },
  { icon: Award, label: "Finalist", value: "Bit N Build", color: "text-secondary" },
  { icon: GraduationCap, label: "CGPA", value: "8.2", color: "text-primary" },
  { icon: Users, label: "Marketing Head", value: "CSI & Enactus", color: "text-accent" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 relative bg-diagonal-stripes">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mb-2">
            ACHIEVEMENTS
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card glass-card-hover rounded-xl p-6 text-center transition-all duration-500 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-muted/50 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={28} />
              </div>
              <p className="font-heading font-black text-2xl text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-heading text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-card rounded-xl p-6 sm:p-8 max-w-2xl mx-auto"
        >
          <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full mb-6" />
          <h3 className="font-heading font-bold text-accent text-sm tracking-widest uppercase mb-3">Education</h3>
          <p className="text-foreground font-heading font-bold text-lg">
            B.Tech CSE — SPIT
          </p>
          <p className="text-muted-foreground text-sm">
            CGPA: 8.2 &bull; Minors in UI/UX
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
