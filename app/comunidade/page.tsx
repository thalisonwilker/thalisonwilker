import type { Metadata } from "next"
import Link from "next/link"
import { Users, Calendar, MapPin, Globe, ArrowRight, Star, Mic } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Comunidade — Thalyson Wilker",
  description: "Iniciativas comunitárias de Thalyson Wilker: Python Norte, DevOpsDays Belém e liderança na comunidade tech do Norte do Brasil.",
}

const initiatives = [
  {
    name: "Python Norte",
    edition: "2ª Edição — 2025",
    role: "Co-organizador",
    description: "A maior conferência de Python do Norte do Brasil. Realizada em Belém, PA, reúne desenvolvedores Python de toda a região Amazônica para dois dias de palestras, workshops e networking de alto nível.",
    longDescription: "O Python Norte nasceu de uma percepção simples: a comunidade tech do Norte do Brasil não tinha um evento de referência como o Python Brasil ou as PythonSes de outras regiões. Com um grupo de entusiastas e a força da comunidade local, organizamos a primeira edição e plantamos uma semente que continua crescendo.",
    stats: [
      { label: "Edições realizadas", value: "2+" },
      { label: "Participantes", value: "500+" },
      { label: "Palestrantes", value: "20+" },
    ],
    highlights: [
      "2ª maior conferência Python regional do Brasil",
      "Parceria com Python Software Foundation Brasil",
      "Workshops práticos com especialistas nacionais",
      "Transmissão ao vivo para toda a região",
    ],
    color: "border-primary",
    badge: "text-primary bg-primary/10",
  },
  {
    name: "DevOpsDays Belém",
    edition: "1ª Edição — 2025",
    role: "Organizador",
    description: "O primeiro DevOpsDays de Belém, parte da rede global DevOpsDays. Reúne engenheiros de software, SREs, profissionais de infraestrutura e entusiastas de DevOps da região Norte.",
    longDescription: "O DevOpsDays é uma conferência global sobre cultura de DevOps, práticas de engenharia de confiabilidade e automação. Trazer esse evento para Belém foi um marco para a comunidade tech local — mostrando que o Norte do Brasil faz parte do ecossistema global.",
    stats: [
      { label: "1ª edição", value: "Jun 2025" },
      { label: "Palestrantes", value: "10+" },
      { label: "Participantes", value: "200+" },
    ],
    highlights: [
      "Primeiro DevOpsDays no Norte do Brasil",
      "Palco aberto (OpenSpaces) sobre automação e SRE",
      "Parceria com empresas locais e nacionais",
      "Networking entre devs, ops e CTOs",
    ],
    color: "border-accent",
    badge: "text-accent bg-accent/10",
  },
]

const talks = [
  {
    event: "IA com breja 2026",
    topic: "Além do Chat: Aplicando IA para acelerar o desenvolvimento de APIs REST com Django",
    type: "Palestra",
    date: "Abr 2026",
  },
  {
    event: "Flisol 2026",
    topic: "Descubra o Langflow — Construindo IA de Forma Simples e Aberta",
    type: "Palestra",
    date: "Abr 2026",
  },
  {
    event: "Python Brasil 2024",
    topic: "Participação na maior conferência Python do Brasil",
    type: "Participação",
    date: "Out 2024",
  },
]

export default function ComunidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>cat ~/comunidade/README.md</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Comunidade
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Tecnologia se constrói em comunidade. Organizei eventos que trouxeram centenas de desenvolvedores do Norte do Brasil para um mesmo espaço de aprendizado, conexão e crescimento.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="space-y-8">
            {initiatives.map((init) => (
              <div key={init.name} className={`bg-card border ${init.color} p-6 sm:p-8`}>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs font-mono px-2.5 py-1 ${init.badge}`}>{init.role}</span>
                      <span className="text-xs font-mono text-muted-foreground">{init.edition}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{init.name}</h2>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">{init.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{init.longDescription}</p>
                  </div>
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {init.stats.map((stat) => (
                        <div key={stat.label} className="bg-secondary/50 border border-border p-3 text-center">
                          <div className="text-xl font-bold text-primary font-mono">{stat.value}</div>
                          <div className="text-[10px] text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {init.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-mono">
            <span className="text-primary">// </span>Palestras recentes
          </h2>
          <div className="space-y-3">
            {talks.map((talk) => (
              <div key={talk.event} className="bg-card border border-border p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:border-primary transition-colors">
                <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mic className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-muted-foreground mb-1">{talk.event} · {talk.date}</div>
                  <div className="text-sm text-foreground">{talk.topic}</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-secondary text-muted-foreground border border-border flex-shrink-0">{talk.type}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/palestras" className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all">
              Ver todas as palestras <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Faça parte da comunidade</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Acompanhe os próximos eventos, contribua com palestras ou ajude na organização. A comunidade tech do Norte cresce com todos nós.</p>
          <Link href="/contato" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:glow transition-all">
            Quero participar <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
