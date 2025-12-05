"use client";

import {
  Heart,
  Music,
  Coffee,
  BookOpen,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const traits = [
  {
    icon: Coffee,
    title: "rituais.sh",
    description:
      "Café a qualquer hora e pausas estratégicas ao longo do dia para refletir sobre a vida.",
  },
  {
    icon: Music,
    title: "musica.mp3",
    description: "A vida sem trilha sonora nao faz sentido.",
  },
  {
    icon: BookOpen,
    title: "leitura.txt",
    description: "Sempre com um livro na mochila, de poesia a filosofia.",
  },
  {
    icon: MapPin,
    title: "viagens.log",
    description:
      "Explorar lugares novos e me perder em cidades por desconhecidas.",
  },
  {
    icon: Heart,
    title: "conexoes.sqlite3",
    description:
      "Guardo com carinho as conexoes que faço ao longo dessa jornada doce e desafiadora.",
  },
  {
    icon: Sparkles,
    title: "filosofia.md",
    description: "Viver com proposito e celebrar as pequenas vitorias.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-secondary relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div
          className={`mb-10 sm:mb-12 md:mb-16 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
        >
          <div className="flex items-center gap-2 text-primary mb-4 sm:mb-6">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm">cat sobre-mim.json</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            <span className="text-primary">#</span> Sobre mim
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl font-mono">
            {
              "/* Cada pessoa é um universo único de paixões, hábitos e curiosidades. Além do técnico, todos nós temos nossas peculiaridades que nos tornam quem somos. Aqui estão algumas das minhas características que me definem além do código. */"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {traits.map((trait, index) => (
            <div
              key={index}
              className={`bg-card border border-border p-4 sm:p-6 hover:border-primary transition-all group relative overflow-hidden opacity-0 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <span className="absolute top-2 right-3 text-xs text-muted-foreground/30 font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <trait.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-primary">
                  {trait.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {trait.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
