"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FlaskConical, ArrowRight, Cpu, Zap, Search } from "lucide-react"

const experiments = [
  {
    icon: Cpu,
    title: "Agentes de IA com LangGraph",
    status: "Em andamento",
    description: "Explorando arquiteturas de agentes multi-step para automação de processos de negócio.",
    tag: "IA / Python",
    statusColor: "text-primary",
  },
  {
    icon: Zap,
    title: "n8n + FastAPI Integration Patterns",
    status: "Documentando",
    description: "Padrões de integração entre fluxos no n8n e APIs FastAPI com webhooks bidirecionais.",
    tag: "Automação",
    statusColor: "text-accent",
  },
  {
    icon: Search,
    title: "RAG para documentação técnica",
    status: "Prototipando",
    description: "Sistema de perguntas e respostas sobre documentação usando embeddings e retrieval aumentado.",
    tag: "IA / RAG",
    statusColor: "text-yellow-400",
  },
]

export function LabPreviewSection() {
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
              <FlaskConical className="w-3.5 h-3.5" />
              <span>~/laboratorio -- build-in-public</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary">#</span> Laboratório
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Experimentos, prototipagens e explorações em andamento
            </p>
          </div>
          <Link
            href="/laboratorio"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all"
          >
            Ver lab completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experiments.map((exp, index) => (
            <div
              key={exp.title}
              className={`bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <exp.icon className="w-4 h-4 text-primary" />
                </div>
                <span className={`text-[10px] font-mono ${exp.statusColor} flex items-center gap-1`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {exp.status}
                </span>
              </div>

              <h3 className="text-sm font-bold text-foreground mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">{exp.description}</p>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-secondary text-muted-foreground border border-border">
                {exp.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
