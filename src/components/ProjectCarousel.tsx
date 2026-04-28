import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReferenceProjectCard from "./ReferenceProjectCard";

const projectsData = [
  {
    title: "Indian Bank App Revamp",
    category: "UI/UX",
    tech: ["Figma", "ProtoPie", "Case Study"],
    link: "/projects/indian-bank",
    image: ["/indianbanklanding.png", "/homedashboard.png"]
  },
  {
    title: "Natya AI",
    category: "AI & ML",
    tech: ["Python", "FastAPI", "React"],
    image: "/Natya-ai.png",
    link: "/projects/natya-ai"
  },
  {
    title: "ChromaGen",
    category: "Creative",
    tech: ["Flask", "Tailwind", "Gemini"],
    image: "/Chroma-gen.png",
    link: "/projects/chroma-gen"
  },
  {
    title: "Nirmaan UI",
    category: "SaaS",
    tech: ["Next.js", "Prisma", "Postgres"],
    image: "/nirmaanui-image1.png",
    link: "/projects/nirmaan-ui"
  },
];

const ProjectCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 py-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {projectsData.map((project, index) => (
            <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ReferenceProjectCard 
                  title={project.title}
                  category={project.category}
                  tech={project.tech}
                  image={(project as any).image}
                  link={(project as any).link}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="relative inset-auto translate-y-0 h-12 w-12 bg-transparent border border-white/10 hover:border-white/30 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all" />
          <CarouselNext className="relative inset-auto translate-y-0 h-12 w-12 bg-transparent border border-white/10 hover:border-white/30 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
