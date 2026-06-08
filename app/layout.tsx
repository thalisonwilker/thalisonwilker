import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Thalyson Wilker",
  description: "L, você sabia que Shinigami só come maçãs?",
    generator: 'itkcah.py'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-mono antialiased">
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="font-bold text-foreground hover:text-primary">
              Thalyson
            </Link>
            <nav className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <Link href="/blog" className="transition-colors hover:text-foreground">
                Blog
              </Link>
              <Link href="/cartola" className="transition-colors hover:text-foreground">
                Cartola
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
