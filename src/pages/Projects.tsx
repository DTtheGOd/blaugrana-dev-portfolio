import IslandNavbar from "@/components/IslandNavbar";
import ProjectShowcase from "@/components/ProjectShowcase";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-barca-navy text-foreground overflow-x-hidden relative">
      <div className="relative z-10 flex flex-col flex-grow">
        <IslandNavbar backLink="/" backLabel="Home" />

        <main className="pt-24 pb-10 flex flex-col flex-grow justify-center">
          <div className="px-4 sm:px-12 w-full max-w-7xl mx-auto">
            <ProjectShowcase />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
