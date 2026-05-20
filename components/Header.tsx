"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#como-jugar", label: "Cómo jugar" },
  { href: "#proximamente", label: "Próximamente" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-althina-dark/95 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Wordmark logo — blanco sobre fondos oscuros */}
        <Link href="#hero" aria-label="Altinha BSAS – inicio">
          <Image
            src="/logo_white.png"
            alt="Altinha BSAS"
            width={160}
            height={56}
            className="h-14 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-althina-yellow transition-colors font-poppins font-medium tracking-wide text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="bg-althina-orange hover:bg-althina-yellow hover:text-althina-dark text-white font-bold px-5 py-2 rounded-full transition-all duration-200 text-sm shadow-lg font-poppins"
          >
            Quiero jugar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden bg-althina-dark/97 backdrop-blur-sm border-t border-white/10 px-4 pb-4"
          aria-label="Menú móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-white/80 hover:text-althina-yellow transition-colors font-poppins font-medium border-b border-white/5 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="block mt-4 bg-althina-orange text-white text-center font-bold px-5 py-3 rounded-full font-poppins"
            onClick={() => setOpen(false)}
          >
            Quiero jugar
          </Link>
        </nav>
      )}
    </header>
  );
}
