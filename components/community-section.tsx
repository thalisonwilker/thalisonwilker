"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Users, Calendar, MapPin, ArrowRight, Globe } from "lucide-react"

const initiatives = [
  {
    name: "Python Norte",
    role: "Co-organizador",
    description: "A maior conferência de Python do Norte do Brasil. Uma iniciativa para conectar a comunidade tech da região Amazônica.",
    stats: [
      { label: "Edições", value: "2+" },
      { label: "Participantes", value: "500+" },
    ],
    color: "border-primary",
    badge: "bg-primary/10 text-primary",
    link: "/comunidade",
  },
  {
    name: "DevOpsDays Belém",
    role: "Organizador",
    description: "O primeiro DevOpsDays de Belém, reunindo engenheiros de software, SREs e entusiastas de DevOps da região Norte.",
    stats: [
      { label: "1ª edição", value: "2025" },
      { label: "Palestrantes", value: "10+" },
    ],
    color: "border-accent",
    badge: "bg-accent/10 text-accent",
    link: "/comunidade",
  },
  {
    name: "Palestras & Talks",
    role: "Speaker",
    description: "Compartilhando experiências sobre IA, Python e Automação em eventos como Flisol, Python Brasil e meetups locais.",
    stats: [
      { label: "Palestras", value: "5+" },
      { label: "Eventos", value: "3+" },
    ],
    color: "border-green-500",
    badge: "bg-green-500/10 text-green-400",
    link: "/palestras",
  },
]

export function CommunitySection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className={`mb-12 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>cat ~/comunidade/README.md</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            <span className="text-primary">#</span> Comunidade
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            Tecnologia se constrói em comunidade. Organizei eventos que trouxeram centenas de desenvolvedores do Norte do Brasil para um mesmo espaço de aprendizado e conexão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.name}
              className={`bg-card border ${initiative.color} p-6 flex flex-col opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-[10px] font-mono px-2 py-0.5 ${initiative.badge}`}>
                  {initiative.role}
                </span>
                <Globe className="w-4 h-4 text-muted-foreground" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{initiative.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{initiative.description}</p>

              <div className="flex gap-4 mb-4">
                {initiative.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-primary font-mono">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href={initiative.link} className="inline-flex items-center gap-1.5 text-primary font-mono text-xs hover:gap-3 transition-all mt-auto">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
