import { ExternalLink, Github } from "lucide-react";
import workoutImg from "@/assets/workout.jpg";
import docImg from "@/assets/doc.jpg";
import cryptoImg from "@/assets/crypto.jpg";
import movieImg from "@/assets/movie-recommendation.jpg";
import emailImg from "@/assets/email-classifier.jpg";
import coffeeImg from "@/assets/coffee-machine.jpg";
import houseImg from "@/assets/house-price.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "AI Workout Application",
      description:
        "Designed an AI-powered fitness app to generate personalized workout and nutrition plans. Integrated FastAPI for a scalable backend and connected it to a structured database.",
      tech: ["LangGraph", "FastAPI", "SQLite", "Docker"],
      github: "https://github.com/TheNucleya02/AI-Workout-application.git",
      demo: "#",
      image: workoutImg,
    },
    {
      title: "Document Intelligence System",
      description:
        "Developed a document parsing and Q&A system capable of handling PDFs and text files. Implemented RAG (Retrieval-Augmented Generation) pipelines for precise query answering.",
      tech: ["Streamlit", "FastAPI", "Python", "ChromaDB"],
      github: "https://github.com/TheNucleya02/Document-intelligence-system.git",
      demo: "#",
      image: docImg,
    },
    {
      title: "AI Chat Assistant",
      description:
        "Built an AI assistant for cryptocurrency insights and analysis. Integrated real-time market data APIs to track and forecast crypto trends and enabled natural language querying.",
      tech: ["Python", "CrewAI", "FastAPI", "CoinDX API"],
      github: "https://github.com/TheNucleya02/crypto_assistant_backend.git",
      demo: "#",
      image: cryptoImg,
    },
    {
      title: "Movie Recommendation System",
      description:
        "A simple yet effective content-based movie recommendation system built with Python and Streamlit. It suggests movies similar to a user-selected title based on movie features and similarity scores.",
      tech: ["Streamlit", "Python", "Pandas"],
      github: "https://github.com/TheNucleya02/movie-recommendation",
      demo: "#",
      image: movieImg,
    },
    {
      title: "Email Classifier",
      description:
        "This project differentiates between spam and non-spam emails using machine learning techniques and natural language processing for accurate email classification.",
      tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
      github: "https://github.com/TheNucleya02/Email-Classifier",
      demo: "#",
      image: emailImg,
    },
    {
      title: "Coffee Machine Simulator",
      description:
        "A full-stack web application that simulates a coffee machine using Python Flask backend with Object-Oriented Programming principles.",
      tech: ["Python", "Flask", "HTML5", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/TheNucleya02/Coffee-Machine-Simulator",
      demo: "https://coffee-machine-simulator.onrender.com/",
      image: coffeeImg,
    },
    {
      title: "House Price Prediction",
      description:
        "House valuation prediction for Boston, Massachusetts in the 1970s using machine learning regression models to analyze property features and market trends.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
      github: "https://github.com/TheNucleya02/House-Price-Prediction",
      demo: "#",
      image: houseImg,
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
