import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Star, GitFork, ArrowRight, Github } from "lucide-react"
import { Footer } from "@/components/footer"
import projectsData from "@/data/projects.json"

export const metadata: Metadata = {
  title: "Projetos — Thalyson Wilker",
  description: "Projetos de software desenvolvidos por Thalyson Wilker: APIs com FastAPI, automações com n8n, templates Django e infraestrutura com Docker e Kubernetes.",
}

const categoryColors: Record<string, string> = {
  "IA / Backend": "bg-primary/10 text-primary border-primary/30",
  "Automação": "bg-accent/10 text-accent border-accent/30",
  "Backend": "bg-green-500/10 text-green-400 border-green-500/30",
  "DevOps": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "DevTools": "bg-muted text-muted-foreground border-border",
}

export default function ProjetosPage() {
  const featured = projectsData.filter((p) => p.featured)
  const others = projectsData.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>ls -la ~/projetos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Projetos
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Sistemas construídos com propósito real — desde APIs que escalam em produção até ferramentas de automação usadas por equipes.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-mono">
            <span className="text-primary">// </span>Em destaque
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {featured.map((project) => (
              <div key={project.id} className="group bg-card border border-border hover:border-primary transition-all duration-300 hover:glow flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${categoryColors[project.category] ?? "bg-secondary text-muted-foreground border-border"}`}>
                      {project.category}
                    </span>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                  {project.impact && (
                    <div className="bg-secondary/50 border border-primary/20 p-3 mb-4 text-xs font-mono">
                      <span className="text-primary">// impacto: </span>
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground border border-border">{tech}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      {project.stars && <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-400" />{project.stars}</span>}
                      {project.forks && <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{project.forks}</span>}
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 ${project.status === "ativo" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Others */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-mono">
            <span className="text-primary">// </span>Outros projetos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((project) => (
              <div key={project.id} className="group bg-card border border-border p-5 hover:border-primary transition-all flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono">{project.name}</span>
                  </div>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.stack.slice(0, 3).map((t) => (<span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground border border-border">{t}</span>))}
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  {project.stars && <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-400" />{project.stars}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">Quer ver mais? Todos os projetos estão no GitHub.</p>
          <a href="https://github.com/thalisonwilker" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border font-mono text-sm hover:border-primary transition-colors">
            <Github className="w-4 h-4" /> github.com/thalisonwilker
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
