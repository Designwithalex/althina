const cards = [
  {
    emoji: "🌞",
    title: "Alegría y comunidad",
    desc: "Cada partido es un encuentro. La energía que genera Althina une a la gente de formas que pocos juegos logran.",
    bg: "bg-althina-yellow",
    text: "text-althina-dark",
    shadow: "hover:shadow-althina-yellow/40",
  },
  {
    emoji: "🎯",
    title: "Desafío y habilidad",
    desc: "Fácil de empezar, difícil de perfeccionar. Siempre hay un nivel más para alcanzar, una racha más larga que superar.",
    bg: "bg-althina-orange",
    text: "text-white",
    shadow: "hover:shadow-althina-orange/40",
  },
  {
    emoji: "🇧🇷",
    title: "Raíces brasileras",
    desc: "Nació en la cultura de Brasil, donde el deporte, la música y la fiesta se mezclan de manera natural y espontánea.",
    bg: "bg-althina-green",
    text: "text-white",
    shadow: "hover:shadow-althina-green/40",
  },
  {
    emoji: "📍",
    title: "Arraigo porteño",
    desc: "Althina encontró en Buenos Aires la ciudad perfecta: vibrante, apasionada y siempre lista para adoptar lo mejor.",
    bg: "bg-althina-dark",
    text: "text-althina-yellow",
    shadow: "hover:shadow-althina-dark/40",
  },
];

export default function WhyAlthina() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top accent bar */}
      <div
        className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-althina-yellow via-althina-orange to-althina-green"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-althina-yellow text-althina-dark font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
            Los valores
          </span>
          <h2 className="font-bungee text-5xl sm:text-6xl lg:text-7xl text-althina-dark leading-none">
            ¿Por qué{" "}
            <span className="text-althina-orange">Althina?</span>
          </h2>
          <p className="mt-4 text-althina-dark/60 text-lg max-w-xl mx-auto font-poppins">
            Más que un juego: una forma de encontrarse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <article
              key={i}
              className={`group ${card.bg} ${card.text} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${card.shadow} relative overflow-hidden cursor-default`}
            >
              {/* Background emoji watermark */}
              <div
                className="absolute -bottom-4 -right-3 text-8xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none"
                aria-hidden
              >
                {card.emoji}
              </div>

              <div className="text-4xl mb-5" aria-hidden>
                {card.emoji}
              </div>
              <h3 className="font-bungee text-2xl tracking-wide mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80 font-poppins">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

