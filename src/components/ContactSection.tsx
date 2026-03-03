import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dhruv.10052006@gmail.com",
    value: "dhruv.10052006@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/DTtheGOd",
    value: "DTtheGOd",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dhruv-tiwari",
    value: "Dhruv Tiwari",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-secondary mb-2">
            CONTACTS
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4 mx-auto" />
          <p className="text-muted-foreground mb-12 font-handwritten text-xl">
            Let's build something amazing together
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card glass-card-hover rounded-xl p-5 flex items-center gap-4 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-secondary/15 group-hover:text-secondary transition-all duration-300">
                  <social.icon size={22} />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-sm text-muted-foreground uppercase tracking-wider">
                    {social.label}
                  </p>
                  <p className="text-foreground text-sm">{social.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:dhruv.10052006@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-heading font-bold text-sm hover:brightness-110 transition-all duration-300 hover:scale-105"
            style={{ boxShadow: "0 6px 24px hsl(46 90% 49% / 0.3)" }}
          >
            <Send size={16} />
            Direct
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
