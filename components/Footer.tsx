import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#que-es", label: "¿Qué es Althina?" },
  { href: "#como-jugar", label: "Cómo se juega" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-althina-dark border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand — logo solo, sin texto al lado */}
          <div>
            <Link href="#hero" aria-label="Althina BSAS – volver al inicio" className="inline-block mb-5 group">
              <Image
                src="/logo.jpeg"
                alt="Althina BSAS"
                width={64}
                height={64}
                className="rounded-full ring-2 ring-althina-yellow/30 group-hover:ring-althina-yellow/70 transition-all hover:scale-105"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-outfit">
              La pelota nunca toca el piso.
              <br />
              Buenos Aires, Argentina 🇦🇷
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bebas text-base tracking-widest text-white/50 uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-althina-yellow transition-colors text-sm font-outfit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tagline */}
          <div>
            <h4 className="font-bebas text-base tracking-widest text-white/50 uppercase mb-4">
              El espíritu
            </h4>
            <blockquote className="text-althina-yellow/80 font-bebas text-2xl leading-tight mb-2">
              &ldquo;Sol, parque, pelota, gente.&rdquo;
            </blockquote>
            <p className="text-white/35 text-sm font-outfit">Eso es Althina BSAS.</p>
            <div
              className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-althina-yellow via-althina-orange to-althina-green"
              aria-hidden
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-outfit">
            © {year} Althina BSAS. Todos los derechos reservados.
          </p>
          <p className="text-white/25 text-xs font-outfit flex items-center gap-1.5">
            Hecho con{" "}
            <span className="text-althina-orange" aria-label="amor">♥</span>{" "}
            en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
