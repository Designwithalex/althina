"use client";
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
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: negro 50% + blur 5px para suavizar la calidad */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[8px]" aria-hidden />

      {/* Gradient extra en los bordes para limpiar los cortes */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-althina-dark to-transparent" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-althina-dark/50 to-transparent" aria-hidden />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1
            className={`font-bungee text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight tracking-wide transition-all duration-700 ${
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
            className={`mt-6 text-lg sm:text-xl text-white/80 font-poppins max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            El juego de pases aéreos de raíces brasileras que vibra
            en cada parque y cancha de{" "}
            <strong className="text-althina-yellow font-semibold">Buenos Aires</strong>.
          </p>

          <div
            className={`mt-10 transition-all duration-700 delay-400 ${
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs font-poppins tracking-widest uppercase">Scrolleá</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
