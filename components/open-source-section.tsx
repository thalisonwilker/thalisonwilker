"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Star, GitFork, ArrowRight, Github } from "lucide-react"
import githubProjectsData from "@/data/github-projects.json"

export function OpenSourceSection() {
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

  const totalStars = githubProjectsData.reduce((sum, r) => sum + r.stars, 0)

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div>
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs">
              <Github className="w-3.5 h-3.5" />
              <span>github.com/thalisonwilker</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary">#</span> Open Source
            </h2>
            <p className="text-muted-foreground text-sm mt-2 font-mono">
              // {totalStars}+ stars · {githubProjectsData.length} repositórios públicos
            </p>
          </div>
          <Link
            href="/open-source"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all"
          >
            Ver tudo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {githubProjectsData.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card border border-border p-5 hover:border-primary transition-all duration-300 hover:glow flex flex-col opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                    {repo.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-secondary text-muted-foreground border border-border">
                  {repo.language}
                </span>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-4">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {repo.stars}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className={`mt-6 text-center opacity-0 ${isVisible ? "animate-fade-in-up delay-500" : ""}`}>
          <a
            href="https://github.com/thalisonwilker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground font-mono text-sm hover:border-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            Ver perfil no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
