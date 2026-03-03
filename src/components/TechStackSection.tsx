import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    items: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "FastAPI"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "ChromaDB"],
  },
  {
    title: "AI / ML",
    items: ["RAG", "SentenceTransformers", "Vector DB"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Postman", "Figma"],
  },
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
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mb-2">
            TECH STACK
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-500"
              >
                <h3 className="font-heading font-bold text-sm tracking-widest uppercase text-accent mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-heading font-semibold text-foreground/80 hover:bg-secondary/15 hover:border-secondary/30 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
