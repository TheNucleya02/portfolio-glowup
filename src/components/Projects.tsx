import { ExternalLink, Github } from "lucide-react";
import workoutImg from "@/assets/workout.jpg";
import docImg from "@/assets/doc.jpg";
import cryptoImg from "@/assets/crypto.jpg";
import complaintImg from "@/assets/complaint-system.jpg";
import seekShopImg from "@/assets/seek-shop.jpg";
import drinkImg from "@/assets/drink-discover.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Fitness App",
      description:
        "AI-driven coaching platform generating personalized workout and nutrition plans via LangGraph-orchestrated Gemini agents, with JWT auth and Celery async processing.",
      tech: ["LangGraph", "Gemini", "Celery"],
      github: "https://github.com/TheNucleya02/AI-Workout-application.git",
      demo: "#",
      image: workoutImg,
    },
    {
      title: "Complaint Mgmt System",
      description:
        "Automated student-complaint triage system using DistilBERT and TF-IDF to classify categories and detect urgency in real time.",
      tech: ["DistilBERT", "NLP", "Python"],
      github: "https://github.com/TheNucleya02",
      demo: "#",
      image: complaintImg,
    },
    {
      title: "Seek Shop",
      description:
        "Concierge-style e-commerce chatbot using RAG over a FAISS vector store to deliver semantic product recommendations from the Flipkart dataset.",
      tech: ["RAG", "FAISS", "Gemini"],
      github: "https://github.com/TheNucleya02",
      demo: "#",
      image: seekShopImg,
    },
    {
      title: "DocIntel",
      description:
        "Production-grade RAG document system turning PDFs into a conversational streaming knowledge base with multi-LLM fallback (Mistral/Gemini).",
      tech: ["RAG", "Mistral", "LLM Fallback"],
      github: "https://github.com/TheNucleya02/Document-intelligence-system.git",
      demo: "#",
      image: docImg,
    },
    {
      title: "Momentum Crypto Suite",
      description:
        "AI-powered crypto tracker using a CrewAI multi-agent system to generate real-time market summaries, news analysis, and sentiment indicators.",
      tech: ["CrewAI", "Sentiment AI", "Agents"],
      github: "https://github.com/TheNucleya02/crypto_assistant_backend.git",
      demo: "#",
      image: cryptoImg,
    },
    {
      title: "Drink Discover",
      description:
        "Django cocktail discovery app with a hybrid data architecture merging live API results with local favorites, backed by a full CI/CD Docker pipeline.",
      tech: ["Django", "Docker", "CI/CD"],
      github: "https://github.com/TheNucleya02",
      demo: "#",
      image: drinkImg,
    },
  ];


  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground text-lg">
            Diverse systems engineered for intelligence, scalability, and
            performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] bg-background p-5 nm-extruded nm-extruded-hover transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-44 rounded-3xl overflow-hidden nm-inset-deep">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mt-6 mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-background px-3 py-1.5 text-xs text-muted-foreground nm-inset-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-background px-4 py-3 text-sm font-medium text-foreground nm-extruded-sm nm-pressable hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold nm-primary transition-all"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
