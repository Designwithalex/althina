const features = [
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden>
        <circle cx="30" cy="30" r="24" fill="#FFCB3A" fillOpacity="0.15" />
        <circle cx="30" cy="30" r="16" fill="#FFCB3A" fillOpacity="0.3" />
        <circle cx="30" cy="30" r="9" fill="#FFCB3A" />
        <path d="M30 12 Q38 21 30 30 Q22 21 30 12" fill="none" stroke="#FF6B2B" strokeWidth="1.5" />
        <path d="M12 30 Q21 22 30 30 Q21 38 12 30" fill="none" stroke="#1A8C4E" strokeWidth="1.5" />
        <path d="M48 30 Q39 22 30 30 Q39 38 48 30" fill="none" stroke="#1A8C4E" strokeWidth="1.5" />
      </svg>
    ),
    title: "La pelota vuela",
    text: "El objetivo es hacer pases aéreos sin que la pelota toque el suelo. Simple de entender, difícil de dominar.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden>
        <circle cx="21" cy="20" r="9" fill="#1A8C4E" fillOpacity="0.2" />
        <circle cx="39" cy="20" r="9" fill="#1A8C4E" fillOpacity="0.2" />
        <circle cx="30" cy="36" r="9" fill="#1A8C4E" fillOpacity="0.2" />
        <circle cx="21" cy="20" r="6" fill="#1A8C4E" />
        <circle cx="39" cy="20" r="6" fill="#1A8C4E" />
        <circle cx="30" cy="36" r="6" fill="#1A8C4E" />
      </svg>
    ),
    title: "En grupo",
    text: "Se juega en ronda o en equipos. Cuantos más, mejor. El festejo es parte del juego.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden>
        <circle cx="30" cy="18" r="9" fill="#FF6B2B" fillOpacity="0.2" />
        <circle cx="30" cy="18" r="6" fill="#FF6B2B" />
        <line x1="30" y1="27" x2="19" y2="44" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="27" x2="41" y2="44" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="33" x2="14" y2="37" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="33" x2="46" y2="37" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Puro movimiento",
    text: "Coordinación, timing y reflejos. Cada pase es un desafío. Cada recepción, un logro.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden>
        <circle cx="30" cy="22" r="14" fill="#FFCB3A" fillOpacity="0.25" />
        <path
          d="M30 8 L32.5 18 L43 18 L34.5 24.5 L37.5 35 L30 28.5 L22.5 35 L25.5 24.5 L17 18 L27.5 18 Z"
          fill="#FFCB3A"
        />
        <circle cx="30" cy="50" r="5" fill="#FFCB3A" fillOpacity="0.5" />
      </svg>
    ),
    title: "Alegría garantizada",
    text: "No importa el nivel: Althina siempre termina en risas, música y ganas de una vuelta más.",
  },
];

export default function WhatIsAlthina() {
  return (
    <section id="que-es" className="py-24 bg-althina-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-althina-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-althina-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block bg-althina-orange text-white font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
            El juego
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-althina-dark leading-none mb-6">
            ¿Qué es{" "}
            <span className="text-althina-green">Althina?</span>
          </h2>
          <p className="text-lg sm:text-xl text-althina-dark/70 leading-relaxed font-outfit">
            Nació en Brasil, cruzó el Río de la Plata y encontró su lugar entre
            las canchas y parques de Buenos Aires. Althina es un juego de pases
            aéreos donde el único objetivo es simple y absoluto:{" "}
            <strong className="text-althina-orange">
              que la pelota no toque el piso
            </strong>
            .
          </p>
          <p className="mt-4 text-lg text-althina-dark/60 leading-relaxed font-outfit">
            Sin equipamiento especial, sin edad mínima, sin excusas. Solo vos,
            el grupo y la pelota en el aire.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-althina-dark/5"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bebas text-2xl text-althina-dark mb-2 tracking-wide">
                {f.title}
              </h3>
              <p className="text-althina-dark/60 text-sm leading-relaxed font-outfit">
                {f.text}
              </p>
            </article>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mt-14 bg-gradient-to-r from-althina-yellow to-althina-orange rounded-3xl p-8 sm:p-12 text-center">
          <p className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            &ldquo;Una pelota, un grupo, mil sonrisas&rdquo;
          </p>
          <cite className="block mt-3 text-white/80 font-outfit not-italic text-sm sm:text-base">
            — Así se describe Althina en las canchas de BSAS
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
