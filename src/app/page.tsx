import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a6b3c] via-[#1a5530] to-[#0f3320] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)"
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse"></span>
              Certifié RGE Qualibat — Devis Gratuit
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Votre expert en{" "}
              <span className="text-[#f5a623]">rénovation</span> et{" "}
              <span className="text-[#7dd3a8]">isolation énergétique</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Chez ISOL ECO LOGIS, nous vous accompagnons dans tous vos projets d&apos;amélioration
              et de rénovation de l&apos;habitat. Améliorez votre confort thermique, réduisez vos
              factures d&apos;énergie et valorisez votre bien immobilier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-accent text-lg">
                Demander un devis gratuit
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1a6b3c] transition-colors text-lg"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 40C480 20 240 0 0 30L0 60Z" fill="#f9f9f7" />
          </svg>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos Prestations</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Des solutions complètes pour améliorer la performance énergétique et l&apos;esthétique de votre habitat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ITE */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="bg-gradient-to-br from-[#1a6b3c] to-[#2d9e5f] p-8 text-white text-center">
                <div className="text-5xl mb-3">🏠</div>
                <h3 className="text-xl font-bold">Isolation par l&apos;Extérieur</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Améliorez la performance énergétique de votre logement tout en modernisant votre façade.
                  Réduisez jusqu&apos;à 30% vos pertes de chaleur.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Isolant synthétique haute performance</li>
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Isolant naturel écologique</li>
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Bardage bois ou PVC</li>
                </ul>
                <Link href="/isolation-exterieure" className="btn-primary text-sm w-full text-center block">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Ravalement */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="bg-gradient-to-br from-[#2d5a8e] to-[#4a7fc1] p-8 text-white text-center">
                <div className="text-5xl mb-3">🎨</div>
                <h3 className="text-xl font-bold">Ravalement de Façade</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Redonnez vie à votre maison ! Nos prestations comprennent l&apos;embellissement,
                  la rénovation complète et la protection de vos façades.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Embellissement des façades</li>
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Rénovation complète</li>
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Peinture et enduit</li>
                </ul>
                <Link href="/ravalement-facade" className="btn-primary text-sm w-full text-center block">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Rénovation intérieure */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="bg-gradient-to-br from-[#8e4a2d] to-[#c17a4a] p-8 text-white text-center">
                <div className="text-5xl mb-3">🛠️</div>
                <h3 className="text-xl font-bold">Rénovation Intérieure</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Nous intervenons pour tous vos travaux intérieurs avec des finitions soignées
                  et un travail de qualité garanti.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Peinture murs et plafonds</li>
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Sols</li>
                  <li className="flex items-center gap-2"><span className="text-[#1a6b3c]">✓</span> Réfection complète</li>
                </ul>
                <Link href="/renovation-interieure" className="btn-primary text-sm w-full text-center block">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Pourquoi choisir ISOL ECO LOGIS ?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nous mettons notre expertise au service de votre confort et de votre satisfaction.
                Chaque projet est traité avec le plus grand soin et le professionnalisme que vous méritez.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "🏆", text: "Entreprise certifiée RGE (Qualibat)" },
                  { icon: "📋", text: "Devis gratuits et personnalisés" },
                  { icon: "💰", text: "Prime CEE directement déduite de votre devis" },
                  { icon: "🤝", text: "Accompagnement complet pour les démarches administratives" },
                  { icon: "👂", text: "Équipe à votre écoute" },
                  { icon: "⭐", text: "Engagement qualité et satisfaction client" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a6b3c] to-[#0f3320] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Aides financières disponibles</h3>
              <div className="bg-white/10 rounded-xl p-6 mb-6">
                <div className="text-4xl mb-3">💶</div>
                <h4 className="text-xl font-bold text-[#f5a623] mb-2">Prime CEE</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Grâce à notre certification RGE, vous pouvez bénéficier des aides de l&apos;État
                  comme la Prime CEE. Nous nous occupons des démarches pour vous simplifier la vie.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-[#7dd3a8] font-semibold mb-1">✔ Certifié RGE Qualibat</p>
                <p className="text-sm text-gray-300">La prime est directement déduite de votre devis</p>
              </div>
              <Link href="/contact" className="btn-accent mt-6 w-full text-center block">
                Obtenir mon devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1a6b3c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30%", label: "Réduction des pertes de chaleur" },
              { value: "RGE", label: "Certifié Qualibat" },
              { value: "100%", label: "Devis gratuit & personnalisé" },
              { value: "CEE", label: "Prime déduite du devis" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#f5a623] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Prêt à améliorer votre habitat ?</h2>
          <p className="section-subtitle">
            Contactez-nous dès aujourd&apos;hui pour un devis gratuit et personnalisé.
            Notre équipe est à votre écoute pour répondre à toutes vos questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0612062868" className="btn-primary text-lg">
              📞 06 12 06 28 68
            </a>
            <Link href="/contact" className="btn-accent text-lg">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
