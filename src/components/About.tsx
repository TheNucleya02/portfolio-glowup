import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            My Philosophy
          </h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-background p-8 md:p-12 nm-extruded">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
            From fascination to passion — building intelligent systems that matter
          </h3>

          <div className="rounded-3xl bg-background p-6 nm-inset mb-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Hi, I'm Aman, a 21-year-old Computer Science & Engineering student
              from the{" "}
              <span className="font-semibold text-primary">
                Indian Institute of Information Technology UNA
              </span>
              , Himachal Pradesh, currently in my third year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-muted-foreground leading-loose">
              My journey in tech began with a fascination for programming — the
              idea that with enough logic and creativity, I can make a computer
              do almost anything.
            </p>
            <p className="text-muted-foreground leading-loose">
              Over the years, this curiosity has evolved into a strong passion
              for{" "}
              <span className="text-foreground font-medium">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="text-foreground font-medium">Data Science</span>,
              and{" "}
              <span className="text-foreground font-medium">
                Backend Development
              </span>
              . I've built projects combining intelligent systems with practical
              applications — AI agents, a Workout Assistant, and data-driven web
              apps using FastAPI and Flask.
            </p>
            <p className="text-muted-foreground leading-loose">
              My technical toolkit includes Python, C++, SQL, FastAPI, Django,
              and LangChain. Beyond development, I enjoy solving LeetCode
              problems and exploring Data Structures and Algorithms, which
              strengthen my problem-solving mindset.
            </p>
            <p className="text-muted-foreground leading-loose italic rounded-2xl nm-inset-sm p-5">
              I'm a firm believer that passion and determination can transform
              ideas into impactful solutions, and I strive to continually learn,
              build, and grow with every project I undertake.
            </p>
          </div>

          <div className="pt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-2xl bg-background px-6 py-3 text-sm font-semibold text-primary nm-extruded-sm nm-extruded-hover transition-all"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-10">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="rounded-xl border-0 bg-background px-4 py-2 text-sm text-muted-foreground nm-extruded-sm nm-extruded-hover hover:text-primary transition-all cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
