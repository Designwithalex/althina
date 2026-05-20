import Image from "next/image";

const images = [
  {
    src: "/images/playa-jugador.jpg",
    alt: "Jugador de Altinha en la playa de Ipanema con luz dorada",
    tall: true,
  },
  {
    src: "/images/silueta-atardecer.jpg",
    alt: "Silueta de jugador haciendo una bicicleta al atardecer en Río",
    tall: false,
  },
  {
    src: "/images/cancha-atardecer.png",
    alt: "Cancha de fútbol en la favela al atardecer",
    tall: false,
  },
  {
    src: "/images/favela-calle.jpg",
    alt: "Calle de la favela con murales coloridos y niños jugando",
    tall: false,
  },
  {
    src: "/images/cancha-graffiti.png",
    alt: "Cancha urbana con graffitis y una pelota en el piso",
    tall: true,
  },
];

const overlays = [
  "from-althina-yellow/60",
  "from-althina-orange/60",
  "from-althina-green/60",
  "from-althina-yellow/60",
  "from-althina-coral/60",
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-althina-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-althina-yellow/15 text-althina-yellow font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase border border-althina-yellow/20">
            La vibe
          </span>
          <h2 className="font-bungee text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
            El espíritu{" "}
            <span className="text-althina-orange">Althina</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto font-poppins">
            Sol, parque, risas y la pelota en el aire. Así se vive Althina.
          </p>
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {images.slice(0, 4).map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="50vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${overlays[i]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden
              />
            </div>
          ))}
        </div>

        {/* Desktop: asymmetric grid */}
        <div className="hidden md:grid grid-cols-3 gap-3" style={{ gridTemplateRows: "320px 320px" }}>
          {/* Col 1: spans 2 rows — tall portrait */}
          <div className="row-span-2 group relative overflow-hidden rounded-3xl">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              sizes="33vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${overlays[0]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              aria-hidden
            />
            <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-bungee text-white text-xl tracking-wide drop-shadow-lg">
                Altinha en la playa ✨
              </span>
            </div>
          </div>

          {/* Col 2, row 1 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              sizes="33vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${overlays[1]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              aria-hidden
            />
          </div>

          {/* Col 3, row 1 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              sizes="33vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${overlays[2]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              aria-hidden
            />
          </div>

          {/* Col 2, row 2 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              sizes="33vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${overlays[3]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              aria-hidden
            />
          </div>

          {/* Col 3, row 2 */}
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src={images[4].src}
              alt={images[4].alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              sizes="33vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${overlays[4]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              aria-hidden
            />
            <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-bungee text-white text-xl tracking-wide drop-shadow-lg">
                La cancha nos llama ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

