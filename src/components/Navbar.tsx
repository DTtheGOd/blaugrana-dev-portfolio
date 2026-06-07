import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/DT_logo-removebg-preview.png";

const navLinks = [
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-3 bg-[#0A0E1A]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
      >
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="DT Logo" className="h-8 w-auto object-contain brightness-125 contrast-125 group-hover:scale-105 transition-transform" />
          <span className="font-heading text-xl text-white font-medium tracking-wide">Dhruv Tiwari</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-body text-xs font-normal uppercase tracking-[0.12em] transition-colors relative group ${location.pathname === link.href || (link.href.startsWith("/#") && location.pathname === "/" && location.hash === link.href.substring(1))
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0A0E1A]/95 backdrop-blur-xl border border-white/10 mt-2 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm font-medium uppercase tracking-[0.12em] transition-colors ${location.pathname === link.href || (link.href.startsWith("/#") && location.pathname === "/" && location.hash === link.href.substring(1))
                      ? "text-primary"
                      : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
