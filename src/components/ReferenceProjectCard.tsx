import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ReferenceProjectCardProps {
  title: string;
  category: string;
  tech: string[];
  tech: string[];
  image?: string | string[];
  link?: string;
}

const ReferenceProjectCard = ({ title, category, tech, image, link }: ReferenceProjectCardProps) => {
  const CardContent = (
    <>
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-[12px] blur-xl -z-10" />

      <div className="flex flex-col h-full bg-[#0A0E1A] border border-white/5 rounded-[12px] overflow-hidden group-hover:border-white/15 transition-all duration-500">
        
        {/* Visual Zone */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0F1628]">
          {image ? (
            Array.isArray(image) ? (
              <div className="flex h-full w-full gap-4 p-4 justify-center items-center relative z-10 group-hover:scale-105 transition-transform duration-700">
                {image.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={`${title} view ${i + 1}`} 
                    className="w-1/2 h-full object-contain drop-shadow-2xl" 
                  />
                ))}
              </div>
            ) : (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 relative z-10" 
              />
            )
          ) : (
            /* Abstract aesthetic fallback */
            <div className="absolute inset-0 w-full h-full opacity-60">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/30 rounded-full blur-[60px]" />
              <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[40px]" />
            </div>
          )}
          {/* Gradient fade to card bg */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
        </div>

        {/* Content Zone */}
        <div className="flex flex-col flex-grow px-8 pb-8 pt-2 relative z-10">
          <span className="font-mono text-[0.65rem] tracking-[0.15em] text-[#4A5070] uppercase mb-3">
            {category}
          </span>
          
          <h3 className="font-heading font-medium text-3xl text-[#F0EDE8] mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="font-mono text-xs text-[#8A8FA8] uppercase tracking-wider mb-8">
            {tech.join(" · ")}
          </p>

          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="font-body text-sm text-[#4A5070] group-hover:text-[#F0EDE8] transition-colors">
              Explore Project
            </span>
            <ArrowUpRight 
              size={20} 
              className="text-[#4A5070] group-hover:text-[#C9A84C] transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </>
  );

  return link ? (
    <Link to={link} className="relative group w-full h-full block">
      {CardContent}
    </Link>
  ) : (
    <div className="relative group w-full h-full">
      {CardContent}
    </div>
  );
};

export default ReferenceProjectCard;
