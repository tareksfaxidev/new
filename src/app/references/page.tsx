import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "Isolation par l'Extérieur",
    categoryColor: "from-[#1a6b3c] to-[#2d9e5f]",
    badgeColor: "bg-green-100 text-green-800",
    icon: "🏠",
    title: "ITE — Maison individuelle",
    location: "Terres-de-Caux (76640)",
    description:
      "Isolation thermique par l'extérieur d'une maison de 120 m². Pose d'isolant synthétique haute performance avec enduit de finition teinté. Réduction des pertes de chaleur de 28 % et prime CEE déduite.",
    tags: ["ITE", "Enduit", "Prime CEE"],
  },
  {
    id: 2,
    category: "Isolation par l'Extérieur",
    categoryColor: "from-[#1a6b3c] to-[#2d9e5f]",
    badgeColor: "bg-green-100 text-green-800",
    icon: "🏠",
    title: "ITE — Pavillon années 70",
    location: "Yvetot (76190)",
    description:
      "Rénovation énergétique complète d'un pavillon des années 70. Isolation par l'extérieur avec bardage bois, remplacement des menuiseries et traitement des ponts thermiques.",
    tags: ["ITE", "Bardage bois", "Rénovation globale"],
  },
  {
    id: 3,
    category: "Ravalement de Façade",
    categoryColor: "from-[#2d5a8e] to-[#4a7fc1]",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: "🎨",
    title: "Ravalement — Maison de maître",
    location: "Fécamp (76400)",
    description:
      "Ravalement complet d'une maison de maître avec nettoyage haute pression, traitement des fissures, application d'un enduit monocouche et peinture de finition. Résultat impeccable.",
    tags: ["Ravalement", "Enduit monocouche", "Peinture"],
  },
  {
    id: 4,
    category: "Ravalement de Façade",
    categoryColor: "from-[#2d5a8e] to-[#4a7fc1]",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: "🎨",
    title: "Ravalement — Immeuble collectif",
    location: "Le Havre (76600)",
    description:
      "Ravalement de façade d'un immeuble de 6 appartements. Nettoyage, rebouchage, application d'un enduit projeté et peinture façade. Travaux réalisés en 10 jours avec échafaudage sécurisé.",
    tags: ["Ravalement", "Immeuble", "Enduit projeté"],
  },
  {
    id: 5,
    category: "Rénovation Intérieure",
    categoryColor: "from-[#8e4a2d] to-[#c17a4a]",
    badgeColor: "bg-orange-100 text-orange-800",
    icon: "🛠️",
    title: "Rénovation complète — Appartement",
    location: "Rouen (76000)",
    description:
      "Rénovation intérieure complète d'un appartement de 65 m² : peinture murs et plafonds, pose de parquet flottant, réfection de la salle de bain et de la cuisine. Finitions soignées.",
    tags: ["Peinture", "Parquet", "Salle de bain"],
  },
  {
    id: 6,
    category: "Rénovation Intérieure",
    categoryColor: "from-[#8e4a2d] to-[#c17a4a]",
    badgeColor: "bg-orange-100 text-orange-800",
    icon: "🛠️",
    title: "Réfection — Maison ancienne",
    location: "Bolbec (76210)",
    description:
      "Réfection intérieure d'une maison ancienne : traitement de l'humidité, enduit de lissage, peinture, pose de carrelage et remplacement des plinthes. Travaux livrés dans les délais.",
    tags: ["Enduit", "Carrelage", "Traitement humidité"],
  },
  {
    id: 7,
    category: "Isolation par l'Extérieur",
    categoryColor: "from-[#1a6b3c] to-[#2d9e5f]",
    badgeColor: "bg-green-100 text-green-800",
    icon: "🏠",
    title: "ITE + Ravalement — Maison mitoyenne",
    location: "Lillebonne (76170)",
    description:
      "Chantier combiné : isolation par l'extérieur sur les murs pignons et ravalement de façade sur la partie avant. Travaux coordonnés pour un résultat homogène et une économie d'énergie maximale.",
    tags: ["ITE", "Ravalement", "Chantier combiné"],
  },
  {
    id: 8,
    category: "Ravalement de Façade",
    categoryColor: "from-[#2d5a8e] to-[#4a7fc1]",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: "🎨",
    title: "Peinture façade — Maison contemporaine",
    location: "Caudebec-en-Caux (76490)",
    description:
      "Nettoyage et peinture de façade d'une maison contemporaine. Application d'une peinture façade microporeuse haute durabilité, résistante aux intempéries normandes. Garantie 10 ans.",
    tags: ["Peinture façade", "Nettoyage", "Garantie 10 ans"],
  },
  {
    id: 9,
    category: "Rénovation Intérieure",
    categoryColor: "from-[#8e4a2d] to-[#c17a4a]",
    badgeColor: "bg-orange-100 text-orange-800",
    icon: "🛠️",
    title: "Peinture intérieure — Maison neuve",
    location: "Saint-Romain-de-Colbosc (76430)",
    description:
      "Peinture intérieure complète d'une maison neuve de 140 m² : préparation des supports, application de deux couches de peinture mate sur murs et plafonds, finitions soignées dans toutes les pièces.",
    tags: ["Peinture", "Maison neuve", "Finitions"],
  },
];

