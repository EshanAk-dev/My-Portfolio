import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 glass-effect border-b border-border/20 shadow-2xl"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="group text-xl font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105"
          href="#hero"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 group-hover:border-primary/50 transition-all duration-300">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <span className="bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
            EshanAk-Dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 bg-card/30 backdrop-blur-md rounded-full px-2 py-2 border border-border/50">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-primary-foreground bg-primary shadow-lg"
                    : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                )}
              >
                {item.name}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-glow opacity-30"></div>
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-3 rounded-xl glass-effect border border-border/50 hover:border-primary/30 transition-all duration-300 group"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-5 h-5">
            <Menu
              className={cn(
                "absolute inset-0 transition-all duration-300 group-hover:text-primary",
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              )}
            />
            <X
              className={cn(
                "absolute inset-0 transition-all duration-300 group-hover:text-primary",
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-0"
              )}
            />
          </div>
        </button>

        {/* Mobile Drawer Overlay*/}
        <div
          className={cn(
            "fixed inset-0 md:hidden transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto z-[60]"
              : "opacity-0 pointer-events-none z-[60]"
          )}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer*/}
          <div
            className={cn(
              "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card/95 backdrop-blur-xl border-l border-border/50 shadow-2xl transition-transform duration-300 ease-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30 bg-card/80">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
                  Menu
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-foreground/70 group-hover:text-primary" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-6 bg-card/50">
              <div className="space-y-2">
                {navItems.map((item, key) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={key}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 group",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "text-foreground/80 hover:text-foreground hover:bg-primary/10 hover:shadow-md"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: `translateX(${isMenuOpen ? 0 : 20}px)`,
                        transitionDelay: `${key * 80}ms`,
                      }}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                      )}
                      {!isActive && (
                        <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></div>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="flex items-center justify-center space-x-2 opacity-60">
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                  <div
                    className="w-1 h-1 bg-purple-500/50 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
