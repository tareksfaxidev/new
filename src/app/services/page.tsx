import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services — ISOL ECO LOGIS",
  description:
    "Découvrez tous les services d'ISOL ECO LOGIS : isolation par l'extérieur, ravalement de façade, rénovation intérieure. Certifié RGE Qualibat.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero with image */}
      <section className="relative text-white py-28 overflow-hidden">
        <Image
          src="https://isol-eco-logis.com/images/ISO ECO LOGIS.png"
          alt="Services ISOL ECO LOGIS"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b3c]/90 to-[#0f3320]/80" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Des solutions complètes pour améliorer votre confort thermique, réduire vos factures
            d&apos;énergie et valoriser votre bien immobilier.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {/* ITE */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-0">
                <Image
                  src="https://isol-eco-logis.com/images/slide1.jpg"
                  alt="Isolation par l'extérieur"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b3c]/85 to-[#2d9e5f]/70" />
                <div className="relative p-10 text-white flex flex-col justify-center h-full">
                  <div className="text-6xl mb-4">🏠</div>
                  <h2 className="text-3xl font-bold mb-4">Isolation par l&apos;Extérieur (ITE)</h2>
                  <p className="text-gray-100 leading-relaxed">
                    Améliorez la performance énergétique de votre logement tout en modernisant votre façade.
                    L&apos;isolation par l&apos;extérieur est la solution la plus efficace pour supprimer
                    les ponts thermiques et réduire vos consommations d&apos;énergie.
                  </p>
                  <Link href="/isolation-exterieure" className="btn-accent mt-6 self-start">
                    Découvrir l&apos;ITE →
                  </Link>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold text-[#1a6b3c] mb-4">Nos prestations ITE</h3>
                <div className="space-y-3 mb-6">
                  {[
                    "Isolant synthétique haute performance",
                    "Isolant naturel écologique",
                    "Bardage bois ou PVC",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-[#1a6b3c] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#1a6b3c] mb-4">Les avantages</h3>
                <div className="space-y-3">
                  {[
                    "Réduire jusqu'à 30 % des pertes de chaleur",
                    "Supprimer les ponts thermiques",
                    "Rénover l'esthétique de votre façade",
                    "Augmenter la valeur de votre bien",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-[#f5a623]">🔹</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ravalement */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 order-2 lg:order-1">
                <h3 className="text-xl font-bold text-[#1a6b3c] mb-4">Nos prestations ravalement</h3>
                <div className="space-y-3 mb-6">
                  {[
                    "Embellissement des façades",
                    "Rénovation complète",
                    "Peinture et enduit",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-[#2d5a8e] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-800 text-sm font-medium">
                    💡 Un ravalement régulier protège votre maison des intempéries et préserve sa durabilité.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0 order-1 lg:order-2">
                <Image
                  src="https://isol-eco-logis.com/images/slide2.jpg"
                  alt="Ravalement de façade"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a8e]/85 to-[#4a7fc1]/70" />
                <div className="relative p-10 text-white flex flex-col justify-center h-full">
                  <div className="text-6xl mb-4">🎨</div>
                  <h2 className="text-3xl font-bold mb-4">Ravalement de Façade</h2>
                  <p className="text-gray-100 leading-relaxed">
                    Redonnez vie à votre maison ! Nos experts en ravalement de façade vous proposent
                    des solutions adaptées pour embellir et protéger votre habitation durablement.
                  </p>
                  <Link href="/ravalement-facade" className="btn-accent mt-6 self-start">
                    Découvrir le ravalement →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Rénovation intérieure */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-0">
                <Image
                  src="https://isol-eco-logis.com/images/slide3.jpg"
                  alt="Rénovation intérieure"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8e4a2d]/85 to-[#c17a4a]/70" />
                <div className="relative p-10 text-white flex flex-col justify-center h-full">
                  <div className="text-6xl mb-4">🛠️</div>
                  <h2 className="text-3xl font-bold mb-4">Rénovation Intérieure</h2>
                  <p className="text-gray-100 leading-relaxed">
                    Nous intervenons pour tous vos travaux intérieurs. Peinture, sols, réfection complète :
                    nous vous garantissons des finitions soignées et un travail de qualité.
                  </p>
                  <Link href="/renovation-interieure" className="btn-accent mt-6 self-start">
                    Découvrir la rénovation →
                  </Link>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold text-[#1a6b3c] mb-4">Nos prestations intérieures</h3>
                <div className="space-y-3 mb-6">
                  {[
                    "Peinture murs et plafonds",
                    "Sols (parquet, carrelage, stratifié)",
                    "Réfection complète",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <span className="text-[#8e4a2d] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-green-800 text-sm font-medium">
                    ⭐ Finitions soignées et travail de qualité garanti sur chaque chantier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Nos Certifications & Engagements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🏆", title: "Certifié RGE Qualibat", desc: "Reconnaissance Garant de l'Environnement pour des travaux de qualité." },
              { icon: "💶", title: "Prime CEE", desc: "Bénéficiez des aides de l'État. Nous gérons les démarches pour vous." },
              { icon: "📋", title: "Devis gratuit", desc: "Devis personnalisé et sans engagement, adapté à votre projet." },
              { icon: "🤝", title: "Accompagnement complet", desc: "Nous vous guidons de A à Z dans vos démarches administratives." },
              { icon: "👂", title: "Écoute client", desc: "Une équipe disponible et réactive pour répondre à vos besoins." },
              { icon: "⭐", title: "Qualité garantie", desc: "Engagement de satisfaction sur chaque chantier réalisé." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-green-50 rounded-xl border border-green-100 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a6b3c] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a6b3c] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un devis ?</h2>
          <p className="text-gray-200 mb-8">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0612062868" className="btn-accent text-lg">📞 06 12 06 28 68</a>
            <Link href="/contact" className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1a6b3c] transition-colors text-lg">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
