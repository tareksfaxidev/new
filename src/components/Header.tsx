"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos Services" },
  { href: "/isolation-exterieure", label: "Isolation Extérieure" },
  { href: "/ravalement-facade", label: "Ravalement de Façade" },
  { href: "/renovation-interieure", label: "Rénovation Intérieure" },
  { href: "/references", label: "Références" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a6b3c] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="tel:0612062868" className="hover:text-yellow-300 transition-colors">
              📞 06 12 06 28 68
            </a>
            <a href="tel:0634974478" className="hover:text-yellow-300 transition-colors">
              📞 06 34 97 44 78
            </a>
            <a href="mailto:isol-eco-logis@outlook.com" className="hover:text-yellow-300 transition-colors">
              ✉️ isol-eco-logis@outlook.com
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href="https://www.facebook.com/61565894874382/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
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
              className="hover:text-yellow-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
            IEL
          </div>
          <div>
            <div className="font-bold text-[#1a6b3c] text-xl leading-tight">ISOL ECO LOGIS</div>
            <div className="text-xs text-gray-500">Rénovation & Isolation Énergétique</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1a6b3c] hover:bg-green-50 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-[#1a6b3c] hover:bg-green-50 border-b border-gray-50 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
