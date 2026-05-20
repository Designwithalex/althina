const steps = [
  {
    num: "01",
    title: "Formá el grupo",
    desc: "Reunís a cuantas personas quieras, mínimo dos. La ronda puede ser chica o grande: mientras más, más divertido.",
    color: "text-althina-yellow",
    border: "border-althina-yellow/30",
    glow: "group-hover:border-althina-yellow",
  },
  {
    num: "02",
    title: "Elegí el espacio",
    desc: "Un parque, una cancha, la calle. No necesitás nada especial: con espacio libre alcanza y sobra.",
    color: "text-althina-orange",
    border: "border-althina-orange/30",
    glow: "group-hover:border-althina-orange",
  },
  {
    num: "03",
    title: "Lanzá la pelota",
    desc: "El juego empieza con el primer pase. Podés usar manos, cabeza, pie: lo que el reglamento del grupo decida.",
    color: "text-althina-green",
    border: "border-althina-green/30",
    glow: "group-hover:border-althina-green",
  },
  {
    num: "04",
    title: "Mantené la racha",
    desc: "¿La pelota tocó el piso? Empezamos de cero y batimos el récord anterior. El objetivo: llegar más lejos cada vez.",
    color: "text-althina-coral",
    border: "border-althina-coral/30",
    glow: "group-hover:border-althina-coral",
  },
];

export default function HowToPlay() {
  return (
    <section
      id="como-jugar"
      className="py-24 bg-althina-dark relative overflow-hidden"
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFCB3A 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-althina-orange/15 text-althina-orange font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase border border-althina-orange/20">
            Las reglas
          </span>
          <h2 className="font-bungee text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
            Cómo se{" "}
            <span className="text-althina-yellow">juega</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-md mx-auto font-poppins">
            Cuatro pasos. Así de simple.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <article
              key={i}
              className={`group relative bg-white/5 border ${step.border} ${step.glow} rounded-3xl p-6 hover:bg-white/10 transition-all duration-300`}
            >
              <span
                className={`font-bungee text-7xl ${step.color} opacity-25 leading-none block`}
                aria-hidden
              >
                {step.num}
              </span>
              <h3
                className={`font-bungee text-2xl ${step.color} mt-1 mb-3 tracking-wide`}
              >
                {step.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed font-poppins">
                {step.desc}
              </p>

              {/* Arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center"
                  aria-hidden
                >
                  <svg
                    className="w-4 h-4 text-white/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/40 mb-5 font-poppins">
            ¿Muy simple? Probalo una vez y vas a querer más.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-althina-yellow hover:bg-althina-orange text-althina-dark hover:text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Quiero jugar ahora
          </a>
        </div>
      </div>
    </section>
  );
}

