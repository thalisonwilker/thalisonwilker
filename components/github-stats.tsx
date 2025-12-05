"use client";

import { Activity, GitBranch, Star, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface GithubStatsProps {
  username: string;
}

export function GithubStats({ username }: GithubStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: GitBranch, value: 42, label: "repos" },
    { icon: Star, value: 128, label: "stars" },
    { icon: Users, value: 89, label: "followers" },
    { icon: Activity, value: 1200, label: "commits" },
  ];

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
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(stats.map((stat) => Math.floor(stat.value * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounters(stats.map((stat) => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-background relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div
          className={`mb-10 sm:mb-12 md:mb-16 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
        >
          <div className="flex items-center gap-2 text-primary mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono">
              $ git log --oneline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            <span className="text-primary">#</span> GitHub Stats
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-mono">
            {"// Uma das coisas que me dá muito prazer é contribuir para projetos open source. Aqui estão algumas estatísticas do meu GitHub."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card border border-border p-4 sm:p-6 relative group hover:border-primary transition-all opacity-0 hover:scale-105 duration-300 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary glow-text mb-1 sm:mb-2">
                {formatNumber(counters[index])}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-mono">
                {stat.label}
              </p>

              <div className="mt-3 sm:mt-4 h-1 bg-border overflow-hidden">
                <div
                  className="h-full bg-primary/50 group-hover:bg-primary transition-all duration-500"
                  style={{
                    width: isVisible ? `${Math.random() * 40 + 60}%` : "0%",
                    transition: "width 1s ease-out",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
