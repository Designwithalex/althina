import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#que-es", label: "¿Qué es Altinha?" },
  { href: "#como-jugar", label: "Cómo se juega" },
  { href: "#proximamente", label: "Próximamente" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-althina-dark border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Wordmark logo */}
          <div>
            <Link href="#hero" aria-label="Altinha BSAS – volver al inicio" className="inline-block mb-5 hover:opacity-75 transition-opacity">
              <Image
                src="/logo_white.png"
                alt="Altinha BSAS"
                width={240}
                height={90}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-poppins">
              La pelota nunca toca el piso.
              <br />
              Buenos Aires, Argentina 🇦🇷
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bungee text-sm tracking-widest text-white/50 uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-althina-yellow transition-colors text-sm font-poppins"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tagline */}
          <div>
            <h4 className="font-bungee text-sm tracking-widest text-white/50 uppercase mb-4">
              El espíritu
            </h4>
            <blockquote className="text-althina-yellow/80 font-bungee text-2xl leading-tight mb-2">
              &ldquo;Sol, parque, pelota, gente.&rdquo;
            </blockquote>
            <p className="text-white/35 text-sm font-poppins">Eso es Altinha BSAS.</p>
            <div
              className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-althina-yellow via-althina-orange to-althina-green"
              aria-hidden
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-poppins">
            © {year} Altinha BSAS. Todos los derechos reservados.
          </p>
          <p className="text-white/25 text-xs font-poppins flex items-center gap-1.5">
            Hecho con{" "}
            <span className="text-althina-orange" aria-label="amor">♥</span>{" "}
            en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
