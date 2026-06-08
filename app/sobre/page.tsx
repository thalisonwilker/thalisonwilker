import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Calendar, Code2, Users, BookOpen, Coffee, Music, Heart, Mic } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sobre — Thalyson Wilker",
  description: "Engenheiro de Software com 10+ anos de experiência em Python, IA e Arquitetura de Sistemas. Co-organizador do Python Norte e DevOpsDays Belém.",
}

const values = [
  { icon: Code2, title: "Engenharia com propósito", description: "Código que resolve problemas reais, não apenas exercícios técnicos elegantes." },
  { icon: Users, title: "Comunidade acima de tudo", description: "O crescimento individual só faz sentido quando puxa outros para cima." },
  { icon: BookOpen, title: "Aprendizado contínuo", description: "A curiosidade é o combustível. Parando de aprender, parando de crescer." },
  { icon: Mic, title: "Compartilhar é crescer", description: "Quem ensina aprende duas vezes. Compartilho erros, acertos e descobertas." },
]

const skills = [
  { category: "Linguagens", items: ["Python", "TypeScript", "Bash", "SQL"] },
  { category: "Backend", items: ["FastAPI", "Django", "REST APIs", "gRPC"] },
  { category: "IA & Auto.", items: ["n8n", "LangGraph", "Langflow", "OpenAI"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Ansible", "CI/CD"] },
  { category: "Dados", items: ["PostgreSQL", "Redis", "ClickHouse"] },
  { category: "Cloud", items: ["Linux", "Fly.io", "AWS", "Coolify"] },
]

const personalTraits = [
  { icon: Coffee, label: "Café a qualquer hora" },
  { icon: Music, label: "Samba na playlist" },
  { icon: Heart, label: "Fã de conversas longas" },
  { icon: MapPin, label: "Orgulho da Amazônia" },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-32 relative border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20" />
                <Image src="https://github.com/thalisonwilker.png" alt="Thalyson Wilker" width={240} height={240} className="relative w-48 h-48 sm:w-56 sm:h-56 object-cover border-2 border-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
                <span className="text-muted-foreground">$</span>
                <span>cat manifesto.md</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2 font-mono">
                Thalyson <span className="text-primary">Wilker</span>
              </h1>
              <p className="text-muted-foreground font-mono text-sm mb-4">Engenheiro de Software | Especialista em Python, IA e Arquitetura de Sistemas</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Belém, PA — Amazônia, Brasil</span>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 mb-6">
                <p className="text-foreground text-lg sm:text-xl leading-relaxed">
                  "Venho da Amazônia. Cresci construindo coisas que não existiam onde eu estava. Isso me ensinou que tecnologia não é apenas código — é <span className="text-primary font-semibold">alavanca</span>."
                </p>
              </blockquote>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Durante mais de 10 anos, usei essa alavanca para automatizar processos que roubavam horas de pessoas reais, para construir APIs que escalam sem quebrar, e para mostrar que o Norte do Brasil produz engenheiros de altíssimo nível.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Organizei o Python Norte e o DevOpsDays Belém não como marketing pessoal, mas como uma crença: que a comunidade tech do Norte merecia os mesmos eventos, conexões e oportunidades que os grandes centros. Essa missão continua.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projetos" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-sm hover:glow hover:scale-105 transition-all">
                  Ver Projetos <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/palestras" className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-foreground font-mono text-sm hover:border-primary transition-colors">
                  <Mic className="w-4 h-4 text-primary" /> Minhas Palestras
                </Link>
                <Link href="/contato" className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-primary/40 text-primary font-mono text-sm hover:bg-primary/10 transition-colors">
                  Fale comigo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs"><span className="text-muted-foreground">$</span><span>cat ~/valores.txt</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground"><span className="text-primary">#</span> Filosofia & Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-card border border-border p-6 hover:border-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs"><span className="text-muted-foreground">$</span><span>cat ~/.skills</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground"><span className="text-primary">#</span> Stack & Tecnologias</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="bg-card border border-border p-4">
                <h3 className="text-[10px] font-mono text-primary mb-3 border-b border-border pb-2">// {group.category}</h3>
                <ul className="space-y-1">{group.items.map((item) => (<li key={item} className="text-xs text-muted-foreground font-mono">{item}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/tecnologias" className="text-primary font-mono text-sm hover:underline">Ver tech radar completo →</Link>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary mb-3 font-mono text-xs"><span className="text-muted-foreground">$</span><span>cat sobre-mim.json | jq .pessoa</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground"><span className="text-primary">#</span> Além do Código</h2>
            <p className="text-muted-foreground text-base mt-3 max-w-xl">Tecnologia é o meio, não o fim. Sou muito mais que meu stack.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {personalTraits.map((trait) => (
              <div key={trait.label} className="bg-card border border-border p-4 flex items-center gap-3">
                <trait.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs text-foreground">{trait.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-card border border-primary/30 p-6 max-w-2xl">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="text-primary font-mono">// </span>
              Acredito que os melhores engenheiros são aqueles que vivem além do terminal. Samba, conversas filosóficas, cafés demorados e viagens sem destino certo alimentam a criatividade que nenhum tutorial consegue dar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Quer trabalhar junto ou apenas conversar?</h2>
          <p className="text-muted-foreground mb-8">Estou sempre aberto para colaborações, palestras e conexões interessantes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contato" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:glow hover:scale-105 transition-all">
              Entrar em contato <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/timeline" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-mono text-sm hover:border-primary transition-colors">
              <Calendar className="w-4 h-4 text-primary" /> Ver minha jornada
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
