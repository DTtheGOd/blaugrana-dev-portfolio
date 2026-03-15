import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StadiumTunnel from "@/components/ui/StadiumTunnel";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <StadiumTunnel />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />

        <TechStackSection />

      </div>
    </div>
  );
};

export default Index;
