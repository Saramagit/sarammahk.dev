import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src={profilePhoto} 
              alt="Sarama Shehmir" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary-foreground shadow-elegant"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Sarama Shehmir
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4">
            PhD Candidate | AI Researcher | ML Engineer
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Specializing in Recommender Systems, Deep Learning, Generative AI, and Transformer-Based Models
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground hover:text-secondary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
