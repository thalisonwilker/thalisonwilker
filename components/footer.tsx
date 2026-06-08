import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

const footerLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/projetos", label: "Projetos" },
  { href: "/palestras", label: "Palestras" },
  { href: "/comunidade", label: "Comunidade" },
  { href: "/laboratorio", label: "Lab" },
  { href: "/timeline", label: "Timeline" },
  { href: "/tecnologias", label: "Tecnologias" },
  { href: "/contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-foreground font-mono mb-2">
              <span className="text-primary">~/</span>thalysonwilker
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Engenheiro de Software | Especialista em Python, IA e Arquitetura de Sistemas. Belém, PA — Amazônia, Brasil.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/thalisonwilker" target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Github className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com/in/thalysonwilker" target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-mono text-muted-foreground mb-4">// navegação</h3>
            <div className="grid grid-cols-2 gap-1">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono py-0.5">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick contact */}
          <div>
            <h3 className="text-xs font-mono text-muted-foreground mb-4">// contato rápido</h3>
            <div className="space-y-2">
              <a href="mailto:thalysonwilker@gmail.com"
                className="block text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                thalysonwilker@gmail.com
              </a>
              <a href="https://linkedin.com/in/thalysonwilker" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                linkedin.com/in/thalysonwilker
              </a>
              <a href="https://github.com/thalisonwilker" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                github.com/thalisonwilker
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted-foreground text-xs flex items-center gap-1.5 font-mono">
            Feito com <Heart className="w-3 h-3 text-primary" /> e muito café em Belém, PA
          </p>
          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} Thalyson Wilker
          </p>
        </div>
      </div>
    </footer>
  )
}
