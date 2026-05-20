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

      {/* Warm gradient overlay — readable text on left, photo breathes on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-althina-dark/90 via-althina-dark/70 to-althina-dark/20" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-althina-dark to-transparent" />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-althina-dark/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-2xl">
          {/* Logo — grande y protagónico */}
          <div
            className={`mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Image
              src="/logo.jpeg"
              alt="Althina BSAS"
              width={140}
              height={140}
              priority
              className="rounded-full ring-4 ring-althina-yellow/60 shadow-2xl hover:ring-althina-yellow transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Headline */}
          <h1
            className={`font-bebas text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-none tracking-wide transition-all duration-700 delay-150 ${
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
            className={`mt-6 text-lg sm:text-xl text-white/85 font-outfit max-w-lg leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Althina es el juego de pases aéreos de raíces brasileras que vibra
            en cada parque y cancha de{" "}
            <strong className="text-althina-yellow">Buenos Aires</strong>.
          </p>

          <div
            className={`mt-10 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#que-es"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-bold text-lg px-9 py-4 rounded-full border-2 border-white/40 transition-all duration-200 backdrop-blur-sm"
            >
              Conocé más
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator — inset-x-0 + flex justify-center para centrar en todos los breakpoints */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs font-outfit tracking-widest uppercase">Scrolleá</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
