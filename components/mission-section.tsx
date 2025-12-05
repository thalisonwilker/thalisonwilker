"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Terminal } from "lucide-react"

export function MissionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [typedLines, setTypedLines] = useState<number[]>([])
  const [showOutput, setShowOutput] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && !isTyping) {
      setIsTyping(true)

      const lines = [0, 1, 2, 3, 4]
      lines.forEach((line, index) => {
        setTimeout(() => {
          setTypedLines((prev) => [...prev, line])
          if (index === lines.length - 1) {
            setTimeout(() => setShowOutput(true), 500)
          }
        }, index * 400)
      })
    }
  }, [isVisible, isTyping])

  const codeLines = [
    { content: "#!/usr/bin/env python3", class: "text-muted-foreground" },
    { content: "", class: "" },
    {
      content: (
        <>
          <span className="text-purple-400">def</span> <span className="text-accent">itkcah</span>
          <span className="text-foreground">(</span>
          <span className="text-foreground">):</span>
        </>
      ),
      class: "",
    },
    {
      content: (
        <>
          <span className="text-muted-foreground ml-2 sm:ml-4">""""""</span>
        </>
      ),
      class: "",
    },
    {
      content: (
        <>
          <span className="text-purple-400 ml-2 sm:ml-4">return</span>{" "}
          <span className="text-green-400">"Vamos codar um mundo mais justo"</span>
        </>
      ),
      class: "",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className={`opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="bg-card border border-primary/50 overflow-hidden">
            <div className="bg-secondary/80 px-3 sm:px-4 py-2 border-b border-primary/30 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1 sm:gap-1.5">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500/80 rounded-full hover:bg-red-400 transition-colors cursor-pointer" />
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500/80 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer" />
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500/80 rounded-full hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                  <Terminal className="w-3 h-3 hidden sm:block" />
                  <span className="truncate">itkcah.py — Python 3.12</span>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-[10px] sm:text-xs text-green-400 hidden sm:inline">Running...</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base relative">
              <div className="absolute left-2 sm:left-4 top-4 sm:top-6 text-muted-foreground/30 text-[10px] sm:text-xs select-none">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="h-5 sm:h-6 flex items-center">
                    {num}
                  </div>
                ))}
              </div>

              <div className="ml-6 sm:ml-8">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`h-5 sm:h-6 flex items-center overflow-hidden transition-all duration-300 ${
                      typedLines.includes(index) ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <code className={line.class}>{line.content}</code>
                    {index === codeLines.length - 1 && typedLines.includes(index) && !showOutput && (
                      <span className="animate-pulse text-primary ml-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`border-t border-primary/30 bg-background/50 p-3 sm:p-4 transition-all duration-500 ${
                showOutput ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden py-0"
              }`}
            >
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground mb-2">
                <span className="text-green-400">$</span>
                <span>python3 itkcah.py</span>
              </div>
              <div className="text-primary glow-text text-base sm:text-lg md:text-xl font-medium animate-pulse">
                → "Vamos codar um mundo mais justo"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