const testimonials = [
  {
    name: "Marie L.",
    location: "Terres-de-Caux",
    rating: 5,
    text: "Équipe très professionnelle et sérieuse. Les travaux d'isolation ont été réalisés dans les délais et le résultat est parfait. Ma maison est beaucoup plus chaude cet hiver !",
    service: "Isolation par l'Extérieur",
  },
  {
    name: "Jean-Pierre M.",
    location: "Yvetot",
    rating: 5,
    text: "Excellent travail pour le ravalement de ma façade. Propre, rapide et soigné. Je recommande vivement ISOL ECO LOGIS à tous mes voisins.",
    service: "Ravalement de Façade",
  },
  {
    name: "Sophie D.",
    location: "Le Havre",
    rating: 5,
    text: "Très satisfaite de la rénovation de mon appartement. L'équipe a été à l'écoute de mes souhaits et le rendu final dépasse mes attentes. Merci !",
    service: "Rénovation Intérieure",
  },
];

export default function ReferencesPage() {
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
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-[#f5a623] rounded-full"></span>
              Nos réalisations — Projets terminés
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nos <span className="text-[#f5a623]">Références</span> &{" "}
              <span className="text-[#7dd3a8]">Projets</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Découvrez nos chantiers réalisés en Seine-Maritime et dans les départements voisins.
              Isolation, ravalement, rénovation intérieure — chaque projet témoigne de notre
              engagement qualité.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L1440 60L1440 0C1200 40 960 60 720 40C480 20 240 0 0 30L0 60Z"
              fill="#f9f9f7"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "9+", label: "Projets réalisés" },
              { value: "3", label: "Types de prestations" },
              { value: "76", label: "Seine-Maritime" },
              { value: "100%", label: "Clients satisfaits" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-bold text-[#1a6b3c] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Projets</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Chaque chantier est réalisé avec soin, dans le respect des délais et de votre budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-br ${project.categoryColor} p-6 text-white`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-3xl">{project.icon}</span>
                      <h3 className="text-lg font-bold mt-2 leading-tight">{project.title}</h3>
                      <p className="text-sm text-white/80 mt-1">📍 {project.location}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${project.badgeColor} shrink-0 ml-2`}
                    >
                      {project.category.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Avis de nos clients</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              La satisfaction de nos clients est notre meilleure récompense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#f9f9f7] rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-[#f5a623] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.location} — {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a6b3c] to-[#0f3320] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre projet sera notre prochaine référence !
          </h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Contactez-nous pour un devis gratuit et personnalisé. Nous intervenons en
            Seine-Maritime et dans les départements voisins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0612062868" className="btn-primary text-lg bg-white text-[#1a6b3c] hover:bg-gray-100">
              📞 06 12 06 28 68
            </a>
            <Link href="/contact" className="btn-accent text-lg">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
