import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Althina BSAS – La pelota nunca toca el piso",
  description:
    "Althina es el juego de pases aéreos de raíces brasileras que vibra en las canchas y parques de Buenos Aires. Coordinación, alegría y comunidad.",
  openGraph: {
    title: "Althina BSAS – La pelota nunca toca el piso",
    description:
      "El juego de origen brasilero que conquistó Buenos Aires. Pases aéreos, sol, comunidad.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
