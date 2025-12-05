"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/workspace-setup-with-multiple-monitors-and-linux-t.jpg",
    alt: "Meu setup de trabalho",
    caption: "setup.png",
  },
  {
    id: 2,
    src: "/hackathon-event-with-developers-coding.jpg",
    alt: "Hackathon 2024",
    caption: "hackathon.jpg",
  },
  {
    id: 3,
    src: "/coffee-shop-laptop-coding-session-cozy.jpg",
    alt: "Coding em cafeteria",
    caption: "coffee_code.jpg",
  },
  {
    id: 4,
    src: "/tech-conference-speaker-on-stage.jpg",
    alt: "Palestra no Dev Summit",
    caption: "talk.png",
  },
  {
    id: 5,
    src: "/hiking-nature-trail-mountains-adventure.jpg",
    alt: "Trilha no fim de semana",
    caption: "nature.jpg",
  },
  {
    id: 6,
    src: "/mechanical-keyboard-rgb-lights-desk.jpg",
    alt: "Novo teclado mecânico",
    caption: "keyboard.png",
  },
];

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () =>
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  const prevImage = () =>
    setSelectedImage((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 185) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.75 0.18 185) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`mb-8 sm:mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-primary font-mono text-xs sm:text-sm">
              ~/galeria
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground glow-text">
            $ ls -la ~/pics
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs sm:text-sm">
            // momentos capturados
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4"
          style={{
            display: "none",
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-[3/2] overflow-hidden border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:glow ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-4">
                <span className="text-primary font-mono text-[10px] sm:text-sm">
                  {image.caption}
                </span>
                <span className="text-foreground text-[10px] sm:text-sm mt-0.5 sm:mt-1 line-clamp-1">
                  {image.alt}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 scanline pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-muted-foreground hover:text-primary transition-colors z-10"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 sm:left-4 md:left-8 p-2 text-muted-foreground hover:text-primary transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 sm:right-4 md:right-8 p-2 text-muted-foreground hover:text-primary transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[80vh] aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-background to-transparent">
              <span className="text-primary font-mono text-xs sm:text-sm">
                {galleryImages[selectedImage].caption}
              </span>
              <p className="text-foreground text-sm sm:text-base">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
