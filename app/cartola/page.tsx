import { HeroSection } from "@/components/hero-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thalyson Wilker | Cartola",
  description:
    "Ouça-me bem, amor, preste atenção: o mundo é um moinho. Vai triturar teus sonhos tão mesquinhos, vai reduzir as ilusões a pó.",
  generator: "itkcah.py",
};

export default function () {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <center className="py-8">
        <div className="py-10">
          <h1 className="text-primary text-xl">Angenor de Oliveira</h1>
          <h2 className="text-primary">
            Mais conhecido como <strong>Cartola</strong>, grande ícone do samba e um dos mais
            importantes compositores da música popular brasileira.
          </h2>
        </div>
        <iframe
          style={{
            width: "80%",
            height: "80vh",
          }}
          src="https://www.youtube.com/embed/5pSJ0fccOFc?si=smtoFFW2qcc7nP8f"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </center>
    </main>
  );
}
