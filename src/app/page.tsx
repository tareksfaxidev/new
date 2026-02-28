import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

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

      {/* Notre mission — "Pourquoi nous choisir" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section intro */}
          <div className="text-center mb-16">
            <span className="text-[#1a6b3c] font-semibold uppercase tracking-wider text-sm">Qui sommes-nous ?</span>
            <h2 className="section-title mt-2">Une entreprise locale engagée pour la performance énergétique</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Basée à Terres-de-Caux (Fauville-en-Caux), ISOL ECO LOGIS accompagne les particuliers et professionnels
              de Normandie dans leurs projets d&apos;isolation et de rénovation extérieure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://isol-eco-logis.com/images/ISO ECO LOGIS.png"
                  alt="Chantier ISOL ECO LOGIS"
                  width={600}
                  height={450}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              </div>
              {/* Decorative border */}
              <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-slate-100 rounded-2xl hidden lg:block" />
              <div className="absolute -z-10 bottom-8 -right-8 w-32 h-32 bg-green-50 rounded-full blur-2xl" />
            </div>

            {/* Content column */}
            <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
              {/* Mission card */}
              <article className="bg-slate-50 p-8 md:p-10 rounded-2xl border-l-4 border-[#1a6b3c] shadow-sm relative overflow-hidden">
                <svg className="absolute top-0 right-0 w-32 h-32 text-slate-100 -mr-8 -mt-8" fill="currentColor" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">Notre mission</h3>
                <p className="text-slate-600 mb-6 text-lg relative z-10 leading-relaxed">
                  Depuis 2024, nous concilions{" "}
                  <strong className="text-[#1a6b3c]">confort intérieur</strong>,{" "}
                  <strong className="text-[#1a6b3c]">économies d&apos;énergie</strong> et respect de l&apos;environnement.
                  Notre approche globale nous permet de traiter l&apos;enveloppe de votre bâtiment dans son ensemble.
                </p>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Études thermiques et conseils personnalisés avant travaux",
                    "Mise en œuvre par nos propres équipes qualifiées",
                    "Accompagnement complet pour les démarches administratives",
                    "Engagement qualité et satisfaction client",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#1a6b3c] bg-white shadow-sm p-1.5 rounded-full mt-0.5 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    badge: "RGE",
                    title: "Certifié QUALIBAT",
                    desc: "Travaux éligibles aux aides de l'État",
                  },
                  {
                    badge: "+2",
                    title: "Ans d'expérience",
                    desc: "Maîtrise technique et finitions soignées",
                  },
                  {
                    badge: "76",
                    title: "Local & Réactif",
                    desc: "Intervention rapide en Normandie",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="bg-slate-800 text-white font-bold p-3 rounded-lg text-center min-w-[60px] flex items-center justify-center text-lg flex-shrink-0">
                      {item.badge}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-accent text-lg text-center">
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
