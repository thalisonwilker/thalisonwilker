"use client";

import { useEffect, useRef, useState } from "react";
import {
  Terminal,
  Calendar,
  ArrowRight,
  ArrowLeft,
  X,
  Search,
  SortAsc,
  SortDesc,
  Filter,
} from "lucide-react";
import postsData from "@/data/posts.json";

type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
  category: string;
};

type SortOrder = "newest" | "oldest";

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const posts: Post[] = postsData;

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];
  const allCategories = [...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesTag && matchesCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchQuery || selectedTag || selectedCategory;

  return (
    <>
      <section
        ref={sectionRef}
        className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px),
                              linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-primary font-mono text-xs sm:text-sm">
                ~/blog
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground glow-text">
              $ cat posts.log
            </h2>
            <p className="text-muted-foreground mt-2 font-mono text-xs sm:text-sm">
              // pensamentos, tutoriais e experimentos
            </p>
          </div>

          <div
            className={`mb-6 sm:mb-8 space-y-3 sm:space-y-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="grep -i 'buscar...'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border pl-10 pr-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setSortOrder(sortOrder === "newest" ? "oldest" : "newest")
                  }
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-card border border-border font-mono text-xs sm:text-sm hover:border-primary transition-colors"
                >
                  {sortOrder === "newest" ? (
                    <SortDesc className="w-4 h-4 text-primary" />
                  ) : (
                    <SortAsc className="w-4 h-4 text-primary" />
                  )}
                  <span>{sortOrder === "newest" ? "Recentes" : "Antigos"}</span>
                </button>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-card border font-mono text-xs sm:text-sm transition-colors ${
                    showFilters || hasActiveFilters
                      ? "border-primary text-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>Filtros</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              </div>
            </div>

            {/* Painel de filtros */}
            {showFilters && (
              <div className="bg-card border border-border p-3 sm:p-4 space-y-3 sm:space-y-4 animate-fade-in">
                <div>
                  <label className="text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 block">
                    // categoria
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category ? null : category
                          )
                        }
                        className={`px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs border transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 block">
                    // tags
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() =>
                          setSelectedTag(selectedTag === tag ? null : tag)
                        }
                        className={`px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs border transition-colors ${
                          selectedTag === tag
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-primary/30 text-primary hover:bg-primary/10"
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    <X className="w-3 h-3" />
                    limpar filtros
                  </button>
                )}
              </div>
            )}

            <div className="text-[10px] sm:text-xs font-mono text-muted-foreground">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}{" "}
              encontrado
              {filteredPosts.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            style={{ display: "none" }}
          >
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`group bg-card border border-border p-4 sm:p-6 hover:border-primary transition-all duration-300 hover:glow cursor-pointer ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-[10px] sm:text-xs font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-primary text-[10px] sm:text-xs font-mono">
                    {post.readTime}
                  </span>
                </div>

                <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 bg-secondary text-muted-foreground mb-2 sm:mb-3 inline-block">
                  {post.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/10 text-primary border border-primary/30"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-mono group-hover:gap-3 transition-all">
                  <span>ler mais</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-muted-foreground font-mono text-sm">
                // nenhum post encontrado
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary font-mono text-xs sm:text-sm hover:underline"
              >
                limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="max-w-3xl mx-auto py-4 sm:py-8 px-4 sm:px-6 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-xs sm:text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                voltar
              </button>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>

            <article className="bg-card border border-border p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <span className="text-primary">{selectedPost.readTime}</span>
                <span className="px-2 py-0.5 bg-secondary">
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 glow-text">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert prose-cyan max-w-none text-sm sm:text-base">
                {selectedPost.content.split("\n").map((line, i) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1
                        key={i}
                        className="text-xl sm:text-2xl font-bold text-foreground mt-6 sm:mt-8 mb-3 sm:mb-4 glow-text"
                      >
                        {line.replace("# ", "")}
                      </h1>
                    );
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="text-lg sm:text-xl font-bold text-foreground mt-4 sm:mt-6 mb-2 sm:mb-3 text-primary"
                      >
                        {line.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="text-base sm:text-lg font-bold text-foreground mt-3 sm:mt-4 mb-2"
                      >
                        {line.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("```")) {
                    return null;
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={i} className="text-muted-foreground ml-4">
                        {line.replace("- ", "")}
                      </li>
                    );
                  }
                  if (line.match(/^\d+\. /)) {
                    return (
                      <li
                        key={i}
                        className="text-muted-foreground ml-4 list-decimal"
                      >
                        {line.replace(/^\d+\. /, "")}
                      </li>
                    );
                  }
                  if (line.trim() === "") {
                    return <br key={i} />;
                  }
                  return (
                    <p
                      key={i}
                      className="text-muted-foreground mb-2 leading-relaxed"
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
}
