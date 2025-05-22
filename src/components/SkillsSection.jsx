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
  { name: "HTML/CSS", level: 80, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 75, category: "frontend", icon: "⚡" },
  { name: "React", level: 70, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 65, category: "frontend", icon: "🎭" },

  // backend
  { name: "Node.js", level: 70, category: "backend", icon: "🟢" },
  { name: "Express", level: 65, category: "backend", icon: "🚀" },
  { name: "Java", level: 75, category: "backend", icon: "☕" },
  { name: "Spring Boot", level: 60, category: "backend", icon: "🌱" },
  { name: "Firebase", level: 65, category: "backend", icon: "🔥" },

  // database
  { name: "MongoDB", level: 70, category: "database", icon: "🍃" },
  { name: "MySQL", level: 70, category: "database", icon: "🐬" },

  // mobile
  { name: "Flutter", level: 70, category: "mobile", icon: "📱" },
  { name: "Dart", level: 70, category: "mobile", icon: "🎯" },
  { name: "Kotlin", level: 60, category: "mobile", icon: "🤖" },

  // tools
  { name: "Git/GitHub", level: 75, category: "tools", icon: "🔧" },
  { name: "Postman", level: 65, category: "tools", icon: "📮" },
  { name: "VS Code", level: 85, category: "tools", icon: "💻" },
];



const categories = [
  { id: "all", name: "All Skills", icon: Star, color: "primary" },
  { id: "frontend", name: "Frontend", icon: Palette, color: "blue-500" },
  { id: "backend", name: "Backend", icon: Server, color: "green-500" },
  { id: "database", name: "Database", icon: Database, color: "yellow-500" },
  { id: "mobile", name: "Mobile", icon: Smartphone, color: "purple-500" },
  { id: "tools", name: "Tools", icon: Wrench, color: "orange-500" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getSkillColor = (level) => {
    if (level >= 80) return "from-green-500 to-emerald-400";
    if (level >= 60) return "from-primary to-blue-400";
    return "from-orange-500 to-yellow-400";
  };

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
            A comprehensive overview of my technical skills and expertise across
            various domains
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

        {/* Skills Grid - Updated for 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group glass-effect p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl card-hover relative overflow-hidden border border-border/50"
              style={{
                opacity: 0,
                animation: `fade-in 0.6s ease-out ${key * 0.1}s forwards`,
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/5 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8 md:-translate-y-10 md:translate-x-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

              {/* Skill Header */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                <div className="text-lg sm:text-xl md:text-2xl p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  {skill.icon}
                </div>
                <div className="text-center flex-1">
                  <h3 className="font-semibold text-xs sm:text-sm md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60 mt-1">
                    {skill.level >= 80
                      ? "Expert"
                      : skill.level >= 60
                      ? "Intermediate"
                      : "Learning"}
                  </p>
                </div>
                <div className="text-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-2 sm:h-2.5 md:h-3 bg-secondary/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${getSkillColor(
                      skill.level
                    )} transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: `${skill.level}%`,
                      animation: `grow 1.5s ease-out ${key * 0.1}s forwards`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-50"></div>
                  </div>
                </div>

                {/* Skill level indicator */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white border border-primary sm:border-2 rounded-full shadow-lg transition-all duration-1000 ease-out"
                  style={{
                    left: `calc(${skill.level}% - 4px)`,
                    animation: `slide-to-position 1.5s ease-out ${
                      key * 0.1
                    }s forwards`,
                  }}
                ></div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {skills.length}
              </div>
              <div className="text-xs sm:text-sm text-foreground/70">
                Total Skills
              </div>
            </div>
            <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">
                {skills.filter((s) => s.level >= 80).length}
              </div>
              <div className="text-xs sm:text-sm text-foreground/70">
                Expert Level
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
