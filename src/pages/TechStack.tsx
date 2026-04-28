import Navbar from "@/components/Navbar";
import TechStackSection from "@/components/TechStackSection";

const TechStack = () => {
  return (
    <div className="min-h-screen bg-barca-navy text-foreground overflow-x-hidden relative selection:bg-primary selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <TechStackSection />
        </main>
      </div>
    </div>
  );
};

export default TechStack;
