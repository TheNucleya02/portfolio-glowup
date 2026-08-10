import {
  Code2,
  Zap,
  Layers,
  BrainCircuit,
  Link,
  Database,
  Container,
  Cpu,
  Repeat,
  DatabaseZap,
  Github,
  FileSearch,
  Languages,
  Cloud,
  Boxes,
} from "lucide-react";

export const Skills = () => {
  const skills = [
    { label: "Python", icon: Code2, accent: false },
    { label: "FastAPI", icon: Zap, accent: true },
    { label: "Django", icon: Layers, accent: false },
    { label: "AI", icon: BrainCircuit, accent: true },
    { label: "LangChain", icon: Link, accent: true },
    { label: "PostgreSQL", icon: Database, accent: false },
    { label: "Docker", icon: Container, accent: false },
    { label: "Redis", icon: Cpu, accent: false },
    { label: "System Design", icon: Layers, accent: true },
    { label: "CI/CD", icon: Repeat, accent: true },
    { label: "SQL", icon: DatabaseZap, accent: false },
    { label: "Git/GitHub", icon: Github, accent: false },
    { label: "RAG", icon: FileSearch, accent: true },
    { label: "NLP", icon: Languages, accent: true },
    { label: "AWS", icon: Cloud, accent: false },
    { label: "Kubernetes", icon: Boxes, accent: false },
  ];

  return (
    <div id="skills" className="scroll-mt-28">
      <div>
        <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
          Technical Expertise
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.label}
                className="p-4 rounded-2xl nm-inset-sm flex flex-col items-center justify-center gap-2 text-center group hover:scale-105 transition-transform"
              >
                <Icon
                  className={`h-6 w-6 ${skill.accent ? "text-primary" : "text-foreground"}`}
                />
                <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">
                  {skill.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
