"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ExternalLink, Star, GitFork } from "lucide-react"
import projectsData from "@/data/projects.json"

export function ProjectsHighlightSection() {
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

  const highlighted = projectsData.filter((p) => p.featured).slice(0, 3)

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div>
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs">
              <span className="text-muted-foreground">$</span>
              <span>ls ~/projetos --featured</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary">#</span> Projetos em Destaque
            </h2>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {highlighted.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:glow flex flex-col opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary border border-primary/30">
                  {project.category}
                </span>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Impact metrics */}
              {project.impact && (
                <div className="bg-secondary/50 border border-border p-3 mb-4 text-xs font-mono">
                  <span className="text-primary">// impacto: </span>
                  <span className="text-muted-foreground">{project.impact}</span>
                </div>
              )}

              {/* Stack chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3 text-muted-foreground">
                  {project.stars && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                  )}
                  {project.forks && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.forks}
                    </span>
                  )}
                </div>
                <Link href={`/projetos`} className="text-primary hover:underline flex items-center gap-1">
                  detalhes <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
