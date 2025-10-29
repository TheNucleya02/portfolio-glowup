import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/TheNucleya02",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aman-jha-523973280/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      url: "#",
      label: "Twitter",
    },
    {
      icon: Mail,
      url: "mailto:kr.amanjha02@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                rows={6}
                className="bg-background resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Connect with me
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Feel free to reach out through any of these platforms. I'm
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    <link.icon size={20} />
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Download Resume
              </h3>
              <p className="text-muted-foreground mb-4">
                Get my complete professional profile and experience details.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ateLAOpS6ZmS-W-G0qHSqQJ8bI7L0op9/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
