"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Calendar, ArrowRight, Clock, Mic } from "lucide-react"
import postsData from "@/data/posts.json"
import eventsData from "@/data/events.json"

export function FeaturedContentSection() {
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

  const featuredPosts = postsData.slice(0, 3)
  const latestEvent = eventsData[0]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div>
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs">
              <span className="text-muted-foreground">$</span>
              <span>ls -la ~/conteudo/recente</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary">#</span> Conteúdo em Destaque
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:gap-3 transition-all"
          >
            Ver todos os posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Featured posts */}
          {featuredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`group bg-card border border-border p-5 sm:p-6 hover:border-primary transition-all duration-300 hover:glow flex flex-col opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-secondary text-muted-foreground">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-muted-foreground text-[10px] font-mono">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/30">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                  <span>ler mais</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Latest talk highlight */}
        {latestEvent && (
          <div className={`mt-6 bg-card border border-accent/30 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-accent transition-colors opacity-0 ${isVisible ? "animate-fade-in-up delay-400" : ""}`}>
            <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Mic className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-mono text-accent mb-1">Última palestra</p>
              <h3 className="text-foreground font-bold mb-1">{latestEvent.title}</h3>
              <p className="text-muted-foreground text-sm">{latestEvent.description}</p>
              <p className="text-muted-foreground text-xs font-mono mt-1">{latestEvent.location} · {latestEvent.date}</p>
            </div>
            <Link href="/palestras" className="inline-flex items-center gap-1.5 text-accent font-mono text-sm hover:gap-3 transition-all flex-shrink-0">
              Ver todas
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
