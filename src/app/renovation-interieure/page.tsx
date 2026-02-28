import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rénovation Intérieure — ISOL ECO LOGIS",
  description:
    "Rénovation intérieure en Normandie. Peinture murs et plafonds, sols, réfection complète. Finitions soignées et travail de qualité. Devis gratuit.",
};

export default function RenovationInterieurePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#8e4a2d] to-[#5c2d1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-sm text-[#e8b07d] mb-3 font-medium">
              <Link href="/" className="hover:underline">Accueil</Link> &rsaquo;{" "}
              <Link href="/services" className="hover:underline">Services</Link> &rsaquo; Rénovation Intérieure
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rénovation Intérieure
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Nous intervenons pour tous vos travaux intérieurs. Peinture, sols, réfection complète :
              nous vous garantissons des finitions soignées et un travail de qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Transformez votre intérieur</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Que vous souhaitiez rafraîchir une pièce, rénover entièrement votre appartement
                ou votre maison, ISOL ECO LOGIS met son savoir-faire à votre service pour
                réaliser vos projets de rénovation intérieure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre équipe de professionnels qualifiés intervient avec soin et précision
                pour vous offrir des finitions impeccables qui correspondent à vos attentes
                et à votre style de vie.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "⭐", text: "Finitions soignées" },
                  { icon: "🤝", text: "Équipe qualifiée" },
                  { icon: "📋", text: "Devis gratuit" },
                  { icon: "⏱️", text: "Délais respectés" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#8e4a2d] to-[#c17a4a] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos domaines d&apos;intervention</h3>
              <div className="space-y-4">
                {[
                  { icon: "🖌️", title: "Peinture", desc: "Murs, plafonds, boiseries — toutes surfaces" },
                  { icon: "🏠", title: "Sols", desc: "Parquet, carrelage, stratifié, vinyle" },
                  { icon: "🔨", title: "Réfection complète", desc: "Rénovation totale de pièces ou logements" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestations détaillées */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Nos Prestations en Détail</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: "🖌️",
                title: "Peinture Murs & Plafonds",
                color: "bg-[#8e4a2d]",
                desc: "Nos peintres professionnels réalisent tous vos travaux de peinture intérieure avec des produits de qualité pour un résultat durable et esthétique.",
                features: [
                  "Préparation des surfaces",
                  "Enduit de lissage si nécessaire",
                  "Peinture mate, satinée ou brillante",
                  "Peinture décorative et effets",
                  "Boiseries et menuiseries",
                ],
              },
              {
                icon: "🏠",
                title: "Revêtements de Sol",
                color: "bg-[#5a3a1a]",
                desc: "Du parquet au carrelage en passant par le stratifié et le vinyle, nous posons tous types de revêtements de sol avec soin et précision.",
                features: [
                  "Parquet massif ou contrecollé",
                  "Stratifié et vinyle",
                  "Carrelage et faïence",
                  "Préparation du support",
                  "Plinthes et finitions",
                ],
              },
              {
                icon: "🔨",
                title: "Réfection Complète",
                color: "bg-[#c17a4a]",
                desc: "Pour une transformation totale de votre intérieur, nous prenons en charge l'ensemble des travaux de rénovation de A à Z.",
                features: [
                  "Démolition et dépose",
                  "Cloisons et doublages",
                  "Plafonds et faux-plafonds",
                  "Coordination des corps de métier",
                  "Nettoyage de chantier",
                ],
              },
            ].map((prestation) => (
              <div key={prestation.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className={`${prestation.color} text-white p-6 text-center`}>
                  <div className="text-4xl mb-2">{prestation.icon}</div>
                  <h3 className="text-xl font-bold">{prestation.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{prestation.desc}</p>
                  <ul className="space-y-2">
                    {prestation.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#8e4a2d]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Nos Engagements Qualité</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🎯", title: "Précision", desc: "Chaque détail compte. Nous travaillons avec soin pour des finitions parfaites." },
              { icon: "🧹", title: "Propreté", desc: "Nous protégeons vos meubles et nettoyons le chantier après chaque intervention." },
              { icon: "⏱️", title: "Ponctualité", desc: "Nous respectons les délais convenus pour minimiser les perturbations." },
              { icon: "💬", title: "Communication", desc: "Nous vous tenons informé de l'avancement des travaux à chaque étape." },
              { icon: "🔧", title: "Matériaux qualité", desc: "Nous utilisons uniquement des produits et matériaux de qualité professionnelle." },
              { icon: "✅", title: "Satisfaction garantie", desc: "Votre satisfaction est notre priorité. Nous ne partons pas tant que vous n'êtes pas satisfait." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#8e4a2d] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8e4a2d] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre intérieur ?</h2>
          <p className="text-gray-200 mb-8">
            Contactez-nous pour un devis gratuit et personnalisé.
            Nos artisans qualifiés sont à votre service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0612062868" className="btn-accent text-lg">📞 06 12 06 28 68</a>
            <Link href="/contact" className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-[#8e4a2d] transition-colors text-lg">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
