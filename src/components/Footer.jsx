import {
  ArrowUp,
  Heart,
  Code,
  Coffee,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/EshanAk-dev",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/eshan-akalanka-319ab026b",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:eshanwijesinghe01@gmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-card via-card to-secondary/20 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div
        className="absolute bottom-0 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse-subtle"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl text-left sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  EshanAk-Dev
                </h3>
                <p className="text-sm text-left sm:text-base text-foreground/70 leading-relaxed max-w-md">
                  Full-Stack Developer passionate about creating exceptional
                  digital experiences. Specializing in modern web technologies
                  and scalable solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kurunegala, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:eshanwijesinghe01@gmail.com"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    eshanwijesinghe01@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2.5 sm:p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links & Technologies - side by side on mobile */}
            <div className="flex flex-row gap-6 sm:gap-0">
              {/* Quick Links */}
              <div className="flex-1 space-y-4 lg:mr-50 sm:space-y-6">
                <h4 className="text-base text-left sm:text-lg font-semibold text-foreground whitespace-nowrap">
                  Quick Links
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-sm sm:text-base text-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex-1 space-y-4 sm:space-y-6">
                <h4 className="text-base text-left sm:text-lg font-semibold text-foreground">
                  Technologies
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {["React", "Node.js", "Flutter", "MongoDB"].map(
                    (tech, index) => (
                      <li key={index}>
                        <span className="flex items-center gap-2 text-sm sm:text-base text-foreground/70">
                          <Code className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70" />
                          {tech}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                <span>
                  &copy; {currentYear} EshanAk-Dev. Alrights Reserved.
                </span>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 text-primary transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Back to top"
              >
                <span className="text-xs sm:text-sm font-medium">
                  Back to top
                </span>
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Additional Links */}
            <div className="mt-4 pt-4 border-t border-border/30 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-foreground/50">
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Privacy Policy
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="w-px h-3 bg-border/50"></span>
              <a
                href="#"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Terms of Service
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 left-8 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
      <div
        className="absolute top-8 right-12 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-12 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </footer>
  );
};
