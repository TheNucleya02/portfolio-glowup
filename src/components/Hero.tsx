import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "AI/ML enthusiast and builder of data-driven solutions";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-float" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <p className="text-primary font-semibold text-lg mb-4 tracking-wider uppercase">
          Hello, I'm
        </p>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
          Aman
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[3rem]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="rounded-full px-8"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
