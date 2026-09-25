import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// next/font télécharge les polices au build et les sert depuis ton domaine :
// aucune requête vers Google côté visiteur (meilleur pour la CSP et le RGPD).
const display = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelghani Saidi · Développeur fullstack",
  description:
    "Portfolio d’Abdelghani Saidi, développeur fullstack orienté sécurité applicative, en recherche d’alternance.",
  openGraph: {
    title: "Abdelghani Saidi · Développeur fullstack",
    description: "Développeur fullstack orienté sécurité applicative, en recherche d’alternance.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F8F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1211" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
