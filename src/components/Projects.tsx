import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI Workout Application",
      description:
        "Designed an AI-powered fitness app to generate personalized workout and nutrition plans. Integrated FastAPI for a scalable backend and connected it to a structured database.",
      tech: ["LangGraph", "FastAPI", "SQLite", "Docker"],
      github: "https://github.com/TheNucleya02/AI-Workout-application.git",
      demo: "#",
    },
    {
      title: "Document Intelligence System",
      description:
        "Developed a document parsing and Q&A system capable of handling PDFs and text files. Implemented RAG (Retrieval-Augmented Generation) pipelines for precise query answering.",
      tech: ["Streamlit", "FastAPI", "Python", "ChromaDB"],
      github: "https://github.com/TheNucleya02/Document-intelligence-system.git",
      demo: "#",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Built an AI assistant for cryptocurrency insights and analysis. Integrated real-time market data APIs to track and forecast crypto trends and enabled natural language querying.",
      tech: ["Python", "CrewAI", "FastAPI", "CoinDX API"],
      github: "https://github.com/TheNucleya02/crypto_assistant_backend.git",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                  {project.demo !== "#" && (
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
