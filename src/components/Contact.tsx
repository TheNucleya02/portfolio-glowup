import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowRight, Download, Code2 } from "lucide-react";
import { toast } from "sonner";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/TheNucleya02", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aman-jha-523973280/",
      label: "LinkedIn",
    },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Mail, url: "mailto:kr.amanjha02@gmail.com", label: "Email" },
  ];

  const fieldClass =
    "w-full rounded-2xl bg-background px-6 py-4 text-foreground placeholder:text-muted-foreground/70 nm-inset outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Let's Build Something Intelligent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project involving complex data or needing a robust technical
            foundation? I'm currently accepting new collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-background p-8 nm-extruded space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className={fieldClass}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold nm-primary transition-all duration-300 hover:-translate-y-1 active:translate-y-0.5 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="flex flex-col gap-8">
            <div className="rounded-[2rem] bg-background p-8 nm-extruded">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Connect with me
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Feel free to reach out through any of these platforms. I'm
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="h-12 w-12 rounded-2xl bg-background flex items-center justify-center text-muted-foreground nm-extruded-sm nm-extruded-hover nm-pressable hover:text-primary transition-all"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-background p-8 nm-inset">
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                Coding Profiles
              </h3>
              <p className="text-muted-foreground mb-6">
                View my solutions, ratings, and activity across LeetCode,
                Codeforces, GeeksforGeeks, and more.
              </p>
              <a
                href="https://codolio.com/profile/TheNucleya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-background px-6 py-4 font-semibold text-foreground nm-extruded-sm nm-extruded-hover nm-pressable hover:text-primary transition-all"
              >
                <Code2 size={18} />
                View on Codolio
              </a>
            </div>

            <div className="rounded-[2rem] bg-background p-8 nm-inset">
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                Download Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Get my complete professional profile and experience details.
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
      </div>
    </section>
  );
};
