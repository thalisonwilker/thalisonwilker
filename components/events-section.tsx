"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Linux Day 2024",
    date: "2024-12-15",
    location: "São Paulo, SP",
    type: "Palestra",
    status: "upcoming",
    description: "Palestra sobre automação de infraestrutura com Ansible",
  },
  {
    id: 2,
    title: "Dev Summit Brasil",
    date: "2024-11-20",
    location: "Online",
    type: "Workshop",
    status: "completed",
    description: "Workshop de 2h sobre CI/CD com GitHub Actions",
  },
  {
    id: 3,
    title: "Meetup Open Source",
    date: "2024-10-05",
    location: "Rio de Janeiro, RJ",
    type: "Meetup",
    status: "completed",
    description: "Apresentação do meu projeto open source de dotfiles",
  },
];

export function EventsSection() {
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
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-8 sm:mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-primary font-mono text-xs sm:text-sm">
              ~/eventos
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground glow-text">
            $ crontab -l
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs sm:text-sm">
            // onde você pode me encontrar
          </p>
        </div>

        <div
          className="relative"
          style={{
            display: "none",
          }}
        >
          <div className="absolute left-2 sm:left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-0 sm:left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-primary md:-translate-x-1/2 z-10">
                  <div
                    className={`absolute inset-1 ${
                      event.status === "upcoming"
                        ? "bg-primary animate-pulse"
                        : "bg-muted"
                    }`}
                  />
                </div>

                <div
                  className={`ml-8 sm:ml-8 md:ml-0 md:w-[calc(50%-2rem)] group bg-card border border-border p-4 sm:p-6 hover:border-primary transition-all duration-300 hover:glow ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span
                      className={`text-[10px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 sm:py-1 ${
                        event.status === "upcoming"
                          ? "bg-primary/20 text-primary border border-primary/50"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {event.status === "upcoming" ? "PRÓXIMO" : "CONCLUÍDO"}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="font-mono">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="truncate max-w-[120px] sm:max-w-none">
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {event.status === "upcoming" && (
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-primary text-xs sm:text-sm font-mono cursor-pointer hover:gap-3 transition-all">
                      <span>inscrever-se</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
