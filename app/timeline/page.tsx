import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Timeline — Thalyson Wilker",
  description: "Jornada profissional de Thalyson Wilker: 10+ anos em engenharia de software, Python, IA e liderança comunitária no Norte do Brasil.",
}

const timeline = [
  {
    year: "2026",
    period: "Atual",
    label: "Speaker & Conteúdo Técnico",
    description: "Palestras sobre IA no Flisol e IA com breja. Foco em criação de conteúdo técnico de autoridade e plataforma de referência profissional.",
    highlights: ["Palestra: IA para APIs REST no Flisol 2026", "Palestra: Langflow no IA com breja 2026", "Consolidação como referência em IA aplicada"],
    tech: ["LangGraph", "Langflow", "n8n", "FastAPI"],
    color: "border-primary",
    dot: "bg-primary animate-pulse",
  },
  {
    year: "2025",
    period: "2025",
    label: "Liderança Comunitária & DevOps",
    description: "Organização do Python Norte 2025 e do primeiro DevOpsDays Belém. Participação no ecossistema nacional de conferências Python.",
    highlights: ["Python Norte 2025 — co-organização", "DevOpsDays Belém 2025 — organização", "Aprofundamento em Kubernetes e SRE"],
    tech: ["Docker", "Kubernetes", "Python", "n8n"],
    color: "border-primary/80",
    dot: "bg-primary/80",
  },
  {
    year: "2024",
    period: "2024",
    label: "Python Brasil & Expansão Nacional",
    description: "Primeira participação na Python Brasil, a maior conferência Python do país. Início do mergulho profundo em IA generativa e agentes.",
    highlights: ["Python Brasil 2024 — Rio de Janeiro", "Início dos estudos com LLMs e agentes", "Contribuições open source crescendo"],
    tech: ["Python", "FastAPI", "Docker", "LangChain"],
    color: "border-primary/60",
    dot: "bg-primary/60",
  },
  {
    year: "2022–2023",
    period: "2022–2023",
    label: "IA, Automação & Comunidade",
    description: "Co-fundação do Python Norte e primeiro contato com ferramentas de automação inteligente. Exploração de n8n, automação de workflows e primeiros experimentos com LLMs.",
    highlights: ["Co-fundação do Python Norte", "Primeiros experimentos com n8n", "Automação de processos corporativos em escala"],
    tech: ["Python", "n8n", "Django", "Docker"],
    color: "border-accent",
    dot: "bg-accent",
  },
  {
    year: "2020–2021",
    period: "2020–2021",
    label: "DevOps & Cloud",
    description: "Transição para práticas DevOps modernas. Domínio de containers, orquestração com Kubernetes e infraestrutura como código com Ansible.",
    highlights: ["Adoção de Docker em todos os projetos", "Primeiros clusters Kubernetes em produção", "CI/CD com GitHub Actions e GitLab"],
    tech: ["Docker", "Kubernetes", "Ansible", "Linux"],
    color: "border-accent/60",
    dot: "bg-accent/60",
  },
  {
    year: "2017–2019",
    period: "2017–2019",
    label: "Backend Sênior & Arquitetura",
    description: "Especialização em sistemas backend de alta performance. Migração para APIs RESTful com Django e FastAPI. Primeiros sistemas em produção com carga real.",
    highlights: ["Sistemas Django em produção com 10k+ usuários", "APIs RESTful com autenticação e autorização complexas", "PostgreSQL avançado: índices, particionamento, queries otimizadas"],
    tech: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"],
    color: "border-muted",
    dot: "bg-muted-foreground",
  },
  {
    year: "2014–2016",
    period: "2014–2016",
    label: "Primeiros Passos & Formação",
    description: "Início da jornada em desenvolvimento de software. Python como primeira linguagem de escolha, Linux como sistema operacional definitivo. Primeiros projetos profissionais.",
    highlights: ["Python como linguagem principal", "Migração definitiva para Linux", "Primeiros scripts de automação"],
    tech: ["Python", "Linux", "Bash", "MySQL"],
    color: "border-muted",
    dot: "bg-muted",
  },
]

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>git log --all --oneline ~/carreira</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Timeline
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Mais de 10 anos de jornada em engenharia de software — do primeiro script Python até agentes de IA e liderança de comunidades tech.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-8 relative">
                  {/* Dot */}
                  <div className={`w-3 h-3 rounded-full ${item.dot} flex-shrink-0 mt-1.5 relative z-10 -ml-1.5`} />

                  {/* Content */}
                  <div className={`flex-1 bg-card border ${item.color} p-5 sm:p-6`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-primary">{item.period}</span>
                      <div className="w-px h-3 bg-border" />
                      <span className="text-xs font-mono text-muted-foreground">{item.label}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

                    <div className="space-y-1 mb-4">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">›</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground border border-border">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
