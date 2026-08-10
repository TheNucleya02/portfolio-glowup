import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setIsMobileMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between rounded-3xl bg-background/90 backdrop-blur-md px-5 py-3 nm-extruded">
          <button
            onClick={() => scrollToSection("home")}
            className="h-11 w-11 rounded-2xl bg-background nm-extruded-sm nm-extruded-hover font-display text-lg font-extrabold text-primary"
          >
            AJ
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 rounded-2xl bg-background px-2 py-1.5 nm-inset-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:bg-background hover:nm-extruded-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative h-11 w-11 rounded-2xl bg-background nm-extruded-sm nm-pressable flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-11 w-11 rounded-2xl bg-background nm-extruded-sm nm-pressable flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-3xl bg-background p-3 nm-extruded animate-fade-in">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-2xl text-foreground nm-inset-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
