import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StadiumTunnel from "@/components/ui/StadiumTunnel";


const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <StadiumTunnel />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />

      </div>
    </div>
  );
};

export default Index;
