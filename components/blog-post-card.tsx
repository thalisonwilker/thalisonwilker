import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

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

type BlogPostCardProps = {
  post: Post
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group bg-card border border-border p-4 sm:p-6 hover:border-primary transition-all duration-300 hover:glow">
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

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-mono group-hover:gap-3 transition-all"
      >
        <span>ler mais</span>
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
      </Link>
    </article>
  )
}
