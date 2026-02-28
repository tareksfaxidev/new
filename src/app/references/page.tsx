"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "projet1",
    title: "Projet 1",
    category: "Ravalement",
    location: "Fécamp",
    description:
      "Traitement anti-mousse, réparation des fissures et application d'une peinture pliolite pour une maison de ville.",
    date: "Janvier 2025",
    coverImage: "https://isol-eco-logis.com/images/projet1-1.jpeg",
    gallery: [
      { src: "https://isol-eco-logis.com/images/projet1-1.jpeg", caption: "Façade après rénovation complète" },
      { src: "https://isol-eco-logis.com/images/projet1-2.jpeg", caption: "Traitement des fissures et préparation" },
      { src: "https://isol-eco-logis.com/images/projet1-3.jpeg", caption: "Détail des finitions" },
    ],
  },
  {
    id: "projet2",
    title: "Projet 2",
    category: "ITE",
    location: "Yvetot",
    description:
      "Pose de panneaux polystyrène 140mm et finition enduit gratté ton pierre. Gain énergétique de 35%.",
    date: "Décembre 2024",
    coverImage: "https://isol-eco-logis.com/images/projet2-1.jpeg",
    gallery: [
      { src: "https://isol-eco-logis.com/images/projet2-1.jpeg", caption: "Isolation Thermique par l'Extérieur terminée" },
      { src: "https://isol-eco-logis.com/images/projet2-2.jpeg", caption: "Pose des panneaux isolants" },
      { src: "https://isol-eco-logis.com/images/projet2-3.jpeg", caption: "Pose des panneaux isolants" },
    ],
  },
  {
    id: "projet3",
    title: "Projet 3",
    category: "Combles",
    location: "Le Havre",
    description:
      "Isolation de combles perdus sur 85m² avec laine minérale biosourcée. Intervention réalisée en une demi-journée.",
    date: "Février 2025",
    coverImage: "https://isol-eco-logis.com/images/projet3-1.jpeg",
    gallery: [
      { src: "https://isol-eco-logis.com/images/projet3-1.jpeg", caption: "Soufflage de laine minérale dans les combles" },
      { src: "https://isol-eco-logis.com/images/projet3-2.jpeg", caption: "Trappe de visite isolée" },
      { src: "https://isol-eco-logis.com/images/projet3-3.jpeg", caption: "Vérification de l'épaisseur d'isolant" },
    ],
  },
  {
    id: "projet4",
    title: "Projet 4",
    category: "Intérieur",
    location: "Rouen",
    description:
      "Isolation phonique des murs mitoyens, pose de placo et peinture complète murs et plafonds.",
    date: "Novembre 2024",
    coverImage: "https://isol-eco-logis.com/images/projet4-1.jpeg",
    gallery: [
      { src: "https://isol-eco-logis.com/images/projet4-1.jpeg", caption: "Rénovation complète du salon" },
      { src: "https://isol-eco-logis.com/images/projet4-2.jpeg", caption: "Pose de cloisons sèches" },
      { src: "https://isol-eco-logis.com/images/projet4-3.jpeg", caption: "Cuisine : peinture et finitions" },
      { src: "https://isol-eco-logis.com/images/projet4-4.jpeg", caption: "Chambre : isolation phonique" },
      { src: "https://isol-eco-logis.com/images/projet4-5.jpeg", caption: "Salle de bain rénovée" },
      { src: "https://isol-eco-logis.com/images/projet4-6.jpeg", caption: "Rénovation complète du salon" },
      { src: "https://isol-eco-logis.com/images/projet4-7.jpeg", caption: "Pose de cloisons sèches" },
      { src: "https://isol-eco-logis.com/images/projet4-8.jpeg", caption: "Cuisine : peinture et finitions" },
      { src: "https://isol-eco-logis.com/images/projet4-10.jpeg", caption: "Chambre : isolation phonique" },
    ],
  },
  {
    id: "projet5",
    title: "Projet 5",
    category: "Sous-sol",
    location: "Bolbec",
    description:
      "Pose de panneaux isolants en sous-face de dalle pour supprimer la sensation de sol froid.",
    date: "Octobre 2024",
    coverImage: "https://isol-eco-logis.com/images/projet5-1.jpeg",
    gallery: [
      { src: "https://isol-eco-logis.com/images/projet5-1.jpeg", caption: "Isolation sous dalle béton" },
      { src: "https://isol-eco-logis.com/images/projet5-2.jpeg", caption: "Fixation des panneaux isolants" },
      { src: "https://isol-eco-logis.com/images/projet5-3.jpeg", caption: "Sous-sol isolé et propre" },
    ],
  },
];

type GalleryImage = { src: string; caption: string };

export default function ReferencesPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openGallery(images: GalleryImage[], index = 0) {
    setGalleryImages(images);
    setCurrentIndex(index);
    setGalleryOpen(true);
  }

  function closeGallery() {
    setGalleryOpen(false);
  }

  function prevImage() {
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }

  function nextImage() {
    setCurrentIndex((i) => (i + 1) % galleryImages.length);
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a6b3c] via-[#1a5530] to-[#0f3320] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Nos <span className="text-[#f5a623]">Réalisations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Découvrez nos derniers chantiers d&apos;isolation et de rénovation en Normandie.
            Cliquez sur les projets pour voir les photos.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L1440 60L1440 0C1200 40 960 60 720 40C480 20 240 0 0 30L0 60Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image with overlay */}
                <div
                  className="relative h-64 overflow-hidden cursor-pointer group"
                  onClick={() => openGallery(project.gallery, 0)}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded-full font-semibold">
                      Voir les photos
                    </span>
                  </div>
                  {/* Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 pointer-events-none">
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {project.category}
                    </span>
                    <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm flex-grow">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center text-green-600 text-sm font-semibold">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {project.date}
                    </div>
                    <button
                      onClick={() => openGallery(project.gallery, 0)}
                      className="text-sm font-bold text-slate-700 hover:text-green-600 underline cursor-pointer"
                    >
                      Voir la galerie ({project.gallery.length})
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* CTA Card */}
            <article className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center text-center p-8 text-white h-full min-h-[300px]">
              <div className="mb-4 text-5xl">👷‍♂️</div>
              <h3 className="text-xl font-bold mb-4">Votre projet ici ?</h3>
              <p className="text-slate-300 mb-6">
                Confiez-nous vos travaux d&apos;isolation ou de rénovation. Devis gratuit sous 48h.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
              >
                Commencer mon projet
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {galleryOpen && galleryImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 w-12 h-12 bg-white text-black hover:bg-gray-200 border-2 border-white z-50 flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:scale-105"
            aria-label="Fermer la galerie"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-lg transition-all z-50 group focus:outline-none"
            aria-label="Image précédente"
          >
            <svg
              className="w-12 h-12 md:w-20 md:h-20 group-hover:-translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-lg transition-all z-50 group focus:outline-none"
            aria-label="Image suivante"
          >
            <svg
              className="w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main content */}
          <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-12">
            <div className="relative w-full max-w-7xl max-h-[85vh] flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].caption}
                className="max-w-full max-h-[75vh] object-contain shadow-2xl"
              />
              <div className="mt-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <p className="text-white text-lg font-medium text-center">
                  {galleryImages[currentIndex].caption}
                </p>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-6 overflow-x-auto max-w-full p-2 opacity-80 hover:opacity-100 transition-opacity">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                      i === currentIndex ? "border-white scale-110" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
