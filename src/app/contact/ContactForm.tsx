"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#1a6b3c] mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais
          pour étudier votre projet.
        </p>
        <div className="bg-white rounded-xl p-4 text-sm text-gray-600">
          <p>En attendant, vous pouvez nous appeler directement :</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="tel:0612062868" className="text-[#1a6b3c] font-bold hover:underline">
              📞 06 12 06 28 68
            </a>
            <a href="tel:0634974478" className="text-[#1a6b3c] font-bold hover:underline">
              📞 06 34 97 44 78
            </a>
          </div>
        </div>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }}
          className="mt-4 text-sm text-gray-500 hover:text-[#1a6b3c] underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 XX XX XX XX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jean.dupont@email.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
          Service souhaité <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition bg-white"
        >
          <option value="">Sélectionnez un service</option>
          <option value="ite">Isolation par l&apos;Extérieur (ITE)</option>
          <option value="ravalement">Ravalement de Façade</option>
          <option value="renovation">Rénovation Intérieure</option>
          <option value="autre">Autre / Plusieurs services</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Votre message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet (type de logement, surface, travaux souhaités...)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3c] focus:border-transparent transition resize-none"
        />
      </div>

      <div className="bg-green-50 rounded-lg p-3 text-xs text-gray-600 border border-green-100">
        ✔ Devis gratuit et sans engagement — Réponse sous 24h
      </div>

      <button
        type="submit"
        className="w-full btn-primary text-center text-lg py-4"
      >
        Envoyer ma demande de devis
      </button>
    </form>
  );
}
