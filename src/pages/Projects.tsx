import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-barca-navy text-foreground overflow-x-hidden relative">
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />

        <main className="pt-24 pb-12 flex flex-col flex-grow justify-center">
          <div className="text-center mb-0 mt-4 px-6">
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
