import IslandNavbar from "@/components/IslandNavbar";
import TechStackSection from "@/components/TechStackSection";

const TechStack = () => {
  return (
    <div className="min-h-screen bg-barca-navy text-foreground overflow-x-hidden relative selection:bg-primary selection:text-white flex flex-col">
      <div className="relative z-10 flex-1 flex flex-col">
        <IslandNavbar backLink="/" backLabel="Home" />
        
        <main className="flex-1 flex flex-col justify-center pt-24 pb-12">
          <TechStackSection />
        </main>
      </div>
    </div>
  );
};

export default TechStack;
