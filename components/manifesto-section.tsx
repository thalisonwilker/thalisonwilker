"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Users, BookOpen } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "Engenharia Profunda",
    description:
      "Não apenas escrever código que funciona — construir sistemas que sobrevivem ao tempo, ao tráfego e ao caos de produção.",
    color: "text-primary",
    border: "hover:border-primary",
    bg: "group-hover:bg-primary/5",
  },
  {
    icon: Users,
    title: "Liderança Comunitária",
    description:
      "Organizar o Python Norte e o DevOpsDays Belém foi uma crença: o Norte do Brasil produz engenheiros de altíssimo nível.",
    color: "text-accent",
    border: "hover:border-accent",
    bg: "group-hover:bg-accent/5",
  },
  {
    icon: BookOpen,
    title: "Criação de Conteúdo",
    description:
      "Compartilhar aprendizados reais, erros honestos e soluções práticas para problemas que a indústria enfrenta hoje.",
    color: "text-green-400",
    border: "hover:border-green-400",
    bg: "group-hover:bg-green-400/5",
  },
]

export function ManifestoSection() {
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
        {/* Manifesto text */}
        <div className={`max-w-4xl mb-16 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="flex items-center gap-2 text-primary mb-6 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>cat manifesto.md</span>
          </div>

          <blockquote className="border-l-2 border-primary pl-6 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed font-light">
              "Venho da Amazônia. Cresci construindo coisas que não existiam onde eu estava. Isso me ensinou que tecnologia não é apenas código — é{" "}
              <span className="text-primary font-semibold">alavanca</span>."
            </p>
          </blockquote>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Durante mais de 10 anos, usei essa alavanca para automatizar processos que roubavam horas de pessoas reais, para construir APIs que escalam sem quebrar, e para mostrar que o Norte do Brasil produz engenheiros de altíssimo nível. Meu site é o reflexo dessa jornada — e um convite para fazer parte dela.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group bg-card border border-border p-6 sm:p-8 transition-all duration-300 ${pillar.border} ${pillar.bg} opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className={`w-10 h-10 border border-border flex items-center justify-center mb-4 group-hover:border-current transition-colors ${pillar.color}`}>
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${pillar.color}`}>{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
