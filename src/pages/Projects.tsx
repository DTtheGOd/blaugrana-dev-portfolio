import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";

const Projects = () => {
  return (
    <div className="min-h-screen bg-barca-navy text-foreground overflow-x-hidden relative">
      <div className="relative z-10">
        <Navbar />

        <main className="pt-32">
          <div className="text-center mb-2 mt-8 px-6">
            <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-accent mb-2 italic tracking-wide uppercase">
              Season Highlights
            </h2>
            <p className="text-muted-foreground font-heading text-sm tracking-[0.3em] uppercase">
              — Selected Works —
            </p>
          </div>

          <ProjectCarousel />
        </main>
      </div>
    </div>
  );
};

export default Projects;
