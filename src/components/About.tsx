import { Badge } from "@/components/ui/badge";

export const About = () => {
  const skills = [
    "Python",
    "Langchain",
    "Scikit-learn",
    "Pytorch",
    "SQLite",
    "FastAPI",
    "Docker",
    "AWS",
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              I enjoy building things that move from concept to code to impact
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a Computer Science student with a strong interest in
              Artificial Intelligence, Machine Learning, and Data Science.
              Constantly learning, experimenting, and building — I strive to
              grow into a developer who can make a lasting impact. My journey in
              tech has been driven by curiosity and a desire to solve complex
              problems with elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies. When I'm not coding, you
              can find me exploring new frameworks, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-bold text-primary/30">AJ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
