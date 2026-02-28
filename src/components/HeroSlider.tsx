"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    badge: "Isolation & performance",
    title: "ISOL ECO LOGIS, expert RGE en isolation durable",
    description:
      "Solutions sur mesure pour optimiser le confort de votre habitat, réduire vos factures d'énergie et prolonger la vie de vos façades.",
    image: "https://isol-eco-logis.com/images/slide1.jpg",
    alt: "Artisan appliquant une isolation thermique sur une façade",
    cta1: { label: "Demander un devis", href: "/contact" },
    cta2: { label: "Découvrir nos services", href: "/services" },
  },
  {
    badge: "Façades rénovées",
    title: "Ravalement & peinture pour un extérieur protégé",
    description:
      "Nettoyage, traitement et finitions esthétiques pour redonner de l'éclat durable à votre maison en Seine-Maritime.",
    image: "https://isol-eco-logis.com/images/slide2.jpg",
    alt: "Échafaudage devant une façade en cours de rénovation",
    cta1: { label: "Voir les prestations", href: "/services" },
    cta2: { label: "Parler à un expert", href: "/contact" },
  },
  {
    badge: "Confort intérieur",
    title: "Isolation par soufflage rapide et efficace",
    description:
      "Isoler vos combles en quelques heures avec des matériaux performants biosourcés pour un confort thermique immédiat.",
    image: "https://isol-eco-logis.com/images/slide3.jpg",
    alt: "Technicien soufflant de l'isolant dans des combles",
    cta1: { label: "Prendre rendez-vous", href: "/contact" },
    cta2: { label: "Nos services", href: "/services" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[650px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            unoptimized
            className="object-cover opacity-50"
            priority={i === 0}
          />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl mx-auto text-center text-white">
                <span className="inline-block bg-[#1a6b3c] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-6">
                  {slide.badge}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href={slide.cta1.href} className="btn-accent text-lg">
                    {slide.cta1.label}
                  </Link>
                  <Link
                    href={slide.cta2.href}
                    className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1a6b3c] transition-colors text-lg"
                  >
                    {slide.cta2.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dot controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Afficher la diapositive ${i + 1}`}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L1440 60L1440 0C1200 40 960 60 720 40C480 20 240 0 0 30L0 60Z"
            fill="#f9f9f7"
          />
        </svg>
      </div>
    </section>
  );
}
