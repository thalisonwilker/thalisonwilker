import type { Metadata } from "next"
import { FlaskConical, Cpu, Zap, Search, BookOpen, Terminal, ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Laboratório — Thalyson Wilker",
  description: "Experimentos, protótipos e explorações públicas de Thalyson Wilker. Build in public sobre IA, Python, automação e engenharia de software.",
}

const experiments = [
  {
    icon: Cpu,
    title: "Agentes de IA com LangGraph",
    status: "Em andamento",
    statusColor: "text-primary",
    description: "Explorando arquiteturas de agentes multi-step para automação de processos de negócio. Testando padrões de orquestração com grafo de estados e memória persistente.",
    tags: ["Python", "LangGraph", "OpenAI"],
    learnings: ["State machines para fluxos complexos", "Memória de curto e longo prazo em agentes", "Error handling em pipelines assíncronos"],
  },
  {
    icon: Zap,
    title: "n8n + FastAPI Integration Patterns",
    status: "Documentando",
    statusColor: "text-accent",
    description: "Padrões de integração entre fluxos no n8n e APIs FastAPI com webhooks bidirecionais, autenticação segura e retry logic.",
    tags: ["n8n", "FastAPI", "Python", "Webhooks"],
    learnings: ["Webhook security com HMAC signatures", "Retry com backoff exponencial", "Idempotência em webhooks"],
  },
  {
    icon: Search,
    title: "RAG para documentação técnica",
    status: "Prototipando",
    statusColor: "text-yellow-400",
    description: "Sistema de perguntas e respostas sobre documentação usando embeddings, vector search e retrieval aumentado com contexto.",
    tags: ["Python", "RAG", "Embeddings", "PostgreSQL"],
    learnings: ["pgvector para similarity search", "Chunking strategies para documentos", "Reranking para melhor relevância"],
  },
  {
    icon: Terminal,
    title: "CLI para gestão de projetos Python",
    status: "Alpha",
    statusColor: "text-green-400",
    description: "Ferramenta CLI em Python para scaffolding de projetos FastAPI/Django com configurações de produção, Docker e CI/CD prontos.",
    tags: ["Python", "Click", "Jinja2", "Docker"],
    learnings: ["Template rendering com Jinja2", "CLI UX patterns", "Plugin architecture com entry points"],
  },
  {
    icon: BookOpen,
    title: "TIL — Today I Learned",
    status: "Contínuo",
    statusColor: "text-muted-foreground",
    description: "Registro público de aprendizados rápidos e descobertas do dia a dia. Python internals, SQL tricks, Linux tips e muito mais.",
    tags: ["Python", "Linux", "SQL", "Docker"],
    learnings: ["Python asyncio internals", "PostgreSQL EXPLAIN ANALYZE", "Linux namespaces & cgroups"],
  },
  {
    icon: Cpu,
    title: "Benchmark: FastAPI vs Django vs Flask",
    status: "Concluído",
    statusColor: "text-green-400",
    description: "Comparativo de performance real entre os principais frameworks Python para APIs REST em cenários de produção variados.",
    tags: ["Python", "FastAPI", "Django", "Benchmark"],
    learnings: ["FastAPI 3-5x mais rápido em I/O-bound", "Django ORM overhead em queries simples", "Async contextmanager patterns"],
  },
]

const tils = [
  { topic: "Python `__slots__` pode reduzir uso de memória em 40%", date: "2026-06-01", tag: "Python" },
  { topic: "PostgreSQL VACUUM ANALYZE muda tudo no planner", date: "2026-05-28", tag: "PostgreSQL" },
  { topic: "n8n workflow variables são case-sensitive", date: "2026-05-20", tag: "n8n" },
  { topic: "Docker buildkit cache mounts aceleram builds em Python", date: "2026-05-15", tag: "Docker" },
]

export default function LaboratorioPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 md:py-28 border-b border-border relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4 font-mono text-xs">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>~/laboratorio -- build-in-public</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono">
            <span className="text-primary">#</span> Laboratório
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Experimentos públicos, protótipos em andamento e aprendizados do dia a dia. Aqui você acompanha o processo, não apenas o resultado final.
          </p>
        </div>
      </section>

      {/* Experiments */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-mono"><span className="text-primary">// </span>Experimentos ativos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiments.map((exp) => (
              <div key={exp.title} className="bg-card border border-border p-5 sm:p-6 hover:border-primary/50 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <exp.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className={`text-[10px] font-mono flex items-center gap-1 ${exp.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">{exp.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {exp.tags.map((t) => (<span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground border border-border">{t}</span>))}
                </div>

                <div className="border-t border-border pt-3">
                  <p className="text-[10px] font-mono text-muted-foreground mb-2">// aprendizados:</p>
                  <ul className="space-y-1">
                    {exp.learnings.slice(0, 2).map((l) => (
                      <li key={l} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">→</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIL */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 font-mono"><span className="text-primary">// </span>TIL — Today I Learned</h2>
          <div className="space-y-3">
            {tils.map((til) => (
              <div key={til.topic} className="bg-card border border-border p-4 flex items-start gap-4 hover:border-primary transition-colors">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary border border-primary/30 flex-shrink-0 mt-0.5">{til.tag}</span>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{til.topic}</p>
                  <p className="text-[10px] text-muted-foreground font-mono mt-1">{til.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
