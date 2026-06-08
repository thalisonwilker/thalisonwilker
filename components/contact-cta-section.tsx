"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, Mic, Code2, Users, Briefcase } from "lucide-react"

const contactReasons = [
  { icon: Mic, label: "Convites para palestras & eventos", color: "text-primary" },
  { icon: Code2, label: "Colaboração em projetos open source", color: "text-accent" },
  { icon: Users, label: "Mentoria para devs da região Norte", color: "text-green-400" },
  { icon: Briefcase, label: "Oportunidades profissionais de alto nível", color: "text-primary" },
]

export function ContactCTASection() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <div className={`opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="flex items-center justify-center gap-2 text-primary mb-6 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>echo "Vamos conversar?"</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">#</span> Vamos Conversar
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Se você chegou até aqui, provavelmente temos algo em comum. Estou sempre aberto para conversas sobre:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
            {contactReasons.map((reason) => (
              <div key={reason.label} className="flex items-center gap-3 bg-card border border-border p-4">
                <reason.icon className={`w-4 h-4 flex-shrink-0 ${reason.color}`} />
                <span className="text-sm text-foreground">{reason.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:thalysonwilker@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium hover:glow hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Enviar email
            </a>
            <a
              href="https://linkedin.com/in/thalysonwilker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-mono text-sm hover:border-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/thalisonwilker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-mono text-sm hover:border-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Status indicator */}
        <div className={`mt-12 opacity-0 ${isVisible ? "animate-fade-in-up delay-400" : ""}`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-card border border-border">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">
              status: <span className="text-primary">aberto para conversas e oportunidades</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
