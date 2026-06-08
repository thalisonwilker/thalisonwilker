import type { Metadata } from "next"
import { Github, Star, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import githubProjectsData from "@/data/github-projects.json"

export const metadata: Metadata = {
  title: "Open Source — Thalyson Wilker",
  description: "Projetos open source de Thalyson Wilker no GitHub: templates, ferramentas e automações em Python.",
}

export default function OpenSourcePage() {
  const totalStars = githubProjectsData.reduce((sum, r) => sum + r.stars, 0)

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <Github className="w-3.5 h-3.5" />
            <span>github.com/thalisonwilker</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Open Source
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-6">
            Contribuo com código aberto porque acredito que o conhecimento compartilhado multiplica o impacto de todos.
          </p>
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="text-3xl font-bold text-primary font-mono">{totalStars}+</div>
              <div className="text-xs text-muted-foreground font-mono">Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent font-mono">{githubProjectsData.length}</div>
              <div className="text-xs text-muted-foreground font-mono">Repositórios</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {githubProjectsData.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border p-6 hover:border-primary transition-all hover:glow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors font-mono">{repo.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-secondary text-muted-foreground border border-border">{repo.language}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{repo.description}</p>
                <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>{repo.stars} stars</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/thalisonwilker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border font-mono text-sm hover:border-primary transition-colors"
            >
              <Github className="w-4 h-4" /> Ver todos no GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
