import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target, Coffee, Github, Code2 } from "lucide-react";

const funFacts = [
  { icon: Coffee, label: "Coffee lover", desc: "Fueled by caffeine and curiosity" },
  { icon: Code2, label: "Night owl coder", desc: "Best ideas hit after midnight" },
  { icon: Github, label: "Open source curious", desc: "Always exploring new repos" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">// 01. about me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Story So Far
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate web developer who recently graduated with a BSc in Computer Science from Mumbai University. Based out of Thane, Maharashtra, I'm on a mission to write code that doesn't just work — it performs, scales, and looks stunning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Every project I touch is an opportunity to sharpen my craft. I care deeply about the intersection of design and engineering — where clean architecture meets pixel-perfect interfaces. My goal is to contribute to meaningful projects, continuously improve my skills, and grow as a professional web developer.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Location", value: "Thane, Maharashtra, India" },
                { icon: GraduationCap, label: "Education", value: "BSc Computer Science — Mumbai University, 2024" },
                { icon: Target, label: "Goal", value: "Seeking opportunities to learn, grow, and contribute as a Web Developer" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4" data-testid={`about-${label.toLowerCase()}`}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-6">// fun facts</p>
            {funFacts.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
                data-testid={`about-fact-${i}`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{label}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 p-6 rounded-xl border border-secondary/30 bg-secondary/5"
            >
              <p className="font-mono text-secondary text-sm mb-1">const suraj = &#123;</p>
              <p className="font-mono text-muted-foreground text-sm pl-4">available: <span className="text-green-400">true</span>,</p>
              <p className="font-mono text-muted-foreground text-sm pl-4">location: <span className="text-yellow-400">"Thane, India"</span>,</p>
              <p className="font-mono text-muted-foreground text-sm pl-4">openTo: <span className="text-yellow-400">"Frontend & Web Developer roles"</span></p>
              <p className="font-mono text-secondary text-sm">&#125;</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
