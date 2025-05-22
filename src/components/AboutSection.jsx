import { Code, GraduationCap, User, Star, Award, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full border border-primary/20">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-primary font-medium text-xs sm:text-sm">
                  Who am I?
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Full-Stack Developer & Student
              </h3>

              <div className="space-y-3 sm:space-y-4 text-foreground/80 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  I'm an undergraduate software engineering student and a
                  passionate full-stack developer with a strong foundation in
                  both web and mobile development. I enjoy crafting robust,
                  scalable applications that deliver smooth and intuitive user
                  experiences.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  My work spans across modern technologies like React, Node.js,
                  MongoDB, Flutter, and Kotlin — allowing me to bring ideas to
                  life across platforms. I'm always exploring the latest trends
                  in tech, from cloud integrations to AI-powered features, to
                  stay ahead of the curve and build future-ready solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/70 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="cosmic-button text-center text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8"
              >
                Get in Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-center backdrop-blur-sm text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="group glass-effect p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8 lg:-translate-y-10 lg:translate-x-10"></div>
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex-shrink-0">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                    Clean Code
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    I build full-stack applications using modern tools like
                    React, Node.js, and Flutter — always writing clean,
                    maintainable, and efficient code.
                  </p>
                </div>
              </div>
            </div>

            <div className="group glass-effect p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl card-hover relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500/10 rounded-full translate-y-5 -translate-x-5 sm:translate-y-6 sm:-translate-x-6 lg:translate-y-8 lg:-translate-x-8"></div>
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/20 flex-shrink-0">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                    User Experience
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    I design smooth, responsive interfaces that focus on
                    usability and user satisfaction across web and mobile
                    platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="group glass-effect p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl card-hover relative overflow-hidden">
              <div className="absolute top-1/2 right-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500/10 rounded-full translate-x-4 sm:translate-x-5 lg:translate-x-6"></div>
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/20 flex-shrink-0">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                    Continuous Learning
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    As a software engineering student, I'm constantly learning
                    core CS concepts while building real-world projects
                    alongside my studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills/Interests */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full border border-primary/20 mb-6 sm:mb-8">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary font-medium text-xs sm:text-sm">
              What drives me
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="p-4 sm:p-6 rounded-xl bg-card/30 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🚀</div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                Innovation
              </h4>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Always exploring new technologies and pushing boundaries
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-card/30 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                Problem Solving
              </h4>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Finding elegant solutions to complex challenges
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-card/30 border border-border/50 backdrop-blur-sm sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🤝</div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                Collaboration
              </h4>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Working with teams to create amazing products
              </p>
            </div>
          </div>
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

export default AboutSection;
