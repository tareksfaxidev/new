import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import ContactForm from "@/app/contact/ContactForm";

export default function Home() {
  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Cards */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1a6b3c] font-semibold uppercase tracking-wider text-sm">Ce que nous faisons</span>
            <h2 className="section-title mt-2">Nos Prestations</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Des solutions complètes pour améliorer la performance énergétique et l&apos;esthétique de votre habitat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ITE */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://isol-eco-logis.com/images/slide1.jpg"
                  alt="Isolation par l'extérieur"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a6b3c]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Isolation par l&apos;Extérieur</h3>
                </div>
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://isol-eco-logis.com/images/slide2.jpg"
                  alt="Ravalement de façade"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d5a8e]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Ravalement de Façade</h3>
                </div>
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
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://isol-eco-logis.com/images/slide3.jpg"
                  alt="Rénovation intérieure"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8e4a2d]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Rénovation Intérieure</h3>
                </div>
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

      {/* Notre processus */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#1a6b3c] font-semibold uppercase tracking-wider text-sm">Simple et rapide</span>
            <h2 className="section-title mt-2">Comment ça marche ?</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              De la prise de contact à la réception des travaux, nous vous accompagnons à chaque étape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "📞",
                title: "Prise de contact",
                desc: "Appelez-nous ou remplissez le formulaire. Nous vous répondons sous 24h.",
              },
              {
                step: "02",
                icon: "🔍",
                title: "Visite & diagnostic",
                desc: "Nos experts se déplacent gratuitement pour évaluer votre projet.",
              },
              {
                step: "03",
                icon: "📋",
                title: "Devis personnalisé",
                desc: "Vous recevez un devis détaillé, transparent et sans engagement.",
              },
              {
                step: "04",
                icon: "🏗️",
                title: "Réalisation",
                desc: "Nos équipes qualifiées réalisent les travaux dans les délais convenus.",
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a6b3c] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-gray-300 text-2xl z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#1a6b3c] font-semibold uppercase tracking-wider text-sm">Ils nous font confiance</span>
            <h2 className="section-title mt-2">Avis de nos clients</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              La satisfaction de nos clients est notre meilleure récompense.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie-Claire D.",
                location: "Fauville-en-Caux",
                rating: 5,
                text: "Excellent travail ! L'équipe d'ISOL ECO LOGIS a réalisé l'isolation extérieure de notre maison en un temps record. Résultat impeccable et économies d'énergie visibles dès la première facture.",
                service: "Isolation par l'Extérieur",
              },
              {
                name: "Jean-Pierre M.",
                location: "Yvetot",
                rating: 5,
                text: "Très professionnel du début à la fin. Le ravalement de notre façade a transformé notre maison. Les artisans sont soigneux, ponctuels et le résultat est magnifique. Je recommande vivement !",
                service: "Ravalement de Façade",
              },
              {
                name: "Sophie L.",
                location: "Bolbec",
                rating: 5,
                text: "Rénovation complète de notre salon et cuisine. Travail de qualité, finitions parfaites. L'équipe a été à l'écoute de nos souhaits et a su nous conseiller. Très satisfaite !",
                service: "Rénovation Intérieure",
              },
            ].map((review, i) => (
              <div key={i} className="bg-[#f9f9f7] rounded-2xl p-8 border border-gray-100 relative">
                <div className="text-[#f5a623] text-2xl mb-4">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1a6b3c] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location} · {review.service}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-gray-200 text-5xl font-serif leading-none">&ldquo;</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations récentes */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#1a6b3c] font-semibold uppercase tracking-wider text-sm">Nos chantiers</span>
            <h2 className="section-title mt-2">Réalisations Récentes</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Découvrez quelques-uns de nos projets réalisés en Normandie.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://isol-eco-logis.com/images/slide1.jpg",
                alt: "Isolation extérieure maison individuelle",
                label: "ITE — Maison individuelle",
                location: "Seine-Maritime",
              },
              {
                src: "https://isol-eco-logis.com/images/slide2.jpg",
                alt: "Ravalement de façade",
                label: "Ravalement — Façade rénovée",
                location: "Normandie",
              },
              {
                src: "https://isol-eco-logis.com/images/slide3.jpg",
                alt: "Isolation par soufflage",
                label: "Isolation soufflage — Combles",
                location: "Seine-Maritime",
              },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-md group h-64">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-xs text-gray-300">📍 {item.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/references" className="btn-primary text-lg">
              Voir toutes nos réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <span className="text-[#1a6b3c] font-semibold uppercase tracking-wider text-sm">Devis gratuit</span>
              <h2 className="section-title mt-2">Contactez-nous</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Vous avez un projet de rénovation ou d&apos;isolation ? Remplissez le formulaire
                et nous vous recontacterons rapidement pour étudier votre projet et vous proposer
                un devis personnalisé et sans engagement.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <p className="font-bold text-gray-800">Téléphone</p>
                    <a href="tel:0612062868" className="text-[#1a6b3c] hover:underline font-medium">06 12 06 28 68</a>
                    <span className="text-gray-400 mx-2">·</span>
                    <a href="tel:0634974478" className="text-[#1a6b3c] hover:underline font-medium">06 34 97 44 78</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <a href="mailto:isol-eco-logis@outlook.com" className="text-[#1a6b3c] hover:underline font-medium">isol-eco-logis@outlook.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <p className="font-bold text-gray-800">Zone d&apos;intervention</p>
                    <p className="text-gray-600">76640 Terres-de-Caux — Normandie et alentours</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-bold text-[#1a6b3c] mb-1">Certifié RGE Qualibat</p>
                    <p className="text-sm text-gray-600">
                      Notre certification vous permet de bénéficier des aides de l&apos;État (Prime CEE).
                      Nous gérons toutes les démarches administratives pour vous.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
