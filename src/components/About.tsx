import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Skills } from "@/components/Skills";

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: Philosophy */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-10 text-foreground">
              My Philosophy
            </h2>

            <div className="rounded-[2rem] bg-background p-8 md:p-10 nm-extruded">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Hi, I'm Aman, a 22-year-old Computer Science &amp; Engineering
                student from the Indian Institute of Information Technology UNA,
                Himachal Pradesh, currently in my Final year.
              </p>

              <div className="pt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-2xl bg-background px-6 py-3 text-sm font-semibold text-primary nm-extruded-sm nm-extruded-hover transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Technical Expertise */}
          <Skills />
        </div>
      </div>
    </section>
  );
};
