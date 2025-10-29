import { Card, CardContent } from "@/components/ui/card";
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional achievements and credentials
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50 hover:bg-secondary/50"
              onClick={() => window.open(cert.url, "_blank")}
            >
              <CardContent className="flex items-center justify-between p-6">
                <p className="text-foreground font-medium flex-1">
                  {cert.title}
                </p>
                <ExternalLink
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors ml-4"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
