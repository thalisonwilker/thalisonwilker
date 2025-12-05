"use client";

import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/thalysonwilker",
    username: "@thalysonwilker",
    description: "Conecte-se profissionalmente",
    color: "hover:border-[#0A66C2] hover:text-[#0A66C2]",
    bgColor: "group-hover:bg-[#0A66C2]/10",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/itkcah.py",
    username: "@itkcah.py",
    description: "Fotos e momentos do dia a dia",
    color: "hover:border-[#E4405F] hover:text-[#E4405F]",
    bgColor: "group-hover:bg-[#E4405F]/10",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/thalisonwilker",
    username: "@thalisonwilker",
    description: "Projetos e contribuicoes",
    color: "hover:border-[#fff] hover:text-[#fff]",
    bgColor: "group-hover:bg-[#fff]/10",
  },
];

export function SocialSection() {
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
          className={`mb-8 sm:mb-12 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
        >
          <div className="flex items-center gap-2 text-primary mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono">
              $ echo $SOCIAL_LINKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            <span className="text-primary">#</span> Conecte-se
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-mono">
            {
              "// Eu me considero uma pessoa acessível. Sinta-se à vontade para me encontrar em qualquer uma dessas plataformas e iniciar uma conversa sobre arte, cultura, classes sociais, música brasileira, tecnologia, a vida o universo e tudo mais."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {socials.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card border border-border p-4 sm:p-6 transition-all duration-300 hover:scale-105 opacity-0 ${
                social.color
              } ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center transition-colors ${social.bgColor}`}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-current transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1">
                {social.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-mono mb-1 sm:mb-2">
                {social.username}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {social.description}
              </p>
            </a>
          ))}
        </div>

        <div
          style={{
            display: "none",
          }}
          className={`bg-card border border-primary/50 p-4 sm:p-6 md:p-8 text-center opacity-0 ${
            isVisible ? "animate-fade-in-up delay-500" : ""
          }`}
        >
          <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
            Prefere email?
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 font-mono">
            // sem spam, prometo
          </p>
          <a
            href="mailto:seu@email.com"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground font-mono text-sm sm:text-base hover:glow transition-all hover:scale-105"
          >
            <span>seu@email.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div
          className={`mt-10 sm:mt-12 md:mt-16 text-center opacity-0 ${
            isVisible ? "animate-fade-in-up delay-600" : ""
          }`}
        >
          <div className="d-none inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-card border border-border">
            <span className="w-2 h-2 bg-green-500 animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground font-mono">
              status:{" "}
              <span className="text-primary">
                disponivel para conversas, café, cervejas e código.
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
