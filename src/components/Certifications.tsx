import { ExternalLink } from "lucide-react";


export const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Public Profile",
      url: "https://www.cloudskillsboost.google/public_profiles/d4bd12d2-80fb-43a7-ba30-536890e3e09f",
    },
    {
      title: "Advanced Python: Working with Data [LinkedIn Learning]",
      url: "https://www.linkedin.com/learning/certificates/cbaafd2959fdd9c1f7582a234173da86cd0bfed1cf7f05d66c4ffa2c9b6773f7",
    },
    {
      title: "DevOps with AWS [LinkedIn Learning]",
      url: "https://www.linkedin.com/learning/certificates/0a554bf6692410db2e6064d5fe1cdf41ad584cef0705577cd3842005ddbab24c",
    },
    {
      title: "Career Essentials in Generative AI [Microsoft & LinkedIn]",
      url: "https://www.linkedin.com/learning/certificates/cbaafd2959fdd9c1f7582a234173da86cd0bfed1cf7f05d66c4ffa2c9b6773f7",
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
