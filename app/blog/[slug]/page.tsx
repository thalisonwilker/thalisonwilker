import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import postsData from "@/data/posts.json"
import { MarkdownRenderer } from "@/components/markdown-renderer"

type Post = {
  id: number
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readTime: string
  category: string
}

export function generateStaticParams() {
  return postsData.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = postsData.find((item) => item.slug === slug)

  if (!post) {
    return {
      title: "Post não encontrado | Blog",
      description: "O post solicitado não foi encontrado.",
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Blog`,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = postsData.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground text-xs sm:text-sm font-mono hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para blog
          </Link>
        </div>

        <article className="bg-card border border-border p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                {post.title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-mono text-muted-foreground">
              <span className="px-2 py-1 bg-secondary border border-border rounded-md">
                {post.category}
              </span>
              <span className="px-2 py-1 bg-secondary border border-border rounded-md">
                {post.readTime}
              </span>
              <span className="px-2 py-1 bg-secondary border border-border rounded-md">
                {post.date}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>
    </main>
  )
}
