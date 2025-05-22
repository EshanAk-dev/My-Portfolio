import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="hidden sm:inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full border border-primary/20 opacity-0 animate-fade-in">
                <span className="text-primary font-medium text-xs sm:text-sm">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="mt-6 sm:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="opacity-0 animate-fade-in-delay-1 block">
                  Hi, I'm
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2 block">
                  Eshan
                </span>
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-3 block">
                  Akalanka
                </span>
              </h1>

              <div className="space-y-2 sm:space-y-3 opacity-0 animate-fade-in-delay-4">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/90">
                  Full-Stack Developer
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                  Crafting seamless digital experiences with modern
                  technologies. I specialize in building scalable web and mobile
                  applications that deliver exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4 px-4 sm:px-0">
              <a
                href="#projects"
                className="group cosmic-button flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8"
              >
                View My Work
                <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm text-sm sm:text-base"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4">
              <a
                href="mailto:eshanwijesinghe01@gmail.com"
                className="p-2.5 sm:p-3 rounded-full bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/EshanAk-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/eshan-akalanka-319ab026b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2 mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-subtle"></div>
              <div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-purple-500/20 rounded-full blur-xl sm:blur-2xl animate-pulse-subtle"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Photo container */}
              <div className="relative z-10 group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-primary/20 shadow-xl sm:shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm">
                  <img
                    src="/profile.jpg"
                    alt="Eshan Akalanka - Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-card rounded-full flex items-center justify-center shadow-lg animate-float border border-border">
                  <span className="text-lg sm:text-xl lg:text-2xl">⚛️</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-card rounded-full flex items-center justify-center shadow-lg animate-float border border-border"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-lg sm:text-xl lg:text-2xl">🚀</span>
                </div>
                <div
                  className="absolute top-1/4 -left-6 sm:-left-8 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-card rounded-full flex items-center justify-center shadow-lg animate-float border border-border"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-base sm:text-lg lg:text-xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce hidden sm:flex">
        <span className="text-xs sm:text-sm text-foreground/60 mb-2">
          Scroll to explore
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/3 right-8 sm:right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
