"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Instagram, Terminal, ArrowRight, MapPin, Cpu, Users } from "lucide-react"
import { useEffect, useState } from "react"

const taglines = [
  "Especialista em Python, IA e Arquitetura de Sistemas",
  "10+ anos construindo software que escala",
  "Organizador do Python Norte & DevOpsDays Belém",
  "Building the future from Amazônia 🌿",
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Scanline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scanline absolute inset-x-0 h-px bg-primary/20" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Photo frame */}
          <div className={`flex-shrink-0 opacity-0 ${isVisible ? "animate-fade-in-left" : ""}`}>
            <div className="relative group animate-float">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-accent/30 animate-pulse-glow" />
              <div className="absolute -inset-2 bg-accent/20 translate-x-2 translate-y-2" />

              <div className="relative border-2 border-primary overflow-hidden">
                {/* Terminal bar */}
                <div className="absolute top-0 left-0 right-0 bg-background/95 p-2 border-b border-primary flex items-center gap-2 z-10">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                  </div>
                  <code className="text-[10px] text-muted-foreground ml-1 truncate">
                    thalysonwilker@belempa ~
                  </code>
                </div>

                <Image
                  src="https://github.com/thalisonwilker.png"
                  alt="Thalyson Wilker — Engenheiro de Software"
                  width={320}
                  height={448}
                  priority
                  className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-[22rem] lg:w-72 lg:h-[26rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mt-9"
                />

                {/* Bottom terminal */}
                <div className="absolute bottom-0 left-0 right-0 bg-background/95 p-2.5 border-t border-primary">
                  <code className="text-[10px] text-primary">
                    <span className="text-green-500">thalyson</span>
                    <span className="text-muted-foreground">@</span>
                    <span className="text-accent">belém</span>
                    <span className="text-muted-foreground"> ~$ </span>
                    <span className="text-foreground">whoami</span>
                    <span className="animate-pulse ml-1">▋</span>
                  </code>
                </div>

                {/* Scanlines overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Location badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border text-muted-foreground text-xs font-mono mb-5 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
              <MapPin className="w-3 h-3 text-primary" />
              <span>Belém, PA — Amazônia, Brasil</span>
            </div>

            {/* Name */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight opacity-0 font-mono ${isVisible ? "animate-fade-in-up delay-100" : ""}`}>
              <span className="text-primary glow-text">Thalyson</span>
              <br />
              <span>Wilker</span>
            </h1>

            {/* Rotating tagline */}
            <div className={`mb-6 opacity-0 h-7 ${isVisible ? "animate-fade-in-up delay-200" : ""}`}>
              <p key={taglineIndex} className="text-primary font-mono text-sm sm:text-base md:text-lg animate-fade-in-up">
                {taglines[taglineIndex]}
              </p>
            </div>

            {/* Description */}
            <p className={`text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0 opacity-0 ${isVisible ? "animate-fade-in-up delay-300" : ""}`}>
              Engenheiro de Software com mais de 10 anos construindo sistemas robustos, automatizando processos críticos e liderando comunidades tech no Norte do Brasil. Especialista em Python, IA e Arquitetura de Sistemas.
            </p>

            {/* Stats row */}
            <div className={`flex items-center justify-center lg:justify-start gap-6 mb-8 opacity-0 ${isVisible ? "animate-fade-in-up delay-400" : ""}`}>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary font-mono">10+</div>
                <div className="text-xs text-muted-foreground font-mono">anos de exp.</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <Cpu className="w-4 h-4 text-accent" />
                  <div className="text-2xl font-bold text-accent font-mono">IA</div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">& Automação</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <Users className="w-4 h-4 text-green-400" />
                  <div className="text-2xl font-bold text-green-400 font-mono">2x</div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">org. de eventos</div>
              </div>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6 opacity-0 ${isVisible ? "animate-fade-in-up delay-500" : ""}`}>
              <Link
                href="/projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium hover:glow hover:scale-105 transition-all duration-300"
              >
                Ver Projetos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-mono text-sm font-medium hover:border-primary transition-all duration-300"
              >
                <Terminal className="w-4 h-4 text-primary" />
                Sobre mim
              </Link>
              <Link
                href="/blog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-primary/40 text-primary font-mono text-sm font-medium hover:bg-primary/10 transition-all duration-300"
              >
                Ler Blog
              </Link>
            </div>

            {/* Social icons */}
            <div className={`flex items-center justify-center lg:justify-start gap-3 opacity-0 ${isVisible ? "animate-fade-in-up delay-600" : ""}`}>
              <a href="https://github.com/thalisonwilker" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-card border border-border text-muted-foreground flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/thalysonwilker" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-card border border-border text-muted-foreground flex items-center justify-center hover:border-[#0A66C2] hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/itkcah.py" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-card border border-border text-muted-foreground flex items-center justify-center hover:border-[#E4405F] hover:text-[#E4405F] hover:scale-110 transition-all duration-300"
                aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
