import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISOL ECO LOGIS — Rénovation & Isolation Énergétique | Terres-de-Caux",
  description:
    "Expert en rénovation et isolation énergétique en Normandie. Isolation par l'extérieur, ravalement de façade, rénovation intérieure. Certifié RGE Qualibat. Devis gratuit.",
  keywords:
    "isolation extérieure, ravalement façade, rénovation intérieure, ITE, RGE, Prime CEE, Terres-de-Caux, Normandie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
