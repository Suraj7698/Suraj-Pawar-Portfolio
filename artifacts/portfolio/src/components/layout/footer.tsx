import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Suraj7698", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/surajpawar6621/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/surajpawar6621", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-xl font-bold font-mono tracking-tighter mb-3 block" data-testid="footer-logo">
              Suraj<span className="text-primary">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building clean, fast, and beautiful web experiences. Open to opportunities at top MNCs.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-mono">surajpawar@example.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; 2024 Suraj Pawar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="h-3 w-3 text-primary fill-primary" /> using React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
