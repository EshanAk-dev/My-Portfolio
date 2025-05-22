import {
  ArrowRight,
  ExternalLink,
  Github,
  Folder,
  Star,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Infinite Clothing Website",
    description:
      "A full-stack MERN application for a clothing store, featuring a t-shirt customization tool that lets users design and preview their own apparel in real-time before purchase.",
    image: "/projects/project_1.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    demoUrl: "https://infinite-clothing.onrender.com/",
    github: "https://github.com/EshanAk-dev/Infinite-Clothing",
    featured: true,
  },
  {
    id: 2,
    title: "Infinite Flutter Application",
    description:
      "A cross-platform mobile app built with Flutter that allows users to browse and purchase products. It integrates with the Express.js backend from the Infinite Clothing Website for data syncing.",
    image: "/projects/project_2.png",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    demoUrl: "#",
    github: "https://github.com/EshanAk-dev/Infinite-App",
    featured: true,
  },
  {
    id: 3,
    title: "Kotlin News Reporting App",
    description:
      "A Kotlin-based Android application that enables reporters to submit and editors manage news reports. The app supports multiple user roles with Firebase Authentication and Firestore for real-time data management and role-based access.",
    image: "/projects/project_3.png",
    tags: ["Kotlin", "Firebase", "Firebase Auth", "Firebase cloud", "Android"],
    demoUrl: "#",
    github: "https://github.com/EshanAk-dev/NewsPulse",
    featured: true,
  },
];


const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity. Each project is a testament to my dedication to
            delivering high-quality software solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group relative glass-effect rounded-3xl overflow-hidden border border-border/50 card-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                opacity: 0,
                animation: `fade-in 0.8s ease-out ${key * 0.2}s forwards`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                      <Star className="w-4 h-4 text-primary fill-current" />
                    </div>
                  </div>
                )}

                {/* Quick actions */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-effect text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group/btn"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group/btn"
                    aria-label="View Code"
                  >
                    <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base md:text-lg text-left font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-left text-foreground/80 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20 shadow-sm hover:bg-primary/20 transition-all duration-300 animate-scale-in"
                      style={{
                        animationDelay: `${tagIndex * 0.1}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors duration-300 group/link"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        <span className="text-xs md:text-sm font-medium">
                          Demo
                        </span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors duration-300 group/link"
                    >
                      <Github className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium">
                        Code
                      </span>
                    </a>
                  </div>

                  <div className="text-xs text-foreground/50">
                    #{project.id}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 glass-effect p-6 rounded-2xl border border-border/50 max-w-sm mx-auto">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30">
              <Github className="w-6 h-6 text-primary" />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Want to see more?</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Check out my GitHub for more projects
              </p>
            </div>

            <a
              href="https://github.com/EshanAk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group cosmic-button flex items-center gap-2 text-sm px-6 py-2.5"
            >
              <Github className="w-4 h-4" />
              View All Projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
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
      <div
        className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary/20 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default ProjectsSection;
