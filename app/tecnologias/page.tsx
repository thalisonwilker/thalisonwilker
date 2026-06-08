import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tecnologias — Thalyson Wilker",
  description: "Tech radar pessoal de Thalyson Wilker: tecnologias que adota, experimenta, avalia e descontinuou.",
}

type TechStatus = "Adoto" | "Experimento" | "Avaliando" | "Descontinuei"

interface Tech {
  name: string
  description: string
  since?: string
}

const radar: { status: TechStatus; color: string; bg: string; border: string; description: string; items: Tech[] }[] = [
  {
    status: "Adoto",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/50",
    description: "Uso em produção. Recomendo fortemente para o problema certo.",
    items: [
      { name: "Python", description: "Linguagem principal. De scripts a APIs complexas.", since: "2014" },
      { name: "FastAPI", description: "Framework preferido para APIs REST e async.", since: "2020" },
      { name: "Django", description: "Para sistemas maiores com admin e ORM.", since: "2017" },
      { name: "Docker", description: "Containerização em todos os projetos.", since: "2019" },
      { name: "n8n", description: "Automação de workflows sem complicação.", since: "2022" },
      { name: "PostgreSQL", description: "Banco de dados padrão para tudo.", since: "2017" },
      { name: "Linux (Arch)", description: "Sistema operacional definitivo.", since: "2018" },
      { name: "Redis", description: "Cache e filas com Celery.", since: "2019" },
      { name: "GitHub Actions", description: "CI/CD para projetos pessoais e profissionais.", since: "2020" },
      { name: "Neovim", description: "Editor principal. Sem volta.", since: "2021" },
    ],
  },
  {
    status: "Experimento",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/50",
    description: "Estou usando em projetos pessoais. Alto potencial, ainda validando.",
    items: [
      { name: "LangGraph", description: "Orquestração de agentes de IA com grafo de estados.", since: "2024" },
      { name: "Langflow", description: "Visual builder para pipelines de IA.", since: "2025" },
      { name: "Rust", description: "Para ferramentas CLI e performance crítica.", since: "2023" },
      { name: "Fly.io", description: "Deploy de containers sem gestão de infra.", since: "2024" },
      { name: "Coolify", description: "Self-hosted PaaS. Heroku open source.", since: "2025" },
      { name: "ClickHouse", description: "Analytics queries em tempo real.", since: "2024" },
    ],
  },
  {
    status: "Avaliando",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/50",
    description: "Acompanho de perto. Ainda não usei em produção.",
    items: [
      { name: "Temporal.io", description: "Workflows duráveis para automação complexa." },
      { name: "DuckDB", description: "Analytics SQL embutido em Python." },
      { name: "uv", description: "Package manager Python ultra-rápido em Rust." },
      { name: "Grafana Alloy", description: "Coleta de telemetria para observabilidade." },
      { name: "Modal", description: "Compute serverless para workloads de IA." },
    ],
  },
  {
    status: "Descontinuei",
    color: "text-muted-foreground",
    bg: "bg-secondary",
    border: "border-border",
    description: "Usei no passado. Hoje escolho alternativas mais adequadas.",
    items: [
      { name: "Flask", description: "FastAPI resolve tudo que Flask fazia, melhor." },
      { name: "SQLAlchemy (Core)", description: "Prefiro o ORM do Django ou SQLModel." },
      { name: "VSCode", description: "Migrei para Neovim. Sem arrependimentos." },
      { name: "Celery + RabbitMQ", description: "Substituído por Redis Queue para casos simples.", },
    ],
  },
]

export default function TecnologiasPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>cat ~/.tech_radar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Tech Radar
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Minha visão pessoal sobre as tecnologias que uso, experimento, acompanho e descontinuei. Opinativo e baseado em uso real — não apenas em hype.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 space-y-12">
          {radar.map((quadrant) => (
            <div key={quadrant.status}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-sm font-bold font-mono px-3 py-1 border ${quadrant.bg} ${quadrant.color} ${quadrant.border}`}>
                  {quadrant.status}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{quadrant.description}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {quadrant.items.map((tech) => (
                  <div key={tech.name} className={`bg-card border ${quadrant.border} p-4 hover:${quadrant.bg} transition-colors`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className={`text-sm font-bold ${quadrant.color} font-mono`}>{tech.name}</h3>
                      {tech.since && (
                        <span className="text-[9px] text-muted-foreground font-mono flex-shrink-0">desde {tech.since}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">// </span>
            Inspirado no{" "}
            <a href="https://www.thoughtworks.com/radar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              ThoughtWorks Technology Radar
            </a>
            {" "}— opinião pessoal baseada em uso real.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
