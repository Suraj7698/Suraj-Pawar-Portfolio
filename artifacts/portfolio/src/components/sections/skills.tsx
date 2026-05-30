import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiGit, SiHtml5, SiJavascript, SiGithub, SiFigma } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    color: "primary",
    skills: [
      { name: "HTML5", icon: SiHtml5, level: 90, color: "#E34F26" },
      { name: "CSS3", icon: SiTailwindcss, level: 85, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, level: 80, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, level: 65, color: "#3178C6" },
      { name: "React", icon: SiReact, level: 75, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 80, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    color: "secondary",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 70, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 65, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, level: 60, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    color: "accent",
    skills: [
      { name: "Git", icon: SiGit, level: 75, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 75, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, level: 55, color: "#F24E1E" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-muted/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">// 02. skills</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                {cat.title}
                <span className="h-px flex-1 bg-border" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
                    data-testid={`skill-card-${skill.name.toLowerCase().replace(/\./g, "").replace(/ /g, "-")}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <skill.icon style={{ color: skill.color }} className="text-2xl flex-shrink-0" />
                          <span className="font-semibold text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIdx * 0.1 + skillIdx * 0.05 + 0.3, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
