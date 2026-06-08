"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import postsData from "@/data/posts.json"

type Post = {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
  category: string
}

export default function BlogPage() {
  const posts = [...postsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ) as Post[]

  const allYears = useMemo(
    () =>
      [...new Set(posts.map((post) => new Date(post.date).getFullYear()))]
        .sort((a, b) => b - a)
        .map(String),
    [posts]
  )

  const [selectedYear, setSelectedYear] = useState<string>(allYears[0] ?? "all")

  const filteredPosts = useMemo(
    () =>
      posts.filter(
        (post) =>
          selectedYear === "all" ||
          new Date(post.date).getFullYear().toString() === selectedYear
      ),
    [posts, selectedYear]
  )

  return (
    <main className="min-h-screen bg-background py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-primary font-mono text-xs sm:text-sm">
              ~/blog
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground glow-text">
            Posts e artigos
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base font-mono">
            Conteúdo atualizado sobre desenvolvimento, Linux, automação e boas práticas.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono text-muted-foreground">
            <span>filtrar por ano:</span>
            {allYears.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-3 py-1 border transition-colors ${
                  selectedYear === year
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                {year}
              </button>
            ))}
            <button
              onClick={() => setSelectedYear("all")}
              className={`rounded-full px-3 py-1 border transition-colors ${
                selectedYear === "all"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              todos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border p-5 hover:border-primary transition-all duration-300 hover:glow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] sm:text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <span className="text-primary text-[10px] sm:text-xs font-mono">
                  {post.readTime}
                </span>
              </div>

              <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 bg-secondary text-muted-foreground mb-3 inline-block">
                {post.category}
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-mono"
              >
                Ler o post
                <ArrowRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
