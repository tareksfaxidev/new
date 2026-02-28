import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isolation par l'Extérieur (ITE) — ISOL ECO LOGIS",
  description:
    "Expert en isolation thermique par l'extérieur en Normandie. Réduisez jusqu'à 30% vos pertes de chaleur. Certifié RGE, Prime CEE disponible. Devis gratuit.",
};

export default function IsolationExterieurePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f3320] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-sm text-[#7dd3a8] mb-3 font-medium">
              <Link href="/" className="hover:underline">Accueil</Link> &rsaquo;{" "}
              <Link href="/services" className="hover:underline">Services</Link> &rsaquo; Isolation par l&apos;Extérieur
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Isolation par l&apos;Extérieur (ITE)
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Améliorez la performance énergétique de votre logement tout en modernisant votre façade.
              La solution la plus efficace pour supprimer les ponts thermiques.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Qu&apos;est-ce que l&apos;ITE ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;isolation thermique par l&apos;extérieur (ITE) consiste à envelopper votre maison
                d&apos;un manteau isolant posé sur les murs extérieurs. Cette technique est particulièrement
                efficace car elle traite les ponts thermiques et améliore significativement le confort
                de votre habitation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Contrairement à l&apos;isolation par l&apos;intérieur, l&apos;ITE ne réduit pas la surface
                habitable et permet de rénover l&apos;aspect extérieur de votre maison en même temps.
              </p>
              <div className="bg-[#1a6b3c] text-white rounded-xl p-6">
                <p className="font-bold text-lg mb-2">💡 Le saviez-vous ?</p>
                <p className="text-gray-200 text-sm">
                  Les murs représentent environ 25% des déperditions thermiques d&apos;une maison.
                  Une bonne isolation extérieure peut réduire jusqu&apos;à <strong className="text-[#f5a623]">30%</strong> vos pertes de chaleur.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30%", label: "Réduction des pertes de chaleur", color: "bg-[#1a6b3c]" },
                { value: "0", label: "Pont thermique supprimé", color: "bg-[#2d5a8e]" },
                { value: "+", label: "Valeur immobilière augmentée", color: "bg-[#8e4a2d]" },
                { value: "RGE", label: "Certifié Qualibat", color: "bg-[#5a2d8e]" },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.color} text-white rounded-xl p-6 text-center`}>
                  <div className="text-3xl font-bold text-[#f5a623] mb-2">{stat.value}</div>
                  <div className="text-xs text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Nos Solutions d&apos;Isolation</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Nous proposons différentes solutions adaptées à vos besoins et à votre budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: "🧱",
                title: "Isolant Synthétique",
                subtitle: "Haute performance",
                desc: "Le polystyrène expansé (PSE) ou extrudé (XPS) offre d'excellentes performances thermiques à un coût maîtrisé. Idéal pour la plupart des projets de rénovation.",
                features: ["Haute résistance thermique", "Légèreté et facilité de pose", "Excellent rapport qualité/prix", "Durabilité prouvée"],
                color: "border-[#1a6b3c]",
                headerColor: "bg-[#1a6b3c]",
              },
              {
                icon: "🌿",
                title: "Isolant Naturel",
                subtitle: "Écologique",
                desc: "La laine de bois, le liège ou la fibre de bois sont des matériaux biosourcés qui offrent d'excellentes performances thermiques et acoustiques tout en respectant l'environnement.",
                features: ["Matériaux biosourcés", "Régulation hygrométrique", "Performances acoustiques", "Respect de l'environnement"],
                color: "border-[#2d9e5f]",
                headerColor: "bg-[#2d9e5f]",
              },
              {
                icon: "🏗️",
                title: "Bardage",
                subtitle: "Bois ou PVC",
                desc: "Le bardage associe isolation et esthétique. Disponible en bois naturel ou en PVC, il protège votre façade tout en lui donnant un aspect moderne et soigné.",
                features: ["Aspect moderne et soigné", "Protection contre les intempéries", "Entretien facile", "Large choix de coloris"],
                color: "border-[#8e4a2d]",
                headerColor: "bg-[#8e4a2d]",
              },
            ].map((solution) => (
              <div key={solution.title} className={`bg-white rounded-2xl border-2 ${solution.color} overflow-hidden shadow-md hover:shadow-xl transition-shadow`}>
                <div className={`${solution.headerColor} text-white p-6 text-center`}>
                  <div className="text-4xl mb-2">{solution.icon}</div>
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <p className="text-sm text-white/80">{solution.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{solution.desc}</p>
                  <ul className="space-y-2">
                    {solution.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#1a6b3c]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Les Avantages de l&apos;ITE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: "🌡️", title: "Confort thermique", desc: "Chaleur en hiver, fraîcheur en été. Votre maison maintient une température agréable toute l'année." },
              { icon: "💰", title: "Économies d'énergie", desc: "Réduisez significativement vos factures de chauffage et de climatisation." },
              { icon: "🏠", title: "Façade rénovée", desc: "Profitez d'une façade neuve et moderne tout en isolant votre maison." },
              { icon: "📈", title: "Plus-value immobilière", desc: "Augmentez la valeur de votre bien grâce à une meilleure performance énergétique." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a6b3c] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aides financières */}
      <section className="py-16 bg-[#1a6b3c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Aides Financières Disponibles</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Grâce à notre certification RGE Qualibat, vous pouvez bénéficier des aides de l&apos;État
                pour financer vos travaux d&apos;isolation. Nous nous occupons de toutes les démarches
                administratives pour vous simplifier la vie.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-3xl">💶</span>
                  <div>
                    <h3 className="font-bold text-[#f5a623]">Prime CEE</h3>
                    <p className="text-sm text-gray-200">Certificats d&apos;Économies d&apos;Énergie — directement déduite de votre devis.</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <h3 className="font-bold text-[#f5a623]">Certification RGE</h3>
                    <p className="text-sm text-gray-200">Notre certification Qualibat vous garantit des travaux de qualité et l&apos;accès aux aides.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Demandez votre devis gratuit</h3>
              <p className="text-gray-200 mb-6">
                Nos experts se déplacent chez vous pour évaluer votre projet et vous proposer
                la meilleure solution au meilleur prix.
              </p>
              <div className="space-y-3">
                <a href="tel:0612062868" className="btn-accent w-full text-center block text-lg">
                  📞 06 12 06 28 68
                </a>
                <a href="tel:0634974478" className="bg-white/20 hover:bg-white/30 text-white w-full text-center block py-3 px-6 rounded-md font-semibold transition-colors">
                  📞 06 34 97 44 78
                </a>
                <Link href="/contact" className="border-2 border-white text-white w-full text-center block py-3 px-6 rounded-md font-semibold hover:bg-white hover:text-[#1a6b3c] transition-colors">
                  Formulaire de contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
