"use client"

import { useEffect, useRef, useState } from "react"

const techCategories = [
  {
    label: "Linguagens",
    items: [
      { name: "Python", level: 95, color: "bg-primary" },
      { name: "TypeScript", level: 80, color: "bg-accent" },
      { name: "SQL", level: 85, color: "bg-primary" },
      { name: "Bash", level: 88, color: "bg-green-500" },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { name: "FastAPI", level: 92, color: "bg-primary" },
      { name: "Django", level: 90, color: "bg-accent" },
      { name: "REST / GraphQL", level: 85, color: "bg-primary" },
      { name: "gRPC", level: 70, color: "bg-accent" },
    ],
  },
  {
    label: "IA & Automação",
    items: [
      { name: "n8n", level: 90, color: "bg-primary" },
      { name: "LangGraph", level: 80, color: "bg-accent" },
      { name: "Langflow", level: 78, color: "bg-primary" },
      { name: "OpenAI / Gemini", level: 85, color: "bg-accent" },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 92, color: "bg-primary" },
      { name: "Kubernetes", level: 78, color: "bg-accent" },
      { name: "CI/CD", level: 85, color: "bg-primary" },
      { name: "Linux", level: 95, color: "bg-green-500" },
    ],
  },
]

export function TechSpotlightSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimated(true), 400)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className={`mb-12 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>cat ~/.tech_stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <span className="text-primary">#</span> Stack Principal
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl font-mono">
            // proficiência baseada em uso real em produção — não apenas em tutoriais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.label}
              className={`bg-card border border-border p-5 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-xs font-mono text-primary mb-4 border-b border-border pb-2">
                // {category.label}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono text-foreground">{item.name}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-none overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000 ease-out rounded-none`}
                        style={{ width: animated ? `${item.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-6 text-center opacity-0 ${isVisible ? "animate-fade-in-up delay-500" : ""}`}>
          <a
            href="/tecnologias"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline"
          >
            Ver tech radar completo →
          </a>
        </div>
      </div>
    </section>
  )
}
