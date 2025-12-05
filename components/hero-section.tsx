"use client"

import { Github, Linkedin, Instagram, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scanline absolute inset-x-0 h-px bg-primary/30" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          <div className={`flex-shrink-0 opacity-0 ${isVisible ? "animate-fade-in-left" : ""}`}>
            <div className="relative group animate-float">
              <div className="absolute -inset-1 bg-primary/50 animate-pulse-glow" />
              <div className="absolute -inset-1 bg-accent/30 translate-x-1 translate-y-1" />

              <img
                src="https://github.com/thalisonwilker.png"
                alt="Minha foto"
                className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-primary"
              />

              <div className="absolute inset-0 bg-background/20 pointer-events-none mix-blend-overlay" />
              <div className="absolute top-0 left-0 right-0 bg-background/95 p-1.5 sm:p-2 border-b border-primary flex items-center gap-2">
                <div className="flex gap-1 sm:gap-1.5">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500/80 rounded-full" />
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500/80 rounded-full" />
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500/80 rounded-full" />
                </div>
                <code className="text-[10px] sm:text-xs text-muted-foreground ml-1 sm:ml-2 truncate">
                  itkcah@arch ~
                </code>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-background/95 p-2 sm:p-3 border-t border-primary">
                <code className="text-[10px] sm:text-xs text-primary">
                  <span className="text-green-500">itkcah@arch</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-accent">~</span>
                  <span className="text-muted-foreground">$</span> traceroute google.com
                </code>
              </div>

              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                }}
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left w-full">
            <div
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
            >
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate">cd ~/home/sobre-mim</span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight opacity-0 font-mono ${isVisible ? "animate-fade-in-up delay-100" : ""}`}
            >
              <span className="text-primary glow-text animate-glitch">#</span> Thalyson Wilker
            </h1>

            <div
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6 sm:mb-8 opacity-0 mx-auto lg:mx-0 ${isVisible ? "animate-fade-in-up delay-200" : ""}`}
            >
              <span className="text-primary">const</span> itkcah = {"{"}
              <br />
              <span className="ml-2 sm:ml-4">
                curiosidade: <span className="text-accent">"infinita"</span>,
              </span>
              <br />
              <span className="ml-2 sm:ml-4">
                paixoes: [<span className="text-accent">"cafe"</span>, <span className="text-accent">"musica"</span>,{" "}
                <span className="text-accent">"conversas"</span>]
              </span>
              <br />
              {"}"}
              <span className="animate-pulse">_</span>
            </div>

            <div
              className={`flex items-center justify-center lg:justify-start gap-2 sm:gap-3 opacity-0 ${isVisible ? "animate-fade-in-up delay-300" : ""}`}
            >
              <a
                href="https://github.com/thalisonwilker"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:glow hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/thalysonwilker"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:glow hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com/itkcah.py"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:glow hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
