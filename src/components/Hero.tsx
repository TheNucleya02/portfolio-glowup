import { Github, Linkedin, Instagram, Quote, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile-new.jpeg";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Building intelligent systems that matter";

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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Github, url: "https://github.com/TheNucleya02", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/amanjha02", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/_aman_jha/", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <p className="inline-block rounded-full bg-background px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary nm-inset-sm mb-8">
              Hello, I'm Aman
            </p>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-foreground mb-10">
              Engineering Ideas Into Systems
            </h1>

            {/* Refined quote */}
            <div className="max-w-lg mb-10">
              <div className="quote-line" />
              <div className="py-7 flex items-start gap-4">
                <Quote className="w-6 h-6 shrink-0 text-primary/70 mt-1" />
                <div>
                  <p className="font-display text-2xl md:text-3xl font-semibold italic text-foreground leading-snug">
                    “Creativity is just connecting things.”
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="h-px w-8 bg-primary/50" />
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Steve Jobs
                    </span>
                  </div>
                </div>
              </div>
              <div className="quote-line" />
            </div>

            <p className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4 min-h-[2.5rem]">
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-10">
              I believe software is more than code—it's the architecture that
              transforms ideas into reliable systems. My work lives at the
              intersection of AI, backend engineering, and scalable
              infrastructure.
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold nm-primary transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-2xl bg-background px-8 py-4 font-semibold text-foreground nm-extruded nm-extruded-hover nm-pressable transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-4 mt-12">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-12 w-12 rounded-2xl bg-background flex items-center justify-center text-muted-foreground nm-extruded-sm nm-extruded-hover nm-pressable hover:text-primary transition-all"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-[3rem] bg-background p-6 nm-extruded animate-float">
              <div className="w-64 h-80 md:w-80 md:h-[26rem] rounded-[2.25rem] overflow-hidden nm-inset-deep">
                <img
                  src={profileImg}
                  alt="Portrait of Aman Jha"
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
