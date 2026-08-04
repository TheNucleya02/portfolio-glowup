export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Scikit-Learn", "PyTorch", "Flask", "FastAPI", "LangChain", "LangGraph"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "MCP", "Hugging Face", "Kaggle"],
    },
    {
      title: "Data & Analytics",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SQLite", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl bg-background p-8 nm-extruded nm-extruded-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-bold text-primary mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl bg-background px-4 py-2 text-sm text-muted-foreground nm-inset-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
