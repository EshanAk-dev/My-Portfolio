import { useState } from "react";
import {
  Code,
  Database,
  Smartphone,
  Wrench,
  Server,
  Palette,
  Star,
  TrendingUp,
} from "lucide-react";

const skills = [
  // frontend
  { name: "HTML", category: "frontend", image: "/skills/html.png" },
  { name: "CSS", category: "frontend", image: "/skills/css.png" },
  { name: "JavaScript", category: "frontend", image: "/skills/javascript.png" },
  { name: "React", category: "frontend", image: "/skills/react.png" },
  { name: "Tailwind CSS", category: "frontend", image: "/skills/tailwind.png" },

  // backend
  { name: "Node.js", category: "backend", image: "/skills/nodejs.webp" },
  { name: "Express", category: "backend", image: "/skills/express.png" },
  { name: "Java", category: "backend", image: "/skills/java.png" },
  {
    name: "Spring Boot",
    category: "backend",
    image: "/skills/spring-boot.png",
  },
  { name: "Firebase", category: "backend", image: "/skills/firebase.png" },

  // database
  { name: "MongoDB", category: "database", image: "/skills/mongodb.png" },
  { name: "MySQL", category: "database", image: "/skills/mysql.png" },
  { name: "Oracle", category: "database", image: "/skills/oracle.png" },

  // mobile
  { name: "Flutter", category: "mobile", image: "/skills/flutter.png" },
  { name: "React Native", category: "mobile", image: "/skills/react-native.png" },
  { name: "Kotlin", category: "mobile", image: "/skills/kotlin.png" },

  // tools
  { name: "GitHub", category: "tools", image: "/skills/github.png" },
  { name: "Git", category: "tools", image: "/skills/git.png" },
  { name: "Postman", category: "tools", image: "/skills/postman.png" },
  { name: "VS Code", category: "tools", image: "/skills/vscode.png" },
];

const categories = [
  { id: "all", name: "All Skills", icon: Star },
  { id: "frontend", name: "Frontend", icon: Palette },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Database", icon: Database },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "tools", name: "Tools", icon: Wrench },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I work with across various domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 overflow-hidden text-sm sm:text-base ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass-effect border border-border/50 text-foreground/70 hover:text-foreground hover:border-primary/30"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="flex items-center gap-1 sm:gap-2 relative z-10">
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">{category.name}</span>
                  <span className="xs:hidden">
                    {category.name.split(" ")[0]}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute inset-0 bg-primary animate-glow opacity-20"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group glass-effect p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl card-hover relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{
                opacity: 0,
                animation: `fade-in 0.6s ease-out ${key * 0.1}s forwards`,
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/5 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8 md:-translate-y-10 md:translate-x-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

              {/* Skill Content */}
              <div className="flex flex-col items-center gap-3 sm:gap-4 relative z-10">
                <div className="p-3 sm:p-3.5 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/20 rounded items-center justify-center text-primary font-bold text-sm sm:text-base md:text-lg hidden">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {skills.length}
              </div>
              <div className="text-xs sm:text-sm text-foreground/70">
                Total Skills
              </div>
            </div>
            <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">
                5
              </div>
              <div className="text-xs sm:text-sm text-foreground/70">
                Categories
              </div>
            </div>
            <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">
                2+
              </div>
              <div className="text-xs sm:text-sm text-foreground/70">
                Years Learning
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/3 right-20 w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default SkillsSection;
