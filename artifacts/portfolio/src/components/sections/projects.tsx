import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A full-stack admin dashboard for an online store. Features real-time sales analytics, product management, order tracking, and inventory control with a clean, data-dense interface.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: true,
    gradient: "from-violet-500/20 to-cyan-500/20",
    accent: "violet",
  },
  {
    title: "Task Manager App",
    description: "A productivity app with drag-and-drop Kanban boards, real-time collaboration features, priority tagging, and deadline tracking built with a responsive mobile-first design.",
    tags: ["React", "TypeScript", "MongoDB", "Express", "CSS Modules"],
    github: "#",
    live: "#",
    featured: true,
    gradient: "from-cyan-500/20 to-emerald-500/20",
    accent: "cyan",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather app consuming the OpenWeather API, featuring 7-day forecasts, location-based weather, animated weather cards, and dynamic backgrounds based on conditions.",
    tags: ["React", "REST API", "CSS3", "JavaScript"],
    github: "#",
    live: "#",
    featured: false,
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "blue",
  },
  {
    title: "Portfolio CMS",
    description: "A headless CMS for managing portfolio content with a React admin panel, REST API backend, image upload support, and Markdown editor for project descriptions.",
    tags: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    github: "#",
    live: "#",
    featured: false,
    gradient: "from-pink-500/20 to-orange-500/20",
    accent: "pink",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">// 03. projects</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Things I've Built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
              data-testid={`project-card-${i}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border group-hover:border-primary/30 transition-all duration-300 flex flex-col">
                {project.featured && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4 w-fit">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Featured
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-mono border border-border"
                      data-testid={`project-tag-${tag.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`project-github-${i}`}
                    aria-label={`GitHub for ${project.title}`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`project-live-${i}`}
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <div className="ml-auto">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-muted-foreground/30 hover:border-primary/50 hover:bg-primary/5 group" asChild>
            <a href="#" data-testid="button-view-all-projects">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
