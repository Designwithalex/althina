const events = [
  {
    date: { day: "15", month: "JUN" },
    title: "Torneo de Althina",
    location: "Parque Centenario, CABA",
    desc: "Primera edición del torneo oficial. Grupos de hasta 6 personas. Inscripción gratuita.",
    gradient: "from-althina-yellow to-althina-orange",
    tag: "Torneo",
    tagBg: "bg-althina-orange/15 text-althina-orange",
  },
  {
    date: { day: "29", month: "JUN" },
    title: "Tarde Abierta de Althina",
    location: "Bosques de Palermo, CABA",
    desc: "Juntada casual para todos los niveles. Traé amigos, traé la mejor onda. Entrada libre.",
    gradient: "from-althina-green to-althina-lime",
    tag: "Abierto",
    tagBg: "bg-althina-green/15 text-althina-green",
  },
  {
    date: { day: "13", month: "JUL" },
    title: "Althina Night",
    location: "Centro Cultural Recoleta",
    desc: "Una noche especial: Althina + música en vivo + feria artesanal. El evento más vibrante del año.",
    gradient: "from-althina-coral to-althina-orange",
    tag: "Especial",
    tagBg: "bg-althina-coral/15 text-althina-coral",
  },
];

export default function Events() {
  return (
    <section id="eventos" className="py-24 bg-althina-cream relative overflow-hidden">
      <div
        className="absolute -top-24 right-0 w-80 h-80 bg-althina-orange/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="inline-block bg-althina-green text-white font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
            Agenda
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-althina-dark leading-none">
            Próximos{" "}
            <span className="text-althina-green">eventos</span>
          </h2>
          <p className="mt-4 text-althina-dark/60 text-lg max-w-xl font-outfit">
            Encontrá el próximo evento cerca tuyo y sumate a la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Color top bar */}
              <div className={`h-2 bg-gradient-to-r ${event.gradient}`} aria-hidden />

              <div className="p-6 flex flex-col flex-1">
                {/* Date + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`bg-gradient-to-br ${event.gradient} rounded-2xl p-3 text-center min-w-[58px] shadow-md`}
                  >
                    <span className="block font-bebas text-2xl text-white leading-none">
                      {event.date.day}
                    </span>
                    <span className="block text-white/80 text-xs font-bold tracking-widest">
                      {event.date.month}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span
                      className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1 ${event.tagBg}`}
                    >
                      {event.tag}
                    </span>
                    <h3 className="font-bebas text-xl text-althina-dark tracking-wide leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-althina-dark/50 text-xs flex items-center gap-1 mt-1">
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </p>
                  </div>
                </div>

                <p className="text-althina-dark/60 text-sm leading-relaxed mb-6 font-outfit flex-1">
                  {event.desc}
                </p>

                <button
                  className={`w-full bg-gradient-to-r ${event.gradient} text-white font-bold py-3 rounded-2xl transition-all duration-200 text-sm tracking-wide opacity-90 hover:opacity-100 hover:-translate-y-0.5 shadow-md hover:shadow-lg`}
                  type="button"
                >
                  Más info →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
