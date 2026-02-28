import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#2d9e5f] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                IEL
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">ISOL ECO LOGIS</div>
                <div className="text-xs text-gray-400">Rénovation & Isolation Énergétique</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Votre expert en rénovation et isolation énergétique. Nous améliorons votre confort thermique,
              réduisons vos factures d&apos;énergie et valorisons votre bien immobilier.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/61565894874382/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d9e5f] hover:bg-[#1a6b3c] text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/isol-eco-logis-90a623379/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d9e5f] hover:bg-[#1a6b3c] text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#2d9e5f] transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-[#2d9e5f] transition-colors">Nos Services</Link></li>
              <li><Link href="/isolation-exterieure" className="hover:text-[#2d9e5f] transition-colors">Isolation par l&apos;Extérieur</Link></li>
              <li><Link href="/ravalement-facade" className="hover:text-[#2d9e5f] transition-colors">Ravalement de Façade</Link></li>
              <li><Link href="/renovation-interieure" className="hover:text-[#2d9e5f] transition-colors">Rénovation Intérieure</Link></li>
              <li><Link href="/references" className="hover:text-[#2d9e5f] transition-colors">Références</Link></li>
              <li><Link href="/contact" className="hover:text-[#2d9e5f] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <a href="tel:0612062868" className="hover:text-[#2d9e5f] transition-colors block">06 12 06 28 68</a>
                  <a href="tel:0634974478" className="hover:text-[#2d9e5f] transition-colors block">06 34 97 44 78</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:isol-eco-logis@outlook.com" className="hover:text-[#2d9e5f] transition-colors break-all">
                  isol-eco-logis@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>76640 Terres-de-Caux</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-[#2d9e5f]/20 rounded-lg border border-[#2d9e5f]/30">
              <p className="text-xs text-[#7dd3a8] font-semibold">✔ Certifié RGE Qualibat</p>
              <p className="text-xs text-[#7dd3a8]">Devis gratuit & personnalisé</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2d4a38] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} ISOL ECO LOGIS — Tous droits réservés | 76640 Terres-de-Caux
        </div>
      </div>
    </footer>
  );
}
