import type { Metadata } from "next"
import { Calendar, MapPin, Mic, Users, Award } from "lucide-react"
import { Footer } from "@/components/footer"
import eventsData from "@/data/events.json"

export const metadata: Metadata = {
  title: "Palestras — Thalyson Wilker",
  description: "Histórico de palestras e participações de Thalyson Wilker em eventos como Python Brasil, Flisol, Python Norte e DevOpsDays Belém.",
}

const typeIcons: Record<string, typeof Mic> = {
  Palestra: Mic,
  Organização: Users,
  Participação: Award,
}

const typeColors: Record<string, string> = {
  Palestra: "bg-primary/10 text-primary border-primary/30",
  Organização: "bg-accent/10 text-accent border-accent/30",
  Participação: "bg-green-500/10 text-green-400 border-green-500/30",
}

export default function PalestrasPage() {
  const sorted = [...eventsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const years = [...new Set(sorted.map((e) => new Date(e.date).getFullYear()))]

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>ls ~/palestras --sort=date</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Palestras
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-6">
            Compartilhando conhecimento sobre IA, Python, DevOps e cultura open source em eventos pelo Brasil.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            <div>
              <div className="text-3xl font-bold text-primary font-mono">{eventsData.filter(e => e.type === "Palestra").length}</div>
              <div className="text-xs text-muted-foreground font-mono">Palestras</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent font-mono">{eventsData.filter(e => e.type === "Organização").length}</div>
              <div className="text-xs text-muted-foreground font-mono">Eventos organizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 font-mono">{years.length}</div>
              <div className="text-xs text-muted-foreground font-mono">Anos ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline by year */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          {years.map((year) => (
            <div key={year} className="mb-16">
              <h2 className="text-xl font-bold font-mono text-primary mb-6 pb-2 border-b border-border">
                // {year}
              </h2>
              <div className="space-y-4">
                {sorted.filter((e) => new Date(e.date).getFullYear() === year).map((event) => {
                  const Icon = typeIcons[event.type] ?? Mic
                  const colorClass = typeColors[event.type] ?? "bg-secondary text-muted-foreground border-border"
                  return (
                    <div key={event.id} className="group bg-card border border-border p-5 sm:p-6 hover:border-primary transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`text-[10px] font-mono px-2 py-0.5 border ${colorClass}`}>{event.type}</span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 border ${event.status === "upcoming" ? "bg-primary/10 text-primary border-primary/30" : "bg-muted text-muted-foreground border-border"}`}>
                              {event.status === "upcoming" ? "PRÓXIMO" : "CONCLUÍDO"}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-primary" />{event.date}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" />{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Mic className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Quer me convidar para falar no seu evento?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Falo sobre Python, IA aplicada, automação com n8n, DevOps e cultura de comunidades tech.</p>
          <a href="mailto:thalysonwilker@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:glow hover:scale-105 transition-all">
            Enviar convite
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
