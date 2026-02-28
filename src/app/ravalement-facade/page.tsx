import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravalement de Façade — ISOL ECO LOGIS",
  description:
    "Ravalement de façade en Normandie. Embellissement, rénovation complète, peinture et enduit. Certifié RGE Qualibat. Devis gratuit.",
};

export default function RavalementFacadePage() {
  return (
    <main>
      {/* Hero with image */}
      <section className="relative text-white py-28 overflow-hidden">
        <Image
          src="https://isol-eco-logis.com/images/slide2.jpg"
          alt="Ravalement de façade"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a8e]/90 to-[#1a3a5c]/80" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-sm text-[#7db8e8] mb-3 font-medium">
              <Link href="/" className="hover:underline">Accueil</Link> &rsaquo;{" "}
              <Link href="/services" className="hover:underline">Services</Link> &rsaquo; Ravalement de Façade
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ravalement de Façade
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Redonnez vie à votre maison ! Nos experts en ravalement de façade vous proposent
              des solutions adaptées pour embellir et protéger votre habitation durablement.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:0612062868" className="btn-accent text-lg">📞 Devis gratuit</a>
              <Link href="/contact" className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-[#2d5a8e] transition-colors">
                Formulaire de contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Pourquoi ravaler votre façade ?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le ravalement de façade est bien plus qu&apos;une simple opération esthétique.
                C&apos;est un entretien indispensable pour protéger votre maison des intempéries,
                de l&apos;humidité et du temps qui passe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                En Normandie, les conditions climatiques (pluie, vent, humidité) peuvent accélérer
                la dégradation des façades. Un ravalement régulier est donc essentiel pour préserver
                la durabilité de votre bien immobilier.
              </p>
              <div className="bg-[#2d5a8e] text-white rounded-xl p-6">
                <p className="font-bold text-lg mb-2">💡 Bon à savoir</p>
                <p className="text-gray-200 text-sm">
                  La loi impose un ravalement de façade tous les <strong className="text-[#f5a623]">10 ans</strong> dans
                  certaines communes. Renseignez-vous auprès de votre mairie.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "🛡️", title: "Protection", desc: "Protège votre maison des intempéries, de l'humidité et des variations de température." },
                { icon: "✨", title: "Esthétique", desc: "Redonne un aspect neuf et soigné à votre façade, valorisant votre bien." },
                { icon: "🏠", title: "Durabilité", desc: "Préserve la structure de votre maison et prolonge sa durée de vie." },
                { icon: "📈", title: "Valorisation", desc: "Augmente la valeur de votre bien immobilier sur le marché." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#2d5a8e]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prestations with images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Nos Prestations de Ravalement</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Nous intervenons sur tous types de façades avec des techniques adaptées à chaque situation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: "🎨",
                title: "Embellissement des Façades",
                desc: "Redonnez de l'éclat à votre façade avec nos solutions de peinture et d'enduit décoratif. Nous vous proposons un large choix de couleurs et de textures pour personnaliser votre maison.",
                features: [
                  "Nettoyage haute pression",
                  "Application d'enduit décoratif",
                  "Peinture façade haute durabilité",
                  "Finitions soignées",
                ],
                color: "bg-[#2d5a8e]",
                img: "https://isol-eco-logis.com/images/slide2.jpg",
              },
              {
                icon: "🔨",
                title: "Rénovation Complète",
                desc: "Pour les façades très dégradées, nous réalisons une rénovation complète incluant la réparation des fissures, le traitement des moisissures et la remise en état totale.",
                features: [
                  "Diagnostic complet de la façade",
                  "Réparation des fissures",
                  "Traitement anti-humidité",
                  "Remise en état totale",
                ],
                color: "bg-[#1a3a5c]",
                img: "https://isol-eco-logis.com/images/slide1.jpg",
              },
              {
                icon: "🖌️",
                title: "Peinture et Enduit",
                desc: "Nos artisans qualifiés appliquent peintures et enduits de qualité professionnelle pour une protection durable et un rendu esthétique parfait.",
                features: [
                  "Enduit de façade monocouche",
                  "Peinture minérale ou acrylique",
                  "Traitement hydrofuge",
                  "Garantie décennale",
                ],
                color: "bg-[#4a7fc1]",
                img: "https://isol-eco-logis.com/images/slide3.jpg",
              },
            ].map((prestation) => (
              <div key={prestation.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={prestation.img}
                    alt={prestation.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${prestation.color} opacity-70`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <div className="text-4xl mb-2">{prestation.icon}</div>
                    <h3 className="text-xl font-bold text-center">{prestation.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{prestation.desc}</p>
                  <ul className="space-y-2">
                    {prestation.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#2d5a8e]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chantier gallery */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Nos Réalisations</h2>
          <p className="section-subtitle text-center max-w-xl mx-auto">
            Quelques exemples de ravalement réalisés en Normandie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="relative rounded-2xl overflow-hidden h-72 shadow-md group">
              <Image
                src="https://isol-eco-logis.com/images/slide2.jpg"
                alt="Ravalement façade maison"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold">Ravalement complet — Normandie</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { src: "https://isol-eco-logis.com/images/slide1.jpg", label: "Enduit décoratif" },
                { src: "https://isol-eco-logis.com/images/slide3.jpg", label: "Peinture façade" },
                { src: "https://isol-eco-logis.com/images/ISO ECO LOGIS.png", label: "Équipe sur chantier" },
                { src: "https://isol-eco-logis.com/images/slide2.jpg", label: "Finitions soignées" },
              ].map((item, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden h-28 shadow-sm group">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white text-xs font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Notre Processus d&apos;Intervention</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { step: "01", title: "Diagnostic", desc: "Évaluation de l'état de votre façade et identification des travaux nécessaires." },
              { step: "02", title: "Devis gratuit", desc: "Proposition détaillée et personnalisée adaptée à votre projet et votre budget." },
              { step: "03", title: "Travaux", desc: "Réalisation des travaux par nos artisans qualifiés dans les délais convenus." },
              { step: "04", title: "Réception", desc: "Vérification finale avec vous pour garantir votre satisfaction totale." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
                <div className="w-12 h-12 bg-[#2d5a8e] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#2d5a8e] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d5a8e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Votre façade mérite le meilleur</h2>
          <p className="text-gray-200 mb-8">
            Contactez-nous pour un diagnostic gratuit et un devis personnalisé.
            Nos experts se déplacent chez vous en Normandie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0612062868" className="btn-accent text-lg">📞 06 12 06 28 68</a>
            <Link href="/contact" className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-[#2d5a8e] transition-colors text-lg">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
