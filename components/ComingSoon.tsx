const items = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
        <circle cx="24" cy="24" r="20" fill="#FFCB3A" fillOpacity="0.15" />
        {/* Trophy */}
        <path
          d="M16 10 h16 v12 a8 8 0 0 1-16 0 V10Z"
          fill="none"
          stroke="#FFCB3A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M16 14 H10 a4 4 0 0 0 4 6 l2-1" fill="none" stroke="#FFCB3A" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 14 H38 a4 4 0 0 1-4 6 l-2-1" fill="none" stroke="#FFCB3A" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="30" x2="24" y2="37" stroke="#FFCB3A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="37" x2="30" y2="37" stroke="#FFCB3A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    tag: "Torneos",
    title: "Primer torneo oficial",
    desc: "Liga Althina BSAS con formato grupal, categorías por nivel y premios. Inscripción próximamente.",
    color: "border-althina-yellow/30 hover:border-althina-yellow",
    tagColor: "bg-althina-yellow/10 text-althina-yellow",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
        <circle cx="24" cy="24" r="20" fill="#FF6B2B" fillOpacity="0.15" />
        {/* T-shirt */}
        <path
          d="M14 16 L10 22 L16 24 L16 38 L32 38 L32 24 L38 22 L34 16 L28 20 Q24 22 20 20 Z"
          fill="none"
          stroke="#FF6B2B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "Merch",
    title: "Ropa y accesorios",
    desc: "Remeras, gorras y pelotas con la identidad Althina. Edición limitada, diseño 100% porteño-brasilero.",
    color: "border-althina-orange/30 hover:border-althina-orange",
    tagColor: "bg-althina-orange/10 text-althina-orange",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
        <circle cx="24" cy="24" r="20" fill="#1A8C4E" fillOpacity="0.15" />
        {/* Calendar */}
        <rect x="10" y="14" width="28" height="24" rx="3" fill="none" stroke="#1A8C4E" strokeWidth="2.5" />
        <line x1="10" y1="21" x2="38" y2="21" stroke="#1A8C4E" strokeWidth="2" />
        <line x1="17" y1="10" x2="17" y2="18" stroke="#1A8C4E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="31" y1="10" x2="31" y2="18" stroke="#1A8C4E" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="18" cy="28" r="2" fill="#1A8C4E" />
        <circle cx="24" cy="28" r="2" fill="#1A8C4E" />
        <circle cx="30" cy="28" r="2" fill="#1A8C4E" />
        <circle cx="18" cy="34" r="2" fill="#1A8C4E" />
      </svg>
    ),
    tag: "Eventos",
    title: "Fechas y encuentros",
    desc: "Juntadas abiertas, clínicas para principiantes y noches especiales en distintos barrios de BSAS.",
    color: "border-althina-green/30 hover:border-althina-green",
    tagColor: "bg-althina-green/10 text-althina-green",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" aria-hidden>
        <circle cx="24" cy="24" r="20" fill="#FF4D6A" fillOpacity="0.15" />
        {/* Play / community */}
        <circle cx="24" cy="24" r="12" fill="none" stroke="#FF4D6A" strokeWidth="2.5" />
        <path d="M20 18 L32 24 L20 30 Z" fill="#FF4D6A" />
      </svg>
    ),
    tag: "Comunidad",
    title: "Canal y contenido",
    desc: "Videos de jugadas, highlights de torneos y tutoriales para aprender los trucos del juego aéreo.",
    color: "border-althina-coral/30 hover:border-althina-coral",
    tagColor: "bg-althina-coral/10 text-althina-coral",
  },
];

export default function ComingSoon() {
  return (
    <section
      id="proximamente"
      className="py-24 bg-althina-dark relative overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFCB3A 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-althina-yellow/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-althina-green/5 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-althina-yellow/10 text-althina-yellow font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase border border-althina-yellow/20">
            Próximamente
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
            Se viene{" "}
            <span className="text-althina-yellow">todo</span>
          </h2>
          <p className="mt-4 text-white/45 text-lg max-w-xl mx-auto font-outfit">
            Torneos, merch, eventos y comunidad. Althina BSAS está creciendo — estate atento.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {items.map((item, i) => (
            <article
              key={i}
              className={`group bg-white/5 border ${item.color} rounded-3xl p-6 transition-all duration-300 hover:bg-white/8`}
            >
              <div className="mb-5">{item.icon}</div>
              <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${item.tagColor}`}>
                {item.tag}
              </span>
              <h3 className="font-bebas text-xl text-white tracking-wide mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-outfit">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA notificación */}
        <div className="bg-gradient-to-r from-althina-yellow/10 via-althina-orange/10 to-althina-green/10 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bebas text-2xl sm:text-3xl text-white leading-tight mb-1">
              ¿Querés enterarte primero?
            </p>
            <p className="text-white/50 font-outfit text-sm">
              Seguinos en Instagram y activá las notificaciones.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-althina-dark hover:bg-althina-yellow font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
