import Navbar from "@/components/Navbar";

export default function ChromaGenProject() {
  const techStack = ["React", "Flask", "Google Gemini", "FAISS", "Python PIL", "WCAG Analysis"];
  
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white bg-barca-navy text-foreground">
      <div className="relative z-10">
        <Navbar />
      </div>
      
      <main className="relative pt-32 pb-24 px-6 md:px-12 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Image + Tech Stack */}
          <div className="flex flex-col gap-16 lg:sticky lg:top-32">
            <div className="w-full aspect-[16/10] bg-[#0A0E1A] rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-6 relative shadow-2xl">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
              <img 
                src="/Chroma-gen.png" 
                alt="ChromaGen Preview" 
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
                ChromaGen
              </h1>
            </div>

            <div className="flex flex-col gap-10 mt-4">
              <p className="font-body text-xl font-light text-white/60 leading-[1.8]">
                An advanced, full-stack AI color palette generator. Built to assist designers and developers in creating accessible, WCAG-aware color systems by combining K-Means image seeding, Google Gemini generation, and RAG-based context retrieval.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <FeatureItem text="Built a full-stack AI color palette generator (Flask + React). Integrated Google Gemini to return 5-role, WCAG-aware palettes (primary/secondary/accent/background/text)" />
                <FeatureItem text="Developed a RAG pipeline (SentenceTransformers + FAISS) retrieving top-k examples to improve output quality" />
                <FeatureItem text="Implemented image seeding with K-Means + PIL to extract dominant, well-lit colors that guide generation" />
                <FeatureItem text="Shipped color-blindness preview (protanopia/deuteranopia/tritanopia) + WCAG AA contrast checks and export (CSS/JSON/SCSS)" />
                <FeatureItem text="Added URL → palette (brand.dev) to fetch live site colors; created a Library of 100+ prebuilt palettes" />
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
