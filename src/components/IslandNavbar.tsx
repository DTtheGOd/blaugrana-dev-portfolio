import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/DT_logo-removebg-preview.png";

interface IslandNavbarProps {
  backLink?: string;
  backLabel?: string;
}

const IslandNavbar = ({ backLink = "/", backLabel = "Home" }: IslandNavbarProps) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-6 py-3 bg-[#0A0E1A]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="DT Logo" className="h-8 w-auto object-contain brightness-125 contrast-125 group-hover:scale-105 transition-transform" />
            <span className="font-heading text-xl text-white font-medium tracking-wide">Dhruv Tiwari</span>
          </Link>
          <Link 
            to={backLink}
            className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 text-sm font-body text-white/80 hover:text-white flex items-center gap-2"
          >
            <span>&larr;</span> {backLabel}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default IslandNavbar;
