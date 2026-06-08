import type { Metadata } from "next"
import { Mail, Github, Linkedin, Instagram, Mic, Code2, Users, Briefcase, MessageCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contato — Thalyson Wilker",
  description: "Entre em contato com Thalyson Wilker para palestras, colaborações open source, mentoria ou oportunidades profissionais.",
}

const reasons = [
  { icon: Mic, label: "Convites para palestras & eventos", description: "Falo sobre Python, IA, automação, DevOps e comunidades tech.", color: "text-primary border-primary/30 bg-primary/5" },
  { icon: Code2, label: "Colaboração open source", description: "Tenho interesse em projetos Python, IA e DevOps.", color: "text-accent border-accent/30 bg-accent/5" },
  { icon: Users, label: "Mentoria técnica", description: "Especialmente para devs da região Norte do Brasil.", color: "text-green-400 border-green-400/30 bg-green-400/5" },
  { icon: Briefcase, label: "Oportunidades profissionais", description: "Estou aberto a conversas sobre oportunidades de alto nível.", color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" },
  { icon: MessageCircle, label: "Conversa técnica", description: "Python, IA, sistemas distribuídos — adoro boas conversas.", color: "text-primary border-primary/30 bg-primary/5" },
]

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "thalysonwilker@gmail.com",
    href: "mailto:thalysonwilker@gmail.com",
    description: "Resposta em até 48h",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/thalysonwilker",
    href: "https://linkedin.com/in/thalysonwilker",
    description: "Para conexões profissionais",
    primary: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/thalisonwilker",
    href: "https://github.com/thalisonwilker",
    description: "Issues, PRs e discussões técnicas",
    primary: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@itkcah.py",
    href: "https://www.instagram.com/itkcah.py",
    description: "Conteúdo e bastidores",
    primary: false,
  },
]

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <span className="text-muted-foreground">$</span>
            <span>echo "Vamos conversar?"</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Contato
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Se você chegou até aqui, provavelmente temos algo em comum. Estou sempre aberto para conversas com propósito.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border font-mono text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-muted-foreground">status: <span className="text-primary">aberto para oportunidades</span></span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reasons */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6 font-mono">
                <span className="text-primary">// </span>Quando faz sentido entrar em contato
              </h2>
              <div className="space-y-3">
                {reasons.map((reason) => (
                  <div key={reason.label} className={`flex items-start gap-4 bg-card border p-4 ${reason.color}`}>
                    <reason.icon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-0.5">{reason.label}</div>
                      <div className="text-xs text-muted-foreground">{reason.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Channels */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6 font-mono">
                <span className="text-primary">// </span>Onde me encontrar
              </h2>
              <div className="space-y-3">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 bg-card border p-4 sm:p-5 hover:scale-[1.01] transition-all group ${channel.primary ? "border-primary/50 hover:border-primary hover:glow" : "border-border hover:border-primary/50"}`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center border flex-shrink-0 transition-colors ${channel.primary ? "bg-primary/10 border-primary/30 text-primary" : "bg-card border-border text-muted-foreground group-hover:text-primary group-hover:border-primary/30"}`}>
                      <channel.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{channel.label}</div>
                      <div className="text-xs text-muted-foreground font-mono truncate">{channel.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{channel.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 bg-card border border-border p-4 font-mono text-xs">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary">// nota: </span>
                  Não aceito pedidos de freelancer ou orçamentos por formulário. Para colaborações comerciais, envie email com contexto claro sobre o projeto e expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
