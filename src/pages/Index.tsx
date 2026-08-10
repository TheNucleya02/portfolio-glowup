import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

import { Certifications } from "@/components/Certifications";
import { ProfilesResume } from "@/components/ProfilesResume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      
      <Certifications />
      <ProfilesResume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
