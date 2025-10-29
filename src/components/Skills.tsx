import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: "Python, C++, C, HTML, CSS, JS",
    },
    {
      title: "Libraries & Frameworks",
      skills:
        "Scikit-Learn, PyTorch, Flask, FastAPI, LangChain, LangGraph",
    },
    {
      title: "Tools & Platforms",
      skills: "Git, Docker, AWS, MCP, Hugging Face, Kaggle",
    },
    {
      title: "Data & Analytics",
      skills:
        "NumPy, Pandas, Matplotlib, Seaborn, SQLite, MongoDB",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {category.skills}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
