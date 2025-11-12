import { Badge } from "@/components/ui/badge";
import profileImg from "@/assets/profile-new.jpeg";

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
              From fascination to passion — building intelligent systems that matter
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi, I'm Aman, a 21-year-old Computer Science & Engineering student from the Indian Institute of Information Technology UNA, Himachal Pradesh, currently in my third year. My journey in tech began with a fascination for programming — the idea that with enough logic and creativity, I can make a computer do almost anything.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, this curiosity has evolved into a strong passion for Artificial Intelligence, Data Science, and Backend Development. I've built several projects that combine intelligent systems with practical applications — including AI agents, a Workout Assistant, and data-driven web applications using FastAPI and Flask.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My technical toolkit includes Python, C++, SQL, FastAPI, Django, and LangChain. I've refined my programming foundation through the 100 Days of Code course by Angela Yu. Beyond development, I enjoy solving LeetCode problems and exploring Data Structures and Algorithms, which help me strengthen my problem-solving mindset.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm a firm believer that passion and determination can transform ideas into impactful solutions, and I strive to continually learn, build, and grow with every project I undertake.
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
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Aman Jha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
