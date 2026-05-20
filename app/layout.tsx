import type { Metadata } from "next";
import { Bungee, Bungee_Inline, Poppins } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
});

const bungeeInline = Bungee_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee-inline",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altinha BSAS – La pelota nunca toca el piso",
  description:
    "Altinha es el juego de pases aéreos de raíces brasileras que vibra en las canchas y parques de Buenos Aires. Coordinación, alegría y comunidad.",
  openGraph: {
    title: "Altinha BSAS – La pelota nunca toca el piso",
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
    <html
      lang="es"
      className={`${bungee.variable} ${bungeeInline.variable} ${poppins.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
