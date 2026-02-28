import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — ISOL ECO LOGIS",
  description:
    "Contactez ISOL ECO LOGIS pour un devis gratuit. Isolation extérieure, ravalement de façade, rénovation intérieure en Normandie. 06 12 06 28 68.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a6b3c] to-[#0f3320] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Demandez votre devis gratuit et personnalisé. Notre équipe vous répond rapidement
            pour étudier votre projet.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="section-title">Nos Coordonnées</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                N&apos;hésitez pas à nous contacter par téléphone, email ou via le formulaire
                ci-contre. Nous vous répondrons dans les plus brefs délais.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Téléphone</h3>
                    <a href="tel:0612062868" className="text-[#1a6b3c] hover:underline font-medium block">
                      06 12 06 28 68
                    </a>
                    <a href="tel:0634974478" className="text-[#1a6b3c] hover:underline font-medium block">
                      06 34 97 44 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:isol-eco-logis@outlook.com" className="text-[#1a6b3c] hover:underline font-medium break-all">
                      isol-eco-logis@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">76640 Terres-de-Caux</p>
                    <p className="text-sm text-gray-500 mt-1">Normandie, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0">
                    🌐
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Réseaux sociaux</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://www.facebook.com/61565894874382/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </a>
                      <a
                        href="https://www.linkedin.com/in/isol-eco-logis-90a623379/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#005885] transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RGE badge */}
              <div className="mt-8 bg-[#1a6b3c] text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">✔ Certifié RGE Qualibat</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Notre certification RGE vous permet de bénéficier des aides de l&apos;État
                  (Prime CEE). Nous nous occupons de toutes les démarches administratives
                  pour vous simplifier la vie.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="section-title">Demande de Devis Gratuit</h2>
              <p className="text-gray-600 mb-6">
                Remplissez ce formulaire et nous vous recontacterons rapidement pour étudier
                votre projet et vous proposer un devis personnalisé.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-8">Notre Zone d&apos;Intervention</h2>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 flex items-center justify-center border border-gray-200">
            <div className="text-center text-gray-500">
              <div className="text-5xl mb-3">📍</div>
              <p className="font-semibold text-gray-700">76640 Terres-de-Caux</p>
              <p className="text-sm">Normandie et alentours</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
