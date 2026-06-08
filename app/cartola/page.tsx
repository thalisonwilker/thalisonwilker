import { HeroSection } from "@/components/hero-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thalyson Wilker | Cartola",
  description:
    "Angenor de Oliveira, Cartola: compositor, poeta e ícone do samba e da Mangueira.",
  generator: "itkcah.py",
};

export default function CartolaPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-primary font-mono text-sm uppercase tracking-[0.3em]">
                Página dedicada a Cartola
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                Angenor de Oliveira
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-7">
                Mais conhecido como <strong>Cartola</strong>, ele transformou o samba com poesia, 
                sensibilidade e melodias que atravessam gerações. Figura central da Estação 
                Primeira de Mangueira, sua obra é uma referência para quem ama música brasileira.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Dados essenciais
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Nome:</span> Angenor de Oliveira
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Nascimento:</span> 11 de outubro de 1908
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Local:</span> Rio de Janeiro, RJ
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Falecimento:</span> 30 de novembro de 1980
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Casa:</span> Estação Primeira de Mangueira
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Legado artístico
                </h2>
                <p className="text-sm text-muted-foreground leading-7">
                  Cartola foi um dos pilares da era de ouro do samba. Suas letras falam de amor, 
                  saudade, esperança e das contradições da vida carioca, sempre com elegância e 
                  profundidade.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Por que ele importa?</h2>
              <p className="text-sm text-muted-foreground leading-7">
                O trabalho de Cartola é simultaneamente íntimo e universal. Ele juntou 
                poesia e samba como poucos, criando composições que funcionam como canções de 
                amor e também como reflexões sobre destino, luta e reconciliação.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-7">
                Músicas como <strong>"As rosas não falam"</strong> e <strong>"O mundo é um moinho"</strong> 
                continuam sendo estudadas e interpretadas por novos artistas, provando que seu 
                legado vive na cultura brasileira.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Obras marcantes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>As rosas não falam</li>
                  <li>O mundo é um moinho</li>
                  <li>A sorrir e a chorar</li>
                  <li>Preciso me encontrar</li>
                  <li>Alvorada</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Frase</h3>
                <blockquote className="text-sm leading-7 text-muted-foreground border-l-2 border-primary pl-4 italic">
                  “O mundo é um moinho, vai triturar teus sonhos tão mesquinhos, vai reduzir 
                  as ilusões a pó.”
                </blockquote>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Sobre Cartola</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Cartola começou como mangueirense e acabou se tornando sinônimo de samba 
                carioca. Sua música ocupa um lugar especial entre os maiores compositores da 
                música popular brasileira.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Contexto histórico</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Durante as décadas de 1930 e 1940, ele ajudou a consolidar a Mangueira como 
                referência. Cartola é lembrado tanto por suas músicas quanto pelo legado moral e 
                cultural que deixou para o samba.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Inspiração</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Use esta página sempre que quiser lembrar que arte e poesia podem ser feitas 
                com calma, cuidado e sentimento verdadeiro.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ouça Cartola</h2>
          <div className="aspect-video w-full overflow-hidden rounded-3xl bg-zinc-950">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/5pSJ0fccOFc?si=smtoFFW2qcc7nP8f"
              title="Cartola - O Sol Nascerá"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
