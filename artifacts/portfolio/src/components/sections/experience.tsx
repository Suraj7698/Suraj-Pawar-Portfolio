import { motion } from "framer-motion";
import { GraduationCap, Code2, BookOpen, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    type: "education",
    title: "BSc Computer Science",
    org: "Mumbai University",
    period: "2021 — 2024",
    location: "Mumbai, Maharashtra",
    description: "Completed my degree with a focus on web technologies, data structures, algorithms, and software engineering. Built several academic projects using modern JavaScript frameworks.",
    tags: ["Data Structures", "Algorithms", "DBMS", "Web Tech", "OS"],
    color: "primary",
  },
  {
    icon: Code2,
    type: "project",
    title: "Freelance Web Projects",
    org: "Self-Employed",
    period: "2023 — Present",
    location: "Thane, Maharashtra",
    description: "Designed and developed websites for local businesses and friends — gaining real-world experience in client communication, deadline management, and deploying production applications.",
    tags: ["React", "Node.js", "MongoDB", "Deployment", "Client Comms"],
    color: "secondary",
  },
  {
    icon: BookOpen,
    type: "learning",
    title: "Self-Directed Learning",
    org: "Online Platforms",
    period: "2022 — Present",
    location: "Remote",
    description: "Continuously upskilling through platforms like freeCodeCamp, The Odin Project, and official documentation. Dedicated 500+ hours to mastering the MERN stack and modern frontend tooling.",
    tags: ["freeCodeCamp", "TypeScript", "React", "System Design"],
    color: "accent",
  },
  {
    icon: Award,
    type: "achievement",
    title: "Higher Secondary Certificate (HSC)",
    org: "Maharashtra State Board",
    period: "2021",
    location: "Thane, Maharashtra",
    description: "Completed HSC with Computer Science as a core subject. Developed early interest in programming through C++ and basic web development courses.",
    tags: ["C++", "Computer Science", "Mathematics"],
    color: "primary",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 border-primary/30 text-primary",
  secondary: "bg-secondary/10 border-secondary/30 text-secondary",
  accent: "bg-accent/10 border-accent/30 text-accent",
};

const dotColorMap: Record<string, string> = {
  primary: "bg-primary shadow-primary/50",
  secondary: "bg-secondary shadow-secondary/50",
  accent: "bg-accent shadow-accent/50",
};

export function Experience() {
  return (
    <section id="experience" className="py-28 relative bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">// 04. experience</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Journey So Far
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20"
                data-testid={`timeline-item-${i}`}
              >
                <div className={`absolute left-4 top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg ${colorMap[item.color]}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div
                  className={`absolute left-[30px] top-10 w-2 h-2 rounded-full shadow-[0_0_8px_2px] ${dotColorMap[item.color]}`}
                  style={{ boxShadow: undefined }}
                />

                <div className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/3 to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-primary font-medium text-sm">{item.org}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-mono text-muted-foreground">{item.period}</p>
                        <p className="text-xs text-muted-foreground">{item.location}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-mono border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
