"use client"

import type React from "react"
import Link from "next/link"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/projetos", label: "Projetos" },
  { href: "/palestras", label: "Palestras" },
  { href: "/comunidade", label: "Comunidade" },
  { href: "/laboratorio", label: "Lab" },
  { href: "/timeline", label: "Timeline" },
  { href: "/tecnologias", label: "Tecnologias" },
  { href: "/contato", label: "Contato" },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-bold text-foreground hover:text-primary transition-colors font-mono text-sm">
          <span className="text-primary">~/</span>thalysonwilker
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 transition-colors hover:text-foreground hover:bg-primary/10 border border-transparent hover:border-primary/30"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 px-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-primary/60">~/</span>{link.label.toLowerCase()}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Thalyson Wilker — Engenheiro de Software | Python, IA e Arquitetura</title>
        <meta name="description" content="Especialista em Python, FastAPI, Django, IA e DevOps com 10+ anos de experiência. Organizador do Python Norte e DevOpsDays Belém. Conteúdo técnico de autoridade sobre engenharia de software." />
        <meta name="keywords" content="Thalyson Wilker, Python Developer, FastAPI, Django, Inteligência Artificial, Agentes de IA, n8n, DevOps, Docker, Kubernetes, Python Norte, DevOpsDays Belém" />
        <meta name="author" content="Thalyson Wilker" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://thalisonwilker.dev" />
        <meta property="og:site_name" content="Thalyson Wilker" />
        <meta property="og:title" content="Thalyson Wilker — Engenheiro de Software | Python, IA e Arquitetura" />
        <meta property="og:description" content="Especialista em Python, FastAPI, Django, IA e DevOps com 10+ anos de experiência. Organizador do Python Norte e DevOpsDays Belém." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@thalisonwilker" />
        <link rel="canonical" href="https://thalisonwilker.dev" />
      </head>
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-mono antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
