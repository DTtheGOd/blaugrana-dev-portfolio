import IslandNavbar from "@/components/IslandNavbar";

export default function NirmaanUIProject() {
  const techStack = ["React", "Node.js", "MongoDB", "React Live", "Cloudinary"];
  
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white bg-barca-navy text-foreground">
      <div className="relative z-10">
        <IslandNavbar backLink="/projects" backLabel="Projects" />
      </div>
      
      <main className="relative pt-32 pb-24 px-6 md:px-12 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Image + Tech Stack */}
          <div className="flex flex-col gap-16 lg:sticky lg:top-32">
            <div className="w-full aspect-[16/10] bg-[#0A0E1A] rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-6 relative shadow-2xl">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
              <img 
                src="/nirmaanui-image1.png" 
                alt="Nirmaan UI Preview" 
                className="w-full h-full object-contain relative z-10 rounded-lg drop-shadow-2xl" 
              />
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-3xl text-white/90">Technical Highlights</h3>
              <ul className="flex flex-col gap-4">
                {techStack.map(tech => (
                  <li key={tech} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="font-body text-lg text-white/70">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Title + Details */}
          <div className="flex flex-col gap-10 lg:pt-4">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-white/20" />
                <span className="font-mono text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Project Detail
                </span>
              </div>
              <h1 className="font-heading text-6xl md:text-8xl leading-[0.9] font-light text-foreground tracking-tight">
                Nirmaan UI
              </h1>
            </div>

            <div className="flex flex-col gap-10 mt-4">
              <p className="font-body text-xl font-light text-white/60 leading-[1.8]">
                A comprehensive, export-ready React component library and style guide engineered specifically for developers to accelerate their workflow during fast-paced events like hackathons. Nirmaan UI focuses on delivering highly modular, accessible, and customizable UI patterns that eliminate boilerplate code.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <FeatureItem text="Built a hackathon-ready library of 20+ reusable React components with instant copy/export for rapid prototyping" />
                <FeatureItem text="Created a personal component vault to save, organize, and reuse components; one-click private → public publishing so anyone can discover and reuse" />
                <FeatureItem text="Live preview + props playground with secure sandboxing (react-live + sanitization) and light/dark themes for real-time testing" />
                <FeatureItem text="Implemented REST APIs with JWT auth: component CRUD, search/sort/filter, and engagement counters (likes, saves, views, copies)" />
                <FeatureItem text="Added a dual-format export pipeline (styled + generic Tailwind) with one-click ZIP packaging and README for portability" />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2.5 flex-shrink-0 group-hover:bg-primary transition-colors" />
      <p className="font-body text-lg font-light text-white/70 leading-[1.7]">{text}</p>
    </div>
  );
}
