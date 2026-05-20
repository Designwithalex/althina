"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <Image
        src="/images/silueta-atardecer.jpg"
        alt="Jugador de Altinha al atardecer en Río de Janeiro"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-althina-dark/92 via-althina-dark/72 to-althina-dark/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-althina-dark to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-althina-dark/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-2xl">

          {/* Wordmark logo — grande y protagónico */}
          <div
            className={`mb-10 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Image
              src="/logo_white.png"
              alt="Altinha BSAS"
              width={420}
              height={160}
              priority
              className="h-24 sm:h-28 lg:h-32 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <h1
            className={`font-bungee text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight tracking-wide transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            La pelota
            <br />
            <span className="text-althina-yellow">nunca</span>
            <br />
            toca el piso
          </h1>

          <p
            className={`mt-6 text-lg sm:text-xl text-white/80 font-poppins max-w-lg leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            El juego de pases aéreos de raíces brasileras que vibra
            en cada parque y cancha de{" "}
            <strong className="text-althina-yellow font-semibold">Buenos Aires</strong>.
          </p>

          <div
            className={`mt-10 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#que-es"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-poppins font-bold text-base px-9 py-4 rounded-full border-2 border-white/40 transition-all duration-200 backdrop-blur-sm"
            >
              Conocé más
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator — centrado en todos los breakpoints */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs font-poppins tracking-widest uppercase">Scrolleá</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
