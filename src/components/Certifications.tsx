import { ExternalLink } from "lucide-react";


export const Certifications = () => {
  const certifications = [
    {
      title: "Beginning C++ Programming - From Beginner to Beyond",
      url: "https://www.udemy.com/certificate/UC-fd4bd272-459f-4bc7-9ff7-64ccb7336af2/",
    },
    {
      title: "DSA By Abdul Bari",
      url: "https://www.udemy.com/certificate/UC-126fc37e-db41-46c5-87bd-0bb2b2bbce61/",
    },
    {
      title: "AWS Technical Essentials Certificate - AWS",
      url: "",
    },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional achievements and credentials
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-3xl bg-background p-6 nm-extruded nm-extruded-hover transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-foreground font-medium flex-1">
                {cert.title}
              </p>
              <ExternalLink
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors ml-4"
              />
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};
