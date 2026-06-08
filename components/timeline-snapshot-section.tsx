"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const milestones = [
  { year: "2014", label: "Início da jornada", description: "Primeiros passos com Python e Linux", color: "bg-muted" },
  { year: "2017", label: "Backend Sênior", description: "Especialização em APIs e sistemas web", color: "bg-primary/40" },
  { year: "2020", label: "DevOps & Cloud", description: "Docker, Kubernetes e infraestrutura como código", color: "bg-primary/60" },
  { year: "2022", label: "Liderança Comunitária", description: "Co-fundação do Python Norte", color: "bg-primary/80" },
  { year: "2023", label: "IA & Agentes", description: "Mergulho em LLMs, n8n e automação inteligente", color: "bg-accent/80" },
  { year: "2025", label: "Referência Regional", description: "DevOpsDays Belém + Speaker em Python Brasil", color: "bg-accent" },
  { year: "hoje", label: "Em evolução", description: "Conteúdo técnico + autoridade em IA e Sistemas", color: "bg-primary" },
]

export function TimelineSnapshotSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div>
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs">
              <span className="text-muted-foreground">$</span>
              <span>git log --oneline ~/carreira</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary">#</span> 10+ Anos de Jornada
            </h2>
          </div>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all"
          >
            Ver timeline completa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal timeline */}
        <div className={`relative opacity-0 ${isVisible ? "animate-fade-in-up delay-200" : ""}`}>
          {/* Line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 relative">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex flex-col items-center text-center">
                {/* Dot */}
                <div className={`w-3 h-3 rounded-full ${milestone.color} border-2 border-background relative z-10 mb-3 ${milestone.year === "hoje" ? "animate-pulse" : ""}`} />

                <div className="text-xs font-bold font-mono text-primary mb-1">{milestone.year}</div>
                <div className="text-[10px] font-semibold text-foreground mb-1 hidden sm:block">{milestone.label}</div>
                <div className="text-[9px] text-muted-foreground leading-relaxed hidden lg:block">{milestone.description}</div>
              </div>
            ))}
          </div>

          {/* Mobile: just show last few */}
          <div className="mt-6 sm:hidden space-y-3">
            {milestones.slice(-3).map((m) => (
              <div key={m.year} className="flex items-start gap-3 bg-card border border-border p-3">
                <span className="text-xs font-mono text-primary font-bold w-10 flex-shrink-0">{m.year}</span>
                <div>
                  <div className="text-xs font-semibold text-foreground">{m.label}</div>
                  <div className="text-[11px] text-muted-foreground">{m.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
