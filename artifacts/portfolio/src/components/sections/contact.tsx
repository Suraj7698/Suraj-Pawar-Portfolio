import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socials = [
    { icon: Github, label: "GitHub", href: "#", handle: "@surajpawar" },
    { icon: Linkedin, label: "LinkedIn", href: "#", handle: "suraj-pawar" },
    { icon: Twitter, label: "Twitter", href: "#", handle: "@surajpawar_dev" },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">// 05. contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            I'm actively looking for web developer opportunities. If you have a role that fits, I'd love to chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "surajpawar@example.com", href: "mailto:surajpawar@example.com" },
                { icon: MapPin, label: "Location", value: "Thane, Maharashtra, India", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
                  data-testid={`contact-info-${label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="font-semibold text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">// Find me online</p>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    data-testid={`contact-social-${label.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium">{label}</span>
                      <span className="text-xs text-muted-foreground font-mono">{handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-card border border-primary/30"
              >
                <CheckCircle className="h-16 w-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-card border border-border" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    data-testid="input-subject"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-base group" data-testid="button-submit-contact">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
