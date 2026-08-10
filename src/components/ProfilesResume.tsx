import { Code2, Download, ExternalLink } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const ProfilesResume = () => {
  return (
    <section id="profiles" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            My Profiles &amp; Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my coding activity across platforms and get my complete
            professional profile.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Coding Profiles */}
          <div className="rounded-[2rem] bg-background p-8 nm-extruded">
            <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
              Coding Profiles
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              View my solutions, ratings, and activity across LeetCode,
              Codeforces, GeeksforGeeks, and more — all in one place.
            </p>
            <a
              href="https://codolio.com/profile/TheNucleya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-background px-6 py-4 font-semibold text-foreground nm-extruded-sm nm-extruded-hover nm-pressable hover:text-primary transition-all"
            >
              <Code2 size={18} />
              View on Codolio
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Download Resume */}
          <div className="rounded-[2rem] bg-background p-8 nm-inset">
            <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
              Download Resume
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Get a copy of my complete professional profile and experience
              details.
            </p>
            <a
              href={resumeAsset.url}
              download="Aman-Jha-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-background px-6 py-4 font-semibold text-foreground nm-extruded-sm nm-extruded-hover nm-pressable hover:text-primary transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
